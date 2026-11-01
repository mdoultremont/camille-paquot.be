import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { createCanvas, GlobalFonts, Path2D } from "@napi-rs/canvas";
import { FLYER_BACKGROUNDS, INK, MUSTARD } from "../src/tools/flyer/model.ts";

const clientDirectory = "dist/client";
GlobalFonts.registerFromPath("public/fonts/gabarito.woff2", "Gabarito");
const background = FLYER_BACKGROUNDS[0];

function renderImage(title: string, subtitle: string) {
  const canvas = createCanvas(1200, 630);
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = background.paper;
  ctx.fillRect(0, 0, 1200, 630);
  ctx.fillStyle = background.leaf;
  ctx.fill(new Path2D("M 935 -20 Q 1110 -20 1110 150 Q 935 150 935 -20"));
  ctx.fillStyle = MUSTARD;
  ctx.beginPath();
  ctx.ellipse(1215, 160, 155, 105, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = background.lilac;
  ctx.beginPath();
  ctx.ellipse(1060, 400, 92, 56, -0.3, 0, Math.PI * 2);
  ctx.fill();

  function fit(value: string, width: number, height: number, size: number, weight: number) {
    let lines: string[];
    let fits: boolean;
    do {
      ctx.font = `${weight} ${size}px Gabarito`;
      lines = [];
      let line = "";
      for (const word of value.split(/\s+/)) {
        if (line && ctx.measureText(`${line} ${word}`).width > width) {
          lines.push(line);
          line = "";
        }
        line += (line ? " " : "") + word;
      }
      lines.push(line);
      fits =
        lines.length * size * 1.12 <= height &&
        lines.every((part) => ctx.measureText(part).width <= width);
      if (!fits) size *= 0.95;
    } while (!fits);
    return { lines, size, weight, height: lines.length * size * 1.12 };
  }

  function draw({ lines, size, weight }: ReturnType<typeof fit>, x: number, y: number) {
    ctx.font = `${weight} ${size}px Gabarito`;
    ctx.fillStyle = INK;
    ctx.textBaseline = "alphabetic";
    lines.forEach((line, index) => ctx.fillText(line, x, y + size * 0.85 + index * size * 1.12));
  }

  const titleBlock = fit(title, 820, 240, 90, 800);
  const subtitleBlock = fit(subtitle, 800, 115, 36, 400);
  const titleY = (480 - (titleBlock.height + 46 + subtitleBlock.height)) / 2;
  draw(titleBlock, 86, titleY);
  const curveY = titleY + titleBlock.height + 18;
  ctx.strokeStyle = MUSTARD;
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.stroke(new Path2D(`M 88 ${curveY} C 190 ${curveY - 14} 285 ${curveY + 7} 405 ${curveY - 3}`));
  draw(subtitleBlock, 88, curveY + 28);

  ctx.fillStyle = background.band;
  ctx.fill(new Path2D("M 0 496 C 250 440 390 530 710 494 Q 970 468 1200 525 V 630 H 0 Z"));
  ctx.save();
  ctx.translate(122, 577);
  ctx.scale(58, 58);
  ctx.lineWidth = 0.028;
  ctx.strokeStyle = INK;
  ctx.stroke(
    new Path2D(
      "M 0 0 C -.28 -.2 -.3 -.45 0 -.72 C .3 -.45 .28 -.2 0 0 M 0 0 C -.4 .03 -.65 -.19 -.66 -.53 C -.3 -.51 -.06 -.3 0 0 M 0 0 C .4 .03 .65 -.19 .66 -.53 C .3 -.51 .06 -.3 0 0 M 0 0 C -.42 .2 -.7 .07 -.84 -.22 Q -.6 -.35 -.37 -.23 M 0 0 C .42 .2 .7 .07 .84 -.22 Q .6 -.35 .37 -.23",
    ),
  );
  ctx.restore();
  draw(fit("Camille Paquot", 900, 45, 38, 600), 205, 526);
  draw(fit("psychologue clinicienne et professeure de Yoga", 900, 35, 27, 400), 205, 575);
  return canvas.toBuffer("image/png");
}

async function generateImages(directory: string) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) {
      await generateImages(file);
    } else if (entry.name.endsWith(".html")) {
      const html = await readFile(file, "utf8");
      for (const tag of html.matchAll(/<meta\b[^>]*>/g)) {
        if (!/property="og:image"/.test(tag[0])) continue;
        const content = tag[0].match(/\bcontent="([^"]*)"/)![1];
        const url = new URL(content.replaceAll(/&amp;|&#x26;|&#38;/g, "&"));
        const title = url.searchParams.get("title");
        if (!title?.trim()) throw new Error(`Missing OG image title in ${file}`);
        const output = join(clientDirectory, url.pathname);
        await mkdir(join(clientDirectory, "og"), { recursive: true });
        await writeFile(output, renderImage(title, url.searchParams.get("subtitle") ?? ""));
        console.log(`Generated ${output}`);
      }
    }
  }
}

await generateImages(clientDirectory);
