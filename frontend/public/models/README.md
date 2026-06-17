# Models

Place the exported detection model here as **`xiangqi-yolo26n.onnx`**.

The app loads `/(/base)/models/xiangqi-yolo26n.onnx` at runtime. If the file is
absent the UI shows a "Chưa có model" banner with training instructions instead
of crashing.

Produce the file with the training pipeline:

```bash
cd ../../training
pip install -r requirements.txt
python download_dataset.py --source huggingface
python train.py --epochs 100
python export.py            # exports best.pt -> ONNX and copies it here
```

The exported model must use the 7-class order defined in `training/data.yaml`
(xe, ma, tuong, si, vua, phao, tot) — the same order as
`frontend/src/lib/constants.ts`.
