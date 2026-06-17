import type { Point } from './types'

export type Matrix3 = number[] // length 9, row-major

/**
 * Compute the 3x3 homography H that maps the 4 source points to the 4
 * destination points (src[i] -> dst[i]). Uses the Direct Linear Transform:
 * we fix h22 = 1 and solve the resulting 8x8 linear system with Gaussian
 * elimination (partial pivoting).
 *
 * Returns H row-major: [h00,h01,h02, h10,h11,h12, h20,h21,1].
 */
export function computeHomography(src: Point[], dst: Point[]): Matrix3 {
  if (src.length !== 4 || dst.length !== 4) {
    throw new Error('computeHomography requires exactly 4 source and 4 destination points')
  }

  // Build the 8x8 system A * h = b, where h = [h00..h21].
  const A: number[][] = []
  const b: number[] = []
  for (let i = 0; i < 4; i++) {
    const { x, y } = src[i]
    const { x: u, y: v } = dst[i]
    A.push([x, y, 1, 0, 0, 0, -u * x, -u * y])
    b.push(u)
    A.push([0, 0, 0, x, y, 1, -v * x, -v * y])
    b.push(v)
  }

  const h = solveLinearSystem(A, b)
  return [h[0], h[1], h[2], h[3], h[4], h[5], h[6], h[7], 1]
}

/** Apply a 3x3 homography to a point. */
export function applyHomography(H: Matrix3, p: Point): Point {
  const x = H[0] * p.x + H[1] * p.y + H[2]
  const y = H[3] * p.x + H[4] * p.y + H[5]
  const w = H[6] * p.x + H[7] * p.y + H[8]
  return { x: x / w, y: y / w }
}

/** Solve A x = b for a square system using Gaussian elimination with partial pivoting. */
export function solveLinearSystem(A: number[][], b: number[]): number[] {
  const n = b.length
  // Augmented matrix.
  const m = A.map((row, i) => [...row, b[i]])

  for (let col = 0; col < n; col++) {
    // Partial pivot: find the row with the largest absolute value in this column.
    let pivot = col
    for (let r = col + 1; r < n; r++) {
      if (Math.abs(m[r][col]) > Math.abs(m[pivot][col])) pivot = r
    }
    if (Math.abs(m[pivot][col]) < 1e-12) {
      throw new Error('Homography is degenerate (collinear corners?)')
    }
    ;[m[col], m[pivot]] = [m[pivot], m[col]]

    // Eliminate below.
    for (let r = col + 1; r < n; r++) {
      const factor = m[r][col] / m[col][col]
      for (let c = col; c <= n; c++) m[r][c] -= factor * m[col][c]
    }
  }

  // Back-substitution.
  const x = new Array(n).fill(0)
  for (let r = n - 1; r >= 0; r--) {
    let sum = m[r][n]
    for (let c = r + 1; c < n; c++) sum -= m[r][c] * x[c]
    x[r] = sum / m[r][r]
  }
  return x
}
