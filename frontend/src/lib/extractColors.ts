import { classifyColor } from './colorClassify'
import type { ColoredDetection } from './boardMapping'
import type { Detection } from './types'

/**
 * Resolve each detection's colour (red/black) by sampling its pixels from the
 * full-resolution source image. Expects a 2D context already holding the image.
 */
export function classifyDetections(
  ctx: CanvasRenderingContext2D,
  detections: Detection[],
): ColoredDetection[] {
  return detections.map((d) => {
    const x = Math.max(0, Math.floor(d.x1))
    const y = Math.max(0, Math.floor(d.y1))
    const w = Math.max(1, Math.min(ctx.canvas.width - x, Math.ceil(d.x2 - d.x1)))
    const h = Math.max(1, Math.min(ctx.canvas.height - y, Math.ceil(d.y2 - d.y1)))
    const { data } = ctx.getImageData(x, y, w, h)
    return { ...d, color: classifyColor(data, w, h) }
  })
}
