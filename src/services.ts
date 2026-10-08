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
      "J’offre un espace sécurisant aux enfants et adolescents pour qu’ils puissent déployer leur histoire, leurs émotions, leurs inquiétudes et leurs difficultés rencontrées. Les médias choisis s’adaptent aux besoins de l’enfant et des familles.",
      "Cet accompagnement thérapeutique ne pourra se faire sans l’implication active des parents. L’accompagnement commence par une rencontre avec les parents sans l’enfant afin d’accueillir la demande et d’établir des objectifs de travail.",
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
      "Le travail thérapeutique s’établit autour de questions d’ordre personnel, professionnel, conjugal, parental, familial, relationnel ou existentiel.",
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
      "Le bien-être des parents et le bien-être des enfants sont étroitement liés. Il est important de prendre soin de soi pour pouvoir prendre soin de ses enfants.",
      "Quelles que soient les difficultés rencontrées dans votre rôle de parent, nous pouvons les aborder afin de développer des stratégies et des outils qui vous sont propres.",
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
