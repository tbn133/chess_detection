import { describe, expect, it } from 'vitest'
import { mapDetectionsToBoard, type ColoredDetection } from './boardMapping'
import { PIECE_TYPE_BY_ID } from './constants'
import type { BoardCorners, PieceColor } from './types'

// An 800x900 axis-aligned board => each grid cell is 100px (file) x 100px (rank).
const corners: BoardCorners = {
  topLeft: { x: 0, y: 0 },
  topRight: { x: 800, y: 0 },
  bottomRight: { x: 800, y: 900 },
  bottomLeft: { x: 0, y: 900 },
}

function det(file: number, rank: number, classId: number, color: PieceColor, score = 0.9): ColoredDetection {
  // Centre the box on the intersection at (file*100, rank*100).
  const cx = file * 100
  const cy = rank * 100
  return {
    x1: cx - 30,
    y1: cy - 30,
    x2: cx + 30,
    y2: cy + 30,
    score,
    classId,
    type: PIECE_TYPE_BY_ID[classId].type,
    color,
  }
}

describe('mapDetectionsToBoard', () => {
  it('snaps a detection centred on an intersection to that file/rank', () => {
    const { board, placed } = mapDetectionsToBoard([det(4, 9, 4, 'red')], corners)
    expect(placed).toHaveLength(1)
    expect(board[9][4]?.classId).toBe(4)
    expect(board[9][4]?.color).toBe('red')
  })

  it('keeps the higher-scoring detection on a conflicting intersection', () => {
    const { placed, board } = mapDetectionsToBoard(
      [det(0, 0, 0, 'black', 0.4), det(0, 0, 6, 'red', 0.95)],
      corners,
    )
    expect(placed).toHaveLength(1)
    expect(board[0][0]?.classId).toBe(6)
  })

  it('drops detections whose anchor falls off the board', () => {
    // Centre at x=870 -> grid file 8.7 -> rounds to 9, which is past the last file.
    const stray: ColoredDetection = { ...det(0, 0, 0, 'red'), x1: 840, y1: -30, x2: 900, y2: 30 }
    const { placed, dropped } = mapDetectionsToBoard([stray], corners)
    expect(placed).toHaveLength(0)
    expect(dropped).toHaveLength(1)
  })
})
