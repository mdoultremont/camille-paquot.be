import { Link } from "@tanstack/react-router";
import {
  aboutParagraphs,
  cancellationPolicy,
  commitments,
  services,
  strengths,
  trainings,
  type Service,
} from "../content";
import { commission, email, languages, payment, phone, visa } from "../site";
import {
  container,
  h1,
  h2,
  h3,
  lead,
  outlineButton,
  primaryButton,
  prose,
  serviceThemes,
  shapes,
  textLink,
} from "./styles";
import { BookingBand, BookingLink, PracticalInfo, Portrait, ServiceCard, Shape } from "./ui";

const introduction =
  "Passionnée par le contact et la rencontre avec autrui, j’accompagne toute personne désirant réaliser un travail thérapeutique. Nous avançons ensemble, à votre rythme et votre temporalité, dans un cadre bienveillant, sécurisant et non-jugeant.";

function ServiceGrid({ items }: { items: readonly Service[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {items.map((service) => (
        <ServiceCard key={service.slug} service={service} />
      ))}
    </div>
  );
}

// Small paper-shape bullets in mustard and ink, readable on every panel colour.
const bulletShapes = [
  `${shapes.circle} bg-mustard`,
  `${shapes.leaf} bg-ink`,
  `${shapes.pebble} bg-mustard`,
  `${shapes.halfMoon} bg-ink`,
];
// Media chips sit on white, so they can use the whole palette.
const mediaShapes = [
  `${shapes.circle} bg-mustard`,
  `${shapes.pebble} bg-lilac`,
  `${shapes.halfMoon} bg-sage`,
  `${shapes.leaf} bg-sky`,
  `${shapes.circle} bg-ink`,
];
function ShapeList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={item} className="flex gap-3 text-lg">
          <span
            aria-hidden="true"
            className={`mt-1.5 w-4 flex-none self-start ${bulletShapes[index % bulletShapes.length]}`}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function HomePage() {
  return (
    <>
      <section className={`${container} grid items-center gap-10 py-10 md:py-16 lg:grid-cols-2`}>
        <div>
          <h1 className={`${h1} md:text-7xl`}>Un espace pour dire, dessiner, respirer.</h1>
          <p className={`${lead} mt-6 max-w-lg`}>
            Psychologue clinicienne, j’accompagne les enfants, les adolescents, les adultes et les
            parents, avec des mots et parfois avec d’autres outils.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <BookingLink />
            <Link to="/accompagnement" className={outlineButton}>
              Les accompagnements
            </Link>
          </div>
        </div>
        <Portrait className="mx-auto max-w-md" />
      </section>
      <section className={`${container} py-16`}>
        <h2 className={`${h2} mb-8`}>Accompagnements</h2>
        <ServiceGrid items={services} />
      </section>
      <section className={`${container} grid gap-10 py-16 lg:grid-cols-2`}>
        <div>
          <h2 className={h2}>Qui suis-je ?</h2>
          <p className="mt-2 font-semibold text-ink-soft">
            Camille Paquot, psychologue clinicienne agréée
          </p>
          <p className={`${prose} mt-6`}>{introduction}</p>
          <Link to="/a-propos" className={`${textLink} mt-6 inline-block`}>
            Mon parcours et mes formations
          </Link>
        </div>
        <div className="rounded-3xl bg-lilac p-8">
          <h3 className={`${h3} mb-5`}>Ce que j’apporte</h3>
          <ShapeList items={strengths} />
        </div>
      </section>
      <BookingBand />
    </>
  );
}

export function ServicesPage() {
  return (
    <>
      <section className={`${container} py-12 md:py-16`}>
        <h1 className={h1}>Accompagnements</h1>
        <p className={`${lead} mt-5 max-w-2xl`}>
          Ensemble, explorons le champ des possibles afin de trouver un apaisement psychique et
          physique.
        </p>
      </section>
      <section className={container}>
        <ServiceGrid items={services} />
      </section>
      <section className={`${container} grid gap-10 py-16 md:grid-cols-[1fr_2fr]`}>
        <h2 className={h2}>Ce que j’apporte</h2>
        <div className="columns-1 sm:columns-2 [&_li]:break-inside-avoid">
          <ShapeList items={strengths} />
        </div>
      </section>
      <BookingBand />
    </>
  );
}

export function ServicePage({ service }: { service: Service }) {
  const theme = serviceThemes[service.slug];
  const otherServices = services.filter((s) => s.slug !== service.slug);
  const hasBody = service.paragraphs.length > 0 || service.media.length > 0;
  return (
    <>
      <section className="px-3 md:px-6">
        <div className={`relative overflow-hidden rounded-[2rem] ${theme.background}`}>
          <Shape
            shape={theme.shape}
            className={`absolute -right-10 -bottom-10 w-40 md:top-10 md:right-16 md:bottom-auto md:w-56 ${theme.shapeColor}`}
          />
          <div className={`${container} relative py-10 md:py-16`}>
            <h1 className={`${h1} max-w-2xl`}>{service.title}</h1>
            <p className="mt-5 max-w-2xl text-lg md:text-xl">{service.intro}</p>
          </div>
        </div>
      </section>
      <section
        className={`${container} grid items-start gap-12 py-12 md:py-16 lg:grid-cols-[1fr_22rem]`}
      >
        {hasBody && (
          <div>
            <div className={prose}>
              {service.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            {service.media.length > 0 && (
              <>
                <h2 className={`${h3} mt-10 mb-4`}>{service.mediaTitle}</h2>
                <ul className="flex flex-wrap gap-2">
                  {service.media.map((item, index) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 rounded-full py-1.5 pr-4 pl-2 font-semibold ring-2 ring-ink"
                    >
                      <span
                        aria-hidden="true"
                        className={`w-4 ${mediaShapes[index % mediaShapes.length]}`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
        <aside className="w-full max-w-md lg:sticky lg:top-28">
          <PracticalInfo service={service} />
        </aside>
      </section>
      <section className={`${container} pb-16`}>
        <h2 className={`${h2} mb-8`}>D’autres accompagnements</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {otherServices.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>
    </>
  );
}

export function AboutPage() {
  return (
    <>
      <section className={`${container} grid items-center gap-10 py-10 md:py-16 lg:grid-cols-2`}>
        <div>
          <h1 className={h1}>Qui suis-je ?</h1>
          <p className="mt-6 text-2xl font-extrabold">Camille Paquot</p>
          <p className="text-lg text-ink-soft">Psychologue clinicienne agréée</p>
          <p className={`${prose} mt-6`}>{introduction}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <BookingLink />
            <a className={outlineButton} href={phone.href}>
              {phone.display}
            </a>
          </div>
          <a className={`${textLink} mt-5 inline-block break-all`} href={`mailto:${email}`}>
            {email}
          </a>
        </div>
        <Portrait className="mx-auto max-w-sm" />
      </section>
      <section className={`${container} grid items-start gap-12 py-12 lg:grid-cols-[1fr_22rem]`}>
        <div className={prose}>
          {aboutParagraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <aside className="rounded-3xl bg-sage p-8">
          <h2 className={`${h3} mb-5`}>Ce que j’apporte</h2>
          <ShapeList items={strengths} />
        </aside>
      </section>
      <section className={`${container} py-12`}>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((item, index) => (
            <li
              key={item}
              className={`rounded-2xl p-5 text-lg font-semibold ring-2 ring-ink ${index % 2 ? "rotate-1" : "-rotate-1"}`}
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
      <section id="formations" className={`${container} scroll-mt-24 py-16`}>
        <h2 className={h2}>Formations</h2>
        <p className={`${lead} mt-3`}>Me former en continu est une priorité.</p>
        <ol className="relative mt-10 space-y-8">
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-2.5 w-0.5 -translate-x-1/2 bg-ink/20"
          />
          {trainings.map((training) => (
            <li key={training.title} className="relative pl-10">
              <span
                aria-hidden="true"
                className={`absolute top-1 left-0 w-5 ring-4 ring-white ${shapes.circle} ${training.ongoing ? "bg-mustard" : "bg-sage"}`}
              />
              <h3 className="text-xl font-bold">{training.title}</h3>
              <p className="mt-1 text-ink-soft">{training.details}</p>
              {training.ongoing && (
                <span className="mt-2 inline-block rounded-full bg-mustard-light px-3 py-1 text-sm font-semibold">
                  En cours
                </span>
              )}
            </li>
          ))}
        </ol>
      </section>
      <BookingBand />
    </>
  );
}

export function PracticalInfoPage() {
  const yoga = services.find((s) => !s.bookOnline);
  return (
    <>
      <section className={`${container} py-12 md:py-16`}>
        <h1 className={h1}>Infos pratiques</h1>
        <p className={`${lead} mt-5`}>Tarifs, paiement, prise de rendez-vous et contact.</p>
      </section>
      <section className={`${container} grid gap-5 pb-16 md:grid-cols-2`}>
        <div className="rounded-3xl bg-mustard-light p-8 md:col-span-2">
          <h2 className={`${h3} mb-6`}>Tarifs</h2>
          <table className="w-full text-left text-lg">
            <thead className="sr-only">
              <tr>
                <th>Accompagnement</th>
                <th>Durée</th>
                <th>Tarif</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/20">
              {services.map((service) => (
                <tr key={service.slug}>
                  <th scope="row" className="py-3 pr-4 font-semibold">
                    <Link
                      to="/accompagnement/$service"
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
            </tbody>
          </table>
          <p className="mt-6 text-lg">{payment}</p>
        </div>
        <div className="rounded-3xl bg-sage p-8">
          <h2 className={`${h3} mb-4`}>Prendre rendez-vous</h2>
          <p className="text-lg">
            Les consultations se réservent en ligne, ou par téléphone au{" "}
            <a className={textLink} href={phone.href}>
              {phone.display}
            </a>
            .
          </p>
          <BookingLink className={`${primaryButton} mt-5`} />
          {yoga && (
            <p className="mt-6 text-lg">
              Pour les {yoga.name.toLowerCase()}, la prise de rendez-vous se fait directement par
              mail ou par téléphone.
            </p>
          )}
        </div>
        <div className="rounded-3xl bg-lilac p-8">
          <h2 className={`${h3} mb-4`}>Annulation</h2>
          <p className="text-lg">{cancellationPolicy}</p>
        </div>
        <div className="rounded-3xl p-8 ring-2 ring-ink">
          <h2 className={`${h3} mb-4`}>Contact</h2>
          <ul className="space-y-1 text-lg">
            <li>
              <a className={textLink} href={phone.href}>
                {phone.display}
              </a>
            </li>
            <li>
              <a className={`${textLink} break-all`} href={`mailto:${email}`}>
                {email}
              </a>
            </li>
          </ul>
        </div>
        <div className="rounded-3xl p-8 ring-2 ring-ink">
          <h2 className={`${h3} mb-4`}>Cabinets</h2>
          <p className="text-lg">Informations à venir.</p>
        </div>
        <div className="rounded-3xl p-8 ring-2 ring-ink">
          <h2 className={`${h3} mb-4`}>Statut</h2>
          <p className="text-lg">Psychologue clinicienne agréée, non conventionnée.</p>
          <p className="mt-2 text-lg">Numéro de visa : {visa}</p>
          <p className="text-lg">Commission des Psychologues : {commission}</p>
        </div>
        <div className="rounded-3xl p-8 ring-2 ring-ink">
          <h2 className={`${h3} mb-4`}>Langues</h2>
          <p className="text-lg">{languages}</p>
        </div>
      </section>
    </>
  );
}
