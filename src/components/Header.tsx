import { Link, linkOptions, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { phone } from "@/constants";
import { BookingLink } from "@/components/BookingLink";
import { Container } from "@/components/Container";
import { EmailLink } from "@/components/EmailLink";
import { Logo } from "@/components/Logo";

const navigation = [
  {
    path: "/consultations",
    label: "Consultations",
    link: linkOptions({ to: "/consultations" }),
  },
  { path: "/yoga", label: "Yoga", link: linkOptions({ to: "/yoga" }) },
  { path: "/a-propos", label: "À propos", link: linkOptions({ to: "/a-propos" }) },
  {
    path: "/infos-pratiques",
    label: "Infos pratiques",
    link: linkOptions({ to: "/infos-pratiques" }),
  },
];

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
    // Only lock scrolling while the mobile menu can be visible, so a viewport that grows past
    // the breakpoint (e.g. a rotated tablet) is never left with a hidden menu and a frozen page.
    document.body.classList.add("max-lg:overflow-hidden");
    document.addEventListener("keydown", close);
    return () => {
      document.body.classList.remove("max-lg:overflow-hidden");
      document.removeEventListener("keydown", close);
    };
  }, [open]);
  const links = navigation.map(({ path, label, link }) => {
    const active = pathname.startsWith(path);
    return (
      <Link
        key={path}
        {...link}
        aria-current={pathname === path ? "page" : active ? "true" : undefined}
        className="group flex rounded-full"
      >
        <span
          className={`rounded-full px-4 py-2 font-medium transition-colors ${active ? "bg-mustard-light" : "group-hover:bg-lilac"}`}
        >
          {label}
        </span>
      </Link>
    );
  });
  return (
    <header className="sticky top-0 z-20 bg-white">
      <Container className="flex items-center justify-between gap-4 py-4">
        <Logo />
        <nav aria-label="Navigation principale" className="flex items-center gap-1 max-lg:hidden">
          {links}
        </nav>
        <div className="flex items-center gap-3">
          <BookingLink className="max-sm:px-4 max-sm:py-2 max-sm:text-sm">
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
      </Container>
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Navigation principale"
          className="h-[calc(100dvh-4.5rem)] overflow-auto border-t border-ink/10 bg-white lg:hidden"
        >
          <Container className="flex flex-col gap-2 py-8 text-2xl">
            <Link to="/" className="group flex rounded-full">
              <span className="rounded-full px-4 py-2 font-medium group-hover:bg-lilac">
                Accueil
              </span>
            </Link>
            {links}
            <div className="mt-6 flex flex-col gap-1 px-4 text-lg">
              <a href={phone.href}>{phone.display}</a>
              <EmailLink />
            </div>
          </Container>
        </nav>
      )}
    </header>
  );
}
