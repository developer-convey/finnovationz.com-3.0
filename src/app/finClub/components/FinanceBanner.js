import React from "react";
import Stylefinance from "../style/finance.module.css";
import Files from "@/config/file";
import DefaultImage from "@/app/components/DefaultImage";
function FinanceBanner() {
  return (
    <>
      <section className={Stylefinance.hero_banner}>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <h1 className={`mb-0 ${Stylefinance.textHeighlighted}`}>
                Finance Club{" "}
              </h1>
              <p className={Stylefinance.highlighted_text}>by Prasad</p>
              <p>
                Become a part of our exclusive Finance club. Receive invitations
                to exclusive events and opportunities.
              </p>
              <a
                href="/finclub/form"
                className={`site_btn text-decoration-none d-inline-block ${Stylefinance.bannerbtn}`}
              >
                Get Access
              </a>
            </div>
            <div className="col-md-6 mt-5 mt-md-0">
              <DefaultImage
                src={Files?.finClub?.financeBanner}
                loading="eager"
                className={`${Stylefinance.bannerImg}`}
              />
              {/* <img src="/finance_banner1.svg" loading="eager"  className={`d-md-none d-block ${Stylefinance.bannerImg }`}/> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FinanceBanner;
