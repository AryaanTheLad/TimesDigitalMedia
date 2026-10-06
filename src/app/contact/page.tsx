import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";

const TITLE = "Contact Times Digital Media, Lahore";
const DESCRIPTION =
  "Talk to Times Digital Media about Meta, Google or YouTube ads, content or advertising on our media network. Phone and WhatsApp +92 329 8223036, or send an inquiry.";

export const metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: "/contact" });

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={graph(webPageNode("/contact", TITLE, DESCRIPTION, "ContactPage"), breadcrumbNode(crumbs))} />
      <Navbar />
      <main className="flex-1 w-full bg-transparent pt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-6">
          <Breadcrumbs crumbs={crumbs} />
        </div>
        {/* useSearchParams (package pre-selection) needs a Suspense boundary for static rendering */}
        <Suspense>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
