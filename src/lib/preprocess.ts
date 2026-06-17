import type { LetterboxInfo } from './yoloDecode'

export interface PreprocessResult {
  data: Float32Array // NCHW, RGB, normalized 0..1
  width: number // model input width
  height: number // model input height
  lb: LetterboxInfo
}

/**
 * Letterbox a source image into a square `size`x`size` RGB tensor (NCHW, 0..1),
 * preserving aspect ratio with grey padding (value 114, the Ultralytics default).
 * Returns the tensor plus the scale/pad needed to map boxes back to the source.
 */
export function letterbox(
  source: CanvasImageSource,
  srcWidth: number,
  srcHeight: number,
  size = 640,
): PreprocessResult {
  const scale = Math.min(size / srcWidth, size / srcHeight)
  const newW = Math.round(srcWidth * scale)
  const newH = Math.round(srcHeight * scale)
  const padX = Math.floor((size - newW) / 2)
  const padY = Math.floor((size - newH) / 2)

  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d', { willReadFrequently: true })!
  ctx.fillStyle = 'rgb(114,114,114)'
  ctx.fillRect(0, 0, size, size)
  ctx.drawImage(source, padX, padY, newW, newH)

  const { data: rgba } = ctx.getImageData(0, 0, size, size)
  const area = size * size
  const out = new Float32Array(area * 3)
  // HWC RGBA -> CHW RGB, /255.
  for (let i = 0; i < area; i++) {
    out[i] = rgba[i * 4] / 255 // R plane
    out[area + i] = rgba[i * 4 + 1] / 255 // G plane
    out[area * 2 + i] = rgba[i * 4 + 2] / 255 // B plane
  }

  return { data: out, width: size, height: size, lb: { scale, padX, padY } }
}
