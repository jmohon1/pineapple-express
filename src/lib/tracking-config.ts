export const CONSENT_COOKIE_NAME = "cookie_consent";
export const CONSENT_COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

// Replace these with real tracking IDs when available
export const TRACKING_IDS = {
  GA_MEASUREMENT_ID: "G-XXXXXXXXXX",
  FB_PIXEL_ID: "000000000000000",
} as const;

export type ConsentCategories = {
  analytics: boolean;
  marketing: boolean;
};

export const DEFAULT_CONSENT: ConsentCategories = {
  analytics: false,
  marketing: false,
};
