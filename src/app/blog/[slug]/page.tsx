import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";
import Breadcrumbs from "@/components/Breadcrumbs";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  const url = `https://pineappleexpressma.com/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url,
      publishedTime: post.dateISO,
      authors: ["Pineapple Express"],
      ...(post.image && { images: [{ url: post.image, width: 1200, height: 630, alt: post.title }] }),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      ...(post.image && { images: [post.image] }),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: post.title },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    url: `https://pineappleexpressma.com/blog/${post.slug}`,
    author: {
      "@type": "Organization",
      name: "Pineapple Express",
      url: "https://pineappleexpressma.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Pineapple Express",
      url: "https://pineappleexpressma.com",
      logo: {
        "@type": "ImageObject",
        url: "https://pineappleexpressma.com/logo.svg",
      },
    },
    ...(post.image && {
      image: {
        "@type": "ImageObject",
        url: post.image,
      },
    }),
    keywords: post.categories.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://pineappleexpressma.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-3xl px-6 py-12 md:px-12 md:py-16">
        <Breadcrumbs items={breadcrumbs} />

        {post.image && (
          <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden bg-gray-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
              priority
            />
          </div>
        )}

        <div className="mb-4 flex flex-wrap gap-2">
          {post.categories.map((cat) => (
            <span
              key={cat}
              className="inline-block bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider"
            >
              {cat}
            </span>
          ))}
        </div>

        <h1 className="text-3xl font-black uppercase tracking-wide mb-3 md:text-4xl">
          {post.title}
        </h1>

        <time
          dateTime={post.dateISO}
          className="block text-sm font-mono text-gray-500 mb-8"
        >
          {post.date}
        </time>

        <article
          className="prose prose-gray max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-wide prose-a:text-black prose-a:font-bold"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 border-t-2 border-black pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:opacity-70 transition-opacity"
          >
            &larr; Back to Blog
          </Link>
        </div>
      </div>
    </>
  );
}
