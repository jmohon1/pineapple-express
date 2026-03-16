import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import HiringForm from "@/components/HiringForm";

export const metadata: Metadata = {
  title: "Join Our Team",
  description:
    "Apply to join the Pineapple Express family. We're always looking for passionate people.",
  alternates: { canonical: "https://pineappleexpressma.com/hiring" },
};

export default function HiringPage() {
  return (
    <>
      <PageHero
        title="Join Our Team"
        subtitle="We're always looking for passionate people to join the Pineapple Express family."
      />

      <div className="mx-auto max-w-3xl px-6 py-12 md:px-12 md:py-16">
        <HiringForm />
      </div>
    </>
  );
}
