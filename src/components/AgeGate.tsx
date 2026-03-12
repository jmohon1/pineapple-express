"use client";

import { useState, useEffect } from "react";

export default function AgeGate() {
  const [isVerified, setIsVerified] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("ageVerified");
    setIsVerified(stored === "true");
  }, []);

  useEffect(() => {
    if (isVerified === false) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVerified]);

  if (isVerified === null || isVerified) return null;

  const handleYes = () => {
    localStorage.setItem("ageVerified", "true");
    setIsVerified(true);
  };

  const handleNo = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-overlay">
      <div className="text-center text-white px-6 max-w-md">
        <h2 className="text-3xl font-bold mb-4">
          Please verify your age to enter.
        </h2>
        <p className="mb-8 text-lg text-gray-300">
          Sorry, you must be 21 or over to enter this website.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleYes}
            className="rounded-full bg-white text-black px-10 py-3 font-semibold hover:bg-gray-200 transition-colors"
          >
            Yes, I am 21+
          </button>
          <button
            onClick={handleNo}
            className="rounded-full border-2 border-white px-10 py-3 text-white font-semibold hover:bg-white/10 transition-colors"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
