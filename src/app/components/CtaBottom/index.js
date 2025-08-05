import React, { useEffect, useState } from "react";
import "./CtaBottom.css";
import Head from "next/head";
import Link from "next/link";

function CtaBottom() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 768);
      }
    }

    handleResize();
    typeof window !== "undefined" &&
      window.addEventListener("resize", handleResize);

    return () => {
      typeof window !== "undefined" &&
        window.removeEventListener("resize", handleResize);
    };
  }, []);

  const buttonStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#25d366",
    color: "#fff",
    border: "none",
    borderRadius: "45px",
    padding: "10px 20px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    textDecoration: "none",
    marginTop: isMobile ? "8px" : "",
  };

  const iconStyles = {
    width: "20px",
    height: "20px",
    marginRight: "10px",
  };

  return (
    <>
      <section className={`ctaSec contactussec`}>
        <div className="container">
          <div className="row ">
            <div className="col-md-12 text-md-start text-center">
              <div className="ctabox">
                <div className="row">
                  <div className="col-md-7">
                    <div className="h2 text-dark font-weight-800" style={{ marginBottom: 8 }}>
                      Get in <span className="text-blue">touch</span> with us
                    </div>
                    <p style={{ marginBottom: "1rem" }}>
                      Still stuck somewhere? Call our Experts now
                    </p>
                    <div className="lg:flex gap-3 ">
                      <Link
                        href="tel:+91 8484888958"
                        className={`site_btn text-decoration-none d-inline-block bannerbtn`}
                      >
                        Contact Us
                      </Link>

                      <Link
                        className=" "
                        href="https://api.whatsapp.com/send/?phone=8484888968&text&type=phone_number&app_absent=0"
                        style={buttonStyles}
                      >
                        <img
                          loading="lazy"
                          src="/WhatsApp_icon.png"
                          alt="WhatsApp Icon"
                          style={iconStyles}
                        />
                        WhatsApp Us!
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <img
                      loading="lazy"
                      src="/contact.webp"
                      alt=""
                      className={`ctaImg1`}
                    />
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

export default CtaBottom;
