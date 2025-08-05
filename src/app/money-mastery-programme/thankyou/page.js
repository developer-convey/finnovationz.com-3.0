"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import ThankYou from "@/app/components/webinar-marathi-comp/thankyouprogramme";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Meta from "../../../component/Meta";

function Thanku() {
  const [programmeData, setprogrammeData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    document.title = "Thank you"; // Change "New Title" to the desired title
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      typeof window !== "undefined" && window.fbq("track", "PageView"); // Track a page view event
    };

    // Initialize Facebook Pixel
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );
    fbq("init", "7036475446402100"); // Replace 'YOUR_PIXEL_ID' with your actual Pixel ID

    // Track page view on initial load
    handleRouteChange(router.asPath);

    // Check if router events is defined before attaching event listener
    if (router.events) {
      router.events.on("routeChangeComplete", handleRouteChange);

      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }
  }, [router.events]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_WEBINAR_API_URL}webinarDetail?platform=money%20mastery%20programme`
        ); // Replace with your API endpoint
        const data = await response.json();
        setprogrammeData(data?.result[0]);
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <Head>
          <title>Thank you</title>{" "}
          <script
            src="//script.crazyegg.com/pages/scripts/0120/9883.js"
            async
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '7036475446402100');
            fbq('track', 'PageView');
          `,
            }}
          />
        <Meta />

          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=7036475446402100&ev=PageView&noscript=1"
            />
          </noscript>
        </Head>
      </div>
      <ThankYou programmeData={programmeData} />
      {/* <Footer /> */}
    </>
  );
}

export default dynamic(() => Promise.resolve(Thanku), { ssr: false });
