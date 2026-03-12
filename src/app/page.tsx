import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import BrandCarousel from "@/components/BrandCarousel";
import FAQSection from "@/components/FAQSection";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = {
  alternates: { canonical: "https://pineappleexpressma.com" },
};

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="pineapple-bg pb-12 md:pb-16">
        <Hero />
        <CTABanner />
      </section>
      <BrandCarousel />
      <FAQSection />
    </>
  );
}
