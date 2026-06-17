import { describe, expect, it } from 'vitest'
import { classifyColor } from './colorClassify'

function solid(w: number, h: number, r: number, g: number, b: number): Uint8ClampedArray {
  const data = new Uint8ClampedArray(w * h * 4)
  for (let i = 0; i < w * h; i++) {
    data[i * 4] = r
    data[i * 4 + 1] = g
    data[i * 4 + 2] = b
    data[i * 4 + 3] = 255
  }
  return data
}

describe('classifyColor', () => {
  it('classifies a red-ink crop as red', () => {
    expect(classifyColor(solid(20, 20, 200, 40, 40), 20, 20)).toBe('red')
  })

  it('classifies a dark-ink crop as black', () => {
    expect(classifyColor(solid(20, 20, 30, 30, 30), 20, 20)).toBe('black')
  })

  it('defaults an ambiguous light crop to black', () => {
    expect(classifyColor(solid(20, 20, 220, 215, 210), 20, 20)).toBe('black')
  })
})
