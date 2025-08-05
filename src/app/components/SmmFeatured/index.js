import React, { Component } from "react";
import "./Featured.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import Files from "@/config/file";
import DefaultImage from "../DefaultImage";
import Culture from "../SmmwebinarCulture/Culture";

function Featured({scrollToContact} ) {
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
      <section className="featured-sec ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center">Featured On</h2>
              <Culture />
            </div>
           
          </div>
        </div>
      </section>
      {/* <div className="flex justify-center mt-6">
        <img
          src="https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/websitevideos2020/images/30-12-2024/image-giff.gif"
          alt="Animated GIF"
          loading="lazy"
          className="w-64 md:w-full text-white bg-white mb-4"
        />
      </div> */}
      <div onClick={scrollToContact}   className="flex justify-center mt-6 mb-[100px] md:mb-[40px]">
            <button
              type="submit"
              className="px-14 py-3 rounded-full text-white bg-gradient-to-r from-teal-400 to-blue-600 hover:opacity-90 transition"
              
            >
              Reserve My Spot
            </button>
          </div>
    </>
  );
}

export default Featured;
