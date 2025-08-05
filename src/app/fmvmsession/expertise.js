import React, { useState, useEffect } from "react";
import "./expertise.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Expertise() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const iconImageStyle = {
    height: isMobile ? 65 : 100,
    width: isMobile ? 65 : 100,
  };

  const overlaidImage1Style = {
    height: isMobile ? 30 : 50,
    width: isMobile ? 35 : 55,
    borderRadius: 30,
  };

  const overlayPosition1 = {
    position: "absolute",
    top: isMobile ? 18 : 26,
    left: isMobile ? 16 : 24,
  };

  const overlaidImage2Style = {
    height: isMobile ? 30 : 50,
    width: isMobile ? 30 : 50,
    borderRadius: 30,
  };

  const overlayPosition2 = {
    position: "absolute",
    top: isMobile ? 18 : 26,
    left: isMobile ? 18 : 24,
  };

  return (
    <section className="expertise" style={{ marginTop: "70px", marginBottom: "-100px" }}>
      <div className="container">
        <div className="bg-white content p-3 py-5 rounded-1rem">
          <div className="row align-items-center">
            <div className="col-12 col-xl-12">
              <div className="row">
                {/* ITEM 1 */}
                <div className="col-12 col-md-3 mb-1">
                  <div className="d-flex align-items-center position-relative">
                    <img
                      loading="lazy"
                      src="/ex_youtube.svg"
                      alt="YouTube"
                      style={iconImageStyle}
                    />
                    <div style={overlayPosition1}>
                      <img
                        loading="lazy"
                        src="/exr.png"
                        alt="Profile"
                        style={overlaidImage1Style}
                      />
                    </div>
                    <div className="ps-2 expertise_details">
                      <h4>SEBI</h4>
                      <span>Registered Research Analyst</span>
                    </div>
                  </div>
                </div>

                {/* ITEM 2 */}
                <div className="col-12 col-md-3 mb-1">
                  <div className="d-flex align-items-center position-relative">
                    <img
                      loading="lazy"
                      src="/user.png"
                      alt="Learners"
                      style={iconImageStyle}
                    />
                    <div style={overlayPosition2}>
                      <img
                        loading="lazy"
                        src="/exy.png"
                        alt="YouTube"
                        style={overlaidImage2Style}
                      />
                    </div>
                    <div className="ps-2 expertise_details">
                      <h4>2.6 Mn+</h4>
                      <span>Subscribers engaged up until now</span>
                    </div>
                  </div>
                </div>

                {/* ITEM 3 */}
                <div className="col-12 col-md-3 mb-1">
                  <div className="d-flex align-items-center">
                    <img
                      loading="lazy"
                      src="/user.png"
                      alt="Learners"
                      style={iconImageStyle}
                    />
                    <div className="ps-2 expertise_details">
                      <h4>100 k+</h4>
                      <span>Learners Engaged up until now</span>
                    </div>
                  </div>
                </div>

                {/* ITEM 4 */}
                <div className="col-12 col-md-3 mb-1">
                  <div className="d-flex align-items-center">
                    <img
                      loading="lazy"
                      src="/ex_learner.svg"
                      alt="Hours"
                      style={iconImageStyle}
                    />
                    <div className="ps-2 expertise_details">
                      <h4>147+ Hrs</h4>
                      <span>Content Created on Financial Literacy</span>
                    </div>
                  </div>
                </div>
              </div> {/* end of row */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expertise;
