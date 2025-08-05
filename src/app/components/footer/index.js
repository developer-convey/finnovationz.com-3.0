import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import Files from "@/config/file";
import DefaultImage from "../DefaultImage";

function Footer() {
  return (
    <footer
      className={styles.footerContainer}
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundImage:
          "url('https://money.finnovationz.com/static/media/footer.6017c6661e60edd27fdc.svg')",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <div className="container">
          <div className="row">
            <div className={`col-md-12 text-center ${styles.top_footer}`}>
              <Link
                href="/"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <DefaultImage
                  loading="lazy"
                  src={Files?.finnovationzLogo?.logo}
                  alt="logo"
                  className={`mb-5 ${styles.f_logo}`}
                />
              </Link>
              <p className="mb-1">
                <span>Are you ready?</span>
              </p>
              <h2>Let’s get started</h2>

              <ul
                className={`list-unstyled mb-0 flex-wrap d-flex align-items-center justify-content-center ${styles.footer_links}`}
                style={{ display: "flex", gap: 10 }}
              >
                <li>
                  <Link href="/courses/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/courses/Non-Refund-Policy">Non Refund  Policy</Link>
                </li>
                <li>
                  <Link href="/courses/terms-of-service">
                    Terms & Condition
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-5">
          {" "}
          <Link
            href="https://finnovation.rpy.club/webinar/zUtYucp4Z4"
            className="site_btn px-4 py-2 "
          >
            {" "}
            Book now
          </Link>{" "}
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 30,
            }}
          >
            {" "}
            <span
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                fontSize: 14,
                padding: "12px 22px",
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
                style={{ color: "#000", fontWeight: 500, fontFamily: "Mulish" }}
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
                    Enquiry regarding Value investing cohort {" "}
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
          <p className="text-center mb-0">
            Copyright © 2024. FinnovationZ. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
