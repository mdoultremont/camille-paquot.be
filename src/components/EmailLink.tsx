import { useEffect, useRef, useState } from "react";
import { email } from "@/constants";
import { TextAnchor } from "@/components/TextLink";

// The e-mail address always comes with a copy button.
export function EmailLink({
  address = email,
  emphasis = false,
  className = "",
}: {
  address?: string;
  emphasis?: boolean;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const resetTimeout = useRef<number | undefined>(undefined);
  useEffect(() => () => window.clearTimeout(resetTimeout.current), []);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setCopyError(false);
      // Restart the delay on every click so the check mark stays for the full duration.
      window.clearTimeout(resetTimeout.current);
      resetTimeout.current = window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopyError(true);
    }
  }
  const href = `mailto:${address}`;
  return (
    <span className={`inline-flex items-center gap-1 ${className}`}>
      {emphasis ? (
        <TextAnchor className="break-all" href={href}>
          {address}
        </TextAnchor>
      ) : (
        <a className="break-all hover:underline" href={href}>
          {address}
        </a>
      )}
      <button
        type="button"
        aria-label="Copier l’e-mail"
        title={copied ? "E-mail copié" : "Copier l’e-mail"}
        className="flex size-8 flex-none cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-ink/10"
        onClick={() => void copyEmail()}
      >
        <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24" fill="none">
          <path
            d={copied ? "M5 12.5l4.5 4.5L19 7.5" : "M9 9h10v10H9zM5 15V5h10"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <output className="sr-only">
        {copied
          ? "Adresse e-mail copiée"
          : copyError
            ? `Vous pouvez copier cette adresse : ${address}`
            : ""}
      </output>
    </span>
  );
}
