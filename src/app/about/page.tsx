import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import CtaBand from "@/components/CtaBand";
import { ENTITY } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";

const TITLE = "About Times Digital Media, Lahore";
const DESCRIPTION =
  "Times Digital Media is a Lahore performance marketing agency for Meta, Google and YouTube ads and content, with its own media network including Times of Islamabad.";

export const metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: "/about" });

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={graph(webPageNode("/about", TITLE, DESCRIPTION, "AboutPage"), breadcrumbNode(crumbs))} />
      <Navbar />
      <main className="flex-1 w-full bg-transparent pt-24">
        <PageHeader crumbs={crumbs} eyebrow="Who we are" title="About Times Digital Media" lead={ENTITY.description} />
        <About />
        <CtaBand location="about" />
      </main>
      <Footer />
    </>
  );
}
