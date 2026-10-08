import type { ReactNode } from "react";

export function Container({
  as: Tag = "div",
  className = "",
  id,
  children,
}: {
  as?: "div" | "section";
  className?: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <Tag id={id} className={`mx-auto w-full max-w-6xl px-5 md:px-8 ${className}`}>
      {children}
    </Tag>
  );
}
