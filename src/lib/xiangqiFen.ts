import { FILE_LABELS, FILES, PIECE_TYPE_BY_ID, RANKS } from './constants'
import type { Board, PlacedPiece } from './types'

/**
 * Convert a board into a Xiangqi FEN piece-placement string.
 *
 * Convention (matches the common WXF / xiangqi.js FEN):
 *   - Ranks are listed top (rank 0) to bottom (rank 9), separated by '/'.
 *   - Files within a rank go left (file 0) to right (file 8).
 *   - Runs of empty intersections are written as a digit count.
 *   - RED pieces are UPPERCASE, BLACK pieces are lowercase.
 *   - Letters: K(general) A(advisor) B(elephant) N(horse) R(chariot) C(cannon) P(pawn).
 *
 * `sideToMove` defaults to 'w' (red). The returned string is the full first two
 * FEN fields, e.g. "rnbakabnr/9/1c5c1/... w".
 */
export function boardToFen(board: Board, sideToMove: 'w' | 'b' = 'w'): string {
  const rows: string[] = []
  for (let r = 0; r < RANKS; r++) {
    let row = ''
    let empty = 0
    for (let f = 0; f < FILES; f++) {
      const piece = board[r][f]
      if (!piece) {
        empty++
        continue
      }
      if (empty > 0) {
        row += String(empty)
        empty = 0
      }
      row += fenLetter(piece)
    }
    if (empty > 0) row += String(empty)
    rows.push(row)
  }
  return `${rows.join('/')} ${sideToMove}`
}

function fenLetter(piece: PlacedPiece): string {
  const info = PIECE_TYPE_BY_ID[piece.classId]
  const letter = info.fen
  return piece.color === 'red' ? letter.toUpperCase() : letter.toLowerCase()
}

/** Human-readable algebraic-ish coordinate, e.g. file=4,rank=9 -> "e9". */
export function squareLabel(file: number, rank: number): string {
  return `${FILE_LABELS[file]}${rank}`
}

/** Rotate the board 180° (swap red/black orientation when the photo is flipped). */
export function flipBoard(board: Board): Board {
  const flipped: Board = Array.from({ length: RANKS }, () =>
    Array.from({ length: FILES }, () => null),
  )
  for (let r = 0; r < RANKS; r++) {
    for (let f = 0; f < FILES; f++) {
      const p = board[r][f]
      if (!p) continue
      const nr = RANKS - 1 - r
      const nf = FILES - 1 - f
      flipped[nr][nf] = { ...p, rank: nr, file: nf }
    }
  }
  return flipped
}
