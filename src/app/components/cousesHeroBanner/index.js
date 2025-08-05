import React from "react";
import Style from "../../coursesStyle/home.module.css";
import Link from "next/link";
import Header from "../header";

function HeroBanner() {
  const text = " FINNOVATIONZ • NAMASKAR PRASAD •";
  const characters = text.split("");

  const wrappedText = characters.map((char, index) => (
    <span
      key={index}
      className={char + index}
      style={{ transform: `rotate(${index * 11}deg)` }}
    >
      {char}
    </span>
  ));
  return (
    <>
      <section className={`${Style.heroBanner}`} id="banner">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center position-relative z-1">
              <h1>
                Begin Your <span>Investment Journey</span> with Our Premium
                Share Market Courses
              </h1>
              <h2 className={`mb-4 ${Style.resetAndNewStyles}`}>
                Start Now with our Online Courses
              </h2>
              <Link
                href="#courses"
                className={`site_btn text-decoration-none d-inline-block mt-1 mb-sm-5 ${Style.bannerbtn}`}
              >
                Explore More
              </Link>
              <div className="position-relative">
                {/* <ul className={`${Style.Listing} list-unstyled mb-0`}>
                                    <li>Multibaggers</li>
                                    <li>Value Investing</li>
                                    <li>Valuation</li>
                                    <li>Compounding</li>
                                </ul> */}
                <div className={Style.outer_line}>
                  <div className={`${Style.inner_circle} inner_text`}>
                    <div className={Style.rotatingDiv}>
                      <h2>{wrappedText}</h2>
                    </div>
                    <div className={`${Style.inner_content} text-center`}>
                      <img src="/youtube.svg" alt="" />
                      <h3>2.5+ Millions</h3>
                      <p>Subscribers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroBanner;
