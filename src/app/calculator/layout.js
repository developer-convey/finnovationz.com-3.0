import { Inter } from "next/font/google";
import Script from "next/script";
import DiwaliOffSlider from "@/app/components/coursetopofferslider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Try Our Financial Calculator to Optimize Your Investments",
  description:
    "Our Financial Calculator will take your investment strategy to the next level, helping you optimize different investment methods for higher returns",
  keywords: "Finance Calculator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
      <body className={inter.className}>
      <DiwaliOffSlider redirectUrl="/courses/combo" targetId="pricing" />

      <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=AW-11292341588"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}</body>
      <Script
        type="text/javascript"
        src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
        id="aisensy-wa-widget"
        widget-id="FAWlEn"
      >
      </Script>
    </html>
  );
}
