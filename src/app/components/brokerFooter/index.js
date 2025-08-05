import React, { useEffect, useState } from "react";
import "./Brokerfooter.css";
import Link from "next/link";
import Files from "@/config/file";
import DefaultImage from "../DefaultImage";

function Brokerfooter() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(typeof window !== "undefined" && window.innerWidth);
    };

    // Check if window object is defined (client-side)
    if (typeof window !== "undefined") {
      // Set initial window width
      setWindowWidth(window.innerWidth);

      // Add event listener to handle window resize
      window.addEventListener("resize", handleResize);

      // Clean up event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <>
      <footer>
        <div className="container">
          <div className="grid lg:grid-cols-9 grid-cols-2 gap-7 footergrid">
            <div
              className="lg:col-span-3 col-span-2"
              style={{ marginTop: windowWidth <= 450 ? "" : 28 }}
            >
              <div className="">
                <div
                  style={{
                    justifyContent: windowWidth <= 450 ? "center" : "",
                    display: windowWidth <= 450 ? "flex" : "",
                  }}
                >
                  <img
                    loading="lazy"
                    src="/finnovationzfooter.svg"
                    alt=""
                    style={{
                      justifyContent: windowWidth <= 450 ? "center" : "",
                    }}
                  />
                </div>
                <p className=" my-3">
               <strong> Address: <br></br>
                Plot No108 Lumbini Society, Near Euro School Gachibowli, HYDERABAD, TELANGANA, 500032
                </strong> </p>
                <div
                  className="flex"
                  style={{ justifyContent: windowWidth <= 450 ? "center" : "" }}
                >
                  <Link
                    href="https://www.facebook.com/profile.php?id=100091287158268&mibextid=nW3QTL"
                    target="_blank"
                  >
                    <img loading="lazy" src="/fb.svg" alt="facebook" />
                  </Link>
                  <Link
                    href="https://twitter.com/conveyofficial?t=riXE4lD9f8bLbjOmhAIf8Q&s=09"
                    target="_blank"
                  >
                    <img loading="lazy" src="/twittre.svg" alt="twiter" />
                  </Link>
                  <Link
                    href="https://instagram.com/namaskarprasad?igshid=MzRlODBiNWFlZA=="
                    target="_blank"
                  >
                    <img loading="lazy" src="/insta.svg" alt="instagram" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2   col-span-1">
              <div className="">
                <div className="headers">Products</div>
                <Link
                  className="footer-link-text"
                  href="/courses"
                  target="_blank"
                >
                  Finnovationz Courses
                </Link>{" "}
                <br />
                <Link
                  className="footer-link-text"
                  href="https://money.finnovationz.com/"
                  target="_blank"
                >
                  Share Market Mastery{" "}
                </Link>{" "}
                <br />
                <Link
                  className="footer-link-text"
                  href="https://finclub.finnovationz.com/"
                  target="_blank"
                >
                  Finclub By Prasad
                </Link>
                {/* <p>FAQs</p> */}
              </div>
            </div>
            <div className="lg:col-span-2  col-span-1">
              <div className="">
                <div className="headers">Finnovationz</div>
                <Link className="footer-link-text" href="/blog" target="_blank">
                  Blogs
                </Link>{" "}
                <br />
                <Link className="footer-link-text" href="/quiz" target="_blank">
                  Quiz{" "}
                </Link>{" "}
                <br />
                <Link
                  className="footer-link-text"
                  href="/careers"
                  target="_blank"
                >
                  Careers
                </Link>
                <br />
                <Link
                  className="footer-link-text"
                  href="/about-us"
                  target="_blank"
                >
                  About Us
                </Link>
                <br />
                <Link
                  className="footer-link-text"
                  href="/contact-us"
                  target="_blank"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2  col-span-2">
              <div className="">
                <div className="headers">Quick Links</div>
                <Link
                  className="footer-link-text"
                  href="https://play.google.com/store/apps/details?id=com.news.convey&hl=en_IN&gl=US"
                  target="_blank"
                >
                  Finnovationz - News
                </Link>{" "}
                <br />
                <Link
                  className="footer-link-text"
                  href="https://play.google.com/store/apps/details?id=com.news.convey&hl=en_IN&gl=US"
                  target="_blank"
                >
                  <button style={{}}>
                    <DefaultImage
                      loading="lazy"
                      src={Files?.brokerLandingPage?.googlePay}
                      alt=""
                      style={{
                        position: "relative",
                        right: 13,
                        bottom: 13,
                        width: windowWidth <= 450 ? "65%" : "100%",
                      }}
                    />
                  </button>{" "}
                </Link>
                <br />
                <div style={{ marginTop: -20 }}>
                  <Link
                    className="footer-link-text"
                    href="https://play.google.com/store/apps/details?id=com.convey.conveycourses&hl=en_IN&gl=US"
                    target="_blank"
                  >
                    Learn Market in 7 Days
                  </Link>
                  <Link
                    className="footer-link-text"
                    href="https://play.google.com/store/apps/details?id=com.convey.conveycourses&hl=en_IN&gl=US"
                    target="_blank"
                  >
                    <button style={{}}>
                      <DefaultImage
                        loading="lazy"
                        src={Files?.brokerLandingPage?.googlePay}
                        alt=""
                        style={{
                          position: "relative",
                          right: 13,
                          bottom: 11,
                          width: windowWidth <= 450 ? "65%" : "100%",
                        }}
                      />
                    </button>
                  </Link>
                </div>
                {/* <p>Advertise with us</p> */}
              </div>
            </div>
          </div>
          <div className="lg:mb-[120px] md:mb-[70px] mb-[40px]">
            <ul className="mb-0 flex-wrap d-flex align-items-center justify-content-center md:gap-4 gap-2">
              {/* <li><Link to="/">Home</Link></li>
                            <li><Link to="/">About Us</Link></li> */}
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/Non-Refund-Policy">Non Refund Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-service">Terms & Condition</Link>
              </li>
              <li>
                <Link href="/educational-disclaimer">Educational Disclaimer</Link>
              </li>
            </ul>

            <div className="text-center mt-3">
              {" "}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {" "}
                <span
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.4)",
                    fontSize: windowWidth <= 450 ? 11 : 14,
                    padding: windowWidth <= 450 ? "12px 15px" : "12px 22px",
                    border: "1px solid rgba(255, 255, 255, 0.7)",
                    borderRadius: 70,
                    display: "flex",
                    gap: 10,
                  }}
                >
                  <span>
                    {" "}
                    <img
                      loading="lazy"
                      style={{
                        height: 16,
                        width: 16,
                        marginBottom: 3,
                        marginRight: 4,
                      }}
                      src="/Group.svg"
                      alt=""
                    />{" "}
                  </span>{" "}
                  <span
                    style={{
                      color: "#000",
                      fontWeight: 500,
                      fontFamily: "Mulish",
                    }}
                  >
                    {" "}
                    Enquiry Regarding All Courses{" "}
                  </span>
                  <Link
                    href="tel:+917480080039"
                    style={{ fontWeight: 800, fontFamily: "Mulish" }}
                    className="text-decoration-none "
                  >
                    {" "}
                    +91 7480080039,{" "}
                  </Link>
                  <Link
                    href="tel:+919890115927"
                    style={{ fontWeight: 800, fontFamily: "Mulish" }}
                    className="text-decoration-none"
                  >
                    +91 9890115927
                  </Link>
                </span>
              </div>
            </div>

            <div className="text-center mt-3">
              {" "}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {" "}
                <span
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.4)",
                    fontSize: windowWidth <= 450 ? 11 : 14,
                    padding: windowWidth <= 450 ? "12px 15px" : "12px 22px",
                    border: "1px solid rgba(255, 255, 255, 0.7)",
                    borderRadius: 70,
                    display: "flex",
                    gap: 10,
                  }}
                >
                  <span>
                    {" "}
                    <img
                      loading="lazy"
                      style={{
                        height: 16,
                        width: 16,
                        marginBottom: 3,
                        marginRight: 4,
                      }}
                      src="/Group.svg"
                      alt=""
                    />{" "}
                  </span>{" "}
                  <span
                    style={{
                      color: "#000",
                      fontWeight: 500,
                      fontFamily: "Mulish",
                    }}
                  >
                    {" "}
                    Enquiry Regarding FMVM Contact{" "}
                  </span>
                  <Link
                    href="tel:+919890115928"
                    style={{ fontWeight: 800, fontFamily: "Mulish" }}
                    className="text-decoration-none"
                  >
                    +91 9890115928
                  </Link>
                </span>
              </div>
            </div>
            <div className="text-center mt-3">
              {" "}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {" "}
                <span
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.4)",
                    fontSize: windowWidth <= 450 ? 11 : 14,
                    padding: windowWidth <= 450 ? "12px 15px" : "12px 22px",
                    border: "1px solid rgba(255, 255, 255, 0.7)",
                    borderRadius: 70,
                    display: "flex",
                    gap: 10,
                  }}
                >
                  <span>
                    {" "}
                    <img
                      loading="lazy"
                      style={{
                        height: 16,
                        width: 16,
                        marginBottom: 3,
                        marginRight: 4,
                      }}
                      src="/Group.svg"
                      alt=""
                    />{" "}
                  </span>{" "}
                  <span
                    style={{
                      color: "#000",
                      fontWeight: 500,
                      fontFamily: "Mulish",
                    }}
                  >
                    {" "}
                    Enquiry Regarding Value Investing Cohort {" "}
                  </span>
                  <Link
                    href="tel:+917480080027 "
                    style={{ fontWeight: 800, fontFamily: "Mulish" }}
                    className="text-decoration-none"
                  >
                    +91 7480080027 
                  </Link>
                </span>
              </div>
            </div>

          </div>


          <div className="grid lg:grid-cols-12 gap-6 ">
            <div className="lg:col-span-12 justify-center flex items-center copy-right">
              {" "}
              Copyright © 2025. FinnovationZ By Ikashi Fintech PVT LTD. All right reserved
            </div>
          </div>
        </div>
        <div>
          <div className="forbackimg h-10"></div>
        </div>
      </footer>
    </>
  );
}

export default Brokerfooter;
