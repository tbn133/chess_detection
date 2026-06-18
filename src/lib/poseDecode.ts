import type { LetterboxInfo } from './yoloDecode'
import type { BoardCorners, Point } from './types'

/** Order 4 points as TL, TR, BR, BL via diagonal extremes. */
function orderCorners(pts: Point[]): BoardCorners {
  let tl = pts[0]
  let tr = pts[0]
  let br = pts[0]
  let bl = pts[0]
  for (const p of pts) {
    if (p.x + p.y < tl.x + tl.y) tl = p
    if (p.x + p.y > br.x + br.y) br = p
    if (p.x - p.y > tr.x - tr.y) tr = p
    if (p.x - p.y < bl.x - bl.y) bl = p
  }
  return { topLeft: tl, topRight: tr, bottomRight: br, bottomLeft: bl }
}

/**
 * Decode a YOLO-pose detection head for the single-class "board" model with 4
 * corner keypoints. Channel layout per anchor (Ultralytics pose, nms=False):
 *   [cx, cy, w, h, score, (kx,ky,kconf) × 4]  → 4 + 1 + 12 = 17 attributes.
 * Returns the highest-scoring board's 4 corners in ORIGINAL image pixels.
 */
export function decodePose(
  output: Float32Array,
  dims: readonly number[],
  lb: LetterboxInfo,
  scoreThreshold = 0.25,
): BoardCorners | null {
  const NKPT = 4
  const attrs = 4 + 1 + NKPT * 3 // 17

  const [, d1, d2] = dims
  let numBoxes: number
  let channelsFirst: boolean
  if (d1 === attrs) {
    channelsFirst = true
    numBoxes = d2
  } else if (d2 === attrs) {
    channelsFirst = false
    numBoxes = d1
  } else {
    return null // unexpected layout
  }

  const at = (attr: number, box: number) =>
    channelsFirst ? output[attr * numBoxes + box] : output[box * attrs + attr]

  let bestBox = -1
  let bestScore = scoreThreshold
  for (let i = 0; i < numBoxes; i++) {
    const s = at(4, i)
    if (s > bestScore) {
      bestScore = s
      bestBox = i
    }
  }
  if (bestBox < 0) return null

  const toOriginal = (x: number, y: number): Point => ({
    x: (x - lb.padX) / lb.scale,
    y: (y - lb.padY) / lb.scale,
  })

  const pts: Point[] = []
  for (let k = 0; k < NKPT; k++) {
    const kx = at(5 + k * 3, bestBox)
    const ky = at(6 + k * 3, bestBox)
    pts.push(toOriginal(kx, ky))
  }
  return orderCorners(pts)
}
