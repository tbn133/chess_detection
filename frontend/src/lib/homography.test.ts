import { describe, expect, it } from 'vitest'
import { applyHomography, computeHomography } from './homography'

describe('computeHomography', () => {
  it('maps the source corners exactly onto the destination corners', () => {
    const src = [
      { x: 10, y: 20 },
      { x: 210, y: 30 },
      { x: 200, y: 230 },
      { x: 5, y: 240 },
    ]
    const dst = [
      { x: 0, y: 0 },
      { x: 8, y: 0 },
      { x: 8, y: 9 },
      { x: 0, y: 9 },
    ]
    const H = computeHomography(src, dst)
    for (let i = 0; i < 4; i++) {
      const p = applyHomography(H, src[i])
      expect(p.x).toBeCloseTo(dst[i].x, 6)
      expect(p.y).toBeCloseTo(dst[i].y, 6)
    }
  })

  it('maps the centre of a perfectly axis-aligned board to the grid centre', () => {
    const src = [
      { x: 0, y: 0 },
      { x: 800, y: 0 },
      { x: 800, y: 900 },
      { x: 0, y: 900 },
    ]
    const dst = [
      { x: 0, y: 0 },
      { x: 8, y: 0 },
      { x: 8, y: 9 },
      { x: 0, y: 9 },
    ]
    const H = computeHomography(src, dst)
    const mid = applyHomography(H, { x: 400, y: 450 })
    expect(mid.x).toBeCloseTo(4, 6)
    expect(mid.y).toBeCloseTo(4.5, 6)
  })
})
