import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Container as="section" className="py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <Heading level={1}>{title}</Heading>
        <p className="mt-6 rounded-2xl bg-mustard-light p-5 text-ink-soft">
          Projet de texte : les informations signalées comme restant à compléter ou à vérifier
          doivent être confirmées avant la publication du site.
        </p>
        <div className="mt-10 space-y-8 text-lg leading-relaxed">{children}</div>
      </div>
    </Container>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-3">
      <Heading level={3} as="h2">
        {title}
      </Heading>
      {children}
    </section>
  );
}
