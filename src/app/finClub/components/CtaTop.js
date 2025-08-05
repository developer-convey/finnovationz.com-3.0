import React from "react";
import Style from "../style/finance.module.css";
import Files from "@/config/file";
import DefaultImage from "@/app/components/DefaultImage";

function CtaTop() {
  return (
    <>
      <section className={Style.ctaSec}>
        <div className="container">
          <div className="row ">
            <div className="col-md-12 text-md-start text-center">
              <div className={Style.ctabox}>
                <div className="row">
                  <div className="col-md-6 col-xl-8">
                    <h2>
                      Invite your friends and earn <span>Amazon Voucher</span>{" "}
                      worth Rs. 100
                    </h2>
                    <p>
                      Dont be selfish, share the benefits of the club with your
                      family and friends and earn a Amazon Voucher worth Rs. 100
                    </p>
                    <a
                      href="/finclub/form"
                      className={`site_btn text-decoration-none d-inline-block ${Style.bannerbtn}`}
                    >
                      {" "}
                      Invite Now
                    </a>
                  </div>

                  <DefaultImage
                    src={Files?.finClub?.ct1Min}
                    loading="eager"
                    className={` ${Style.ctaImg}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CtaTop;
