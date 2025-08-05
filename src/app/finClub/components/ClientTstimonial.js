import React, { useEffect, useState } from "react";
import Style from "../style/finance.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ClientTstimonial(props) {
  const [isMobile, setIsMobile] = useState(
    typeof window != "undefined" && window.innerWidth <= 768
  );
  const [currentSlide, setCurrentSlide] = useState(0);
  const customPrevArrow = (
    <button>
      <img src="/right_arrow.svg" loading="eager"/>
    </button>
  );
  const customNextArrow = (
    <button>
      <img src="/left_arrow.svg" loading="eager" />
    </button>
  );

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    dots: true,
    speed: 300,
    centerPadding: "180px",
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
          centerPadding: "40px",
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "140px",
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
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
          centerPadding: "50px",
          dots: false,
          arrows: false,
          centerMode: true,
        },
      },
      {
        breakpoint: 371,
        settings: {
          slidesToShow: 1,
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
          centerPadding: "62px",
          dots: false,
          arrows: false,
          centerMode: true,
        },
      },
    ],
  };

  //  // Function to apply styles to elements
  //  const applyStylesToElements = () => {
  //     const slickCurrent = document.querySelector('.testimoni .slick-current');

  //     // Apply styles to the current slide and its siblings
  //      if (slickCurrent) {
  //         const prevSibling = slickCurrent.previousElementSibling;
  //          const prevSibling2 = slickCurrent.previousElementSibling.previousElementSibling;
  //         const nextSibling = slickCurrent.nextElementSibling;
  //         const nextSibling2 = slickCurrent.nextElementSibling.nextElementSibling;
  //          if (!isMobile) {
  //              slickCurrent.style.transform = 'scale(1.06)';
  //             //  if (prevSibling) {
  //             //     prevSibling.style.transform = 'scale(0.95) translate(-19px)';
  //             // }

  //             // if (nextSibling) {
  //             //     nextSibling.style.transform = 'scale(0.95) translate(19px)';
  //             // }
  //             // if (nextSibling2  ) {
  //             //     nextSibling2.style.transform = 'scale(0.8)'; // Replace with your desired styles
  //             // }
  //             // if (prevSibling2  ) {
  //             //     prevSibling2.style.transform = 'scale(0.8)'; // Replace with your desired styles
  //             // }
  //          }
  //          else{
  //             slickCurrent.style.transform = 'scale(1.04)';

  //             if (nextSibling) {
  //                 nextSibling.style.transform = 'scale(0.8) translate(19px)';
  //             }
  //             if (prevSibling) {
  //                 prevSibling.style.transform = 'scale(0.8) translate(-19px)';
  //             }

  //          }

  //     }
  // };
  // const applyStylesToElementsRef = useRef(applyStylesToElements);

  // useEffect(() => {
  //     applyStylesToElementsRef.current();
  // }, [currentSlide]);
  return (
    <>
      <section
        className={`${Style.clientTestimonial} testimoni change_arrow`}
        id="clientTestimonial"
      >
        <div className="container-fluid px-0">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-6 text-center">
              <h2>
                What <span>Club members</span> are Saying ?
              </h2>
            </div>
            <div className="col-md-12 mt-4 px-0 px-md-2">
              <Slider {...settings}>
                {props.data.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <div className={`${Style.client_item} slider_item`}>
                        <img
                          src={item.clientImg}
                          className="w-100 user_thumbanail"
                          alt="video thumbnail"
                        />
                        <div>
                          <p
                            className={`${Style.comment} my-3`}
                            dangerouslySetInnerHTML={{ __html: item.text }}
                          />
                          <div className="d-flex align-items-center add_border">
                            <img
                              src={item.userImg}
                              className="me-1 userImg"
                              loading="eager"
                            />
                            <div>
                              <h6 className="mb-0">{item.name}</h6>
                              {/* <p className='mb-0'>Moscow, Russia</p> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ClientTstimonial;
