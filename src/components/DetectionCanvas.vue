<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { FILES, PIECE_TYPE_BY_ID, RANKS } from '../lib/constants'
import type { BoardMesh, PlacedPiece, Point } from '../lib/types'

const props = defineProps<{
  image: HTMLImageElement
  naturalWidth: number
  naturalHeight: number
  mesh: BoardMesh
  placed: PlacedPiece[]
}>()

const canvasRef = ref<HTMLCanvasElement | null>(null)

function dist(a: Point, b: Point) {
  return Math.hypot(a.x - b.x, a.y - b.y)
}

// Local cell size at intersection (f,r), used to size the piece marker.
function cellSize(r: number, f: number): number {
  const m = props.mesh
  const ds: number[] = []
  if (f + 1 < FILES) ds.push(dist(m[r][f], m[r][f + 1]))
  if (f - 1 >= 0) ds.push(dist(m[r][f], m[r][f - 1]))
  if (r + 1 < RANKS) ds.push(dist(m[r][f], m[r + 1][f]))
  if (r - 1 >= 0) ds.push(dist(m[r][f], m[r - 1][f]))
  return ds.length ? ds.reduce((a, b) => a + b, 0) / ds.length : 30
}

function draw() {
  const canvas = canvasRef.value
  if (!canvas) return
  canvas.width = props.naturalWidth
  canvas.height = props.naturalHeight
  const ctx = canvas.getContext('2d')!
  ctx.drawImage(props.image, 0, 0)

  const line = Math.max(1.5, Math.max(props.naturalWidth, props.naturalHeight) / 500)
  const m = props.mesh

  // Grid (from the deformable mesh).
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

  // Draw each placed piece AT its grid intersection, so manual edits
  // (add / move / remove / recolour) are reflected on the real photo too.
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  for (const p of props.placed) {
    const c = m[p.rank]?.[p.file]
    if (!c) continue
    const radius = cellSize(p.rank, p.file) * 0.42
    const info = PIECE_TYPE_BY_ID[p.classId]
    const red = p.color === 'red'

    ctx.beginPath()
    ctx.arc(c.x, c.y, radius, 0, Math.PI * 2)
    ctx.fillStyle = red ? 'rgba(254,226,226,0.92)' : 'rgba(241,245,249,0.92)'
    ctx.fill()
    ctx.lineWidth = radius * 0.14
    ctx.strokeStyle = red ? '#dc2626' : '#1e293b'
    ctx.stroke()

    ctx.font = `bold ${radius * 1.2}px sans-serif`
    ctx.fillStyle = red ? '#dc2626' : '#0f172a'
    ctx.fillText(red ? info.hanRed : info.hanBlack, c.x, c.y + radius * 0.06)
  }
}

watchEffect(draw)
</script>

<template>
  <canvas ref="canvasRef" class="block h-auto w-full rounded-2xl bg-black" />
</template>
