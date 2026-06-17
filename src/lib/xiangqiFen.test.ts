import { describe, expect, it } from 'vitest'
import { boardToFen, flipBoard } from './xiangqiFen'
import { FILES, PIECE_TYPE_BY_ID, RANKS } from './constants'
import type { Board, PieceColor, PlacedPiece } from './types'

function emptyBoard(): Board {
  return Array.from({ length: RANKS }, () => Array.from({ length: FILES }, () => null))
}

function place(board: Board, file: number, rank: number, classId: number, color: PieceColor) {
  board[rank][file] = {
    x1: 0,
    y1: 0,
    x2: 1,
    y2: 1,
    score: 1,
    classId,
    type: PIECE_TYPE_BY_ID[classId].type,
    color,
    file,
    rank,
  } satisfies PlacedPiece
}

// classId: xe=0, ma=1, tuong=2, si=3, vua=4, phao=5, tot=6
function startPosition(): Board {
  const b = emptyBoard()
  const back = [0, 1, 2, 3, 4, 3, 2, 1, 0]
  back.forEach((id, f) => place(b, f, 0, id, 'black'))
  back.forEach((id, f) => place(b, f, 9, id, 'red'))
  place(b, 1, 2, 5, 'black')
  place(b, 7, 2, 5, 'black')
  place(b, 1, 7, 5, 'red')
  place(b, 7, 7, 5, 'red')
  for (const f of [0, 2, 4, 6, 8]) {
    place(b, f, 3, 6, 'black')
    place(b, f, 6, 6, 'red')
  }
  return b
}

describe('boardToFen', () => {
  it('produces the canonical Xiangqi start FEN', () => {
    expect(boardToFen(startPosition())).toBe(
      'rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR w',
    )
  })

  it('renders an empty board as ten empty ranks', () => {
    expect(boardToFen(emptyBoard())).toBe('9/9/9/9/9/9/9/9/9/9 w')
  })
})

describe('flipBoard', () => {
  it('is an involution that returns the original board', () => {
    const start = startPosition()
    expect(boardToFen(flipBoard(flipBoard(start)))).toBe(boardToFen(start))
  })

  it('moves a corner piece to the opposite corner', () => {
    const b = emptyBoard()
    place(b, 0, 0, 0, 'black')
    const f = flipBoard(b)
    expect(f[RANKS - 1][FILES - 1]?.classId).toBe(0)
    expect(f[0][0]).toBeNull()
  })
})
