import React, { Component } from "react";
import "./featuredon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import Files from "@/config/file";
import DefaultImage from "../components/DefaultImage";
import Culture from "../components/webinarCulture/Culture";

function Featured() {
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
              <h2 className="text-center">As Seen On</h2>
              <Culture dummy='x'/>
            </div>
            
          </div>
        </div>
      </section>
      <div style={{ position: "relative", width: "fit-content", margin: "auto" }}>
  {/* Explore More button (Hidden behind) */}
  <button
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 1,
      opacity: 0, // Fully hidden
      pointerEvents: "none", // Prevent accidental clicks
      border: "2px solid #2563eb",
      borderRadius: "999px",
      padding: "1rem 2rem",
      fontSize: "1rem",
      color: "#2563eb",
      background: "transparent"
    }}
  >
    Explore more
  </button>

  {/* Reserve My Spot Now button (visible on top) */}
  <a
    href="/vicsession/#pricing"
    style={{ textDecoration: "none", position: "relative", zIndex: 2,marginTop:"-100px" }}
  >
    <button
      className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2"
      style={{
        border: "none",
        outline: "none",
        cursor: "pointer"
      }}
    >
      Reserve My Spot Now
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 12H19M19 12L12 5M19 12L12 19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  </a>
</div>

    </>
  );
}

export default Featured;
