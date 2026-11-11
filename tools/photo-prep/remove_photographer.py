"""Remove the photographer (hand, head, stick shadow) from the nadir of equirect photos.
Usage: python3 remove_photographer.py masks.json in_dir out_dir [preview_dir]
masks.json: {"p01": {"rects": [[x0,y0,x1,y1],...], "lines": [[x0,y0,x1,y1,width],...], "polys": [[[x,y],...]]}}
Coordinates are in an 800px, 140deg top-down (nadir) view, forward = up.
"""
import sys, json, os, numpy as np, cv2
from nadir import nadir_maps, nadir_to_equi_coords

REF_SIZE, REF_FOV = 800, 140
SIZE, FOV = 4000, 150
f_ref = (REF_SIZE/2)/np.tan(np.radians(REF_FOV/2))
f_new = (SIZE/2)/np.tan(np.radians(FOV/2))
K = f_new/f_ref
def P(x, y): return (int(round(SIZE/2 + (x-REF_SIZE/2)*K)), int(round(SIZE/2 + (y-REF_SIZE/2)*K)))

def build_parts(spec):
    parts = []
    for kind in ("rects", "lines", "polys"):
        for item in spec.get(kind, []):
            parts.append(build_mask({kind: [item]}))
    return parts

def build_mask(spec):
    m = np.zeros((SIZE, SIZE), np.uint8)
    for x0,y0,x1,y1 in spec.get("rects", []):
        cv2.rectangle(m, P(x0,y0), P(x1,y1), 255, -1)
    for x0,y0,x1,y1,w in spec.get("lines", []):
        cv2.line(m, P(x0,y0), P(x1,y1), 255, int(w*K))
    for poly in spec.get("polys", []):
        cv2.fillPoly(m, [np.array([P(*p) for p in poly], np.int32)], 255)
    return cv2.dilate(m, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (41,41)))

def _cands(mm, s):
    ys, xs = np.nonzero(mm); h, w = mm.shape
    bh, bw = ys.max()-ys.min(), xs.max()-xs.min()
    for ang in range(0, 360, 5):
        c_, s_ = np.cos(np.radians(ang)), np.sin(np.radians(ang))
        for rad in np.arange(1.0, 2.25, 0.1):
            d = rad*max(abs(c_)*bw + abs(s_)*bh, 20)
            yield np.float32([[1,0,d*c_],[0,1,d*s_]])          # source pixel = dst + (dx,dy)
    for ang in range(20, 345, 8):                            # rotation about the nadir
        yield cv2.getRotationMatrix2D((w/2, h/2), ang, 1.0).astype(np.float32)

def _lab(img, s):
    return cv2.cvtColor(cv2.resize(img, None, fx=1/s, fy=1/s, interpolation=cv2.INTER_AREA), cv2.COLOR_BGR2LAB).astype(np.float32)

def _ring(mm, k):
    return cv2.dilate(mm, np.ones((k,k),np.uint8)) & ~mm

def _score(sm, mm, ring, M, rmean, rstd, fb):
    h, w = mm.shape
    cover = cv2.warpAffine(fb|ring, M, (w,h), flags=cv2.WARP_INVERSE_MAP|cv2.INTER_NEAREST, borderValue=255)
    if (cover[(mm|ring)>0] > 0).any(): return None
    src = cv2.warpAffine(sm, M, (w,h), flags=cv2.WARP_INVERSE_MAP|cv2.INTER_LINEAR, borderMode=cv2.BORDER_REFLECT)
    rc = np.abs(src[ring>0]-sm[ring>0]).mean()
    outl = np.maximum(0, np.abs(src[mm>0]-rmean) - 2.0*rstd).mean()*4
    return rc + outl

def best_shift(img, mask, forbid):
    """2x3 matrix M (full-res) so that warpAffine(img, M, WARP_INVERSE_MAP) is a good clone source for the hole."""
    s = 8
    sm = _lab(img, s); mm = cv2.resize(mask, None, fx=1/s, fy=1/s, interpolation=cv2.INTER_NEAREST)
    mm = cv2.dilate(mm, np.ones((3,3),np.uint8)); ring = _ring(mm, 11)
    fb = cv2.dilate(cv2.resize(forbid, None, fx=1/s, fy=1/s, interpolation=cv2.INTER_NEAREST), np.ones((3,3),np.uint8))
    rv = sm[ring>0]; rmean, rstd = rv.mean(0), rv.std(0)+1
    h, w = mm.shape
    ys, xs = np.nonzero(mm|ring); y0,y1,x0,x1 = ys.min(), ys.max()+1, xs.min(), xs.max()+1
    # exhaustive translation search on the ring (masked SSD)
    tpl = sm[y0:y1, x0:x1]; tmask = np.repeat((ring[y0:y1, x0:x1] > 0).astype(np.float32)[...,None], 3, 2)
    R = cv2.matchTemplate(sm, tpl, cv2.TM_SQDIFF, mask=tmask)
    R = R / max(1, tmask[...,0].sum())
    # translations whose source window touches any masked area are invalid
    ov = cv2.matchTemplate((fb>0).astype(np.float32), ((mm|ring)[y0:y1, x0:x1]>0).astype(np.float32), cv2.TM_CCORR)
    R[ov > 0.5] = np.inf
    cands = []
    Rc = R.copy()
    for _ in range(40):
        yy, xx = np.unravel_index(np.argmin(Rc), Rc.shape)
        if not np.isfinite(Rc[yy,xx]): break
        dx, dy = xx-x0, yy-y0
        cv2.circle(Rc, (int(xx),int(yy)), 4, float('inf'), -1)
        M = np.float32([[1,0,dx],[0,1,dy]])
        sc = _score(sm, mm, ring, M, rmean, rstd, fb)
        if sc is not None: cands.append((sc, M))
    for ang in range(15, 350, 10):
        M = cv2.getRotationMatrix2D((w/2, h/2), ang, 1.0).astype(np.float32)
        sc = _score(sm, mm, ring, M, rmean, rstd, fb)
        if sc is not None: cands.append((sc, M))
    if not cands: return None
    cands.sort(key=lambda c: c[0])
    # refine the best few at full resolution-ish (s=2) and penalise blurry sources
    s2 = 2
    sm2 = _lab(img, s2); mm2 = cv2.resize(mask, None, fx=1/s2, fy=1/s2, interpolation=cv2.INTER_NEAREST); ring2 = _ring(mm2, 41)
    gray = cv2.cvtColor(cv2.resize(img, None, fx=1/s2, fy=1/s2, interpolation=cv2.INTER_AREA), cv2.COLOR_BGR2GRAY).astype(np.float32)
    lap = cv2.Laplacian(gray, cv2.CV_32F)**2
    ring_sharp = lap[ring2>0].mean()
    fb2 = cv2.resize(forbid, None, fx=1/s2, fy=1/s2, interpolation=cv2.INTER_NEAREST)
    rv2 = sm2[ring2>0]; rmean2, rstd2 = rv2.mean(0), rv2.std(0)+1
    best = None
    for c, M in cands[:8]:
        M2 = M.copy(); M2[:,2] *= s/s2
        for ddx in (-3,0,3):
            for ddy in (-3,0,3):
                Mt = M2.copy(); Mt[0,2] += ddx; Mt[1,2] += ddy
                sc = _score(sm2, mm2, ring2, Mt, rmean2, rstd2, fb2)
                if sc is None: continue
                sl = cv2.warpAffine(lap, Mt, lap.shape[::-1], flags=cv2.WARP_INVERSE_MAP)[mm2>0].mean()
                sc += 25*max(0, np.log(ring_sharp/(sl+1e-3)))
                if best is None or sc < best[0]: best = (sc, Mt)
    if best is None: return None
    Mf = best[1].copy(); Mf[:,2] *= s2
    return Mf

def lattice_shift(img, mi, forbid):
    """For periodic floors: pick a shift that is a multiple of the tiling period."""
    c = SIZE//2; r = 900
    g = cv2.cvtColor(img[c-r:c+r, c-r:c+r], cv2.COLOR_BGR2LAB).astype(np.float32)[...,1]
    g = cv2.GaussianBlur(g, (0,0), 5) - cv2.GaussianBlur(g, (0,0), 60)
    fm = cv2.dilate((forbid[c-r:c+r, c-r:c+r] > 0).astype(np.uint8), np.ones((61,61),np.uint8)) > 0
    g[fm] = 0
    F = np.fft.fft2(g); ac = np.fft.fftshift(np.real(np.fft.ifft2(F*np.conj(F))))
    ac /= ac.max()
    yy, xx = np.mgrid[-r:r, -r:r]; d = np.hypot(xx, yy)
    pass
    lm = (ac == cv2.dilate(ac, np.ones((31,31),np.uint8))) & (d >= 80) & (d < 800) & (ac > 0.1)
    ys_, xs_ = np.nonzero(lm)
    peaks = sorted([(x-r, y-r, ac[y,x]) for y, x in zip(ys_, xs_)], key=lambda p: -p[2])[:12]
    peaks.sort(key=lambda p: np.hypot(p[0],p[1]))
    peaks = [p for p in peaks if p[2] > 0.6*max(q[2] for q in peaks)]
    v1 = np.array(peaks[0][:2], float)
    v2 = next(np.array(p[:2], float) for p in peaks[1:] if abs(v1[0]*p[1]-v1[1]*p[0])/(np.linalg.norm(v1)*np.hypot(p[0],p[1])) > 0.5)
    print("  lattice", v1, v2)
    s = 2
    sm = _lab(img, s); mm = cv2.resize(mi, None, fx=1/s, fy=1/s, interpolation=cv2.INTER_NEAREST); ring = _ring(mm, 31)
    fb = cv2.resize(forbid, None, fx=1/s, fy=1/s, interpolation=cv2.INTER_NEAREST)
    rv = sm[ring>0]; rmean, rstd = rv.mean(0), rv.std(0)+1
    best = None
    for i in range(-4, 5):
        for j in range(-4, 5):
            v = i*v1 + j*v2
            if not v.any(): continue
            for ex in range(-8, 9, 2):
                for ey in range(-8, 9, 2):
                    M = np.float32([[1,0,v[0]/s+ex],[0,1,v[1]/s+ey]])
                    sc = _score(sm, mm, ring, M, rmean, rstd, fb)
                    if sc is None: continue
                    sc += 0.002*np.hypot(*v)
                    if best is None or sc < best[0]: best = (sc, M)
    if best is None: return None
    M = best[1].copy(); M[:,2] *= s
    return M

def prefill(img, mask):
    s = 4
    small = cv2.resize(img, None, fx=1/s, fy=1/s, interpolation=cv2.INTER_AREA)
    ms = cv2.resize(mask, None, fx=1/s, fy=1/s, interpolation=cv2.INTER_NEAREST)
    f = cv2.inpaint(small, ms, 9, cv2.INPAINT_TELEA)
    f = cv2.resize(f, (img.shape[1], img.shape[0]), interpolation=cv2.INTER_CUBIC)
    out = img.copy(); out[mask>0] = f[mask>0]
    return out

def process(img, spec):
    H, W = img.shape[:2]
    u, v = nadir_maps(W, H, SIZE, FOV)
    nad = cv2.remap(img, u, v, cv2.INTER_CUBIC, borderMode=cv2.BORDER_WRAP)
    mask = build_mask(spec)
    out = prefill(nad, mask)
    if spec.get("smooth"):
        # plain smooth fill + matching grain, for spots where cloning copies objects
        g = np.random.default_rng(0).normal(0, spec.get("grain", 4), out.shape).astype(np.float32)
        g = cv2.GaussianBlur(g, (0,0), 1.2)
        out = np.where(mask[...,None]>0, np.clip(out.astype(np.float32)+g, 0, 255), out).astype(np.uint8)
    for mi in ([] if spec.get("smooth") else build_parts(spec)):
        M = lattice_shift(out, mi, mask) if spec.get("periodic") else best_shift(out, mi, mask)
        if M is None:
            out = cv2.inpaint(out, mi, 15, cv2.INPAINT_TELEA); print("  fallback inpaint"); continue
        src = cv2.warpAffine(out, M, (SIZE,SIZE), flags=cv2.WARP_INVERSE_MAP | cv2.INTER_LINEAR, borderMode=cv2.BORDER_REFLECT)
        ys, xs = np.nonzero(mi)
        x0,x1,y0,y1 = xs.min(), xs.max(), ys.min(), ys.max()
        pad = 30; x0-=pad; y0-=pad; x1+=pad; y1+=pad
        crop_src = src[y0:y1, x0:x1]; crop_m = mi[y0:y1, x0:x1]
        out = cv2.seamlessClone(crop_src, out, crop_m, ((x0+x1)//2, (y0+y1)//2), cv2.NORMAL_CLONE)
    # back to equirect, only where the mask was
    vmin = int(H*0.55)
    X, Y = nadir_to_equi_coords(W, H, SIZE, FOV, vmin)
    soft = cv2.GaussianBlur(mask, (61,61), 0)
    back = cv2.remap(out, X, Y, cv2.INTER_LINEAR, borderMode=cv2.BORDER_REPLICATE)
    a = cv2.remap(soft, X, Y, cv2.INTER_LINEAR, borderMode=cv2.BORDER_CONSTANT, borderValue=0).astype(np.float32)[...,None]/255
    res = img.copy()
    res[vmin:] = (back*a + img[vmin:]*(1-a)).astype(np.uint8)
    return res, nad, out, mask

if __name__ == "__main__":
    specs = json.load(open(sys.argv[1])); ind, outd = sys.argv[2], sys.argv[3]
    prev = sys.argv[4] if len(sys.argv) > 4 else None
    os.makedirs(outd, exist_ok=True)
    for name, spec in specs.items():
        img = cv2.imread(os.path.join(ind, name+".jpg"))
        res, nad, out, mask = process(img, spec)
        cv2.imwrite(os.path.join(outd, name+".jpg"), res, [cv2.IMWRITE_JPEG_QUALITY, 85])
        if prev:
            os.makedirs(prev, exist_ok=True)
            c = SIZE//2; r = int(1.0*K*250)
            a = nad[c-r:c+r, c-r:c+r]; b = out[c-r:c+r, c-r:c+r]
            ov = a.copy(); ov[mask[c-r:c+r, c-r:c+r]>0] = (0.5*ov[mask[c-r:c+r, c-r:c+r]>0] + [0,0,127]).astype(np.uint8)
            t = np.hstack([cv2.resize(x, (600,600)) for x in (ov, b)])
            cv2.putText(t, name, (10,40), 0, 1.2, (0,0,255), 3)
            cv2.imwrite(os.path.join(prev, name+".jpg"), t, [cv2.IMWRITE_JPEG_QUALITY, 80])
        print(name, "done", flush=True)
