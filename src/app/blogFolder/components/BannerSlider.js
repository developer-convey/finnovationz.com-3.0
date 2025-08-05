import React, { useState, useEffect } from "react";
import { updateLikes } from "@/app/services/blog.service";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Style from "../style/home.module.css";
import Link from "next/link";
import "../style/blog.css";

import BaseURL from "./Baseurl";
function BannerSlider(props) {
  const [clapped, setClapped] = useState(false);

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

  function formatDate(dateString) {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  }
  const [sliderLikes, setSliderLikes] = useState(() =>
    props.sliderData.map(() => 0)
  ); // Initialize array to hold individual blog likes

  useEffect(() => {
    // Set initial likes when the component mounts
    setSliderLikes(props.sliderData.map((item) => item.totalLikes));
  }, [props.sliderData]);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "450px",
    // slidesToScroll: 1,
    nextArrow: customNextArrow,
    prevArrow: customPrevArrow,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          centerPadding: "350px",
        },
      },
      {
        breakpoint: 1500,
        settings: {
          centerPadding: "280px",
        },
      },
      {
        breakpoint: 1240,
        settings: {
          centerPadding: "200px",
        },
      },
      {
        breakpoint: 1110,
        settings: {
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 991,
        settings: {
          centerPadding: "250px",
        },
      },
      {
        breakpoint: 840,
        settings: {
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "50px",
        },
      },
    ],
  };
  return (
    <>
      <section className={`${Style.blog_banner} heroSlider`}>
        <div className="text-center">
          <h1 className="d-inline-block">Stock Market Blogs</h1>
        </div>
        <Slider {...settings}>
          {props.sliderData.slice(0, 3).map((item, index) => {
            return (
              <div className={`card-shadow ${Style.blog_items}`} key={index}>
                <div className="row">
                  <div className="col-lg-5 ">
                    <div className="d-flex flex-column h-100 justify-content-between sp-32">
                      <Link href={`/blog/${item.keyword}`} className="a">
                        <div>
                          <h2>{item.title}</h2>
                          <p>{item.description}</p>
                          <div className="d-flex-align-items-center">
                            {/* <span>10 mins read</span>
                                                    <span className={Style.dot}></span> */}
                            <span>{formatDate(item.createdAt)}</span>
                          </div>
                        </div>
                      </Link>
                      <div
                        className={`${Style.bottom_content}  d-flex align-items-center justify-content-between`}
                      >
                        <div className="d-flex align-items-center">
                          <div
                            className={`d-flex align-items-center clapbutton ${
                              clapped ? "clap-active" : ""
                            }`}
                            onClick={() =>
                              updateLikes(item._id, sliderLikes[index], (newLikes) => {
                                const updatedLikes = [...sliderLikes];
                                updatedLikes[index] = newLikes;
                                setSliderLikes(updatedLikes);
                              }, setClapped)
                            }
                          >
                            <img src="/likes.svg" alt="" className="me-2" />
                            <span>{sliderLikes[index]}</span>
                          </div>
                          {/* <span className={Style.dot}></span>
                                                        <div className='d-flex align-items-center'>
                                                            <img src="/comment.svg" alt="" className='me-2'/>
                                                            <span>43</span>
                                                        </div> */}
                        </div>
                        <div>
                          {/* <img src="/bookmark.svg" alt="" className='me-2'/> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 order-first order-lg-0 mb-3 mb-lg-0 d-flex align-items-center">
                    <Link className="a" href={`/blog/${item.keyword}`}>
                      <img
                        src={item.imageUrl}
                        alt=""
                        className={`w-100 ${Style.BannerImg}`}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </section>
    </>
  );
}

export default BannerSlider;
