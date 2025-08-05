import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Web Story on Indian Stock Market: IPO Information & Expert Analysis",
    description:
        "Web Stories to learn about upcoming IPO. Stay updated with the latest trends and gain valuable insights to make informed investment decisions",
    keywords: "Stock Market Web Stories",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* Metadata */}
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />

                {/* Google Tag Manager */}
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
                {/* End Google Tag Manager */}
            </head>
            <body className={`${inter.className} overflow-y-auto`}>
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=AW-11292341588"
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    ></iframe>
                </noscript>
                {/* End Google Tag Manager (noscript) */}

                {children}
            </body>
        </html>
    );
}
