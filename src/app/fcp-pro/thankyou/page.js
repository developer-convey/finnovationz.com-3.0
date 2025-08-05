"use client"
import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import Head from "next/head";

import { isMobile } from "react-device-detect";
import Link from "next/link";
import { Flex } from "antd";
import { FaHandPointDown } from "react-icons/fa";
import "./thankyou.css";
import Meta from "../../../component/Meta";

function Page() {
  const [isHomeBannerVisible, setIsHomeBannerVisible] = useState(true);
  const homeBannerRef = useRef(null);

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
    // Add the Meta Pixel script dynamically to avoid SSR issues
    if (typeof window !== "undefined") {
      // Only execute Pixel code client-side
      (function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
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
      })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

      fbq("init", "403234998994611"); // Replace with your Pixel ID
      fbq("track", "PageView"); // Tracking PageView event
    }
  }, []);

  return (
    <>
      <div>
        <Helmet>
          <Meta />
          <title>Thank You</title>
        </Helmet>

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
                Check email (in Inbox and spam folder) from FinnovationZ for
                counselling session link.
              </p>
              <span className="font-normal text-[22px] md:text-[40px] text-black">
                Join our{" "}
                <span className="text-[#4CAF50]">WhatsApp</span> community of
                Finance Club Pro (FCP) aspirants.
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
              after joining, so that I can easily pick winning stocks like other{" "}
              <span className="text-[#00bf63] font-normal"> FCP aspirants.</span>
            </label>
          </div>

          {/* Red shadow box with WhatsApp link */}
          <div
            style={{
              border: "1px solid #377BDC",
              padding: isMobile ? "15px" : "20px",
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
              href="https://chat.whatsapp.com/BXzSIq3psRQ9nl3Fn8fnMy"
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
                  style={{ marginRight: "10px" }}
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
              style={{ height: "30%", width: "" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
