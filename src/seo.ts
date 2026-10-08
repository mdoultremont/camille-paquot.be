import { siteUrl } from "@/constants";

// Per-page head tags. The root route sets the defaults shared by every page (site name,
// Open Graph image, structured data); child meta with the same name or property wins.
export function pageHead({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = new URL(path, siteUrl).href;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
