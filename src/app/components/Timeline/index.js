import React, { Component } from "react";
import "./Timeline.css";
import Files from "@/config/file";
import DefaultImage from "../DefaultImage";

function Timeline() {
  return (
    <>
      <section className="pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="main-heading pt-5 mb-5 ">
                What will this <br className="d-none d-md-block" />{" "}
                <span>90 Minitues</span> give you back?
              </h2>
            </div>
            <div className="col-md-5 left-side-timeline d-none d-md-block">
              <div className="video-desc">
                <h3> Understanding Mutual Funds</h3>

                <DefaultImage
                  loading="lazy"
                  src= {Files?.webinar?.mutualFund}
                  alt=""
                  className="w-100 mb-3"
                />
                <p>
                  Then we will set your goals and achieve them through Mutual
                  Funds
                </p>
              </div>
              <div className="video-desc">
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
              </div>
            </div>
            <div className="col-md-2 d-none d-md-block">
              <div className="time-line">
                <div className="step active"></div>
                <div className="step "></div>
                <div className="step "></div>
                <div className="step "></div>
              </div>
            </div>
            <div className="col-md-5 d-none d-md-block">
              <div className="video-desc">
                <h3> Finding Multibagger </h3>

                <DefaultImage
                  loading="lazy"
                  src= {Files?.webinar?.getMultiBaggerReturns}
                  alt=""
                  className="w-100 mb-3"
                />
                <p>
                  This will be based on practical case studies of IRFC and
                  stocks, which we have already talked about in our Diwali
                  muhurta trading videos
                </p>
              </div>
              <div className="video-desc">
                <h3>Finding Freehit Investment</h3>

                <DefaultImage
                  loading="lazy"
                  src= {Files?.webinar?.rightTime}
                  alt=""
                  className="w-100 mb-3"
                />
                <p>
                  {" "}
                  The market gives you some low-risk, high-potential
                  money-making opportunities. How to find them? We will learn
                  this based on what and how I have done this in past.
                </p>
              </div>
            </div>
            <div className="col-md-5 d-block d-md-none">
              <div className="video-desc">
                <h3> Finding Multibagger</h3>

                <DefaultImage
                  loading="lazy"
                  src= {Files?.webinar?.getMultiBaggerReturns}
                  alt=""
                  className="w-100 mb-3"
                />
                <p>
                  {" "}
                  This will be based on practical case studies of IRFC and
                  stocks, which we have already talked about in our Diwali
                  muhurta trading videos.
                </p>
              </div>
              <div className="video-desc">
                <h3>Understanding Mutual Funds</h3>

                <DefaultImage
                  loading="lazy"
                  src= {Files?.webinar?.mutualFund}
                  alt=""
                  className="w-100 mb-3"
                />
                <p>
                  Then we will set your goals and achieve them through Mutual
                  Funds
                </p>
              </div>
              <div className="video-desc">
                <h3>Finding Freehit Investment</h3>

                <DefaultImage
                  loading="lazy"
                  src= {Files?.webinar?.rightTime}
                  alt=""
                  className="w-100 mb-3"
                />
                <p>
                  {" "}
                  The market gives you some low-risk, high-potential
                  money-making opportunities. How to find them? We will learn
                  this based on what and how I have done this in past.
                </p>
              </div>
              <div className="video-desc">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Timeline;
