import { createFileRoute, Link } from "@tanstack/react-router";
import { BookingLink } from "@/components/BookingLink";
import { Container } from "@/components/Container";
import { EmailLink } from "@/components/EmailLink";
import { Heading } from "@/components/Heading";
import { TextAnchor } from "@/components/TextLink";
import {
  cancellationPolicy,
  commission,
  financialHardship,
  languages,
  locations,
  payment,
  phone,
  reimbursement,
  schedule,
  status,
  visa,
} from "@/constants";
import { faq } from "@/faq";
import { services } from "@/services";
import { yoga } from "@/yoga";
import { pageHead } from "@/seo";

export const Route = createFileRoute("/infos-pratiques")({
  head: () =>
    pageHead({
      title: "Infos pratiques - Camille Paquot",
      description:
        "Tarifs, lieux de consultation, paiement, prise de rendez-vous, annulation et contact pour les consultations et les cours de yoga.",
      ogImage: {
        title: "Infos pratiques",
        subtitle: "Tarifs, lieux de consultation, paiement, prise de rendez-vous et contact.",
      },
      path: "/infos-pratiques",
      structuredData: faqStructuredData,
    }),
  component: Page,
});

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

const panel = "rounded-3xl p-8";

function Page() {
  return (
    <>
      <Container as="section" className="py-12 md:py-16">
        <Heading level={1}>Infos pratiques</Heading>
        <p className="mt-5 text-lg text-ink-soft md:text-xl">
          Tarifs, lieux de consultation, paiement, prise de rendez-vous et contact.
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
            Prendre rendez-vous
          </Heading>
          <p className="text-lg">
            Les consultations se réservent en ligne, ou par téléphone au{" "}
            <TextAnchor href={phone.href}>{phone.display}</TextAnchor>.
          </p>
          <BookingLink className="mt-5" />
          <p className="mt-6 text-lg">
            Pour les cours de Yoga, la prise de rendez-vous se fait directement par mail ou par
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
            Lieux de consultation
          </Heading>
          <ul className="space-y-5 text-lg">
            {locations.map((location) => (
              <li key={location.name}>
                <p className="font-semibold">{schedule(location.hours)}</p>
                <TextAnchor href={location.url} target="_blank" rel="noopener noreferrer">
                  {location.name}
                </TextAnchor>
                <address className="not-italic">
                  {location.street}
                  <br />
                  {location.postalCode} {location.city}
                </address>
              </li>
            ))}
          </ul>
        </div>
        <div className={`${panel} ring-2 ring-ink`}>
          <Heading level={3} as="h2" className="mb-4">
            Statut
          </Heading>
          <p className="text-lg">{status}</p>
          <p className="mt-2 text-lg">Numéro de visa : {visa}</p>
          <p className="text-lg">Commission des Psychologues : {commission}</p>
        </div>
        <div className={`${panel} ring-2 ring-ink`}>
          <Heading level={3} as="h2" className="mb-4">
            Langues
          </Heading>
          <p className="text-lg">{languages}</p>
        </div>
      </Container>
      <Container as="section" className="pb-16">
        <Heading level={2} className="mb-6">
          Questions fréquentes
        </Heading>
        <div className="divide-y divide-ink/20 border-y border-ink/20">
          {faq.map(({ question, answer }) => (
            <details key={question} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg py-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {question}
                <span
                  aria-hidden="true"
                  className="flex-none text-2xl leading-none transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-prose pb-5 text-lg text-ink-soft">{answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </>
  );
}
