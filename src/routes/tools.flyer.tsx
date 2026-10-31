import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/seo";
import { FlyerTool } from "@/tools/flyer/FlyerTool";

export const Route = createFileRoute("/tools/flyer")({
  head: () =>
    pageHead({
      title: "Créer une affiche de Viniyoga",
      description: "Votre affiche de cours de Viniyoga, prête à partager ou à imprimer.",
      path: "/tools/flyer",
      noindex: true,
    }),
  component: FlyerTool,
});
