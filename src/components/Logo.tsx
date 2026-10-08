import { Link } from "@tanstack/react-router";

export function LogoMark({ className = "size-10" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 42 42">
      <circle cx="15" cy="15" r="13" className="fill-mustard" />
      <path d="M6 40a15 15 0 0 1 30 0z" className="fill-sage" />
      <path d="M26 4q14 0 14 14-14 0-14-14z" className="fill-sky" />
    </svg>
  );
}

export function Logo() {
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
