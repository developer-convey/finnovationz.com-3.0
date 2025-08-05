import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

import "./thankyou.css";
import { isMobile } from "react-device-detect";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
// import Header from "@/app/components/header";
// import Brokerfooter from "@/app/components/brokerFooter";

function ThankYou({ marathidata }) {
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
    {/* <Header/> */}
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Thank You</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div style={{}} className="imgbackground mt-5">
          {/* <img src="/Rectangle1.svg" alt="" style={{ height:'100%', width: '100%', objectFit: 'fill'}} /> */}
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
                    fontSize: isMobile ? "32px" : "36px",
                    lineHeight: "40px",
                    marginTop: "18px",
                  }}
                >
                  <span style={{ color: "#377BDC", fontWeight: "bold" }}>
                    जॉइन केल्या बद्दल आभार{" "}
                  </span>
                </p>
                {/* <p
              className="textsize"
              style={{
                lineHeight: "40px",
                marginTop: "30px",
                color: "#377BDC",
                fontWeight: "800",
                fontFamily: "Mulish",
                marginTop: "20px",
                textAlign: "center",
              }}
            >
              Share Market Mastery
            </p> */}

                {/* <div className="onDecstop" style={{border: '1px solid #377BDC', position: 'relative',borderRadius: 10, marginTop: 45 }}>
          <span className="cardParagraph" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontSize: 14, background: '#E7F2F9', alignSelf: 'center', position: 'absolute',   top:  isMobile ? '-12%' : '-14%' ,left: isMobile ? '7%' : '9%',right : isMobile ?"20%" : "11%" ,fontWeight:'600',width: isMobile ? "240px" : "" }}>
          You will receive all the details on your WhatsApp and Email
          </span>
          <div className="onDecstopcard" >
          <div style={{display:'flex' ,flexDirection:'row' ,justifyContent:'flex-start' ,width:'50%' ,margin: isMobile? "35px 0px 0px 50px": "50px 0px 10px 50px" }}>
             <img src="images/Mail_icon.png" style={{height: isMobile ? 70 : 45, width:  isMobile ? 70 :45}} />
            
             </div>
             <div style={{display:'flex' ,flexDirection:'row' ,justifyContent:'flex-start' ,width:'50%',margin: isMobile ? "40px 50px 0px 50px" :"52px 50px 10px 50px"}}>
             <img src="images/whatApp_icon.png" style={{height: isMobile ? 60 :40, width: isMobile ? 60 : 40}}  />
             
             </div>
             </div>
        </div> */}
                {/* <p
              className="text_para"
              style={{
                fontSize: 18,
                lineHeight: "22.59px",
                marginTop: "10px",
                fontWeight: "500",
                textAlign: "center",
                marginTop: 50,
              }}
            >
              You will receive a joining link from ‘Rigi’ soon
            </p> */}
                <p
                  className="text_para"
                  style={{
                    fontSize: 18,
                    lineHeight: "22.59px",
                    marginTop: "10px",
                    fontWeight: "500",
                    textAlign: "center",
                    // marginTop: 45,
                    fontFamily: "Mulish",
                    marginTop: 20,
                  }}
                >
                  आताच Whatsapp community जॉइन करा तुम्हाला सेशन ची लिंक ह्या
                  group वर मिळेल.
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    margin: isMobile
                      ? "40px 50px 0px 50px"
                      : "30px 50px 10px 50px",
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
                    margin: isMobile
                      ? "40px 50px 0px 50px"
                      : "15px 50px 20px 50px",
                  }}
                >
                  {/* <img src="/button.png" style={{height:"50%", width:  ""}}  /> */}
                  <Link
                    href={
                      marathidata?.whatsapp_group_link
                        ? marathidata?.whatsapp_group_link
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
                      <span style={{ fontSize: "18px" }}>
                        {" "}
                        Join Whatsapp Group
                      </span>
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

                {/* <div style={{display:'flex' ,flexDirection:'column' ,justifyContent:'center' ,width:'50%',margin: isMobile ? "40px 50px 0px 50px" :"52px 50px 10px 50px"}}>
             <img src="/4262880_2251424 1.png" style={{height: isMobile ? 60 :'30%', width: isMobile ? 60 : '100%'}}  />
             <img src="/button.png" alt="" style={{ marginTop: "50px" ,height:100, width:100 }} />
             </div> */}

                <p
                  className="text_para"
                  style={{
                    fontSize: 18,
                    lineHeight: "22.59px",
                    // marginTop: "10px",
                    fontWeight: "500",
                    textAlign: "center",
                    // marginTop: 45,
                    fontFamily: "Mulish",
                    marginTop:20,
                  }}
                >
                  सेशन मिस्स न होवो ह्या साठी त्वरित जॉइन करा.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Brokerfooter/> */}
    </>
  );
}

export default dynamic(() => Promise.resolve(ThankYou), { ssr: false });
