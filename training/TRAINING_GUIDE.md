# Training Guide — Improving the Xiangqi Detector

This guide walks through training the YOLO26n model and, more importantly, the
loop you use to **raise accuracy** when results are not good enough.

## 0. Setup

```bash
cd training
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
```

GPU is strongly recommended. On Apple Silicon, pass `--device mps`.

## 1. Get data (three options)

```bash
# (1) Reliable public dataset — recommended starting point (~1,700 images)
python download_dataset.py --source huggingface

# (2) Your own labelled data — just place it and validate the layout
python download_dataset.py --source custom

# (3) Add a Roboflow Universe dataset (YOLOv8 export)
python download_dataset.py --source roboflow \
  --api-key <KEY> --workspace <WS> --project <PROJECT> --version <N>
```

All three write to `datasets/xiangqi/{images,labels}/{train,val}`.

> The detector predicts **piece type only** (7 classes). Red/black colour is
> decided in the browser from pixel colour, so you never label colour.

## 2. Train

```bash
python train.py --epochs 100            # baseline
python train.py --epochs 200 --imgsz 800 --device 0   # higher accuracy
```

Outputs: `runs/detect/xiangqi-yolo26n/`. The console prints final mAP, and
`results.png`, `confusion_matrix.png`, and prediction previews are saved there.

## 3. Export to ONNX (for the SPA)

```bash
python export.py
```

This copies `xiangqi-yolo26n.onnx` into `frontend/public/models/`. Reload the
app — the badge flips to "Model sẵn sàng".

---

## The accuracy-improvement loop

Treat accuracy as an iterative loop, not a one-shot. After each training run,
read the metrics, find the weakest class/scenario, fix the **data**, retrain.

### Step A — Read the metrics

- **`runs/.../results.png`** — loss should fall and mAP rise then plateau. If
  mAP is still climbing at the last epoch, train longer.
- **`confusion_matrix.png`** — which piece types get confused. Common: `tuong`
  (相/象) vs `si` (仕/士), and `vua` vs `si` because shapes are similar.
- **`val_batch*_pred.jpg`** — eyeball real failures (missed pieces, doubled
  boxes, wrong class).

Targets: aim for **mAP50 > 0.95** and **mAP50-95 > 0.75** before trusting it.

### Step B — Fix the data (biggest lever)

Data quality beats hyperparameters almost every time:

1. **Add images of YOUR failure cases.** If it fails on your phone photos at an
   angle, photograph 30–50 such boards and label them. 50 targeted images often
   beat 500 generic ones.
2. **Balance classes.** There are ~5× more soldiers than generals. If a rare
   class (`vua`) has low recall, add images featuring it.
3. **Vary conditions:** lighting, glare, board styles, piece fonts, phone vs
   webcam, slight blur.
4. **Clean labels.** One mislabelled `tuong`/`si` poisons the class. Re-check the
   confused pairs from the confusion matrix.

**Labelling tools:** [CVAT](https://www.cvat.ai/), [Label Studio](https://labelstud.io/),
[Roboflow](https://roboflow.com/annotate), or AnyLabeling (the format the HF
dataset uses). Export **YOLO** format and drop into `datasets/xiangqi`.

### Step C — Tune the knobs (after data is solid)

- **Bigger imgsz** (`--imgsz 800/960`): pieces are small; more pixels = better
  small-object recall. Biggest single win, costs speed.
- **Bigger model** (`--model yolo26s.pt` or `yolo26m.pt`): more capacity. Still
  exports to ONNX and runs in-browser, just larger/slower.
- **More epochs + patience**: `--epochs 300 --patience 50`.
- **Augmentation** lives in `train.py`. Notes:
  - `perspective`/`degrees` help photographed boards. Keep modest.
  - `fliplr` is **disabled on purpose** — mirroring is fine for shapes, and since
    colour is decided separately it is safe to enable if you want more data, but
    leave off if you later add left/right-aware logic.
  - Lower `hsv_*` if colour shifts hurt the in-browser red/black split.

### Step D — Validate the whole pipeline, not just mAP

mAP measures boxes, but the app also needs correct **board mapping** and
**colour**. After export, test end-to-end in the SPA on held-out photos:

- Wrong square? Usually corner placement, not the model — corners must sit on the
  outer **intersections**, not the board's painted border.
- Wrong colour? Tune the thresholds in
  `frontend/src/lib/colorClassify.ts` (`countColorVotes`) for your piece set, or
  improve lighting in the photo.

### Step E — Repeat

Add failure-case data → retrain → re-export → re-test. Two or three loops
usually take a rough model to reliable.

---

## Speed/size tips for in-browser inference

- `yolo26n` at `imgsz 640` is the sweet spot for browser use.
- Keep `dynamic=False` on export (done by `export.py`) — fixed shapes are faster
  in onnxruntime-web.
- If the ONNX is large, try `--imgsz 512`. If accuracy on small pieces drops,
  go back to 640 and accept the size.
