import Cursor from "@/components/Cursor";
import Particles from "@/components/Particles";
import ScrollProgress from "@/components/ScrollProgress";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Results from "@/components/Results";
import About from "@/components/About";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Particles />
      <div className="dot-grid pointer-events-none fixed inset-0 z-0" />
      <Cursor />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <Services />
        <Process />
        <Results />
        <About />
        <Booking />
      </main>
      <FloatingCTA />
      <Footer />
    </>
  );
}
