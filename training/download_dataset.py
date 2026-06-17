#!/usr/bin/env python3
"""Prepare a YOLO-format Xiangqi dataset under ./datasets/xiangqi.

Three sources (the three modes asked for):

  --source huggingface   (default) Download vietanhdev/chessai-data and convert
                          its COCO annotations to YOLO. Most reliable, ~1.7k imgs.
  --source roboflow       Download a Roboflow Universe dataset already in YOLO
                          format (needs --api-key / --workspace / --project / --version,
                          or just export it manually and use --source custom).
  --source custom         Do nothing but validate that datasets/xiangqi already
                          holds images/{train,val} + labels/{train,val} that you
                          provide yourself.

Output layout (Ultralytics standard, matches data.yaml):

  datasets/xiangqi/
    images/train/*.jpg   labels/train/*.txt
    images/val/*.jpg     labels/val/*.txt

Class order is fixed by CLASS_NAMES below and MUST match data.yaml + the frontend.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import shutil
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parent
OUT = ROOT / "datasets" / "xiangqi"

# Fixed class order — keep in sync with data.yaml and frontend/src/lib/constants.ts.
CLASS_NAMES = ["xe", "ma", "tuong", "si", "vua", "phao", "tot"]
CLASS_INDEX = {name: i for i, name in enumerate(CLASS_NAMES)}

# Map common label aliases (other datasets, English, Han) onto our 7 type ids.
SYNONYMS = {
    "xe": "xe", "rook": "xe", "chariot": "xe", "車": "xe", "俥": "xe",
    "ma": "ma", "horse": "ma", "knight": "ma", "馬": "ma", "傌": "ma",
    "tuong": "tuong", "elephant": "tuong", "bishop": "tuong", "象": "tuong", "相": "tuong",
    "si": "si", "advisor": "si", "guard": "si", "士": "si", "仕": "si",
    "vua": "vua", "general": "vua", "king": "vua", "將": "vua", "帥": "vua", "将": "vua",
    "phao": "phao", "cannon": "phao", "砲": "phao", "炮": "phao",
    "tot": "tot", "soldier": "tot", "pawn": "tot", "卒": "tot", "兵": "tot",
}


def canonical(label: str) -> str | None:
    key = label.strip().lower()
    return SYNONYMS.get(key) or (key if key in CLASS_INDEX else None)


def split_for(name: str, val_ratio: float) -> str:
    """Deterministic train/val split based on the filename hash."""
    h = int(hashlib.md5(name.encode()).hexdigest(), 16) % 1000
    return "val" if h < val_ratio * 1000 else "train"


def ensure_dirs() -> None:
    for sub in ("images/train", "images/val", "labels/train", "labels/val"):
        (OUT / sub).mkdir(parents=True, exist_ok=True)


def convert_coco(coco_path: Path, image_roots: list[Path], val_ratio: float) -> None:
    ensure_dirs()
    coco = json.loads(coco_path.read_text())

    cat_to_type: dict[int, str] = {}
    for cat in coco["categories"]:
        mapped = canonical(cat["name"])
        if mapped is None:
            print(f"  ! skipping unknown category '{cat['name']}'")
            continue
        cat_to_type[cat["id"]] = mapped

    # Index every image file on disk by basename for quick lookup.
    disk: dict[str, Path] = {}
    for root in image_roots:
        for p in root.rglob("*"):
            if p.suffix.lower() in {".jpg", ".jpeg", ".png"}:
                disk.setdefault(p.name, p)

    images = {img["id"]: img for img in coco["images"]}
    anns_by_image: dict[int, list] = defaultdict(list)
    for ann in coco["annotations"]:
        anns_by_image[ann["image_id"]].append(ann)

    written = 0
    for img_id, img in images.items():
        name = Path(img["file_name"]).name
        src = disk.get(name)
        if src is None:
            continue
        w, h = float(img["width"]), float(img["height"])
        lines = []
        for ann in anns_by_image.get(img_id, []):
            t = cat_to_type.get(ann["category_id"])
            if t is None:
                continue
            x, y, bw, bh = ann["bbox"]  # COCO: top-left x,y + w,h
            xc = (x + bw / 2) / w
            yc = (y + bh / 2) / h
            lines.append(f"{CLASS_INDEX[t]} {xc:.6f} {yc:.6f} {bw / w:.6f} {bh / h:.6f}")
        if not lines:
            continue
        split = split_for(name, val_ratio)
        shutil.copy(src, OUT / "images" / split / name)
        (OUT / "labels" / split / f"{Path(name).stem}.txt").write_text("\n".join(lines))
        written += 1

    print(f"  converted {written} images -> {OUT}")


def from_huggingface(val_ratio: float) -> None:
    from huggingface_hub import snapshot_download

    print("Downloading vietanhdev/chessai-data from Hugging Face …")
    local = Path(
        snapshot_download(repo_id="vietanhdev/chessai-data", repo_type="dataset")
    )
    coco = next(local.rglob("annotations.json"), None)
    if coco is None:
        raise SystemExit("annotations.json not found in the downloaded dataset")
    print(f"Found COCO annotations: {coco}")
    convert_coco(coco, [local], val_ratio)


def from_roboflow(args: argparse.Namespace) -> None:
    if not (args.api_key and args.workspace and args.project):
        raise SystemExit(
            "Roboflow needs --api-key --workspace --project --version, "
            "or export YOLOv8 format manually and run with --source custom."
        )
    from roboflow import Roboflow

    rf = Roboflow(api_key=args.api_key)
    project = rf.workspace(args.workspace).project(args.project)
    print("Downloading Roboflow dataset (yolov8 format) …")
    project.version(args.version).download("yolov8", location=str(OUT))
    print(
        f"Downloaded to {OUT}. Verify the class order in {OUT}/data.yaml matches "
        f"{CLASS_NAMES} (re-map label indices if it differs)."
    )


def validate_custom() -> None:
    missing = [
        s for s in ("images/train", "images/val", "labels/train", "labels/val")
        if not (OUT / s).is_dir()
    ]
    if missing:
        raise SystemExit(
            f"Custom dataset incomplete. Create these folders under {OUT}: {missing}"
        )
    n = len(list((OUT / "images/train").glob("*")))
    print(f"Custom dataset looks OK: {n} training images in {OUT}")


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--source", choices=["huggingface", "roboflow", "custom"], default="huggingface")
    ap.add_argument("--val-ratio", type=float, default=0.15)
    ap.add_argument("--api-key")
    ap.add_argument("--workspace")
    ap.add_argument("--project")
    ap.add_argument("--version", type=int, default=1)
    args = ap.parse_args()

    if args.source == "huggingface":
        from_huggingface(args.val_ratio)
    elif args.source == "roboflow":
        from_roboflow(args)
    else:
        validate_custom()


if __name__ == "__main__":
    main()
