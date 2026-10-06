import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { SERVICES, getService } from "@/data/services";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Times Digital Media service";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  return renderOgImage({ eyebrow: s?.shortName ?? "Service", title: s?.h1 ?? "Times Digital Media" });
}
