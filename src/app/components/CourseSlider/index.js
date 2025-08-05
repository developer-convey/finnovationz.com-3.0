"use client";

import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Style from "../../coursesStyle/home.module.css";
import Link from "next/link";
import DefaultImage from "../DefaultImage";
import { Rating } from "@mui/material";

function CourseSlider(props) {
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);

  const showMoreCards = () => {
    setVisibleCards(visibleCards + 3);
  };

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth <= 576);
      }
    };
    handleResize();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const customPrevArrow = (
    <button>
      <img src="/right_arrow.svg" alt="Previous" />
    </button>
  );
  const customNextArrow = (
    <button>
      <img src="/left_arrow.svg" alt="Next" />
    </button>
  );

  const hasMultipleSlides = props.data.sliderContent.length > (isMobile ? 2 : 3);

  const settings = {
    dots: hasMultipleSlides,
    arrows: hasMultipleSlides,
    infinite: hasMultipleSlides,
    speed: 300,
    slidesToShow: isMobile ? 2 : 3,
    slidesToScroll: 1,
    autoplay: hasMultipleSlides,
    nextArrow: hasMultipleSlides ? customNextArrow : null,
    prevArrow: hasMultipleSlides ? customPrevArrow : null,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, dots: false, arrows: false },
      },
    ],
  };

  const Card = ({ item }) => (
    <div className={`${Style.sliderItem} ${Style.autoHeight} h-100 ${props.setheight || ""}`}>
      <Link
        href={item.actionUrl}
        target={item.actionUrl === item.btnUrl ? "_blank" : "_self"}
        rel="noreferrer"
      >
        <div className="d-flex flex-column gap-3 h-100">
          <DefaultImage src={item.thumbnail} alt={item.title} className="w-100" />
          <div className="d-flex flex-column gap-2 mt-1 flex-grow-1">
            <h3 className={`${Style.truncatedtitle} mt-0`} title={item.title}>{item.title}</h3>
            <p className="mt-1" title={item.subtitle}>{item.subtitle}</p>

            <div className={`row align-items-center justify-content-start mt-1 ${Style.author_lesson_detail}`}>
              <div className="col-6 d-flex align-items-center">
                <img src="/clock.svg" alt="duration" className="rounded-0" />
                <span className={`ms-1 ${Style.truncatesingleline}`} title={item.duration}>{item.duration}</span>
              </div>
              <div className="col-6 d-flex align-items-center">
                <img src="/lesson_icon.svg" alt="lessons" className="rounded-0" />
                <span className={`ms-1 ${Style.truncatesingleline}`} title={item.lesson}>{item.lesson}</span>
              </div>
            </div>

            {item.rating && (
              <div className={`d-flex align-items-center ${Style.reviews} mt-1 justify-content-start`}>
                <div className="d-flex align-items-center me-2">
                  <Rating
                    name="read-only"
                    value={parseFloat(item.rating)}
                    precision={0.1}
                    readOnly
                    sx={{
                      "& .MuiRating-iconFilled": { color: "#FFC107", fontSize: "16px" },
                    }}
                  />
                </div>
                <span>({item.rating}/5.0 ratings)</span>
              </div>
            )}

            {item.userImg && (
              <img src={item.userImg} alt="enrolled users" className={` ${Style.allusers} mt-1`} />
            )}
          </div>
          <div
  className={`border-top d-flex ${item.btnText === 'Download Brochure' ? 'flex-column text-center' : 'align-items-center justify-content-between'} mt-auto ${Style.cardfooter} ${Style.autoHeightFooter}`}
>
  <h4 className={`mb-0 ${item.btnText === 'Download Brochure' ? 'mb-2' : ''}`}>{item.price}</h4>
  
  <div className={`site_btn text-decoration-none d-inline-block ${Style.coursebtn}`}>
    {item.btnText}
  </div>
</div>

        </div>
      </Link>
    </div>
  );

  return (
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
                {props.data.sliderContent.slice(0, visibleCards).map((item, index) => (
                  <div className="col-sm-6 col-lg-4 mt-4 d-flex" key={index}>
                    <div
                      className="w-100"
                      style={
                        index < 3
                          ? {
                            border: "2px solid transparent",
                            borderRadius: "16px",
                            animation: "rotateBorderMulti 4s linear infinite",
                            background: "linear-gradient(#fff, #fff) padding-box, linear-gradient(45deg, #0d6efd, #6610f2, #d63384, #20c997) border-box"
                          }
                          : {}
                      }
                    >
                      <Card item={item} />
                    </div>
                  </div>
                ))}
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
                {props.data.sliderContent.map((item, index) => (
                  <div key={index} className="p-2">
                    <div
                      style={
                        index < 3
                          ? {
                            border: "2px solid transparent",
                            borderRadius: "16px",
                            animation: "rotateBorderMulti 4s linear infinite",
                            background: "linear-gradient(#fff, #fff) padding-box, linear-gradient(45deg, #0d6efd, #6610f2, #d63384, #20c997) border-box"
                          }
                          : {}
                      }
                    >
                      <Card item={item} />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          )}
        </div>
      </div>
      <style jsx global>{`
        @keyframes rotateBorderMulti {
          0% {
            background: linear-gradient(#fff, #fff) padding-box, linear-gradient(45deg, #0d6efd, #6610f2, #d63384, #20c997) border-box;
            background-size: 200% 200%;
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}

export default CourseSlider;