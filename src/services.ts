// Services appear on the home page, the services index, each service page and the
// practical info page. `theme` keeps the same colour and shape everywhere.
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
      "L’accompagnement psychologique des enfants et des adolescents vise à les aider, ainsi que leur famille, à retrouver davantage d’apaisement dans le quotidien.",
      "Je propose aux enfants et aux adolescents un espace sécurisant où ils peuvent, à leur rythme, déposer ce qu’ils vivent, mettre des mots sur leurs émotions, leurs inquiétudes ou leurs difficultés. La parole peut s’accompagner de différents supports, choisis et adaptés à l’âge, aux besoins et à la sensibilité de chaque enfant.",
      "L’accompagnement se construit également avec les parents, qui occupent une place essentielle dans le processus thérapeutique. Il débute par une première rencontre avec les parents, sans l’enfant, afin d’accueillir leur demande, de comprendre la situation et de définir ensemble les objectifs de l’accompagnement.",
      "Au fil des rencontres, l’objectif est de permettre à l’enfant ou à l’adolescent de mieux comprendre ce qu’il traverse, de trouver ses propres ressources et de retrouver progressivement un quotidien plus serein.",
    ],
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
    ],
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
      "Être parent peut être un chemin vertigineux, parfois difficile et semé d’embûches. Il n’est pas toujours simple de naviguer en mer inconnue, au milieu d’informations, de conseils et d’injonctions parfois contradictoires, incohérents ou angoissants.",
      "Être parent, c’est aussi pouvoir prendre soin de soi pour mieux prendre soin de son enfant. Il existe mille façons d’être parent, tout comme il existe mille façons d’être enfant.",
      "« Il faut tout un village pour élever un enfant. »",
      "Si vous rencontrez des difficultés dans votre parentalité, si vous ne savez plus comment faire, si vous avez l’impression de crouler sous la charge mentale ou simplement besoin d’y voir plus clair, je vous propose un espace pour déposer ce que vous vivez, réfléchir ensemble et trouver vos propres repères.",
      "Un espace sans jugement, pour vous accompagner dans ce chemin singulier qu’est la parentalité.",
    ],
    mediaTitle: "",
    media: [],
    duration: "1 h",
    price: "60 €",
    cancellation: "48 h à l’avance",
    bookOnline: true,
  },
  {
    slug: "yoga",
    theme: { background: "bg-sky", shape: "pebble", shapeColor: "bg-mustard" },
    name: "Cours de yoga",
    title: "Cours de yoga",
    intro: "En cours de formation de Viniyoga, je propose des cours collectifs adaptés à chacun.",
    summary: "Cours collectifs de Viniyoga, adaptés à chacun.",
    // Placeholder copy describing Viniyoga, to be validated by Camille.
    paragraphs: [
      "Le Viniyoga est issu de l’enseignement de T. Krishnamacharya, transmis par son fils T.K.V. Desikachar. Plutôt que d’imposer une forme unique, il adapte la pratique à chaque personne : son âge, sa condition physique, son état du moment et ses objectifs.",
      "Chaque cours suit une progression construite pas à pas. Le mouvement est relié au souffle : on entre et on sort des postures au rythme de l’inspiration et de l’expiration, sans forcer.",
      "Les cours associent postures, exercices de respiration et temps de relaxation. Ils sont accessibles sans prérequis de souplesse ou d’expérience.",
    ],
    mediaTitle: "Au programme des cours",
    media: ["Postures", "Respiration", "Relaxation", "Concentration"],
    duration: "1 h",
    price: "15 €",
    cancellation: "24 h à l’avance",
    // Yoga classes are booked by e-mail or phone, not through Rosa.
    bookOnline: false,
  },
] as const;

export type Service = (typeof services)[number];
