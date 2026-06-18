<script setup lang="ts">
import { computed, ref } from 'vue'
import { FILE_LABELS, FILES, PIECE_TYPE_BY_ID, RANKS } from '../lib/constants'
import { squareLabel } from '../lib/xiangqiFen'
import type { Board, PlacedPiece } from '../lib/types'

const props = defineProps<{ board: Board; placed: PlacedPiece[]; fen: string }>()
const emit = defineEmits<{ (e: 'flip'): void }>()

const copied = ref(false)
const ranks = Array.from({ length: RANKS }, (_, i) => i)
const files = Array.from({ length: FILES }, (_, i) => i)

// --- SVG board geometry: pieces sit ON the 9x10 line intersections ---
const PAD = 0.7
const VB_W = FILES - 1 + PAD * 2
const VB_H = RANKS - 1 + PAD * 2
function X(f: number) {
  return PAD + f
}
function Y(r: number) {
  return PAD + r
}

const hLines = computed(() => ranks.map((r) => `M ${X(0)} ${Y(r)} L ${X(FILES - 1)} ${Y(r)}`))
const vLines = computed(() => {
  const out: string[] = []
  for (const f of files) {
    if (f === 0 || f === FILES - 1) {
      // Border files run the full height.
      out.push(`M ${X(f)} ${Y(0)} L ${X(f)} ${Y(RANKS - 1)}`)
    } else {
      // Inner files break at the river (between rank 4 and rank 5).
      out.push(`M ${X(f)} ${Y(0)} L ${X(f)} ${Y(4)}`)
      out.push(`M ${X(f)} ${Y(5)} L ${X(f)} ${Y(RANKS - 1)}`)
    }
  }
  return out
})
const palace = computed(() => [
  `M ${X(3)} ${Y(0)} L ${X(5)} ${Y(2)}`,
  `M ${X(5)} ${Y(0)} L ${X(3)} ${Y(2)}`,
  `M ${X(3)} ${Y(7)} L ${X(5)} ${Y(9)}`,
  `M ${X(5)} ${Y(7)} L ${X(3)} ${Y(9)}`,
])

const sorted = computed(() =>
  [...props.placed].sort((a, b) => a.rank - b.rank || a.file - b.file),
)
const redCount = computed(() => props.placed.filter((p) => p.color === 'red').length)
const blackCount = computed(() => props.placed.filter((p) => p.color === 'black').length)

function han(p: PlacedPiece) {
  const info = PIECE_TYPE_BY_ID[p.classId]
  return p.color === 'red' ? info.hanRed : info.hanBlack
}
function name(p: PlacedPiece) {
  const info = PIECE_TYPE_BY_ID[p.classId]
  return `${info.vi} (${info.en})`
}

async function copyFen() {
  await navigator.clipboard.writeText(props.fen)
  copied.value = true
  setTimeout(() => (copied.value = false), 1500)
}
</script>

<template>
  <div class="flex flex-col gap-6">
    <!-- Board diagram -->
    <section>
      <div class="mb-2 flex items-center justify-between">
        <h3 class="text-sm font-semibold text-slate-300">Sơ đồ nhận diện</h3>
        <button
          class="rounded-lg bg-slate-700 px-3 py-1 text-xs font-medium text-slate-100 hover:bg-slate-600"
          @click="emit('flip')"
        >
          ↻ Đổi bên
        </button>
      </div>
      <div class="overflow-x-auto rounded-2xl bg-amber-100 p-2">
        <svg :viewBox="`0 0 ${VB_W} ${VB_H}`" class="block w-full" style="min-width: 280px">
          <!-- grid lines -->
          <path
            v-for="(d, i) in [...hLines, ...vLines, ...palace]"
            :key="i"
            :d="d"
            fill="none"
            stroke="#a16207"
            stroke-width="0.035"
            stroke-linecap="round"
          />
          <!-- river -->
          <text
            :x="VB_W / 2"
            :y="Y(4.5)"
            text-anchor="middle"
            dominant-baseline="central"
            font-size="0.5"
            fill="#a16207"
            opacity="0.6"
          >
            楚 河 ⋮ 漢 界
          </text>
          <!-- pieces sit ON intersections -->
          <g v-for="p in placed" :key="`${p.rank}-${p.file}`">
            <circle
              :cx="X(p.file)"
              :cy="Y(p.rank)"
              r="0.43"
              :fill="p.color === 'red' ? '#fee2e2' : '#f1f5f9'"
              :stroke="p.color === 'red' ? '#dc2626' : '#1e293b'"
              stroke-width="0.06"
            />
            <text
              :x="X(p.file)"
              :y="Y(p.rank)"
              text-anchor="middle"
              dominant-baseline="central"
              font-size="0.56"
              font-weight="bold"
              :fill="p.color === 'red' ? '#dc2626' : '#0f172a'"
            >
              {{ han(p) }}
            </text>
          </g>
        </svg>
      </div>
      <p class="mt-2 text-xs text-slate-400">
        Tổng: {{ placed.length }} quân — <span class="text-red-400">Đỏ {{ redCount }}</span> ·
        <span class="text-sky-400">Đen {{ blackCount }}</span>
      </p>
    </section>

    <!-- FEN -->
    <section>
      <h3 class="mb-2 text-sm font-semibold text-slate-300">Xiangqi FEN</h3>
      <div class="flex items-stretch gap-2">
        <code class="flex-1 break-all rounded-xl bg-slate-900 px-3 py-2 text-xs text-emerald-300">{{ fen }}</code>
        <button
          class="shrink-0 rounded-xl bg-emerald-600 px-3 py-2 text-xs font-semibold text-white hover:bg-emerald-500"
          @click="copyFen"
        >
          {{ copied ? '✓ Đã copy' : 'Copy' }}
        </button>
      </div>
    </section>

    <!-- Position list -->
    <section>
      <h3 class="mb-2 text-sm font-semibold text-slate-300">Danh sách vị trí</h3>
      <div class="overflow-hidden rounded-xl border border-slate-700">
        <table class="w-full text-left text-sm">
          <thead class="bg-slate-800 text-slate-400">
            <tr>
              <th class="px-3 py-2 font-medium">Vị trí</th>
              <th class="px-3 py-2 font-medium">Quân</th>
              <th class="px-3 py-2 font-medium">Bên</th>
              <th class="px-3 py-2 text-right font-medium">Tin cậy</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800">
            <tr v-for="p in sorted" :key="`${p.rank}-${p.file}`" class="bg-slate-900/50">
              <td class="px-3 py-1.5 font-mono text-slate-200">{{ squareLabel(p.file, p.rank) }}</td>
              <td class="px-3 py-1.5">
                <span :class="p.color === 'red' ? 'text-red-400' : 'text-sky-400'">{{ han(p) }}</span>
                <span class="ml-1 text-slate-300">{{ name(p) }}</span>
              </td>
              <td class="px-3 py-1.5" :class="p.color === 'red' ? 'text-red-400' : 'text-sky-400'">
                {{ p.color === 'red' ? 'Đỏ' : 'Đen' }}
              </td>
              <td class="px-3 py-1.5 text-right font-mono text-slate-400">
                {{ (p.score * 100).toFixed(0) }}%
              </td>
            </tr>
            <tr v-if="!sorted.length">
              <td colspan="4" class="px-3 py-4 text-center text-slate-500">Chưa có quân nào</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="mt-2 text-[11px] text-slate-500">
        Cột {{ FILE_LABELS.join(' ') }} (trái→phải), hàng 0–9 (trên→dưới).
      </p>
    </section>
  </div>
</template>
