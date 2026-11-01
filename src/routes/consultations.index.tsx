import { createFileRoute } from "@tanstack/react-router";
import { BookingBand } from "@/components/BookingBand";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { ServiceCard } from "@/components/ServiceCard";
import { Strengths } from "@/components/Strengths";
import { services } from "@/services";
import { pageHead } from "@/seo";

export const Route = createFileRoute("/consultations/")({
  head: () =>
    pageHead({
      title: "Consultations - Camille Paquot",
      description:
        "Thérapie pour enfants, adolescents et adultes et soutien à la parentalité : découvrez les consultations proposées à Bruxelles.",
      ogImage: { title: "Consultations", subtitle: "Ensemble, explorons le champ des possibles." },
      path: "/consultations",
    }),
  component: Page,
});

function Page() {
  return (
    <>
      <Container as="section" className="py-12 md:py-16">
        <Heading level={1}>Consultations</Heading>
        <p className="mt-5 max-w-2xl text-lg text-ink-soft md:text-xl">
          Ensemble, explorons le champ des possibles afin de trouver un apaisement psychique et
          physique.
        </p>
      </Container>
      <Container as="section" className="grid gap-5 md:grid-cols-3">
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
