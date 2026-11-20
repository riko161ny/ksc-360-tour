"""Blur extra faces the detector missed, by hand-picked positions on the 4096x2048 photo.
usage: manual_blur.py photo.jpg x,y,rx,ry [x,y,rx,ry ...]   (edits the photo in place)"""
import sys, numpy as np, cv2
path = sys.argv[1]
img = cv2.imread(path)
for spec in sys.argv[2:]:
    x, y, rx, ry = [int(v) for v in spec.split(',')]
    x0, y0, x1, y1 = max(0, x - 2 * rx), max(0, y - 2 * ry), min(img.shape[1], x + 2 * rx), min(img.shape[0], y + 2 * ry)
    roi = img[y0:y1, x0:x1]
    bl = cv2.GaussianBlur(roi, (0, 0), max(2.0, ry / 3.5))
    m = np.zeros(roi.shape[:2], np.uint8)
    cv2.ellipse(m, (x - x0, y - y0), (rx, ry), 0, 0, 360, 255, -1)
    a = cv2.GaussianBlur(m, (0, 0), max(1.5, ry / 6)).astype(np.float32)[..., None] / 255
    img[y0:y1, x0:x1] = (roi * (1 - a) + bl * a).astype(np.uint8)
cv2.imwrite(path, img, [cv2.IMWRITE_JPEG_QUALITY, 85])
