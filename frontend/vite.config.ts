import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// onnxruntime-web ships its wasm assets; exclude from optimizeDeps so the
// .wasm / .mjs binaries are served as-is and resolved at runtime.
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  optimizeDeps: {
    exclude: ['onnxruntime-web'],
  },
  server: {
    headers: {
      // Enable cross-origin isolation so onnxruntime-web can use multi-threaded WASM / SIMD.
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
})
