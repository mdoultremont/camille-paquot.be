import { createFileRoute } from "@tanstack/react-router";
import { EmailLink } from "@/components/EmailLink";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { TextAnchor } from "@/components/TextLink";
import { commission, phone, siteUrl, visa } from "@/constants";
import { pageHead } from "@/seo";

export const Route = createFileRoute("/mentions-legales")({
  component: LegalNoticePage,
  head: () => {
    const head = pageHead({
      title: "Mentions légales - Camille Paquot",
      description: "Identification et coordonnées de l’éditrice du site de Camille Paquot.",
      path: "/mentions-legales",
    });
    return { ...head, meta: [...head.meta, { name: "robots", content: "noindex" }] };
  },
});

function LegalNoticePage() {
  return (
    <LegalPage title="Mentions légales">
      <LegalSection title="Éditrice du site">
        <p>Camille Paquot, psychologue clinicienne agréée à Bruxelles.</p>
        <p>Site : {siteUrl}</p>
        <p>
          Téléphone : <TextAnchor href={phone.href}>{phone.display}</TextAnchor>
          <br />
          E-mail : <EmailLink />
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Adresse professionnelle légale : à compléter.</li>
          <li>Numéro d’entreprise (BCE) : à compléter.</li>
          <li>Statut TVA et numéro de TVA, si applicable : à compléter.</li>
        </ul>
      </LegalSection>
      <LegalSection title="Profession réglementée">
        <p>
          Numéro de visa : {visa}.
          <br />
          Inscription à la Commission des Psychologues : {commission}.
        </p>
        <p>Pays d’octroi du titre professionnel et qualification exacte : à compléter.</p>
        <p>
          Les informations sur la profession sont disponibles auprès de la{" "}
          <TextAnchor href="https://www.compsy.be/">Commission des Psychologues</TextAnchor>. Le{" "}
          <TextAnchor href="https://www.compsy.be/le-code-de-deontologie">
            code de déontologie des psychologues
          </TextAnchor>{" "}
          est consultable sur son site.
        </p>
      </LegalSection>
      <LegalSection title="Hébergement">
        <p>
          Le site est configuré pour être hébergé sur Cloudflare Workers. L’entité contractante, ses
          coordonnées et les modalités d’hébergement sont à confirmer avant publication.
        </p>
      </LegalSection>
      <LegalSection title="Signaler une erreur">
        <p>
          Vous pouvez signaler une information inexacte ou un problème de fonctionnement par e-mail
          à Camille Paquot, à l’adresse indiquée ci-dessus.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
