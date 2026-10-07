import { createFileRoute } from "@tanstack/react-router";
import { TrainingPage } from "../components/Pages";
export const Route = createFileRoute("/formation-continue")({
  component: TrainingPage,
  head: () => ({ meta: [{ title: "Formation continue - Camille Paquot" }] }),
});
