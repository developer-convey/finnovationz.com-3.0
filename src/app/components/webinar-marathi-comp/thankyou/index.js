import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

import { motion } from "framer-motion";

import "./thankyou.css";
import { isMobile } from "react-device-detect";
import Link from "next/link";
// import Footer from "../Footer/Footer";

function ThankYou({ programmeData }) {
  const [isHomeBannerVisible, setIsHomeBannerVisible] = useState(true);
  const homeBannerRef = useRef(null);

  useEffect(() => {
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
        <div style={{}} className="imgbackground mt-5">
          {/* <img src="/Rectangle1.svg" alt="" style={{ height:'100%', width: '100%', objectFit: 'fill'}} /> */}
          <div
            style={{
              width: "100%",
              display: "flex",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            {/* <img src="/tick-mark 1.svg" alt="" style={{ height: 77 }} /> */}
            <p

              style={{
                fontSize: isMobile ? "32px" : "48px",
                lineHeight: "40px",
                marginTop: "10px",
              }}
            >
              <span style={{}}>Registration </span> <br />
            </p>
            <span
              style={{
                color: "#377BDC",
                fontWeight: "bold",
                fontSize: isMobile ? "32px" : "48px",
                lineHeight: "40px",
                marginTop: "10px",
              }}
            >
              Incomplete{" "}
            </span>

            <div>
              <Link
                href={
                  programmeData?.whatsapp_group_link
                    ? programmeData?.whatsapp_group_link
                    : ""
                }
                className="a"
              >
                <div
                  style={{
                    backgroundColor: "#4CAF50",
                    color: "#fff",
                    display: "flex",
                    flexDirection: "row",
                    padding: "20px 50px",
                    borderRadius: 50,
                    marginTop: 30,
                  }}
                >
                  <img src="/Vector.png" style={{ marginRight: "10px" }} />
                  <span style={{ fontSize: "18px" }}> Join Whatsapp Group</span>
                </div>
              </Link>
            </div>
            <div className="thankyougif">
              <motion.img
                src="/images/thankyou.gif"
                style={{ height: 60 }}
                alt="Thank you Icon"
                initial={{ x: 0, y: 20 }} // Start position off the screen to the left
                animate={{ x: 0, y: -10 }} // Move to the center and then up
                transition={{
                  repeat: Infinity, // Repeat the animation infinitely
                  repeatType: "mirror", // Mirror the animation
                  duration: 1, // Animation duration
                  // ease: "easeInOut" // Easing function
                }}
              />
            </div>


             
          


        
           
       
           

            <p
              className="text_para"
              style={{
                fontSize: 18,
                lineHeight: "22.59px",
                // marginTop: "25px",
                fontWeight: "500",
                textAlign: "center",
                marginTop: -20,
                fontFamily: "Mulish",
              }}
            >

              Complete the{" "}
              <span style={{ fontWeight: "800" }}>registration </span>by{" "}
              <span style={{ fontWeight: "800" }}>joining </span> this official{" "}
              <span style={{ fontWeight: "800" }}> WhatsApp group </span>
              <br />
            </p>
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                margin: isMobile ? "40px 50px 0px 50px" : "0px 50px 20px 50px",
              }}
            >
              <Link
                href={
                  programmeData?.whatsapp_group_link
                    ? programmeData?.whatsapp_group_link
                    : ""
                }
                className="a"
                style={{display:'flex',justifyContent:'center'}}
              >
                <div
                  style={{
                    backgroundColor: "#4CAF50",
                    color: "#fff",
                    display: "flex",
                    flexDirection: "row",
                    padding: "20px 50px",
                    borderRadius: 50,
                  }}
                >
                  <img src="/Vector.png" style={{ marginRight: "10px" }} />
                  <span style={{ fontSize: "18px" }}> Join Whatsapp Group</span>
                </div>
              </Link>
            </div>



           
           
          
           
         


          </div>
        </div>
      </div>
    </>
  );
}

export default ThankYou;
