import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { SITE_URL } from "@/data/site";
import { CASE_STUDIES } from "@/data/caseStudies";

const TITLE = "Case Studies & Campaign Results";
const DESCRIPTION =
  "Campaigns for Zameen.com, Stitch, Ibadat University, Flight Education Consultants, Star Shah and more: the brief, our approach and the creative we ran.";

export const metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: "/portfolio" });

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Case Studies", path: "/portfolio" },
];

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageNode("/portfolio", TITLE, DESCRIPTION, "CollectionPage"),
          breadcrumbNode(crumbs),
          {
            "@type": "ItemList",
            itemListElement: CASE_STUDIES.map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `${SITE_URL}/portfolio/${c.id}`,
              name: c.name,
            })),
          },
        )}
      />
      <Navbar />
      <main className="flex-1 w-full bg-transparent pt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-6">
          <Breadcrumbs crumbs={crumbs} />
        </div>
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
