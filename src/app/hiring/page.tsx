import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import HiringForm from "@/components/HiringForm";

export const metadata: Metadata = {
  title: "Join Our Team — Careers at Pineapple Express",
  description:
    "Apply to join the Pineapple Express team. We're hiring delivery drivers and cannabis professionals across Massachusetts.",
  alternates: { canonical: "https://pineappleexpressma.com/hiring" },
  openGraph: {
    title: "Join Our Team — Careers at Pineapple Express",
    description:
      "Apply to join the Pineapple Express team. We're hiring delivery drivers and cannabis professionals across Massachusetts.",
    url: "https://pineappleexpressma.com/hiring",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join Our Team — Careers at Pineapple Express",
    description:
      "Apply to join the Pineapple Express team. We're hiring delivery drivers and cannabis professionals across Massachusetts.",
  },
};

export default function HiringPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Careers" },
  ];

  return (
    <>
      <PageHero
        title="Join Our Team"
        subtitle="We're always looking for passionate people to join the Pineapple Express family."
      />

      <div className="mx-auto max-w-3xl px-6 py-12 md:px-12 md:py-16">
        <Breadcrumbs items={breadcrumbs} />
        <HiringForm />
      </div>
    </>
  );
}
