interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20 border-b border-black">
      <h1 className="max-w-5xl uppercase text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight font-black">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base text-gray-600 md:text-lg">
          {subtitle}
        </p>
      )}
    </section>
  );
}
