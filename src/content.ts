export const aboutParagraphs = [
  "À travers des entretiens individuels et familiaux, j’accompagne les enfants, les adolescents et les adultes qui traversent, ponctuellement ou plus durablement, des difficultés dans leur vie.",
  "Je tiens à offrir un espace bienveillant, sécurisant, chaleureux et sans jugement, où chacun peut se sentir accueilli tel qu’il est. Ensemble, nous prenons le temps de comprendre ce qui se joue, de démêler les nœuds auxquels vous êtes confrontés et de nous appuyer sur vos ressources pour avancer à votre rythme.",
  "Je vous accompagne dans la mise en mots de vos émotions, l’exploration de votre vécu et l’ouverture vers de nouvelles possibilités. Mon rôle est de cheminer à vos côtés, dans le respect de votre singularité et de votre rythme.",
  "Lorsque cela est pertinent et souhaité, j’intègre une dimension psycho-corporelle à l’accompagnement. Le Yoga invite à prendre en compte les liens entre le corps, les émotions et la vie psychique, afin de favoriser un mieux-être global.",
  "En fonction de l’âge, des besoins et des demandes de chacun, je m’appuie sur différents médias et outils thérapeutiques : art-thérapie, livres et supports créatifs, Yoga. Ces supports peuvent offrir d’autres chemins pour exprimer ce qui est parfois difficile à mettre en mots.",
  "Diplômée en psychologie clinique de l’enfant, de l’adolescent et de la famille à l’Université Catholique de Louvain-la-Neuve, j’ai à cœur de continuer à me former afin d’étayer mes connaissances et compétences professionnelles.",
];

export const strengths = [
  "Un accueil chaleureux et humain",
  "Une écoute active et empathique",
  "Un cadre sécurisant et bienveillant",
  "Une approche adaptée à vos besoins",
  "Une approche intégrative",
  "Une approche psycho-corporelle",
];

export const commitments = [
  "Membre de la Commission Belge des Psychologues",
  "Titulaire du visa et de l’agrément",
  "Respect du code de déontologie",
  "Respect du secret professionnel",
];

// Most recent first; `ongoing` marks trainings still in progress.
export const trainings = [
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

export const cancellationPolicy =
  "Les rendez-vous qui ne sont pas annulés 48 h à l’avance seront facturés.";

export const services = [
  {
    slug: "enfants-adolescents",
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
