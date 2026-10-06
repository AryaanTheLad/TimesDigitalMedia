import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import CtaBand from "@/components/CtaBand";
import { ARTICLES, CATEGORIES, type ArticleCategory } from "@/content/blog/meta";
import { SITE_URL } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbNode, graph, webPageNode, ORG_ID } from "@/lib/schema";

const TITLE = "Blog: Meta, Google & YouTube Ads Guides for Pakistan";
const DESCRIPTION =
  "Practical guides on Facebook ad costs, paying for ads from Pakistan, restricted accounts, ROAS and choosing an agency, from the Times Digital Media team.";

export const metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: "/blog", absoluteTitle: true });

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
];

export default function BlogPage() {
  const categories = Object.keys(CATEGORIES) as ArticleCategory[];
  return (
    <>
      <JsonLd
        data={graph(webPageNode("/blog", TITLE, DESCRIPTION, "CollectionPage"), breadcrumbNode(crumbs), {
          "@type": "Blog",
          "@id": `${SITE_URL}/blog#blog`,
          name: "Times Digital Media Blog",
          url: `${SITE_URL}/blog`,
          publisher: { "@id": ORG_ID },
          blogPost: ARTICLES.map((a) => ({ "@id": `${SITE_URL}/blog/${a.slug}#article` })),
        })}
      />
      <Navbar />
      <main className="flex-1 w-full bg-transparent pt-24">
        <PageHeader
          crumbs={crumbs}
          eyebrow="Blog"
          title="Straight answers about advertising in Pakistan."
          lead="Guides from the team that runs Meta, Google and YouTube campaigns every day: what ads cost, how to pay for them, how to fix problems and how to judge results."
        />
        {categories.map((cat) => {
          const posts = ARTICLES.filter((a) => a.category === cat);
          if (posts.length === 0) return null;
          return (
            <section key={cat} id={cat} className="py-10 md:py-12 border-b border-stone-100 scroll-mt-24">
              <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4">
                  <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-[#09090b]">{CATEGORIES[cat].name}</h2>
                  <p className="mt-2 text-sm text-[#57534E] font-medium">{CATEGORIES[cat].description}</p>
                </div>
                <ul className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                  {posts.map((a) => (
                    <li key={a.slug} className="border-t-2 border-[#09090b] pt-4">
                      <Link href={`/blog/${a.slug}`} className="group block">
                        <h3 className="text-lg font-black tracking-tight text-[#09090b] group-hover:text-[#E8000E] transition-colors leading-snug">{a.title}</h3>
                        <p className="mt-2 text-sm text-[#57534E] font-medium leading-relaxed">{a.description}</p>
                        <p className="mt-3 text-[10px] font-mono font-bold uppercase tracking-wider text-stone-500">{a.readingMinutes} min read</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          );
        })}
        <CtaBand location="blog_index" />
      </main>
      <Footer />
    </>
  );
}
