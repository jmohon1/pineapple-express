import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Pineapple Express privacy policy to learn how we collect, use, and protect your personal information. MA License MD 1306.",
  alternates: { canonical: "https://pineappleexpressma.com/privacy-policy" },
  robots: { index: false, follow: true },
};

interface Subsection {
  subtitle?: string;
  content: string;
}

interface Section {
  title: string;
  subsections: Subsection[];
}

const romanNumerals = [
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
];

const sections: Section[] = [
  {
    title: "INFORMATION WE COLLECT",
    subsections: [
      {
        subtitle: "Information collected via Technology",
        content:
          "We automatically collect certain non-personal information when you visit our Site, including your browser type, operating system, IP address, device information, and browsing patterns through cookies and similar technologies.",
      },
      {
        subtitle: "Information you provide us by registering for an account",
        content:
          "When you create an account or place an order, we collect personal information including your name, email address, phone number, delivery address, and date of birth to verify you are 21 years of age or older.",
      },
      {
        subtitle: "Children's Privacy",
        content:
          "Our Site and Service are not directed to persons under 21 years of age. We do not knowingly collect personal information from anyone under 21. If we learn we have collected personal information from someone under 21, we will take steps to delete that information.",
      },
    ],
  },
  {
    title: "HOW WE USE AND SHARE INFORMATION",
    subsections: [
      {
        content:
          "Personal information is used for order fulfillment, customer communications, identity verification, and improving our services. Non-personal information helps us analyze site usage and optimize your experience. We do not sell your personal information to third parties. We may share information with service providers who assist in our operations, law enforcement when required by law, or in connection with a business transfer.",
      },
    ],
  },
  {
    title: "HOW WE PROTECT INFORMATION",
    subsections: [
      {
        content:
          "We employ industry-standard security measures including encryption, secure servers, and access controls to protect your personal data. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.",
      },
    ],
  },
  {
    title: "YOUR RIGHTS",
    subsections: [
      {
        content:
          "You may opt out of marketing communications at any time by using the unsubscribe link in our emails or contacting us directly. You may also request access to, correction of, or deletion of your personal information by contacting us at kaily@pineappleexpressma.com.",
      },
    ],
  },
  {
    title: "LINKS TO OTHER WEBSITES",
    subsections: [
      {
        content:
          "Our Site may contain links to third-party websites. This privacy policy applies only to Pineapple Express and we are not responsible for the privacy practices of other sites. We encourage you to review the privacy policies of any third-party sites you visit.",
      },
    ],
  },
  {
    title: "CHANGES TO OUR PRIVACY POLICY",
    subsections: [
      {
        content:
          "We reserve the right to modify this policy at any time. Significant changes will be communicated with at least 30 days notice via email or a prominent notice on our Site. Continued use of our services after changes constitutes acceptance of the updated policy.",
      },
    ],
  },
  {
    title: "CONTACT US",
    subsections: [
      {
        content:
          "For privacy-related inquiries, contact us at kaily@pineappleexpressma.com or call (413) 277-0277.",
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" />

      <div className="mx-auto max-w-3xl px-6 py-12 md:px-12 md:py-16">
        {/* Intro */}
        <div className="mb-10 pb-8 border-b border-gray-200">
          <p className="text-gray-600 font-mono text-sm leading-relaxed mb-4">
            Pineapple Express, LLC (&ldquo;Company,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting
            your privacy. This Privacy Policy explains how we collect, use, and
            share information when you use pineappleexpressma.com (the
            &ldquo;Site&rdquo;) and our Home Delivery services (collectively,
            the &ldquo;Service&rdquo;).
          </p>
          <p className="text-gray-600 font-mono text-sm leading-relaxed">
            You must be 21 years of age or older to use our Service. By using
            our Service, you consent to the collection and use of information as
            described in this policy.
          </p>
        </div>

        <div className="space-y-10">
          {sections.map((section, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-8 last:border-b-0"
            >
              <h2 className="text-xl font-black uppercase tracking-wide mb-6">
                {romanNumerals[index]}. {section.title}
              </h2>
              <div className="space-y-4">
                {section.subsections.map((sub, subIndex) => (
                  <div key={subIndex}>
                    {sub.subtitle && (
                      <h3 className="text-sm font-bold uppercase tracking-wider mb-2">
                        {sub.subtitle}
                      </h3>
                    )}
                    <p className="text-gray-600 font-mono text-sm leading-relaxed">
                      {sub.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-xs font-mono italic text-gray-500">
          Massachusetts Cannabis Control Commission License MD 1306. Last
          updated: 2025.
        </p>
      </div>
    </>
  );
}
