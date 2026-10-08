import { createFileRoute, notFound } from "@tanstack/react-router";
import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { PracticalInfo } from "../components/PracticalInfo";
import { ServiceCard } from "../components/ServiceCard";
import { Shape, type ShapeName } from "../components/Shape";
import { services, type Service } from "../services";

export const Route = createFileRoute("/accompagnement/$service")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.service);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.title ?? "Accompagnement"} - Camille Paquot` }],
  }),
  component: () => <ServicePage service={Route.useLoaderData()} />,
});

// Media chips sit on white, so they can use the whole palette.
const mediaBullets: [ShapeName, string][] = [
  ["circle", "bg-mustard"],
  ["pebble", "bg-lilac"],
  ["halfMoon", "bg-sage"],
  ["leaf", "bg-sky"],
  ["circle", "bg-ink"],
];

function ServicePage({ service }: { service: Service }) {
  const { theme } = service;
  const otherServices = services.filter((s) => s.slug !== service.slug);
  return (
    <>
      <section className="px-3 md:px-6">
        <div className={`relative overflow-hidden rounded-[2rem] ${theme.background}`}>
          <Shape
            shape={theme.shape}
            className={`absolute -right-10 -bottom-10 w-40 md:top-10 md:right-16 md:bottom-auto md:w-56 ${theme.shapeColor}`}
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
          D’autres accompagnements
        </Heading>
        <div className="grid gap-5 md:grid-cols-3">
          {otherServices.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Container>
    </>
  );
}
