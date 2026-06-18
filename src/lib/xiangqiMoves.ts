import { FILES, RANKS } from './constants'
import type { Board, PieceColor, PlacedPiece } from './types'

export interface Square {
  file: number
  rank: number
}

function inBounds(f: number, r: number): boolean {
  return f >= 0 && f < FILES && r >= 0 && r < RANKS
}
function get(board: Board, f: number, r: number): PlacedPiece | null {
  return inBounds(f, r) ? board[r][f] : null
}

/** Does this colour's home (back rank) sit on the top half? Inferred from the
 *  general's position so the rules stay correct after the board is flipped. */
function homeTop(board: Board, color: PieceColor): boolean {
  const gen = board.flat().find((p) => p && p.color === color && p.type === 'vua') as
    | PlacedPiece
    | undefined
  if (gen) return gen.rank <= 4
  return color === 'black' // fallback: black top, red bottom
}

function inPalace(f: number, r: number, top: boolean): boolean {
  if (f < 3 || f > 5) return false
  return top ? r >= 0 && r <= 2 : r >= 7 && r <= 9
}

/** Apply a move, returning a new board (piece moves, capturing any occupant). */
export function applyMove(board: Board, from: Square, to: Square): Board {
  const next = board.map((row) => row.slice())
  const p = next[from.rank][from.file]
  next[from.rank][from.file] = null
  if (p) next[to.rank][to.file] = { ...p, file: to.file, rank: to.rank }
  return next
}

/** Is `color`'s general currently attacked (in check, incl. facing generals)? */
export function isInCheck(board: Board, color: PieceColor): boolean {
  const gen = board.flat().find((p) => p && p.color === color && p.type === 'vua') as
    | PlacedPiece
    | undefined
  if (!gen) return false
  for (const p of board.flat()) {
    if (!p || p.color === color) continue
    const ms = legalMoves(board, p.file, p.rank)
    if (ms.some((m) => m.file === gen.file && m.rank === gen.rank)) return true
  }
  return false
}

/** Legal moves that do NOT leave the mover's own general in check. */
export function legalMovesSafe(board: Board, file: number, rank: number): Square[] {
  const p = get(board, file, rank)
  if (!p) return []
  return legalMoves(board, file, rank).filter(
    (m) => !isInCheck(applyMove(board, { file, rank }, m), p.color),
  )
}

/** Generate the pseudo-legal target squares for the piece at (file, rank). */
export function legalMoves(board: Board, file: number, rank: number): Square[] {
  const piece = get(board, file, rank)
  if (!piece) return []
  const color = piece.color
  const top = homeTop(board, color)
  const forward = top ? 1 : -1 // direction toward the opponent
  const moves: Square[] = []

  const canLand = (f: number, r: number): 'empty' | 'capture' | null => {
    if (!inBounds(f, r)) return null
    const t = get(board, f, r)
    if (!t) return 'empty'
    return t.color === color ? null : 'capture'
  }
  const add = (f: number, r: number) => {
    if (canLand(f, r)) moves.push({ file: f, rank: r })
  }

  switch (piece.type) {
    case 'xe': {
      for (const [df, dr] of [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ]) {
        let f = file + df
        let r = rank + dr
        while (inBounds(f, r)) {
          const t = get(board, f, r)
          if (!t) moves.push({ file: f, rank: r })
          else {
            if (t.color !== color) moves.push({ file: f, rank: r })
            break
          }
          f += df
          r += dr
        }
      }
      break
    }
    case 'phao': {
      for (const [df, dr] of [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ]) {
        let f = file + df
        let r = rank + dr
        // Non-capturing slide over empty squares.
        while (inBounds(f, r) && !get(board, f, r)) {
          moves.push({ file: f, rank: r })
          f += df
          r += dr
        }
        // Jump exactly one screen, then capture the next enemy piece.
        if (inBounds(f, r)) {
          f += df
          r += dr
          while (inBounds(f, r) && !get(board, f, r)) {
            f += df
            r += dr
          }
          const t = get(board, f, r)
          if (t && t.color !== color) moves.push({ file: f, rank: r })
        }
      }
      break
    }
    case 'ma': {
      // (legStep) then diagonal; blocked if the orthogonal leg is occupied.
      const legs: [number, number, [number, number][]][] = [
        [0, -1, [[-1, -2], [1, -2]]],
        [0, 1, [[-1, 2], [1, 2]]],
        [-1, 0, [[-2, -1], [-2, 1]]],
        [1, 0, [[2, -1], [2, 1]]],
      ]
      for (const [lf, lr, dests] of legs) {
        if (get(board, file + lf, rank + lr)) continue // leg blocked
        for (const [df, dr] of dests) add(file + df, rank + dr)
      }
      break
    }
    case 'tuong': {
      // Elephant: 2-step diagonal, eye must be clear, cannot cross the river.
      for (const [df, dr] of [
        [2, 2],
        [2, -2],
        [-2, 2],
        [-2, -2],
      ]) {
        const tf = file + df
        const tr = rank + dr
        if (get(board, file + df / 2, rank + dr / 2)) continue // eye blocked
        // Must stay on its own half (home side of the river).
        const ownHalf = top ? tr <= 4 : tr >= 5
        if (!ownHalf) continue
        add(tf, tr)
      }
      break
    }
    case 'si': {
      for (const [df, dr] of [
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
      ]) {
        const tf = file + df
        const tr = rank + dr
        if (inPalace(tf, tr, top)) add(tf, tr)
      }
      break
    }
    case 'vua': {
      for (const [df, dr] of [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ]) {
        const tf = file + df
        const tr = rank + dr
        if (inPalace(tf, tr, top)) add(tf, tr)
      }
      // Flying-general capture: same file, clear path to the enemy general.
      for (let r = rank + forward; inBounds(file, r); r += forward) {
        const t = get(board, file, r)
        if (t) {
          if (t.color !== color && t.type === 'vua') moves.push({ file, rank: r })
          break
        }
      }
      break
    }
    case 'tot': {
      add(file, rank + forward) // forward
      const crossed = top ? rank >= 5 : rank <= 4 // crossed the river?
      if (crossed) {
        add(file + 1, rank)
        add(file - 1, rank)
      }
      break
    }
  }
  return moves
}
