import { createFileRoute, Link } from "@tanstack/react-router";
import { ConsultationOpening } from "@/components/ConsultationOpening";
import { Container } from "@/components/Container";
import { EmailLink } from "@/components/EmailLink";
import { Heading } from "@/components/Heading";
import { TextAnchor } from "@/components/TextLink";
import {
  cancellationPolicy,
  commission,
  financialHardship,
  payment,
  phone,
  reimbursement,
  visa,
} from "@/constants";
import { services } from "@/services";
import { yoga } from "@/yoga";
import { pageHead } from "@/seo";

export const Route = createFileRoute("/infos-pratiques")({
  component: PracticalInfoPage,
  head: () =>
    pageHead({
      title: "Infos pratiques - Camille Paquot",
      description:
        "Tarifs, paiement, prise de rendez-vous, annulation et contact pour les consultations et les cours de yoga.",
      path: "/infos-pratiques",
    }),
});

const panel = "rounded-3xl p-8";

function PracticalInfoPage() {
  return (
    <>
      <Container as="section" className="py-12 md:py-16">
        <Heading level={1}>Infos pratiques</Heading>
        <p className="mt-5 text-lg text-ink-soft md:text-xl">
          Tarifs, paiement, prise de rendez-vous et contact.
        </p>
      </Container>
      <Container as="section" className="grid gap-5 pb-16 md:grid-cols-2">
        <div className={`${panel} bg-mustard-light md:col-span-2`}>
          <Heading level={3} as="h2" className="mb-6">
            Tarifs
          </Heading>
          <table className="w-full text-left text-lg">
            <thead className="sr-only">
              <tr>
                <th>Consultation</th>
                <th>Durée</th>
                <th>Tarif</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/20">
              {services.map((service) => (
                <tr key={service.slug}>
                  <th scope="row" className="py-3 pr-4 font-semibold">
                    <Link
                      to="/consultations/$service"
                      params={{ service: service.slug }}
                      className="underline-offset-4 hover:underline"
                    >
                      {service.title}
                    </Link>
                  </th>
                  <td className="py-3 pr-4 whitespace-nowrap">{service.duration}</td>
                  <td className="py-3 text-right text-xl font-extrabold whitespace-nowrap">
                    {service.price}
                  </td>
                </tr>
              ))}
              <tr>
                <th scope="row" className="py-3 pr-4 font-semibold">
                  <Link to="/yoga" className="underline-offset-4 hover:underline">
                    {yoga.title}
                  </Link>
                </th>
                <td className="py-3 pr-4 whitespace-nowrap">{yoga.duration}</td>
                <td className="py-3 text-right text-xl font-extrabold whitespace-nowrap">
                  {yoga.price}
                </td>
              </tr>
            </tbody>
          </table>
          <p className="mt-6 text-lg">{payment}</p>
          <p className="mt-2 text-lg">{reimbursement}</p>
          <p className="mt-2 text-lg">{financialHardship}</p>
        </div>
        <div className={`${panel} bg-sage`}>
          <Heading level={3} as="h2" className="mb-4">
            Consultations et contact
          </Heading>
          <p className="text-lg">
            La prise de rendez-vous ouvrira lorsque l’adresse du cabinet sera confirmée. Pour toute
            question, vous pouvez appeler le{" "}
            <TextAnchor href={phone.href}>{phone.display}</TextAnchor>.
          </p>
          <ConsultationOpening className="mt-5" />
          <p className="mt-6 text-lg">
            Pour les cours de yoga, la prise de rendez-vous se fait directement par mail ou par
            téléphone.
          </p>
        </div>
        <div className={`${panel} bg-lilac`}>
          <Heading level={3} as="h2" className="mb-4">
            Annulation
          </Heading>
          <p className="text-lg">{cancellationPolicy}</p>
        </div>
        <div className={`${panel} ring-2 ring-ink`}>
          <Heading level={3} as="h2" className="mb-4">
            Contact
          </Heading>
          <ul className="space-y-1 text-lg">
            <li>
              <TextAnchor href={phone.href}>{phone.display}</TextAnchor>
            </li>
            <li>
              <EmailLink emphasis />
            </li>
          </ul>
        </div>
        <div className={`${panel} ring-2 ring-ink`}>
          <Heading level={3} as="h2" className="mb-4">
            Cabinets
          </Heading>
          <p className="text-lg">
            L’adresse du cabinet sera communiquée à l’ouverture des consultations.
          </p>
        </div>
        <div className={`${panel} ring-2 ring-ink`}>
          <Heading level={3} as="h2" className="mb-4">
            Statut
          </Heading>
          <p className="text-lg">Psychologue clinicienne agréée, non conventionnée.</p>
          <p className="mt-2 text-lg">Numéro de visa : {visa}</p>
          <p className="text-lg">Commission des Psychologues : {commission}</p>
        </div>
        <div className={`${panel} ring-2 ring-ink`}>
          <Heading level={3} as="h2" className="mb-4">
            Langues
          </Heading>
          <p className="text-lg">Consultations en français et en anglais.</p>
        </div>
      </Container>
    </>
  );
}
