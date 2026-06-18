import { PIECE_TYPES, PIECE_TYPE_BY_ID } from './constants'
import type { PieceColor, PieceType } from './constants'
import type { Board, PlacedPiece } from './types'

export interface ValidationResult {
  ok: boolean
  issues: string[]
}

// Maximum number of each piece type per side in a legal xiangqi setup.
const MAX_PER_TYPE: Record<PieceType, number> = {
  vua: 1,
  si: 2,
  tuong: 2,
  ma: 2,
  xe: 2,
  phao: 2,
  tot: 5,
}

const COLOR_VI: Record<PieceColor, string> = { red: 'Đỏ', black: 'Đen' }

/** Which palace (files 3–5) a point sits in, or null if outside any palace. */
function palaceOf(file: number, rank: number): 'top' | 'bottom' | null {
  if (file < 3 || file > 5) return null
  if (rank >= 0 && rank <= 2) return 'top'
  if (rank >= 7 && rank <= 9) return 'bottom'
  return null
}

/**
 * Validate an edited board as a legal-ish xiangqi position. Reports problems in
 * Vietnamese. Checks: exactly one general per side, per-type piece limits,
 * generals inside (different) palaces, and the "flying general" rule.
 */
export function validateXiangqi(board: Board): ValidationResult {
  const issues: string[] = []
  const pieces = board.flat().filter((p): p is PlacedPiece => p !== null)

  const byColor: Record<PieceColor, PlacedPiece[]> = { red: [], black: [] }
  for (const p of pieces) byColor[p.color].push(p)

  for (const color of ['red', 'black'] as const) {
    const list = byColor[color]
    // Per-type count limits.
    for (const t of PIECE_TYPES) {
      const n = list.filter((p) => p.classId === t.id).length
      const max = MAX_PER_TYPE[t.type]
      if (n > max) issues.push(`${COLOR_VI[color]}: thừa ${t.vi} (${n}/${max})`)
    }
    // Exactly one general.
    const generals = list.filter((p) => p.type === 'vua')
    if (generals.length === 0) issues.push(`${COLOR_VI[color]}: thiếu Tướng`)
    else if (generals.length > 1) issues.push(`${COLOR_VI[color]}: có ${generals.length} Tướng`)
    // General must sit inside a palace.
    for (const g of generals) {
      if (!palaceOf(g.file, g.rank)) issues.push(`${COLOR_VI[color]}: Tướng nằm ngoài cung`)
    }
  }

  const redGen = byColor.red.find((p) => p.type === 'vua')
  const blackGen = byColor.black.find((p) => p.type === 'vua')

  if (redGen && blackGen) {
    const rp = palaceOf(redGen.file, redGen.rank)
    const bp = palaceOf(blackGen.file, blackGen.rank)
    if (rp && bp && rp === bp) issues.push('Hai Tướng ở cùng một cung')

    // Flying general: same file with nothing between them.
    if (redGen.file === blackGen.file) {
      const lo = Math.min(redGen.rank, blackGen.rank)
      const hi = Math.max(redGen.rank, blackGen.rank)
      let between = 0
      for (let r = lo + 1; r < hi; r++) if (board[r][redGen.file]) between++
      if (between === 0) issues.push('Hai Tướng đối mặt (lộ mặt tướng — không hợp lệ)')
    }
  }

  return { ok: issues.length === 0, issues }
}

// Re-export for callers that want the piece label map.
export { PIECE_TYPE_BY_ID }
