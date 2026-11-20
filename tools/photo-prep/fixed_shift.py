"""Like remove_photographer.py, but with a hand-picked clone offset for each photo
(for places where the automatic search copies the wrong thing, e.g. a narrow aisle).
masks.json entries may set "shift": [dx, dy] in the 800px nadir preview coordinates
(the fill is copied from the point that far away).

  python3 fixed_shift.py masks.json in_dir out_dir
"""
import sys, json, os, numpy as np
import remove_photographer as rp

specs = json.load(open(sys.argv[1])); ind, outd = sys.argv[2], sys.argv[3]
os.makedirs(outd, exist_ok=True)
for name, spec in specs.items():
    if "shift" in spec:
        dx, dy = (v * rp.K for v in spec["shift"])
        rp.best_shift = lambda img, mask, forbid, dx=dx, dy=dy: np.float32([[1, 0, dx], [0, 1, dy]])
    img = rp.cv2.imread(os.path.join(ind, name + ".jpg"))
    res = rp.process(img, spec)[0]
    rp.cv2.imwrite(os.path.join(outd, name + ".jpg"), res, [rp.cv2.IMWRITE_JPEG_QUALITY, 85])
    print(name, "done")
