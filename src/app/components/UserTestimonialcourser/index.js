import React, { useEffect, useState } from "react";
import Style from "../../coursesStyle/course.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";

function UserTestimonial(props) {
  const [activeDot, setActiveDot] = useState(0);
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    beforeChange: (currentSlide, nextSlide) => {
      setActiveDot(nextSlide);
    },
  };

  useEffect(() => {
    // Apply a rotate property to the ul.slick-dots element based on the activeDot state
    const ulElement = document.querySelector(".user_testimoni .slick-dots");

    if (ulElement) {
      if (activeDot === 0) {
        ulElement.style.transform = `rotate(0deg)`;
      }
      if (activeDot === 1) {
        ulElement.style.transform = `rotate(-85deg)`;
      }
      if (activeDot === 2) {
        ulElement.style.transform = `rotate(-148deg)`;
      }
      if (activeDot === 3) {
        ulElement.style.transform = `rotate(-213deg)`;
      }
      if (activeDot === 4) {
        ulElement.style.transform = `rotate(-280deg)`;
      }
    }
  }, [activeDot, settings.slidesToShow]);
  return (
    <>
      <section className={Style.userTestimonial} id="testimonials">
        <div className={Style.curve_top}></div>
        <div className="container pr-4 pl-4">
          <div className="row">
            <div className="col-md-12 position-relative z-1">
              <Slider {...settings} className="user_testimoni">
                {props.data.map((item, index) => {
                  return (
                    <>
                      <div className={Style.User_review} key={index}>
                        <div className="row align-items-center justify-content-between">
                          <div className="col-md-6">
                            <img
                              src={item.image}
                              alt={item.name}
                              className={`${Style.user_img} usertestimonal${index} testimoni_user w-100 rounded-circle`}
                            />
                          </div>
                          <div className="col-md-5">
                            <div className={Style.testi_content}>
                              <img
                                src="/quote.svg"
                                alt={item.name}
                                className="d-none d-md-block quote_img"
                              />
                              <div className="d-flex align-items-center mt-2 mb-lg-3 mb-md-2 mb-3 justify-content-center justify-content-md-start">
                                <ReactStars
                                  count={5}
                                  value={4.8} // Set the fixed value here
                                  size={24}
                                  activeColor="#FFC107"
                                  edit={false} // Disable user interaction
                                />
                                {/* <img src={`/${item.rating}.svg`} alt="star rating" className='me-1' /> */}
                              </div>
                              <p>{item.comment}</p>
                              <div className="h5 font-weight-700">{item.name}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
        <div className={Style.curve_bottom}></div>
      </section>
    </>
  );
}

export default UserTestimonial;
