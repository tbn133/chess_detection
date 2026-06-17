#!/usr/bin/env python3
"""Export a trained YOLO26n checkpoint to ONNX and copy it into the frontend.

    python export.py                          # auto-find latest best.pt
    python export.py --weights runs/detect/xiangqi-yolo26n/weights/best.pt
    python export.py --imgsz 640 --opset 19

The result is copied to ../frontend/public/models/xiangqi-yolo26n.onnx, which is
exactly where the SPA loads it from.
"""
from __future__ import annotations

import argparse
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent
FRONTEND_MODELS = ROOT.parent / "frontend" / "public" / "models"
TARGET = FRONTEND_MODELS / "xiangqi-yolo26n.onnx"


def find_latest_best() -> Path | None:
    candidates = sorted(
        (ROOT / "runs" / "detect").rglob("weights/best.pt"),
        key=lambda p: p.stat().st_mtime,
        reverse=True,
    )
    return candidates[0] if candidates else None


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--weights", help="path to best.pt (auto-detected if omitted)")
    ap.add_argument("--imgsz", type=int, default=640)
    ap.add_argument("--opset", type=int, default=19)
    ap.add_argument("--no-simplify", action="store_true")
    args = ap.parse_args()

    weights = Path(args.weights) if args.weights else find_latest_best()
    if not weights or not weights.exists():
        raise SystemExit("No best.pt found — train first (python train.py).")
    print(f"Exporting {weights} -> ONNX (imgsz={args.imgsz}, opset={args.opset})")

    from ultralytics import YOLO

    model = YOLO(str(weights))
    onnx_path = Path(
        model.export(
            format="onnx",
            imgsz=args.imgsz,
            opset=args.opset,
            simplify=not args.no_simplify,
            dynamic=False,  # fixed shape -> smaller & faster in onnxruntime-web
            nms=False,      # we run NMS in JS (handles the raw head)
        )
    )

    FRONTEND_MODELS.mkdir(parents=True, exist_ok=True)
    shutil.copy(onnx_path, TARGET)
    size_mb = TARGET.stat().st_size / 1e6
    print(f"\nCopied to {TARGET} ({size_mb:.1f} MB)")
    print("Reload the SPA — the status badge should switch to 'Model sẵn sàng'.")


if __name__ == "__main__":
    main()
