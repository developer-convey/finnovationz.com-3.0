import React from "react";
import "./MatchBroker.css";
import TabForm from "../TabForm";
import Head from "next/head";

function MatchBroker() {
  return (
    <>
      <section className="broker_match">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center text-lg-start">
              <h2>
                Find Your Perfect <br /> Broker Match
              </h2>
              <p className="menter-subtitle" style={{ fontFamily: "Mulish" }}>
                Just tell us your what you need, We will get you the best one.
              </p>
            </div>
            <div className="col-lg-6">
              <TabForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MatchBroker;
