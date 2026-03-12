import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms of Use Agreement",
  description:
    "Read the Pineapple Express terms of use agreement governing your use of our website and cannabis delivery services. MA License MD 1306.",
  alternates: { canonical: "https://pineappleexpressma.com/terms-and-conditions" },
  robots: { index: false, follow: true },
};

const sections = [
  {
    title: "TERMS OF USE AGREEMENT",
    content:
      'By accessing this website and using our services, you ("User") agree to be bound by these Terms and Conditions. The terms "Company," "we," and "us" refer to Pineapple Express, LLC. "Site" refers to pineappleexpressma.com. "Home Delivery" refers to cannabis delivery services. "Service" refers to the Site and Home Delivery collectively.',
  },
  {
    title: "PRIVACY POLICY",
    content:
      "Your privacy is important to us. Please review our separate Privacy Policy, which also governs your visit to our Site, for details on how we collect, use, and protect your personal information.",
  },
  {
    title: "ABOUT THE SERVICE",
    content:
      "Our platform enables you to browse cannabis products, place delivery orders, access educational content, and manage your account with Pineapple Express.",
  },
  {
    title: "REGISTRATION; RULES FOR USER CONDUCT AND USE OF THE SERVICE",
    content:
      "You must be 21 years of age or older to use our services. You are responsible for maintaining the confidentiality of your account credentials and ensuring all delivery addresses comply with Massachusetts regulations. You agree to provide accurate and complete registration information.",
  },
  {
    title: "USE RESTRICTIONS",
    content:
      "You may not use our platform for any commercial purpose, data harvesting, automated scraping, or any unlawful activity. All content on this site is protected by intellectual property laws. You may not modify, copy, distribute, transmit, display, or create derivative works from our content.",
  },
  {
    title: "POSTING AND CONDUCT RESTRICTIONS",
    content:
      "You are responsible for any content you post to the Service. You agree not to post content that is unlawful, defamatory, threatening, abusive, or invasive of privacy. The Company reserves the right to remove any content at its sole discretion.",
  },
  {
    title: "ONLINE CONTENT DISCLAIMER",
    content:
      "Opinions, advice, statements, offers, or other information made available through the Service are those of their respective authors and not of Pineapple Express. Reliance upon such information is at your own risk.",
  },
  {
    title: "LINKS TO OTHER SITES AND/OR MATERIALS",
    content:
      "The Service may contain links to third-party websites or resources. You acknowledge that the Company is not responsible for the availability of such external sites or resources, and does not endorse any content on those sites.",
  },
  {
    title: "AVAILABILITY, ERRORS AND INACCURACIES",
    content:
      "We are constantly updating our offerings. The Service may contain errors, inaccuracies, or omissions related to product descriptions, pricing, promotions, and availability. We reserve the right to correct any errors and to update information at any time.",
  },
  {
    title: "OFFERS AND PRICING",
    content:
      "Product prices are subject to change. All prices displayed exclude applicable taxes unless otherwise noted. Promotional offers may have additional terms and conditions.",
  },
  {
    title: "CANCELLATION POLICY",
    content:
      "Orders may be cancelled prior to dispatch. Once a delivery driver has departed with your order, cancellations are no longer available.",
  },
  {
    title: "REFUND POLICY",
    content:
      "Due to the nature of cannabis products, we do not offer refunds on purchases. If you experience an issue with your order, please contact our customer service team.",
  },
  {
    title: "COPYRIGHT COMPLAINTS AND COPYRIGHT AGENT",
    content:
      "We respect the intellectual property rights of others. If you believe that your copyrighted work has been copied in a way that constitutes infringement, please contact our designated copyright agent with a detailed description.",
  },
  {
    title: "LICENSE GRANT",
    content:
      "By posting any content to the Service, you grant the Company a nonexclusive, worldwide, royalty-free, perpetual license to use, display, reproduce, and distribute such content in connection with the Service.",
  },
  {
    title: "INTELLECTUAL PROPERTY",
    content:
      "The Service and its original content, features, and functionality are owned by Pineapple Express, LLC and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.",
  },
  {
    title: "EMAIL MAY NOT BE USED TO PROVIDE NOTICE",
    content:
      "Communications made through the Service's email or messaging system will not constitute legal notice to the Company in any situation where notice to the Company is required by contract or any law or regulation.",
  },
  {
    title: "USER CONSENT TO RECEIVE COMMUNICATIONS",
    content:
      "By creating an account, you consent to receive electronic communications from the Company (e.g., via email or push notification). These communications may include operational notices and promotional messages. You may opt out of promotional communications.",
  },
  {
    title: "NO WARRANTY",
    content:
      "Products and services are provided as-is without any warranties, express or implied. We disclaim all warranties to the fullest extent permitted by law, including warranties of merchantability, fitness for a particular purpose, and non-infringement.",
  },
  {
    title: "LIMITATION OF LIABILITY",
    content:
      "Pineapple Express shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services, even if the Company has been advised of the possibility of such damages.",
  },
  {
    title: "MODIFICATION OF TERMS OF USE",
    content:
      "The Company can amend these Terms of Use at any time. Significant changes will be communicated with at least 30 days notice. Continued use after changes constitutes acceptance of the new terms.",
  },
  {
    title: "GENERAL TERMS",
    content:
      "These terms are governed by the laws of the Commonwealth of Massachusetts. If any provision is found to be invalid, the remaining provisions shall remain in full force and effect. Our failure to enforce any right shall not constitute a waiver of such right.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Use Agreement" />

      <div className="mx-auto max-w-3xl px-6 py-12 md:px-12 md:py-16">
        <div className="space-y-10">
          {sections.map((section, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-8 last:border-b-0"
            >
              <h2 className="text-xl font-black uppercase tracking-wide mb-4">
                {index + 1}. {section.title}
              </h2>
              <p className="text-gray-600 font-mono text-sm leading-relaxed">
                {section.content}
              </p>
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
