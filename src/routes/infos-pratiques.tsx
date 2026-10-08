import { createFileRoute } from "@tanstack/react-router";
import { PracticalInfoPage } from "../components/Pages";
export const Route = createFileRoute("/infos-pratiques")({
  component: PracticalInfoPage,
  head: () => ({ meta: [{ title: "Infos pratiques - Camille Paquot" }] }),
});
