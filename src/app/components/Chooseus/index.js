import React from "react";
import Style from "../../coursesStyle/home.module.css";
import Files from "@/config/file";
import DefaultImage from "../DefaultImage";
function Chooseus() {
  return (
    <>
      <section className={Style.Chooseus} id="whyus">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className={`${Style.content_box} text-center text-sm-start`}>
                <h2>Why FinnovationZ?</h2>
                {/* <p className='mt-lg-4 mt-3'>Our Courses</p> */}
                <ul className="list-unstyled mb-0 mt-md-3 pt-md-1 d-inline-block d-md-block">
                  <li>100% Practical</li>
                  <li>Even a Kid Can Understand</li>
                  <li>Modern Investing Techniques</li>
                  {/* <li>5 Days Refund</li> */}
                </ul>
              </div>
            </div>
            <div className="col-md-12 d-block d-sm-none text-center position-relative">
              <div className="profitLoss growth-card">
                <div className="d-flex align-items-center justify-content-between">
                  <h2>Profit & Loss</h2>
                  <h6>Daily</h6>
                </div>
                <img src="/profitLoss.svg" alt="" />
              </div>
              <div className="shareprice growth-card">
                <h2>Share Price</h2>
                <img src="/shareprice.svg" alt="" />
              </div>
              <div className="marketshare growth-card">
                <h2>
                  Market <br />
                  Share
                </h2>
                <img src="/marketShare.svg" alt="" />
              </div>

              <img src="/girlMobile.webp" alt="" className={Style.mobileImg} />
            </div>
            <DefaultImage
              src={Files?.courses?.courseImageGirl}
              alt="best choice to learn the stock market"
              className={Style.girlimg}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Chooseus;
