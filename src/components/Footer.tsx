import { Link } from "@tanstack/react-router";
import { cancellationPolicy, commission, phone, visa } from "@/constants";
import { ConsultationOpening } from "@/components/ConsultationOpening";
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
            Psychologue clinicienne agréée à Bruxelles. Consultations pour enfants, adolescents,
            adultes et parents.
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
          <h2 className="mb-3 text-xl font-extrabold">Consultations</h2>
          <p>L’adresse du cabinet sera communiquée à l’ouverture des consultations.</p>
          <ConsultationOpening className="mt-4" />
        </div>
      </Container>
      <Container className="relative">
        <div className="flex flex-col gap-4 border-t border-ink/20 py-6 text-sm md:flex-row md:items-center md:justify-between">
          <p>{cancellationPolicy}</p>
          <nav aria-label="Informations légales">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              <li>
                <Link to="/conditions-utilisation" className="hover:underline">
                  Conditions d’utilisation
                </Link>
              </li>
              <li>
                <Link to="/mentions-legales" className="hover:underline">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link to="/confidentialite" className="hover:underline">
                  Confidentialité
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
