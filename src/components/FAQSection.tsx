import { faqItems } from "@/data/faq";
import FAQItem from "./FAQItem";

export default function FAQSection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-10 text-center text-3xl font-bold uppercase tracking-wider">
          Frequently Asked Questions
        </h2>
        <div>
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
