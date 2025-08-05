import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";
import Link from "next/link";
import { FaHandPointDown } from "react-icons/fa";
import "./newthankyou.css";
import Head from "next/head";


function ThankYou({ programmeData }) {
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
    const handleResize = () => {
      setWindowWidth(typeof window !== "undefined" && window.innerWidth);
    };

    typeof window !== "undefined" &&
      window.addEventListener("resize", handleResize);

    return () => {
      typeof window !== "undefined" &&
        window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Add the script for Google Analytics conversion tracking
  useEffect(() => {
    // Function to load the Google Tag Manager script and Google Analytics
    const loadGtmAndGtag = () => {
      // Google Tag Manager script
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtm.js?id=AW-11292341588`;
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        // Initialize gtag after the GTM script is loaded
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        gtag("js", new Date());

        // Trigger the conversion event with gtag
        gtag("config", "AW-10807341659");

        // Trigger the conversion event with the provided send_to parameter
        gtag("event", "conversion", {
          send_to: "AW-10807341659/t4x_COnB_dEZENvkq6Eo",
          transaction_id: "",  // Provide transaction ID if necessary
        });
      };
    };

    // Load the GTM and Google Analytics
    if (!window.gtag) {
      loadGtmAndGtag();
    } else {
      // If gtag is already available, trigger the conversion event immediately
      window.gtag("event", "conversion", {
        send_to: "AW-10807341659/t4x_COnB_dEZENvkq6Eo",
        transaction_id: "",
      });
    }

    // Cleanup: remove the script on unmount
    return () => {
      const existingScript = document.querySelector(
        'script[src="https://www.googletagmanager.com/gtm.js?id=AW-11292341588"]'
      );
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
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
        <div className="imgbackground mt-5" style={{ textAlign: "center" }}>
          {/* Title and Subheading */}
          
            
            
          
          <div
            style={{
              border: "1px solid #377BDC",
              padding: isMobile ? "15px" : "20px",
              backgroundColor: "#fff",
              boxShadow: "0 4px 8px rgba(55, 123, 220, 0.5)",
              borderRadius: "10px",
              maxWidth: "1000px",
              margin: "20px 16px",
              textAlign: "center",
              marginTop: "50px",
            }}
          >
            <p
              style={{ fontSize: "20px", fontWeight: "500", color: "#000000" }}
            >
              <span style={{ fontWeight: "800" }}>Thank You! 🙏 </span>
              <span style={{ fontWeight: "800", color: "#000000" }}><br></br>
                {" "}
                Our Senior Counsellor will contact you soon.
              </span>
            </p>
          </div>
          
          {/* WhatsApp Group Button */}
          <div
            style={{
              marginTop: "0px",
              display: "flex",
              justifyContent: "center",
              width: "92%",
            }}
          >
            
                
              
          </div>

          
          
        </div>
      </div>
    </>
  );
}

export default ThankYou;
