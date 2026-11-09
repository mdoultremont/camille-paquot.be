import { createFileRoute } from "@tanstack/react-router";
import {
  booking,
  cancellationPolicy,
  commission,
  consultationArea,
  email,
  financialHardship,
  introduction,
  languages,
  locations,
  payment,
  phone,
  reimbursement,
  siteUrl,
  status,
  visa,
} from "@/constants";
import { consultation, services } from "@/services";
import { yoga } from "@/yoga";

// Summary for AI assistants, in the llmstxt.org format.
export const Route = createFileRoute("/llms.txt")({
  server: {
    handlers: {
      GET: () =>
        new Response(llmsTxt(), { headers: { "Content-Type": "text/plain; charset=utf-8" } }),
    },
  },
});

function link(title: string, path: string, description: string) {
  return `- [${title}](${new URL(path, siteUrl).href}): ${description}`;
}

function llmsTxt() {
  return `# Camille Paquot, psychologue clinicienne

> ${introduction} Consultations ${consultationArea} pour enfants, adolescents, adultes et parents.

- Statut : ${status} Numéro de visa : ${visa}. Commission des Psychologues : ${commission}.
- Consultation : ${consultation.duration}, ${consultation.price}. ${payment}
- Remboursement : ${reimbursement}
- ${financialHardship}
${locations.map((location) => `- ${location.name}, ${location.street}, ${location.postalCode} ${location.city} (${location.region}) : ${location.schedule.toLowerCase()}.`).join("\n")}
- ${languages}
- Rendez-vous : en ligne sur ${booking} ou par téléphone au ${phone.display}.
- Annulation : ${cancellationPolicy}
- Contact : ${email}, ${phone.display}.
- Cours de yoga : ${yoga.duration}, ${yoga.price}, réservation par e-mail ou par téléphone.

## Consultations

${link("Consultations", "/consultations", "les trois types de consultation proposés.")}
${services.map((service) => link(service.title, `/consultations/${service.slug}`, service.intro)).join("\n")}

## Pages

${link("Accueil", "/", "présentation du cabinet et des consultations.")}
${link("Infos pratiques", "/infos-pratiques", "tarifs, lieux et jours de consultation, prise de rendez-vous, annulation et questions fréquentes.")}
${link("À propos", "/a-propos", "parcours, approche et formations de Camille Paquot.")}
${link(yoga.title, "/yoga", yoga.intro)}

## Optional

${link("Mentions légales", "/mentions-legales", "identification de l’éditrice du site.")}
${link("Confidentialité", "/confidentialite", "traitement des données personnelles.")}
${link("Conditions d’utilisation", "/conditions-utilisation", "conditions d’utilisation du site.")}
`;
}
