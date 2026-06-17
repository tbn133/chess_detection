# Xiangqi Vision

Single-page app that takes a **photo of a Chinese chess (cờ tướng / 象棋) board**
and returns each piece's **board position, name, side (red/black), and a Xiangqi
FEN**. Detection runs entirely **in the browser** with YOLO26n exported to ONNX —
images never leave the device.

```
xiangqi-vision/
├── frontend/   # Vue 3 + Vite + TypeScript + Tailwind v4 SPA (onnxruntime-web)
└── training/   # Python: dataset prep, YOLO26n training, ONNX export, guide
```

## How it works

1. **Upload / capture** a board photo (camera supported on mobile).
2. **Mark the 4 corner intersections** by dragging handles (perspective-tolerant).
3. **Detect** — YOLO26n (ONNX) finds the 7 piece *types*; a pixel-colour pass
   labels each as **red** or **black**.
4. **Map** — a homography projects each piece onto the 9×10 grid and snaps it to
   the nearest of the 90 intersections (highest score wins ties).
5. **Output** — annotated image, position table (e.g. `e9 → 帥 Tướng / Đỏ`), and a
   copyable Xiangqi FEN.

## Quick start (frontend)

```bash
cd frontend
npm install
npm run dev        # http://localhost:5173
npm test           # unit tests for homography / mapping / FEN / colour / decode
npm run build
```

Without a trained model the app runs and shows a "Chưa có model" banner with
instructions. Produce the model with the training pipeline below.

## Train the model

```bash
cd training
pip install -r requirements.txt
python download_dataset.py --source huggingface   # ~1.7k labelled images
python train.py --epochs 100
python export.py                                   # -> frontend/public/models/xiangqi-yolo26n.onnx
```

See **`training/TRAINING_GUIDE.md`** for the full accuracy-improvement loop
(reading metrics, fixing data, tuning, end-to-end validation).

## Key design notes

- **7 classes, not 14.** The detector predicts piece *type* only; colour is
  resolved from pixels. This matches the most reliable public dataset
  ([vietanhdev/chessai-data](https://huggingface.co/datasets/vietanhdev/chessai-data))
  and improves accuracy with limited data.
- **Class order is a contract.** `training/data.yaml` `names` and
  `frontend/src/lib/constants.ts` `PIECE_TYPES` must stay in the same order.
- **Pure-browser inference.** onnxruntime-web with WebGPU → WASM fallback; WASM
  binaries are served from a pinned CDN (`useYolo.ts`).
- **FEN convention.** Ranks top→bottom, files left→right, red uppercase / black
  lowercase, letters `K A B N R C P`.

## Data sources researched

| Source | Size | Notes |
|---|---|---|
| [vietanhdev/chessai-data](https://huggingface.co/datasets/vietanhdev/chessai-data) | ~1,747 imgs, 18,790 boxes | COCO, 7 type classes — primary |
| [Roboflow "New Chinese Chess"](https://universe.roboflow.com/kurnia-harryadha/new-chinese-chess) | ~1,242 imgs | YOLO export, easy to merge |
| [nrl-ai/chessai](https://github.com/nrl-ai/chessai) | — | YOLOX reference; data proprietary |

Licensing: the HF dataset states no explicit licence (cite via its DOI) — fine
for research/personal training; verify before commercial use.
