// Xiangqi (Chinese chess) domain constants.
//
// Board geometry: 9 files (columns) x 10 ranks (rows). Pieces sit on the
// 90 line INTERSECTIONS, not inside squares. We index the board as
// board[rank][file] with rank 0 at the TOP of the image and file 0 at the LEFT.

export const FILES = 9 // columns: a..i  (index 0..8)
export const RANKS = 10 // rows: 0..9    (index 0..9)
export const INTERSECTIONS = FILES * RANKS // 90

// File labels used for the human-readable position table (left -> right).
export const FILE_LABELS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'] as const

// The 7 detector classes. The training dataset (vietanhdev/chessai-data) labels
// pieces by TYPE only (Vietnamese names). Colour (red/black) is resolved in a
// post-processing step from pixel colour, NOT by the detector — see useColorClassify.
//
// IMPORTANT: the order of `id` here MUST match the `names:` order in
// training/data.yaml so class indices line up with the exported ONNX model.
export type PieceType = 'xe' | 'ma' | 'tuong' | 'si' | 'vua' | 'phao' | 'tot'

export interface PieceTypeInfo {
  id: number
  type: PieceType
  /** Standard Xiangqi-FEN letter (uppercase form; colour decides the case). */
  fen: string
  vi: string
  en: string
  /** Han character for the RED piece (display only). */
  hanRed: string
  /** Han character for the BLACK piece (display only). */
  hanBlack: string
}

export const PIECE_TYPES: PieceTypeInfo[] = [
  { id: 0, type: 'xe', fen: 'R', vi: 'Xe', en: 'Chariot', hanRed: '俥', hanBlack: '車' },
  { id: 1, type: 'ma', fen: 'N', vi: 'Mã', en: 'Horse', hanRed: '傌', hanBlack: '馬' },
  { id: 2, type: 'tuong', fen: 'B', vi: 'Tượng', en: 'Elephant', hanRed: '相', hanBlack: '象' },
  { id: 3, type: 'si', fen: 'A', vi: 'Sĩ', en: 'Advisor', hanRed: '仕', hanBlack: '士' },
  { id: 4, type: 'vua', fen: 'K', vi: 'Tướng', en: 'General', hanRed: '帥', hanBlack: '將' },
  { id: 5, type: 'phao', fen: 'C', vi: 'Pháo', en: 'Cannon', hanRed: '炮', hanBlack: '砲' },
  { id: 6, type: 'tot', fen: 'P', vi: 'Tốt', en: 'Soldier', hanRed: '兵', hanBlack: '卒' },
]

export const PIECE_TYPE_BY_ID: Record<number, PieceTypeInfo> = Object.fromEntries(
  PIECE_TYPES.map((p) => [p.id, p]),
)

export const CLASS_NAMES: string[] = PIECE_TYPES.map((p) => p.type)

export type PieceColor = 'red' | 'black'
