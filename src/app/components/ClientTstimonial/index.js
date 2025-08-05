import React, { useEffect, useState, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactStars from "react-rating-stars-component";

import Slider from "react-slick";
import "./ClientTstimonial.css";
import DefaultImage from "../DefaultImage";
function ClientTstimonial(props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth <= 768);
      }
    };

    handleResize();

    typeof window !== "undefined" &&
      window.addEventListener("resize", handleResize);

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
  useEffect(() => {
    setIsMobile(typeof window !== "undefined" && window.innerWidth <= 768);
  }, []);

  const settings = {
    verticalSwiping: true,
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
          centerPadding: "150px",
          dots: false,
          arrows: false,
          centerMode: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          rows: 2,
          centerPadding: "110px",
          dots: false,
          arrows: false,
          centerMode: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          rows: 2,
          centerPadding: "100px",
          dots: false,
          arrows: false,
          centerMode: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 446,
        settings: {
          slidesToShow: 1,
          rows: 2,
          centerPadding: "70px",
          dots: false,
          arrows: false,
          centerMode: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 410,
        settings: {
          slidesToShow: 1,
          rows: 2,
          centerPadding: "90px",
          dots: false,
          arrows: false,
          centerMode: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
          rows: 2,
          centerPadding: "93px",
          dots: false,
          arrows: false,
          centerMode: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          rows: 2,
          centerPadding: "88px",
          dots: false,
          arrows: false,
          centerMode: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 371,
        settings: {
          slidesToShow: 1,
          rows: 2,
          centerPadding: "80px",
          dots: false,
          arrows: false,
          centerMode: true,
          autoplay: true,
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
          nextSibling.style.transform = "scale(0.85) translate(0px)";
        }
        if (prevSibling) {
          prevSibling.style.transform = "scale(0.85) translate(-0px)";
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
        className={`clientTestimonial testimoni change_arrow`}
        id="clientTestimonial"
      >
        <div className="container-fluid px-0 px-lg-2">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 text-center mb-2">
              <div className="h2 font-weight-800 text-dark">What people say about us</div>
              <p className="text-center">From the people who used BroCom</p>
            </div>
            <div className="col-md-12 mt-4 px-0 px-md-2">
              {!isMobile ? (
                <Slider {...settings}>
                  {props.data.map((item, index) => {
                    return (
                      <React.Fragment key={index}>
                        <div className={`client_item slider_item`}>
                          <img loading="lazy" src="/quote1.svg" alt="quote" />
                          <div
                            className={`d-flex align-items-center border-bottom pb-3 client_detail `}
                          >
                            <DefaultImage
                              loading="lazy"
                              src={item.clientImg}
                              alt={item.name}
                            />
                            <div className="ms-2">
                              <h6>{item.name}</h6>
                              {/* <p>Moscow, Russia</p> */}
                            </div>
                          </div>
                          <p
                            className={`comment my-3`}
                            dangerouslySetInnerHTML={{ __html: item.text }}
                          />
                          <div className="d-flex align-items-center">
                            {/* <img  loading="lazy" src={`/${item.rating}.svg`} alt="star rating"  className='me-1'/> */}
                            <ReactStars
                              count={5}
                              value={4.8} // Set the fixed value here
                              size={30}
                              half={true}
                              activeColor="#FFC107"
                              edit={false} // Disable user interaction
                            />
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </Slider>
              ) : (
                <div
                  className="row"
                  style={{ overflowY: "scroll", height: 760 }}
                >
                  {props.data.map((item, index) => {
                    return (
                      <React.Fragment key={index}>
                        <div className="col-sm-6">
                          <div className={`client_item slider_item`}>
                            <img loading="lazy" src="/quote1.svg" alt="quote" />
                            <div
                              className={`d-flex align-items-center border-bottom pb-3 client_detail `}
                            >
                              <img
                                loading="lazy"
                                src={item.clientImg}
                                alt={item.name}
                              />
                              <div className="ms-2">
                                <h6>{item.name}</h6>
                                {/* <p>Moscow, Russia</p> */}
                              </div>
                            </div>
                            <p
                              className={`comment my-3`}
                              dangerouslySetInnerHTML={{ __html: item.text }}
                            />
                            <div className="d-flex align-items-center">
                              {/* <img  loading="lazy" src={`/${item.rating}.svg`} alt="star rating"  className='me-1'/> */}
                              <ReactStars
                                count={5}
                                value={4.8} // Set the fixed value here
                                size={26}
                                half={true}
                                activeColor="#FFC107"
                                edit={false} // Disable user interaction
                              />
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ClientTstimonial;
