import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServicePage } from "../components/Pages";
import { services } from "../content";
export const Route = createFileRoute("/accompagnement/$service")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.service);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Accompagnement"} - Camille Paquot` },
    ],
  }),
  component: () => <ServicePage service={Route.useLoaderData()} />,
});
