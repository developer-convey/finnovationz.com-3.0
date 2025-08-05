import React from "react";
import "./TrustedBroker.css";

import Link from "next/link";
import Files from "@/config/file";
import DefaultImage from "../DefaultImage";
function TrustedBroker() {
  return (
    <>
      <section className="py-5 py-lg-0 recommendation">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Our Recommendation</h2>
              <p className="mb-0 text-center" style={{ fontSize: 18 }}>
                Most trusted and loved brokers by FinnovationZ.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 mt-4">
              <div className="broker_card upstox-bg">
                <DefaultImage
                  loading="lazy"
                  src={Files?.brokerLandingPage?.upstoxLogo}
                  alt="upstox"
                  className="lg:mb-2 mb-5"
                />{" "}
                <Link
                  href="https://rebrand.ly/fngqxga"
                  className="demat-btn text-decoration-none"
                >
                  {" "}
                  Open Demat Account Now
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4">
              <div className="broker_card angel-bg">
                <DefaultImage
                  loading="lazy"
                  src={Files?.brokerLandingPage?.angleLogo}
                  alt="upstox"
                  className="mb-5"
                />
                <Link
                  href="https://tinyurl.com/2yc8cteu"
                  className="demat-btn text-decoration-none"
                >
                  {" "}
                  Open Demat Account Now
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 ">
              <div className="broker_card dhan-bg">
                <DefaultImage
                  loading="lazy"
                  src="/dhan-logo.svg"
                  alt="upstox"
                  className="mb-5"
                />
                <Link
                  href="https://invite.dhan.co/?join=PRWE10"
                  className="demat-btn text-decoration-none"
                >
                  {" "}
                  Open Demat Account Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TrustedBroker;
