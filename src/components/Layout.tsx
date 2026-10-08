import { Link, linkOptions, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { cancellationPolicy } from "../content";
import { commission, phone, visa } from "../site";
import { container, primaryButton } from "./styles";
import { BookingLink, EmailLink, LogoMark, Shape } from "./ui";

const navigation = [
  {
    path: "/accompagnement",
    label: "Accompagnements",
    link: linkOptions({ to: "/accompagnement" }),
  },
  {
    path: "/accompagnement/yoga",
    label: "Yoga",
    link: linkOptions({ to: "/accompagnement/$service", params: { service: "yoga" } }),
  },
  { path: "/a-propos", label: "À propos", link: linkOptions({ to: "/a-propos" }) },
  {
    path: "/infos-pratiques",
    label: "Infos pratiques",
    link: linkOptions({ to: "/infos-pratiques" }),
  },
];

// Service pages belong to "Accompagnements", except yoga which has its own entry.
function isActive(path: string, pathname: string) {
  if (path === "/accompagnement") {
    return pathname.startsWith(path) && !pathname.startsWith("/accompagnement/yoga");
  }
  return pathname.startsWith(path);
}

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <LogoMark className="size-9 flex-none sm:size-10" />
      <span className="leading-tight">
        <span className="block text-lg font-extrabold tracking-tight whitespace-nowrap sm:text-xl">
          Camille Paquot
        </span>
        <span className="block text-sm text-ink-soft max-sm:hidden">Psychologue clinicienne</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    // oxlint-disable-next-line react/set-state-in-effect -- Close the menu on route changes, including browser back/forward navigation.
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.classList.add("overflow-hidden");
    document.addEventListener("keydown", close);
    return () => {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("keydown", close);
    };
  }, [open]);
  const links = navigation.map(({ path, label, link }) => {
    const active = isActive(path, pathname);
    return (
      <Link
        key={path}
        {...link}
        aria-current={pathname === path ? "page" : active ? "true" : undefined}
        className={`rounded-full px-4 py-2 font-medium transition-colors ${active ? "bg-mustard-light" : "hover:bg-lilac"}`}
      >
        {label}
      </Link>
    );
  });
  return (
    <header className="sticky top-0 z-20 bg-white">
      <div className={`${container} flex items-center justify-between gap-4 py-4`}>
        <Logo />
        <nav aria-label="Navigation principale" className="flex items-center gap-1 max-lg:hidden">
          {links}
        </nav>
        <div className="flex items-center gap-3">
          <BookingLink className={`${primaryButton} max-sm:px-4 max-sm:py-2 max-sm:text-sm`}>
            <span className="sm:hidden">Rendez-vous</span>
            <span className="max-sm:hidden">Prendre rendez-vous</span>
          </BookingLink>
          <button
            className="flex size-10 cursor-pointer items-center justify-center rounded-full lg:hidden"
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            <svg aria-hidden="true" className="size-6" viewBox="0 0 24 24" fill="none">
              <path
                d={open ? "M5 5l14 14M19 5L5 19" : "M3 8h18M3 16h18"}
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Navigation principale"
          className="h-[calc(100dvh-4.5rem)] overflow-auto border-t border-ink/10 bg-white lg:hidden"
        >
          <div className={`${container} flex flex-col items-start gap-2 py-8 text-2xl`}>
            <Link to="/" className="rounded-full px-4 py-2 font-medium hover:bg-lilac">
              Accueil
            </Link>
            {links}
            <div className="mt-6 flex flex-col gap-1 px-4 text-lg">
              <a href={phone.href}>{phone.display}</a>
              <EmailLink />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-stone-100">
      <Shape shape="circle" className="absolute -top-10 -right-10 w-40 bg-mustard-light" />
      <div className={`${container} relative grid gap-10 py-16 md:grid-cols-3`}>
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
          <BookingLink className={`${primaryButton} mt-4`} />
        </div>
      </div>
      <div className={`${container} relative`}>
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
      </div>
    </footer>
  );
}
