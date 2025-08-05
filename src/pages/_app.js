import { logPageView } from "@/utils/analytics";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import Meta from "@/component/Meta";
import SeoData from './SeoData.json';
import DiwaliOffSlider from "@/app/components/coursetopofferslider";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const path = router.pathname;
  const segments = path.split("/").filter(Boolean);

  const { broker } = router.query;
  let pageName;
  if(broker){
    pageName = segments.slice(0, -1).join("/"); 
  }
  else {
    pageName = segments.join("/");
  }

  // Effect for handling page view tracking on route change
  useEffect(() => {
    const handleRouteChange = () => {
      logPageView();
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  // ✅ START: ADD THIS NEW CODE BLOCK
  // Effect for showing a confirmation message before the user leaves the site
  // useEffect(() => {
  //   const handleBeforeUnload = (e) => {
  //     e.preventDefault();
  //     e.returnValue = '';
  //   };

  //   window.addEventListener('beforeunload', handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload);
  //   };
  // }, []); // Empty dependency array ensures this runs only once
  // ✅ END: ADD THIS NEW CODE BLOCK

  const dynamicPageName = broker ? `${pageName}/${broker}` : pageName;

  const pageMeta = SeoData?.pages?.find((page) => {
    const pagePath = new URL(page.link).pathname.split("/").filter(Boolean).join("/");
    return pagePath === dynamicPageName;
  });

  const title = pageMeta?.meta.title || "Broker Comparison Top Stock Brokers In India To Choose The Best";
  const description = pageMeta?.meta.description || "Best broker comparison tool in India. Check brokerage charges, financial plans, ratings and product features. Get detail info and pick the best one for you";
  const keywords = [
    ...(pageMeta?.meta.keyword || []),
    ...(pageMeta?.meta.other_keywords || []),
  ].join(", ") || "Broker Comparison";

  return (
    <>
<DiwaliOffSlider redirectUrl="/courses/combo" targetId="pricing" />


      <Head>
        <Meta />
        {![
          "blog/[id]",
        ].includes(dynamicPageName) && (
            <>
              <title>{title}</title>
              <meta name="description" content={description} />
              <meta name="keywords" content={keywords} />
            </>
          )}
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
      </Head>

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

      <Component {...pageProps} />

      {/* Conditionally load external widget script */}
      {![
        "courses/fmvm-modelling",
        "courses/fmvm-modelling/thankyou",
        "courses/fmvm",
        "courses/fmvm/thankyou",
        "courses/combo-of-foundation-course-for-beginners-and-fundamental-analysis-2.O",
        "courses/big-combo", "courses/combo", "courses/offer", "courses/offer-marathi"
      ].includes(dynamicPageName) && (
          <script
            type="text/javascript"
            src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
            id="aisensy-wa-widget"
            widget-id="FAWlEn"
          />
        )}
    </>
  );
}

export default MyApp;
