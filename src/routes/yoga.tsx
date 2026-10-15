import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { PracticalInfo } from "@/components/PracticalInfo";
import { Shape, type ShapeName } from "@/components/Shape";
import { yoga } from "@/yoga";
import { pageHead } from "@/seo";

export const Route = createFileRoute("/yoga")({
  component: YogaPage,
  head: () =>
    pageHead({
      title: "Cours de yoga - Camille Paquot",
      description:
        "Cours collectifs de Viniyoga à Bruxelles : postures, respiration et relaxation, accessibles sans prérequis.",
      path: "/yoga",
    }),
});

// Chips sit on white, so they can use the whole palette.
const chipBullets: [ShapeName, string][] = [
  ["circle", "bg-mustard"],
  ["pebble", "bg-lilac"],
  ["halfMoon", "bg-sage"],
  ["leaf", "bg-sky"],
];

function YogaPage() {
  const { theme } = yoga;
  return (
    <>
      <section className="px-3 md:px-6">
        <div className={`relative overflow-hidden rounded-4xl ${theme.background}`}>
          <Shape
            shape={theme.shape}
            className={`absolute top-10 right-16 hidden w-56 lg:block ${theme.shapeColor}`}
          />
          <Container className="relative py-10 md:py-16">
            <Heading level={1} className="max-w-2xl">
              {yoga.title}
            </Heading>
            <p className="mt-5 max-w-2xl text-lg md:text-xl">{yoga.intro}</p>
          </Container>
        </div>
      </section>
      <Container
        as="section"
        className="grid items-start gap-12 py-12 md:py-16 lg:grid-cols-[1fr_22rem]"
      >
        <div>
          <div className="max-w-prose space-y-4 text-lg leading-relaxed">
            {yoga.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <Heading level={3} as="h2" className="mt-10 mb-4">
            {yoga.mediaTitle}
          </Heading>
          <ul className="flex flex-wrap gap-2">
            {yoga.media.map((item, index) => {
              const [shape, color] = chipBullets[index % chipBullets.length];
              return (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-full py-1.5 pr-4 pl-2 font-semibold ring-2 ring-ink"
                >
                  <Shape shape={shape} className={`w-4 ${color}`} />
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <aside className="w-full max-w-md lg:sticky lg:top-28">
          <PracticalInfo service={yoga} />
        </aside>
      </Container>
    </>
  );
}
