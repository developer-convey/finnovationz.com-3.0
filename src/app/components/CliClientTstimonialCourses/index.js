import React, { useEffect, useState, useRef } from "react";
import Style from "../../coursesStyle/course.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import ReactStars from "react-rating-stars-component";
import { Rating } from "@mui/material";
import { useRouter } from "next/router";

function ClientTstimonial({ data, page, paymentdata, dummy, onBrochureClick }) {
  const router = useRouter();
  const path = router.pathname;
  const segments = path.split("/").filter(Boolean);
  const pageName = segments.join("/");

  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth <= 768);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
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

  const applyStylesToElements = () => {
    const slickCurrent = document.querySelector(".testimoni .slick-current");
    if (slickCurrent) {
      const prevSibling = slickCurrent.previousElementSibling;
      const prevSibling2 = prevSibling?.previousElementSibling;
      const nextSibling = slickCurrent.nextElementSibling;
      const nextSibling2 = nextSibling?.nextElementSibling;

      if (!isMobile) {
        slickCurrent.style.transform = "scale(1.06)";
        if (prevSibling) prevSibling.style.transform = "scale(0.95) translate(-19px)";
        if (nextSibling) nextSibling.style.transform = "scale(0.95) translate(19px)";
        if (prevSibling2) prevSibling2.style.transform = "scale(0.8)";
        if (nextSibling2) nextSibling2.style.transform = "scale(0.8)";
      } else {
        slickCurrent.style.transform = "scale(1.04)";
        if (prevSibling) prevSibling.style.transform = "scale(0.8) translate(-19px)";
        if (nextSibling) nextSibling.style.transform = "scale(0.8) translate(19px)";
      }
    }
  };

  const applyStylesToElementsRef = useRef(applyStylesToElements);

  useEffect(() => {
    applyStylesToElementsRef.current();
  }, [currentSlide]);

  return (
    <>
      <section className={`${Style.clientTestimonial} testimoni change_arrow pl-4 pr-4`} id="clientTestimonial">
        <div className="container-fluid px-0 px-lg-2">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-6 text-center">
              <h2>What people say about our courses</h2>
            </div>
            <div className="col-md-12 mt-4 px-0 px-md-2">
              <Slider {...settings}>
                {data.map((item, index) => {
                  if (isMobile && index >= 6) return null;
                  return (
                    <div className={`${Style.client_item} slider_item`} key={index}>
                      <img src="/quote1.svg" alt="quote" />
                      <div className={`d-flex align-items-center border-bottom pb-3 ${Style.client_detail}`}>
                        <img src={item.clientImg} alt={item.name} />
                        <div className="ms-2">
                          <h6>{item.name}</h6>
                        </div>
                      </div>
                      <p
                        className={`${Style.comment} my-3`}
                        dangerouslySetInnerHTML={{ __html: item.text }}
                      />
                      <div className="d-flex align-items-center">
                        {isMobile ? (
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
                                fontSize: "16px",
                              },
                            }}
                          />
                        ) : (
                          <ReactStars
                            count={5}
                            value={item.rating}
                            size={22}
                            isHalf={true}
                            activeColor="#FFC107"
                            edit={false}
                            alt="star rating"
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>

            <div className="col-12 mt-5 text-center pt-md-5">
              {dummy === "x" ? (
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onBrochureClick && onBrochureClick();
                  }}
                  className={`site_btn text-decoration-none d-inline-block ${Style.candbtn}`}
                >
                  Download Brochure
                </a>
              ) : ![
                  "courses/combo-of-foundation-course-for-beginners-and-fundamental-analysis-2.O",
                  "courses/big-combo",
                  "courses/multibagger-combo",
                  "courses/combo",
                ].includes(pageName) ? (
                  <Link
                  href={
                    page === "home"
                      ? "#allcourses"
                      : page === "freeCourses"
                        ? "/forms"
                        : "#pricing"
                  }
                  onClick={(e) => {
                    if (dummy === "y") {
                      e.preventDefault(); // Stop the link from navigating
                      onBrochureClick && onBrochureClick();
                    }
                  }}
                  className={`site_btn text-decoration-none d-inline-block ${Style.candbtn}`}
                >
                  {page === "freeCourses" ? "Enrol Now" : "Start your Journey"}
                </Link>
                
              ) : (
                <Link
                  href={`${paymentdata?.btnUrl || "#"}`}
                  className={`site_btn text-decoration-none d-inline-block ${Style.candbtn}`}
                >
                  Start your Journey
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ClientTstimonial;
