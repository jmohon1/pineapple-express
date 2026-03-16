import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import { blogPosts } from "@/data/blog-posts";

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
  twitter: {
    card: "summary_large_image",
    title: "Blog — Cannabis News, Education & Insights",
    description:
      "Read the latest from Pineapple Express on cannabis education, compliance, strain reviews, and Massachusetts cannabis news.",
  },
};

const categories = [
  "Cannabis",
  "Cannabis Education",
  "Compliance",
  "Micro Dosing",
];

export default function BlogPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Blog" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Pineapple Express Blog",
    itemListElement: blogPosts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://pineappleexpressma.com/blog/${post.slug}`,
      name: post.title,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero title="Blog" />

      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16">
        <Breadcrumbs items={breadcrumbs} />

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
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:opacity-70 transition-opacity"
                  >
                    {post.title}
                  </Link>
                </h2>
                <time
                  dateTime={post.dateISO}
                  className="block text-sm font-mono text-gray-500 mb-4"
                >
                  {post.date}
                </time>
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
                  <span
                    key={cat}
                    className="text-sm font-mono"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
