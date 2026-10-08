import { siteUrl } from "@/constants";

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
