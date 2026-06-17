#!/usr/bin/env python3
"""Train a YOLO26n Xiangqi piece detector with Ultralytics.

Examples:
    python train.py                          # 100 epochs, imgsz 640, yolo26n
    python train.py --epochs 200 --imgsz 800 --batch 16
    python train.py --model yolo26s.pt       # larger backbone for more accuracy

The best weights land in runs/detect/<name>/weights/best.pt. Run export.py next.
"""
from __future__ import annotations

import argparse
from pathlib import Path

ROOT = Path(__file__).resolve().parent


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--model", default="yolo26n.pt", help="base checkpoint (yolo26n/s/m...)")
    ap.add_argument("--data", default=str(ROOT / "data.yaml"))
    ap.add_argument("--epochs", type=int, default=100)
    ap.add_argument("--imgsz", type=int, default=640)
    ap.add_argument("--batch", type=int, default=16)
    ap.add_argument("--device", default=None, help="e.g. 0, 0,1, cpu, mps")
    ap.add_argument("--name", default="xiangqi-yolo26n")
    ap.add_argument("--patience", type=int, default=30, help="early-stopping patience")
    ap.add_argument("--resume", action="store_true")
    args = ap.parse_args()

    from ultralytics import YOLO

    model = YOLO(args.model)
    model.train(
        data=args.data,
        epochs=args.epochs,
        imgsz=args.imgsz,
        batch=args.batch,
        device=args.device,
        name=args.name,
        patience=args.patience,
        resume=args.resume,
        project=str(ROOT / "runs" / "detect"),
        # Augmentations that help photographed boards (angles, lighting, glare).
        degrees=8.0,
        translate=0.1,
        scale=0.5,
        shear=2.0,
        perspective=0.0005,
        fliplr=0.0,   # do NOT mirror: red/black sides are not symmetric in meaning
        hsv_h=0.015,
        hsv_s=0.7,
        hsv_v=0.4,
        mosaic=1.0,
        close_mosaic=10,
    )

    metrics = model.val()
    print(f"\nValidation mAP50-95: {metrics.box.map:.4f}  mAP50: {metrics.box.map50:.4f}")
    print(f"Best weights: {ROOT / 'runs' / 'detect' / args.name / 'weights' / 'best.pt'}")
    print("Next: python export.py")


if __name__ == "__main__":
    main()
