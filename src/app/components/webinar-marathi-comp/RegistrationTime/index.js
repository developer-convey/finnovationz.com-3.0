import React from "react";
import "./RegistrationTime.css";
import Files from "@/config/file";
import DefaultImage from "@/app/components/DefaultImage";

function RegistrationTime() {

  const textStyle = {
    fontFamily: '"Open Sans", sans-serif',
  };


  return (
    <>
      <section className="RegistrationTime" style={textStyle}>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 text-center heading_content">
              {/* <h2 className="fw-bold">Register before 6 PM, 4th May 2024</h2> */}
              <h2 className="fw-bold" style={{ height: 40 , paddingTop: 5}}> आताच बुक करा आणि मिळवा 3 बोनस मोफत </h2>
            </div>
            <div className="col-12 col-md-6 col-lg-3 content_parent">
              <div className="content" style={{ height: 180 }}>
                <div className="content_header">
                  <DefaultImage  src={Files?.webinar?.frameIcon}className="testimonial-img" />
                  <h5> बोनस १ </h5>
                  <span
                    style={{
                      fontSize: 14,
                      lineHeight: 0,
                      fontFamily: "Mulish",
                    }}
                  >
                    <b> १०,००० </b>किमतीचे ५ शस्त्रे जी तुमची investment journey
                    मध्ये अतिशय उपयोगी येतील
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 content_parent">
              <div className="content" style={{ height: 180 }}>
                <div className="content_header">
                  <DefaultImage  src={Files?.webinar?.frameIcon}className="testimonial-img" />
                  <h5> बोनस २ </h5>
                  <span
                    style={{
                      fontSize: 14,
                      lineHeight: 0,
                      fontFamily: "Mulish",
                    }}
                  >
                    <b>Money Mastery community</b> ची लाईफटाइम मेंबरशिप
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 content_parent">
              <div className="content" style={{ height: 180 }}>
                <div className="content_header">
                  <DefaultImage  src={Files?.webinar?.frameIcon}className="testimonial-img" />
                  <h5> बोनस ३</h5>
                  <span
                    style={{
                      fontSize: 14,
                      lineHeight: 0,
                      fontFamily: "Mulish",
                    }}
                  >
                    <b>प्रसादप्रसाद सोबत</b> live Q&A Session
                  </span>
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
