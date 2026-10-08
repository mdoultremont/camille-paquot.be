import { Shape } from "./Shape";

// Black-and-white portrait cut into an arch, surrounded by paper shapes.
export function Portrait({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-square w-full ${className}`}>
      <Shape shape="leaf" className="absolute top-0 left-[4%] w-[20%] rotate-12 bg-sage" />
      <img
        src="/images/camille-paquot.jpg"
        alt="Portrait de Camille Paquot"
        className="absolute top-[9%] left-[16%] h-[82%] w-[68%] rounded-t-full rounded-b-3xl object-cover object-top grayscale"
      />
      <Shape shape="circle" className="absolute top-[2%] right-[4%] w-[26%] bg-mustard" />
      <Shape shape="circle" className="absolute top-0 right-[34%] w-[10%] bg-sky" />
      <Shape shape="halfMoon" className="absolute bottom-[2%] left-0 w-[42%] -rotate-6 bg-sage" />
      <Shape
        shape="pebble"
        className="absolute right-[2%] bottom-[6%] w-[32%] rotate-12 bg-lilac"
      />
    </div>
  );
}
