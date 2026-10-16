import { email, payment, phone } from "@/constants";
import { BookingLink } from "@/components/BookingLink";
import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";

export type PracticalDetails = {
  duration: string;
  price: string;
  cancellation: string;
  bookOnline: boolean;
};

export function PracticalInfo({ service }: { service: PracticalDetails }) {
  const rows = [
    ["Durée", service.duration],
    ["Tarif", service.price],
    ["Annulation", service.cancellation],
  ];
  return (
    <div>
      <Heading level={3} as="h2" className="mb-5">
        Infos pratiques
      </Heading>
      <dl className="space-y-3">
        {rows.map(([term, value]) => (
          <div
            key={term}
            className="flex items-baseline justify-between gap-4 rounded-2xl bg-white px-5 py-3 ring-2 ring-ink"
          >
            <dt>{term}</dt>
            <dd className="text-right text-xl font-extrabold">{value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 text-sm text-ink-soft">{payment}</p>
      {service.bookOnline ? (
        <>
          <BookingLink className="mt-6 w-full" />
          <p className="mt-3 text-sm text-ink-soft">
            Par téléphone au{" "}
            <a className="underline" href={phone.href}>
              {phone.display}
            </a>
            , ou en ligne.
          </p>
        </>
      ) : (
        <>
          <p className="mt-6">
            La prise de rendez-vous se fait directement par mail ou par téléphone.
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <Button href={`mailto:${email}`}>Écrire un e-mail</Button>
            <Button variant="outline" href={phone.href}>
              Appeler le {phone.display}
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
