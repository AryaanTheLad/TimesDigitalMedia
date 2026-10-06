import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { CASE_STUDIES, getCaseStudy } from "@/data/caseStudies";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Times Digital Media case study";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ id: c.id }));
}

export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const c = getCaseStudy(id);
  return renderOgImage({ eyebrow: `Case study · ${c?.category ?? ""}`, title: `${c?.name ?? "Case study"}: ${c?.subtitle ?? ""}` });
}
