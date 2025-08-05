import React from "react";
import Style from "../../coursesStyle/course.module.css";
import Files from "@/config/file";
import DefaultImage from "../DefaultImage";

function Trainer() {
  return (
    <>
      <section className={Style.TrainerSec} id="trainer">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6 text-md-start text-center mt-md-5">
              <h2 className="fw-semibold mb-sm-3 mb-2">Meet Your Trainer</h2>
              <h3>Prasad R. Lendwe</h3>
              <p>also known as Namaskar Prasad</p>
            </div>
            <div className="col-md-5 col-md-6 text-center">
              <DefaultImage
                loading="lazy"
                src={Files?.courses?.prasad}
                alt="Prasad Lendwe"
                className={Style.trainer_img}
              />
            </div>
            <div className="col-md-12">
              <div className={Style.Trainer_detail}>
                <div className="row row-cols-lg-5 row-cols-sm-3 row-cols-2 ">
                  <div className="col">
                    <h4>12+ Years</h4>
                    <p>
                      Experience in <br /> Stock Market
                    </p>
                  </div>
                  <div className="col">
                    <h4>2.5 Mn+</h4>
                    <p>
                      Subscribers <br />
                      (Youtube)
                    </p>
                  </div>
                  <div className="col">
                    <h4>21.03%</h4>
                    <p>
                      CAGR Personal
                      <br /> Portfolio
                    </p>
                  </div>
                  <div className="col">
                    <h4>10+ Years</h4>
                    <p>
                      Teaching <br /> Experience
                    </p>
                  </div>
                  <div className="col-sm col-12">
                    <h4>200+ Hrs</h4>
                    <p>Content Created on India Stock Market</p>
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

export default Trainer;
