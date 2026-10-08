import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import type { Service } from "../content";
import { booking, email, phone } from "../site";
import { container, h2, h3, outlineButton, primaryButton, serviceThemes, shapes } from "./styles";

export function LogoMark({ className = "size-10" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 42 42">
      <circle cx="15" cy="15" r="13" className="fill-mustard" />
      <path d="M6 40a15 15 0 0 1 30 0z" className="fill-sage" />
      <path d="M26 4q14 0 14 14-14 0-14-14z" className="fill-sky" />
    </svg>
  );
}

export function Shape({ shape, className }: { shape: keyof typeof shapes; className: string }) {
  return <div aria-hidden="true" className={`${shapes[shape]} ${className}`} />;
}

export function BookingLink({
  className = primaryButton,
  children = "Prendre rendez-vous",
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a className={className} href={booking} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

// Black-and-white portrait cut into an arch, surrounded by paper shapes.
export function Portrait({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-square w-full ${className}`}>
      <Shape shape="leaf" className="absolute top-0 left-[4%] w-[20%] rotate-12 bg-sage" />
      <img
        src="/images/camille-paquot.jpg"
        alt="Portrait de Camille Paquot"
        className="absolute top-[9%] left-[16%] h-[82%] w-[68%] rounded-t-full rounded-b-3xl object-cover object-top grayscale"
      />
      <Shape shape="circle" className="absolute top-[2%] right-[4%] w-[26%] bg-mustard" />
      <Shape shape="circle" className="absolute top-0 right-[34%] w-[10%] bg-sky" />
      <Shape shape="halfMoon" className="absolute bottom-[2%] left-0 w-[42%] -rotate-6 bg-sage" />
      <Shape
        shape="pebble"
        className="absolute right-[2%] bottom-[6%] w-[32%] rotate-12 bg-lilac"
      />
    </div>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  const theme = serviceThemes[service.slug];
  return (
    <Link
      to="/accompagnement/$service"
      params={{ service: service.slug }}
      className={`group relative flex min-h-56 flex-col overflow-hidden rounded-3xl p-7 transition-transform hover:-translate-y-1 ${theme.background}`}
    >
      <Shape
        shape={theme.shape}
        className={`absolute -right-6 -bottom-6 w-28 transition-transform group-hover:scale-110 ${theme.shapeColor}`}
      />
      <h3 className={`${h3} relative max-w-60 text-3xl`}>{service.name}</h3>
      <p className="relative mt-3 mb-6 max-w-xs">{service.summary}</p>
      <ul className="relative mt-auto flex gap-2 text-sm font-semibold">
        <li className="rounded-lg bg-white px-3 py-1">{service.duration}</li>
        <li className="rounded-lg bg-white px-3 py-1">{service.price}</li>
      </ul>
    </Link>
  );
}

export function PracticalInfo({ service }: { service: Service }) {
  const rows = [
    ["Durée", service.duration],
    ["Tarif", service.price],
    ["Annulation", service.cancellation],
  ];
  return (
    <div>
      <h2 className={`${h3} mb-5`}>Infos pratiques</h2>
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
      {service.bookOnline ? (
        <>
          <BookingLink className={`${primaryButton} mt-6 w-full`} />
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
            <a className={primaryButton} href={`mailto:${email}`}>
              Écrire un e-mail
            </a>
            <a className={outlineButton} href={phone.href}>
              Appeler le {phone.display}
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export function BookingBand() {
  return (
    <section className={`${container} py-16`}>
      <div className="relative flex flex-col items-start gap-6 overflow-hidden rounded-[2rem] bg-mustard-light p-8 md:flex-row md:items-center md:justify-between md:p-12">
        <Shape shape="halfMoon" className="absolute -bottom-6 left-1/2 w-40 bg-sky max-md:hidden" />
        <div className="relative">
          <h2 className={h2}>Un premier rendez-vous ?</h2>
          <p className="mt-2 max-w-xl text-lg">
            Réservez en ligne, ou appelez le{" "}
            <a className="font-bold underline underline-offset-4" href={phone.href}>
              {phone.display}
            </a>{" "}
            si vous avez une question avant de commencer.
          </p>
        </div>
        <BookingLink className={`${primaryButton} relative`} />
      </div>
    </section>
  );
}
