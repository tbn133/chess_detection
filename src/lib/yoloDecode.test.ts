import { describe, expect, it } from 'vitest'
import { decodeYolo } from './yoloDecode'

const NC = 7
const LB = { scale: 1, padX: 0, padY: 0 }

describe('decodeYolo', () => {
  it('decodes a channels-first [1, 4+nc, N] head and maps to original coords', () => {
    const N = 2
    const attrs = 4 + NC
    const out = new Float32Array(attrs * N)
    const set = (attr: number, box: number, v: number) => (out[attr * N + box] = v)
    // Box 0: cx=320 cy=320 w=40 h=40, class 4 (vua) high score.
    set(0, 0, 320)
    set(1, 0, 320)
    set(2, 0, 40)
    set(3, 0, 40)
    set(4 + 4, 0, 0.9)
    // Box 1: below threshold.
    set(0, 1, 10)
    set(4 + 0, 1, 0.05)

    const dets = decodeYolo(out, [1, attrs, N], NC, LB, 0.25)
    expect(dets).toHaveLength(1)
    expect(dets[0].classId).toBe(4)
    expect(dets[0].x1).toBeCloseTo(300, 5)
    expect(dets[0].y2).toBeCloseTo(340, 5)
  })

  it('decodes an end-to-end [1, N, 6] NMS-free head', () => {
    const out = new Float32Array([10, 20, 50, 60, 0.8, 5, 0, 0, 1, 1, 0.1, 2])
    const dets = decodeYolo(out, [1, 2, 6], NC, LB, 0.25)
    expect(dets).toHaveLength(1)
    expect(dets[0].classId).toBe(5)
    expect(dets[0].x1).toBeCloseTo(10, 5)
    expect(dets[0].score).toBeCloseTo(0.8, 5)
  })
})
