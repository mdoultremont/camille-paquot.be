import { createRootRoute, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router";
import { Header, Footer } from "../components/Layout";
import stylesheet from "../styles.css?url";
import { container, h1 } from "../components/styles";
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
    <section className={`${container} py-[100px]`}>
      <h1 className={`${h1} text-teal`}>Page introuvable</h1>
      <p className="my-5">Cette page n’existe pas.</p>
      <Link to="/">Retour à l’accueil</Link>
    </section>
  ),
});
function RootDocument() {
  return (
    <html
      lang="fr"
      className="bg-white font-sans text-base font-normal leading-normal text-body [font-synthesis:none]"
    >
      <head>
        <HeadContent />
      </head>
      <body className="[&_:is(a,button)]:[-webkit-tap-highlight-color:transparent] [&_:is(a,button):focus-visible]:outline-3 [&_:is(a,button):focus-visible]:outline-solid [&_:is(a,button):focus-visible]:outline-[#8aac84] [&_:is(a,button):focus-visible]:outline-offset-[5px] motion-reduce:[&_*]:scroll-auto! motion-reduce:[&_*]:[transition:none]! motion-reduce:[&_*]:animate-none! motion-reduce:[&_*::before]:scroll-auto! motion-reduce:[&_*::before]:[transition:none]! motion-reduce:[&_*::before]:animate-none! motion-reduce:[&_*::after]:scroll-auto! motion-reduce:[&_*::after]:[transition:none]! motion-reduce:[&_*::after]:animate-none!">
        <a
          className="fixed -top-[100px] left-[15px] z-[100] bg-teal p-3 text-white focus:top-2.5"
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
