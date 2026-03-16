"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import {
  CONSENT_COOKIE_NAME,
  CONSENT_COOKIE_MAX_AGE,
  DEFAULT_CONSENT,
  type ConsentCategories,
} from "@/lib/tracking-config";

interface CookieConsentContextType {
  consent: ConsentCategories;
  hasResponded: boolean | null;
  acceptAll: () => void;
  rejectAll: () => void;
  updateConsent: (categories: ConsentCategories) => void;
}

const CookieConsentContext = createContext<CookieConsentContextType>({
  consent: DEFAULT_CONSENT,
  hasResponded: null,
  acceptAll: () => {},
  rejectAll: () => {},
  updateConsent: () => {},
});

export function useCookieConsent() {
  return useContext(CookieConsentContext);
}

function parseCookie(): { consent: ConsentCategories; hasResponded: boolean } | null {
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${CONSENT_COOKIE_NAME}=([^;]*)`)
  );
  if (!match) return null;
  try {
    const parsed = JSON.parse(decodeURIComponent(match[1]));
    return { consent: parsed, hasResponded: true };
  } catch {
    return null;
  }
}

function writeCookie(consent: ConsentCategories) {
  const value = encodeURIComponent(JSON.stringify(consent));
  document.cookie = `${CONSENT_COOKIE_NAME}=${value}; path=/; max-age=${CONSENT_COOKIE_MAX_AGE}; SameSite=Lax`;
}

export default function CookieConsentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [consent, setConsent] = useState<ConsentCategories>(DEFAULT_CONSENT);
  const [hasResponded, setHasResponded] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = parseCookie();
    if (stored) {
      setConsent(stored.consent);
      setHasResponded(true);
    } else {
      setHasResponded(false);
    }
  }, []);

  const updateConsent = useCallback((categories: ConsentCategories) => {
    setConsent(categories);
    setHasResponded(true);
    writeCookie(categories);
  }, []);

  const acceptAll = useCallback(() => {
    updateConsent({ analytics: true, marketing: true });
  }, [updateConsent]);

  const rejectAll = useCallback(() => {
    updateConsent({ analytics: false, marketing: false });
  }, [updateConsent]);

  return (
    <CookieConsentContext.Provider
      value={{ consent, hasResponded, acceptAll, rejectAll, updateConsent }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}
