import type { FlyerContent, FlyerFormat } from "./model";

export function jpegBlob(canvas: HTMLCanvasElement): Promise<Blob> {
  return new Promise((resolve, reject) =>
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error("L’image n’a pas pu être exportée."))),
      "image/jpeg",
      0.92,
    ),
  );
}
export async function pdfBlob(jpeg: Blob, format: FlyerFormat): Promise<Blob> {
  const image = new Uint8Array(await jpeg.arrayBuffer());
  const encoder = new TextEncoder();
  const chunks: Uint8Array[] = [];
  let length = 0;
  const offsets = [0];
  const append = (value: string | Uint8Array) => {
    const bytes = typeof value === "string" ? encoder.encode(value) : value;
    chunks.push(bytes);
    length += bytes.length;
  };
  const object = (id: number, body: string) => {
    offsets[id] = length;
    append(`${id} 0 obj\n${body}\nendobj\n`);
  };
  const [w, h] = format.pagePt;
  append("%PDF-1.4\n");
  object(1, "<< /Type /Catalog /Pages 2 0 R >>");
  object(2, "<< /Type /Pages /Kids [3 0 R] /Count 1 >>");
  object(
    3,
    `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${w} ${h}] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>`,
  );
  offsets[4] = length;
  append(
    `4 0 obj\n<< /Type /XObject /Subtype /Image /Width ${format.width} /Height ${format.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${image.length} >>\nstream\n`,
  );
  append(image);
  append("\nendstream\nendobj\n");
  const command = `q ${w} 0 0 ${h} 0 0 cm /Im0 Do Q\n`;
  object(5, `<< /Length ${encoder.encode(command).length} >>\nstream\n${command}endstream`);
  const xref = length;
  append(
    `xref\n0 6\n0000000000 65535 f \n${offsets
      .slice(1)
      .map((offset) => `${String(offset).padStart(10, "0")} 00000 n \n`)
      .join("")}trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`,
  );
  return new Blob(chunks as BlobPart[], { type: "application/pdf" });
}
export function flyerFilename(
  content: FlyerContent,
  format: FlyerFormat,
  extension: "jpg" | "pdf",
) {
  const place = content.place
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
  return `viniyoga-${format.id}-${place || "cours"}.${extension}`;
}
export function download(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
