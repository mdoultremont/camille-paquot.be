import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { ButtonLink } from "@/components/Button";
import { pageHead } from "@/seo";
import { tools } from "@/tools/registry";

export const Route = createFileRoute("/tools/")({
  head: () =>
    pageHead({
      title: "Outils",
      description: "Les outils de création de Camille Paquot.",
      path: "/tools",
      noindex: true,
    }),
  component: ToolsPage,
});
function ToolsPage() {
  return (
    <Container className="py-16">
      <Heading level={1}>Outils</Heading>
      <p className="mt-4 text-lg text-ink-soft">
        Des outils pour préparer les supports de vos cours.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {tools.map((tool) => (
          <article key={tool.to} className="rounded-3xl bg-sage/20 p-8">
            <Heading level={2}>{tool.title}</Heading>
            <p className="mt-4 mb-6">{tool.description}</p>
            <ButtonLink to={tool.to}>{tool.cta}</ButtonLink>
          </article>
        ))}
      </div>
    </Container>
  );
}
