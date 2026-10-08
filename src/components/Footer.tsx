import { cancellationPolicy, commission, phone, visa } from "@/constants";
import { BookingLink } from "@/components/BookingLink";
import { Container } from "@/components/Container";
import { EmailLink } from "@/components/EmailLink";
import { Logo } from "@/components/Logo";
import { Shape } from "@/components/Shape";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-stone-100">
      <Shape shape="circle" className="absolute -top-10 -right-10 w-40 bg-mustard-light" />
      <Container className="relative grid gap-10 py-16 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs">
            Psychologue clinicienne agréée. Accompagnement des enfants, des adolescents, des adultes
            et des parents.
          </p>
          <p className="mt-2 text-sm text-ink-soft">
            Visa {visa}, Commission des Psychologues {commission}
          </p>
        </div>
        <div>
          <h2 className="mb-3 text-xl font-extrabold">Contact</h2>
          <ul className="space-y-1">
            <li>
              <a className="hover:underline" href={phone.href}>
                {phone.display}
              </a>
            </li>
            <li>
              <EmailLink />
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-xl font-extrabold">Rendez-vous</h2>
          <p>Adresse des cabinets : informations à venir.</p>
          <BookingLink className="mt-4" />
        </div>
      </Container>
      <Container className="relative">
        <p className="border-t border-ink/20 py-6 text-sm">{cancellationPolicy}</p>
      </Container>
    </footer>
  );
}
