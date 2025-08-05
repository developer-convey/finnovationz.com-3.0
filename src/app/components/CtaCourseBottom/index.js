import React from "react";
import Style from "../../coursesStyle/home.module.css";
import Link from "next/link";

function CtaBottom() {
  return (
    <>
      <section className={`${Style.ctaSec} ${Style.contactussec}`}>
        <div className="container">
          <div className="row ">
            <div className="col-md-12 text-md-start text-center">
              <div className={Style.ctabox}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="h2 text-dark font-weight-800">
                      Get in <span className="text-blue">touch</span> with us
                    </div>
                    <p>
                      We got your back with anything and everything in the world
                      of investing.
                    </p>
                    {/* <Link href="#banner" className={`site_btn text-decoration-none d-inline-block ${Style.bannerbtn}`}>Contact Us</Link> */}
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-start">
                      <Link
                        href="tel:+918484888968"
                        className="mx-2 mx-sm-0 text-decoration-none fw-bold p-0 "
                      >
                        +91 8484888968
                      </Link>
                      <Link
                        href="tel:+918484888958"
                        className="ms-2 mx-2 text-decoration-none fw-bold p-0"
                      >
                        +91 8484888958
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <img
                      src="/contact.webp"
                      alt=""
                      className={` ${Style.ctaImg1}`}
                    />
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

export default CtaBottom;
