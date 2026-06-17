import type { PieceColor } from './constants'

export interface ColorVotes {
  red: number
  dark: number
  total: number
}

/**
 * Count "red ink" vs "dark ink" pixels in an RGBA buffer (a cropped piece).
 * Xiangqi red pieces carry red characters; black pieces carry black/green ones.
 * We only look at the central portion of the crop to avoid the board lines and
 * neighbouring pieces bleeding in.
 *
 * `data` is RGBA (4 bytes/pixel), `width`/`height` its dimensions.
 */
export function countColorVotes(
  data: Uint8ClampedArray,
  width: number,
  height: number,
  centerFraction = 0.6,
): ColorVotes {
  const mx = Math.floor((width * (1 - centerFraction)) / 2)
  const my = Math.floor((height * (1 - centerFraction)) / 2)
  let red = 0
  let dark = 0
  let total = 0

  for (let y = my; y < height - my; y++) {
    for (let x = mx; x < width - mx; x++) {
      const i = (y * width + x) * 4
      const r = data[i]
      const g = data[i + 1]
      const b = data[i + 2]
      const a = data[i + 3]
      if (a < 32) continue
      total++
      // Red ink: clearly dominant red channel.
      if (r > 110 && r - g > 35 && r - b > 35) red++
      // Dark ink: low luminance, not strongly red.
      else if (r < 95 && g < 95 && b < 95) dark++
    }
  }
  return { red, dark, total }
}

/**
 * Decide a piece colour from its vote tally. Red wins when red ink is present
 * and outweighs dark ink; otherwise the piece is black. Defaults to black for
 * ambiguous crops (black ink is the more common failure-safe in xiangqi photos).
 */
export function decideColor(votes: ColorVotes): PieceColor {
  if (votes.total === 0) return 'black'
  const redRatio = votes.red / votes.total
  // A small amount of red ink is enough — black pieces have ~none.
  if (votes.red > votes.dark * 0.8 && redRatio > 0.02) return 'red'
  return 'black'
}

export function classifyColor(
  data: Uint8ClampedArray,
  width: number,
  height: number,
): PieceColor {
  return decideColor(countColorVotes(data, width, height))
}
