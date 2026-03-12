import Link from "next/link";
import PageHero from "@/components/PageHero";

export default function ShopPage() {
  return (
    <>
      <PageHero
        title="Shop"
        subtitle="Browse our curated selection of premium cannabis products available for delivery across Massachusetts."
      />

      <div className="mx-auto max-w-3xl px-6 py-16 md:px-12 md:py-24 text-center">
        <p className="text-lg text-gray-600 font-mono mb-4">
          Our online menu is coming soon.
        </p>
        <p className="text-sm text-gray-500 font-mono mb-10">
          In the meantime, give us a call or send us a message to place your
          order directly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center rounded-full border-2 border-black px-10 py-4 text-sm font-bold uppercase tracking-widest text-black hover:bg-black hover:text-white transition-colors"
          >
            Contact Us
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border-2 border-black px-10 py-4 text-sm font-bold uppercase tracking-widest text-black hover:bg-black hover:text-white transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
