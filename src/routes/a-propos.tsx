import { createFileRoute } from "@tanstack/react-router";
import { BookingBand } from "../components/BookingBand";
import { BookingLink } from "../components/BookingLink";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { EmailLink } from "../components/EmailLink";
import { Heading } from "../components/Heading";
import { Portrait } from "../components/Portrait";
import { Shape } from "../components/Shape";
import { Strengths } from "../components/Strengths";
import { introduction, phone } from "../constants";

export const Route = createFileRoute("/a-propos")({
  component: AboutPage,
  head: () => ({ meta: [{ title: "À propos - Camille Paquot" }] }),
});

const aboutParagraphs = [
  "À travers des entretiens individuels et familiaux, j’accompagne les enfants, les adolescents et les adultes qui traversent, ponctuellement ou plus durablement, des difficultés dans leur vie.",
  "Je tiens à offrir un espace bienveillant, sécurisant, chaleureux et sans jugement, où chacun peut se sentir accueilli tel qu’il est. Ensemble, nous prenons le temps de comprendre ce qui se joue, de démêler les nœuds auxquels vous êtes confrontés et de nous appuyer sur vos ressources pour avancer à votre rythme.",
  "Je vous accompagne dans la mise en mots de vos émotions, l’exploration de votre vécu et l’ouverture vers de nouvelles possibilités. Mon rôle est de cheminer à vos côtés, dans le respect de votre singularité et de votre rythme.",
  "Lorsque cela est pertinent et souhaité, j’intègre une dimension psycho-corporelle à l’accompagnement. Le Yoga invite à prendre en compte les liens entre le corps, les émotions et la vie psychique, afin de favoriser un mieux-être global.",
  "En fonction de l’âge, des besoins et des demandes de chacun, je m’appuie sur différents médias et outils thérapeutiques : art-thérapie, livres et supports créatifs, Yoga. Ces supports peuvent offrir d’autres chemins pour exprimer ce qui est parfois difficile à mettre en mots.",
  "Diplômée en psychologie clinique de l’enfant, de l’adolescent et de la famille à l’Université Catholique de Louvain-la-Neuve, j’ai à cœur de continuer à me former afin d’étayer mes connaissances et compétences professionnelles.",
];

const commitments = [
  "Membre de la Commission Belge des Psychologues",
  "Titulaire du visa et de l’agrément",
  "Respect du code de déontologie",
  "Respect du secret professionnel",
];

// Most recent first; `ongoing` marks trainings still in progress.
const trainings = [
  {
    title: "Professeure de Yoga et Yoga-thérapeutique",
    details: "Mitra ASBL, 2025 à 2029",
    ongoing: true,
  },
  {
    title: "Certificat universitaire en accompagnement psychologique de la parentalité",
    details: "Université Catholique de Louvain-la-Neuve, 2026 à 2027",
    ongoing: true,
  },
  {
    title: "Congrès SOS Enfants : « Les nouveaux visages de la maltraitance »",
    details: "Bruxelles, octobre 2024",
    ongoing: false,
  },
  {
    title: "Prévention et intervention face au risque suicidaire",
    details: "Île de la Réunion, 2023",
    ongoing: false,
  },
  {
    title: "Master en psychologie clinique de l’enfant, de l’adolescent et de la famille",
    details: "Université Catholique de Louvain-la-Neuve, juin 2021",
    ongoing: false,
  },
] as const;

function AboutPage() {
  return (
    <>
      <Container as="section" className="grid items-center gap-10 py-10 md:py-16 lg:grid-cols-2">
        <div>
          <Heading level={1}>Qui suis-je ?</Heading>
          <p className="mt-6 text-2xl font-extrabold">Camille Paquot</p>
          <p className="text-lg text-ink-soft">Psychologue clinicienne agréée</p>
          <p className="mt-6 max-w-prose text-lg leading-relaxed">{introduction}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <BookingLink />
            <Button variant="outline" href={phone.href}>
              {phone.display}
            </Button>
          </div>
          <EmailLink emphasis className="mt-4" />
        </div>
        <Portrait className="mx-auto max-w-sm" />
      </Container>
      <Container as="section" className="grid items-start gap-12 py-12 lg:grid-cols-[1fr_22rem]">
        <div className="max-w-prose space-y-4 text-lg leading-relaxed">
          {aboutParagraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <aside className="rounded-3xl bg-sage p-8">
          <Heading level={3} as="h2" className="mb-5">
            Ce que j’apporte
          </Heading>
          <Strengths />
        </aside>
      </Container>
      <Container as="section" className="py-12">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((item, index) => (
            <li
              key={item}
              className={`rounded-2xl p-5 text-lg font-semibold ring-2 ring-ink ${index % 2 ? "rotate-1" : "-rotate-1"}`}
            >
              {item}
            </li>
          ))}
        </ul>
      </Container>
      <Container as="section" id="formations" className="scroll-mt-24 py-16">
        <Heading level={2}>Formations</Heading>
        <p className="mt-3 text-lg text-ink-soft md:text-xl">
          Me former en continu est une priorité.
        </p>
        <ol className="relative mt-10 space-y-8">
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-2.5 w-0.5 -translate-x-1/2 bg-ink/20"
          />
          {trainings.map((training) => (
            <li key={training.title} className="relative pl-10">
              <Shape
                shape="circle"
                className={`absolute top-1 left-0 w-5 ring-4 ring-white ${training.ongoing ? "bg-mustard" : "bg-sage"}`}
              />
              <h3 className="text-xl font-bold">{training.title}</h3>
              <p className="mt-1 text-ink-soft">{training.details}</p>
              {training.ongoing && (
                <span className="mt-2 inline-block rounded-full bg-mustard-light px-3 py-1 text-sm font-semibold">
                  En cours
                </span>
              )}
            </li>
          ))}
        </ol>
      </Container>
      <BookingBand />
    </>
  );
}
