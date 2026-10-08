import { createRootRoute, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router";
import { Header, Footer } from "../components/Layout";
import stylesheet from "../styles.css?url";
import { container, h1, lead, primaryButton } from "../components/styles";
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
    <section className={`${container} py-24`}>
      <h1 className={h1}>Page introuvable</h1>
      <p className={`${lead} my-6`}>Cette page n’existe pas ou a été déplacée.</p>
      <Link to="/" className={primaryButton}>
        Retour à l’accueil
      </Link>
    </section>
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
