import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";

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
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", close);
    };
  }, [open]);
  return (
    <header className={`site-header ${open ? "menu-open" : ""}`}>
      <div className="header-inner">
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <span className="menu-close">×</span>
          ) : (
            <svg width="28" height="17" viewBox="0 0 28 17" fill="none" aria-hidden="true">
              <path d="M0 1h28M0 8.5h28M0 16h28" stroke="currentColor" strokeWidth="2" />
            </svg>
          )}
        </button>
        <nav id="main-navigation" aria-label="Navigation principale">
          {navigation.map(([to, label]) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              aria-current={pathname === to ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <a className="button phone-button" href="tel:+32470386155">
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
    <footer className="site-footer">
      <div className="container">
        <div className="footer-contact">
          <div className="footer-column">
            <h2>Des questions ?</h2>
            <div className="contact-links">
              <a href="tel:+32470386155">+32 470 38 61 55</a>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
            <button className="copy-button" onClick={() => void copyEmail()}>
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
          <div className="footer-column">
            <h2>
              <a href={booking} target="_blank" rel="noopener noreferrer">
                Prendre un rendez-vous
              </a>
            </h2>
            <p>Adresse des cabinets : informations à venir</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Les rendez-vous qui ne sont pas annulés 48 heures à l’avance seront facturés</p>
          <p className="mobile-location">
            Consultations les mercredis au Centre Métamorph'Ose (69, Rue du Loutrier 1170
            Watermael-Boitsfort)
          </p>
        </div>
      </div>
    </footer>
  );
}
