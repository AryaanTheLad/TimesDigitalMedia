import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Placeholder from "@/components/Placeholder";
import JsonLd from "@/components/JsonLd";
import { ARTICLES, AUTHOR } from "@/content/blog";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ slug: AUTHOR.slug }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (slug !== AUTHOR.slug) return {};
  return buildMetadata({ title: AUTHOR.name, description: AUTHOR.bio, path: `/blog/author/${AUTHOR.slug}` });
}

export default async function AuthorPage({ params }: PageProps) {
  const { slug } = await params;
  if (slug !== AUTHOR.slug) notFound();
  const path = `/blog/author/${AUTHOR.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: AUTHOR.name, path },
  ];

  return (
    <>
      <JsonLd data={graph(webPageNode(path, AUTHOR.name, AUTHOR.bio, "ProfilePage"), breadcrumbNode(crumbs))} />
      <Navbar />
      <main className="flex-1 w-full bg-transparent pt-24">
        <PageHeader crumbs={crumbs} eyebrow="Author" title={AUTHOR.name} lead={AUTHOR.bio}>
          <Placeholder>[[TODO: add named authors with photo, role, experience and LinkedIn; switch BlogPosting author to Person]]</Placeholder>
        </PageHeader>
        <section className="py-10 md:py-14">
          <div className="max-w-4xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-black tracking-tight text-[#09090b]">How we write</h2>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-[#57534E] font-medium leading-relaxed list-disc pl-5">
                <li>Every guide starts with a short, direct answer.</li>
                <li>Third-party figures are linked to their source and dated.</li>
                <li>Numbers from our own campaigns are labelled and treated as examples, not benchmarks.</li>
                <li>We update guides when platform rules, prices or taxes change, and show the updated date.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-black tracking-tight text-[#09090b]">Articles</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {ARTICLES.map((a) => (
                  <li key={a.slug}>
                    <Link href={`/blog/${a.slug}`} className="text-sm font-bold text-[#09090b] hover:text-[#E8000E] underline decoration-stone-300 underline-offset-4">{a.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
