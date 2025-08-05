import React, { useEffect, useState, useRef } from "react";
import Style from "@/app/coursesStyle/course.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import ReactStars from "react-rating-stars-component";
import { Rating } from "@mui/material";

function NewClientTstimonial(props) {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Arrow buttons for slider
  const customPrevArrow = (
    <button aria-label="Previous slide">
      <img src="/right_arrow.svg" alt="Previous" />
    </button>
  );
  const customNextArrow = (
    <button aria-label="Next slide">
      <img src="/left_arrow.svg" alt="Next" />
    </button>
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set initial state

    return () => {
      window.removeEventListener("resize", handleResize);
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
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, rows: 2, centerPadding: "150px", dots: false, arrows: false },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1, rows: 2, centerPadding: "120px", dots: false, arrows: false, centerMode: true },
      },
      // Additional breakpoints can be added here
    ],
  };

  const renderTestimonials = () => {
    return props.data?.map((item, index) => {
      if (index < 6) {
        return (
          <div className={`${Style.client_item} slider_item`} key={index}>
            <img src="/quote1.svg" alt="Quote" />
            <div className={`d-flex align-items-center border-bottom pb-3 ${Style.client_detail}`}>
              <img src={item.clientImg} alt={item.name} />
              <div className="ms-2">
                <h6>{item.name}</h6>
              </div>
            </div>
            <p className={`${Style.comment} my-3`} dangerouslySetInnerHTML={{ __html: item.text }} />
            <div className="d-flex align-items-center">
              {isMobile ? (
                <Rating
                  name="platform-rating"
                  value={item.rating}
                  precision={0.1}
                  size="large"
                  readOnly
                  sx={{
                    "& .MuiRating-iconFilled": { color: "#FFC107", fontSize: "16px" },
                    "& .MuiRating-iconEmpty": { color: "#CCCCCC", fontSize: "16px" },
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
                  alt={"Star rating"}
                />
              )}
            </div>
          </div>
        );
      }
      return null; // Avoid rendering anything if index >= 6
    });
  };

  return (
    <section className={`${Style.clientTestimonial} testimoni change_arrow`} id="clientTestimonial">
      <div className="container-fluid px-0 px-lg-2">
        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-6 text-center">
            <h2>What people say about our courses</h2>
          </div>
          <div className="col-md-12 mt-4 px-0 px-md-2">
            <Slider {...settings}>{renderTestimonials()}</Slider>
          </div>
          <div className="col-12 mt-5 text-center pt-md-5">
            <Link 
            onClick={props.onEnquiryClick}
            href={""}
            // href="https://kny3u00wib4.typeform.com/to/aqzKssaF" target="_blank"
             className={`site_btn text-decoration-none d-inline-block ${Style.candbtn}`}>
              Reserve Your Spot Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewClientTstimonial;
