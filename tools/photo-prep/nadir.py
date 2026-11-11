import numpy as np, cv2
def nadir_maps(W,H,size,fov_deg):
    # top-down view: camera looking straight down. returns equirect (u,v) for each pixel
    f = (size/2)/np.tan(np.radians(fov_deg/2))
    xs = (np.arange(size)-size/2+0.5)
    X,Y = np.meshgrid(xs,xs)
    # direction: down = -y world. image x -> world x, image y -> world z (forward = image top)
    dx = X; dz = -Y; dy = -np.full_like(X,f)
    lon = np.arctan2(dx, dz)          # yaw, 0 = forward (centre of equirect)
    lat = np.arctan2(dy, np.hypot(dx,dz))
    u = (lon/(2*np.pi)+0.5)*W - 0.5
    v = (0.5-lat/np.pi)*H - 0.5
    return u.astype(np.float32), v.astype(np.float32)
def equi_to_nadir(img,size,fov):
    H,W = img.shape[:2]
    u,v = nadir_maps(W,H,size,fov)
    return cv2.remap(img,u,v,cv2.INTER_LINEAR,borderMode=cv2.BORDER_WRAP)
def nadir_to_equi_coords(W,H,size,fov,vmin):
    # for equirect rows >= vmin, coordinates into the nadir image
    f = (size/2)/np.tan(np.radians(fov/2))
    us = np.arange(W)+0.5; vs = np.arange(vmin,H)+0.5
    U,V = np.meshgrid(us,vs)
    lon = (U/W-0.5)*2*np.pi; lat = (0.5-V/H)*np.pi
    dx = np.cos(lat)*np.sin(lon); dz = np.cos(lat)*np.cos(lon); dy = np.sin(lat)
    t = f/(-dy)
    X = dx*t + size/2 - 0.5; Y = -dz*t + size/2 - 0.5
    return X.astype(np.float32), Y.astype(np.float32)
