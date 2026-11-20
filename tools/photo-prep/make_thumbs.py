"""Remake thumbnails so they show the direction each spot opens facing (view.yaw in tour-config.js).

  node -e "global.window={};require('./tour-config.js');console.log(JSON.stringify(window.TOUR_CONFIG.spots))" > /tmp/spots.json
  python3 tools/photo-prep/make_thumbs.py /tmp/spots.json photos thumbs [centre]
  centre: height of the crop centre as a share of the photo (0.4535 = as before; ~0.53 suits indoor photos)
"""
import sys, json, os, math, numpy as np, cv2

spots = json.load(open(sys.argv[1])); photo_dir, thumb_dir = sys.argv[2], sys.argv[3]
centre = float(sys.argv[4]) if len(sys.argv) > 4 else 0.4535
for spot in spots:
    path = os.path.join(photo_dir, spot['id'] + '.jpg')
    if not os.path.exists(path):
        continue
    img = cv2.imread(path); H, W = img.shape[:2]
    yaw = (spot.get('view') or {}).get('yaw', 0)
    # Same crop as before (20% of the width around the horizon), centred on the view direction.
    cx = int((0.5 + yaw / (2 * math.pi)) * W) % W
    half = int(W * 0.10)
    cols = np.arange(cx - half, cx + half) % W
    crop = img[int(H * (centre - 0.1335)):int(H * (centre + 0.1335))][:, cols]
    cv2.imwrite(os.path.join(thumb_dir, spot['id'] + '.jpg'), cv2.resize(crop, (240, 160), interpolation=cv2.INTER_AREA), [cv2.IMWRITE_JPEG_QUALITY, 82])
    print(spot['id'], round(yaw, 3))
