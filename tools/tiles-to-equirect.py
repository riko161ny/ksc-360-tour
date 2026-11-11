"""Rebuild 360° equirectangular JPGs from the Marzipano Tool tiles.

The tour now loads one photo per spot (photos/p01.jpg ...). The old photos only
exist as cube tiles (tiles/<scene id>/...), so this turns each scene back into a
single 2:1 image that can be renamed to a spot ID.

  python3 tools/tiles-to-equirect.py tiles out_dir [width]
"""
import os, sys
import numpy as np
import cv2

def load_face(scene_dir, face):
    levels = sorted(int(d) for d in os.listdir(scene_dir) if d.isdigit())
    level = os.path.join(scene_dir, str(levels[-1]), face)
    rows = []
    for y in sorted(os.listdir(level), key=int):
        cols = [cv2.imread(os.path.join(level, y, x)) for x in sorted(os.listdir(os.path.join(level, y)), key=lambda n: int(n.split('.')[0]))]
        rows.append(np.hstack(cols))
    return np.vstack(rows)

def equirect(scene_dir, width):
    faces = {f: load_face(scene_dir, f) for f in 'fbudlr'}
    n = faces['f'].shape[0]
    h = width // 2
    lon = (np.arange(width) + 0.5) / width * 2 * np.pi - np.pi
    lat = np.pi / 2 - (np.arange(h) + 0.5) / h * np.pi
    lon, lat = np.meshgrid(lon, lat)
    # Direction: x right, y up, z forward (yaw 0 = front face, yaw grows to the right).
    x, y, z = np.sin(lon) * np.cos(lat), np.sin(lat), np.cos(lon) * np.cos(lat)
    ax, ay, az = np.abs(x), np.abs(y), np.abs(z)
    out = np.zeros((h, width, 3), np.uint8)
    specs = {
        'f': ((az >= ax) & (az >= ay) & (z > 0), x / az, -y / az),
        'b': ((az >= ax) & (az >= ay) & (z <= 0), -x / az, -y / az),
        'r': ((ax > az) & (ax >= ay) & (x > 0), -z / ax, -y / ax),
        'l': ((ax > az) & (ax >= ay) & (x <= 0), z / ax, -y / ax),
        'u': ((ay > ax) & (ay > az) & (y > 0), x / ay, z / ay),
        'd': ((ay > ax) & (ay > az) & (y <= 0), x / ay, -z / ay),
    }
    for f, (mask, u, v) in specs.items():
        mx = ((u + 1) / 2 * n - 0.5).astype(np.float32)
        my = ((v + 1) / 2 * n - 0.5).astype(np.float32)
        img = cv2.remap(faces[f], mx, my, cv2.INTER_LINEAR, borderMode=cv2.BORDER_REPLICATE)
        out[mask] = img[mask]
    return out

if __name__ == '__main__':
    src, dst = sys.argv[1], sys.argv[2]
    width = int(sys.argv[3]) if len(sys.argv) > 3 else 4096
    os.makedirs(dst, exist_ok=True)
    names = sys.argv[4:] or sorted(os.listdir(src))
    for name in names:
        cv2.imwrite(os.path.join(dst, name + '.jpg'), equirect(os.path.join(src, name), width), [cv2.IMWRITE_JPEG_QUALITY, 88])
        print(name)
