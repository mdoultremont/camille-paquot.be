import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Container as="section" className="py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <Heading level={1}>{title}</Heading>
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
