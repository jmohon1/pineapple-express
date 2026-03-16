import Image from "next/image";
import Link from "next/link";
import ScrollToTopButton from "./ScrollToTopButton";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/pineappleexpressma",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/pineappleexpressma",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "Yelp",
    href: "https://www.yelp.com/biz/pineapple-express",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 011.596-.206 7.26 7.26 0 011.91 3.1c.238.747-.24 1.612-.24 1.612zm-7.842 3.91l1.86 4.83c.34.89-.47 1.72-1.36 1.62a7.3 7.3 0 01-3.55-1.35c-.6-.47-.62-1.39-.06-1.89l3.11-3.21zm-1.26-3.24L6.62 11.78c-.88-.29-1.04-1.48-.27-2 .11-.07.23-.13.36-.17l4.79-1.56c.89-.29 1.73.54 1.44 1.43l-1.87 3.77zM11.33 2.89c.03-1 1.08-1.62 1.88-1.15a7.24 7.24 0 012.75 2.93c.37.7-.03 1.58-.78 1.73l-5.17.93c-.96.17-1.65-.87-1.11-1.67l2.43-2.77zM3.6 15.51c-.79-.34-.88-1.42-.15-1.89l4.56-2.92c.79-.5 1.78.18 1.55 1.08L8.24 16.8c-.17.68-.9 1.05-1.55.79l-3.09-2.08z" />
      </svg>
    ),
  },
  {
    name: "Weedmaps",
    href: "https://weedmaps.com/deliveries/pineapple-express",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-1-4-1 4H7l-2-8h2l1 4 1-4h2l1 4 1-4h2l-2 8h-2z" />
      </svg>
    ),
  },
  {
    name: "Leafly",
    href: "https://www.leafly.com/dispensary-info/pineapple-express",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 3c.825 0 1.5 3.134 1.5 7s-.675 7-1.5 7-1.5-3.134-1.5-7 .675-7 1.5-7zm-4.5 7c0-.825 2.015-1.5 4.5-1.5s4.5.675 4.5 1.5-2.015 1.5-4.5 1.5-4.5-.675-4.5-1.5z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-black bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12">
        {/* Main footer grid */}
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left Column: Logo + Contact */}
          <div>
            <Image
              src="/logo.svg"
              alt="Pineapple Express — Massachusetts Cannabis Delivery"
              width={120}
              height={120}
              className="mb-6 h-[80px] w-auto"
              sizes="120px"
            />
            <h2 className="mb-4 font-mono text-lg">Contact Us</h2>
            <div className="space-y-2 font-mono text-sm">
              <p>
                <a
                  href="mailto:kaily@pineappleexpressma.com"
                  className="hover:opacity-70 transition-opacity"
                >
                  kaily@pineappleexpressma.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+14132770277"
                  className="hover:opacity-70 transition-opacity"
                >
                  (413) 277-0277
                </a>
              </p>
              <p>
                <span className="font-bold">License Number:</span> MD1306
              </p>
            </div>

            {/* Social Media Links */}
            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:opacity-70 transition-opacity"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Newsletter + Policies */}
          <div className="space-y-10">
            {/* Newsletter Signup */}
            <div className="flex items-end gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Need your email here..."
                  className="w-full border-b border-black bg-transparent py-2 text-sm font-mono outline-none placeholder:text-gray-400"
                />
              </div>
              <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:opacity-70 transition-opacity whitespace-nowrap">
                Sign Up
                <span className="text-lg">&#10132;</span>
              </button>
            </div>

            {/* Policies */}
            <div>
              <h2 className="mb-4 text-lg font-bold uppercase tracking-wider">
                Policies
              </h2>
              <div className="flex flex-col gap-2 text-sm font-mono">
                <Link
                  href="/terms-and-conditions"
                  className="hover:opacity-70 transition-opacity"
                >
                  Terms and Conditions
                </Link>
                <Link
                  href="/privacy-policy"
                  className="hover:opacity-70 transition-opacity"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/disclaimer"
                  className="hover:opacity-70 transition-opacity"
                >
                  Disclaimer
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-12 grid gap-8 border-t border-gray-300 pt-8 md:grid-cols-2">
          <p className="text-xs font-mono italic leading-relaxed text-gray-600">
            Please Consume Responsibly. For use only by adults 21 years of age
            or older. This product has not been analyzed or approved by the Food
            and Drug Administration (FDA). There is limited information on the
            side effects of using this product, and there may be associated
            health risks. Marijuana use during pregnancy and breast-feeding may
            pose potential harms. It is against the law to drive or operate
            machinery when under the influence of this product. KEEP THIS PRODUCT
            AWAY FROM CHILDREN. There may be health risks associated with
            consumption of this product. Marijuana can impair concentration,
            coordination, and judgment.
          </p>
          <p className="text-xs font-mono italic leading-relaxed text-gray-600">
            Marijuana Vaporizer Devices have been tested for Vitamin E Acetate
            and other contaminants, with no adverse findings. WARNING: Vaporizer
            Devices may contain ingredients harmful to health when inhaled.
            Consumers shall have access to the test results of Marijuana
            Vaporizer Devices including copies of any Certificates of Analysis
            provided by the device&apos;s manufacturer.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-xs font-mono text-gray-500">
          <p>
            &copy; 2026 Pineapple Express. All Rights Reserved.
          </p>
        </div>
      </div>

      <ScrollToTopButton />
    </footer>
  );
}
