import { createRootRoute, HeadContent, Outlet, Scripts, useLocation } from "@tanstack/react-router";
import { Header, Footer } from "../components/Layout";
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
      {
        rel: "icon",
        type: "image/png",
        href: "/images/1ynKL1WtFDMUZr5RG054YQhGegI.png",
      },
    ],
  }),
  component: RootDocument,
  notFoundComponent: () => (
    <section className="container not-found">
      <h1>Page introuvable</h1>
      <p>Cette page n’existe pas.</p>
      <a href="/">Retour à l’accueil</a>
    </section>
  ),
});
function RootDocument() {
  const { pathname } = useLocation();
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Aller au contenu
        </a>
        <Header />
        <main id="main-content">
          <Outlet />
        </main>
        {pathname !== "/formation-continue" && <Footer />}
        <Scripts />
      </body>
    </html>
  );
}
