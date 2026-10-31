// Yoga classes are presented apart from the consultations: own page, own home section.
export const yoga = {
  theme: { background: "bg-sky", shape: "pebble", shapeColor: "bg-mustard" },
  title: "Cours de yoga",
  intro:
    "En cours de formation de Viniyoga, je propose des cours collectifs adaptés à chaque personne.",
  homeIntro:
    "Je propose des cours collectifs de Viniyoga à travers une pratique douce et progressive, respectueuse des possibilités de chaque personne.",
  paragraphs: [
    "Le Viniyoga est issu de l’enseignement de T. Krishnamacharya, transmis notamment par son fils T.K.V. Desikachar.",
    "Sa particularité est que la pratique s’adapte à chaque personne et non l’inverse. Les postures, les exercices de respiration et parfois le chant sont proposés en fonction de l’âge, des besoins, des possibilités et de la condition physique.",
    "Chaque séance suit une progression construite pas à pas, dans laquelle le mouvement est étroitement relié au souffle. L’attention est portée sur les sensations, l’écoute de soi et le respect de ses propres limites.",
    "Les cours associent des postures (asanas), des exercices de respiration (pranayama) et des temps de relaxation.",
  ],
  mediaTitle: "Au programme des cours",
  media: ["Postures", "Respiration", "Relaxation", "Concentration"],
  duration: "1 h",
  price: "15 €",
  cancellation: "24 h à l’avance",
  // Yoga classes are booked by e-mail or phone, not through Rosa.
  bookOnline: false,
} as const;
