import type { PieceColor, PieceType } from './constants'

// Re-export so consumers can pull domain + geometry types from one module.
export type { PieceColor, PieceType }

/** A point in 2D image space (pixels). */
export interface Point {
  x: number
  y: number
}

/** The four board corners, in image pixel coordinates, in this order. */
export interface BoardCorners {
  topLeft: Point
  topRight: Point
  bottomRight: Point
  bottomLeft: Point
}

/**
 * A deformable grid of the 90 intersections in IMAGE pixel coordinates.
 * mesh[rank][file] is the image position of intersection (file, rank).
 * Size is RANKS (rows) x FILES (cols). Lets the user bend the grid to match a
 * warped/folded board, beyond what a single 4-corner homography allows.
 */
export type BoardMesh = Point[][]

/** A raw detection from the YOLO model, in original image pixel coordinates. */
export interface Detection {
  x1: number
  y1: number
  x2: number
  y2: number
  score: number
  classId: number
  type: PieceType
}

/** A detection that has been resolved to a board intersection + colour. */
export interface PlacedPiece extends Detection {
  color: PieceColor
  file: number // 0..8
  rank: number // 0..9
}

export type ModelStatus = 'idle' | 'loading' | 'ready' | 'missing' | 'error'

/** board[rank][file] -> placed piece or null. */
export type Board = (PlacedPiece | null)[][]
