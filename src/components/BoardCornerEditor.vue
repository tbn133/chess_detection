<script setup lang="ts">
import { computed, ref } from 'vue'
import type { BoardCorners, Point } from '../lib/types'

const props = defineProps<{
  imageUrl: string
  naturalWidth: number
  naturalHeight: number
  modelValue: BoardCorners
}>()
const emit = defineEmits<{ (e: 'update:modelValue', v: BoardCorners): void }>()

const svgRef = ref<SVGSVGElement | null>(null)
const activeKey = ref<keyof BoardCorners | null>(null)

const cornerKeys: { key: keyof BoardCorners; label: string }[] = [
  { key: 'topLeft', label: 'TL' },
  { key: 'topRight', label: 'TR' },
  { key: 'bottomRight', label: 'BR' },
  { key: 'bottomLeft', label: 'BL' },
]

const polygonPoints = computed(() => {
  const c = props.modelValue
  return [c.topLeft, c.topRight, c.bottomRight, c.bottomLeft]
    .map((p) => `${p.x},${p.y}`)
    .join(' ')
})

// Handle/line sizes scale with the image so they stay tappable on big photos.
const unit = computed(() => Math.max(props.naturalWidth, props.naturalHeight) / 60)

function toImageCoords(clientX: number, clientY: number): Point {
  const rect = svgRef.value!.getBoundingClientRect()
  const x = ((clientX - rect.left) / rect.width) * props.naturalWidth
  const y = ((clientY - rect.top) / rect.height) * props.naturalHeight
  return {
    x: Math.min(props.naturalWidth, Math.max(0, x)),
    y: Math.min(props.naturalHeight, Math.max(0, y)),
  }
}

function startDrag(key: keyof BoardCorners, e: PointerEvent) {
  e.preventDefault()
  activeKey.value = key
  ;(e.target as Element).setPointerCapture(e.pointerId)
}

function onMove(e: PointerEvent) {
  if (!activeKey.value) return
  const p = toImageCoords(e.clientX, e.clientY)
  emit('update:modelValue', { ...props.modelValue, [activeKey.value]: p })
}

function endDrag() {
  activeKey.value = null
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
      <polygon
        :points="polygonPoints"
        fill="rgba(251,191,36,0.12)"
        stroke="#fbbf24"
        :stroke-width="unit * 0.35"
      />
      <g v-for="c in cornerKeys" :key="c.key">
        <circle
          :cx="modelValue[c.key].x"
          :cy="modelValue[c.key].y"
          :r="unit"
          :fill="activeKey === c.key ? '#f59e0b' : 'rgba(251,191,36,0.85)'"
          stroke="#1e293b"
          :stroke-width="unit * 0.18"
          class="cursor-grab"
          @pointerdown="startDrag(c.key, $event)"
        />
        <text
          :x="modelValue[c.key].x"
          :y="modelValue[c.key].y - unit * 1.4"
          :font-size="unit * 1.1"
          fill="#fde68a"
          text-anchor="middle"
          class="pointer-events-none font-bold"
        >
          {{ c.label }}
        </text>
      </g>
    </svg>
  </div>
</template>
