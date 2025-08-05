import React, { useEffect, useState } from "react";
import "./AboutMentor.css";
import Files from "@/config/file";
import DefaultImage from "@/app/components/DefaultImage";
function AboutMentor() {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    // Set window width on initial load
    setWindowWidth(typeof window !== "undefined" && window.innerWidth);

    // Listen for window resize events
    const handleResize = () =>
      setWindowWidth(typeof window !== "undefined" && window.innerWidth);
    typeof window !== "undefined" &&
      window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () =>
      typeof window !== "undefined" &&
      window.removeEventListener("resize", handleResize);
  }, []);

  const textStyle = {
    fontFamily: '"Open Sans", sans-serif',
  };

  return (
    <>
      <section className="about-mentor" style={textStyle}>
        {windowWidth < 450 ? (
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-sm-start text-center">
                <h2>भेटा तुमच्या गुरूंना </h2>
                <h3 className="text-center">Prasad R. Lendwe</h3>
                <p>
                  मी <strong> १० वर्षं</strong> पूर्वी भारताला आर्थिकदृष्ट्या
                  जागरूक करण्याच्या उद्देशाने <strong> FinnovationZ </strong> ची
                  स्थापना केली.
                </p>
                <div className="d-flex align-items-center social-share my-4">
                  <img src="/utube.png" alt="" />
                  <span>2.34 M</span>
                  <img src="/ins.png" alt="" />
                  <span>245 K</span>
                  <img src="/linkedin.png" alt="" />
                  <span className="link">10 K</span>
                </div>
                <div className="col-md-6">
                  <DefaultImage
                    src={Files?.brokerLandingPage?.mentorImage}
                    alt=""
                    className="w-100"
                  />
                </div>
                <p className="add-font">
                  FinnnovationZ एक असं मंच आहे ज्या द्वारे आम्ही सर्व सामान्य
                  गुंतवणूकदारांना मार्गदर्शन तर देतोच पण त्यांना लागणाऱ्या सर्व
                  सेवा जसं की broker comparison, latest news आणि trends इत्यादि
                  एकाच छताखाली पुरवतो.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-sm-start text-center">
                <h2 className="fomtt"> भेटा तुमच्या गुरूंना </h2>
                <h3>Prasad R. Lendwe</h3>
                <p className="sub-title">
                  मी <strong> १० वर्षं</strong> पूर्वी भारताला आर्थिकदृष्ट्या
                  जागरूक करण्याच्या उद्देशाने <strong> FinnovationZ </strong> ची
                  स्थापना केली.
                </p>
                <div className="d-flex align-items-center social-share my-4">
                  <img src="/utube.png" alt="" />
                  <span>2.5+ M</span>
                  <img src="/ins.png" alt="" />
                  <span>245 K</span>
                  <img src="/linkedin.png" alt="" />
                  <span className="link">10 K</span>
                </div>

                <p className="sub-title">
                  FinnnovationZ एक असं मंच आहे ज्या द्वारे आम्ही सर्व सामान्य
                  गुंतवणूकदारांना मार्गदर्शन तर देतोच पण त्यांना लागणाऱ्या सर्व
                  सेवा जसं की broker comparison, latest news आणि trends इत्यादि
                  एकाच छताखाली पुरवतो
                </p>
              </div>
              <div className="col-md-6">
                <DefaultImage
                  src={Files?.brokerLandingPage?.mentorImage}
                  alt=""
                  className="w-100"
                />
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default AboutMentor;
