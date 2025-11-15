import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import DestinationsCarousel from "@/components/destinations-carousel";
import About from "@/components/about";
import Tours from "@/components/tours";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />

      <About />
      <Tours />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
