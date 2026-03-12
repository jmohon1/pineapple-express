import Link from "next/link";

export default function CTABanner() {
  return (
    <div className="mx-auto max-w-[1275px] px-6 md:px-12 lg:px-0">
      <div className="bg-accent px-8 py-10 md:px-12 md:py-14 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-black uppercase tracking-wide md:text-2xl">
            Ready To Get Started?
          </h2>
          <p className="mt-2 text-sm text-black/70 md:text-base">
            Placing your order is easy! Click on the shop now button to place
            your order!
          </p>
        </div>
        <Link
          href="https://pineappleexpressma.com/shop/#/?express=false&orderType=Delivery"
          className="inline-flex shrink-0 items-center justify-center bg-white px-10 py-4 text-sm font-bold uppercase tracking-widest text-black hover:bg-black hover:text-white transition-colors"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}
