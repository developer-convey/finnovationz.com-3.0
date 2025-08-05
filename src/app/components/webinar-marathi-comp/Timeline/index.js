import React, { Component } from "react";
import "./Timeline.css";
import Files from "@/config/file";
import DefaultImage from "@/app/components/DefaultImage";

function Timeline() {
  const textStyle = {
    fontFamily: '"Open Sans", sans-serif',
  };

  return (
    <>
      <section className="pt-5" style={textStyle}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="main-heading pt-5 mb-5 ">
                ह्या <br className="d-none d-md-block" />{" "}
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(83.86deg, #30C9AB 2.33%, #377BDC 92.3%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  ९० मिनिटात
                </span>{" "}
                तुम्हाला काय मिळेल ?
              </h2>
            </div>
            <div className="col-md-5 left-side-timeline d-none d-md-block">
              <div className="video-desc">
                <h3> Mutual Funds समजून घेताना </h3>
                {/* <div className="d-flex align-items-center my-3">
                                    <img src="/images/clock.png" alt=""className='clock me-1' />
                                    <p className='mb-0'>26mins 37secs</p>
                                </div> */}
                <DefaultImage
                  src={Files?.webinar?.mutualFund}
                  alt=""
                  className="w-100 mb-3"
                />
                <p>
                  आता आपण तुमच्या आयुष्याचे goals सेट करू आणी Mutual Funds च्या
                  मार्फत ते कसे पूर्ण करावेत ते समजून घेऊ.
                </p>
              </div>
              <div className="video-desc">
                <h3> प्रश्न-उत्तरे </h3>
                {/* <div className="d-flex align-items-center my-3">
                                    <img src="/images/clock.png" alt=""className='clock me-1' />
                                    <p className='mb-0'>26mins 37secs</p>
                                </div> */}
                <DefaultImage
                  src={Files?.webinar?.askMeAnything}
                  alt=""
                  className="w-100 mb-3"
                />
                <p>
                  सरते शेवटी आपण तुमच्या शेअर मार्केट आणि finance बद्दलच्या सर्व
                  शंकांचे निराकरण करू, चिंता नसावी.
                </p>
              </div>
            </div>
            <div className="col-md-2 d-none d-md-block">
              <div className="time-line">
                <div className="step active"></div>
                <div className="step "></div>
                <div className="step "></div>
                <div className="step "></div>
              </div>
            </div>
            <div className="col-md-5 d-none d-md-block">
              <div className="video-desc">
                <h3> Mutibagger कसा शोधावा? </h3>
                {/* <div className="d-flex align-items-center my-3">
                                    <img src="/images/clock.png" alt=""className='clock me-1' />
                                    <p className='mb-0'>26mins 37secs</p>
                                </div> */}
                <DefaultImage
                  src={Files?.webinar?.getMultiBaggerReturns}
                  alt=""
                  className="w-100 mb-3"
                />
                <p>
                  मी स्वतः irfc आणि इतर stocks कसे शोधले, हे practical case
                  studies च्या आधारे समजावून सांगू
                </p>
              </div>
              <div className="video-desc">
                <h3> Free Hit संधी शोधताना</h3>
                {/* <div className="d-flex align-items-center my-3">
                                    <img src="/images/clock.png" alt=""className='clock me-1' />
                                    <p className='mb-0'>26mins 37secs</p>
                                </div> */}
                <DefaultImage
                  src={Files?.webinar?.rightTime}
                  alt=""
                  className="w-100 mb-3"
                />
                <p>
                  {" "}
                  मार्केट मध्ये बऱ्याच वेळ low-risk, high-return संधी येत असतात,
                  अश्या संधी ला आम्ही free hit investments म्हणतो. तर अशी संधी
                  कशी शोधावी? मी अश्या बरेच freehit वर six कसा मारला ते आपण
                  समजून घेऊ
                </p>
              </div>
            </div>
            <div className="col-md-5 d-block d-md-none">
              <div className="video-desc">
                <h3> Mutibagger कसा शोधावा? </h3>
                {/* <div className="d-flex align-items-center my-3">
                                    <img src="/images/clock.png" alt=""className='clock me-1' />
                                    <p className='mb-0'>26mins 37secs</p>
                                </div> */}
                <DefaultImage
                  src={Files?.webinar?.getMultiBaggerReturns}
                  alt=""
                  className="w-100 mb-3"
                />
                <p>
                  {" "}
                  मी स्वतः irfc आणि इतर stocks कसे शोधले, हे practical case
                  studies च्या आधारे समजावून सांगू
                </p>
              </div>
              <div className="video-desc">
                <h3>Mutual Funds समजून घेताना</h3>
                {/* <div className="d-flex align-items-center my-3">
                                    <img src="/images/clock.png" alt=""className='clock me-1' />
                                    <p className='mb-0'>26mins 37secs</p>
                                </div> */}
                <DefaultImage
                  src={Files?.webinar?.mutualFund}
                  alt=""
                  className="w-100 mb-3"
                />
                <p>
                  आता आपण तुमच्या आयुष्याचे goals सेट करू आणी Mutual Funds च्या
                  मार्फत ते कसे पूर्ण करावेत ते समजून घेऊ.
                </p>
              </div>
              <div className="video-desc">
                <h3>Free Hit संधी शोधताना</h3>
                {/* <div className="d-flex align-items-center my-3">
                                    <img src="/images/clock.png" alt=""className='clock me-1' />
                                    <p className='mb-0'>26mins 37secs</p>
                                </div> */}
                <DefaultImage
                  src={Files?.webinar?.rightTime}
                  alt=""
                  className="w-100 mb-3"
                />
                <p>
                  {" "}
                  मार्केट मध्ये बऱ्याच वेळ low-risk, high-return संधी येत असतात,
                  अश्या संधी ला आम्ही free hit investments म्हणतो. तर अशी संधी
                  कशी शोधावी? मी अश्या बरेच freehit वर six कसा मारला ते आपण
                  समजून घेऊ
                </p>
              </div>
              <div className="video-desc">
                <h3>प्रश्न-उत्तरे</h3>
                {/* <div className="d-flex align-items-center my-3">
                                    <img src="/images/clock.png" alt=""className='clock me-1' />
                                    <p className='mb-0'>26mins 37secs</p>
                                </div> */}
                <DefaultImage
                  src={Files?.webinar?.askMeAnything}
                  alt=""
                  className="w-100 mb-3"
                />
                <p>
                  सरते शेवटी आपण तुमच्या शेअर मार्केट आणि finance बद्दलच्या सर्व
                  शंकांचे निराकरण करू, चिंता नसावी.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Timeline;
