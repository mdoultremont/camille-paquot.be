// Cut-paper shapes, the visual signature of the brand. Size them with a width class.
const shapes = {
  circle: "aspect-square rounded-full",
  halfMoon: "aspect-[2/1] rounded-t-full",
  leaf: "aspect-square rounded-tr-full rounded-bl-full",
  arch: "aspect-[4/5] rounded-t-full",
  petal: "aspect-square rounded-[50%_50%_50%_0]",
  quarterCircle: "aspect-square rounded-tr-full",
  pebble: "aspect-[15/13] rounded-[58%_42%_50%_50%/55%_45%_55%_45%]",
};

export type ShapeName = keyof typeof shapes;

export function Shape({ shape, className }: { shape: ShapeName; className: string }) {
  return <span aria-hidden="true" className={`block ${shapes[shape]} ${className}`} />;
}
