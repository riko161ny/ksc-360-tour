"""One overview image of every 360° photo in a folder, with file names, for choosing photos.

  python3 tools/contact-sheet.py photo_dir out.jpg
"""
import os, sys
from PIL import Image, ImageDraw, ImageFont

src, dst = sys.argv[1], sys.argv[2]
names = sorted((n for n in os.listdir(src) if n.lower().endswith('.jpg')), key=lambda n: (int(n.split('-')[0]) if n.split('-')[0].isdigit() else 1e9, n))
COLS, TW, TH, LH = 4, 560, 280, 34
rows = (len(names) + COLS - 1) // COLS
sheet = Image.new('RGB', (COLS * TW, rows * (TH + LH)), 'white')
draw = ImageDraw.Draw(sheet)
font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 20)
for i, name in enumerate(names):
    x, y = i % COLS * TW, i // COLS * (TH + LH)
    sheet.paste(Image.open(os.path.join(src, name)).convert('RGB').resize((TW - 8, TH - 4)), (x + 4, y + 2))
    draw.text((x + 8, y + TH + 4), name[:-4], font=font, fill='black')
sheet.save(dst, quality=85)
print(len(names), sheet.size)
