"use client";
import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import "../../app/webinarStyle/webinarindex.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Meta from "../../component/Meta";

import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import WebinarHomeBanner from "../money-mastery-yt/components/webinarHomebanner";
import FixedFooter from "../money-mastery-yt/components/FixedFooter";

const DwebinarHindi = dynamic(() => import("@/app/money-mastery-yt/components/DwebinarHindi"));
const Expertise = dynamic(() => import("@/app/components/Expertise"));
const RegistrationTime = dynamic(() =>
  import("@/app/components/RegistrationTime")
);

function WApp() {
  const [isHomeBannerVisible, setIsHomeBannerVisible] = useState(true);
  const [programmeHindiData, setprogrammeHindiData] = useState(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const homeBannerRef = useRef(null);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10 && !hasScrolled) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

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
    fbq("init", "2422188891299616");

    document.title = "Money Mastery YT";

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsHomeBannerVisible(!entry.isIntersecting);
    }, options);

    if (homeBannerRef.current) {
      observer.observe(homeBannerRef.current);
    }

    handleRouteChange(router.asPath);

    if (router.events) {
      router.events.on("routeChangeComplete", handleRouteChange);

      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }

    return () => {
      if (homeBannerRef.current) {
        observer.unobserve(homeBannerRef.current);
      }
    };
  }, [router.events, homeBannerRef, setIsHomeBannerVisible]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_WEBINAR_API_URL}webinarDetail?platform=money%20mastery%20YT`
        ); // Replace with your API endpoint
        const data = await response.json();
        setprogrammeHindiData(data?.result[0]);
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the width condition as per your mobile screen criteria
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    const daySuffix = (day) => {
      if (day > 3 && day < 21) return "th";
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return `${day}${daySuffix(day)} ${month} ${year}`;
  };

  return (
    <>
      <Head>
        {/* <title>Money Mastery Hindi</title>{" "} */}
        <Meta />
      </Head>

      {/* <div ref={homeBannerRef}> */}
      <WebinarHomeBanner
        programmeData={programmeHindiData}
        formatDate={formatDate}
      />
      {/* </div> */}
      {/* <Expertise />
      <RegistrationTime
        programmeData={programmeHindiData}
        formatDate={formatDate}
      /> */}

      {isMobile && hasScrolled && (
        <>
          <Expertise />
          <RegistrationTime
            programmeData={programmeHindiData}
            formatDate={formatDate}
          />
        </>
      )}
      {!isMobile && (
        <>
          <Expertise />
          <RegistrationTime
            programmeData={programmeHindiData}
            formatDate={formatDate}
          />
        </>
      )}

      {hasScrolled && <DwebinarHindi />}

      {/* <Footer /> */}
      {isHomeBannerVisible && (
        <FixedFooter programmeData={programmeHindiData} />
      )}
    </>
  );
}

export default dynamic(() => Promise.resolve(WApp), { ssr: false });
