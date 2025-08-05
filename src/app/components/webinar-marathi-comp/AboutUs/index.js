import React from "react";
import "./AboutUs.css";
import Link from "next/link";
import Files from "@/config/file";
import DefaultImage from "@/app/components/DefaultImage";

function AboutUs() {
  // const scrollRef = useRef(null);
  const textStyle = {
    fontFamily: '"Open Sans", sans-serif',
  };
  return (
    <>
      <section className="AboutUs" style={textStyle}>
        <div className="custom_shadow">
          <img src="/white_cover.svg" />
        </div>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 text-center heading_content">
              <h2 className="fw-bold">What our Learners say about us</h2>
              {/* <p>Here we will put the reviews provided to us on LinkedIn, Twitter and other socials</p> */}
            </div>
            <div className="row justify-content-center align-items-center auto-scrolling">
              <div className="col-12 col-lg-4 col-md-6">
                <div className="row">
                  <div className="col-12 content_parent">
                    <div className="content">
                      <div className="content_header">
                        <DefaultImage
                          src={Files?.webinar?.image2}
                          className="testimonial-img"
                        />
                        <h5>Kuldeep Chaurasia</h5>
                        <span>Summer Intern</span>
                      </div>
                      <div className="content_body">
                        <p>
                          The wealth of knowledge and expertise that
                          FinnovationZ brought to the table was invaluable. It
                          was an honor to learn from someone so deeply
                          passionate and knowledgeable about the stock market.
                        </p>
                        <div className="d-flex">
                          <div className="icon">
                            <img src="/linkedin.svg" />
                          </div>
                          <div className="rating ps-2">
                            <h6>Linkedin Review</h6>
                            <img src="/rating.svg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 content_parent">
                    <Link
                      href="https://www.linkedin.com/posts/kajol-b-b6034943_certification-convey-activity-7038045080460378112-duju?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noreferrer"
                      className="text-decoration-none"
                    >
                      <div className="content">
                        <div className="content_header">
                          <DefaultImage
                            src={Files?.webinar?.image6}
                            className="testimonial-img"
                          />
                          <h5>Kajol B.</h5>
                          <span>Digital Marketing Manager</span>
                        </div>
                        <div className="content_body">
                          <p>
                            Thank you for sharing your expertise, providing
                            valuable feedback, and helping me stay motivated
                            throughout the course. Your mentorship has truly
                            been invaluable to me.
                          </p>
                          <div className="d-flex">
                            <div className="icon">
                              <img src="/linkedin.svg" />
                            </div>
                            <div className="rating ps-2">
                              <h6>Linkedin Review</h6>
                              <img src="/rating.svg" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4 col-md-6">
                <div className="row">
                  <div className="col-12 content_parent">
                    <div className="content">
                      <div className="content_header">
                        <DefaultImage
                          src={Files?.webinar?.image3}
                          className="testimonial-img"
                        />
                        <h5>Deeptam Chattopadhyay</h5>
                        <span>Zonal Business Manager</span>
                      </div>
                      <div className="content_body">
                        <p>
                          {" "}
                          It has empowered me to make data-driven decisions
                          based on a companys financial health, a crucial skill
                          in our constantly evolving business landscape.
                        </p>
                        <div className="d-flex">
                          <div className="icon">
                            <img src="/linkedin.svg" />
                          </div>
                          <div className="rating ps-2">
                            <h6>Linkedin Review</h6>
                            <img src="/rating.svg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 content_parent">
                    <Link
                      href="https://x.com/kashyapgaurav09/status/1649736483899850752?s=20"
                      className="text-decoration-none"
                      rel="noreferrer"
                    >
                      <div className="content">
                        <div className="content_header">
                          <DefaultImage
                            src={Files?.webinar?.image4}
                            className="testimonial-img"
                          />
                          <h5>Gaurav Kumar</h5>
                          <span>Lead Product Designer</span>
                        </div>
                        <div className="content_body">
                          <p>
                            {" "}
                            I am very excited to participate in my first
                            investor event held by Prasad Lendwe Sir.
                          </p>
                          <div className="d-flex">
                            <div className="icon">
                              <img
                                src="/twitter.jpeg"
                                style={{ width: 40, height: 40 }}
                                className="twitter"
                              />
                            </div>
                            <div className="rating ps-2">
                              <h6>Twitter Review</h6>
                              <img src="/rating.svg" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4 ">
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-12 content_parent">
                    <div className="content">
                      <div className="content_header">
                        <DefaultImage
                          src={Files?.webinar?.image1}
                          className="testimonial-img"
                        />
                        <h5>Raviraj Somawati Yadav</h5>
                        <span>Lead Product Designer</span>
                      </div>
                      <div className="content_body">
                        <p>
                          @NamaskarPrasad Wow, I have learnt a lot from your
                          YouTube videos. I can assure you whoever is not buying
                          will regret it.
                          <br />
                          Thank you❤
                        </p>
                        <div className="d-flex">
                          <div className="icon">
                            <img
                              src="/twitter.jpeg"
                              style={{ width: 40, height: 40 }}
                              className="twitter"
                            />
                          </div>
                          <div className="rating ps-2">
                            <h6>Twitter Review</h6>
                            <img src="/rating.svg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-12 content_parent">
                    <div className="content">
                      <div className="content_header">
                        <DefaultImage
                          src={Files?.webinar?.paromitaBanerjee}
                          className="testimonial-img"
                        />
                        <h5>Paromita Banerjee</h5>
                        <span>Jr. Database Analyst</span>
                      </div>
                      <div className="content_body">
                        <p>
                          The programme was very good and Prasad’s teaching
                          skills are awesome. Especially the Mutual Funds part
                          was the one I found most useful. This is a must attend
                          for anyone who wants to manage their own finances.
                        </p>
                        <div className="d-flex">
                          <div className="icon">
                            <img src="/linkedin.svg" />
                          </div>
                          <div className="rating ps-2">
                            <h6>Linkedin Review</h6>
                            <img src="/rating.svg" />
                          </div>
                        </div>
                      </div>
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

export default AboutUs;
