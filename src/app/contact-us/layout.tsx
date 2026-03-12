import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Get In Touch",
  description:
    "Contact Pineapple Express for cannabis delivery questions, orders, or support. Call (413) 277-0277 or email kaily@pineappleexpressma.com.",
  alternates: { canonical: "https://pineappleexpressma.com/contact-us" },
  openGraph: {
    title: "Contact Us — Get In Touch",
    description:
      "Contact Pineapple Express for cannabis delivery questions, orders, or support in Massachusetts.",
    url: "https://pineappleexpressma.com/contact-us",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
