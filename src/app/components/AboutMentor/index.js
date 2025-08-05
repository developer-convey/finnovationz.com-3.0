import React, { useEffect, useState } from "react";
import "./AboutMentor.css";
import Files from "@/config/file";
import _ from "lodash";
import DefaultImage from "../DefaultImage";

function AboutMentor() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(typeof window !== "undefined" && window.innerWidth);
    };

    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  return (
    <>
      <section className="about-mentor">
        {windowWidth < 450 ? (
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-sm-start text-center">
                <h2>Meet our founder</h2>
                <h3 className="text-center">Prasad R. Lendwe</h3>
                <p>
                  As the <strong>founder of FinnovationZ</strong>, I have been
                  leading & growing this ventures in the financial services
                  sector for <strong>over 10 years.</strong>
                </p>
                <div className="d-flex align-items-center social-share my-4">
                  <img loading="lazy" src="/utube.png" alt="" />
                  <span>2.5+ M</span>
                  <img loading="lazy" src="/ins.png" alt="" />
                  <span>245 K</span>
                  <img loading="lazy" src="/linkedin.png" alt="" />
                  <span className="link">10 K</span>
                </div>
                <div className="col-md-6">
                  <DefaultImage
                    loading="lazy"
                    src={Files?.brokerLandingPage?.mentorImage}
                    alt=""
                    className="w-100"
                  />
                </div>
                <p className="add-font">
                  FinnovationZ is a platform that provides financial education,
                  guidance, and tools to retail investors, while FinnovationZ is
                  a media outlet that covers the latest trends and news in the
                  finance industry.{" "}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-sm-start text-center">
                <h2 className="fomtt"> Meet our founder</h2>
                <h3>Prasad R. Lendwe</h3>
                <p className="sub-title">
                  As the{" "}
                  <strong style={{ fontWeight: 800 }}>
                    founder of FinnovationZ
                  </strong>
                  , I have been leading & growing this ventures in the financial
                  services sector for{" "}
                  <strong style={{ fontWeight: 800 }}>over 10 years.</strong>
                </p>
                <div className="d-flex align-items-center social-share my-4">
                  <img loading="lazy" src="/utube.png" alt="" />
                  <span>2.5 M</span>
                  <img loading="lazy" src="/ins.png" alt="" />
                  <span>245 K</span>
                  <img loading="lazy" src="/linkedin.png" alt="" />
                  <span className="link">10 K</span>
                </div>

                <p className="sub-title">
                  FinnovationZ is a platform that provides financial education,
                  guidance, and tools to retail investors, while FinnovationZ is
                  a media outlet that covers the latest trends and news in the
                  finance industry.{" "}
                </p>
              </div>
              <div className="col-md-6">
                <DefaultImage
                  loading="lazy"
                  src={Files?.brokerLandingPage?.mentorImage}
                  alt=""
                  className="w-100 "
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
