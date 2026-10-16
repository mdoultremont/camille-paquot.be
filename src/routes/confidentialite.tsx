import { createFileRoute } from "@tanstack/react-router";
import { EmailLink } from "@/components/EmailLink";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { TextAnchor } from "@/components/TextLink";
import { phone } from "@/constants";
import { pageHead } from "@/seo";

export const Route = createFileRoute("/confidentialite")({
  component: PrivacyPage,
  head: () => {
    const head = pageHead({
      title: "Confidentialité - Camille Paquot",
      description:
        "Informations sur les données personnelles liées au site et aux prises de contact.",
      path: "/confidentialite",
    });
    return { ...head, meta: [...head.meta, { name: "robots", content: "noindex" }] };
  },
});

function PrivacyPage() {
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
          Même pour un site statique, l’hébergeur traite des données techniques liées aux requêtes,
          notamment l’adresse IP, la date de connexion et les pages demandées. Certaines peuvent
          être conservées dans des journaux pour le fonctionnement et la sécurité du site. La base
          juridique envisagée est l’intérêt légitime à assurer la disponibilité et la sécurité du
          site. Les données effectivement enregistrées, cette base juridique et les durées de
          conservation restent à vérifier avec l’hébergeur.
        </p>
      </LegalSection>
      <LegalSection title="Prise de contact">
        <p>
          Lorsque vous contactez Camille Paquot par e-mail ou téléphone, vos coordonnées et les
          informations que vous transmettez servent à répondre à votre demande et, le cas échéant, à
          préparer un rendez-vous. Selon la demande, le traitement peut reposer sur des démarches
          précontractuelles réalisées à votre initiative ou sur l’intérêt légitime de répondre aux
          demandes. Les bases juridiques applicables sont à confirmer avant publication.
        </p>
        <p>
          Pour une première prise de contact, indiquez uniquement les informations utiles pour vous
          répondre. Évitez de détailler votre santé ou votre situation personnelle par e-mail.
        </p>
      </LegalSection>
      <LegalSection title="Prestataires et réservation">
        <p>
          Les données techniques peuvent être traitées par l’hébergeur Cloudflare et les messages
          par le prestataire de messagerie utilisé pour les échanges. Les accès et engagements de
          ces prestataires doivent être vérifiés.
        </p>
        <p>
          Le bouton de réservation est un lien vers Rosa. Le site n’intègre pas de formulaire Rosa :
          c’est lorsque vous ouvrez ce lien que vous accédez à son service, soumis à ses propres
          informations de confidentialité.
        </p>
      </LegalSection>
      <LegalSection title="Statistiques de fréquentation et cookies">
        <p>
          Une mesure simple de la fréquentation est active pour consulter des statistiques globales,
          comme le nombre de visites et les pages consultées. Le service Cloudflare utilisé, les
          données traitées, leur conservation et les éventuels cookies ou autres traceurs restent à
          confirmer avant publication.
        </p>
      </LegalSection>
      <LegalSection title="Informations à compléter avant publication">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Les durées de conservation des messages et des journaux techniques, ou les critères
            permettant de les déterminer.
          </li>
          <li>
            Les bases juridiques retenues pour chaque usage, les destinataires et les garanties
            contractuelles des prestataires.
          </li>
          <li>
            Les éventuels transferts de données hors de l’Espace économique européen et les
            garanties qui les encadrent.
          </li>
          <li>
            L’adresse professionnelle du responsable et les informations propres aux données
            traitées dans le cadre des consultations.
          </li>
        </ul>
      </LegalSection>
      <LegalSection title="Vos droits">
        <p>
          Selon les conditions prévues par le RGPD, vous pouvez demander l’accès à vos données, leur
          rectification ou leur effacement, la limitation du traitement et leur portabilité. Vous
          pouvez également vous opposer à certains traitements, notamment ceux fondés sur l’intérêt
          légitime, selon les conditions applicables. Pour exercer ces droits, contactez Camille
          Paquot aux coordonnées indiquées plus haut.
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
