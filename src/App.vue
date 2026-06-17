<script setup lang="ts">
import { computed, ref } from 'vue'
import ImageUploader from './components/ImageUploader.vue'
import BoardCornerEditor from './components/BoardCornerEditor.vue'
import DetectionCanvas from './components/DetectionCanvas.vue'
import ResultPanel from './components/ResultPanel.vue'
import { useYolo } from './composables/useYolo'
import { classifyDetections } from './lib/extractColors'
import { mapDetectionsToBoard, type MappingResult } from './lib/boardMapping'
import { boardToFen, flipBoard } from './lib/xiangqiFen'
import type { Board, BoardCorners, PlacedPiece } from './lib/types'

const { status, error: modelError, backend, load, detect } = useYolo()

const imageUrl = ref<string | null>(null)
const image = ref<HTMLImageElement | null>(null)
const naturalWidth = ref(0)
const naturalHeight = ref(0)
const corners = ref<BoardCorners | null>(null)

const processing = ref(false)
const analyzeError = ref<string | null>(null)
const result = ref<MappingResult | null>(null)
const flipped = ref(false)

const displayBoard = computed<Board | null>(() => {
  if (!result.value) return null
  return flipped.value ? flipBoard(result.value.board) : result.value.board
})
const displayPlaced = computed<PlacedPiece[]>(() => {
  const b = displayBoard.value
  if (!b) return []
  return b.flat().filter((p): p is PlacedPiece => p !== null)
})
const fen = computed(() => (displayBoard.value ? boardToFen(displayBoard.value) : ''))

function defaultCorners(w: number, h: number): BoardCorners {
  const mx = w * 0.06
  const my = h * 0.06
  return {
    topLeft: { x: mx, y: my },
    topRight: { x: w - mx, y: my },
    bottomRight: { x: w - mx, y: h - my },
    bottomLeft: { x: mx, y: h - my },
  }
}

function onSelect(file: File) {
  if (imageUrl.value) URL.revokeObjectURL(imageUrl.value)
  result.value = null
  analyzeError.value = null
  flipped.value = false
  const url = URL.createObjectURL(file)
  imageUrl.value = url
  const img = new Image()
  img.onload = () => {
    image.value = img
    naturalWidth.value = img.naturalWidth
    naturalHeight.value = img.naturalHeight
    corners.value = defaultCorners(img.naturalWidth, img.naturalHeight)
  }
  img.src = url
}

async function analyze() {
  if (!image.value || !corners.value) return
  processing.value = true
  analyzeError.value = null
  result.value = null
  try {
    if (status.value !== 'ready') await load()
    if (status.value === 'missing') return // banner handles messaging
    if (status.value !== 'ready') {
      analyzeError.value = modelError.value ?? 'Không tải được model'
      return
    }

    const detections = await detect(image.value, naturalWidth.value, naturalHeight.value)

    // Sample colours from the full-resolution image.
    const canvas = document.createElement('canvas')
    canvas.width = naturalWidth.value
    canvas.height = naturalHeight.value
    const ctx = canvas.getContext('2d', { willReadFrequently: true })!
    ctx.drawImage(image.value, 0, 0)
    const colored = classifyDetections(ctx, detections)

    result.value = mapDetectionsToBoard(colored, corners.value)
  } catch (e) {
    analyzeError.value = e instanceof Error ? e.message : String(e)
  } finally {
    processing.value = false
  }
}

function reset() {
  if (imageUrl.value) URL.revokeObjectURL(imageUrl.value)
  imageUrl.value = null
  image.value = null
  result.value = null
  corners.value = null
}
</script>

<template>
  <div class="min-h-full bg-slate-950 text-slate-100">
    <header class="border-b border-slate-800 bg-slate-900/70 backdrop-blur">
      <div class="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <div class="flex items-center gap-2">
          <span class="text-2xl">♟️</span>
          <div>
            <h1 class="text-base font-bold sm:text-lg">Xiangqi Vision</h1>
            <p class="text-[11px] text-slate-400">Nhận diện cờ tướng · YOLO26n + ONNX (chạy trong trình duyệt)</p>
          </div>
        </div>
        <span
          class="rounded-full px-2.5 py-1 text-[11px] font-medium"
          :class="{
            'bg-slate-700 text-slate-300': status === 'idle' || status === 'loading',
            'bg-emerald-600/20 text-emerald-300': status === 'ready',
            'bg-amber-600/20 text-amber-300': status === 'missing',
            'bg-red-600/20 text-red-300': status === 'error',
          }"
        >
          {{
            status === 'ready'
              ? `Model sẵn sàng (${backend})`
              : status === 'loading'
                ? 'Đang tải model…'
                : status === 'missing'
                  ? 'Chưa có model'
                  : status === 'error'
                    ? 'Lỗi model'
                    : 'Model chưa tải'
          }}
        </span>
      </div>
    </header>

    <main class="mx-auto max-w-5xl px-4 py-6">
      <!-- Missing-model guide -->
      <div
        v-if="status === 'missing'"
        class="mb-6 rounded-2xl border border-amber-700/50 bg-amber-900/20 p-4 text-sm text-amber-100"
      >
        <p class="font-semibold">Chưa tìm thấy <code>public/models/xiangqi-yolo26n.onnx</code></p>
        <p class="mt-1 text-amber-200/80">
          App đã tích hợp sẵn pipeline. Hãy train model cờ tướng rồi đặt file ONNX vào
          <code>frontend/public/models/</code>. Xem hướng dẫn trong <code>training/TRAINING_GUIDE.md</code>:
        </p>
        <pre class="mt-2 overflow-x-auto rounded-lg bg-slate-900/80 p-3 text-xs text-emerald-300">cd training
pip install -r requirements.txt
python download_dataset.py --source huggingface
python train.py --epochs 100
python export.py   # tạo & copy ONNX sang frontend/public/models/</pre>
      </div>

      <div v-if="!imageUrl">
        <ImageUploader @select="onSelect" />
      </div>

      <div v-else class="grid gap-6 lg:grid-cols-2">
        <!-- Left: input + corners -->
        <div class="flex flex-col gap-3">
          <div class="flex items-center justify-between">
            <h2 class="text-sm font-semibold text-slate-300">
              {{ result ? 'Ảnh gốc + 4 góc' : 'Kéo 4 góc vào 4 giao điểm góc bàn cờ' }}
            </h2>
            <button class="text-xs text-slate-400 underline hover:text-slate-200" @click="reset">
              Ảnh khác
            </button>
          </div>
          <BoardCornerEditor
            v-if="corners && !result"
            v-model="corners"
            :image-url="imageUrl"
            :natural-width="naturalWidth"
            :natural-height="naturalHeight"
          />
          <DetectionCanvas
            v-else-if="result && image"
            :image="image"
            :natural-width="naturalWidth"
            :natural-height="naturalHeight"
            :corners="corners!"
            :placed="displayPlaced"
          />

          <div class="flex gap-3">
            <button
              v-if="!result"
              class="flex-1 rounded-xl bg-amber-500 px-4 py-3 font-semibold text-slate-900 hover:bg-amber-400 disabled:opacity-50"
              :disabled="processing"
              @click="analyze"
            >
              {{ processing ? 'Đang phân tích…' : 'Phân tích bàn cờ' }}
            </button>
            <button
              v-else
              class="flex-1 rounded-xl bg-slate-700 px-4 py-3 font-semibold text-slate-100 hover:bg-slate-600"
              @click="result = null"
            >
              ← Chỉnh lại 4 góc
            </button>
          </div>

          <p v-if="analyzeError" class="rounded-lg bg-red-900/30 px-3 py-2 text-sm text-red-300">
            {{ analyzeError }}
          </p>
        </div>

        <!-- Right: results -->
        <div>
          <ResultPanel
            v-if="result && displayBoard"
            :board="displayBoard"
            :placed="displayPlaced"
            :fen="fen"
            @flip="flipped = !flipped"
          />
          <div
            v-else
            class="flex h-full items-center justify-center rounded-2xl border border-dashed border-slate-700 p-8 text-center text-sm text-slate-500"
          >
            Căn 4 góc rồi bấm “Phân tích bàn cờ” để xem vị trí &amp; tên quân.
          </div>
        </div>
      </div>

      <footer class="mt-10 text-center text-[11px] text-slate-600">
        Chạy hoàn toàn trong trình duyệt — ảnh không rời khỏi thiết bị của bạn.
      </footer>
    </main>
  </div>
</template>
