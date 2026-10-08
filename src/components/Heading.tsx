import type { ReactNode } from "react";

const styles = {
  1: "text-4xl leading-none font-extrabold tracking-tight text-balance md:text-6xl",
  2: "text-3xl font-extrabold tracking-tight text-balance md:text-4xl",
  3: "text-2xl leading-tight font-extrabold tracking-tight",
};

// `level` sets the visual size; `as` overrides the tag when the outline needs a different level.
export function Heading({
  level,
  as,
  className = "",
  children,
}: {
  level: 1 | 2 | 3;
  as?: "h1" | "h2" | "h3";
  className?: string;
  children: ReactNode;
}) {
  const Tag = as ?? (`h${level}` as const);
  return <Tag className={`${styles[level]} ${className}`}>{children}</Tag>;
}
