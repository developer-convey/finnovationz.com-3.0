import React, { useState, useEffect } from "react";
import Style from "../../coursesStyle/course.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Syllabus(props) {
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);

  const showMoreCards = () => {
    setVisibleCards(visibleCards + 3);
  };
  useEffect(() => {
    // Function to update isMobile state
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth <= 576);
      }
    };

    // Add event listener for the resize event
    typeof window !== "undefined" && window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts
    return () => {
        typeof window !== "undefined" &&   window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const updateIsMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth <= 576);
      }
    };

    // Set initial value
    updateIsMobile();

    // Add event listener for window resize
    typeof window !== "undefined" &&  window.addEventListener("resize", updateIsMobile);

    // Remove event listener on component unmount
    return () => {
        typeof window !== "undefined" &&   window.removeEventListener("resize", updateIsMobile);
    };
  }, []);

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

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: props.slideData,
    nextArrow: customNextArrow,
    prevArrow: customPrevArrow,
    appendDots: (dots) => {
      const maxDotsToShow = 5;
      const totalDots = dots.length;
    
      // If dots are more than maxDotsToShow, make sure the 3rd dot is active
      const activeIndex = dots.findIndex((dot) => dot.props.className.includes("slick-active"));
      let start = Math.max(0, activeIndex - 2); // Keep 3rd dot in center when possible
      let end = Math.min(start + maxDotsToShow, totalDots);
    
      const visibleDots = dots.slice(start, end);
    
      return (
        <ul style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
          {visibleDots}
        </ul>
      );
    },
    
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
        className={`${Style.courseSyllabus} allcourses change_arrow pr-4 pl-4 ${
          props.page ? props.page : ""
        }`}
        id="syllabus"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 text-center mb-4 pb-2">
            <h2>
                {props.customTitle
                  ? props.customTitle
                  : props.page === "lessSyllabus free-courses"
                  ? "6 Animated Premium Stock Market Courses"
                  : "Syllabus"}
              </h2>
              <p>
                {props.page === "lessSyllabus free-courses"
                  ? "(By Opening a Free Demat Account)"
                  : ""}
              </p>
            </div>
            {isMobile ? (
              <div className="col-md-12">
                <div className="row justify-content-center">
                  {props.data.slice(0, visibleCards).map((item, index) => {
                    return (
                      <>
                        <div
                          className={`col-sm-6 before_border ${
                            index !== 0 ? "mt-4 pt-4" : ""
                          }`}
                        >
                          <div className={`${Style.Syllabus_item}`}>
                            {item.title ? <h5>{item.title}</h5> : ""}
                            {item.duration ? (
                              <div
                                className={`${Style.author_lesson_detail} d-flex align-items-center pt-2`}
                              >
                                <img src="/clock.svg" alt="clock" />
                                <span className="ms-2">{item.duration}</span>
                              </div>
                            ) : (
                              ""
                            )}
                            {item.thumbnail !== undefined ? (
                              <img
                                src={item.thumbnail}
                                alt={item.alt}
                                className="w-100 my-3 rounded-3"
                              />
                            ) : (
                              ""
                            )}
                            {item.subtitle ? (
                              <div className="position-relative">
                                <p>{item.subtitle}</p>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </>
                    );
                  })}
                  {visibleCards < props.data.length && (
                    <div className="col-10 mt-5 text-center">
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
                  {props.data.map((item) => {
                    return (
                      <>
                        <div className={`${Style.Syllabus_item}`}>
                          {item.title ? <h5>{item.title}</h5> : ""}
                          {item.duration ? (
                            <div
                              className={`${Style.author_lesson_detail} d-flex align-items-center pt-2`}
                            >
                              <img src="/clock.svg" alt="clock" />
                              <span className="ms-2">{item.duration}</span>
                            </div>
                          ) : (
                            ""
                          )}
                          {item.thumbnail !== undefined ? (
                            <img
                              src={item.thumbnail}
                              alt={item.alt}
                              className="w-100 my-3 rounded-3"
                            />
                          ) : (
                            ""
                          )}
                          {item.subtitle ? (
                            <div className="position-relative">
                              <p>{item.subtitle}</p>
                            </div>
                          ) : (
                            ""
                          )}
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

export default Syllabus;
