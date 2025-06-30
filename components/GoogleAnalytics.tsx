'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Script from 'next/script';

const GA_TRACKING_ID = 'G-SF64S175C4';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const GoogleAnalytics = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
