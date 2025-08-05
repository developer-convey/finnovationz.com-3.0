"use client";
import { useEffect } from "react";
import Meta from "../../component/Meta";
import DiwaliOffSlider from "@/app/components/coursetopofferslider";

// GTM Container ID
const GTM_ID = "AW-10807341659";

export default function RootLayout({ children }) {
  useEffect(() => {
    // Function to load GTM script
    const loadGTM = () => {
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      script.async = true;
      document.head.appendChild(script);
    };

    // Load GTM script when component mounts
    loadGTM();

    // Clean up function if component unmounts
    return () => {
      document.head.removeChild(
        document.querySelector('script[src*="gtm.js"]')
      );
    };
  }, []);

  return (
    <html>
      <head>
        <Meta />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','AW-11292341588');
            `,
          }}
        />
      </head>
      <body>
      <DiwaliOffSlider redirectUrl="/courses/combo" targetId="pricing" />

        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=AW-11292341588"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* Render children components */}
        {children}
      </body>
    </html>
  );
}
