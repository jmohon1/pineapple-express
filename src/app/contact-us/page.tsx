"use client";

import PageHero from "@/components/PageHero";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Feel Free To Contact Us Anytime"
        subtitle="Submit the form to send us a direct email and we will get back to you within 24 hours."
      />

      <div className="mx-auto max-w-5xl px-6 py-12 md:px-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-[1fr_300px]">
          {/* Contact Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider mb-2">
                Your Name
              </label>
              <input
                type="text"
                className="w-full border-2 border-black bg-transparent px-4 py-3 text-sm font-mono outline-none placeholder:text-gray-400"
                placeholder="Full name"
              />
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-wider mb-2">
                Your Email
              </label>
              <input
                type="email"
                className="w-full border-2 border-black bg-transparent px-4 py-3 text-sm font-mono outline-none placeholder:text-gray-400"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-wider mb-2">
                Subject
              </label>
              <input
                type="text"
                className="w-full border-2 border-black bg-transparent px-4 py-3 text-sm font-mono outline-none placeholder:text-gray-400"
                placeholder="Subject"
              />
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-wider mb-2">
                Your Message (optional)
              </label>
              <textarea
                rows={6}
                className="w-full border-2 border-black bg-transparent px-4 py-3 text-sm font-mono outline-none placeholder:text-gray-400 resize-none"
                placeholder="Type your message here..."
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full border-2 border-black px-10 py-4 text-sm font-bold uppercase tracking-widest text-black hover:bg-black hover:text-white transition-colors"
            >
              Submit
            </button>
          </form>

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
