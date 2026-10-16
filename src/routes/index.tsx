import { createFileRoute } from "@tanstack/react-router";
import { BookingBand } from "@/components/BookingBand";
import { ConsultationOpening } from "@/components/ConsultationOpening";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Portrait } from "@/components/Portrait";
import { Shape } from "@/components/Shape";
import { ServiceCard } from "@/components/ServiceCard";
import { Strengths } from "@/components/Strengths";
import { TextLink } from "@/components/TextLink";
import { introduction } from "@/constants";
import { services } from "@/services";
import { yoga } from "@/yoga";
import { pageHead } from "@/seo";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () =>
    pageHead({
      title: "Camille Paquot - Psychologue clinicienne",
      description:
        "Psychologue clinicienne agréée, j’accompagne les enfants, les adolescents, les adultes et les parents dans un cadre bienveillant. Cours de yoga.",
      path: "/",
    }),
});

function HomePage() {
  return (
    <>
      <Container as="section" className="grid items-center gap-10 py-10 md:py-16 lg:grid-cols-2">
        <div>
          <Heading level={1} className="md:text-7xl">
            Un espace thérapeutique pour s’exprimer.
          </Heading>
          <p className="mt-6 max-w-lg text-lg text-ink-soft md:text-xl">
            Je propose des consultations pour les enfants, adolescents, adultes et parents qui
            souhaitent débuter un travail thérapeutique afin de mettre des mots sur ce qui pèse au
            quotidien.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ConsultationOpening />
            <ButtonLink variant="outline" to="/consultations">
              Les consultations
            </ButtonLink>
          </div>
        </div>
        <Portrait className="mx-auto max-w-md" />
      </Container>
      <Container as="section" className="py-16">
        <Heading level={2} className="mb-8">
          Consultations
        </Heading>
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
      <Container as="section" className="pb-16">
        <div
          className={`relative flex flex-col items-start gap-6 overflow-hidden rounded-[2rem] p-8 md:flex-row md:items-center md:justify-between md:p-12 ${yoga.theme.background}`}
        >
          <Shape
            shape={yoga.theme.shape}
            className={`absolute -bottom-28 left-1/2 w-40 ${yoga.theme.shapeColor}`}
          />
          <div className="relative max-w-xl">
            <Heading level={2}>{yoga.title}</Heading>
            <p className="mt-3 text-lg">{yoga.intro}</p>
          </div>
          <ButtonLink to="/yoga" className="relative">
            Découvrir les cours
          </ButtonLink>
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
