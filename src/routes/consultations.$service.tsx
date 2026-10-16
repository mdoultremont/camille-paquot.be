import { createFileRoute, notFound } from "@tanstack/react-router";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { PracticalInfo } from "@/components/PracticalInfo";
import { ServiceCard } from "@/components/ServiceCard";
import { Shape, type ShapeName } from "@/components/Shape";
import { services } from "@/services";
import { pageHead } from "@/seo";

export const Route = createFileRoute("/consultations/$service")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.service);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) =>
    loaderData
      ? pageHead({
          title: `${loaderData.title} - Camille Paquot`,
          description: loaderData.intro,
          path: `/consultations/${loaderData.slug}`,
        })
      : {},
  component: Page,
});

// Media chips sit on white, so they can use the whole palette.
const mediaBullets: [ShapeName, string][] = [
  ["circle", "bg-mustard"],
  ["pebble", "bg-lilac"],
  ["halfMoon", "bg-sage"],
  ["leaf", "bg-sky"],
  ["circle", "bg-ink"],
];

function Page() {
  const service = Route.useLoaderData();
  const { theme } = service;
  const otherServices = services.filter((s) => s.slug !== service.slug);
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
              {service.title}
            </Heading>
            <p className="mt-5 max-w-2xl text-lg md:text-xl">{service.intro}</p>
          </Container>
        </div>
      </section>
      <Container
        as="section"
        className="grid items-start gap-12 py-12 md:py-16 lg:grid-cols-[1fr_22rem]"
      >
        <div>
          <div className="max-w-prose space-y-4 text-lg leading-relaxed">
            {service.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          {service.reasons.length > 0 && (
            <>
              <Heading level={3} as="h2" className="mt-10 mb-2">
                Motifs de consultation
              </Heading>
              <p className="mb-5 max-w-prose text-base leading-relaxed text-ink-soft">
                Voici quelques exemples de motifs de consultation. Cette liste n’est pas exhaustive.
              </p>
              <ul className="max-w-prose columns-1 gap-x-8 space-y-2 text-lg sm:columns-2">
                {service.reasons.map((item, index) => {
                  const [shape, color] = mediaBullets[index % mediaBullets.length];
                  return (
                    <li key={item} className="flex gap-3 break-inside-avoid">
                      <Shape shape={shape} className={`mt-2 w-3.5 flex-none self-start ${color}`} />
                      {item}
                    </li>
                  );
                })}
              </ul>
            </>
          )}
          {service.closing && (
            <p className="mt-8 max-w-prose text-lg leading-relaxed">{service.closing}</p>
          )}
          {service.media.length > 0 && (
            <>
              <Heading level={3} as="h2" className="mt-10 mb-4">
                {service.mediaTitle}
              </Heading>
              <ul className="flex flex-wrap gap-2">
                {service.media.map((item, index) => {
                  const [shape, color] = mediaBullets[index % mediaBullets.length];
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
            </>
          )}
        </div>
        <aside className="w-full max-w-md lg:sticky lg:top-28">
          <PracticalInfo service={service} />
        </aside>
      </Container>
      <Container as="section" className="pb-16">
        <Heading level={2} className="mb-8">
          D’autres consultations
        </Heading>
        <div className="grid gap-5 md:grid-cols-2">
          {otherServices.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Container>
    </>
  );
}
