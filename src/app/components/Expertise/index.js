import React from "react";
import "./Expertise.css";

function Expertise() {
  return (
    <>
      <section className="expertise">
        <div className="container">
          <div className="bg-white content">
            <div className="row justify-content-center align-items-center">
              <div className="col-12 col-md-6 col-xl-3 heading">
                <h2 className="fw-bold">
                  <span className="fw-normal">Our</span>
                  <br className="d-none d-md-block"></br> expertise
                </h2>
              </div>
              <div className="col-12 col-md-6 col-xl-3 mt-4">
                <div className="d-flex align-items-center">
                  <div className="">
                    <div style={{ position: "relative" }}>
                      <img loading="lazy" src="/ex_youtube.svg" />
                      <div style={{ position: "absolute", top: 10, left: 10 }}>
                        <img loading="lazy"
                          src="/youtb.jpg"
                          style={{ height: 60, width: 60, borderRadius: 30 }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ps-2 expertise_details">
                    <h4>2.4 Mn+</h4>
                    <span>Subscribers (Youtube)</span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-3 mt-4">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img loading="lazy" src="/user.png" />
                  </div>
                  <div className="ps-2 expertise_details">
                    <h4>100 k+</h4>
                    <span>learners engaged up untill now</span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-3 mt-4">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img loading="lazy" src="/ex_learner.svg" />
                  </div>
                  <div className="ps-2 expertise_details">
                    <h4>147+ Hrs</h4>
                    <span>Content Created on Financial Litreacy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Expertise;
