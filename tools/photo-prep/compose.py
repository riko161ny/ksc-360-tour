"""final = clean + (new_blur - old_blur) * (1 - a): keep the nadir fix, swap in the new face blur elsewhere.
usage: compose.py masks.json old_dir clean_dir new_dir out_dir"""
import sys, json, os, numpy as np, cv2
from remove_photographer import build_mask, SIZE, FOV
from nadir import nadir_to_equi_coords
specs = json.load(open(sys.argv[1])); old_d, clean_d, new_d, out_d = sys.argv[2:6]
os.makedirs(out_d, exist_ok=True)
for name, spec in specs.items():
    old = cv2.imread(f'{old_d}/{name}.jpg').astype(np.float32)
    clean = cv2.imread(f'{clean_d}/{name}.jpg').astype(np.float32)
    new = cv2.imread(f'{new_d}/{name}.jpg').astype(np.float32)
    H, W = old.shape[:2]; vmin = int(H * 0.55)
    X, Y = nadir_to_equi_coords(W, H, SIZE, FOV, vmin)
    soft = cv2.GaussianBlur(build_mask(spec), (61, 61), 0)
    a = np.zeros((H, W, 1), np.float32)
    a[vmin:] = cv2.remap(soft, X, Y, cv2.INTER_LINEAR, borderMode=cv2.BORDER_CONSTANT, borderValue=0).astype(np.float32)[..., None] / 255
    out = np.clip(clean + (new - old) * (1 - a), 0, 255).astype(np.uint8)
    cv2.imwrite(f'{out_d}/{name}.jpg', out, [cv2.IMWRITE_JPEG_QUALITY, 85])
    print(name, flush=True)
