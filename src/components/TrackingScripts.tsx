"use client";

import Script from "next/script";
import { useCookieConsent } from "./CookieConsentProvider";
import { TRACKING_IDS } from "@/lib/tracking-config";

export default function TrackingScripts() {
  const { consent, hasResponded } = useCookieConsent();

  // Don't render anything until the user has responded
  if (!hasResponded) return null;

  return (
    <>
      {/* Google Analytics */}
      {consent.analytics && TRACKING_IDS.GA_MEASUREMENT_ID !== "G-XXXXXXXXXX" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${TRACKING_IDS.GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${TRACKING_IDS.GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}

      {/* Facebook Pixel */}
      {consent.marketing && TRACKING_IDS.FB_PIXEL_ID !== "000000000000000" && (
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${TRACKING_IDS.FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}
