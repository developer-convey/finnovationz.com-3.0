import React from "react";
import Stylefinance from "../style/finance.module.css";
function FinanceBanner() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div
              className={`col-12 text-center mb-md-4 mb-3 ${Stylefinance.benefits_top}`}
            >
              <h2 className="pb-md-1">Benefits</h2>
              <p className="mb-md-2 pb-md-1 mb-0">
                Let’s learn and grow together
              </p>
              <div
                className={`d-md-block d-none ${Stylefinance.afterline}`}
              ></div>
            </div>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
              <div
                className={`row justify-content-center align-items-center ${Stylefinance.row_border_padding}`}
              >
                <div className={`col-12 ${Stylefinance.row_border}`}>
                  <div className="row justify-content-center align-items-center">
                    <div className="col-3 col-md-4 col-xl-3">
                      <img src="/stock_market.svg" loading="eager" />
                    </div>
                    <div className="col-9 col-md-8 col-xl-9 px-0">
                      <h5>Community of Smart Investors</h5>
                      <p className="mb-0">
                        Discuss anything and everything about your stocks daily
                        with fellow investors and weekly with our experts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className={`row justify-content-center align-items-center ${Stylefinance.row_border_padding}`}
              >
                <div className={`col-12 ${Stylefinance.row_border}`}>
                  <div className="row justify-content-center align-items-center">
                    <div className="col-3 col-md-4 col-xl-3">
                      <img src="/masterclass.svg" loading="eager" />
                    </div>
                    <div className="col-9 col-md-8 col-xl-9 px-0">
                      <h5>Exclusive Discounts</h5>
                      <p className="mb-0">
                        {" "}
                        Exclusive discounts on all of our courses, designed for
                        an intelligent investor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div
                className={`row justify-content-center align-items-center ${Stylefinance.row_border_padding}`}
              >
                <div className={`col-12 ${Stylefinance.row_border}`}>
                  <div className="row justify-content-center align-items-center">
                    <div className="col-3 col-md-4 col-xl-3">
                      <img src="/special_events.svg" loading="eager"/>
                    </div>
                    <div className="col-9 col-md-8 col-xl-9 px-0">
                      <h5>Special face to Face Events</h5>
                      <p className="mb-0">
                        Connect with Prasad to discuss your stock in our regular
                        offline meetups
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className={`row justify-content-center align-items-center ${Stylefinance.row_border_padding}`}
              >
                <div className={`col-12 ${Stylefinance.row_border}`}>
                  <div className="row justify-content-center align-items-center">
                    <div className="col-3 col-md-4 col-xl-3">
                      <img src="/equity.svg" loading="eager" />
                    </div>
                    <div className="col-9 col-md-8 col-xl-9 px-0">
                      <h5>Equity Research Reports</h5>
                      <p className="mb-0">
                        Find and keep track of your potential multibaggers with
                        our in depth research reports.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 text-center  mt-0">
              <a
                href="/finclub/form"
                className={`site_btn text-decoration-none footer_btn ps-5 pe-5 mt-3`}
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FinanceBanner;
