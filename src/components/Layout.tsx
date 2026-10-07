import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { button, container, heading } from "./styles";

export const email = "camillepaquot.psy@gmail.com";
export const booking = "https://rosa.be/fr/hp/camille-paquot-1/?searchType=hp";
const navigation = [
  ["/", "Accueil"],
  ["/a-propos", "À propos"],
  ["/accompagnement", "Accompagnement thérapeutique"],
  ["/formation-continue", "Formation continue"],
] as const;
export function PhoneIcon() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="m20.5 14.6-3.7-1.6a1 1 0 0 0-1.2.3l-1.6 2a16 16 0 0 1-5.3-5.3l2-1.6a1 1 0 0 0 .3-1.2L9.4 3.5a1 1 0 0 0-1.1-.6l-3.5.8a1 1 0 0 0-.8 1A16.3 16.3 0 0 0 19.3 20a1 1 0 0 0 1-.8l.8-3.5a1 1 0 0 0-.6-1.1Z" />
    </svg>
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
  return (
    <header
      className={`sticky top-0 z-20 bg-white py-5 ${open ? "max-lg:fixed max-lg:inset-0 max-lg:overflow-auto max-lg:pb-10" : ""}`}
    >
      <div
        className={`mx-auto flex w-full max-w-[1460px] items-center justify-between gap-[25px] px-5 xl:px-[30px] max-lg:min-h-[17px] max-lg:justify-end ${open ? "max-lg:min-h-screen max-lg:flex-col max-lg:items-start max-lg:justify-start max-lg:gap-10 max-lg:pb-[100px]" : ""}`}
      >
        <button
          className={`hidden cursor-pointer items-center justify-center border-0 bg-transparent p-0 text-teal max-lg:flex ${open ? "max-lg:self-end" : ""}`}
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <span className="h-6 font-sans text-[36px] leading-6">×</span>
          ) : (
            <svg width="28" height="17" viewBox="0 0 28 17" fill="none" aria-hidden="true">
              <path d="M0 1h28M0 8.5h28M0 16h28" stroke="currentColor" strokeWidth="2" />
            </svg>
          )}
        </button>
        <nav
          id="main-navigation"
          aria-label="Navigation principale"
          className={`flex items-center gap-7 tracking-[-0.16px] text-body xl:gap-[60px] ${open ? "max-lg:flex-col max-lg:items-start" : "max-lg:hidden"}`}
        >
          {navigation.map(([to, label]) => (
            <Link
              key={to}
              to={to}
              className="transition-[color] duration-200 ease-[ease] hover:text-teal"
              onClick={() => setOpen(false)}
              aria-current={pathname === to ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <a
          className={`${button} border-sage bg-sage text-teal hover:border-teal hover:bg-teal hover:text-white ${open ? "max-lg:flex" : "max-lg:hidden"}`}
          href="tel:+32470386155"
        >
          <PhoneIcon /> +32 470 38 61 55
        </a>
      </div>
    </header>
  );
}
export function Footer() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setCopyError(false);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopyError(true);
    }
  }
  return (
    <footer className="bg-teal text-white">
      <div className={container}>
        <div className="flex items-start justify-center gap-10 py-[60px] lg:flex-row lg:gap-[60px] max-lg:flex-col">
          <div className="flex min-w-0 flex-1 flex-col items-center gap-[30px] text-center max-lg:w-full">
            <h2
              className={`${heading} text-[33px] tracking-normal text-white lg:text-[32px] lg:tracking-[-1px] xl:text-[40px]`}
            >
              Des questions ?
            </h2>
            <div className="flex flex-col gap-3 font-medium [&_a:hover]:underline">
              <a href="tel:+32470386155">+32 470 38 61 55</a>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
            <button
              className="cursor-pointer rounded-lg border-0 bg-sage px-[22px] py-3 tracking-[-0.16px] text-body hover:bg-white"
              onClick={() => void copyEmail()}
            >
              {copied ? "E-mail copié !" : "Copier l’e-mail"}
            </button>
            <output className="sr-only">
              {copied
                ? "Adresse e-mail copiée"
                : copyError
                  ? `Vous pouvez copier cette adresse : ${email}`
                  : ""}
            </output>
          </div>
          <div className="flex min-w-0 flex-1 flex-col items-center gap-[30px] text-center max-lg:w-full">
            <h2
              className={`${heading} text-[33px] tracking-normal text-white lg:text-[32px] lg:tracking-[-1px] xl:text-[40px]`}
            >
              <a
                className="hover:underline"
                href={booking}
                target="_blank"
                rel="noopener noreferrer"
              >
                Prendre un rendez-vous
              </a>
            </h2>
            <p>Adresse des cabinets : informations à venir</p>
          </div>
        </div>
        <div className="border-t border-[#ffffff40] pt-[30px] pb-5 text-center text-[14px]">
          <p>Les rendez-vous qui ne sont pas annulés 48 heures à l’avance seront facturés</p>
          <p className="hidden max-lg:block">
            Consultations les mercredis au Centre Métamorph'Ose (69, Rue du Loutrier 1170
            Watermael-Boitsfort)
          </p>
        </div>
      </div>
    </footer>
  );
}
