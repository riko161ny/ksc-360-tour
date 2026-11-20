"""Blur only faces that are clearly recognisable (frontal faces found by YuNet), not every head.
Profiles and backs of heads are left as they are. Faces the detector misses can be added with manual_blur.py.

  python3 blur_faces_only.py yunet.onnx photo.jpg out.jpg [min_score]
"""
import sys, math, numpy as np, cv2

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

model, src, dst = sys.argv[1:4]
min_score = float(sys.argv[4]) if len(sys.argv) > 4 else 0.7
img = cv2.imread(src); H, W = img.shape[:2]
SIZE, FOV = 1600, math.radians(80)
det = cv2.FaceDetectorYN.create(model, "", (SIZE, SIZE), min_score, 0.3, 5000)
faces = []
for pitch in (0.0, -0.35, -0.7):
    for k in range(10):
        mx, my = view_maps(W, H, k * 2 * math.pi / 10, pitch, FOV, SIZE)
        view = cv2.remap(img, mx, my, cv2.INTER_LINEAR, borderMode=cv2.BORDER_WRAP)
        _, res = det.detect(view)
        for r in (res if res is not None else []):
            x, y, w, h = r[:4]
            cx, cy = int(np.clip(x + w / 2, 0, SIZE - 1)), int(np.clip(y + h / 2, 0, SIZE - 1))
            x0, x1 = int(np.clip(x, 0, SIZE - 1)), int(np.clip(x + w, 0, SIZE - 1))
            y0, y1 = int(np.clip(y, 0, SIZE - 1)), int(np.clip(y + h, 0, SIZE - 1))
            u, v = mx[cy, cx], my[cy, cx]
            du = abs(((mx[cy, x1] - mx[cy, x0]) + W / 2) % W - W / 2)
            dv = abs(my[y1, cx] - my[y0, cx])
            faces.append((float(u), float(v), float(du), float(dv), float(r[-1])))
out = img.copy()
for u, v, du, dv, s in faces:
    rx, ry = int(du * 0.75) + 3, int(dv * 0.8) + 3
    for uu in (u, u - W, u + W):  # faces on the left/right seam
        x, y = int(uu), int(v)
        x0, y0, x1, y1 = max(0, x - 2 * rx), max(0, y - 2 * ry), min(W, x + 2 * rx), min(H, y + 2 * ry)
        if x1 <= x0 or y1 <= y0: continue
        roi = out[y0:y1, x0:x1]
        bl = cv2.GaussianBlur(roi, (0, 0), max(2.0, ry / 3.5))
        m = np.zeros(roi.shape[:2], np.uint8)
        cv2.ellipse(m, (x - x0, y - y0), (rx, ry), 0, 0, 360, 255, -1)
        a = cv2.GaussianBlur(m, (0, 0), max(1.5, ry / 6)).astype(np.float32)[..., None] / 255
        out[y0:y1, x0:x1] = (roi * (1 - a) + bl * a).astype(np.uint8)
cv2.imwrite(dst, out, [cv2.IMWRITE_JPEG_QUALITY, 85])
print(len(faces), 'face detections')
for f in faces: print('  u=%d v=%d w=%d h=%d score=%.2f' % f)
