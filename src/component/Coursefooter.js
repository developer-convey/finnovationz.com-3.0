import React, { useEffect, useState } from "react";
// import "./Brokerfooter.css";
import Link from "next/link";
import Files from "@/config/file";
import DefaultImage from "@/app/components/DefaultImage";
import "./Course.css";
// import "./components/brokFooter/Brokerfooter.css";

function Coursefooter() {
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
                <p className="my-3">
                  Ikashi Fintech Private Limited (Finnovationz) 3rd Floor
                  Lumbini Society, Survey No 55 Plot No. 108, NYN Arcade Lumbini
                  Enclave, off Hi-tech road, Gachibowli Hyderabad 500032
                  Telangana India
                </p>
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
            <div className="lg:col-span-2 col-span-1">
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
            <div className="lg:col-span-2 col-span-1">
              <div className="">
                <div className="headers">Finnovationz</div>
                <Link
                  className="footer-link-text"
                  href="https://blog.finnovationz.com/"
                  target="_blank"
                >
                  Blogs
                </Link>{" "}
                <br />
                <Link
                  className="footer-link-text"
                  href="https://quiz.finnovationz.com/"
                  target="_blank"
                >
                  Quiz{" "}
                </Link>{" "}
                <br />
                <Link
                  className="footer-link-text"
                  href="https://careers.finnovationz.com/careers"
                  target="_blank"
                >
                  Careers
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2 col-span-2">
              <div className="">
                <div className="headers">Quick Links</div>
                <Link
                  className="footer-link-text"
                  href="https://play.google.com/store/apps/details?id=com.news.convey&hl=en_IN&gl=US"
                  target="_blank"
                >
                  Finnovationz - Stock News
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
                    Learn Stock Market in 7 Days
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
          <div className="policy">
            <ul className="mb-0 flex-wrap d-flex align-items-center justify-content-center">
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
            </ul>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 ">
            <div className="lg:col-span-6 flex items-center copy-right">
              {" "}
              Copyright © 2024. FinnovationZ. All right reserved
            </div>
            <div
              className="lg:col-span-6 flex items-center"
              style={{ justifyContent: "center" }}
            >
              <div className="float-right">
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
                      Call us at{" "}
                    </span>
                    <Link
                      href="tel:+917892541249"
                      style={{ fontWeight: 800, fontFamily: "Mulish" }}
                      className="text-decoration-none "
                    >
                      {" "}
                      +91 7892541249,{" "}
                    </Link>
                    <Link
                      href="tel:+917276376429"
                      style={{ fontWeight: 800, fontFamily: "Mulish" }}
                      className="text-decoration-none"
                    >
                      +91 7276376429
                    </Link>
                  </span>
                </div>
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
                    Enquiry regarding FMVM Contact{" "}
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
            
          </div>
        </div>
        <div>
          <div className="forbackimg h-20"></div>
        </div>
      </footer>
    </>
  );
}

export default Coursefooter;
