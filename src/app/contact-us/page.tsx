"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import { sendContactEmail } from "@/app/actions/email";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const result = await sendContactEmail(formData);

    if (result.success) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
      setErrorMsg(result.error || "Something went wrong.");
    }
  }

  return (
    <>
      <PageHero
        title="Feel Free To Contact Us Anytime"
        subtitle="Submit the form to send us a direct email and we will get back to you within 24 hours."
      />

      <div className="mx-auto max-w-5xl px-6 py-12 md:px-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-[1fr_300px]">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider mb-2">
                Your Name
              </label>
              <input
                name="name"
                type="text"
                required
                className="w-full border-2 border-black bg-transparent px-4 py-3 text-sm font-mono outline-none placeholder:text-gray-400"
                placeholder="Full name"
              />
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-wider mb-2">
                Your Email
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full border-2 border-black bg-transparent px-4 py-3 text-sm font-mono outline-none placeholder:text-gray-400"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-wider mb-2">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                required
                className="w-full border-2 border-black bg-transparent px-4 py-3 text-sm font-mono outline-none placeholder:text-gray-400"
                placeholder="Subject"
              />
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-wider mb-2">
                Your Message (optional)
              </label>
              <textarea
                name="message"
                rows={6}
                className="w-full border-2 border-black bg-transparent px-4 py-3 text-sm font-mono outline-none placeholder:text-gray-400 resize-none"
                placeholder="Type your message here..."
              />
            </div>

            {status === "sent" && (
              <p className="text-green-700 font-mono text-sm font-bold">
                Message sent successfully! We&apos;ll get back to you within 24 hours.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 font-mono text-sm font-bold">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center rounded-full border-2 border-black px-10 py-4 text-sm font-bold uppercase tracking-widest text-black hover:bg-black hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Submit"}
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
