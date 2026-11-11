"""Find people and vehicles in 360° photos (equirectangular) with YOLO11n (ONNX).

Each photo is viewed as several perspective images (8 directions x 2 pitches),
each split into tiles, so small people near the horizon are found too.
Detections are mapped back to equirect pixel boxes and written to JSON.

  python3 detect.py model.onnx out.json photo1.jpg photo2.jpg ...
"""
import json, sys, math
import numpy as np, cv2, onnxruntime as ort

CLASSES = {0: 'person', 2: 'car', 3: 'motorcycle', 5: 'bus', 7: 'truck', 1: 'bicycle'}
sess = ort.InferenceSession(sys.argv[1], providers=['CPUExecutionProvider'])
inp = sess.get_inputs()[0].name

def view_maps(W, H, yaw, pitch, fov, size):
    f = size / 2 / math.tan(fov / 2)
    xs, ys = np.meshgrid(np.arange(size) - size / 2 + 0.5, np.arange(size) - size / 2 + 0.5)
    d = np.stack([xs, -ys, np.full_like(xs, f)], -1)
    d /= np.linalg.norm(d, axis=-1, keepdims=True)
    cp, sp, cy, sy = math.cos(pitch), math.sin(pitch), math.cos(yaw), math.sin(yaw)
    x, y, z = d[..., 0], d[..., 1], d[..., 2]
    y2, z2 = y * cp + z * sp, -y * sp + z * cp
    x3, z3 = x * cy + z2 * sy, -x * sy + z2 * cy
    lon, lat = np.arctan2(x3, z3), np.arcsin(np.clip(y2, -1, 1))
    return ((lon / (2 * math.pi) + 0.5) * W - 0.5).astype(np.float32), ((0.5 - lat / math.pi) * H - 0.5).astype(np.float32)

def yolo(img):
    h, w = img.shape[:2]
    blob = cv2.dnn.blobFromImage(img, 1 / 255, (640, 640), swapRB=True)
    out = sess.run(None, {inp: blob})[0][0].T  # (8400, 84)
    boxes, scores, cls = [], [], []
    for row in out:
        c = int(np.argmax(row[4:])); s = row[4 + c]
        if c in CLASSES and s > 0.3:
            cx, cy, bw, bh = row[:4]
            boxes.append([(cx - bw / 2) * w / 640, (cy - bh / 2) * h / 640, bw * w / 640, bh * h / 640]); scores.append(float(s)); cls.append(c)
    keep = cv2.dnn.NMSBoxes(boxes, scores, 0.3, 0.5)
    return [(boxes[i], scores[i], cls[i]) for i in np.array(keep).flatten()]

result = {}
for path in sys.argv[3:]:
    eq = cv2.imread(path); H, W = eq.shape[:2]
    found = []
    SIZE, FOV = 1280, math.radians(90)
    for pitch in (0.0, -0.45):
        for k in range(8):
            yaw = k * math.pi / 4
            mx, my = view_maps(W, H, yaw, pitch, FOV, SIZE)
            view = cv2.remap(eq, mx, my, cv2.INTER_LINEAR, borderMode=cv2.BORDER_WRAP)
            tiles = [(0, 0, SIZE)] + [(x, y, 640) for x in (0, 320, 640) for y in (320, 640)]
            for tx, ty, ts in tiles:
                for (bx, by, bw, bh), s, c in yolo(view[ty:ty + ts, tx:tx + ts]):
                    x0, y0 = int(max(0, tx + bx)), int(max(0, ty + by))
                    x1, y1 = int(min(SIZE - 1, tx + bx + bw)), int(min(SIZE - 1, ty + by + bh))
                    # Box outline -> equirect pixels.
                    px = np.r_[np.linspace(x0, x1, 9), np.full(9, x1), np.linspace(x1, x0, 9), np.full(9, x0)].astype(int)
                    py = np.r_[np.full(9, y0), np.linspace(y0, y1, 9), np.full(9, y1), np.linspace(y1, y0, 9)].astype(int)
                    found.append({'cls': CLASSES[c], 'score': round(s, 2), 'u': mx[py, px].tolist(), 'v': my[py, px].tolist()})
    result[path] = found
    print(path, len(found), {c: sum(1 for f in found if f['cls'] == c) for c in set(f['cls'] for f in found)}, flush=True)
json.dump(result, open(sys.argv[2], 'w'))
