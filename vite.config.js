import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
// onnxruntime-web ships its wasm assets; exclude from optimizeDeps so the
// .wasm / .mjs binaries are served as-is and resolved at runtime.
//
// `base` is '/chess_detection/' for the production build so it works as a
// GitHub Pages project site (https://tbn133.github.io/chess_detection/), and
// '/' during local dev.
export default defineConfig(function (_a) {
    var command = _a.command;
    return ({
        base: command === 'build' ? '/chess_detection/' : '/',
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
    });
});
