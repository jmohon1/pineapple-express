import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import BrandCarousel from "@/components/BrandCarousel";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <>
      <section className="pineapple-bg pb-12 md:pb-16">
        <Hero />
        <CTABanner />
      </section>
      <BrandCarousel />
      <FAQSection />
    </>
  );
}
