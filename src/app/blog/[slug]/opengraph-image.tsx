import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { ARTICLES, CATEGORIES, getArticleMeta } from "@/content/blog/meta";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Times Digital Media guide";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticleMeta(slug);
  return renderOgImage({ eyebrow: a ? `Guide · ${CATEGORIES[a.category].name}` : "Guide", title: a?.title ?? "Times Digital Media" });
}
