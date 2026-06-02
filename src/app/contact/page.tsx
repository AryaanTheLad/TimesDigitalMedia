import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact Us | Times Digital Media",
  description: "Get in touch with Times Digital Media. Request a free audit session, send campaign inquiries, or reach out directly to scale your brand.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 w-full bg-white pt-20">
        <Contact />
      </main>

      <Footer />
    </>
  );
}
