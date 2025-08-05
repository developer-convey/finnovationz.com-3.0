import React, { Component } from "react";
import "./Featured.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import Files from "@/config/file";
import DefaultImage from "@/app/components/DefaultImage";
import Culture from "@/app/components/webinarCulture/Culture";

function Featured() {
  const textStyle = {
    fontFamily: '"Open Sans", sans-serif',
  };
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
    slidesToScroll: 1,
    nextArrow: customNextArrow,
    prevArrow: customPrevArrow,
    centerMode: true,
    centerPadding: "140px",
    autoplay: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          centerPadding: "90px",
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          dots: false,
          arrows: false,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrows: false,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <>
      <section className="featured-sec " style={textStyle}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center">Featured On</h2>
              <Culture />
            </div>
            <div className="col-md-12">
              <Slider
                {...settings}
                className="position-relative featured-product"
              >
                {/* <div>
                                <div className="card">
                                    <div className="card-header">
                                        <img src="/feature1.png" alt="" className='w-100 rounded-2'/>
                                    </div>
                                    <div className="card-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className='news_cat'>
                                                <img src="/news1.svg" alt="" />
                                                <span>Press Release</span>
                                            </div>
                                            <div className="date">24 June 2023</div>
                                        </div>
                                        <h3>Prasad Lendwe On Share Market And Investments</h3>
                                        
                                    </div>
                                    <div className="card-footer d-flex align-items-center justify-content-between pt-3">
                                            <div className="d-flex align-items-center news-name">
                                                    <img src="/ET.png" alt="" />
                                                    <p className='mb-0'>The Economic Times</p>
                                                </div>
                                        <Link href="https://youtu.be/H6NSGpkqZQo?si=hD_sp3CcDMqCLVrq" target = "_blank" className='read-btn'>Read Now</Link>
                                    </div>
                                </div>
                            </div> */}

                <div>
                  <div className="card">
                    <div className="card-header">
                      <DefaultImage
                        src={Files?.webinar?.ttThumb}
                        alt=""
                        className="w-100 rounded-2"
                      />
                    </div>
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="news_cat">
                          <img
                            style={{ width: 12, height: 18 }}
                            src="/news1.svg"
                            alt=""
                          />
                          <span>Press Release</span>
                        </div>
                        <div className="date">24 June 2023</div>
                      </div>
                      <h3>Simplifying trading for beginners via YouTube</h3>
                    </div>
                    <div className="card-footer d-flex align-items-center justify-content-between pt-3">
                      <div className="d-flex align-items-center news-name">
                        <img src="/Telangana_today.jpeg" alt="" />
                        <p className="mb-0">Telangana Today</p>
                      </div>
                      <Link
                        href="https://telanganatoday.com/simplifying-trading-for-beginners-via-youtube"
                        target="_blank"
                        rel="noreferrer"
                        className="read-btn"
                      >
                        Read Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card">
                    <div className="card-header">
                      <DefaultImage
                        src={Files?.webinar?.jtThumb}
                        alt=""
                        className="w-100 rounded-2"
                      />
                    </div>
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="news_cat">
                          <img
                            src="/news1.svg"
                            style={{ width: 12, height: 18 }}
                            alt=""
                          />
                          <span>Press Release</span>
                        </div>
                        <div className="date">24 June 2023</div>
                      </div>
                      <h3>
                        YouTube stars and broking apps lure pandemic-hit day
                        traders in India
                      </h3>
                    </div>
                    <div className="card-footer d-flex align-items-center justify-content-between pt-3">
                      <div className="d-flex align-items-center news-name">
                        <img src="/jt-sns.png" alt="" />
                        <p className="mb-0">The Japan Times</p>
                      </div>
                      <Link
                        href="https://www.japantimes.co.jp/news/2021/02/22/business/financial-markets/india-influencers-stock-trading/"
                        target="_blank"
                        rel="noreferrer"
                        className="read-btn"
                      >
                        Read Now
                      </Link>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="card">
                    <div className="card-header">
                      <DefaultImage
                        src={Files?.webinar?.mintThumb}
                        alt=""
                        className="w-100 rounded-2"
                      />
                    </div>
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="news_cat">
                          <img
                            src="/news1.svg"
                            style={{ width: 12, height: 18 }}
                            alt=""
                          />
                          <span>Press Release</span>
                        </div>
                        <div className="date">24 June 2023</div>
                      </div>
                      <h3>
                        MBA dropout who runs Hindi-language stock education
                        channel FinnovationZ.
                      </h3>
                    </div>
                    <div className="card-footer d-flex align-items-center justify-content-between pt-3">
                      <div className="d-flex align-items-center news-name">
                        <img src="/Mint.png" alt="" />
                        <p className="mb-0">Mint</p>
                      </div>
                      <Link
                        href="https://www.livemint.com/companies/start-ups/youtube-stars-and-broking-apps-lure-pandemic-hit-day-traders-in-india-11613780950200.html"
                        target="_blank"
                        rel="noreferrer"
                        className="read-btn"
                      >
                        Read Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card">
                    <div className="card-header">
                      <DefaultImage
                        src={Files?.webinar?.etThumb}
                        alt=""
                        className="w-100 rounded-2"
                      />
                    </div>
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="news_cat">
                          <img
                            src="/news1.svg"
                            style={{ width: 12, height: 18 }}
                            alt=""
                          />
                          <span>Press Release</span>
                        </div>
                        <div className="date">24 June 2023</div>
                      </div>
                      <h3>
                        YouTube influencers, social media create millions of new
                        day traders in India
                      </h3>
                    </div>
                    <div className="card-footer d-flex align-items-center justify-content-between pt-3">
                      <div className="d-flex align-items-center news-name">
                        <img src="/ET.png" alt="" />
                        <p className="mb-0">The Economic Times</p>
                      </div>

                      <Link
                        href="https://economictimes.indiatimes.com/markets/stocks/news/youtube-stars-and-broking-apps-lure-pandemic-hit-day-traders-in-india/articleshow/81122905.cms?from=mdr"
                        target="_blank"
                        rel="noreferrer"
                        className="read-btn"
                      >
                        Read Now
                      </Link>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Featured;
