"use client";

import PageHero from "@/components/PageHero";

const availabilityOptions = [
  "Part Time",
  "Full Time",
  "Nights",
  "Weekends",
  "Weekdays",
  "Holidays",
];

export default function HiringPage() {
  return (
    <>
      <PageHero
        title="Join Our Team"
        subtitle="We're always looking for passionate people to join the Pineapple Express family."
      />

      <div className="mx-auto max-w-3xl px-6 py-12 md:px-12 md:py-16">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-8"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-2">
              Your Name
            </label>
            <input
              type="text"
              className="w-full border-2 border-black bg-transparent px-4 py-3 text-sm font-mono outline-none placeholder:text-gray-400"
              placeholder="Your full name"
            />
          </div>

          {/* Town */}
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-2">
              Town You Live In
            </label>
            <input
              type="text"
              className="w-full border-2 border-black bg-transparent px-4 py-3 text-sm font-mono outline-none placeholder:text-gray-400"
              placeholder="Your town"
            />
          </div>

          {/* Email */}
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

          {/* Availability */}
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-4">
              Please Describe Your Availability
            </label>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {availabilityOptions.map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-2 text-sm font-mono cursor-pointer"
                >
                  <input type="checkbox" className="h-4 w-4 accent-black" />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* Driving Experience */}
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-2">
              Please Describe Your Driving Experience
            </label>
            <textarea
              rows={3}
              className="w-full border-2 border-black bg-transparent px-4 py-3 text-sm font-mono outline-none placeholder:text-gray-400 resize-none"
              placeholder="Describe your driving experience..."
            />
          </div>

          {/* Cannabis Experience */}
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-2">
              Please Describe Your Cannabis Industry Experience
            </label>
            <textarea
              rows={3}
              className="w-full border-2 border-black bg-transparent px-4 py-3 text-sm font-mono outline-none placeholder:text-gray-400 resize-none"
              placeholder="Describe any cannabis industry experience..."
            />
          </div>

          {/* Microsoft Office */}
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-2">
              Please Describe Your Experience With Microsoft Office Suite
            </label>
            <textarea
              rows={3}
              className="w-full border-2 border-black bg-transparent px-4 py-3 text-sm font-mono outline-none placeholder:text-gray-400 resize-none"
              placeholder="Describe your proficiency level..."
            />
          </div>

          {/* Management Experience */}
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-2">
              Please Describe Your Management Or Team Leader Experience
            </label>
            <textarea
              rows={3}
              className="w-full border-2 border-black bg-transparent px-4 py-3 text-sm font-mono outline-none placeholder:text-gray-400 resize-none"
              placeholder="Describe any management experience..."
            />
          </div>

          {/* Attention to Detail */}
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-2">
              Please Describe Your Attention To Detail
            </label>
            <textarea
              rows={3}
              className="w-full border-2 border-black bg-transparent px-4 py-3 text-sm font-mono outline-none placeholder:text-gray-400 resize-none"
              placeholder="Describe your attention to detail..."
            />
          </div>

          {/* Type of Work Enjoyed */}
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-2">
              Please Describe The Type Of Work You Enjoy
            </label>
            <textarea
              rows={3}
              className="w-full border-2 border-black bg-transparent px-4 py-3 text-sm font-mono outline-none placeholder:text-gray-400 resize-none"
              placeholder="Describe the type of work you enjoy..."
            />
          </div>

          {/* Cover Letter */}
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-2">
              Cover Letter / Comments
            </label>
            <textarea
              rows={5}
              className="w-full border-2 border-black bg-transparent px-4 py-3 text-sm font-mono outline-none placeholder:text-gray-400 resize-none"
              placeholder="Tell us about yourself..."
            />
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-2">
              Please Submit Your Resume
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="w-full border-2 border-black bg-transparent px-4 py-3 text-sm font-mono outline-none file:mr-4 file:rounded-full file:border-2 file:border-black file:bg-transparent file:px-4 file:py-1 file:text-xs file:font-bold file:uppercase file:tracking-wider file:cursor-pointer hover:file:bg-black hover:file:text-white"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full border-2 border-black px-10 py-4 text-sm font-bold uppercase tracking-widest text-black hover:bg-black hover:text-white transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
