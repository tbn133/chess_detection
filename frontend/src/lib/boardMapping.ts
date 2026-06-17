import { FILES, RANKS } from './constants'
import { applyHomography, computeHomography } from './homography'
import type { Board, BoardCorners, Detection, PieceColor, PlacedPiece, Point } from './types'

/** A detection enriched with its resolved colour, ready to place on the board. */
export type ColoredDetection = Detection & { color: PieceColor }

/** The reference point of a piece used for grid assignment (box centre). */
export function pieceAnchor(d: Detection): Point {
  return { x: (d.x1 + d.x2) / 2, y: (d.y1 + d.y2) / 2 }
}

/**
 * Build the homography that maps IMAGE pixel coordinates onto the GRID space,
 * where the 9x10 intersection grid spans file 0..8 (x) and rank 0..9 (y).
 * The four corners must mark the four CORNER intersections of the board.
 */
export function gridHomography(corners: BoardCorners) {
  const src = [corners.topLeft, corners.topRight, corners.bottomRight, corners.bottomLeft]
  const dst: Point[] = [
    { x: 0, y: 0 }, // top-left  -> file 0, rank 0
    { x: FILES - 1, y: 0 }, // top-right -> file 8, rank 0
    { x: FILES - 1, y: RANKS - 1 }, // bottom-right -> file 8, rank 9
    { x: 0, y: RANKS - 1 }, // bottom-left -> file 0, rank 9
  ]
  return computeHomography(src, dst)
}

function emptyBoard(): Board {
  return Array.from({ length: RANKS }, () => Array.from({ length: FILES }, () => null))
}

export interface MappingResult {
  board: Board
  placed: PlacedPiece[]
  /** Detections that could not be assigned to a valid intersection. */
  dropped: ColoredDetection[]
}

/**
 * Map coloured detections onto the board. Each detection's anchor is projected
 * into grid space and snapped to the nearest intersection. When two pieces land
 * on the same intersection, the higher-scoring detection wins.
 *
 * `tolerance` is how far (in grid units) an anchor may sit from an intersection
 * before it is rejected as off-board (default 0.6 — a bit over half a cell).
 */
export function mapDetectionsToBoard(
  detections: ColoredDetection[],
  corners: BoardCorners,
  tolerance = 0.6,
): MappingResult {
  const H = gridHomography(corners)
  const board = emptyBoard()
  const dropped: ColoredDetection[] = []

  for (const det of detections) {
    const g = applyHomography(H, pieceAnchor(det))
    const file = Math.round(g.x)
    const rank = Math.round(g.y)

    const offGrid =
      file < 0 ||
      file >= FILES ||
      rank < 0 ||
      rank >= RANKS ||
      Math.abs(g.x - file) > tolerance ||
      Math.abs(g.y - rank) > tolerance

    if (offGrid) {
      dropped.push(det)
      continue
    }

    const existing = board[rank][file]
    if (!existing || det.score > existing.score) {
      board[rank][file] = { ...det, file, rank }
    }
  }

  const placed: PlacedPiece[] = []
  for (let r = 0; r < RANKS; r++) {
    for (let f = 0; f < FILES; f++) {
      const p = board[r][f]
      if (p) placed.push(p)
    }
  }

  return { board, placed, dropped }
}
