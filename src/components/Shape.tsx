// Cut-paper shapes, the visual signature of the brand. Size them with a width class.
const shapes = {
  circle: "aspect-square rounded-full",
  halfMoon: "aspect-[2/1] rounded-t-full",
  leaf: "aspect-square rounded-tr-full rounded-bl-full",
  pebble: "aspect-[15/13] rounded-[58%_42%_50%_50%/55%_45%_55%_45%]",
};

export type ShapeName = keyof typeof shapes;

export function Shape({ shape, className }: { shape: ShapeName; className: string }) {
  return <span aria-hidden="true" className={`block ${shapes[shape]} ${className}`} />;
}
