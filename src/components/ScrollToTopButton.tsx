"use client";

export default function ScrollToTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-30 text-black hover:opacity-70 transition-opacity md:bottom-8 md:right-8"
      aria-label="Scroll to top"
    >
      <svg
        className="h-14 w-14 md:h-16 md:w-16"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l8 14H4l8-14z" />
      </svg>
    </button>
  );
}
