import { FILES, RANKS } from './constants'
import { applyHomography, computeHomography } from './homography'
import type { ColoredDetection, MappingResult } from './boardMapping'
import { pieceAnchor } from './boardMapping'
import type { Board, BoardCorners, BoardMesh, PlacedPiece, Point } from './types'

/** Build a regular 90-point mesh from the 4 board corners (via homography). */
export function meshFromCorners(corners: BoardCorners): BoardMesh {
  const H = computeHomography(
    [
      { x: 0, y: 0 },
      { x: FILES - 1, y: 0 },
      { x: FILES - 1, y: RANKS - 1 },
      { x: 0, y: RANKS - 1 },
    ],
    [corners.topLeft, corners.topRight, corners.bottomRight, corners.bottomLeft],
  )
  const mesh: BoardMesh = []
  for (let r = 0; r < RANKS; r++) {
    const row: Point[] = []
    for (let f = 0; f < FILES; f++) row.push(applyHomography(H, { x: f, y: r }))
    mesh.push(row)
  }
  return mesh
}

function dist(a: Point, b: Point): number {
  return Math.hypot(a.x - b.x, a.y - b.y)
}

export type Orientation = 'portrait' | 'landscape'

/**
 * Re-label the four board corners for the chosen orientation. In 'portrait'
 * the 9 files run along the top edge (TL→TR). In 'landscape' the board is
 * rotated 90°, so the 9 files run down the left edge and the 10 ranks run along
 * the bottom — achieved by cycling the corner roles.
 */
export function orientCorners(c: BoardCorners, orientation: Orientation): BoardCorners {
  if (orientation === 'portrait') return c
  return {
    topLeft: c.bottomLeft,
    topRight: c.topLeft,
    bottomRight: c.topRight,
    bottomLeft: c.bottomRight,
  }
}

/** Build a mesh from corners, honouring the chosen orientation. */
export function meshFromCornersOriented(c: BoardCorners, orientation: Orientation): BoardMesh {
  return meshFromCorners(orientCorners(c, orientation))
}

/**
 * Guess orientation from the quad's edge lengths. A xiangqi board's playing
 * area is 8 units wide × 9 tall, so upright it is slightly taller than wide;
 * when the detected quad is wider than tall, the board was shot rotated.
 */
export function guessOrientation(c: BoardCorners): Orientation {
  const w = (dist(c.topLeft, c.topRight) + dist(c.bottomLeft, c.bottomRight)) / 2
  const h = (dist(c.topLeft, c.bottomLeft) + dist(c.topRight, c.bottomRight)) / 2
  return w > h ? 'landscape' : 'portrait'
}

/**
 * Estimate the four board corners from a cloud of detected piece centres.
 * Pieces lie on the 9x10 lattice, so the points extreme along each diagonal
 * approximate the corner intersections. This is a good auto-guess for a roughly
 * upright board (corner pieces present); the user refines it afterwards.
 * Returns null when there are too few points to estimate.
 */
export function estimateCornersFromPoints(points: Point[]): BoardCorners | null {
  if (points.length < 4) return null
  let tl = points[0]
  let tr = points[0]
  let br = points[0]
  let bl = points[0]
  for (const p of points) {
    if (p.x + p.y < tl.x + tl.y) tl = p
    if (p.x + p.y > br.x + br.y) br = p
    if (p.x - p.y > tr.x - tr.y) tr = p
    if (p.x - p.y < bl.x - bl.y) bl = p
  }
  return { topLeft: tl, topRight: tr, bottomRight: br, bottomLeft: bl }
}

/** Average spacing between adjacent mesh intersections (image pixels). */
export function meanSpacing(mesh: BoardMesh): number {
  let sum = 0
  let n = 0
  for (let r = 0; r < RANKS; r++) {
    for (let f = 0; f < FILES; f++) {
      if (f + 1 < FILES) {
        sum += dist(mesh[r][f], mesh[r][f + 1])
        n++
      }
      if (r + 1 < RANKS) {
        sum += dist(mesh[r][f], mesh[r + 1][f])
        n++
      }
    }
  }
  return n ? sum / n : 0
}

function emptyBoard(): Board {
  return Array.from({ length: RANKS }, () => Array.from({ length: FILES }, () => null))
}

/**
 * Assign coloured detections to the nearest mesh intersection (in image space).
 * Works for any deformed mesh. A detection is dropped if it sits farther than
 * `toleranceFactor` × mean spacing from every intersection. Conflicts on the
 * same intersection are resolved by the higher detection score.
 */
export function mapDetectionsToMesh(
  detections: ColoredDetection[],
  mesh: BoardMesh,
  toleranceFactor = 0.7,
): MappingResult {
  const board = emptyBoard()
  const dropped: ColoredDetection[] = []
  const tol = meanSpacing(mesh) * toleranceFactor

  // Assign highest-confidence detections first. If a detection's nearest
  // intersection is already taken (two pieces snapping to one node when the
  // grid is slightly off), fall back to the nearest FREE intersection within
  // tolerance instead of dropping the piece.
  const ordered = [...detections].sort((a, b) => b.score - a.score)
  for (const det of ordered) {
    const p = pieceAnchor(det)
    const candidates: { r: number; f: number; d: number }[] = []
    for (let r = 0; r < RANKS; r++) {
      for (let f = 0; f < FILES; f++) {
        candidates.push({ r, f, d: dist(p, mesh[r][f]) })
      }
    }
    candidates.sort((a, b) => a.d - b.d)
    const slot = candidates.find((c) => !board[c.r][c.f] && (tol <= 0 || c.d <= tol))
    if (!slot) {
      dropped.push(det)
      continue
    }
    board[slot.r][slot.f] = { ...det, file: slot.f, rank: slot.r }
  }

  const placed: PlacedPiece[] = []
  for (let r = 0; r < RANKS; r++) {
    for (let f = 0; f < FILES; f++) {
      if (board[r][f]) placed.push(board[r][f] as PlacedPiece)
    }
  }
  return { board, placed, dropped }
}
