import { Shape, type ShapeName } from "@/components/Shape";

const strengths = [
  "Un accueil chaleureux et humain",
  "Une écoute active et empathique",
  "Un cadre sécurisant et bienveillant",
  "Une approche adaptée à vos besoins",
  "Une approche psycho-corporelle",
];

// Mustard and ink bullets stay readable on every panel colour.
const bullets: [ShapeName, string][] = [
  ["circle", "bg-mustard"],
  ["leaf", "bg-ink"],
  ["pebble", "bg-mustard"],
  ["halfMoon", "bg-ink"],
];

// "Ce que j’apporte", shown on the home, services and about pages.
export function Strengths({ className = "" }: { className?: string }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {strengths.map((item, index) => {
        const [shape, color] = bullets[index % bullets.length];
        return (
          <li key={item} className="flex gap-3 text-lg">
            <Shape shape={shape} className={`mt-1.5 w-4 flex-none self-start ${color}`} />
            {item}
          </li>
        );
      })}
    </ul>
  );
}
