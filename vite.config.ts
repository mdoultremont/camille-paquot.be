import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { siteUrl } from "./src/constants.ts";

export default defineConfig({
  plugins: [
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    tailwindcss(),
    tanstackStart({
      // Every page is static: render them at build time so Cloudflare serves plain HTML
      // without invoking the Worker. Pages are found by crawling links from the home page;
      // route discovery is off because it adds `/accompagnement/`, which redirects.
      // `autoSubfolderIndex: false` writes `a-propos.html`, served at `/a-propos` without a
      // trailing-slash redirect.
      prerender: {
        enabled: true,
        crawlLinks: true,
        autoStaticPathsDiscovery: false,
        autoSubfolderIndex: false,
        failOnError: true,
      },
      sitemap: { enabled: true, host: siteUrl },
    }),
    react(),
  ],
  resolve: { tsconfigPaths: true },
  server: { host: "0.0.0.0", port: 3000 },
  preview: { host: "0.0.0.0" },
});
