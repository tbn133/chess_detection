<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { FILES, PIECE_TYPE_BY_ID, RANKS } from '../lib/constants'
import type { BoardMesh, PlacedPiece } from '../lib/types'

const props = defineProps<{
  image: HTMLImageElement
  naturalWidth: number
  naturalHeight: number
  mesh: BoardMesh
  placed: PlacedPiece[]
}>()

const canvasRef = ref<HTMLCanvasElement | null>(null)

function draw() {
  const canvas = canvasRef.value
  if (!canvas) return
  canvas.width = props.naturalWidth
  canvas.height = props.naturalHeight
  const ctx = canvas.getContext('2d')!
  ctx.drawImage(props.image, 0, 0)

  const line = Math.max(1.5, Math.max(props.naturalWidth, props.naturalHeight) / 500)
  const m = props.mesh

  // Grid (from the deformable mesh) for visual verification of alignment.
  ctx.strokeStyle = 'rgba(56,189,248,0.55)'
  ctx.lineWidth = line
  for (let r = 0; r < RANKS; r++) {
    ctx.beginPath()
    ctx.moveTo(m[r][0].x, m[r][0].y)
    for (let f = 1; f < FILES; f++) ctx.lineTo(m[r][f].x, m[r][f].y)
    ctx.stroke()
  }
  for (let f = 0; f < FILES; f++) {
    ctx.beginPath()
    ctx.moveTo(m[0][f].x, m[0][f].y)
    for (let r = 1; r < RANKS; r++) ctx.lineTo(m[r][f].x, m[r][f].y)
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
