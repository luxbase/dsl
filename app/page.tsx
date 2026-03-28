import { Header }       from "@/components/layout/Header";
import { Footer }       from "@/components/layout/Footer";
import { Hero }         from "@/components/sections/Hero";
import { Services }     from "@/components/sections/Services";
import { Gallery }      from "@/components/sections/Gallery";
import { About }        from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection }   from "@/components/sections/CTASection";
import { Contact }      from "@/components/sections/Contact";
import { FloatingCTA }  from "@/components/ui/FloatingCTA";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Testimonials />
        <CTASection />
        <Contact />
      </main>

      <Footer />
      <FloatingCTA />
    </>
  );
}
