import { phone } from "../../constants.ts";

export type FlyerContent = {
  title: [string, string];
  place: string;
  schedule: string;
  highlight: string;
  note: string;
  contactLabel: string;
  contactName: string;
  contactPhone: string;
  qrUrl: string;
  qrLabel: string;
  signatureName: string;
  signatureRole: string;
};

export type Box = [number, number, number, number];
export type FlyerLayout = {
  title: Box;
  place: Box;
  photo: [x: number, y: number, width: number];
  leaf: Box;
  schedule: Box;
  highlight: Box;
  note: Box;
  contact: Box;
  qr: Box;
  qrLabel: Box;
  signature: Box;
  signatureWithoutQr: Box;
  qrArrow: Box;
  band: number;
  titleSize: number;
  lilac: Box;
};
export type FlyerFormat = {
  id: string;
  label: string;
  width: number;
  height: number;
  pagePt: [number, number];
  print: boolean;
  layout: FlyerLayout;
};
const standard: FlyerLayout = {
  title: [0.09, 0.05, 0.74, 0.2],
  titleSize: 0.144,
  lilac: [0.025, 0.81, 0.13, 0.075],
  place: [0.095, 0.283, 0.77, 0.071],
  photo: [0, 0.35, 0.625],
  leaf: [0.64, 0, 0.15, 0.085],
  schedule: [0.565, 0.345, 0.42, 0.104],
  highlight: [0.65, 0.51, 0.31, 0.04],
  note: [0.67, 0.56, 0.28, 0.06],
  contact: [0.64, 0.642, 0.34, 0.12],
  qr: [0.17, 0.843, 0.16, 0.114],
  qrLabel: [0.37, 0.85, 0.24, 0.05],
  signature: [0.56, 0.895, 0.41, 0.075],
  signatureWithoutQr: [0.2, 0.91, 0.6, 0.06],
  qrArrow: [0.49, 0.92, 0.14, 0.02],
  band: 0.81,
};
const tall: FlyerLayout = {
  title: [0.09, 0.04, 0.83, 0.19],
  titleSize: 0.16,
  leaf: [0.69, 0, 0.14, 0.07],
  lilac: [0.015, 0.745, 0.13, 0.055],
  place: [0.095, 0.265, 0.7, 0.06],
  photo: [0, 0.39, 0.61],
  schedule: [0.55, 0.33, 0.43, 0.075],
  highlight: [0.64, 0.48, 0.33, 0.03],
  note: [0.65, 0.52, 0.31, 0.05],
  contact: [0.64, 0.62, 0.34, 0.102],
  qr: [0.17, 0.785, 0.2, 0.1],
  qrLabel: [0.43, 0.79, 0.4, 0.055],
  signature: [0.2, 0.9, 0.6, 0.07],
  signatureWithoutQr: [0.2, 0.855, 0.6, 0.09],
  qrArrow: [0.525, 0.832, 0.14, 0.003],
  band: 0.74,
};
const compact: FlyerLayout = {
  ...standard,
  title: [0.09, 0.04, 0.75, 0.22],
  place: [0.09, 0.293, 0.8, 0.075],
  photo: [0, 0.385, 0.54],
  schedule: [0.55, 0.395, 0.43, 0.11],
  highlight: [0.6, 0.565, 0.36, 0.03],
  note: [0.62, 0.61, 0.32, 0.05],
  contact: [0.61, 0.69, 0.37, 0.1],
  qr: [0.17, 0.835, 0.15, 0.13],
  qrLabel: [0.36, 0.84, 0.23, 0.065],
  signature: [0.56, 0.895, 0.41, 0.075],
  signatureWithoutQr: [0.2, 0.91, 0.6, 0.06],
  band: 0.8,
};
const printFormat = (
  id: string,
  label: string,
  mm: [number, number],
  layout: FlyerLayout,
): FlyerFormat => ({
  id,
  label,
  width: Math.round((mm[0] / 25.4) * 300),
  height: Math.round((mm[1] / 25.4) * 300),
  pagePt: [(mm[0] / 25.4) * 72, (mm[1] / 25.4) * 72],
  print: true,
  layout,
});
export const FLYER_FORMATS: FlyerFormat[] = [
  printFormat("a4", "A4 · 210 × 297 mm", [210, 297], standard),
  printFormat("a5", "Flyer A5 · 148 × 210 mm", [148, 210], standard),
  printFormat("dl", "Flyer étroit · 99 × 210 mm", [99, 210], {
    ...tall,
    photo: [0, 0.445, 0.61],
  }),
  {
    id: "instagram-post",
    label: "Instagram · publication",
    width: 1080,
    height: 1350,
    pagePt: [1080, 1350],
    print: false,
    layout: compact,
  },
  {
    id: "instagram-story",
    label: "Instagram · story",
    width: 1080,
    height: 1920,
    pagePt: [1080, 1920],
    print: false,
    layout: tall,
  },
];
export const PHOTO_ASPECT_RATIO = 644 / 716;
export const PHOTO_MASK =
  "M -.04 0 C .36 .028 .69 .074 .87 .27 C 1 .41 1.025 .56 .99 .73 C .96 .86 .88 .94 .79 1 H -.04 Z";

export const INK = "#22302a";
export const MUSTARD = "#dcae4e";
export const FLYER_BACKGROUNDS = [
  {
    id: "cream",
    label: "Crème",
    paper: "#faf6ef",
    band: "#cbd2b8",
    leaf: "#aab798",
    pill: "#cbdde5",
    lilac: "#ded0e3",
  },
  {
    id: "sage",
    label: "Sauge",
    paper: "#e9eee3",
    band: "#bdcaa9",
    leaf: "#93a786",
    pill: "#d5e4ec",
    lilac: "#ded0e3",
  },
  {
    id: "sky",
    label: "Ciel",
    paper: "#e9f0f4",
    band: "#c6d1b6",
    leaf: "#a2b290",
    pill: "#b8cedb",
    lilac: "#dacbe1",
  },
  {
    id: "lilac",
    label: "Lilas",
    paper: "#f1eaf3",
    band: "#cad3b8",
    leaf: "#a3b491",
    pill: "#cadde8",
    lilac: "#d6bfdf",
  },
];
export type FlyerBackground = (typeof FLYER_BACKGROUNDS)[number];
export const FLYER_PRESETS = [
  {
    label: "Woluwé",
    place: "au Centre Pep’s\nPérinat Woluwé",
    schedule: "Les mardis\nde 12h15 à 13h15",
  },
  {
    label: "Brabant Wallon",
    place: "au Centre périnatal\ndu Brabant Wallon",
    schedule: "Les vendredis\nde 12h à 13h",
  },
];
export const DEFAULT_CONTENT: FlyerContent = {
  title: ["Cours de", "Viniyoga"],
  place: FLYER_PRESETS[0].place,
  schedule: FLYER_PRESETS[0].schedule,
  highlight: "Accessible à tou.t.es.",
  note: "Pas de prérequis\nnécessaire.",
  contactLabel: "Info et inscription",
  contactName: "Camille Paquot",
  contactPhone: phone.display,
  qrUrl: "https://camille-paquot.be/yoga",
  qrLabel: "Plus d’informations\nvia ce lien :",
  signatureName: "Camille Paquot",
  signatureRole: "psychologue clinicienne\net professeure de Yoga",
};
export const DEFAULT_PHOTO = "/images/tools/viniyoga-default.jpg";
