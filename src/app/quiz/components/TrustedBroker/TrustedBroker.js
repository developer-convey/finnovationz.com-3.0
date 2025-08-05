import React, { Component } from "react";
import "../TrustedBroker/TrustedBroker.css";
function TrustedBroker() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-4 mt-4">
              <div className="broker_card upstox-bg">
                <img src="/upstox.svg" alt="upstox" className="mb-5" />
                <button className="demat-btn"> Open Demat Account Now</button>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="broker_card angel-bg">
                <img src="/angel_one.svg" alt="upstox" className="mb-5" />
                <button className="demat-btn"> Open Demat Account Now</button>
              </div>
            </div>
            <div className="col-md-4 mt-4 ">
              <div className="broker_card dhan-bg">
                <img src="/dhan.svg" alt="upstox" className="mb-5" />
                <button className="demat-btn"> Open Demat Account Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TrustedBroker;
