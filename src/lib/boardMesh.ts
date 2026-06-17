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

  for (const det of detections) {
    const p = pieceAnchor(det)
    let bestR = -1
    let bestF = -1
    let bestD = Infinity
    for (let r = 0; r < RANKS; r++) {
      for (let f = 0; f < FILES; f++) {
        const d = dist(p, mesh[r][f])
        if (d < bestD) {
          bestD = d
          bestR = r
          bestF = f
        }
      }
    }
    if (bestR < 0 || (tol > 0 && bestD > tol)) {
      dropped.push(det)
      continue
    }
    const existing = board[bestR][bestF]
    if (!existing || det.score > existing.score) {
      board[bestR][bestF] = { ...det, file: bestF, rank: bestR }
    }
  }

  const placed: PlacedPiece[] = []
  for (let r = 0; r < RANKS; r++) {
    for (let f = 0; f < FILES; f++) {
      if (board[r][f]) placed.push(board[r][f] as PlacedPiece)
    }
  }
  return { board, placed, dropped }
}
