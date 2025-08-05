import React, { useState } from "react";
import Style from "../coursesStyle/course.module.css";
import useAnalyticsEventTracker from "../components/useAnalyticsEventTracker";
import Link from "next/link";

import  { forwardRef } from "react";

const PricingCombo = (({ scrollToContact, ...props }, ref) => {  
  const [isHovered, setIsHovered] = useState(false);
  const gaEventTracker = useAnalyticsEventTracker("Pricing section");
  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <section  className={`${Style.Pricingsec}`} id="pricing">
        <div className="container">
          <div
            className={`row align-items-center justify-content-center g-lg-0 position-relative z-1`}
          >
            <div className="col-md-12 text-center mb-10">
              <h2>Our Pricing</h2>
            </div>
           
            <div className="col-lg-5 mt-4  md:w-[400px] mx-auto ">
              <div className={`${Style.recommendedOffer}`}>
                <span className={Style.shape}> Offer Price</span>
                <div className={Style.top_content}>
                  {/* {props.data.MrpPrice1 !== "" ? (
                    <h2 className="mb-3">Combo Offer</h2>
                  ) : (
                    ""
                  )} */}
              <div className="flex justify-center items-center h-full w-full">
  <button className="px-4 flex items-center justify-center py-2 text-[#2A7DE1] bg-white font-semibold rounded-full border border-[#3A89F8] shadow-md">
  For One Session

  </button>
</div>

                  <h3 className="mt-4 text-[30px] pt-3">Share Market Mastery
</h3>
                  {/* {props.data.MrpPrice1 !== "" ? (
                    <>
                      {" "}
                      <img src="/plus.svg" alt="" className="mb-3" />
                    </>
                  ) : (
                    ""
                  )} */}
                 
                
                </div>
                <div
                  className={`border-0 bg-transparent pt-4 mt-3 ${Style.price_card}`}
                >
                  {/* {props.data.MrpPrice1 !== "" ? (
                    <p className="mb-0 d-flex align-items-center justify-content-center">
                      <img src="/offers_icon.svg" alt="" className="me-1" /> 33%
                      off
                    </p>
                  ) : (
                    ""
                  )} */}
                  <h4>
                    <del
                      style={{
                        position: "relative",
                        display: "inline-block",
                        textDecoration: "none", // Remove the default strikethrough line
                        fontSize: "20px",
                      }}
                    >
                     ₹499.00
                      <span
                        style={{
                          width: "60px",
                          height: "2px",
                          backgroundColor: "#0d6efd",
                          position: "absolute",
                          transform: "rotate(15deg)",
                          top: "17%",
                          left: "0%",
                          transformOrigin: "left center",
                          padding: "1px",
                          borderRadius: "13px",
                        }}
                        className="ml-2"
                      />
                    </del>
                  </h4>
                  <h3>FREE</h3>
                  {/* {props.data.MrpPrice1 !== "" ? (
                    <h4>
                      <del>{props.data.comboMRP}</del>
                    </h4>
                  ) : (
                    ""
                  )} */}
                 <div className="flex justify-center items-center mt-4">
  <button
    onClick={scrollToContact}
    className="site_btn text-decoration-none fs-5 px-5 py-3 d-inline-block"
  >
    Reserve My Spot Now
  </button>
</div>

                </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>
    </>
  );
})

export default PricingCombo;
