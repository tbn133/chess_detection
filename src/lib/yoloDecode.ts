import { PIECE_TYPE_BY_ID } from './constants'
import type { Detection } from './types'

/** Letterbox transform used to map model-space boxes back to the source image. */
export interface LetterboxInfo {
  scale: number // source -> model scale factor
  padX: number // left padding added in model space
  padY: number // top padding added in model space
}

function toOriginal(x: number, y: number, lb: LetterboxInfo) {
  return { x: (x - lb.padX) / lb.scale, y: (y - lb.padY) / lb.scale }
}

/**
 * Decode a raw Ultralytics YOLO detection-head output into detections in the
 * ORIGINAL image coordinate space. Handles three export layouts:
 *
 *   A. [1, 4+nc, N]  — channels-first raw head (YOLOv8/11/26 default export)
 *   B. [1, N, 4+nc]  — channels-last raw head
 *   C. [1, N, 6]     — end-to-end / NMS-free head: x1,y1,x2,y2,score,classId
 *
 * For A/B the boxes are cx,cy,w,h in model-input pixels and still need NMS.
 * For C the boxes are already xyxy in model-input pixels and pre-filtered.
 */
export function decodeYolo(
  output: Float32Array,
  dims: readonly number[],
  nc: number,
  lb: LetterboxInfo,
  scoreThreshold = 0.25,
): Detection[] {
  const [, d1, d2] = dims
  const attrs = 4 + nc

  // Layout C: end-to-end NMS-free output (last dim 6).
  if (d2 === 6 && d1 !== attrs) {
    return decodeEnd2End(output, d1, lb, scoreThreshold)
  }

  // Determine orientation for the raw head.
  const channelsFirst = d1 === attrs
  const numBoxes = channelsFirst ? d2 : d1
  const stride = channelsFirst ? numBoxes : attrs

  const at = (box: number, attr: number): number =>
    channelsFirst ? output[attr * stride + box] : output[box * stride + attr]

  const dets: Detection[] = []
  for (let i = 0; i < numBoxes; i++) {
    // Best class.
    let bestId = 0
    let bestScore = -Infinity
    for (let c = 0; c < nc; c++) {
      const s = at(i, 4 + c)
      if (s > bestScore) {
        bestScore = s
        bestId = c
      }
    }
    if (bestScore < scoreThreshold) continue

    const cx = at(i, 0)
    const cy = at(i, 1)
    const w = at(i, 2)
    const h = at(i, 3)
    const a = toOriginal(cx - w / 2, cy - h / 2, lb)
    const b = toOriginal(cx + w / 2, cy + h / 2, lb)
    dets.push(makeDetection(a.x, a.y, b.x, b.y, bestScore, bestId))
  }
  return dets
}

function decodeEnd2End(
  output: Float32Array,
  numBoxes: number,
  lb: LetterboxInfo,
  scoreThreshold: number,
): Detection[] {
  const dets: Detection[] = []
  for (let i = 0; i < numBoxes; i++) {
    const o = i * 6
    const score = output[o + 4]
    if (score < scoreThreshold) continue
    const classId = Math.round(output[o + 5])
    const a = toOriginal(output[o], output[o + 1], lb)
    const b = toOriginal(output[o + 2], output[o + 3], lb)
    dets.push(makeDetection(a.x, a.y, b.x, b.y, score, classId))
  }
  return dets
}

function makeDetection(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  score: number,
  classId: number,
): Detection {
  const info = PIECE_TYPE_BY_ID[classId]
  return {
    x1,
    y1,
    x2,
    y2,
    score,
    classId,
    type: info ? info.type : ('xe' as Detection['type']),
  }
}
