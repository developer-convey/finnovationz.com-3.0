import React, { Component } from "react";
import "./Timeline.css";
import Files from "@/config/file";
import DefaultImage from "../DefaultImage";

function Timeline({scrollToContact}) {
  return (
    <>
      <section className="pt-5" style={{marginBottom:'-10px'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="main-heading pt-5 mb-5 ">
                What will this <br className="d-none d-md-block" />{" "}
                <span>90 Minutes</span> give you back?
              </h2>
            </div>
            <div className="col-md-5 left-side-timeline d-none d-md-block">
              <div className="video-desc">
              <h3>Detecting Frauds</h3>

<DefaultImage
  loading="lazy"
  src= {Files?.webinarCopy?.mutualFund}
  alt=""
  className="w-100 mb-3"
/>
<p>
You will never lose money in market due to a fraud now. Become a master in management fraud detection

</p>
              </div>
              {/* <div className="video-desc">
                <h3>Your Q/A</h3>

                <DefaultImage
                  loading="lazy"
                  src= {Files?.webinar?.askMeAnything}
                  alt=""
                  className="w-100 mb-3"
                />
                <p>
                  Ask me anything related to the stock market and finance in
                  general
                </p>
              </div> */}
            </div>
            <div className="col-md-2 d-none d-md-block">
              <div className="time-line">
                <div className="step active"></div>
                <div className="step "></div>
               
                <div className="step "></div>
              </div>
            </div>
            <div className="col-md-5 d-none d-md-block">
              <div className="video-desc">
              <h3> Finding Multibagger</h3>

<DefaultImage
  loading="lazy"
  src= {Files?.webinarCopy?.getMultiBaggerReturns}
  alt=""
  className="w-100 mb-3"
/>
<p>
  {" "}
  Learn practical steps to find stocks which have potential to grow manyfold. 

</p>
              </div>
              <div className="video-desc">
              <h3>Finding Market Opportunities
</h3>

                <DefaultImage
                  loading="lazy"
                  src= {Files?.webinarCopy?.rightTime}
                  alt=""
                  className="w-100 mb-3"
                />
                <p>
                  {" "}
                  My secret on how do I find low risk opportunities in the market. Learn practical steps and find yours.
</p>
              </div>
            </div>
            <div className="col-md-5 d-block d-md-none">
              <div className="video-desc">
                <h3> Finding Multibagger</h3>

                <DefaultImage
                  loading="lazy"
                  src= {Files?.webinarCopy?.getMultiBaggerReturns}
                  alt=""
                  className="w-100 mb-3"
                />
                <p>
                  {" "}
                  Learn practical steps to find stocks which have potential to grow manyfold. 

                </p>
              </div>
              <div className="video-desc">
                <h3>Detecting Frauds</h3>

                <DefaultImage
                  loading="lazy"
                  src= {Files?.webinarCopy?.mutualFund}
                  alt=""
                  className="w-100 mb-3"
                />
                <p>
                You will never lose money in market due to a fraud now. Become a master in management fraud detection

                </p>
              </div>
              <div className="video-desc">
                <h3>Finding Market Opportunities
</h3>

                <DefaultImage
                  loading="lazy"
                  src= {Files?.webinarCopy?.rightTime}
                  alt=""
                  className="w-100 mb-3"
                />
                <p>
                  {" "}
                  My secret on how do I find low risk opportunities in the market. Learn practical steps and find yours.
</p>
              </div>
              {/* <div className="video-desc">
                <h3>Your Q/A</h3>

                <DefaultImage
                  loading="lazy"
                  src= {Files?.webinar?.askMeAnything}
                  alt=""
                  className="w-100 mb-3"
                />
                <p>
                  Ask me anything related to the stock market and finance in
                  general
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <div onClick={scrollToContact}   className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-14 py-3 rounded-full text-white bg-gradient-to-r from-teal-400 to-blue-600 hover:opacity-90 transition"
              
            >
              Reserve My Spot
            </button>
          </div>
    </>
  );
}

export default Timeline;
