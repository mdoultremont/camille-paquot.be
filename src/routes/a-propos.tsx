import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "../components/Pages";
export const Route = createFileRoute("/a-propos")({
  component: AboutPage,
  head: () => ({ meta: [{ title: "À propos - Camille Paquot" }] }),
});
