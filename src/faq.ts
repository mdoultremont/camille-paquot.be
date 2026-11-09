// Shown on /infos-pratiques and published there as FAQPage structured data.
// Answers quote the shared constants so a change of price or schedule updates them too.
import {
  booking,
  cancellationPolicy,
  commission,
  consultationArea,
  email,
  financialHardship,
  languages,
  locations,
  payment,
  phone,
  reimbursement,
  status,
  visa,
} from "@/constants";
import { adultFirstSession, consultation, noFixedRhythm, parentsFirst, services } from "@/services";
import { yoga } from "@/yoga";

const places = locations
  .map(
    (location) =>
      `${location.name}, ${location.street}, ${location.postalCode} ${location.city} : ${location.schedule.toLowerCase()}.`,
  )
  .join(" ");

function lowerFirst(sentence: string) {
  return sentence[0].toLowerCase() + sentence.slice(1);
}

export const faq = [
  {
    question: "Combien coûte une consultation chez une psychologue ?",
    answer: `Une consultation dure ${consultation.duration} et coûte ${consultation.price}, que ce soit pour un enfant, un adolescent, un adulte ou un parent. ${payment} Un cours de yoga coûte ${yoga.price}.`,
  },
  {
    question: "Les consultations sont-elles remboursées par la mutuelle ?",
    answer: `${reimbursement} Je suis psychologue agréée non conventionnée : je ne fais pas partie des psychologues conventionnés avec l’INAMI. Vous payez donc le tarif complet de la séance, sans le tarif réduit prévu par la convention.`,
  },
  {
    question: "Où ont lieu les consultations et quels jours ?",
    answer: `Je consulte ${consultationArea}. ${places}`,
  },
  {
    question: "Comment prendre rendez-vous ?",
    answer: `Les consultations se réservent en ligne sur ${new URL(booking).host}, ou par téléphone au ${phone.display}. Pour les cours de yoga, la réservation se fait par e-mail à ${email} ou par téléphone.`,
  },
  {
    question: "Faut-il une prescription médicale pour consulter une psychologue ?",
    answer:
      "Non, aucune prescription médicale n’est nécessaire. Vous pouvez prendre rendez-vous directement, sans passer par votre médecin.",
  },
  {
    question: "Comment se passe la première consultation ?",
    answer: `Pour les adultes, ${lowerFirst(adultFirstSession)} Pour les enfants et les adolescents, ${lowerFirst(parentsFirst)}`,
  },
  {
    question: "Combien de séances faut-il prévoir, et à quel rythme ?",
    answer: noFixedRhythm,
  },
  {
    question: "Qui puis-je consulter : enfants, adolescents, adultes, parents ?",
    answer: `J’accompagne les enfants, les adolescents, les adultes et les parents. Je propose : ${services.map((service) => service.title.toLowerCase()).join(", ")}.`,
  },
  {
    question: "Dans quelles langues se déroulent les consultations ?",
    answer: languages,
  },
  {
    question: "Comment annuler un rendez-vous ?",
    answer: `${cancellationPolicy} Pour les cours de yoga, l’annulation se fait ${yoga.cancellation}.`,
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
