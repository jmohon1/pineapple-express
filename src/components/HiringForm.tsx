"use client";

import { useState } from "react";
import { sendHiringEmail } from "@/app/actions/email";

const availabilityOptions = [
  "Part Time",
  "Full Time",
  "Nights",
  "Weekends",
  "Weekdays",
  "Holidays",
];

export default function HiringForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const checkedAvailability = availabilityOptions.filter(
      (_, i) => (form.elements.namedItem(`availability-${i}`) as HTMLInputElement)?.checked
    );

    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      town: (form.elements.namedItem("town") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      availability: checkedAvailability,
      drivingExperience: (form.elements.namedItem("drivingExperience") as HTMLTextAreaElement).value,
      cannabisExperience: (form.elements.namedItem("cannabisExperience") as HTMLTextAreaElement).value,
      microsoftOffice: (form.elements.namedItem("microsoftOffice") as HTMLTextAreaElement).value,
      managementExperience: (form.elements.namedItem("managementExperience") as HTMLTextAreaElement).value,
      attentionToDetail: (form.elements.namedItem("attentionToDetail") as HTMLTextAreaElement).value,
      typeOfWork: (form.elements.namedItem("typeOfWork") as HTMLTextAreaElement).value,
      coverLetter: (form.elements.namedItem("coverLetter") as HTMLTextAreaElement).value,
    };

    const result = await sendHiringEmail(formData);

    if (result.success) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
      setErrorMsg(result.error || "Something went wrong.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Name */}
      <div>
        <label htmlFor="hiring-name" className="block text-sm font-bold uppercase tracking-wider mb-2">
          Your Name
        </label>
        <input
          id="hiring-name"
          name="name"
          type="text"
          required
          className="w-full border-2 border-black bg-transparent px-4 py-3 text-sm font-mono outline-none placeholder:text-gray-400"
          placeholder="Your full name"
        />
      </div>

      {/* Town */}
      <div>
        <label htmlFor="hiring-town" className="block text-sm font-bold uppercase tracking-wider mb-2">
          Town You Live In
        </label>
        <input
          id="hiring-town"
          name="town"
          type="text"
          required
          className="w-full border-2 border-black bg-transparent px-4 py-3 text-sm font-mono outline-none placeholder:text-gray-400"
          placeholder="Your town"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="hiring-email" className="block text-sm font-bold uppercase tracking-wider mb-2">
          Your Email
        </label>
        <input
          id="hiring-email"
          name="email"
          type="email"
          required
          className="w-full border-2 border-black bg-transparent px-4 py-3 text-sm font-mono outline-none placeholder:text-gray-400"
          placeholder="your@email.com"
        />
      </div>

      {/* Availability */}
      <div>
        <label className="block text-sm font-bold uppercase tracking-wider mb-4">
          Please Describe Your Availability
        </label>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {availabilityOptions.map((option, i) => (
            <label
              key={option}
              className="flex items-center gap-2 text-sm font-mono cursor-pointer"
            >
              <input
                type="checkbox"
                name={`availability-${i}`}
                className="h-4 w-4 accent-black"
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      {/* Driving Experience */}
      <div>
        <label htmlFor="hiring-driving" className="block text-sm font-bold uppercase tracking-wider mb-2">
          Please Describe Your Driving Experience
        </label>
        <textarea
          id="hiring-driving"
          name="drivingExperience"
          rows={3}
          className="w-full border-2 border-black bg-transparent px-4 py-3 text-sm font-mono outline-none placeholder:text-gray-400 resize-none"
          placeholder="Describe your driving experience..."
        />
      </div>

      {/* Cannabis Experience */}
      <div>
        <label htmlFor="hiring-cannabis" className="block text-sm font-bold uppercase tracking-wider mb-2">
          Please Describe Your Cannabis Industry Experience
        </label>
        <textarea
          id="hiring-cannabis"
          name="cannabisExperience"
          rows={3}
          className="w-full border-2 border-black bg-transparent px-4 py-3 text-sm font-mono outline-none placeholder:text-gray-400 resize-none"
          placeholder="Describe any cannabis industry experience..."
        />
      </div>

      {/* Microsoft Office */}
      <div>
        <label htmlFor="hiring-office" className="block text-sm font-bold uppercase tracking-wider mb-2">
          Please Describe Your Experience With Microsoft Office Suite
        </label>
        <textarea
          id="hiring-office"
          name="microsoftOffice"
          rows={3}
          className="w-full border-2 border-black bg-transparent px-4 py-3 text-sm font-mono outline-none placeholder:text-gray-400 resize-none"
          placeholder="Describe your proficiency level..."
        />
      </div>

      {/* Management Experience */}
      <div>
        <label htmlFor="hiring-management" className="block text-sm font-bold uppercase tracking-wider mb-2">
          Please Describe Your Management Or Team Leader Experience
        </label>
        <textarea
          id="hiring-management"
          name="managementExperience"
          rows={3}
          className="w-full border-2 border-black bg-transparent px-4 py-3 text-sm font-mono outline-none placeholder:text-gray-400 resize-none"
          placeholder="Describe any management experience..."
        />
      </div>

      {/* Attention to Detail */}
      <div>
        <label htmlFor="hiring-detail" className="block text-sm font-bold uppercase tracking-wider mb-2">
          Please Describe Your Attention To Detail
        </label>
        <textarea
          id="hiring-detail"
          name="attentionToDetail"
          rows={3}
          className="w-full border-2 border-black bg-transparent px-4 py-3 text-sm font-mono outline-none placeholder:text-gray-400 resize-none"
          placeholder="Describe your attention to detail..."
        />
      </div>

      {/* Type of Work Enjoyed */}
      <div>
        <label htmlFor="hiring-work-type" className="block text-sm font-bold uppercase tracking-wider mb-2">
          Please Describe The Type Of Work You Enjoy
        </label>
        <textarea
          id="hiring-work-type"
          name="typeOfWork"
          rows={3}
          className="w-full border-2 border-black bg-transparent px-4 py-3 text-sm font-mono outline-none placeholder:text-gray-400 resize-none"
          placeholder="Describe the type of work you enjoy..."
        />
      </div>

      {/* Cover Letter */}
      <div>
        <label htmlFor="hiring-cover" className="block text-sm font-bold uppercase tracking-wider mb-2">
          Cover Letter / Comments
        </label>
        <textarea
          id="hiring-cover"
          name="coverLetter"
          rows={5}
          className="w-full border-2 border-black bg-transparent px-4 py-3 text-sm font-mono outline-none placeholder:text-gray-400 resize-none"
          placeholder="Tell us about yourself..."
        />
      </div>

      {status === "sent" && (
        <p className="text-green-700 font-mono text-sm font-bold">
          Application submitted successfully! We&apos;ll review it and get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 font-mono text-sm font-bold">{errorMsg}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center rounded-full border-2 border-black px-10 py-4 text-sm font-bold uppercase tracking-widest text-black hover:bg-black hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
