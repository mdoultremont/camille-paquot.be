import { createFileRoute, redirect } from "@tanstack/react-router";

// The consultations used to live under /accompagnement; keep the old URLs working.
export const Route = createFileRoute("/accompagnement/$")({
  server: {
    handlers: {
      // Redirect before SSR normalizes trailing slashes with a temporary redirect.
      GET: ({ params }) => {
        throw legacyRedirect(params._splat);
      },
    },
  },
  beforeLoad: ({ params }) => {
    throw legacyRedirect(params._splat);
  },
});

function legacyRedirect(splat?: string) {
  const slug = splat?.replace(/\/+$/, "");
  if (!slug) return redirect({ to: "/consultations", statusCode: 301 });
  if (slug === "yoga") return redirect({ to: "/yoga", statusCode: 301 });
  return redirect({ to: "/consultations/$service", params: { service: slug }, statusCode: 301 });
}
