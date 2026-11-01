import { Shape, type ShapeName } from "@/components/Shape";

export type ShapeBullet = [ShapeName, string];

export function ShapeList({
  items,
  bullets,
  className = "",
  itemClassName = "",
  bulletClassName = "mt-1.5 w-4 flex-none self-start",
}: {
  items: readonly string[];
  bullets: readonly ShapeBullet[];
  className?: string;
  itemClassName?: string;
  bulletClassName?: string;
}) {
  return (
    <ul className={className}>
      {items.map((item, index) => {
        const [shape, color] = bullets[index % bullets.length];
        return (
          <li key={item} className={`flex gap-3 ${itemClassName}`}>
            <Shape shape={shape} className={`${bulletClassName} ${color}`} />
            {item}
          </li>
        );
      })}
    </ul>
  );
}
