'use client'
import Image from 'next/image';

import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import Head from "next/head";
import { useRouter } from "next/navigation";

import { isMobile } from "react-device-detect";
import Link from "next/link";
export default function Home() {
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4 pt-[30px]">
      {/* Header */}
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-2">
      Thank you for signing up for <span className='font-bold'> India’s Biggest Value Investing </span>
        <br />
        Session with  <span className='font-bold'>Prasad Sir!</span>
      </h1>

      {/* What You'll Get Section */}
      <div className="p-4 rounded-lg mb-4 w-full max-w-[800px] mx-auto text-center">
  <div className="flex items-center justify-center mb-4">
  <Image src='/giftyt.png' alt="WhatsApp" width={40} height={40} className="mr-2" />
    <h2 className="text-lg md:text-[30px] font-semibold text-black">
      What You’ll Get (Only in the WhatsApp Group):
    </h2>
  </div>

  <ol className="list-decimal list-inside font-semibold text-black text-base md:text-[24px] mt-6 space-y-4 text-left max-w-md mx-auto">
    <li> <span className='text-red-600 mt-3 pt-3'>Buffett’s Cheat Sheet</span></li>
    <li> <span className='text-red-600 mt-3 pt-3'>Exclusive Growth Stock Screens</span></li>
    <li className=" text-sm flex md:text-[24px] items-center text-blac mt-3">
    <span className="text-lg ml-2 me-2">→</span> Delivered after the session!
     
    </li>
  </ol>
</div>


      {/* Join Now Button */}
      <div className="text-center mb-4">
        <p className="flex items-center md:text-[24px] justify-center text-black  font-semibold  mb-2">
          <span className="w-6 h-6  rounded-full flex items-center justify-center mr-2">👉</span>
          Click below to join now:
        </p>
        <a
          href=" https://chat.whatsapp.com/BkGaRW1pYIo14rU5mvvWgy"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-6 py-4 rounded-full flex items-center justify-center hover:bg-green-700 transition duration-300"
        >
          <Image src='/Vector.png' alt="WhatsApp" width={20} height={20} className="mr-2" />
          Join WhatsApp Group 

        </a>
      </div>

      {/* Updates Section */}
      <p className="text-center text-gray-700 mb-4 max-w-md">
      All important updates, session link, and bonus resources will be shared in the WhatsApp group and also sent to your registered email and phone number.
      </p>

      {/* See You Inside Section */}
      <div className="text-center text-green-600 mb-4">
        <p>See you inside! 🚀📈</p>
      </div>

      {/* Bottom Image */}
      <div className="w-full max-w-sm">
        <Image src='/4262880_2251424 1.png' alt="Bottom Illustration" width={50} height={10} layout="responsive" />
      </div>
    </div>
  );
}