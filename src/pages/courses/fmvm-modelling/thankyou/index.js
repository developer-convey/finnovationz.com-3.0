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
    <Head>
    <script
          dangerouslySetInnerHTML={{
            __html: `
(function(w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  });

  var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l !== 'dataLayer' ? '&l=' + l : '';

  j.async = true;
  j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
  f.parentNode.insertBefore(j, f);

})(window, document, 'script', 'dataLayer', 'GTM-NXH6WJJQ');
`,
}}
/>
    </Head>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Thank You</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
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
