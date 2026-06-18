<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { FILE_LABELS, FILES, PIECE_TYPES, PIECE_TYPE_BY_ID, RANKS } from '../lib/constants'
import type { PieceColor } from '../lib/constants'
import { squareLabel } from '../lib/xiangqiFen'
import { validateXiangqi, type ValidationResult } from '../lib/validateXiangqi'
import type { Board, PlacedPiece } from '../lib/types'

const props = defineProps<{ board: Board; fen: string }>()
const emit = defineEmits<{ (e: 'flip'): void; (e: 'update', board: Board): void }>()

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
      out.push(`M ${X(f)} ${Y(0)} L ${X(f)} ${Y(RANKS - 1)}`)
    } else {
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

const placed = computed<PlacedPiece[]>(() =>
  props.board.flat().filter((p): p is PlacedPiece => p !== null),
)
const sorted = computed(() => [...placed.value].sort((a, b) => a.rank - b.rank || a.file - b.file))
const redCount = computed(() => placed.value.filter((p) => p.color === 'red').length)
const blackCount = computed(() => placed.value.filter((p) => p.color === 'black').length)

function han(p: { classId: number; color: PieceColor }) {
  const info = PIECE_TYPE_BY_ID[p.classId]
  return p.color === 'red' ? info.hanRed : info.hanBlack
}
function name(p: PlacedPiece) {
  const info = PIECE_TYPE_BY_ID[p.classId]
  return `${info.vi} (${info.en})`
}

// --- Manual editing ---
type Tool = { classId: number; color: PieceColor } | 'erase' | null
const tool = ref<Tool>(null)
const editing = ref(false)

function toolKey(t: Tool) {
  return t === null ? 'none' : t === 'erase' ? 'erase' : `${t.color}-${t.classId}`
}
function pickPiece(classId: number, color: PieceColor) {
  const same = tool.value && tool.value !== 'erase' && tool.value.classId === classId && tool.value.color === color
  tool.value = same ? null : { classId, color }
}
function pickErase() {
  tool.value = tool.value === 'erase' ? null : 'erase'
}

function onIntersection(r: number, f: number) {
  if (!editing.value || !tool.value) return
  const next = props.board.map((row) => row.slice())
  if (tool.value === 'erase') {
    next[r][f] = null
  } else {
    const { classId, color } = tool.value
    next[r][f] = {
      classId,
      type: PIECE_TYPE_BY_ID[classId].type,
      color,
      file: f,
      rank: r,
      score: 1,
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0,
    }
  }
  emit('update', next)
}

async function copyFen() {
  await navigator.clipboard.writeText(props.fen)
  copied.value = true
  setTimeout(() => (copied.value = false), 1500)
}

// --- FEN / position validation ---
const validation = ref<ValidationResult | null>(null)
function checkFen() {
  validation.value = validateXiangqi(props.board)
}
// Reset the verdict whenever the board changes (edit/flip) so it isn't stale.
watch(
  () => props.board,
  () => (validation.value = null),
)
</script>

<template>
  <div class="flex flex-col gap-6">
    <!-- Board diagram -->
    <section>
      <div class="mb-2 flex flex-wrap items-center justify-between gap-2">
        <h3 class="text-sm font-semibold text-slate-300">Sơ đồ nhận diện</h3>
        <div class="flex items-center gap-2">
          <button
            class="rounded-lg px-3 py-1 text-xs font-medium"
            :class="editing ? 'bg-emerald-600 text-white' : 'bg-slate-700 text-slate-100 hover:bg-slate-600'"
            @click="editing = !editing"
          >
            {{ editing ? '✓ Đang sửa' : '✎ Sửa tay' }}
          </button>
          <button
            class="rounded-lg bg-slate-700 px-3 py-1 text-xs font-medium text-slate-100 hover:bg-slate-600"
            @click="emit('flip')"
          >
            ↻ Đổi bên
          </button>
        </div>
      </div>

      <div class="overflow-x-auto rounded-2xl bg-amber-100 p-2">
        <svg :viewBox="`0 0 ${VB_W} ${VB_H}`" class="block w-full" style="min-width: 280px">
          <path
            v-for="(d, i) in [...hLines, ...vLines, ...palace]"
            :key="i"
            :d="d"
            fill="none"
            stroke="#a16207"
            stroke-width="0.035"
            stroke-linecap="round"
          />
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
          <!-- pieces -->
          <g v-for="p in placed" :key="`${p.rank}-${p.file}`" class="pointer-events-none">
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
          <!-- click targets for manual editing -->
          <template v-if="editing">
            <g v-for="r in ranks" :key="`row-${r}`">
              <circle
                v-for="f in files"
                :key="`hit-${r}-${f}`"
                :cx="X(f)"
                :cy="Y(r)"
                r="0.5"
                fill="transparent"
                class="cursor-pointer"
                @click="onIntersection(r, f)"
              />
            </g>
          </template>
        </svg>
      </div>

      <!-- editing palette -->
      <div v-if="editing" class="mt-2 rounded-xl bg-slate-800/60 p-2">
        <p class="mb-1.5 text-[11px] text-slate-400">
          Chọn quân rồi bấm vào giao điểm để đặt/đổi. Chọn 🚫 để xoá.
        </p>
        <div class="space-y-1">
          <div v-for="color in (['red', 'black'] as const)" :key="color" class="flex flex-wrap gap-1">
            <button
              v-for="t in PIECE_TYPES"
              :key="`${color}-${t.id}`"
              class="flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-bold transition"
              :class="[
                color === 'red' ? 'bg-amber-50 text-red-600 border-red-500' : 'bg-slate-100 text-slate-900 border-slate-700',
                toolKey(tool) === `${color}-${t.id}` ? 'ring-2 ring-emerald-400 scale-110' : 'opacity-90 hover:opacity-100',
              ]"
              @click="pickPiece(t.id, color)"
            >
              {{ color === 'red' ? t.hanRed : t.hanBlack }}
            </button>
            <span v-if="color === 'red'" class="self-center text-[11px] text-red-400">Đỏ</span>
            <span v-else class="self-center text-[11px] text-sky-400">Đen</span>
          </div>
          <button
            class="mt-1 rounded-lg px-3 py-1 text-xs font-medium"
            :class="tool === 'erase' ? 'bg-rose-600 text-white' : 'bg-slate-700 text-slate-100 hover:bg-slate-600'"
            @click="pickErase"
          >
            🚫 Xoá quân
          </button>
        </div>
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
      <div class="mt-2">
        <button
          class="rounded-xl bg-indigo-600 px-3 py-2 text-xs font-semibold text-white hover:bg-indigo-500"
          @click="checkFen"
        >
          ✓ Kiểm tra thế cờ
        </button>
        <div
          v-if="validation"
          class="mt-2 rounded-xl px-3 py-2 text-xs"
          :class="validation.ok ? 'bg-emerald-900/30 text-emerald-300' : 'bg-rose-900/30 text-rose-200'"
        >
          <p v-if="validation.ok" class="font-semibold">✓ Thế cờ hợp lệ</p>
          <template v-else>
            <p class="mb-1 font-semibold">⚠ Có {{ validation.issues.length }} vấn đề:</p>
            <ul class="list-disc space-y-0.5 pl-4">
              <li v-for="(issue, i) in validation.issues" :key="i">{{ issue }}</li>
            </ul>
          </template>
        </div>
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
            </tr>
            <tr v-if="!sorted.length">
              <td colspan="3" class="px-3 py-4 text-center text-slate-500">Chưa có quân nào</td>
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
