<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{ (e: 'select', file: File): void }>()
const dragging = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)
const cameraInput = ref<HTMLInputElement | null>(null)

function pick(files: FileList | null) {
  const file = files?.[0]
  if (file && file.type.startsWith('image/')) emit('select', file)
}

function onDrop(e: DragEvent) {
  dragging.value = false
  pick(e.dataTransfer?.files ?? null)
}
</script>

<template>
  <div
    class="rounded-2xl border-2 border-dashed transition-colors"
    :class="dragging ? 'border-amber-400 bg-amber-400/10' : 'border-slate-600 bg-slate-800/40'"
    @dragover.prevent="dragging = true"
    @dragleave.prevent="dragging = false"
    @drop.prevent="onDrop"
  >
    <div class="flex flex-col items-center gap-4 px-6 py-10 text-center">
      <div class="text-5xl">♟️</div>
      <div>
        <p class="text-lg font-semibold text-slate-100">Tải ảnh bàn cờ tướng</p>
        <p class="mt-1 text-sm text-slate-400">Kéo–thả ảnh vào đây, hoặc chọn từ máy / chụp ảnh</p>
      </div>
      <div class="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          class="rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-amber-400 active:scale-95"
          @click="fileInput?.click()"
        >
          Chọn ảnh
        </button>
        <button
          type="button"
          class="rounded-xl bg-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:bg-slate-600 active:scale-95 sm:hidden"
          @click="cameraInput?.click()"
        >
          📷 Chụp ảnh
        </button>
      </div>
    </div>

    <input
      ref="fileInput"
      type="file"
      accept="image/*"
      class="hidden"
      @change="pick(($event.target as HTMLInputElement).files)"
    />
    <input
      ref="cameraInput"
      type="file"
      accept="image/*"
      capture="environment"
      class="hidden"
      @change="pick(($event.target as HTMLInputElement).files)"
    />
  </div>
</template>
