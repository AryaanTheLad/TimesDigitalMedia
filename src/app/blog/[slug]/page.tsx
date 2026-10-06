import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CtaBand from "@/components/CtaBand";
import { SourcesList } from "@/components/ArticleParts";
import { RelatedArticles, RelatedServices } from "@/components/RelatedWork";
import { ARTICLES, ARTICLE_BODIES, AUTHOR, CATEGORIES, getArticleMeta } from "@/content/blog";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { articleNode, breadcrumbNode, graph, webPageNode } from "@/lib/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticleMeta(slug);
  if (!a) return {};
  return buildMetadata({
    title: a.seoTitle,
    description: a.description,
    path: `/blog/${a.slug}`,
    type: "article",
    publishedTime: a.datePublished,
    modifiedTime: a.dateModified,
  });
}

const fmt = (d: string) => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const meta = getArticleMeta(slug);
  const body = ARTICLE_BODIES[slug];
  if (!meta || !body) notFound();

  const Body = body.default;
  const path = `/blog/${meta.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: meta.title, path },
  ];
  const related = ARTICLES.filter((a) => a.slug !== meta.slug && (a.category === meta.category || a.services.some((s) => meta.services.includes(s))))
    .slice(0, 3)
    .map((a) => a.slug);

  return (
    <>
      <JsonLd
        data={graph(
          webPageNode(path, meta.title, meta.description),
          breadcrumbNode(crumbs),
          articleNode({
            slug: meta.slug,
            title: meta.title,
            description: meta.description,
            datePublished: meta.datePublished,
            dateModified: meta.dateModified,
            image: absoluteUrl(`${path}/opengraph-image`),
          }),
        )}
      />
      <Navbar />
      <main className="flex-1 w-full bg-transparent pt-24">
        <article>
          <header className="pt-8 pb-10 border-b border-stone-200/70">
            <div className="max-w-3xl mx-auto px-6 md:px-12">
              <Breadcrumbs crumbs={crumbs} />
              <p className="mt-8 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#E8000E]">
                <Link href={`/blog#${meta.category}`} className="hover:underline">{CATEGORIES[meta.category].name}</Link>
              </p>
              <h1 className="mt-3 text-4xl sm:text-5xl font-black font-display tracking-tight text-[#09090b] leading-[1.08]">{meta.title}</h1>
              <p className="mt-5 text-base sm:text-lg text-[#57534E] font-medium leading-relaxed">{meta.description}</p>
              <p className="mt-6 text-xs text-stone-500 font-medium">
                By <Link href={`/blog/author/${AUTHOR.slug}`} className="font-bold text-[#09090b] hover:text-[#E8000E]">{AUTHOR.name}</Link>
                {" · "}Published <time dateTime={meta.datePublished}>{fmt(meta.datePublished)}</time>
                {meta.dateModified !== meta.datePublished && (
                  <> · Updated <time dateTime={meta.dateModified}>{fmt(meta.dateModified)}</time></>
                )}
                {" · "}{meta.readingMinutes} min read
              </p>
            </div>
          </header>

          <div className="max-w-3xl mx-auto px-6 md:px-12 py-10">
            <div className="article-prose">
              <Body />
            </div>

            <aside className="mt-12 rounded-2xl bg-stone-50 border border-stone-200 p-5 text-xs text-[#57534E] font-medium leading-relaxed">
              <strong className="text-[#09090b]">Editorial note:</strong> Written by the team that runs campaigns at Times Digital Media.
              Figures from third parties are linked and dated below; figures from our own campaigns are labelled as such and are
              examples, not benchmarks. Platform rules and taxes change, so check current details before acting. Spotted something
              outdated? Email us and we&apos;ll update it.
            </aside>

            <SourcesList sources={body.sources} />
          </div>
        </article>

        <RelatedServices slugs={meta.services} heading="Related services" />
        <RelatedArticles slugs={related} heading="Keep reading" />
        <CtaBand location={`blog_${meta.slug}`} />
      </main>
      <Footer />
    </>
  );
}
