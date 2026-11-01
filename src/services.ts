// Consultations appear on the home page, the consultations index, each consultation page
// and the practical info page. `theme` keeps the same colour and shape everywhere.
// Yoga classes live in `yoga.ts`.

const noFixedRhythm =
  "Il n’y a pas de rythme ni de durée type, cela dépend de vous et de vos envies. Nous en discuterons dès notre première rencontre.";

export const services = [
  {
    slug: "enfants-adolescents",
    theme: { background: "bg-mustard-light", shape: "circle", shapeColor: "bg-lilac" },
    name: "Enfants et adolescents",
    title: "Thérapie pour enfants et adolescents",
    intro:
      "Un espace thérapeutique dédié aux enfants et adolescents afin de leur permettre d’explorer leurs émotions, leurs besoins, leurs inquiétudes, leurs difficultés ainsi que leurs ressources.",
    summary: "Explorer ses émotions et ses ressources avec le livre, le jeu ou l’art-thérapie.",
    paragraphs: [
      "L’accompagnement psychologique des enfants et des adolescents vise à les aider à retrouver davantage d’apaisement dans le quotidien, en collaboration avec leurs parents.",
      "Je propose aux enfants et aux adolescents un espace sécurisant pour déposer, à leur rythme, leur vécu et mettre des mots sur leurs émotions, leurs inquiétudes ou leurs difficultés. La parole peut s’accompagner de différents supports, choisis et adaptés à l’âge, aux besoins et à la sensibilité de chaque enfant.",
      "L’accompagnement se construit également avec les parents, qui occupent une place essentielle dans le processus thérapeutique. Dans un premier temps, je rencontre les parents pour comprendre la situation et définir ensemble les objectifs thérapeutiques.",
      "Au fil des rencontres, l’objectif est d’aider les enfants et les adolescents à mieux comprendre leur vécu, à trouver leurs propres ressources et à retrouver progressivement un quotidien plus serein.",
    ],
    reasons: [
      "Difficultés de comportement",
      "Difficultés de sommeil",
      "Changement d’appétit",
      "Repli sur soi",
      "Anxiété et stress",
      "Difficultés à nouer des amitiés",
      "Harcèlement scolaire",
      "Maux de ventre, maux de tête",
      "Énurésie, encoprésie",
      "Perte d’intérêt pour des activités habituelles",
      "Pleurs fréquents",
      "Gestion des émotions",
      "Évènements de vie difficiles : deuil, séparation parentale, déménagement, changement d’école, arrivée d’un nouvel enfant dans la famille, etc.",
    ],
    closing: noFixedRhythm,
    mediaTitle: "Ce qu’on utilise en séance",
    media: ["Livres", "Art-thérapie", "Jeu", "Yoga", "Respiration"],
    duration: "1 h",
    price: "60 €",
    cancellation: "48 h à l’avance",
    bookOnline: true,
  },
  {
    slug: "adultes",
    theme: { background: "bg-sage", shape: "halfMoon", shapeColor: "bg-mustard" },
    name: "Adultes",
    title: "Thérapie individuelle pour adultes",
    intro:
      "Un espace thérapeutique dédié aux adultes afin d’explorer les difficultés rencontrées et de rebondir sur leurs ressources.",
    summary: "Questions personnelles, professionnelles, familiales ou existentielles.",
    paragraphs: [
      "Le travail thérapeutique offre un espace pour prendre du recul, mettre des mots sur ce qui est vécu et mieux comprendre ce qui se joue dans une période de vie parfois difficile ou questionnante.",
      "Les séances peuvent s’articuler autour de questions personnelles, professionnelles, conjugales, parentales, familiales ou relationnelles, mais aussi autour de questionnements plus existentiels.",
      "Un espace pour déposer ce qui vous préoccupe, retrouver vos repères et avancer à votre rythme.",
      "Lors de la première consultation, nous prenons le temps de voir ce qui vous amène et d’établir les objectifs du travail thérapeutique.",
    ],
    reasons: [
      "Difficultés de sommeil",
      "Sentiment dépressif",
      "Perte de motivation",
      "Anxiété et stress",
      "Souffrance et épuisement au travail",
      "Difficultés relationnelles : conflits familiaux, conflits de couple, difficultés à s’affirmer",
      "Évènements de vie difficiles : maladie grave, séparation, divorce, licenciement, fausse couche, deuil",
      "Questions liées à la parentalité : deuil périnatal, post-partum, soutien prénatal",
    ],
    closing: noFixedRhythm,
    mediaTitle: "",
    media: [],
    duration: "1 h",
    price: "60 €",
    cancellation: "48 h à l’avance",
    bookOnline: true,
  },
  {
    slug: "parentalite",
    theme: { background: "bg-lilac", shape: "leaf", shapeColor: "bg-sky" },
    name: "Soutien à la parentalité",
    title: "Soutien à la parentalité",
    intro:
      "Un espace thérapeutique dédié aux parents qui rencontrent des difficultés dans leur rôle parental.",
    summary: "Prendre soin de soi pour prendre soin de ses enfants.",
    paragraphs: [
      "Être parent peut être un chemin vertigineux, parfois difficile et semé d’embûches. Il n’est pas toujours simple de naviguer en mer inconnue, au milieu d’informations, de conseils et d’injonctions parfois contradictoires, incohérentes ou angoissantes.",
      "Être parent, c’est aussi pouvoir prendre soin de soi afin de prendre soin de son enfant. En tant que parent, il est important de pouvoir compter sur un soutien professionnel et sur son entourage au quotidien. « Il faut tout un village pour élever un enfant. »",
      "Si vous rencontrez des difficultés dans votre parentalité, si vous ne savez plus comment faire, si vous avez l’impression de crouler sous la charge mentale ou simplement besoin d’y voir plus clair, je vous propose un espace pour déposer ce que vous vivez, réfléchir ensemble et trouver vos propres repères. J’offre un espace sans jugement, pour vous accompagner dans ce chemin singulier qu’est la parentalité.",
    ],
    reasons: [
      "Désir de parentalité",
      "Difficultés de conception",
      "Burn-out parental",
      "Périodes de transition : post-partum, deuil périnatal, entrée dans l’adolescence, départ des grands enfants",
      "Épuisement face aux limites",
      "Sentiment de fatigue extrême",
      "Désaccord conjugal",
      "Familles recomposées",
      "Coparentalité après séparation",
    ],
    closing: noFixedRhythm,
    mediaTitle: "",
    media: [],
    duration: "1 h",
    price: "60 €",
    cancellation: "48 h à l’avance",
    bookOnline: true,
  },
] as const;

export type Service = (typeof services)[number];
