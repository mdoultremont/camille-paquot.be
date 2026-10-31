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
    "Sa particularité est que la pratique s’adapte à chaque personne, et non l’inverse. Les postures, les exercices de respiration et parfois le chant sont proposés en fonction de l’âge, de la condition physique et des besoins individuels.",
    "Chaque séance suit une progression construite pas à pas, dans laquelle le mouvement est étroitement relié au souffle. L’attention est portée sur les sensations, l’écoute de soi et le respect de ses propres limites.",
    "La pratique associe des postures (asanas), des exercices de respiration (pranayama) et des gestes symboliques (mudras). Elle offre un moment pour ralentir, se recentrer et prendre soin de soi.",
    "Aucune expérience préalable ni souplesse particulière n’est nécessaire : les cours sont accessibles à toutes et tous.",
  ],
  training: {
    title: "À propos de ma formation",
    text: "Je suis actuellement en formation à l’enseignement du Viniyoga chez Mitra ASBL. Les cours que je propose sont supervisés par mon professeur, afin de vous accompagner dans une pratique adaptée, progressive et respectueuse des principes du Viniyoga.",
  },
  duration: "1 h",
  price: "15 €",
  cancellation: "24 h à l’avance",
  // Yoga classes are booked by e-mail or phone, not through Rosa.
  bookOnline: false,
} as const;
