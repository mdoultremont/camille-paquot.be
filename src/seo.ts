import { siteUrl } from "@/constants";

type PageHead = {
  title: string;
  description: string;
  path: string;
  structuredData?: Record<string, unknown>;
} & (
  | { noindex?: false; ogImage: { title: string; subtitle: string } }
  | { noindex: true; ogImage?: never }
);

export function pageHead({ title, description, path, noindex, ogImage, structuredData }: PageHead) {
  const url = new URL(path, siteUrl).href;
  const imageUrl = new URL(
    `/og/${path.split("/").filter(Boolean).join("-") || "home"}.png`,
    siteUrl,
  );
  imageUrl.search = new URLSearchParams(ogImage).toString();
  return {
    meta: [
      { title },
      ...(noindex ? [{ name: "robots", content: "noindex, nofollow" }] : []),
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      ...(ogImage
        ? [
            { property: "og:image", content: imageUrl.href },
            { property: "og:image:width", content: "1200" },
            { property: "og:image:height", content: "630" },
            { property: "og:image:alt", content: `${ogImage.title} · ${ogImage.subtitle}` },
            { name: "twitter:card", content: "summary_large_image" },
          ]
        : []),
      ...(structuredData ? [{ "script:ld+json": structuredData }] : []),
    ],
    links: noindex ? [] : [{ rel: "canonical", href: url }],
  };
}
