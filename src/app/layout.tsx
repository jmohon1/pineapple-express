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

export const metadata: Metadata = {
  title: "Pineapple Express | Premium Massachusetts Cannabis Delivery",
  description:
    "Welcome to Pineapple Express, your premium Massachusetts cannabis delivery service. Shop cannabis flower, edibles, concentrates and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={kanit.variable}>
      <body className="antialiased">
        <AgeGate />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
