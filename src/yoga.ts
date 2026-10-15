// Yoga classes are presented apart from the consultations: own page, own home section.
export const yoga = {
  theme: { background: "bg-sky", shape: "pebble", shapeColor: "bg-mustard" },
  title: "Cours de yoga",
  intro: "En cours de formation de Viniyoga, je propose des cours collectifs adaptés à chacun.",
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
} as const;
