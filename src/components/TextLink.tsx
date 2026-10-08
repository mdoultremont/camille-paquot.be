import { createLink } from "@tanstack/react-router";
import type { ComponentProps } from "react";

export function TextAnchor({ className = "", children, ...props }: ComponentProps<"a">) {
  return (
    <a
      {...props}
      className={`font-bold underline decoration-mustard decoration-2 underline-offset-4 transition-colors hover:decoration-ink ${className}`}
    >
      {children}
    </a>
  );
}

// Same look for internal routes, with typed `to` and `params`.
export const TextLink = createLink(TextAnchor);
