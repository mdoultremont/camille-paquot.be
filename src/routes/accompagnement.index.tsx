import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "../components/Pages";
export const Route = createFileRoute("/accompagnement/")({
  component: ServicesPage,
  head: () => ({
    meta: [{ title: "Accompagnements - Camille Paquot" }],
  }),
});
