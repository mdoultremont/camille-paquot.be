import { Link } from "@tanstack/react-router";
import type { Service } from "@/services";
import { Heading } from "@/components/Heading";
import { Shape } from "@/components/Shape";

export function ServiceCard({ service }: { service: Service }) {
  const { theme } = service;
  return (
    <Link
      to="/consultations/$service"
      params={{ service: service.slug }}
      className={`group relative flex min-h-56 flex-col overflow-hidden rounded-3xl p-7 transition-transform hover:-translate-y-1 ${theme.background}`}
    >
      <Shape
        shape={theme.shape}
        className={`absolute -right-6 -bottom-6 w-28 transition-transform group-hover:scale-110 ${theme.shapeColor}`}
      />
      <Heading level={3} className="relative max-w-60 text-3xl">
        {service.name}
      </Heading>
      <p className="relative mt-3 mb-6 max-w-xs">{service.summary}</p>
      <ul className="relative mt-auto flex gap-2 text-sm font-semibold">
        <li className="rounded-lg bg-white px-3 py-1">{service.duration}</li>
        <li className="rounded-lg bg-white px-3 py-1">{service.price}</li>
      </ul>
    </Link>
  );
}
