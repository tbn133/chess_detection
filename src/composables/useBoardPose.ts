import { ref, shallowRef } from 'vue'
import * as ort from 'onnxruntime-web'
import { letterbox } from '../lib/preprocess'
import { decodePose } from '../lib/poseDecode'
import type { BoardCorners, ModelStatus } from '../lib/types'

const BOARD_MODEL_URL = `${import.meta.env.BASE_URL}models/board-pose.onnx`

/**
 * Board-corner detector: a YOLO-pose model that predicts the 4 board corners.
 * Loaded lazily; if the model file is absent the caller falls back to OpenCV /
 * the piece-cloud estimate.
 */
export function useBoardPose(modelUrl: string = BOARD_MODEL_URL) {
  const status = ref<ModelStatus>('idle')
  const session = shallowRef<ort.InferenceSession | null>(null)
  const inputName = ref('images')
  let loadOnce: Promise<void> | null = null

  function load(): Promise<void> {
    if (loadOnce) return loadOnce
    loadOnce = (async () => {
      status.value = 'loading'
      try {
        const head = await fetch(modelUrl, { method: 'HEAD' })
        if (!head.ok) {
          status.value = 'missing'
          return
        }
        const providers = ('gpu' in navigator ? ['webgpu', 'wasm'] : ['wasm']) as
          ort.InferenceSession.ExecutionProviderConfig[]
        const s = await ort.InferenceSession.create(modelUrl, {
          executionProviders: providers,
          graphOptimizationLevel: 'all',
        })
        session.value = s
        inputName.value = s.inputNames[0] ?? 'images'
        status.value = 'ready'
      } catch {
        status.value = 'error'
      }
    })()
    return loadOnce
  }

  /** Detect the board's 4 corners, or null if no model / no confident board. */
  async function detectCorners(
    source: CanvasImageSource,
    srcWidth: number,
    srcHeight: number,
  ): Promise<BoardCorners | null> {
    await load()
    const s = session.value
    if (!s) return null
    const { data, width, height, lb } = letterbox(source, srcWidth, srcHeight)
    const tensor = new ort.Tensor('float32', data, [1, 3, height, width])
    const outputs = await s.run({ [inputName.value]: tensor })
    const out = outputs[s.outputNames[0]]
    return decodePose(out.data as Float32Array, out.dims, lb, 0.25)
  }

  return { status, load, detectCorners }
}
