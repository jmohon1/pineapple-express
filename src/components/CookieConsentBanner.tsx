"use client";

import { useState } from "react";
import { useCookieConsent } from "./CookieConsentProvider";
import type { ConsentCategories } from "@/lib/tracking-config";

export default function CookieConsentBanner() {
  const { consent, hasResponded, acceptAll, rejectAll, updateConsent } =
    useCookieConsent();
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<ConsentCategories>(consent);

  if (hasResponded === null || hasResponded === true) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 border-t-2 border-black bg-white px-6 py-6 md:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-8">
          <div className="flex-1">
            <h2 className="text-sm font-black uppercase tracking-widest mb-2">
              We Value Your Privacy
            </h2>
            <p className="text-xs font-mono text-gray-600 leading-relaxed">
              We use cookies and similar technologies to analyze site traffic and
              improve your experience. You can choose which categories to allow
              below.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <button
              onClick={() => setShowPreferences(!showPreferences)}
              className="text-xs font-bold uppercase tracking-wider underline underline-offset-2 hover:opacity-70 transition-opacity"
            >
              {showPreferences ? "Hide" : "Manage"}
            </button>
            <button
              onClick={rejectAll}
              className="border-2 border-black px-5 py-2 text-xs font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors"
            >
              Reject All
            </button>
            <button
              onClick={acceptAll}
              className="border-2 border-black bg-black px-5 py-2 text-xs font-bold uppercase tracking-widest text-white hover:bg-gray-800 transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>

        {showPreferences && (
          <div className="mt-4 border-t border-gray-200 pt-4">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {/* Essential - always on */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="mt-0.5 h-4 w-4 accent-black"
                />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider">
                    Essential
                  </p>
                  <p className="text-xs font-mono text-gray-500">
                    Required for site functionality
                  </p>
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent-analytics"
                  checked={preferences.analytics}
                  onChange={(e) =>
                    setPreferences((prev) => ({
                      ...prev,
                      analytics: e.target.checked,
                    }))
                  }
                  className="mt-0.5 h-4 w-4 accent-black"
                />
                <label htmlFor="consent-analytics">
                  <p className="text-xs font-bold uppercase tracking-wider">
                    Analytics
                  </p>
                  <p className="text-xs font-mono text-gray-500">
                    Help us understand site usage
                  </p>
                </label>
              </div>

              {/* Marketing */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent-marketing"
                  checked={preferences.marketing}
                  onChange={(e) =>
                    setPreferences((prev) => ({
                      ...prev,
                      marketing: e.target.checked,
                    }))
                  }
                  className="mt-0.5 h-4 w-4 accent-black"
                />
                <label htmlFor="consent-marketing">
                  <p className="text-xs font-bold uppercase tracking-wider">
                    Marketing
                  </p>
                  <p className="text-xs font-mono text-gray-500">
                    Personalized ads and retargeting
                  </p>
                </label>
              </div>
            </div>

            <button
              onClick={() => updateConsent(preferences)}
              className="mt-4 border-2 border-black bg-black px-5 py-2 text-xs font-bold uppercase tracking-widest text-white hover:bg-gray-800 transition-colors"
            >
              Save Preferences
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
