import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Our Team — Careers at Pineapple Express",
  description:
    "Apply to join the Pineapple Express team. We're hiring delivery drivers and cannabis professionals across Massachusetts.",
  alternates: { canonical: "https://pineappleexpressma.com/hiring" },
  openGraph: {
    title: "Join Our Team — Careers at Pineapple Express",
    description:
      "Apply to join the Pineapple Express team. We're hiring delivery drivers and cannabis professionals across Massachusetts.",
    url: "https://pineappleexpressma.com/hiring",
  },
};

export default function HiringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
