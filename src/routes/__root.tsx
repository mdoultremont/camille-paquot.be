import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { ButtonLink } from "../components/Button";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Heading } from "../components/Heading";
import stylesheet from "../styles.css?url";
export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Camille Paquot - Psychologue" },
      {
        name: "description",
        content:
          "Accompagnement thérapeutique bienveillant et sécurisant. Camille Paquot, Psychologue Clinicienne Agréée.",
      },
    ],
    links: [
      { rel: "stylesheet", href: stylesheet },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    ],
  }),
  component: RootDocument,
  notFoundComponent: () => (
    <Container as="section" className="py-24">
      <Heading level={1}>Page introuvable</Heading>
      <p className="my-6 text-lg text-ink-soft md:text-xl">
        Cette page n’existe pas ou a été déplacée.
      </p>
      <ButtonLink to="/">Retour à l’accueil</ButtonLink>
    </Container>
  ),
});
function RootDocument() {
  return (
    <html lang="fr" className="bg-white font-sans text-ink antialiased [font-synthesis:none]">
      <head>
        <HeadContent />
      </head>
      <body className="[&_:is(a,button)]:[-webkit-tap-highlight-color:transparent] [&_:is(a,button):focus-visible]:outline-3 [&_:is(a,button):focus-visible]:outline-offset-2 [&_:is(a,button):focus-visible]:outline-mustard motion-reduce:[&_*]:scroll-auto! motion-reduce:[&_*]:[transition:none]! motion-reduce:[&_*]:animate-none! motion-reduce:[&_*::before]:scroll-auto! motion-reduce:[&_*::before]:[transition:none]! motion-reduce:[&_*::before]:animate-none! motion-reduce:[&_*::after]:scroll-auto! motion-reduce:[&_*::after]:[transition:none]! motion-reduce:[&_*::after]:animate-none!">
        <a
          className="fixed -top-24 left-4 z-50 rounded-full bg-ink px-4 py-2 text-white focus:top-3"
          href="#main-content"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="main-content">
          <Outlet />
        </main>
        <Footer />
        <Scripts />
      </body>
    </html>
  );
}
