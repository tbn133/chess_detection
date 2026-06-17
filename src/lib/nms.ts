import type { Detection } from './types'

function iou(a: Detection, b: Detection): number {
  const ix1 = Math.max(a.x1, b.x1)
  const iy1 = Math.max(a.y1, b.y1)
  const ix2 = Math.min(a.x2, b.x2)
  const iy2 = Math.min(a.y2, b.y2)
  const iw = Math.max(0, ix2 - ix1)
  const ih = Math.max(0, iy2 - iy1)
  const inter = iw * ih
  if (inter <= 0) return 0
  const areaA = (a.x2 - a.x1) * (a.y2 - a.y1)
  const areaB = (b.x2 - b.x1) * (b.y2 - b.y1)
  return inter / (areaA + areaB - inter)
}

/**
 * Class-agnostic non-maximum suppression. Detections must already be filtered
 * by a score threshold. Returns kept detections sorted by descending score.
 */
export function nms(detections: Detection[], iouThreshold = 0.45): Detection[] {
  const sorted = [...detections].sort((a, b) => b.score - a.score)
  const kept: Detection[] = []
  const suppressed = new Array(sorted.length).fill(false)

  for (let i = 0; i < sorted.length; i++) {
    if (suppressed[i]) continue
    kept.push(sorted[i])
    for (let j = i + 1; j < sorted.length; j++) {
      if (suppressed[j]) continue
      if (iou(sorted[i], sorted[j]) > iouThreshold) suppressed[j] = true
    }
  }
  return kept
}
