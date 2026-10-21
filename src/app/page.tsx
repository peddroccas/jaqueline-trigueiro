import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { JsonLd } from "@/components/sections/JsonLd";
import { Method } from "@/components/sections/Method";
import { Results } from "@/components/sections/Results";
import { Services } from "@/components/sections/Services";
import { Space } from "@/components/sections/Space";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <Services />
        <Results />
        <About />
        <Method />
        <Space />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
