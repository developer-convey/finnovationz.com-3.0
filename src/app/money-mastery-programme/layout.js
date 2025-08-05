import { Inter } from "next/font/google";
import Script from "next/script";
import Meta from "../../component/Meta";
import DiwaliOffSlider from "@/app/components/coursetopofferslider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Stock Market Webinar: Master Your Finances with the Stock Market Mastery Programme",
  description:
    "Join our webinar to learn proven strategies for success in the stock market with our Money Mastery Programme. Register today!",
  keywords: "Stock Market Webinar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
      <body className={inter.className}>

        {children}

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=AW-11292341588"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Script
          id="google-ads-conversion"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-10807341659');

              gtag('event', 'conversion', {
                'send_to': 'AW-10807341659/t4x_COnB_dEZENvkq6Eo',
                'transaction_id': ''
              });
            `,
          }}
          strategy="afterInteractive"
        />

        <Script
          type="text/javascript"
          src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
          id="aisensy-wa-widget"
          widget-id="FAWlEn"
        >
        </Script>
      </body>
    </html>
  );
}
