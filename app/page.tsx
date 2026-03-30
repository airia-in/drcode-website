import Hero from "@/components/hero";
import WhatWeDo from "@/components/what-we-do";
import HowWeWork from "@/components/how-we-work";
import WhyDrCode from "@/components/why-drcode";
import About from "@/components/about";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatWeDo />
      <HowWeWork />
      <WhyDrCode />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
