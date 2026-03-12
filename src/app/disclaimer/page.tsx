import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Read the legal disclaimers for Pineapple Express, LLC including advertising, health products, and legal advice disclaimers. MA License MD 1306.",
  alternates: { canonical: "https://pineappleexpressma.com/disclaimer" },
  robots: { index: false, follow: true },
};

const sections = [
  {
    title: "General Disclaimer",
    content:
      'Please read this Disclaimer carefully before using pineappleexpressma.com. The terms "Company," "we," "us," and "our" refer to Pineapple Express, LLC. "Site" refers to pineappleexpressma.com. "Home Delivery" refers to cannabis delivery services. "Service" refers to the Site and Home Delivery collectively. By accessing this website you accept these terms. Please also review our Privacy Policy and Terms of Use Agreement. If you do not agree, please discontinue use of this site.',
  },
  {
    title: "Advertising Disclaimer",
    content:
      "Third-party advertisements on this site do not constitute endorsements by Pineapple Express. All cannabis products are for adults 21 years of age or older. Products have not been approved by the Food and Drug Administration (FDA). Cannabis can impair judgment and coordination. Edible effects may be delayed up to 90 minutes. If you believe you are experiencing an emergency, call 911. Massachusetts Cannabis Control Commission License MD 1306. Marijuana Vaporizer Devices have been tested for Vitamin E Acetate and other contaminants, with no adverse findings. WARNING: Vaporizer Devices may contain ingredients harmful to health when inhaled.",
  },
  {
    title: "Health Products Disclaimer",
    content:
      "Products sold on this site have not been evaluated by the Food and Drug Administration and are not intended to diagnose, treat, cure, or prevent any disease or medical condition.",
  },
  {
    title: "Health and Fitness Advice",
    content:
      "Any health-related content on this site is designed for educational purposes only and should not replace consultation with a qualified medical professional. Pineapple Express, LLC is not a licensed medical care provider and has no expertise in diagnosing, examining, or treating medical conditions.",
  },
  {
    title: "No Legal Advice",
    content:
      "Information provided on this site does not constitute legal advice. Pineapple Express, LLC is not a law firm. Users should consult a licensed attorney for legal questions regarding cannabis use and regulations in their jurisdiction.",
  },
];

export default function DisclaimerPage() {
  return (
    <>
      <PageHero title="Disclaimer" />

      <div className="mx-auto max-w-3xl px-6 py-12 md:px-12 md:py-16">
        <div className="space-y-10">
          {sections.map((section, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-8 last:border-b-0"
            >
              <h2 className="text-xl font-black uppercase tracking-wide mb-4">
                {section.title}
              </h2>
              <p className="text-gray-600 font-mono text-sm leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-xs font-mono italic text-gray-500">
          Massachusetts Cannabis Control Commission License MD 1306.
        </p>
      </div>
    </>
  );
}
