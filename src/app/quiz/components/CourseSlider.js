import React, { useState, useEffect } from "react";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Style from "../style/home.module.css";
import { Rating } from "@mui/material";

function CourseSlider(props) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= 576
  );
  const [visibleCards, setVisibleCards] = useState(3);

  const showMoreCards = () => {
    setVisibleCards(visibleCards + 3);
  };
  useEffect(() => {
    // Function to update isMobile state
    const handleResize = () => {
      setIsMobile(typeof window !== "undefined" && window.innerWidth <= 576);
    };

    // Add event listener for the resize event
    typeof window !== "undefined" &&
      window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      typeof window !== "undefined" &&
        window.removeEventListener("resize", handleResize);
    };
  }, []);

  const customPrevArrow = (
    <button>
      <img loading="lazy" src="/right_arrow.svg" alt="Previous" />
    </button>
  );
  const customNextArrow = (
    <button>
      <img loading="lazy" src="/left_arrow.svg" alt="Previous" />
    </button>
  );

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: customNextArrow,
    prevArrow: customPrevArrow,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          dots: false,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <section
        className="change_arrow courseSlider pb-5 pt-5"
        id={`${props.sectionName ? "allcourses" : "courses"}`}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>{props.data.heading}</h2>
            </div>
            {isMobile ? (
              <div className="col-md-12">
                <div className="row justify-content-center h-100">
                  {props.data.sliderContent
                    .slice(0, visibleCards)
                    .map((item, index) => {
                      return (
                        <>

                          <div
                            className="col-sm-6 col-lg-4  mt-4 before_border "
                            key={index}
                          >
                            <Link
                              href={item.btnUrl}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <div
                                className={`${Style.sliderItem} h-100 ${props.setheight ? props.setheight : ""
                                  }`}
                              >
                                {/* <Link
                                href={item.actionUrl}
                                target={
                                  item.actionUrl === item.btnUrl
                                    ? "_blank"
                                    : "_self"
                                }
                                rel="noreferrer"
                              >
                                  </Link> */}
                                <img
                                  loading="lazy"
                                  src={item.thumbnail}
                                  alt=""
                                  className="w-100"
                                />
                                <h3>{item.title}</h3>
                                <p>{item.subtitle}</p>
                                <div
                                  className={`d-flex align-items-center justify-content-start ${Style.author_lesson_detail}`}
                                >
                                  <div className="d-flex align-items-center">
                                    <img
                                      loading="lazy"
                                      src="/images/clock.svg"
                                      alt=""
                                      className="rounded-0"
                                    />
                                    <span className="ms-1">{item.duration}</span>
                                  </div>
                                  <div className="d-flex align-items-center ms-lg-4 ps-3">
                                    <img
                                      loading="lazy"
                                      src="/images/lesson_icon.svg"
                                      alt=""
                                      className="rounded-0"
                                    />
                                    <span className="ms-1">{item.lesson}</span>
                                  </div>
                                </div>
                                {item.rating ? (
                                  <div
                                    className={`d-flex align-items-center ${Style.reviews} mt-3 justify-content-start `}
                                  >
                                    <div className="d-flex align-items-center me-2">
                                      {/* <img
                                      loading="lazy"
                                      src={`/images/${item.rating}.svg`}
                                      alt=""
                                      className={Style.ratingStar}
                                    /> */}
                                      <Rating
                                        name="platform-rating"
                                        value={item.rating}
                                        precision={0.1}
                                        size="large"
                                        readOnly
                                        sx={{
                                          "& .MuiRating-iconFilled": {
                                            color: "#FFC107",
                                            fontSize: "32px",
                                          },
                                          "& .MuiRating-iconEmpty": {
                                            color: "#CCCCCC",
                                            fontSize: "32px", // Unfilled star color
                                          },
                                        }}
                                      />
                                    </div>
                                    <span>({item.rating}/5.0 ratings1)</span>
                                  </div>
                                ) : (
                                  ""
                                )}
                                {item.userImg ? (
                                  <img
                                    loading="lazy"
                                    src={item.userImg}
                                    alt=""
                                    className={` ${Style.allusers} my-4`}
                                  />
                                ) : (
                                  ""
                                )}

                                <div
                                  className={`border-top pt-4 d-flex align-items-center justify-content-between ${Style.cardfooter} `}
                                >
                                  <h4 className="mb-0">{item.price}</h4>
                                  <span className={`site_btn text-decoration-none d-inline-block ${Style.coursebtn}`}>
                                    {item.btnText}
                                  </span>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </>
                      );
                    })}
                  {visibleCards < props.data.sliderContent.length && (
                    <div className="col-10 mt-4 pt-2 text-center d-block d-sm-none">
                      <button
                        onClick={showMoreCards}
                        className="secondary_btn text-decoration-none d-inline-block"
                      >
                        Show More
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="col-md-12 px-sm-0">
                <Slider {...settings}>
                  {props.data.sliderContent.map((item, index) => {
                    return (
                      <>
                        <div className={`${Style.sliderItem}`} key={index}>
                          <Link
                            href={item.actionUrl}
                            target={
                              item.actionUrl === item.btnUrl
                                ? "_blank"
                                : "_self"
                            }
                            rel="noreferrer"
                          >
                            <img
                              loading="lazy"
                              src={item.thumbnail}
                              alt=""
                              className="w-100"
                            />
                            <h3>{item.title}</h3>
                            <p>{item.subtitle}</p>
                          </Link>
                          <div
                            className={`d-flex align-items-center justify-content-start  ${Style.author_lesson_detail}`}
                          >
                            <div className="d-flex align-items-center">
                              <img
                                loading="lazy"
                                src="/images/clock.svg"
                                alt=""
                              />
                              <span className="ms-1">{item.duration}</span>
                            </div>
                            <div className="d-flex align-items-center ms-lg-4 ps-3">
                              <img
                                loading="lazy"
                                src="/images/lesson_icon.svg"
                                alt=""
                              />
                              <span className="ms-1">{item.lesson}</span>
                            </div>
                          </div>
                          {item.rating ? (
                            <div
                              className={`d-flex align-items-center ${Style.reviews} mt-3 justify-content-start `}
                            >
                              <div className="d-flex align-items-center me-2">
                                {/* <img
                                  loading="lazy"
                                  src={`/images/${item.rating}.svg`}
                                  alt=""
                                /> */}
                                <Rating
                                  name="platform-rating"
                                  value={item.rating}
                                  precision={0.1}
                                  size="large"
                                  readOnly
                                  sx={{
                                    "& .MuiRating-iconFilled": {
                                      color: "#FFC107",
                                      fontSize: "32px",
                                    },
                                    "& .MuiRating-iconEmpty": {
                                      color: "#CCCCCC",
                                      fontSize: "32px", // Unfilled star color
                                    },
                                  }}
                                />
                              </div>
                              <span>({item.rating}/5.0 ratings2)</span>
                            </div>
                          ) : (
                            ""
                          )}
                          {item.userImg ? (
                            <img
                              loading="lazy"
                              src={item.userImg}
                              alt=""
                              className={` ${Style.allusers} my-4`}
                            />
                          ) : (
                            ""
                          )}
                          {item.price === "₹1,499" ? (
                            <p className="mt-3">
                              Launching this Diwali on Nov 12th
                            </p>
                          ) : (
                            ""
                          )}
                          <div
                            className={`border-top pt-4 d-flex align-items-center justify-content-between ${Style.cardfooter} `}
                          >
                            <h4 className="mb-0">{item.price}</h4>
                            <Link
                              href={item.btnUrl}
                              rel="noreferrer"
                              className={`site_btn text-decoration-none d-inline-block ${Style.coursebtn}`}
                            >
                              {item.btnText}
                            </Link>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </Slider>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default CourseSlider;
