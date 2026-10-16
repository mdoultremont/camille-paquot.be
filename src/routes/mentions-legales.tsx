import { createFileRoute } from "@tanstack/react-router";
import { EmailLink } from "@/components/EmailLink";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { TextAnchor } from "@/components/TextLink";
import { commission, phone, siteUrl, visa, websiteEmail } from "@/constants";
import { pageHead } from "@/seo";

export const Route = createFileRoute("/mentions-legales")({
  head: () =>
    pageHead({
      title: "Mentions légales - Camille Paquot",
      description: "Identification et coordonnées de l’éditrice du site de Camille Paquot.",
      path: "/mentions-legales",
    }),
  component: Page,
});

function Page() {
  return (
    <LegalPage title="Mentions légales">
      <LegalSection title="Éditrice du site">
        <p>Camille Paquot, psychologue clinicienne agréée à Bruxelles.</p>
        <p>
          Site : <TextAnchor href={siteUrl}>{siteUrl}</TextAnchor>
        </p>
        <p>
          Téléphone : <TextAnchor href={phone.href}>{phone.display}</TextAnchor>
          <br />
          E-mail : <EmailLink />
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Adresse professionnelle : à venir.</li>
          <li>Numéro d’entreprise (BCE) : 1006.262.558 (personne physique).</li>
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
          Le site est hébergé sur Cloudflare Workers. Les coordonnées complètes de l’hébergeur
          seront ajoutées à cette page.
        </p>
      </LegalSection>
      <LegalSection title="Signaler une erreur">
        <p>
          Vous pouvez signaler une information inexacte ou un problème de fonctionnement par e-mail
          : <EmailLink address={websiteEmail} />
        </p>
      </LegalSection>
    </LegalPage>
  );
}
