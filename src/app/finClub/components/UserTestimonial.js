import React, { useEffect, useState } from 'react';
import Style from '../style/finance.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Rating } from "@mui/material";
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
        beforeChange: (currentslide, nextSlide) => {
            setActiveDot(nextSlide);
        },
    };



    useEffect(() => {



        // Apply a rotate property to the ul.slick-dots element based on the activeDot state
        const ulElement = document.querySelector('.user_testimoni .slick-dots');

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
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 position-relative z-1">
                            <Slider {...settings} className="user_testimoni">
                                {props.data.map((item, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <div className={Style.User_review} key={index}>
                                                <div className="row align-items-center justify-content-between">
                                                    <div className="col-md-6">
                                                        <img src={item.image} loading="eager" className={`${Style.user_img} usertestimonal${index} testimoni_user w-100 rounded-circle`} />
                                                    </div>
                                                    <div className="col-md-6 ps-4">
                                                        <div className={Style.testi_content}>
                                                            <img src="/quote.svg" loading="eager" className={`d-none d-md-block quote_img ${Style.Quotes}`} />
                                                            <div className='d-flex align-items-center mt-2 mb-lg-3 mb-md-2 mb-3 justify-content-center justify-content-md-start'>
                                                                {/* <img src={`/${item.rating}.svg`} loading="eager" className='me-1' /> */}
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
                                                            <p>{item.comment}</p>
                                                            <div className='h5 font-weight-700'>{item.name}</div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </React.Fragment>

                                    )
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