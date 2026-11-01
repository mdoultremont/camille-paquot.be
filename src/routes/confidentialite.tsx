import { createFileRoute } from "@tanstack/react-router";
import { EmailLink } from "@/components/EmailLink";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { TextAnchor } from "@/components/TextLink";
import { phone } from "@/constants";
import { pageHead } from "@/seo";

export const Route = createFileRoute("/confidentialite")({
  head: () =>
    pageHead({
      title: "Confidentialité - Camille Paquot",
      description:
        "Informations sur les données personnelles liées au site et aux prises de contact.",
      ogImage: { title: "Confidentialité", subtitle: "Données personnelles et prises de contact." },
      path: "/confidentialite",
    }),
  component: Page,
});

function Page() {
  return (
    <LegalPage title="Confidentialité">
      <LegalSection title="Périmètre et contact">
        <p>
          Cette page concerne la consultation du site et les prises de contact. Elle ne constitue
          pas la notice complète relative au dossier patient ou à un suivi psychologique ; ces
          informations doivent être communiquées dans le cadre de l’accompagnement.
        </p>
        <p>
          Camille Paquot est responsable des traitements décrits ici. Pour toute question ou demande
          relative à vos données : <EmailLink />, ou par téléphone au{" "}
          <TextAnchor href={phone.href}>{phone.display}</TextAnchor>.
        </p>
      </LegalSection>
      <LegalSection title="Consultation du site">
        <p>
          L’hébergeur traite les données techniques nécessaires pour vous transmettre les pages et
          assurer le fonctionnement et la sécurité du site, notamment l’adresse IP, la date de
          connexion et les pages demandées. Certaines de ces données peuvent être conservées dans
          des journaux techniques.
        </p>
      </LegalSection>
      <LegalSection title="Prise de contact">
        <p>
          Lorsque vous contactez Camille Paquot par e-mail ou téléphone, vos coordonnées et les
          informations que vous transmettez servent à répondre à votre demande et, le cas échéant, à
          préparer un rendez-vous.
        </p>
        <p>
          Pour une première prise de contact, indiquez uniquement les informations utiles pour vous
          répondre. Évitez de détailler votre santé ou votre situation personnelle par e-mail.
        </p>
      </LegalSection>
      <LegalSection title="Prestataires et réservation">
        <p>
          Les données techniques sont traitées par l’hébergeur Cloudflare et les messages par le
          prestataire de messagerie utilisé pour les échanges.
        </p>
        <p>
          Le bouton de réservation vous mène vers Rosa, un service externe soumis à ses propres
          informations de confidentialité.
        </p>
      </LegalSection>
      <LegalSection title="Statistiques de fréquentation">
        <p>
          Cloudflare Web Analytics fournit des statistiques globales, comme le nombre de visites et
          les pages consultées. Selon Cloudflare, ce service n’utilise ni cookies, ni stockage
          local, ni empreinte du navigateur pour suivre les visiteurs. Vous pouvez consulter les{" "}
          <TextAnchor href="https://www.cloudflare.com/trust-hub/gdpr/">
            informations de Cloudflare sur la protection des données
          </TextAnchor>
          .
        </p>
      </LegalSection>
      <LegalSection title="Vos droits">
        <p>
          Le site ne comporte ni formulaire ni compte utilisateur. Les seules informations que
          Camille Paquot détient sont celles que vous lui transmettez par e-mail ou par téléphone.
          Vous pouvez demander à les consulter, à les corriger ou à les faire supprimer en la
          contactant aux coordonnées indiquées plus haut.
        </p>
        <p>
          Vous pouvez introduire une réclamation auprès de l’
          <TextAnchor href="https://www.autoriteprotectiondonnees.be/">
            Autorité de protection des données
          </TextAnchor>{" "}
          belge.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
