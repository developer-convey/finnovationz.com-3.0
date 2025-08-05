import React, { useState } from "react";
import Style from "../../coursesStyle/course.module.css";
import useAnalyticsEventTracker from "../useAnalyticsEventTracker";
import Link from "next/link";
import Files from "@/config/file";
import DefaultImage from "../DefaultImage";
function Pricing(props) {
  const [isHovered, setIsHovered] = useState(false);
  const gaEventTracker = useAnalyticsEventTracker("Pricing section");
  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <section className={`${Style.Pricingsec}`} id="pricing">
        <div className="container">
          <div
            className={`row align-items-center justify-content-center g-lg-0 position-relative z-1`}
          >
            <div className="col-md-12 text-center mb-3">
              <h2>Our Pricing</h2>
            </div>
            {props.comboPages ? (
              ""
            ) : props.data.MrpPrice1 ? (
              <div className="col-lg-3 col-sm-6 mt-4 order-1 order-lg-0 mt-5 mt-lg-0 position-relative">
                <div
                  className={`${Style.price_card}  d-flex d-sm-block align-items-center justify-content-between show_tooltip`}
                >
                  {props.data.comboImg1 ? (
                    <div className={` tooltip_area left-tooltip`}>
                      <img
                        src={props.data.comboImg1}
                        alt=""
                        className="w-100"
                      />
                    </div>
                  ) : (
                    ""
                  )}
                  <div>
                    <span>
                      {props.comboPages
                        ? "2 Combo Offer"
                        : "Life-time Validity"}
                    </span>
                    {/* <p className="mb-0 d-flex align-items-center justify-content-sm-center">
                      <img src="/offers_icon.svg" alt="" className="me-1" /> 33%
                      off{" "}
                      {props.data.comboImg1 ? (
                        <img alt="" src="/info.svg" className="tooltip_icon" />
                      ) : (
                        ""
                      )} */}
                    {/* </p> */}
                    <h3>{props.data.discountedPrice1}</h3>
                    {/* <h4>
                      MRP.: <del>{props.data.MrpPrice1}</del>
                    </h4> */}
                  </div>
                  <Link
                    href={props.data.url1}
                    className="site_btn text-decoration-none"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => gaEventTracker("Buy Now Clicked", "Offer 1")}
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="col-lg-5 mt-4  ">
              <div className={`${Style.recommendedOffer}`}>
                <span className={Style.shape}>Recommended</span>
                <div className={Style.top_content}>
                  {/* {props.data.MrpPrice1 !== "" ? (
                    <h2 className="mb-3">Combo Offer</h2>
                  ) : (
                    ""
                  )} */}
                  <span className="position-relative top-0">
                    Life-time Validity
                  </span>
                  <p className="mt-4 pt-3">{props.data.comboText1}</p>
                  {/* {props.data.MrpPrice1 !== "" ? (
                    <>
                      {" "}
                      <img src="/plus.svg" alt="" className="mb-3" />
                    </>
                  ) : (
                    ""
                  )} */}
                  {props.data.MrpPrice1 !== "" ? (
                    <p>{props.data.comboText2}</p>
                  ) : (
                    ""
                  )}
                  {props.data.comboImg2 ? (
                    <>
                      <img src="/plus.svg" alt="" className="mb-3" />
                      <p>The Complete Course On Options Trading</p>
                    </>
                  ) : (
                    ""
                  )}
                </div>
                <div
                  className={`border-0 bg-transparent pt-4 mt-3 ${Style.price_card}`}
                >
                  {/* {props.data.MrpPrice1 !== "" ? (
                    <p className="mb-0 d-flex align-items-center justify-content-center">
                      <img src="/offers_icon.svg" alt="" className="me-1" /> 33%
                      off
                    </p>
                  ) : (
                    ""
                  )} */}
                  <h3>{props.data.comboPrice}</h3>
                  {/* {props.data.MrpPrice1 !== "" ? (
                    <h4>
                      MRP.: <del>{props.data.comboMRP}</del>
                    </h4>
                  ) : (
                    ""
                  )} */}
                  <Link
                    href={props.data.url2}
                    onClick={() =>
                      gaEventTracker("Buy Now Clicked", "Combo Offer")
                    }
                    className="site_btn text-decoration-none fs-5 px-5 py-3 d-inline-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>

            {props.comboPages ? (
              ""
            ) : props.data.MrpPrice2 ? (
              <div className="col-lg-3 col-sm-6 mt-4 order-2 order-lg-0 mt-5 mt-lg-0 position-relative show_tooltip">
                {isHovered && (
                  <div className={` tooltip_area`}>
                    <DefaultImage
                      src={
                        props.data.comboImg2
                          ? props.data.comboImg2
                          : Files?.brokerLandingPage?.stockBigginers
                      }
                      alt=""
                      className="w-100"
                    />
                  </div>
                )}
                <div
                  className={`${Style.price_card} ${Style.combocard} d-flex d-sm-block align-items-center justify-content-between`}
                >
                  <div>
                    <span>
                      {props.data.comboImg2 ? "2 Combo Offer" : "3 Combo Offer"}
                    </span>
                    <p className="mb-0 d-flex align-items-center justify-content-sm-center">
                      <img src="/offers_icon.svg" alt="" className="me-1" /> 17%
                      off{" "}
                      <img
                        alt=""
                        src="/info.svg"
                        className="tooltip_icon"
                        onMouseEnter={handleHover}
                        onMouseLeave={handleMouseLeave}
                      />
                    </p>
                    <h3>{props.data.discountedPrice2}</h3>
                    {/* <h4>
                      MRP.: <del>{props.data.MrpPrice2}</del>
                    </h4> */}
                  </div>
                  <Link
                    href={props.data.url3}
                    className="site_btn text-decoration-none"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => gaEventTracker("Buy Now Clicked", "Offer 2")}
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
