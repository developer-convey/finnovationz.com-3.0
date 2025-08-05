 "use client"
import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import Head from "next/head";

import { isMobile } from "react-device-detect";
import Link from "next/link";
import { Flex } from "antd";
import { FaHandPointDown } from "react-icons/fa";
import "./thankyou.css";

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

  return (
    <>
      <div>
        <Head>
          <meta charSet="utf-8" />
          <title>Thank You</title>
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
                    fbq('init', '403234998994611');
                    fbq('track', 'PageView');
                    `,
                }}
                />
        </Head>

        <div className="imgbackground mt-1" style={{ textAlign: "center" }}>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
  <p
    style={{
      fontSize: isMobile ? "32px" : "48px",
      lineHeight: "10px",
      marginTop: "10px",
    }}
  >
    <span
      style={{
        color: "#4CAF50",
        fontWeight: "semibold",
        fontSize: isMobile ? "32px" : "45px",
        lineHeight: "40px",
        marginTop: "50px",
        marginBottom:'50px'
      }}
    >
      <span
        style={{
          animation: "zoomEffect 1s infinite alternate",
          display: "inline-block",
        }}
      >
        Congratulations 👏{" "}
      </span>
    </span>
  </p>

  {/* ✅ Move this <p> outside the <span> */}
{/*<p style={{marginTop:'50px',fontSize:'20px',color:'grey'}}>
    Check email (in Inbox and spam folder) from FinnovationZ for
    counselling session link.
  </p>*/}

  <p
  style={{
    fontSize: "40px", // Default for larger screens
    color: "black",
    fontWeight: "400",
    margin: "0",
    lineHeight: "2",
  }}
>
  You have been successfully enrolled for Foundation Course 2.0
  <style>
    {`
      @media (max-width: 768px) {
        p {
          
          font-size: 22px !important; /* Decrease font size for mobile */
        }
      }
    `}
  </style>
</p>

</div>

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
          <div
  style={{
    marginTop: '1.5rem',
    color: 'black',
    fontSize: '16px',
    fontWeight: '400',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
  }}
>
{/* <input
    type="checkbox"
    checked
    style={{
      width: '24px',
      height: '24px',
      flexShrink: '0',
      marginTop: '0.25rem',
      marginLeft: '0.5rem',
      accentColor: '#00bf63',
    }}
  /> */}
  <label
    style={{
      fontSize: '22px',
      textAlign: 'center',
      lineHeight: '1.375',
    }}
  >
    You will get access on 19th Feb 2024
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
              style={{ fontSize: "18px", fontWeight: "500", color: "#000000" }}
            >
              <span style={{ fontWeight: "650" }}>
                Until then check out our YouTube channel
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
    href="https://www.youtube.com/@namaskarprasad" // Replace with your YouTube link
    className="aaa"
    style={{
      display: "flex",
      justifyContent: "center",
      marginTop: "-60px",
      textDecoration: "none",
    }}
  >
    <div
      style={{
        backgroundColor: "red", // YouTube's red color
        color: "#fff",
        display: "flex",
        alignItems: "center",
        padding: "10px 30px",
        borderRadius: "20px",
        cursor: "pointer",
      }}
    >
      <img
        src="/youtube-svgrepo-com (2).svg" // Replace with your YouTube icon path
        style={{ marginRight: "10px",height:'40px' }}
        alt="YouTube Icon"
      />
      <span style={{ fontSize: "18px" }}>
        Join YouTube Channel
      </span>
    </div>
  </Link>
</div>


          {/* Optional: Additional Image */}
          {/* <div
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
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Page;
