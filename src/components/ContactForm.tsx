"use client";

import { useState } from "react";
import { sendContactEmail } from "@/app/actions/email";

export default function ContactForm() {
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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-bold uppercase tracking-wider mb-2">
          Your Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          className="w-full border-2 border-black bg-transparent px-4 py-3 text-sm font-mono outline-none placeholder:text-gray-400"
          placeholder="Full name"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-bold uppercase tracking-wider mb-2">
          Your Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          className="w-full border-2 border-black bg-transparent px-4 py-3 text-sm font-mono outline-none placeholder:text-gray-400"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="contact-subject" className="block text-sm font-bold uppercase tracking-wider mb-2">
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          required
          className="w-full border-2 border-black bg-transparent px-4 py-3 text-sm font-mono outline-none placeholder:text-gray-400"
          placeholder="Subject"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-bold uppercase tracking-wider mb-2">
          Your Message (optional)
        </label>
        <textarea
          id="contact-message"
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
  );
}
