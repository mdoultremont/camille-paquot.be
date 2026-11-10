import { createFileRoute } from "@tanstack/react-router";
import { BookingBand } from "@/components/BookingBand";
import { BookingLink } from "@/components/BookingLink";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { EmailLink } from "@/components/EmailLink";
import { Heading } from "@/components/Heading";
import { Portrait } from "@/components/Portrait";
import { Shape } from "@/components/Shape";
import { ShapeList, type ShapeBullet } from "@/components/ShapeList";
import { Strengths } from "@/components/Strengths";
import { consultationArea } from "@/constants";
import { pageHead } from "@/seo";

export const Route = createFileRoute("/a-propos")({
  head: () =>
    pageHead({
      title: "À propos - Camille Paquot",
      description:
        "Mon parcours, mon approche et mes formations : psychologue clinicienne agréée, diplômée de l’UCLouvain, en formation de professeure de yoga.",
      ogImage: { title: "À propos", subtitle: "Mon parcours, mon approche et mes formations." },
      path: "/a-propos",
    }),
  component: Page,
});

const approachParagraphs = [
  "Psychologue clinicienne, j’accompagne les enfants, les adolescent·e·s, les adultes, les parents et les futurs parents qui souhaitent prendre un temps pour eux, mieux comprendre leur vécu ou traverser une période de questionnements et de changements.",
  "La grossesse, l’arrivée d’un enfant et la parentalité sont des bouleversements qui peuvent faire émerger des émotions, des questionnements et parfois des difficultés inattendues. La perte de repère, le déséquilibre familial peuvent être source de stress. Ces étapes, aussi riches soient-elles, ne sont pas toujours simples à traverser. Je vous propose un espace de parole bienveillant, chaleureux et sans jugement, où vous pourrez déposer ce que vous vivez, être accueilli·e dans vos ressentis et avancer à votre rythme.",
  "Ensemble, nous prenons le temps de mettre des mots sur vos émotions, d’explorer votre histoire, de comprendre ce qui se joue et de nous appuyer sur vos ressources pour ouvrir de nouvelles perspectives.",
  "Mon approche se veut attentive à la singularité de chacun·e. En fonction de l’âge, des besoins et de votre demande, je peux également m’appuyer sur différents médias thérapeutiques (art-thérapie, livre) et, lorsque cela fait sens pour vous, j’intègre aussi une dimension psycho-corporelle à l’accompagnement thérapeutique, à travers des exercices de respiration et des postures douces de Yoga.",
];

const journeyParagraphs = [
  "Diplômée en psychologie clinique de l’enfant, de l’adolescent et de la famille à l’UCLouvain, j’ai progressivement construit mon parcours autour de l’accompagnement des personnes, des enfants et des familles à différents moments de leur vie.",
  "Après mes études, je suis partie à La Réunion, où j’ai travaillé comme psychologue au sein d’un centre médico-psychologique pour enfants et adolescents. J’y ai accompagné des jeunes en entretiens individuels, ainsi que leurs familles, ce qui a renforcé mon intérêt pour les liens entre le vécu de l’enfant et son environnement familial.",
  "De retour à Bruxelles, j’ai rejoint pendant un an une équipe mobile en santé mentale, une expérience qui m’a permis d’accompagner des situations diverses, au plus près des réalités de vie des personnes et de leur entourage.",
  "J’exerce aujourd’hui en planning familial, où j’accompagne notamment des femmes dans le cadre d’une interruption volontaire de grossesse. Cette expérience m’a particulièrement sensibilisée aux questions liées au corps, à la sexualité, à la parentalité, au désir ou au non-désir d’enfant, ainsi qu’aux différents bouleversements qui peuvent entourer ces moments de vie.",
  "Ces expériences ont progressivement nourri mon intérêt pour la parentalité et la périnatalité, et l’importance que j’accorde à l’accompagnement des parents et des familles dans ces périodes de transition, de questionnement et de transformation.",
  "J’ai à cœur de continuer à me former afin d’enrichir mes connaissances et mes compétences, et de proposer un accompagnement toujours au plus près des besoins de chaque personne.",
];

// Shown in the side panel under the strengths list.
const commitments = [
  "Membre de la Commission des Psychologues",
  "Titulaire du visa et de l’agrément",
  "Respect du code de déontologie",
  "Respect du secret professionnel",
  "Expérience en centre médico-psychologique, en équipe mobile et en planning familial",
];

const commitmentBullets: ShapeBullet[] = [
  ["arch", "bg-ink"],
  ["leaf", "bg-mustard"],
  ["petal", "bg-lilac"],
  ["quarterCircle", "bg-mustard-light"],
  ["pebble", "bg-ink"],
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
    details: "UCLouvain, 2026 à 2027",
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
    details: "UCLouvain, juin 2021",
    ongoing: false,
  },
] as const;

function Page() {
  return (
    <>
      <Container as="section" className="grid items-center gap-10 py-10 md:py-16 lg:grid-cols-2">
        <div>
          <Heading level={1}>À propos de moi</Heading>
          <p className="mt-6 max-w-prose text-lg leading-relaxed">
            Psychologue clinicienne agréée {consultationArea}, j’accompagne toute personne
            souhaitant entreprendre un travail sur soi dans un cadre bienveillant, respectueux et
            non-jugeant.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <BookingLink />
            <Button variant="outline" href="#formations">
              Mes formations
            </Button>
          </div>
          <EmailLink emphasis className="mt-4" />
        </div>
        <Portrait className="mx-auto max-w-sm" />
      </Container>
      <Container as="section" className="grid items-start gap-12 py-12 lg:grid-cols-[1fr_22rem]">
        <div className="max-w-prose text-lg leading-relaxed">
          <Heading level={2} className="mb-5">
            Mon approche
          </Heading>
          <div className="space-y-4">
            {approachParagraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <Heading level={2} className="mt-12 mb-5">
            Mon parcours
          </Heading>
          <div className="space-y-4">
            {journeyParagraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <aside className="rounded-3xl bg-sage p-8 lg:sticky lg:top-28">
          <Heading level={3} as="h2" className="mb-5">
            Ce que j’apporte
          </Heading>
          <Strengths />
          <Heading level={3} as="h2" className="mt-8 mb-4 border-t-2 border-ink/15 pt-6">
            Mon cadre professionnel
          </Heading>
          <ShapeList
            items={commitments}
            bullets={commitmentBullets}
            className="space-y-2"
            bulletClassName="w-4 flex-none self-start mt-1 [transform:translateY(calc((1rem_-_100%)/2))]"
          />
        </aside>
      </Container>
      <Container as="section" id="formations" className="scroll-mt-24 py-16">
        <Heading level={2}>Formations</Heading>
        <p className="mt-3 text-lg text-ink-soft md:text-xl">
          La formation continue accompagne l’évolution de ma pratique.
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
