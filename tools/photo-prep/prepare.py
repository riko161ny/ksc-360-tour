"""Prepare 360° photos for the tour.

- blur people (whole body) and vehicle number-plate areas found by detect.py
- drop all metadata (EXIF / GPS) by re-encoding the pixels only
- resize to 4096 x 2048 for web loading
- write a small thumbnail (front view crop) for the spot list

  python3 prepare.py detections.json out_photos out_thumbs photo1.jpg ...
"""
import json, os, sys
import numpy as np, cv2

det = json.load(open(sys.argv[1]))
out_dir, thumb_dir = sys.argv[2], sys.argv[3]
os.makedirs(out_dir, exist_ok=True); os.makedirs(thumb_dir, exist_ok=True)
OUT_W = 4096

def boxes_for(found, W, H):
    boxes = []
    for f in found:
        u = np.array(f['u']) % W; v = np.array(f['v'])
        # Boxes that cross the left/right seam are handled as two pieces.
        if u.max() - u.min() > W / 2:
            parts = [u[u < W / 2], u[u >= W / 2] - W]
            spans = [(0, parts[0].max() if len(parts[0]) else 0), (W + parts[1].min() if len(parts[1]) else W, W)]
        else:
            spans = [(u.min(), u.max())]
        y0, y1 = v.min(), v.max()
        if (y0 + y1) / 2 > H * 0.68:
            continue  # the photographer's own hand/body under the camera
        for x0, x1 in spans:
            w, h = x1 - x0, y1 - y0
            if f['cls'] == 'person':
                boxes.append((x0 - w * 0.12, y0 - h * 0.08, x1 + w * 0.12, y1 + h * 0.05))
            else:
                # number plates sit low and central on a vehicle
                boxes.append((x0 + w * 0.12, y0 + h * 0.55, x1 - w * 0.12, y1 + h * 0.03))
    return boxes

for path in sys.argv[4:]:
    name = os.path.basename(path)
    img = cv2.imread(path)  # pixels only: metadata is not carried over
    H, W = img.shape[:2]
    blurred = cv2.GaussianBlur(cv2.resize(img, (W // 8, H // 8), interpolation=cv2.INTER_AREA), (0, 0), 2)
    blurred = cv2.resize(blurred, (W, H), interpolation=cv2.INTER_LINEAR)
    mask = np.zeros((H, W), np.uint8)
    for x0, y0, x1, y1 in boxes_for(det.get(path, []), W, H):
        cv2.rectangle(mask, (int(max(0, x0)), int(max(0, y0))), (int(min(W - 1, x1)), int(min(H - 1, y1))), 255, -1)
    soft = cv2.GaussianBlur(mask, (0, 0), 6).astype(np.float32)[..., None] / 255
    img = (img * (1 - soft) + blurred * soft).astype(np.uint8)
    out = cv2.resize(img, (OUT_W, OUT_W // 2), interpolation=cv2.INTER_AREA)
    cv2.imwrite(os.path.join(out_dir, name), out, [cv2.IMWRITE_JPEG_QUALITY, 85])
    # Thumbnail: the front of the photo around the horizon, 3:2.
    h = OUT_W // 2
    crop = out[int(h * 0.32):int(h * 0.587), int(OUT_W * 0.40):int(OUT_W * 0.60)]
    cv2.imwrite(os.path.join(thumb_dir, name), cv2.resize(crop, (240, 160), interpolation=cv2.INTER_AREA), [cv2.IMWRITE_JPEG_QUALITY, 82])
    cv2.imwrite(os.path.join(out_dir, '..', 'mask_' + name), cv2.resize(mask, (1024, 512)))
    print(name, int(mask.mean() / 2.55 * 100) / 100, '% blurred', flush=True)
