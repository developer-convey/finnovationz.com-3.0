import { useState, useEffect } from "react";

import Image from "next/image";
import "./HomeBanner.css";
import Link from "next/link";
import Files from "@/config/file";
import DefaultImage from "@/app/components/DefaultImage";

function WebinarHomeBanner({ marathidata, formatDate }) {
  const initialTime = 5400; // 2 hours in seconds
  const [timeLeft, setTimeLeft] = useState(initialTime);

  const textStyle = {
    fontFamily: '"Open Sans", sans-serif',
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft === 0) {
          clearInterval(timer);
          return initialTime;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem("countdownTime", JSON.stringify(timeLeft));
  }, [timeLeft]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, "0")} hr:${minutes
      .toString()
      .padStart(2, "0")} mins:${seconds.toString().padStart(2, "0")} sec`;
  };

  return (
    <>
      <section className="home-banner" style={textStyle}>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-12 mb-5 mb-md-0 text-center text-md-start">
              <Link href="/">
                <img
                  src={Files?.finnovationzLogo?.logo}
                  alt="logo"
                  style={{ width: 182, height: 28 }}
                />
              </Link>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="content text-center text-md-start">
                <p>
                  <span>शेअर मार्केट</span> मधून आपली संपत्ति 10 पटीने वाढवायला
                  शिका
                </p>
                <h1 className="text-[#3782D9]">Share Market Mastery</h1>
                <h6 className="fw-bold">
                  कसल्याही फालतूगिरी शिवाय संपूर्ण ज्ञान
                </h6>
                <div className="date_bg md:block hidden">
                  <p style={{ display: "flex", gap: 5, alignItems: "center" }}>
                    <img
                      src="/calendar.png"
                      alt="calendar"
                      // width={24}
                      // height={25}
                      style={{ width: 24, height: 25 }}
                    />
                    {formatDate(marathidata?.date)}
                    <img src="/dot.svg" style={{ width: 6, height: 7 }} />{" "}
                    <img
                      style={{ width: 24, height: 25 }}
                      src="/blue-clock.png"
                      alt="clock"
                    />
                    {marathidata?.time}
                  </p>
                </div>
                {typeof window !== "undefined" && window.innerWidth > 500 ? (
                  <>
                    <div className="prices_box d-flex flex-wrap justify-content-center justify-content-sm-start">
                      <div className="option active_option flex-wrap">
                        <div>
                          <div style={{ position: "relative" }}>
                            <h2 style={{ fontSize: 22 }}>
                              {" "}
                              <div
                                style={{
                                  width: "60px",
                                  height: 3,
                                  backgroundColor: "#0d6efd",
                                  position: "absolute",
                                  transform: "rotate(15deg)",
                                  top: 10,
                                  left: 50,
                                }}
                              ></div>{" "}
                              ₹{marathidata?.actual_price}
                            </h2>
                          </div>
                          <h4> Free </h4>
                          <span>{formatTime(timeLeft)}</span>
                        </div>
                        {marathidata?.payment_link && (
                          <Link
                            href={marathidata.payment_link}
                            className="site_btn shadow ms-3 mt-2"
                          >
                            जॉइन करा
                          </Link>
                        )}
                      </div>
                    </div>
                    <div className="progress">
                      <div className="progress-bar"></div>
                    </div>
                    <div className="progress-content">
                      <h4 style={{ display: "flex" }}>
                        {marathidata?.enrollcount}+ <span>People Enrolled</span>
                      </h4>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="col-lg-6 col-xl-6 mt-5 mt-lg-0 md:static relative">
              <DefaultImage
                //  style={{width:500,height:450}}
                src="/bannerP.webp"
                alt="banner img"
                // width={500}
                // height={450}
                style={{ width: "100%" }}
              />
              <div className="date_bg md:hidden block ">
                <p style={{ display: "flex", gap: 5, alignItems: "center" }}>
                  <img
                    src="/calendar.png"
                    alt="calendar"
                    // width={24}
                    // height={25}
                    style={{ width: 24, height: 25 }}
                  />
                  {formatDate(marathidata?.date)}
                  <img src="/dot.svg" style={{ width: 6, height: 7 }} />{" "}
                  <img
                    style={{ width: 24, height: 25 }}
                    src="/blue-clock.png"
                    alt="clock"
                  />
                  {marathidata?.time}
                </p>
              </div>
            </div>
          </div>
        </div>
        {typeof window !== "undefined" && window.innerWidth < 500 ? (
          <>
            <div
              className="prices_box d-flex flex-wrap justify-content-center justify-content-sm-start "
              style={{ position: "relative", top: 30 }}
            >
              <div className="option active_option flex-wrap">
                <div>
                  <div style={{ position: "relative" }}>
                    <h2 style={{ fontSize: 22 }}>
                      {" "}
                      <div
                        style={{
                          width: "60px",
                          height: 3,
                          backgroundColor: "#0d6efd",
                          position: "absolute",
                          transform: "rotate(15deg)",
                          top: 10,
                          left: 50,
                        }}
                      ></div>{" "}
                      ₹{marathidata?.actual_price}
                    </h2>
                  </div>
                  <h4> Free </h4>
                  <span>{formatTime(timeLeft)}</span>
                </div>
                {marathidata?.payment_link && (
                  <Link
                    href={marathidata.payment_link}
                    className="site_btn shadow ms-3 mt-2"
                  >
                    जॉइन करा
                  </Link>
                )}
              </div>
            </div>
            <div className="relative top-12">
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{
                    width: "84.7%",
                    borderRadius: "50px",
                    backgroundImage:
                      "linear-gradient(to right, #31C1B1, #377FDB)",
                  }}
                ></div>
              </div>
              <div className="progress-content">
                <h4 style={{ display: "flex" }}>
                  {marathidata?.enrollcount}+ <span>People Enrolled</span>
                </h4>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </section>
    </>
  );
}

export default WebinarHomeBanner;
