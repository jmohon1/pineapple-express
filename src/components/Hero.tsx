function AnimatedWord({
  children,
  delay,
}: {
  children: string;
  delay: number;
}) {
  // Trim the word, then render the holder + a trailing space outside
  const word = children.trimEnd();
  const hasTrailingSpace = children !== word;
  return (
    <>
      <span className="hero-word-holder">
        {/* Invisible spacer at weight 700 — reserves consistent layout width */}
        <span className="hero-word-spacer">{word}</span>
        {/* Visible duplicate — absolutely positioned, animates font-weight */}
        <span
          className="hero-word-duplicate"
          style={{ animationDelay: `${delay}s` }}
        >
          {word}
        </span>
      </span>
      {hasTrailingSpace ? " " : ""}
    </>
  );
}

function StaticWord({ children }: { children: string }) {
  return <span className="hero-word-static">{children}</span>;
}

export default function Hero() {
  return (
    <div className="mx-auto max-w-[1275px] px-6 py-12 md:px-12 md:py-20 lg:px-0 lg:py-24">
      <h1 className="hero-heading uppercase text-5xl md:text-7xl lg:text-[5rem] leading-[1.1]">
        <StaticWord>Welcome </StaticWord>
        <AnimatedWord delay={0}>to </AnimatedWord>
        <AnimatedWord delay={0.15}>Pineapple </AnimatedWord>
        <AnimatedWord delay={0.3}>Express, </AnimatedWord>
        <AnimatedWord delay={0.45}>your </AnimatedWord>
        <AnimatedWord delay={0.6}>premium </AnimatedWord>
        <StaticWord>Massachusetts </StaticWord>
        <AnimatedWord delay={0.75}>cannabis </AnimatedWord>
        <AnimatedWord delay={0.9}>delivery.</AnimatedWord>
      </h1>
    </div>
  );
}
