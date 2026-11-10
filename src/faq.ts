// Shown on /infos-pratiques and published there as FAQPage structured data.
// Answers quote the shared constants where Camille's wording allows, so a price or schedule change updates them too.
import {
  booking,
  cancellationPolicy,
  commission,
  consultationArea,
  email,
  financialHardship,
  languages,
  locations,
  phone,
  schedule,
  status,
  visa,
} from "@/constants";
import { consultation, noFixedRhythm, services } from "@/services";
import { yoga } from "@/yoga";

const places = locations
  .map(
    (location) =>
      `${location.name}, ${location.street}, ${location.postalCode} ${location.city} : ${schedule(location.hours).toLowerCase()}.`,
  )
  .join(" ");

export const faq = [
  {
    question: "Combien coûte une consultation chez une psychologue ?",
    answer: `Le tarif est de ${consultation.price} pour une heure. Le paiement se fait directement en espèces ou par QR code (paiement mobile). Un cours de yoga coûte ${yoga.price}.`,
  },
  {
    question: "Les consultations sont-elles remboursées par la mutuelle ?",
    answer:
      "Oui, votre mutuelle peut partiellement rembourser les consultations. Les conditions varient d’une mutuelle à l’autre : renseignez-vous directement auprès de la vôtre. Je suis psychologue agréée non conventionnée : je ne fais pas partie des psychologues de première ligne.",
  },
  {
    question: "Où ont lieu les consultations et quels jours ?",
    answer: `Je consulte ${consultationArea}. ${places}`,
  },
  {
    question: "Comment prendre rendez-vous ?",
    answer: `Les consultations se réservent en ligne sur ${new URL(booking).host}, ou par téléphone au ${phone.display}. Pour les cours de Yoga, la réservation se fait par e-mail à ${email} ou par téléphone.`,
  },
  {
    question: "Faut-il une prescription médicale pour consulter une psychologue ?",
    answer:
      "Non, aucune prescription médicale n’est nécessaire. Vous pouvez prendre rendez-vous directement, sans passer par votre médecin.",
  },
  {
    question: "Comment se passe la première consultation ?",
    answer: `Pour les adultes, nous prenons le temps de voir ce qui vous amène et d’établir les objectifs de l’accompagnement thérapeutique. Pour les enfants et les adolescents, je rencontre d’abord les parents pour comprendre la situation et définir ensemble les objectifs thérapeutiques. Ceci peut être discuté au cas par cas.`,
  },
  {
    question: "Combien de séances faut-il prévoir, et à quel rythme ?",
    answer: noFixedRhythm,
  },
  {
    question: "Pour qui ?",
    answer: `Je propose : ${services.map((service) => service.title.toLowerCase()).join(", ")}.`,
  },
  {
    question: "Dans quelles langues se déroulent les consultations ?",
    answer: languages,
  },
  {
    question: "Comment annuler un rendez-vous ?",
    answer: `Vous pouvez annuler les rendez-vous au minimum 48 heures à l’avance via votre lien Rosa ou par téléphone. ${cancellationPolicy} Pour les cours de yoga, l’annulation se fait ${yoga.cancellation}.`,
  },
  {
    question: "Que faire en cas de difficultés financières ?",
    answer: financialHardship,
  },
  {
    question: "Camille Paquot est-elle une psychologue agréée ?",
    answer: `Oui. ${status} Numéro de visa : ${visa}. Commission des Psychologues : ${commission}.`,
  },
  {
    question: "Quelle est la différence entre un psychologue et un psychiatre ?",
    answer:
      "Le psychiatre est un médecin spécialisé en psychiatrie : il peut prescrire des médicaments. Le psychologue clinicien est diplômé d’un master universitaire en psychologie clinique : il ne prescrit pas de médicaments et accompagne par la parole et par d’autres supports thérapeutiques. Les deux professions peuvent travailler ensemble.",
  },
] as const satisfies readonly { question: string; answer: string }[];
