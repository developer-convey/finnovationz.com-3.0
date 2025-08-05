import React from "react";
import "./RegistrationTime.css";
import Files from "@/config/file";
import DefaultImage from "../DefaultImage";
import Form from "@/app/smm/form";
function RegistrationTime({ programmeData, formatDate,scrollToContact }) {
  return (
    <>
      <section className="RegistrationTime">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 text-center heading_content">
              <h2 className="fw-bold">
                Register for tonight's session
              </h2>
              <p className="fw-passage">
                {" "}
                Book now and get these 3 bonus for free
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-3 content_parent">
              <div className="content" style={{ height: 180 }}>
                <div className="content_header">
                  <DefaultImage
                    loading="lazy"
                    src="./findingmarket.webp"
                    className="testimonial-img"
                  />
                  <h5>Bonus 1</h5>
                  <span
                    style={{
                      fontSize: 14,
                      lineHeight: 0,
                      fontFamily: "Mulish",
                    }}
                  >
                    Get 5 proprietary tools worth :- <b>Rs. 10,000</b> for{" "}
                    <b>Free</b>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 content_parent">
              <div className="content" style={{ height: 180 }}>
                <div className="content_header">
                  <DefaultImage
                    loading="lazy"
                    src="./findingmultibagger.webp"
                    className="testimonial-img"
                  />
                  <h5>Bonus 2</h5>
                  <span
                    style={{
                      fontSize: 14,
                      lineHeight: 0,
                      fontFamily: "Mulish",
                    }}
                  >
                    Get lifetime membership of <b>Market Masters community</b>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 content_parent">
              <div className="content" style={{ height: 180 }}>
                <div className="content_header">
                  <DefaultImage
                    loading="lazy"
                    src="./findingrightmutual.webp"
                    className="testimonial-img"
                  />
                  <h5>Bonus 3</h5>
                  <span
                    style={{
                      fontSize: 14,
                      lineHeight: 0,
                      fontFamily: "Mulish",
                    }}
                  >
                   <b>Prasad’s</b> personal 10-steps secret stock cheat sheet
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     

      {/* <section className="RegistrationTime">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 text-center heading_content">
              <h2 className="fw-bold">What you will get</h2>
              <p className="fw-passage">
                My Secret Recipe to Find Right Stocks at Right Time
              </p>
            </div>
            <div
              className="col-12 col-md-6 col-lg-4  "
              style={{
                margin: "0px !important",
                marginBottom:
                  typeof window !== "undefined" && window.innerWidth <= 450
                    ? 30
                    : "",
              }}
            >
              <div
                className="content"
                style={{
                  backgroundImage: `url('${Files?.webinar?.rectAngle1}')`,
                  objectFit: "cover",
                  border: "0px solid",
                  margin: 0,
                  boxShadow: "none",
                  height: 250,
                }}
              >
                <div className="content_header">
                  <DefaultImage
                    loading="lazy"
                    src={Files?.webinar?.frameIcon}
                    className="testimonial-img"
                  />
                  <h5>Finding Multibagger</h5>
                  <span
                    style={{
                      fontSize: 14,
                      fontFamily: "Mulish",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <img
                      loading="lazy"
                      src="/checked2.png"
                      className="check-img"
                    />{" "}
                    <span> Find stocks which can be your fortune maker</span>
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      fontFamily: "Mulish",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <img
                      loading="lazy"
                      src="/checked2.png"
                      className="check-img"
                    />{" "}
                    <span>Practical steps on how I find my potential multibaggers</span>
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      fontFamily: "Mulish",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      loading="lazy"
                      src="/checked2.png"
                      className="check-img"
                    />{" "}
                    <span>Stocks which have potential to grow manyfold. </span>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-md-6 col-lg-4  marginno"
              style={{ margin: "0px !important" }}
            >
              <div
                className="content"
                style={{
                  backgroundImage: `url('${Files?.webinar?.rectAngle2}')`,
                  objectFit: "cover",
                  border: "0px solid",
                  margin: 0,
                  boxShadow: "none",
                  marginBottom:
                    typeof window !== "undefined" && window.innerWidth <= 450
                      ? 30
                      : "",
                  height: 250,
                }}
              >
                <div className="content_header">
                  <DefaultImage
                    loading="lazy"
                    src={Files?.webinar?.frameIcon}
                    className="testimonial-img"
                  />
                  <h5>Detecting Frauds
</h5>
                  <span
                    style={{
                      fontSize: 14,
                      display: "flex",
                      alignItems: "center",
                      fontFamily: "Mulish",
                    }}
                  >
                    <img
                      loading="lazy"
                      src="/checked2.png"
                      className="check-img"
                    />{" "}
                    You will never lose money in market due to a fraud now
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      display: "flex",
                      alignItems: "center",
                      fontFamily: "Mulish",
                    }}
                  >
                    <img
                      loading="lazy"
                      src="/checked2.png"
                      className="check-img"
                    />{" "}
                    Become a master in management fraud detection
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      display: "flex",
                      alignItems: "center",
                      fontFamily: "Mulish",
                    }}
                  >
                    <img
                      loading="lazy"
                      src="/checked2.png"
                      className="check-img"
                    />{" "}
                    Identify stock manipulation and more

                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-md-6 col-lg-4  "
              style={{ margin: "0px !important" }}
            >
              <div
                className="content"
                style={{
                  backgroundImage: `url('${Files?.webinar?.rectAngle3}')`,
                  objectFit: "cover",
                  border: "0px solid",
                  margin: 0,
                  boxShadow: "none",
                  marginBottom:
                    typeof window !== "undefined" && window.innerWidth <= 450
                      ? 30
                      : "",
                  height: 254,
                }}
              >
                <div className="content_header">
                  <DefaultImage
                    loading="lazy"
                    src={Files?.webinar?.frameIcon}
                    className="testimonial-img"
                  />
                  <h5>Finding Market Opportunities
</h5>

                  <div style={{ display: "flex" }}>
                    <img
                      loading="lazy"
                      src="/checked2.png"
                      className="check-img"
                    />{" "}
                    <div>
                      {" "}
                      <span style={{ fontSize: 14, fontFamily: "Mulish" }}>
                        {" "}
                        Opportunities with very low risk

                      </span>
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <img
                      loading="lazy"
                      src="/checked2.png"
                      className="check-img"
                    />{" "}
                    <div>
                      {" "}
                      <span style={{ fontSize: 14, fontFamily: "Mulish" }}>
                        {" "}
                        How I made around 55% on budget day

                      </span>
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <img
                      loading="lazy"
                      src="/checked2.png"
                      className="check-img"
                    />{" "}
                    <div>
                      {" "}
                      <span style={{ fontSize: 14, fontFamily: "Mulish" }}>
                        {" "}
                        Practical steps to find such opportunities

                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default RegistrationTime;
