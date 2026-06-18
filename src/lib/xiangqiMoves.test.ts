import { describe, expect, it } from 'vitest'
import { legalMoves } from './xiangqiMoves'
import { FILES, PIECE_TYPE_BY_ID, RANKS } from './constants'
import type { Board, PieceColor, PlacedPiece } from './types'

const ID = { xe: 0, ma: 1, tuong: 2, si: 3, vua: 4, phao: 5, tot: 6 }

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
const has = (ms: { file: number; rank: number }[], f: number, r: number) =>
  ms.some((m) => m.file === f && m.rank === r)

describe('legalMoves', () => {
  it('chariot slides until blocked in all four directions', () => {
    const b = emptyBoard()
    put(b, 4, 4, ID.xe, 'red')
    const m = legalMoves(b, 4, 4)
    expect(m).toHaveLength(17)
    expect(has(m, 4, 0)).toBe(true)
    expect(has(m, 8, 4)).toBe(true)
  })

  it('horse is blocked by a piece on its leg', () => {
    const b = emptyBoard()
    put(b, 4, 4, ID.ma, 'red')
    put(b, 4, 3, ID.tot, 'red') // blocks the upward leg
    const m = legalMoves(b, 4, 4)
    expect(has(m, 3, 2)).toBe(false)
    expect(has(m, 5, 2)).toBe(false)
    expect(has(m, 6, 5)).toBe(true) // a non-blocked destination
  })

  it('cannon captures by jumping exactly one screen', () => {
    const b = emptyBoard()
    put(b, 4, 4, ID.phao, 'red')
    put(b, 4, 3, ID.ma, 'black') // screen
    put(b, 4, 1, ID.xe, 'black') // target behind the screen
    const m = legalMoves(b, 4, 4)
    expect(has(m, 4, 1)).toBe(true) // capture over the screen
    expect(has(m, 4, 3)).toBe(false) // cannot land on the screen
  })

  it('soldier moves sideways only after crossing the river', () => {
    const b = emptyBoard()
    put(b, 4, 9, ID.vua, 'red') // red home bottom -> soldier moves up
    const before = emptyBoard()
    put(before, 4, 9, ID.vua, 'red')
    put(before, 4, 6, ID.tot, 'red') // not yet across
    expect(legalMoves(before, 4, 6)).toEqual([{ file: 4, rank: 5 }])

    put(b, 4, 3, ID.tot, 'red') // across the river
    const m = legalMoves(b, 4, 3)
    expect(has(m, 4, 2)).toBe(true)
    expect(has(m, 3, 3)).toBe(true)
    expect(has(m, 5, 3)).toBe(true)
  })

  it('general can capture the enemy general along a clear file', () => {
    const b = emptyBoard()
    put(b, 4, 9, ID.vua, 'red')
    put(b, 4, 0, ID.vua, 'black')
    expect(has(legalMoves(b, 4, 9), 4, 0)).toBe(true)
  })
})
