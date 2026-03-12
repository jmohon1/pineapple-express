"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "https://pineappleexpressma.com/shop/#/?express=false&orderType=Delivery" },
  { label: "Education", href: "/education" },
  { label: "Blog", href: "/blog" },
  { label: "Hiring", href: "/hiring" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-white border border-black">
      <div className="flex h-[70px] items-stretch lg:h-[100px]">
        {/* Logo Section - bordered box */}
        <Link
          href="/"
          className="flex shrink-0 items-center justify-center border-r border-black px-6 lg:px-10"
        >
          <Image
            src="https://pineappleexpressma.com/wp-content/uploads/2024/10/Artboard-12.png"
            alt="Pineapple Express"
            width={200}
            height={60}
            className="h-[45px] w-auto lg:h-[60px]"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-black hover:opacity-70 transition-opacity"
            >
              {pathname === link.href && (
                <span className="inline-block h-2.5 w-2.5 bg-black" />
              )}
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden ml-auto flex flex-col justify-center items-center w-16 gap-1.5 border-l border-black"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col border-t border-black bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 border-b border-gray-200 px-6 py-4 text-sm font-bold uppercase tracking-widest text-black"
            >
              {pathname === link.href && (
                <span className="inline-block h-2.5 w-2.5 bg-black" />
              )}
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
