import { describe, expect, it } from 'vitest'
import { validateXiangqi } from './validateXiangqi'
import { FILES, PIECE_TYPE_BY_ID, RANKS } from './constants'
import type { Board, PieceColor, PlacedPiece } from './types'

function emptyBoard(): Board {
  return Array.from({ length: RANKS }, () => Array.from({ length: FILES }, () => null))
}
function put(b: Board, f: number, r: number, classId: number, color: PieceColor) {
  b[r][f] = {
    classId,
    type: PIECE_TYPE_BY_ID[classId].type,
    color,
    file: f,
    rank: r,
    score: 1,
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
  } satisfies PlacedPiece
}
const VUA = 4
const TOT = 6

describe('validateXiangqi', () => {
  it('accepts two generals in their palaces on different files', () => {
    const b = emptyBoard()
    put(b, 4, 1, VUA, 'black') // top palace
    put(b, 3, 8, VUA, 'red') // bottom palace, different file
    expect(validateXiangqi(b)).toEqual({ ok: true, issues: [] })
  })

  it('flags a missing general', () => {
    const b = emptyBoard()
    put(b, 4, 1, VUA, 'black')
    const res = validateXiangqi(b)
    expect(res.ok).toBe(false)
    expect(res.issues.some((i) => i.includes('thiếu Tướng'))).toBe(true)
  })

  it('flags the flying-general rule when generals face each other', () => {
    const b = emptyBoard()
    put(b, 4, 0, VUA, 'black')
    put(b, 4, 9, VUA, 'red') // same file, nothing between
    const res = validateXiangqi(b)
    expect(res.ok).toBe(false)
    expect(res.issues.some((i) => i.includes('đối mặt'))).toBe(true)
  })

  it('flags too many soldiers', () => {
    const b = emptyBoard()
    put(b, 4, 1, VUA, 'black')
    put(b, 4, 8, VUA, 'red')
    for (let f = 0; f < 6; f++) put(b, f, 5, TOT, 'red') // 6 soldiers > 5
    const res = validateXiangqi(b)
    expect(res.issues.some((i) => i.includes('thừa Tốt'))).toBe(true)
  })
})
