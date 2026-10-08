import type { Service } from "../content";

// Shared utility lists keep the site's repeated typography and controls consistent.
export const container = "mx-auto w-full max-w-6xl px-5 md:px-8";
export const h1 = "text-4xl leading-none font-extrabold tracking-tight text-balance md:text-6xl";
export const h2 = "text-3xl font-extrabold tracking-tight text-balance md:text-4xl";
export const h3 = "text-2xl leading-tight font-extrabold tracking-tight";
export const lead = "text-lg text-ink-soft md:text-xl";
export const prose = "max-w-prose space-y-4 text-lg leading-relaxed";
export const textLink =
  "font-bold underline decoration-mustard decoration-2 underline-offset-4 transition-colors hover:decoration-ink";
const button =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-bold whitespace-nowrap transition-colors";
export const primaryButton = `${button} bg-ink text-white hover:bg-ink-soft`;
export const outlineButton = `${button} text-ink ring-2 ring-ink ring-inset hover:bg-ink hover:text-white`;

// Cut-paper shapes, the visual signature of the brand. Size them with a width class.
export const shapes = {
  circle: "aspect-square rounded-full",
  halfMoon: "aspect-[2/1] rounded-t-full",
  leaf: "aspect-square rounded-tr-full rounded-bl-full",
  pebble: "aspect-[15/13] rounded-[58%_42%_50%_50%/55%_45%_55%_45%]",
} as const;

// Each service keeps the same colour and shape across cards and its own page.
export const serviceThemes: Record<
  Service["slug"],
  { background: string; shape: keyof typeof shapes; shapeColor: string }
> = {
  "enfants-adolescents": {
    background: "bg-mustard-light",
    shape: "circle",
    shapeColor: "bg-lilac",
  },
  adultes: { background: "bg-sage", shape: "halfMoon", shapeColor: "bg-mustard" },
  parentalite: { background: "bg-lilac", shape: "leaf", shapeColor: "bg-sky" },
  yoga: { background: "bg-sky", shape: "pebble", shapeColor: "bg-mustard" },
};
