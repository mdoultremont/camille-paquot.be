import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { TextLink } from "@/components/TextLink";
import { pageHead } from "@/seo";

export const Route = createFileRoute("/conditions-utilisation")({
  head: () =>
    pageHead({
      title: "Conditions d’utilisation - Camille Paquot",
      description: "Conditions d’utilisation du site de Camille Paquot, psychologue clinicienne.",
      ogImage: {
        title: "Conditions d’utilisation",
        subtitle: "Consultations psychologiques, yoga et informations du site.",
      },
      path: "/conditions-utilisation",
    }),
  component: Page,
});

function Page() {
  return (
    <LegalPage title="Conditions d’utilisation">
      <LegalSection title="Objet du site">
        <p>
          Ce site présente l’activité de Camille Paquot, ses consultations psychologiques, ses cours
          de yoga et les moyens de la contacter. Les informations proposées sont générales : elles
          ne constituent ni un diagnostic ni un accompagnement individuel.
        </p>
        <p>Ce site n’est pas un service d’urgence. En cas de danger immédiat, appelez le 112.</p>
      </LegalSection>
      <LegalSection title="Informations et disponibilité">
        <p>
          Camille Paquot veille à proposer des informations exactes et à jour. Une erreur ou une
          interruption reste toutefois possible. Pour confirmer un tarif, une disponibilité ou les
          modalités d’un accompagnement, prenez directement contact avec elle.
        </p>
        <p>
          Les informations du site peuvent évoluer. Les responsabilités éventuelles s’apprécient
          selon le droit applicable ; ces conditions ne limitent pas les droits que la loi vous
          reconnaît.
        </p>
      </LegalSection>
      <LegalSection title="Rendez-vous et consultations">
        <p>
          Les modalités des consultations et des cours, notamment les tarifs et les annulations,
          sont présentées dans les <TextLink to="/infos-pratiques">informations pratiques</TextLink>{" "}
          et précisées lors de la prise de rendez-vous. Ces conditions concernent l’utilisation du
          site et ne remplacent pas les accords relatifs à votre accompagnement.
        </p>
      </LegalSection>
      <LegalSection title="Liens vers d’autres sites">
        <p>
          La réservation en ligne mène vers Rosa, un service externe. Son utilisation relève de ses
          propres conditions et de sa politique de confidentialité. Les contenus et le
          fonctionnement de ces services restent sous la responsabilité de leurs éditeurs.
        </p>
      </LegalSection>
      <LegalSection title="Utilisation des contenus">
        <p>
          Les textes, photographies et éléments graphiques peuvent être protégés par des droits de
          propriété intellectuelle. Leur reproduction ou leur réutilisation nécessite l’autorisation
          des titulaires des droits, sauf dans les cas permis par la loi.
        </p>
      </LegalSection>
      <LegalSection title="Contact et données personnelles">
        <p>
          Les coordonnées de Camille Paquot figurent dans les{" "}
          <TextLink to="/mentions-legales">mentions légales</TextLink>. Pour les informations
          relatives à vos données, consultez la page{" "}
          <TextLink to="/confidentialite">confidentialité</TextLink>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
