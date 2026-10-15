import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Heading } from "@/components/Heading";
import { email, introduction, phone, siteUrl } from "@/constants";
import stylesheet from "@/styles.css?url";

const description =
  "Accompagnement thérapeutique bienveillant et sécurisant. Camille Paquot, Psychologue Clinicienne Agréée.";

// Add `address` once the practice addresses are known.
const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Camille Paquot, psychologue clinicienne",
  description: introduction,
  url: siteUrl,
  image: `${siteUrl}/images/camille-paquot.jpg`,
  telephone: phone.href.replace("tel:", ""),
  email,
  knowsLanguage: ["fr", "en"],
  founder: { "@type": "Person", name: "Camille Paquot", jobTitle: "Psychologue clinicienne" },
};
export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#ffffff" },
      { title: "Camille Paquot - Psychologue" },
      { name: "description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Camille Paquot" },
      { property: "og:locale", content: "fr_BE" },
      { property: "og:image", content: `${siteUrl}/images/camille-paquot.jpg` },
      { property: "og:image:alt", content: "Portrait de Camille Paquot" },
      { "script:ld+json": structuredData },
    ],
    links: [
      {
        rel: "preload",
        href: "/fonts/gabarito.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      { rel: "stylesheet", href: stylesheet },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
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
    <html
      lang="fr"
      className="scroll-smooth bg-white font-sans text-ink antialiased [font-synthesis:none]"
    >
      <head>
        <HeadContent />
      </head>
      <body>
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
