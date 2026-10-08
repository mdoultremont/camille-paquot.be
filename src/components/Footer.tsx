import { Link } from "@tanstack/react-router";
import { cancellationPolicy, commission, phone, visa } from "../constants";
import { BookingLink } from "./BookingLink";
import { Container } from "./Container";
import { EmailLink } from "./EmailLink";
import { navigation } from "./Header";
import { Logo } from "./Logo";
import { Shape } from "./Shape";

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
        <div className="flex flex-col gap-4 border-t border-ink/20 py-6 text-sm md:flex-row md:justify-between">
          <p>{cancellationPolicy}</p>
          <nav aria-label="Liens du pied de page" className="flex flex-wrap gap-x-5 gap-y-1">
            {navigation.map(({ path, label, link }) => (
              <Link key={path} {...link} className="hover:underline">
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
