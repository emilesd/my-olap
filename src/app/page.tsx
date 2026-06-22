import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Features from "@/components/Features";
import ValueProps from "@/components/ValueProps";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import Pricing from "@/components/Pricing";
import Demo from "@/components/Demo";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <ValueProps />
        <HowItWorks />
        <UseCases />
        <Pricing />
        <Demo />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
