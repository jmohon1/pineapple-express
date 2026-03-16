import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Pineapple Express. Submit the form to send us a direct email and we will get back to you within 24 hours.",
  alternates: { canonical: "https://pineappleexpressma.com/contact-us" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Feel Free To Contact Us Anytime"
        subtitle="Submit the form to send us a direct email and we will get back to you within 24 hours."
      />

      <div className="mx-auto max-w-5xl px-6 py-12 md:px-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-[1fr_300px]">
          <ContactForm />

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-black uppercase tracking-wide mb-4">
                Get In Touch
              </h2>
              <div className="space-y-3 font-mono text-sm">
                <p>
                  <a
                    href="mailto:kaily@pineappleexpressma.com"
                    className="hover:opacity-70 transition-opacity"
                  >
                    kaily@pineappleexpressma.com
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+14132770277"
                    className="hover:opacity-70 transition-opacity"
                  >
                    (413) 277-0277
                  </a>
                </p>
                <p>
                  <span className="font-bold">License:</span> MD1306
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
