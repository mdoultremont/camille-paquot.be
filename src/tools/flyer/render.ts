import {
  INK,
  MUSTARD,
  type Box,
  type FlyerBackground,
  type FlyerContent,
  type FlyerFormat,
} from "./model";

export type QrMatrix = boolean[][];
export function renderFlyer(
  ctx: CanvasRenderingContext2D,
  content: FlyerContent,
  format: FlyerFormat,
  background: FlyerBackground,
  photo: ImageBitmap,
  qr: QrMatrix | null,
) {
  const { width: w, height: h, layout: l } = format;
  ctx.canvas.width = w;
  ctx.canvas.height = h;
  ctx.fillStyle = background.paper;
  ctx.fillRect(0, 0, w, h);
  const path = (d: string, color: string, stroke = false, line = 0.003) => {
    ctx.save();
    const shape = new Path2D();
    shape.addPath(new Path2D(d), new DOMMatrix().scale(w, h));
    ctx.resetTransform();
    ctx.lineWidth = line * w;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    if (stroke) {
      ctx.strokeStyle = color;
      ctx.stroke(shape);
    } else {
      ctx.fillStyle = color;
      ctx.fill(shape);
    }
    ctx.restore();
  };
  const ellipse = (x: number, y: number, rx: number, ry: number, color: string) => {
    ctx.beginPath();
    ctx.ellipse(x * w, y * h, rx * w, ry * h, 0, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  };
  const rounded = (b: Box, radius: number, color: string) => {
    ctx.beginPath();
    ctx.roundRect(b[0] * w, b[1] * h, b[2] * w, b[3] * h, radius * w);
    ctx.fillStyle = color;
    ctx.fill();
  };
  const text = (
    value: string,
    b: Box,
    size: number,
    weight = 400,
    align: CanvasTextAlign = "left",
    color = INK,
    singleLine = false,
  ) => {
    const [x, y, bw, bh] = b.map((v, i) => v * (i % 2 ? h : w));
    let fontSize = size * w;
    let lines: string[] = [];
    const wrap = () => {
      ctx.font = `${weight} ${fontSize}px Gabarito`;
      lines = [];
      if (singleLine) {
        lines = [value.replace(/\s+/g, " ")];
        return;
      }
      for (const paragraph of value.split("\n")) {
        let line = "";
        for (const word of paragraph.split(/\s+/)) {
          if (line && ctx.measureText(`${line} ${word}`).width > bw) {
            lines.push(line);
            line = "";
          }
          if (ctx.measureText(word).width <= bw) {
            line += (line ? " " : "") + word;
          } else {
            for (const char of word) {
              if (line && ctx.measureText(line + char).width > bw) {
                lines.push(line);
                line = "";
              }
              line += char;
            }
          }
        }
        lines.push(line.trim());
      }
    };
    wrap();
    while (
      (lines.length * fontSize * 1.13 > bh ||
        lines.some((line) => ctx.measureText(line).width > bw)) &&
      fontSize > size * w * 0.6
    ) {
      fontSize = Math.max(size * w * 0.6, fontSize * 0.94);
      wrap();
    }
    ctx.save();
    ctx.beginPath();
    ctx.rect(x, y, bw, bh);
    ctx.clip();
    ctx.fillStyle = color;
    ctx.textAlign = align;
    ctx.textBaseline = "top";
    lines.forEach((line, i) =>
      ctx.fillText(line, x + (align === "center" ? bw / 2 : 0), y + i * fontSize * 1.13),
    );
    ctx.restore();
    return fontSize;
  };
  path("M .56 0 C .70 0 .77 .06 .79 .137 C .65 .13 .57 .08 .56 0", background.leaf);
  ellipse(1.015, 0.105, 0.215, 0.12, MUSTARD);
  const [tx, ty, tw, th] = l.title;
  const titleSize = text(
    content.title[0],
    [tx, ty, tw, th * 0.49],
    l.titleSize * 0.8,
    800,
    "left",
    INK,
    true,
  );
  const secondY = ty + (titleSize * 0.96) / h;
  text(content.title[1], [tx, secondY, tw, ty + th - secondY], l.titleSize, 800, "left", INK, true);
  path(
    `M ${tx} ${ty + th + 0.026} Q ${tx + 0.14} ${ty + th + 0.005} ${tx + 0.24} ${ty + th + 0.022}`,
    MUSTARD,
    true,
    0.0035,
  );
  text(content.place, l.place, 0.049);
  const [px, py, pw, ph] = l.photo;
  const scale = Math.min((pw * w) / photo.width, (ph * h) / photo.height);
  const imageW = photo.width * scale;
  const imageH = photo.height * scale;
  const imageY = py * h + (ph * h - imageH) / 2;
  ctx.save();
  const mask = new Path2D();
  mask.addPath(
    new Path2D("M 0 0 C .57 .045 .94 .19 .985 .54 C 1 .76 .97 .91 .94 1 H 0 Z"),
    new DOMMatrix().translate(px * w, imageY).scale(imageW, imageH),
  );
  ctx.clip(mask);
  ctx.drawImage(photo, px * w, imageY, imageW, imageH);
  ctx.restore();
  ellipse(...l.lilac, background.lilac);
  rounded(l.schedule, 0.09, background.pill);
  const [sx, sy, sw, sh] = l.schedule;
  ctx.save();
  ctx.translate((sx + 0.045) * w, (sy + sh * 0.3) * h);
  ctx.scale(w * 0.07, w * 0.07);
  ctx.strokeStyle = INK;
  ctx.lineWidth = 0.045;
  ctx.lineCap = "round";
  ctx.stroke(
    new Path2D(
      "M .08 .15 H .92 Q 1 .15 1 .25 V .91 Q 1 1 .91 1 H .09 Q 0 1 0 .91 V .25 Q 0 .15 .08 .15 M 0 .38 H 1 M .22 0 V .25 M .78 0 V .25",
    ),
  );
  for (let y = 0.52; y < 0.9; y += 0.18)
    for (let x = 0.2; x < 0.9; x += 0.2) {
      ctx.beginPath();
      ctx.arc(x, y, 0.025, 0, Math.PI * 2);
      ctx.fillStyle = INK;
      ctx.fill();
    }
  ctx.restore();
  text(content.schedule, [sx + 0.15, sy + sh * 0.28, sw - 0.17, sh * 0.58], 0.036, 400, "center");
  const [hx, hy, hw] = l.highlight;
  path(
    `M ${hx + hw * 0.35} ${hy - 0.025} l -.018 -.013 M ${hx + hw * 0.5} ${hy - 0.029} l -.002 -.018 M ${hx + hw * 0.65} ${hy - 0.025} l .018 -.014`,
    MUSTARD,
    true,
    0.0045,
  );
  text(content.highlight, l.highlight, 0.034, 700, "center");
  text(content.note, l.note, 0.032, 400, "center");
  const [nx, ny, nw, nh] = l.note;
  path(
    `M ${nx + 0.04} ${ny + nh + 0.012} C ${nx + nw * 0.45} ${ny + nh + 0.017} ${nx + nw * 0.7} ${ny + nh + 0.002} ${nx + nw - 0.02} ${ny + nh + 0.009}`,
    MUSTARD,
    true,
    0.002,
  );
  rounded(l.contact, 0.045, INK);
  const [cx, cy, cw, ch] = l.contact;
  text(
    content.contactLabel,
    [cx + 0.025, cy + ch * 0.12, cw - 0.05, ch * 0.21],
    0.03,
    400,
    "center",
    "#ffffff",
  );
  text(
    content.contactName,
    [cx + 0.022, cy + ch * 0.38, cw - 0.044, ch * 0.25],
    0.037,
    700,
    "center",
    "#ffffff",
  );
  ctx.font = `${0.034 * w}px Gabarito`;
  const phoneSize = Math.max(
    0.034 * 0.6,
    Math.min(0.034, (cw - 0.1) / (ctx.measureText(content.contactPhone).width / (0.034 * w))),
  );
  ctx.font = `${phoneSize * w}px Gabarito`;
  const phoneWidth = Math.min(cw - 0.1, ctx.measureText(content.contactPhone).width / w);
  const phoneX = cx + (cw - phoneWidth - 0.05) / 2;
  ctx.save();
  ctx.beginPath();
  ctx.rect((phoneX + 0.05) * w, (cy + ch * 0.69) * h, phoneWidth * w, ch * 0.24 * h);
  ctx.clip();
  ctx.fillStyle = "#fff";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText(content.contactPhone, (phoneX + 0.05) * w, (cy + ch * 0.69) * h);
  ctx.restore();
  ctx.save();
  ctx.translate(phoneX * w, (cy + ch * 0.72) * h);
  ctx.scale(w * 0.036, w * 0.036);
  ctx.fillStyle = "#fff";
  ctx.fill(
    new Path2D(
      "M .05 0 L .3 .02 L .42 .32 L .26 .49 Q .45 .8 .7 .82 L .84 .67 L 1 .82 Q .99 1.2 .65 1.04 Q .08 .82 0 .24 Z",
    ),
  );
  ctx.restore();
  path(
    `M 0 ${l.band + 0.016} C .22 ${l.band - 0.085} .32 ${l.band + 0.055} .61 ${l.band + 0.015} Q .82 ${l.band - 0.004} 1 ${l.band + 0.09} V 1 H 0 Z`,
    background.band,
  );
  if (qr) {
    const [qx, qy, qw, qh] = l.qr;
    const side = Math.min(qw * w, qh * h);
    ctx.beginPath();
    ctx.roundRect(qx * w, qy * h, side, side, side * 0.08);
    ctx.fillStyle = "#fff";
    ctx.fill();
    const module = Math.floor((side * 0.9) / qr.length);
    const offset = (side - module * qr.length) / 2;
    ctx.fillStyle = INK;
    qr.forEach((row, y) =>
      row.forEach((dark, x) => {
        if (dark)
          ctx.fillRect(
            Math.round(qx * w + offset) + x * module,
            Math.round(qy * h + offset) + y * module,
            module,
            module,
          );
      }),
    );
    text(content.qrLabel, l.qrLabel, 0.031);
    path(
      `M ${qx + side / w + 0.16} ${qy + (side / h) * 0.68} Q ${qx + side / w + 0.11} ${qy + (side / h) * 0.9} ${qx + side / w + 0.025} ${qy + (side / h) * 0.78} l .016 -.009 M ${qx + side / w + 0.025} ${qy + (side / h) * 0.78} l .01 .016`,
      INK,
      true,
      0.003,
    );
  }
  const [fx, fy, fw, fh] = qr ? l.signature : [0.2, l.signature[1], 0.6, l.signature[3]];
  const lx = fx + fw / 2,
    ly = fy - 0.022;
  ctx.save();
  ctx.translate(lx * w, ly * h);
  ctx.scale(w * 0.08, w * 0.08);
  ctx.lineWidth = 0.022;
  ctx.strokeStyle = INK;
  ctx.stroke(
    new Path2D(
      "M 0 0 C -.28 -.2 -.3 -.45 0 -.72 C .3 -.45 .28 -.2 0 0 M 0 0 C -.4 .03 -.65 -.19 -.66 -.53 C -.3 -.51 -.06 -.3 0 0 M 0 0 C .4 .03 .65 -.19 .66 -.53 C .3 -.51 .06 -.3 0 0 M 0 0 C -.42 .2 -.7 .07 -.84 -.22 Q -.6 -.35 -.37 -.23 M 0 0 C .42 .2 .7 .07 .84 -.22 Q .6 -.35 .37 -.23",
    ),
  );
  ctx.restore();
  text(content.signatureName, [fx, fy, fw, fh * 0.32], 0.047, 600, "center");
  text(content.signatureRole, [fx, fy + fh * 0.37, fw, fh * 0.6], 0.029, 400, "center");
}
