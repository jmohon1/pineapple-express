import Image from "next/image";
import { brands } from "@/data/brands";

export default function BrandGrid() {
  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-black uppercase tracking-wider md:text-4xl">
          Carrying The Best In Cannabis
        </h2>
        <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center rounded-lg bg-white p-4 shadow-sm"
            >
              <Image
                src={brand.imageUrl}
                alt={brand.name}
                width={150}
                height={150}
                className="max-h-[80px] w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
