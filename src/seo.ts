import { siteUrl } from "@/constants";

export function pageHead({
  title,
  description,
  path,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}) {
  const url = new URL(path, siteUrl).href;
  return {
    meta: [
      { title },
      ...(noindex ? [{ name: "robots", content: "noindex, nofollow" }] : []),
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
    ],
    links: noindex ? [] : [{ rel: "canonical", href: url }],
  };
}
