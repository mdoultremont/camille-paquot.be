import { createFileRoute } from "@tanstack/react-router";
import { BookingBand } from "@/components/BookingBand";
import { BookingLink } from "@/components/BookingLink";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Portrait } from "@/components/Portrait";
import { ServiceCard } from "@/components/ServiceCard";
import { Strengths } from "@/components/Strengths";
import { TextLink } from "@/components/TextLink";
import { introduction } from "@/constants";
import { services } from "@/services";

export const Route = createFileRoute("/")({ component: HomePage });

function HomePage() {
  return (
    <>
      <Container as="section" className="grid items-center gap-10 py-10 md:py-16 lg:grid-cols-2">
        <div>
          <Heading level={1} className="md:text-7xl">
            Un espace bienveillant pour s’exprimer.
          </Heading>
          <p className="mt-6 max-w-lg text-lg text-ink-soft md:text-xl">
            J’accompagne enfants, adolescents, adultes et parents pour mettre des mots sur ce qui se
            vit et retrouver leurs ressources.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <BookingLink />
            <ButtonLink variant="outline" to="/accompagnement">
              Les accompagnements
            </ButtonLink>
          </div>
        </div>
        <Portrait className="mx-auto max-w-md" />
      </Container>
      <Container as="section" className="py-16">
        <Heading level={2} className="mb-8">
          Accompagnements
        </Heading>
        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
      <Container as="section" className="grid gap-10 py-16 lg:grid-cols-2">
        <div>
          <Heading level={2}>À propos de moi</Heading>
          <p className="mt-2 font-semibold text-ink-soft">
            Camille Paquot, psychologue clinicienne agréée
          </p>
          <p className="mt-6 max-w-prose text-lg leading-relaxed">{introduction}</p>
          <TextLink to="/a-propos" className="mt-6 inline-block">
            Mon parcours et mes formations
          </TextLink>
        </div>
        <div className="rounded-3xl bg-lilac p-8">
          <Heading level={3} className="mb-5">
            Ce que j’apporte
          </Heading>
          <Strengths />
        </div>
      </Container>
      <BookingBand />
    </>
  );
}
