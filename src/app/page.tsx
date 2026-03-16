import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";
import { faqItems } from "@/data/faq";

const BrandCarousel = dynamic(() => import("@/components/BrandCarousel"));

export const metadata: Metadata = {
  alternates: { canonical: "https://pineappleexpressma.com" },
  openGraph: {
    title: "Pineapple Express | Premium Massachusetts Cannabis Delivery",
    description:
      "Licensed Massachusetts cannabis delivery. Shop premium flower, edibles, concentrates and more delivered statewide.",
    url: "https://pineappleexpressma.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pineapple Express | Premium Massachusetts Cannabis Delivery",
    description:
      "Licensed Massachusetts cannabis delivery. Shop premium flower, edibles, concentrates and more delivered statewide.",
  },
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
