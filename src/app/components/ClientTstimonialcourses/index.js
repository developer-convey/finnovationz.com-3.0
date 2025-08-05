import React, { useEffect, useState, useRef } from "react";
import Style from "../../coursesStyle/course.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import { Rating } from "@mui/material";


function ClientTstimonial(props) {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const customPrevArrow = (
    <button>
      <img src="/right_arrow.svg" alt="Previous" />
    </button>
  );
  const customNextArrow = (
    <button>
      <img src="/left_arrow.svg" alt="Previous" />
    </button>
  );
  useEffect(() => {
    setIsMobile(typeof window !== 'undefined' && window.innerWidth <= 768);
  }, []);
  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(typeof window !== 'undefined' && window.innerWidth <= 768);
    };

    // Set initial value
    updateIsMobile();

    // Add event listener for window resize
    typeof window !== "undefined" &&
      window.addEventListener("resize", updateIsMobile);

    // Remove event listener on component unmount
    return () => {
      typeof window !== "undefined" &&
        window.removeEventListener("resize", updateIsMobile);
    };
  }, []);
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    dots: true,
    speed: 300,
    centerPadding: "0px",
    infinite: true,
    autoplay: true,
    nextArrow: customNextArrow,
    prevArrow: customPrevArrow,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          rows: 2,
          centerPadding: "150px",
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          rows: 2,
          centerPadding: "120px",
          dots: false,
          arrows: false,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          rows: 2,
          centerPadding: "110px",
          dots: false,
          arrows: false,
          centerMode: true,
        },
      },
      {
        breakpoint: 446,
        settings: {
          slidesToShow: 1,
          rows: 2,
          centerPadding: "90px",
          dots: false,
          arrows: false,
          centerMode: true,
        },
      },
      {
        breakpoint: 410,
        settings: {
          slidesToShow: 1,
          rows: 2,
          centerPadding: "80px",
          dots: false,
          arrows: false,
          centerMode: true,
        },
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
          rows: 2,
          centerPadding: "67px",
          dots: false,
          arrows: false,
          centerMode: true,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          rows: 2,
          centerPadding: "69px",
          dots: false,
          arrows: false,
          centerMode: true,
        },
      },
      {
        breakpoint: 371,
        settings: {
          slidesToShow: 1,
          rows: 2,
          centerPadding: "64px",
          dots: false,
          arrows: false,
          centerMode: true,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          rows: 2,
          centerPadding: "62px",
          dots: false,
          arrows: false,
          centerMode: true,
        },
      },
    ],
  };

  // Function to apply styles to elements
  const applyStylesToElements = () => {
    const slickCurrent = document.querySelector(".testimoni .slick-current");

    // Apply styles to the current slide and its siblings
    if (slickCurrent) {
      const prevSibling = slickCurrent.previousElementSibling;
      const prevSibling2 =
        slickCurrent.previousElementSibling.previousElementSibling;
      const nextSibling = slickCurrent.nextElementSibling;
      const nextSibling2 = slickCurrent.nextElementSibling.nextElementSibling;
      if (!isMobile) {
        slickCurrent.style.transform = "scale(1.06)";
        if (prevSibling) {
          prevSibling.style.transform = "scale(0.95) translate(-19px)";
        }

        if (nextSibling) {
          nextSibling.style.transform = "scale(0.95) translate(19px)";
        }
        if (nextSibling2) {
          nextSibling2.style.transform = "scale(0.8)"; // Replace with your desired styles
        }
        if (prevSibling2) {
          prevSibling2.style.transform = "scale(0.8)"; // Replace with your desired styles
        }
      } else {
        slickCurrent.style.transform = "scale(1.04)";

        if (nextSibling) {
          nextSibling.style.transform = "scale(0.8) translate(19px)";
        }
        if (prevSibling) {
          prevSibling.style.transform = "scale(0.8) translate(-19px)";
        }
      }
    }
  };
  const applyStylesToElementsRef = useRef(applyStylesToElements);

  useEffect(() => {
    applyStylesToElementsRef.current();
  }, [currentSlide]);
  return (
    <>
      <section
        className={`${Style.clientTestimonial} testimoni change_arrow`}
        id="clientTestimonial"
      >
        <div className="container-fluid px-0 px-lg-2">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-6 text-center">
              <h2>What people say about our courses</h2>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p> */}
            </div>
            <div className="col-md-12 mt-4 px-0 px-md-2">
              <Slider {...settings}>
                {props.data.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <div className={`${Style.client_item} slider_item`}>
                        <img src="/quote1.svg" alt="quote" />
                        <div
                          className={`d-flex align-items-center border-bottom pb-3 ${Style.client_detail} `}
                        >
                          <img src={item.clientImg} alt={item.name} />
                          <div className="ms-2">
                            <h6>{item.name}</h6>
                            {/* <p>Moscow, Russia</p> */}
                          </div>
                        </div>
                        <p
                          className={`${Style.comment} my-3`}
                          dangerouslySetInnerHTML={{ __html: item.text }}
                        />
                        <div className="d-flex align-items-center">
                          {/* <img
                            src={`/${item.rating}.svg`}
                            alt="star rating"
                            className="me-1"
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
                                      fontSize: "16px",
                                    },
                                    "& .MuiRating-iconEmpty": {
                                      color: "#CCCCCC",
                                      fontSize: "16px", // Unfilled star color
                                    },
                                  }}
                                />
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
              </Slider>
            </div>
            <div className=" col-12 mt-5 text-center pt-md-5">
              <Link
                href={
                  props.page === "home"
                    ? "#allcourses"
                    : props.page === "freeCourses"
                    ? "/forms"
                    : "#pricing"
                }
                className={`site_btn text-decoration-none d-inline-block ${Style.candbtn}  `}
              >
                {props.page === "freeCourses"
                  ? "Enrol Now"
                  : "Start your Journey"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ClientTstimonial;
