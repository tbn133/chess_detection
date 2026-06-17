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
      <div class="overflow-x-auto rounded-2xl bg-amber-100/95 p-2">
        <div
          class="grid gap-0"
          :style="{ gridTemplateColumns: `repeat(${FILES}, minmax(0, 1fr))`, minWidth: '320px' }"
        >
          <template v-for="r in ranks" :key="r">
            <div
              v-for="f in files"
              :key="`${r}-${f}`"
              class="relative flex aspect-square items-center justify-center border border-amber-700/30"
            >
              <span
                v-if="board[r][f]"
                class="flex h-[78%] w-[78%] items-center justify-center rounded-full border-2 text-[2.6vw] font-bold leading-none sm:text-base"
                :class="
                  board[r][f]!.color === 'red'
                    ? 'border-red-600 bg-amber-50 text-red-600'
                    : 'border-slate-800 bg-amber-50 text-slate-900'
                "
              >
                {{ han(board[r][f]!) }}
              </span>
            </div>
          </template>
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
