import { useState, useEffect } from "react";

import Image from "next/image";
import "./HomeBanner.css";
import Link from "next/link";
import Files from "@/config/file";
import DefaultImage from "@/app/components/DefaultImage";

function WebinarHomeBanner({ programmeData, formatDate }) {
  const initialTime = 5400; // 2 hours in seconds
  const [timeLeft, setTimeLeft] = useState(initialTime);

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

    localStorage.setItem("countdownTime", JSON.stringify(timeLeft));

    return () => clearInterval(timer);
  }, [timeLeft, initialTime]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, "0")} hr:${minutes
      .toString()
      .padStart(2, "0")} mins:${seconds.toString().padStart(2, "0")} sec`;
  };

  return (

      <section className="home-banner">
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
                  Learn to 10x your wealth by investing in the{" "}
                  <span>Stock Market.</span>{" "}
                </p>
                <h1 className="text-[#3782D9]">Share Market Mastery</h1>
                <h6 className="fw-bold">No Bullshit, Only Practical Steps</h6>
                <div className="date_bg md:block hidden">
                  <p style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <img
                      src="/calendar.png"
                      alt=""
                      style={{ width: 24, height: 25 }}
                    />
                    {formatDate(programmeData?.date)}
                    <img src="/dot.svg" style={{ width: 6, height: 7 }} />{" "}
                    <img
                      src="/blue-clock.png"
                      alt=""
                      style={{ width: 24, height: 25 }}
                    />
                    {programmeData?.time}
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
                              ₹{programmeData?.actual_price}
                            </h2>
                          </div>
                          <h2>₹{programmeData?.offer_price}</h2>
                          <span>{formatTime(timeLeft)}</span>
                        </div>
                        {programmeData?.payment_link && (
                          <Link
                            href={programmeData.payment_link}
                            className="site_btn shadow ms-3 mt-2"
                          >
                            Book now
                          </Link>
                        )}
                      </div>
                    </div>
                    <div className="progress">
                      <div className="progress-bar"></div>
                    </div>
                    <div className="progress-content">
                      <h4 style={{ display: "flex" }}>
                        {programmeData?.enrollcount}+{" "}
                        <span>People Enrolled</span>
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
                loading="lazy"
                src="/bannerP.webp"
                alt="banner img"
                // width={500}
                // height={500}
                style={{ width: "100%" }}
              />
              <div className="date_bg md:hidden block ">
                <p style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <img
                    src="/calendar.png"
                    alt=""
                    style={{ width: 24, height: 25 }}
                  />
                  {formatDate(programmeData?.date)}
                  <img src="/dot.svg" style={{ width: 6, height: 7 }} />{" "}
                  <img
                    src="/blue-clock.png"
                    alt=""
                    style={{ width: 24, height: 25 }}
                  />
                  {programmeData?.time}
                </p>
              </div>
            </div>
          </div>
        </div>
        {typeof window !== "undefined" && window.innerWidth < 500 ? (
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
                    ₹{programmeData?.actual_price}
                  </h2>
                </div>
                <h2>₹{programmeData?.offer_price}</h2>
                <span>{formatTime(timeLeft)}</span>
              </div>
              {programmeData?.payment_link && (
                <Link
                  href={programmeData?.payment_link}
                  className="site_btn shadow ms-3 mt-2"
                >
                  Book now
                </Link>
              )}
            </div>
            <div style={{ position: "relative", top: 90 }}>
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
                  {programmeData?.enrollcount}+ <span>People Enrolled</span>
                </h4>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {/* <div className="progress">
      <div className="progress-bar"></div>
    </div>
    <div className="progress-content">
      <h4 style={{ display: "flex" }}>
        2005+ <span>People Enrolled</span>
      </h4>
    </div> */}
      </section>
   
  );
}

export default WebinarHomeBanner;
