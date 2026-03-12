"use client";

import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2 border-black">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left md:py-8"
        aria-expanded={isOpen}
      >
        <span className="text-xl font-black uppercase tracking-wide md:text-2xl pr-4">
          {question}
        </span>
        <span
          className={`shrink-0 text-3xl font-bold leading-none transition-transform duration-200 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
          {answer}
        </p>
      </div>
    </div>
  );
}
