import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Cannabis News, Education & Insights",
  description:
    "Read the latest from Pineapple Express on cannabis education, compliance, strain reviews, microdosing tips, and Massachusetts cannabis news.",
  alternates: { canonical: "https://pineappleexpressma.com/blog" },
  openGraph: {
    title: "Blog — Cannabis News, Education & Insights",
    description:
      "Read the latest from Pineapple Express on cannabis education, compliance, strain reviews, and Massachusetts cannabis news.",
    url: "https://pineappleexpressma.com/blog",
  },
};

const blogPosts = [
  {
    title:
      "Is Cannabis Delivery Legal in Massachusetts — and How Does It Actually Work?",
    slug: "is-cannabis-delivery-legal-in-massachusetts-and-how-does-it-actually-work",
    date: "December 19, 2025",
    categories: ["Cannabis"],
    image: null,
    excerpt:
      "If you're searching for cannabis delivery in Massachusetts, you're probably asking the same question most first-time customers ask: Is it actually legal — and can it really be delivered to my house?",
  },
  {
    title:
      "Cannabis Terminology & Classifications: Main Psychoactive Component — THC",
    slug: "cannabis-terminology-classifications-main-psychoactive-component-thc",
    date: "February 7, 2025",
    categories: ["Cannabis", "Cannabis Education", "Compliance"],
    image:
      "https://pineappleexpressma.com/wp-content/uploads/2025/02/DALL%C2%B7E-2025-02-07-06.48.42-A-modern-and-professional-blog-cover-image-for-the-article-titled-Cannabis-Terminology-Classifications_-Main-Psychoactive-Component-%E2%80%93-THC.-The-ima.webp",
    excerpt:
      "Understanding the difference between THC and CBD, and how different product types and classifications affect your experience as a cannabis consumer.",
  },
  {
    title: "Compliance & Cannadelics",
    slug: "compliance-cannadelics",
    date: "January 15, 2025",
    categories: ["Cannabis", "Compliance", "Micro Dosing"],
    image:
      "https://pineappleexpressma.com/wp-content/uploads/2025/01/DALL%C2%B7E-2025-01-15-13.30.14-A-sophisticated-and-modern-conceptual-art-piece-titled-Compliance-Cannadelics.-The-image-blends-themes-of-legal-cannabis-and-psychedelic-microdosi.webp",
    excerpt:
      "Exploring the intersection of legal compliance and the growing micro-dosing movement in the Massachusetts cannabis market.",
  },
];

const categories = [
  "Cannabis",
  "Cannabis Education",
  "Compliance",
  "Micro Dosing",
];

export default function BlogPage() {
  return (
    <>
      <PageHero title="Blog" />

      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
          {/* Posts */}
          <div className="space-y-10">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="border-b-2 border-black pb-10 last:border-b-0"
              >
                {/* Featured Image */}
                {post.image && (
                  <div className="relative mb-6 aspect-[16/9] w-full overflow-hidden bg-gray-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 700px"
                    />
                  </div>
                )}

                <div className="mb-3 flex flex-wrap gap-2">
                  {post.categories.map((cat) => (
                    <span
                      key={cat}
                      className="inline-block bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl font-black uppercase tracking-wide mb-2 md:text-3xl">
                  {post.title}
                </h2>
                <p className="text-sm font-mono text-gray-500 mb-4">
                  {post.date}
                </p>
                <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-block text-sm font-bold uppercase tracking-wider border-b-2 border-black pb-1 hover:opacity-70 transition-opacity"
                >
                  Read More
                </Link>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-10">
            {/* Search */}
            <div>
              <h3 className="text-lg font-black uppercase tracking-wide mb-4">
                Search
              </h3>
              <input
                type="text"
                placeholder="Search..."
                className="w-full border-2 border-black bg-transparent px-4 py-3 text-sm font-mono outline-none placeholder:text-gray-400"
              />
            </div>

            {/* About */}
            <div>
              <h3 className="text-lg font-black uppercase tracking-wide mb-4">
                About
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Welcome to the Pineapple Express blog — your source for all
                things cannabis, offering insights on compliance, deals, strain
                reviews, microdosing tips, and delicious cannabis-infused
                recipes.
              </p>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-black uppercase tracking-wide mb-4">
                Categories
              </h3>
              <div className="flex flex-col gap-2">
                {categories.map((cat) => (
                  <Link
                    key={cat}
                    href="/blog"
                    className="text-sm font-mono hover:opacity-70 transition-opacity"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
