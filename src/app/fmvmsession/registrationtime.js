
import React from "react";
import "./registration.css";
import Files from "@/config/file";
import DefaultImage from "../components/DefaultImage";

function RegistrationTime() {
  return (
    <>
      <section className="RegistrationTime">
        {/* <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 text-center heading_content">
              <h2 className="fw-bold">
                Register before {programmeData?.time},{" "}
                {formatDate(programmeData?.date)}
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
                    Get lifetime membership of <b>Money Masters community</b>
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
                    Live Q/A with <b>Prasad</b>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>

      <section className="RegistrationTime">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 text-center heading_content">
              <h2 className="fw-bold">Why Join Free Counselling Session

</h2>
              <p className="fw-passage">
              Because you get to know all this in the counseling session      </p>      </div>
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
                  <h5>3500+% Return, DCF Helps Investor to Earn</h5>
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
                    <span>How DCF Makes Money for Investor?</span>
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
                    <span>How does it work today?</span>
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
                    <span>How You can too use the same too?</span>
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
                  <h5>Price Follows Value
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
                    How does stock price follow value?
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
                    When does price go faster?
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
                   When does value go faster?
 
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
                  <h5>30000+ Jobs by FMVM</h5>

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
                        Start your career with one of the 30000+ jobs

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
                        Use the power of FMVM{" "}
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
                        Build your career
{" "}
                      </span>
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

export default RegistrationTime;
