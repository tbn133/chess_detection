import { describe, expect, it } from 'vitest'
import { mapDetectionsToMesh, meanSpacing, meshFromCorners } from './boardMesh'
import { FILES, PIECE_TYPE_BY_ID, RANKS } from './constants'
import type { ColoredDetection } from './boardMapping'
import type { BoardCorners, PieceColor } from './types'

const corners: BoardCorners = {
  topLeft: { x: 0, y: 0 },
  topRight: { x: 800, y: 0 },
  bottomRight: { x: 800, y: 900 },
  bottomLeft: { x: 0, y: 900 },
}

function det(px: number, py: number, classId: number, color: PieceColor, score = 0.9): ColoredDetection {
  return {
    x1: px - 20,
    y1: py - 20,
    x2: px + 20,
    y2: py + 20,
    score,
    classId,
    type: PIECE_TYPE_BY_ID[classId].type,
    color,
  } as ColoredDetection
}

describe('meshFromCorners', () => {
  it('produces a RANKS x FILES mesh with corners at the board corners', () => {
    const m = meshFromCorners(corners)
    expect(m.length).toBe(RANKS)
    expect(m[0].length).toBe(FILES)
    expect(m[0][0]).toEqual({ x: 0, y: 0 })
    expect(m[RANKS - 1][FILES - 1].x).toBeCloseTo(800, 5)
    expect(m[RANKS - 1][FILES - 1].y).toBeCloseTo(900, 5)
  })

  it('has even 100px spacing for this 800x900 board', () => {
    expect(meanSpacing(meshFromCorners(corners))).toBeCloseTo(100, 5)
  })
})

describe('mapDetectionsToMesh', () => {
  it('assigns a detection to its nearest intersection', () => {
    const m = meshFromCorners(corners)
    // Intersection (file 4, rank 9) sits at image (400, 900).
    const { board, placed } = mapDetectionsToMesh([det(400, 900, 4, 'red')], m)
    expect(placed).toHaveLength(1)
    expect(board[9][4]?.classId).toBe(4)
  })

  it('keeps the higher-scoring piece on a contested intersection', () => {
    const m = meshFromCorners(corners)
    const { placed, board } = mapDetectionsToMesh(
      [det(0, 0, 0, 'black', 0.3), det(10, 10, 6, 'red', 0.95)],
      m,
    )
    expect(placed).toHaveLength(1)
    expect(board[0][0]?.classId).toBe(6)
  })

  it('drops a detection far from any intersection', () => {
    const m = meshFromCorners(corners)
    // Way off the board (e.g. a hand): > 0.7 * 100px from every node.
    const { placed, dropped } = mapDetectionsToMesh([det(5000, 5000, 0, 'red')], m)
    expect(placed).toHaveLength(0)
    expect(dropped).toHaveLength(1)
  })
})
