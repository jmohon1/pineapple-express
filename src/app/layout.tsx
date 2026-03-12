import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgeGate from "@/components/AgeGate";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
  display: "swap",
});

const siteUrl = "https://pineappleexpressma.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pineapple Express | Premium Massachusetts Cannabis Delivery",
    template: "%s | Pineapple Express",
  },
  description:
    "Pineapple Express is a licensed Massachusetts cannabis delivery service. Order premium flower, edibles, concentrates and more delivered to your door.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Pineapple Express",
    title: "Pineapple Express | Premium Massachusetts Cannabis Delivery",
    description:
      "Licensed Massachusetts cannabis delivery. Shop premium flower, edibles, concentrates and more delivered statewide.",
    images: [
      {
        url: "/wp-content/uploads/2024/10/Artboard-12.png",
        width: 1200,
        height: 630,
        alt: "Pineapple Express Cannabis Delivery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pineapple Express | Premium Massachusetts Cannabis Delivery",
    description:
      "Licensed Massachusetts cannabis delivery. Shop premium flower, edibles, concentrates and more delivered statewide.",
    images: ["/wp-content/uploads/2024/10/Artboard-12.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#business`,
    name: "Pineapple Express",
    description:
      "Licensed Massachusetts cannabis delivery service offering premium flower, edibles, concentrates and more.",
    url: siteUrl,
    telephone: "+14132770277",
    email: "kaily@pineappleexpressma.com",
    logo: `${siteUrl}/wp-content/uploads/2024/10/Artboard-12.png`,
    image: `${siteUrl}/wp-content/uploads/2024/10/Artboard-12.png`,
    areaServed: {
      "@type": "State",
      name: "Massachusetts",
      sameAs: "https://en.wikipedia.org/wiki/Massachusetts",
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "MA",
      addressCountry: "US",
    },
    sameAs: [
      "https://www.instagram.com/pineapple_expressma/",
      "https://www.facebook.com/pineappleexpressma",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cannabis Products",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Cannabis Flower" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Edibles" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Concentrates" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Topicals" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Tinctures & Oils" } },
      ],
    },
  };

  return (
    <html lang="en" className={kanit.variable}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AgeGate />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
