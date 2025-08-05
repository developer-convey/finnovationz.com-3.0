import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { isMobile } from "react-device-detect";
import Link from "next/link";
import { Flex } from "antd";
import { FaHandPointDown } from "react-icons/fa";
import "./thankyou.css";

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

  return (
    <>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Thank You</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>

        <div className="imgbackground mt-5" style={{ textAlign: "center" }}>
          {/* Title and Subheading */}
          <p
            style={{
              fontSize: isMobile ? "32px" : "48px",
              lineHeight: "40px",
              marginTop: "10px",
            }}
          >
            <span
              style={{
                color: "#e60201",
                fontWeight: "bold",
                fontSize: isMobile ? "32px" : "48px",
                lineHeight: "40px",
                marginTop: "100px",
              }}
            >
              Last Step: Join{" "}
              <span style={{ fontWeight: "800", color: "#00bf63" }}>
                WhatsApp
              </span>{" "}
              Community for Webinar Link
            </span>
          </p>
          {/* <p style={{ fontSize: "18px", fontWeight: "500", lineHeight: "22.59px", marginTop: "30px", color: "#000000" }}>
             Thank you for registering for the <span style={{ fontWeight: "800" }}>counselling session.</span>
           </p> */}

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
              <span style={{ fontWeight: "800" }}>Click below </span>to join the{" "}
              <span style={{ fontWeight: "800", color: "#00bf63" }}>
                {" "}
                WhatsApp
              </span>{" "}
              Community for Webinar Link{" "}
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
              href={programmeData?.whatsapp_group_link || ""}
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

export default ThankYou;
