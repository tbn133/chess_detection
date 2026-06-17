<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { FILES, PIECE_TYPE_BY_ID, RANKS } from '../lib/constants'
import { applyHomography, computeHomography } from '../lib/homography'
import type { BoardCorners, PlacedPiece, Point } from '../lib/types'

const props = defineProps<{
  image: HTMLImageElement
  naturalWidth: number
  naturalHeight: number
  corners: BoardCorners
  placed: PlacedPiece[]
}>()

const canvasRef = ref<HTMLCanvasElement | null>(null)

// Grid space -> image space (inverse of the mapping used for detection).
function gridToImage(corners: BoardCorners) {
  const gridCorners: Point[] = [
    { x: 0, y: 0 },
    { x: FILES - 1, y: 0 },
    { x: FILES - 1, y: RANKS - 1 },
    { x: 0, y: RANKS - 1 },
  ]
  const imgCorners = [corners.topLeft, corners.topRight, corners.bottomRight, corners.bottomLeft]
  return computeHomography(gridCorners, imgCorners)
}

function draw() {
  const canvas = canvasRef.value
  if (!canvas) return
  canvas.width = props.naturalWidth
  canvas.height = props.naturalHeight
  const ctx = canvas.getContext('2d')!
  ctx.drawImage(props.image, 0, 0)

  const line = Math.max(1.5, Math.max(props.naturalWidth, props.naturalHeight) / 500)

  // Faint grid for visual verification of the corner alignment.
  const H = gridToImage(props.corners)
  ctx.strokeStyle = 'rgba(56,189,248,0.55)'
  ctx.lineWidth = line
  for (let f = 0; f < FILES; f++) {
    ctx.beginPath()
    const a = applyHomography(H, { x: f, y: 0 })
    const b = applyHomography(H, { x: f, y: RANKS - 1 })
    ctx.moveTo(a.x, a.y)
    ctx.lineTo(b.x, b.y)
    ctx.stroke()
  }
  for (let r = 0; r < RANKS; r++) {
    ctx.beginPath()
    const a = applyHomography(H, { x: 0, y: r })
    const b = applyHomography(H, { x: FILES - 1, y: r })
    ctx.moveTo(a.x, a.y)
    ctx.lineTo(b.x, b.y)
    ctx.stroke()
  }

  // Detection boxes + labels.
  const font = Math.max(12, props.naturalHeight / 40)
  ctx.font = `bold ${font}px sans-serif`
  ctx.textBaseline = 'top'
  for (const p of props.placed) {
    const info = PIECE_TYPE_BY_ID[p.classId]
    const color = p.color === 'red' ? '#ef4444' : '#0ea5e9'
    ctx.strokeStyle = color
    ctx.lineWidth = line * 2
    ctx.strokeRect(p.x1, p.y1, p.x2 - p.x1, p.y2 - p.y1)

    const han = p.color === 'red' ? info.hanRed : info.hanBlack
    const label = `${han} ${info.vi}`
    const tw = ctx.measureText(label).width
    ctx.fillStyle = color
    ctx.fillRect(p.x1, p.y1 - font - 4, tw + 10, font + 4)
    ctx.fillStyle = '#fff'
    ctx.fillText(label, p.x1 + 5, p.y1 - font - 2)
  }
}

watchEffect(draw)
</script>

<template>
  <canvas ref="canvasRef" class="block h-auto w-full rounded-2xl bg-black" />
</template>
