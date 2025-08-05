// Footer.js

import React from "react";
import Link from "next/link";
// import { useNavigation } from "next/navigation"; // Import useNavigation from next/navigation
import styles from "./Footer.module.css";
import { usePathname } from "next/navigation";
import Files from "@/config/file";
import DefaultImage from "@/app/components/DefaultImage";

function Footer() {
  //   const navigation = useNavigation(); // Use useNavigation instead of useRouter
  //   const pathname = usePathname();
  const textStyle = {
    fontFamily: '"Open Sans", sans-serif',
  };


  return (
    <footer
      className={styles.footerContainer}
      style={{...textStyle,display: "flex", justifyContent: "center" }}
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
                  src={Files?.finnovationzLogo?.logo}
                  alt="logo"
                  className={`mb-5 ${styles.f_logo}`}
                />
              </Link>
              <p className="mb-1">
                <span>Are you ready?</span>
              </p>
              <h2>Let’s get started</h2>
              {/* <Link
              href="https://courses.finnovationz.com/"
              className={`${styles.site_btn} text-decoration-none footer_btn`}
            > */}
              {/* {navigation.pathname === "/courses/free-stock-market-course" // Use navigation instead of router
                ? "Enrol Now"
                : "Explore Courses"} */}
              {/* </Link> */}
              <ul
                className={`list-unstyled mb-0 flex-wrap d-flex align-items-center justify-content-center ${styles.footer_links}`}
                style={{ display: "flex", gap: 10 }}
              >
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/Non-Refund-Policy">Non Refund  Policy</Link>
                </li>
                <li>
                  <Link href="/terms-of-service">Terms & Condition</Link>
                </li>
              </ul>
            </div>
          </div>
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
                href="mailto:+917892541249"
                style={{ fontWeight: 800, fontFamily: "Mulish" }}
                className="text-decoration-none "
              >
                {" "}
                +91 7892541249,{" "}
              </Link>
              <Link
                href="mailto:+917276376429"
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
            
          <p className="text-center mb-0">
            Copyright © 2024. FinnovationZ. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
