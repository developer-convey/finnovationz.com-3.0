"use client";
import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import "../../app/webinarStyle/webinarindex.css";
import "bootstrap/dist/css/bootstrap.min.css";
import dynamic from "next/dynamic";

const WebinarHomeBanner = dynamic(() =>
  import("@/app/components/webinar-marathi-comp/webinarHomebanner")
);
const Expertise = dynamic(() => import("@/app/components/webinar-marathi-comp/Expertise"));
const RegistrationTime = dynamic(() =>
  import("@/app/components/webinar-marathi-comp/RegistrationTime")
);
const DwebinarMarathi = dynamic(() => import("@/app/money-mastery-marathi/components/DwebinarMarathi"));
import FixedFooter from "@/app/components/webinar-marathi-comp/FixedFooter";
import { useRouter } from "next/navigation";
// import Header from "../components/header";

function WApp() {
  const [isHomeBannerVisible, setIsHomeBannerVisible] = useState(true);
  const [marathidata, setMarathidata] = useState(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null);

  const router = useRouter();
  const homeBannerRef = useRef(null);

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10 && !hasScrolled) {
        setHasScrolled(true);
      }
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleRouteChange = (url) => {
      window.fbq("track", "PageView");
    };

    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_WEBINAR_API_URL}webinarDetail?platform=money%20mastery%20marathi`
        ); // Replace with your API endpoint
        const data = await response.json();
        setMarathidata(data?.result[0]);
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };

    // Facebook Pixel initialization
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
    fbq("init", "7036475446402100");

    document.title = "Money mastery marathi";

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    fetchData();
    handleRouteChange(router.asPath);

    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin
      threshold: 0.5, // Trigger when 50% of the target is visible
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsHomeBannerVisible(!entry.isIntersecting);
    }, options);

    if (homeBannerRef.current) {
      observer.observe(homeBannerRef.current);
    }

    if (router.events) {
      router.events.on("routeChangeComplete", handleRouteChange);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (homeBannerRef.current) {
        observer.unobserve(homeBannerRef.current);
      }
      if (router.events) {
        router.events.off("routeChangeComplete", handleRouteChange);
      }
    };
  }, [hasScrolled, router.events, router.asPath]);

  return (
    <>
      {" "}
      {/* <Header /> */}
      <Head>
        <title>Money mastery marathi</title>
      </Head>
      <WebinarHomeBanner marathidata={marathidata} formatDate={formatDate} />
      <Expertise />
      <RegistrationTime />
      {hasScrolled && <DwebinarMarathi />}
      {isHomeBannerVisible && <FixedFooter marathidata={marathidata} />}
    </>
  );
}

export default dynamic(() => Promise.resolve(WApp), { ssr: false });
