import type { ReactNode } from "react";
import { booking } from "../constants";
import { Button } from "./Button";

export function BookingLink({
  variant,
  className,
  children = "Prendre rendez-vous",
}: {
  variant?: "primary" | "outline";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <Button
      variant={variant}
      className={className}
      href={booking}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Button>
  );
}
