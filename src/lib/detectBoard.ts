import { loadOpenCV } from './opencvLoader'
import type { BoardCorners, Point } from './types'

/** Order 4 polygon points as TL, TR, BR, BL using diagonal extremes. */
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
 * Detect the board's quadrilateral in the (unmodified) photo using OpenCV.js:
 * grayscale → blur → Canny → dilate → contours → largest convex 4-gon that
 * covers a big share of the frame. Returns the board corners in ORIGINAL image
 * pixels, or null if no confident quad is found. The image itself is never
 * altered — we only read pixels.
 */
export async function detectBoardCorners(img: HTMLImageElement): Promise<BoardCorners | null> {
  const cv = await loadOpenCV()

  let src: any, small: any, gray: any, edges: any, kernel: any, contours: any, hierarchy: any
  try {
    src = cv.imread(img)
    const W = src.cols
    const H = src.rows
    // Work on a downscaled copy for speed; scale corners back up afterwards.
    const scale = Math.min(1, 900 / Math.max(W, H))
    small = new cv.Mat()
    cv.resize(src, small, new cv.Size(Math.round(W * scale), Math.round(H * scale)))

    gray = new cv.Mat()
    cv.cvtColor(small, gray, cv.COLOR_RGBA2GRAY)
    cv.GaussianBlur(gray, gray, new cv.Size(5, 5), 0)
    edges = new cv.Mat()
    cv.Canny(gray, edges, 50, 150)
    kernel = cv.getStructuringElement(cv.MORPH_RECT, new cv.Size(5, 5))
    cv.dilate(edges, edges, kernel)

    contours = new cv.MatVector()
    hierarchy = new cv.Mat()
    cv.findContours(edges, contours, hierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE)

    const frameArea = small.rows * small.cols
    let best: Point[] | null = null
    let bestArea = 0

    for (let i = 0; i < contours.size(); i++) {
      const c = contours.get(i)
      const area = cv.contourArea(c)
      if (area > 0.15 * frameArea) {
        const peri = cv.arcLength(c, true)
        const approx = new cv.Mat()
        cv.approxPolyDP(c, approx, 0.02 * peri, true)
        if (approx.rows === 4 && cv.isContourConvex(approx) && area > bestArea) {
          bestArea = area
          best = []
          for (let j = 0; j < 4; j++) {
            best.push({
              x: approx.data32S[j * 2] / scale,
              y: approx.data32S[j * 2 + 1] / scale,
            })
          }
        }
        approx.delete()
      }
      c.delete()
    }

    return best ? orderCorners(best) : null
  } finally {
    src?.delete()
    small?.delete()
    gray?.delete()
    edges?.delete()
    kernel?.delete()
    contours?.delete()
    hierarchy?.delete()
  }
}
