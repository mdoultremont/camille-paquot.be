import { createFileRoute } from "@tanstack/react-router";
import { BookingBand } from "@/components/BookingBand";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { ServiceCard } from "@/components/ServiceCard";
import { Strengths } from "@/components/Strengths";
import { services } from "@/services";

export const Route = createFileRoute("/accompagnement/")({
  component: ServicesPage,
  head: () => ({
    meta: [{ title: "Accompagnements - Camille Paquot" }],
  }),
});

function ServicesPage() {
  return (
    <>
      <Container as="section" className="py-12 md:py-16">
        <Heading level={1}>Accompagnements</Heading>
        <p className="mt-5 max-w-2xl text-lg text-ink-soft md:text-xl">
          Ensemble, explorons le champ des possibles afin de trouver un apaisement psychique et
          physique.
        </p>
      </Container>
      <Container as="section" className="grid gap-5 sm:grid-cols-2">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </Container>
      <Container as="section" className="grid gap-10 py-16 md:grid-cols-[1fr_2fr]">
        <Heading level={2}>Ce que j’apporte</Heading>
        <div className="columns-1 sm:columns-2 [&_li]:break-inside-avoid">
          <Strengths />
        </div>
      </Container>
      <BookingBand />
    </>
  );
}
