<script setup lang="ts">
import { computed } from 'vue'
import { FILES, RANKS } from '../lib/constants'
import type { BoardMesh, Point } from '../lib/types'

// Read-only view: shows the ORIGINAL image untouched (a real <img> element) with
// the detected grid drawn as a separate SVG overlay on top. The image pixels are
// never modified or re-rendered.
const props = defineProps<{
  imageUrl: string
  naturalWidth: number
  naturalHeight: number
  mesh: BoardMesh
}>()

const unit = computed(() => Math.max(props.naturalWidth, props.naturalHeight) / 400)

const gridPaths = computed(() => {
  const m = props.mesh
  const paths: string[] = []
  for (let r = 0; r < RANKS; r++) {
    paths.push('M ' + m[r].map((p) => `${p.x} ${p.y}`).join(' L '))
  }
  for (let f = 0; f < FILES; f++) {
    const col: Point[] = []
    for (let r = 0; r < RANKS; r++) col.push(m[r][f])
    paths.push('M ' + col.map((p) => `${p.x} ${p.y}`).join(' L '))
  }
  return paths
})
</script>

<template>
  <div class="relative w-full overflow-hidden rounded-2xl bg-black">
    <img :src="imageUrl" alt="bàn cờ" class="block w-full" draggable="false" />
    <svg
      class="pointer-events-none absolute inset-0 h-full w-full"
      :viewBox="`0 0 ${naturalWidth} ${naturalHeight}`"
      preserveAspectRatio="none"
    >
      <path
        v-for="(d, i) in gridPaths"
        :key="i"
        :d="d"
        fill="none"
        stroke="rgba(56,189,248,0.7)"
        :stroke-width="unit"
      />
    </svg>
  </div>
</template>
