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
 * Decode a YOLO-pose head for the single-class "board" model with 4 corner
 * keypoints. Handles two export layouts:
 *
 *   Raw      [1, 17, N]  — cx,cy,w,h, score, (kx,ky,kc)×4         (4+1+12)
 *   End2end  [1, N, 18]  — x1,y1,x2,y2, score, cls, (kx,ky,kc)×4  (4+1+1+12)
 *
 * YOLO26 exports the NMS-free (end2end) form by default. The score lives at
 * attribute index 4 in both; keypoints start at 5 (raw) or 6 (end2end).
 * Returns the highest-scoring board's 4 corners in ORIGINAL image pixels.
 */
export function decodePose(
  output: Float32Array,
  dims: readonly number[],
  lb: LetterboxInfo,
  scoreThreshold = 0.25,
): BoardCorners | null {
  const [, d1, d2] = dims

  let attrs: number
  let kptOffset: number
  if (d1 === 17 || d2 === 17) {
    attrs = 17
    kptOffset = 5
  } else if (d1 === 18 || d2 === 18) {
    attrs = 18
    kptOffset = 6
  } else {
    return null // unexpected layout
  }

  const channelsFirst = d1 === attrs
  const numBoxes = channelsFirst ? d2 : d1
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
  for (let k = 0; k < 4; k++) {
    const kx = at(kptOffset + k * 3, bestBox)
    const ky = at(kptOffset + k * 3 + 1, bestBox)
    pts.push(toOriginal(kx, ky))
  }
  return orderCorners(pts)
}
