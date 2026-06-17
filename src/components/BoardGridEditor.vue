<script setup lang="ts">
import { computed, ref } from 'vue'
import { FILES, RANKS } from '../lib/constants'
import { meshFromCorners } from '../lib/boardMesh'
import type { BoardCorners, BoardMesh, Point } from '../lib/types'

const props = defineProps<{
  imageUrl: string
  naturalWidth: number
  naturalHeight: number
  modelValue: BoardMesh
  mode: 'corners' | 'mesh'
}>()
const emit = defineEmits<{ (e: 'update:modelValue', v: BoardMesh): void }>()

const svgRef = ref<SVGSVGElement | null>(null)
const active = ref<{ r: number; f: number } | null>(null)

const unit = computed(() => Math.max(props.naturalWidth, props.naturalHeight) / 70)

const cornerSet = computed(
  () => new Set([`0,0`, `0,${FILES - 1}`, `${RANKS - 1},0`, `${RANKS - 1},${FILES - 1}`]),
)

function isCorner(r: number, f: number) {
  return cornerSet.value.has(`${r},${f}`)
}

// Grid line paths connecting mesh intersections (rows + columns).
const gridPaths = computed(() => {
  const m = props.modelValue
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

// Which nodes are draggable / shown as handles.
const handles = computed(() => {
  const out: { r: number; f: number; corner: boolean }[] = []
  for (let r = 0; r < RANKS; r++) {
    for (let f = 0; f < FILES; f++) {
      const corner = isCorner(r, f)
      if (props.mode === 'mesh' || corner) out.push({ r, f, corner })
    }
  }
  return out
})

function toImageCoords(clientX: number, clientY: number): Point {
  const rect = svgRef.value!.getBoundingClientRect()
  const x = ((clientX - rect.left) / rect.width) * props.naturalWidth
  const y = ((clientY - rect.top) / rect.height) * props.naturalHeight
  return {
    x: Math.min(props.naturalWidth, Math.max(0, x)),
    y: Math.min(props.naturalHeight, Math.max(0, y)),
  }
}

function startDrag(r: number, f: number, e: PointerEvent) {
  e.preventDefault()
  active.value = { r, f }
  ;(e.target as Element).setPointerCapture(e.pointerId)
}

function onMove(e: PointerEvent) {
  if (!active.value) return
  const { r, f } = active.value
  const p = toImageCoords(e.clientX, e.clientY)

  if (props.mode === 'corners') {
    // Dragging a corner rebuilds the whole regular grid via homography.
    const m = props.modelValue
    const corners: BoardCorners = {
      topLeft: r === 0 && f === 0 ? p : m[0][0],
      topRight: r === 0 && f === FILES - 1 ? p : m[0][FILES - 1],
      bottomRight: r === RANKS - 1 && f === FILES - 1 ? p : m[RANKS - 1][FILES - 1],
      bottomLeft: r === RANKS - 1 && f === 0 ? p : m[RANKS - 1][0],
    }
    emit('update:modelValue', meshFromCorners(corners))
  } else {
    // Mesh mode: move only this intersection.
    const next = props.modelValue.map((row) => row.slice())
    next[r][f] = p
    emit('update:modelValue', next)
  }
}

function endDrag() {
  active.value = null
}
</script>

<template>
  <div class="relative w-full select-none overflow-hidden rounded-2xl bg-black">
    <img :src="imageUrl" alt="bàn cờ" class="block w-full" draggable="false" />
    <svg
      ref="svgRef"
      class="absolute inset-0 h-full w-full touch-none"
      :viewBox="`0 0 ${naturalWidth} ${naturalHeight}`"
      preserveAspectRatio="none"
      @pointermove="onMove"
      @pointerup="endDrag"
      @pointercancel="endDrag"
    >
      <path
        v-for="(d, idx) in gridPaths"
        :key="idx"
        :d="d"
        fill="none"
        stroke="rgba(56,189,248,0.75)"
        :stroke-width="unit * 0.14"
        class="pointer-events-none"
      />
      <circle
        v-for="h in handles"
        :key="`${h.r},${h.f}`"
        :cx="modelValue[h.r][h.f].x"
        :cy="modelValue[h.r][h.f].y"
        :r="h.corner ? unit : unit * 0.62"
        :fill="
          active && active.r === h.r && active.f === h.f
            ? '#f59e0b'
            : h.corner
              ? 'rgba(251,191,36,0.9)'
              : 'rgba(56,189,248,0.9)'
        "
        stroke="#0f172a"
        :stroke-width="unit * 0.12"
        class="cursor-grab"
        @pointerdown="startDrag(h.r, h.f, $event)"
      />
    </svg>
  </div>
</template>
