import React from "react";
import "./Expertise.css";

function Expertise() {

  const textStyle = {
    fontFamily: '"Open Sans", sans-serif',
  };



  return (
    <>
      <section className="expertise" style={textStyle}>
        <div className="container">
          <div className="bg-white content">
            <div className="row justify-content-center align-items-center">
              <div className="col-12 col-md-6 col-xl-3 heading">
                <h2 className="fw-bold">
                  <span className="fw-normal">आमची </span>
                  <br className="d-none d-md-block"></br> वैशिष्ट्ये
                </h2>
              </div>
              <div className="col-12 col-md-6 col-xl-3 mt-4">
                <div className="d-flex align-items-center">
                  <div className="">
                    <div style={{ position: "relative" }}>
                      <img src="/ex_youtube.svg" />
                      <div style={{ position: "absolute", top: 10, left: 10 }}>
                        <img
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
                    <img src="/user.png" />
                  </div>
                  <div className="ps-2 expertise_details">
                    <h4>100 k+</h4>
                    <span> लोकांना आजतागायत आर्थिक दृष्ट्या साक्षर केले</span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-3 mt-4">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src="/ex_learner.svg" />
                  </div>
                  <div className="ps-2 expertise_details">
                    <h4>147+ Hrs</h4>
                    <span>चा Content आर्थिक साक्षरतेच्या विषयावर बनवला</span>
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
