import { ref, shallowRef } from 'vue'
import * as ort from 'onnxruntime-web'
import { CLASS_NAMES } from '../lib/constants'
import { letterbox } from '../lib/preprocess'
import { decodeYolo } from '../lib/yoloDecode'
import { nms } from '../lib/nms'
import type { Detection, ModelStatus } from '../lib/types'

// Serve the WASM/threading binaries from a CDN so we don't have to copy them
// into /public. Pinned to the installed onnxruntime-web version.
const ORT_VERSION = '1.20.1'
ort.env.wasm.wasmPaths = `https://cdn.jsdelivr.net/npm/onnxruntime-web@${ORT_VERSION}/dist/`

const DEFAULT_MODEL_URL = `${import.meta.env.BASE_URL}models/xiangqi-yolo26n.onnx`

export interface DetectOptions {
  scoreThreshold?: number
  iouThreshold?: number
}

export function useYolo(modelUrl: string = DEFAULT_MODEL_URL) {
  const status = ref<ModelStatus>('idle')
  const error = ref<string | null>(null)
  const session = shallowRef<ort.InferenceSession | null>(null)
  const inputName = ref<string>('images')
  const backend = ref<string>('')

  async function load(): Promise<void> {
    if (session.value) return
    status.value = 'loading'
    error.value = null
    try {
      // Probe first so a missing model gives a friendly state, not a stack trace.
      const head = await fetch(modelUrl, { method: 'HEAD' })
      if (!head.ok) {
        status.value = 'missing'
        return
      }

      // Prefer WebGPU when available, fall back to multi-threaded WASM.
      const providers: ort.InferenceSession.ExecutionProviderConfig[] =
        'gpu' in navigator ? ['webgpu', 'wasm'] : ['wasm']
      const s = await ort.InferenceSession.create(modelUrl, {
        executionProviders: providers,
        graphOptimizationLevel: 'all',
      })
      session.value = s
      inputName.value = s.inputNames[0] ?? 'images'
      backend.value = providers[0] as string
      status.value = 'ready'
    } catch (e) {
      status.value = 'error'
      error.value = e instanceof Error ? e.message : String(e)
    }
  }

  async function detect(
    source: CanvasImageSource,
    srcWidth: number,
    srcHeight: number,
    opts: DetectOptions = {},
  ): Promise<Detection[]> {
    const s = session.value
    if (!s) throw new Error('Model chưa sẵn sàng')

    const { data, width, height, lb } = letterbox(source, srcWidth, srcHeight)
    const tensor = new ort.Tensor('float32', data, [1, 3, height, width])
    const outputs = await s.run({ [inputName.value]: tensor })
    const out = outputs[s.outputNames[0]]

    const raw = decodeYolo(
      out.data as Float32Array,
      out.dims,
      CLASS_NAMES.length,
      lb,
      opts.scoreThreshold ?? 0.25,
    )
    return nms(raw, opts.iouThreshold ?? 0.45)
  }

  return { status, error, backend, load, detect }
}
