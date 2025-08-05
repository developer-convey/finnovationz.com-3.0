import { React, useState, useEffect } from "react";
import Style from "./course.module.css";
import Link from "next/link";
import { Rating } from "@mui/material";
import "./Buybutton.css";
// import Modal from "@/app/components/modalComponent/modal";

function NewHomeBanner(props) {
  const initialTime = 5400; // 2 hours in seconds
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    // Set a timer to show the modal after 3 seconds
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1500);

    // Clean up the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

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
    <>
      <section className={`${Style.hero_banner} banner-section`} id="herobanner">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <h1>{props?.data?.heading}</h1>
              {props?.page === "freeCourses" ? (
                <h5>(By Opening a Free Demat Account)</h5>
              ) : (
                ""
              )}
              <p>{props?.data?.text}</p>
              <div
                className={`d-flex align-items-center justify-content-md-start justify-content-center ${Style.author} my-4`}
              >
                <img src="/user.svg" alt="" />
                <p className="mb-0 ms-2">
                  By<span> Namaskar Prasad</span>
                </p>
              </div>
              <div
                className={`d-flex align-items-center justify-content-md-start justify-content-center ${Style.author_lesson_detail}`}
              >
                <div className="d-flex align-items-center">
                  <img src="/clock.svg" alt="" />
                  <span className="ms-1">{props?.data?.duration}</span>
                </div>
                <div className="d-flex align-items-center ms-4 ps-3">
                  <img src="/lesson_icon.svg" alt="" />
                  <span className="ms-1">{props?.data?.lessons} </span>
                </div>
              </div>
              {props?.data?.rating ? (
                <div
                  className={`d-flex align-items-center ${Style.reviews} mt-4 justify-content-md-start justify-content-center`}
                >
                  <div className="d-flex align-items-center">
                    {/* <img src={`/${props.data.rating}.svg`} alt="" /> */}
                    <Rating
                      name="platform-rating"
                      value={Number(props?.data?.rating)}
                      precision={0.1}
                      size="large"
                      readOnly
                      sx={{
                        "& .MuiRating-iconFilled": {
                          color: "#FFC107",
                          fontSize: "16px",
                        },
                        "& .MuiRating-iconEmpty": {
                          color: "#CCCCCC",
                          fontSize: "16px", // Unfilled star color
                        },
                      }}
                    />
                  </div>
                  <span>({props?.data?.rating}/5.0 ratings)</span>
                </div>
              ) : (
                ""
              )}
              {/* {props?.data?.userImg ? (
                <img
                  src={props?.data?.userImg}
                  alt=""
                  className={` ${Style.allusers} mt-4`}
                />
              ) : (
                ""
              )} */}

              {/* <div className="date_bg md:block hidden ">
                <p style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <img
                    src="/calendar.png"
                    alt=""
                    style={{ width: 24, height: 25 }}
                  />
                  {/* {formatDate(programmeData?.date)} */}
                  {/* <img src="/dot.svg" style={{ width: 6, height: 7 }} />{" "}
                  <img
                    src="/blue-clock.png"
                    alt=""
                    style={{ width: 24, height: 25 }}
                  /> */}
                  {/* {programmeData?.time} */}
                {/* </p>
              </div> */} 

              <>
                <div className="prices_box d-flex flex-wrap justify-content-center justify-content-sm-start">
                  <div className="option active_option flex-wrap">
                    <div>
                      <div style={{ position: "relative" }}>
                        {/* <h2 style={{ fontSize: 22 }}>
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
                          {props?.data?.mrp_price}
                        </h2> */}
                      </div>
                      <h2>{props?.data?.actual_pricing}</h2>
                      {/* <span>{formatTime(timeLeft)}</span> */}
                    </div>
                 
  <Link
    href={props?.data?.btnUrl}
    onClick={(e) => {
      if (!props?.data?.actual_pricing) {
        e.preventDefault(); // ⛔ prevent navigation
      }
      props.onBrochureClick?.(); // Optional chaining to avoid crash
    }}
    className="site_btn shadow ms-3 mt-2"
  >
    {props?.data?.btnText || "Book Now"}
  </Link>


                  </div>
                </div>
                {/* <div className="progress">
                  <div className="progress-bar"></div>
                </div>
                <div className="progress-content">
                  <h4 style={{ display: "flex" }}>
                    {props?.data?.enrollcount}+ <span>People Enrolled</span>
                  </h4>
                </div> */}
              </>
            </div>
            <div className="col-md-6 mt-5 mt-md-0">
              <img
                loading="eager"
                src="/banner_img.webp"
                alt=""
                className={Style.bannerImg}
              />
            </div>
          </div>
        </div>
      {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}
      </section>
    </>
  );
}

export default NewHomeBanner;
