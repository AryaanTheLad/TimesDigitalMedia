import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";

export const metadata = {
  title: "About Us | Times Digital Media",
  description: "Learn about Times Digital Media, Pakistan's premier creative digital marketing and advertising agency.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 w-full bg-transparent pt-20">
        <About />
      </main>

      <Footer />
    </>
  );
}
