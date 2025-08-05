import React from "react";
import Stylefinance from "../style/finance.module.css";
import Files from "@/config/file";
import DefaultImage from "@/app/components/DefaultImage";
function JoinClub() {
  return (
    <>
      <section className={` ${Stylefinance.JoinClub}`}>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-7">
              <h2>
                Why Finance Club by{" "}
                <span className={` ${Stylefinance.textHeighlighted}`}>
                  Prasad
                </span>
              </h2>
              <ul className={` ${Stylefinance.listStyle}`}>
                <li>
                  You are an average of five people around you, let’s improve
                  the average by surrounding yourself with smart investors.
                </li>
                <li>
                  Unlike your cousins we and club members won’t run away when
                  you start talking about the stock market.
                </li>
                <li>
                  {" "}
                  Learn, enjoy and compete with club members in fun quizes.{" "}
                </li>
                <li>
                  Our Experts are not your professors, they answer anything
                  anytime.{" "}
                </li>
              </ul>
              <a
                href="/forms"
                className={`site_btn text-decoration-none footer_btn ps-5 pe-5 mt-0 shadow`}
              >
                Join Now
              </a>
            </div>
            <div className="col-md-5 mt-md-0 mt-5">
              <DefaultImage
                src={Files?.finClub?.joinclib}
                loading="eager"
                className="w-100 ps-4"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default JoinClub;
