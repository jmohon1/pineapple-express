interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <details className="group border-b-2 border-black">
      <summary className="flex w-full cursor-pointer items-center justify-between py-6 text-left md:py-8 list-none [&::-webkit-details-marker]:hidden">
        <span className="text-xl font-black uppercase tracking-wide md:text-2xl pr-4">
          {question}
        </span>
        <span className="shrink-0 text-3xl font-bold leading-none transition-transform duration-200 group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="pb-6">
        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
          {answer}
        </p>
      </div>
    </details>
  );
}
