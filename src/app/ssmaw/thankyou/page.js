"use client"
import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import Head from "next/head";
import { useRouter } from "next/navigation";

import { isMobile } from "react-device-detect";
import Link from "next/link";
import { Flex } from "antd";
import { FaHandPointDown } from "react-icons/fa";
import "./thankyou.css";

function Page() {
  const [isHomeBannerVisible, setIsHomeBannerVisible] = useState(true);
  const homeBannerRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
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

    return () => {
      if (homeBannerRef.current) {
        observer.unobserve(homeBannerRef.current);
      }
    };
  }, []);

  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    // Check if window is defined to ensure client-side rendering
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      // Initial window width
      handleResize();

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const gtmScript = document.createElement('script');
      gtmScript.async = true;
      gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=AW-11292341588'; // Replace with your GTM ID
      document.head.appendChild(gtmScript);

      const noscript = document.createElement('noscript');
      noscript.innerHTML = `
        <iframe src="https://www.googletagmanager.com/ns.html?id=AW-11292341588"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>
      `;
      document.body.appendChild(noscript);
    }
  }, []);
  
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
    fbq("init", "403234998994611"); // Replace 'YOUR_PIXEL_ID' with your actual Pixel ID

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
      <div>
        <Helmet>
          <title>Thank You</title>
          <link rel="canonical" href="http://mysite.com/example" />
         
        </Helmet>
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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=AW-11292341588"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <div className="imgbackground mt-1" style={{ textAlign: "center" }}>
          <p
            style={{
              fontSize: isMobile ? "32px" : "48px",
              lineHeight: "10px",
              marginTop: "10px",
            }}
          >
            <span
              style={{
                color: "#e60201",
                fontWeight: "bold",
                fontSize: isMobile ? "32px" : "45px",
                lineHeight: "40px",
                marginTop: "50px",
              }}
            >
              <span
                style={{
                  animation: "zoomEffect 1s infinite alternate",
                  display: "inline-block",
                }}
              >
                Wait ✋{" "}
              </span>
              <br />
              <br />
              <p>
              Check email (in inbox and spam folder) from Namaskar Prasad to get the session joining link.

              </p>
              <span className="font-normal text-[22px] md:text-[35px] text-black">
                Join our{" "}
                <span className="text-[#4CAF50]">WhatsApp</span> community of
                VIC Session members.
              </span>
            </span>
          </p>
          <style>
            {`
            @keyframes zoomEffect {
              0% {
                transform: scale(1);
              }
              100% {
                transform: scale(1.2);
              }
            }
          `}
          </style>

          {/* Checkbox for Cheat Sheet */}
          <div className="mt-6 text-black text-[16px] font-normal flex items-start space-x-3">
            <input
              type="checkbox"
              checked
              className="w-6 h-6 flex-shrink-0 mt-1 ml-2 accent-green-500"
            />
            <label className="text-[22px] md:text-[22px] text-left leading-snug">
              Give me the{" "}
              <span className="font-extrabold">10-step stock cheat sheet </span>
              after joining, so that I can easily pick winning stocks like other members

              <span className="text-[#00bf63] font-normal"> </span>
            </label>
          </div>

          {/* Red shadow box with WhatsApp link */}
          <div
            style={{
              border: "1px solid #377BDC",
              padding: isMobile ? "15px" : "15px",
              backgroundColor: "#fff",
              boxShadow: "0 4px 8px rgba(55, 123, 220, 0.5)",
              borderRadius: "10px",
              maxWidth: "1000px",
              margin: "20px 16px ",
              textAlign: "center",
              marginTop: "50px",
            }}
          >
            <p
              style={{ fontSize: "20px", fontWeight: "500", color: "#000000" }}
            >
              <span style={{ fontWeight: "800" }}>
                You will get all the <span style={{ color: "#4CAF50" }}>updates</span> there.
              </span>
            </p>
          </div>
          <div className="iconhand">
            <FaHandPointDown />
          </div>

          {/* WhatsApp Group Button */}
          <div
            style={{
              marginTop: "60px",
              display: "flex",
              justifyContent: "center",
              width: "92%",
            }}
          >
            <Link
              href="https://chat.whatsapp.com/GIc1aDgZblyK8yc7RcU1pT"
              className="aaa"
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "-60px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#4CAF50",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  padding: "15px 30px",
                  borderRadius: "50px",
                  cursor: "pointer",
                }}
              >
                <img
                  src="/Vector.png"
                  style={{ marginRight: "10px",width:'auto' }}
                  alt="WhatsApp Icon"
                />
                <span style={{ fontSize: "18px" }}>
                  Join WhatsApp Community
                </span>
              </div>
            </Link>
          </div>

          {/* Optional: Additional Image */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              margin: isMobile ? "40px 50px 0px 50px" : "20px 50px 10px 50px",
            }}
          >
            <img
  src="/4262880_2251424 1.png"
  style={{ height: "30%", width: "auto", maxWidth: "100%" }}
  alt="Illustration"
/>

          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
