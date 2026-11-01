import { ShapeList, type ShapeBullet } from "@/components/ShapeList";

const strengths = [
  "Un accueil chaleureux et humain",
  "Une écoute active et empathique",
  "Un cadre sécurisant et bienveillant",
  "Une approche adaptée à vos besoins",
  "Une approche psycho-corporelle",
];

// Mustard and ink bullets stay readable on every panel colour.
const bullets: ShapeBullet[] = [
  ["circle", "bg-mustard"],
  ["leaf", "bg-ink"],
  ["pebble", "bg-mustard"],
  ["halfMoon", "bg-ink"],
];

// "Ce que j’apporte", shown on the home, services and about pages.
export function Strengths({ className = "" }: { className?: string }) {
  return (
    <ShapeList
      items={strengths}
      bullets={bullets}
      className={`space-y-3 ${className}`}
      itemClassName="text-lg"
    />
  );
}
