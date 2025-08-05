"use client";

import React, { useEffect } from "react";

import ThankYou from "@/app/components/webinar-marathi-comp/thankyouMarathi";
import Footer from "@/app/components/footer";
import { useRouter } from "next/navigation";

function Thanku() {
  const router = useRouter;

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
  return (
    <>
      <ThankYou />
      <Footer />
    </>
  );
}

export default Thanku;
