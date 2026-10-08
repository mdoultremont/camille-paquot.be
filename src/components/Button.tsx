import { createLink } from "@tanstack/react-router";
import type { ComponentProps } from "react";

const variants = {
  primary: "bg-ink text-white hover:bg-ink-soft",
  outline: "text-ink ring-2 ring-ink ring-inset hover:bg-ink hover:text-white",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ComponentProps<"a"> & { variant?: keyof typeof variants }) {
  return (
    <a
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-bold whitespace-nowrap transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

// Same look for internal routes, with typed `to` and `params`.
export const ButtonLink = createLink(Button);
