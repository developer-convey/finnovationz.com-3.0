import React, { useEffect, useState, useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";

import Link from "next/link";
import Button from "react-bootstrap/Button";
import DefaultImage from "../DefaultImage";
import Files from "@/config/file";
import { usePathname } from "next/navigation";

function CourseHeader({ bool, coursebool }) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const pageName = segments.join("/");
  const [windowWidth, setWindowWidth] = useState(0);
  const btnStyle = {
    borderRadius: "92px",
    background: "linear-gradient(86deg, #31c1b1 5.26%, #377fdb 79.53%)",
    color: "#fff",
    fontSize: 16,
    fontWeight: 700,
    position: "relative",
    width: "15%",
    textAlign: "center",
    alignItem: "center",
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }

    const handleResize = () =>
      setWindowWidth(typeof window !== "undefined" && window.innerWidth);
    typeof window !== "undefined" &&
      window.addEventListener("resize", handleResize);

    return () =>
      typeof window !== "undefined" &&
      window.removeEventListener("resize", handleResize);
  }, []);

  const [scrollClass, setScrollClass] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined" && window.scrollY >= 10) {
        setScrollClass("scrolled");
      } else {
        setScrollClass("");
      }
    };

    typeof window !== "undefined" &&
      window.addEventListener("scroll", handleScroll);

    return () => {
      typeof window !== "undefined" &&
        window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openOffcanvas = () => {
    setIsOpen(true);
  };

  const closeOffcanvas = () => {
    setIsOpen(false);
    document.body.classList.remove("modal-open");
    document.body.style.overflow = "auto";
  };

  const isActive = (path) => {
    return false;
  };

  return (
    <>
      <header style={{ backgroundColor: "#E7F1FA" }}>
        <Navbar
          key="lg"
          expand="lg"
          className={`${scrollClass} `}
          style={{ zIndex: 100 }}
        >
          <Container>
            <Navbar.Brand href="/">
              <DefaultImage
                loading="lazy"
                src={Files?.finnovationzLogo?.logo}
                alt=""
                className="logo"
              />
            </Navbar.Brand>

            <Navbar.Toggle
              aria-controls="offcanvasNavbar-expand-lg"
              className="ms-2 toglemenu-mob"
              onClick={openOffcanvas}
            >
              <span></span>
              <span></span>
              <span></span>
            </Navbar.Toggle>

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="start"
              show={isOpen}
              onHide={closeOffcanvas}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  <Navbar.Brand href="/">
                    <img loading="lazy" src="/logo.svg" alt="" />
                  </Navbar.Brand>
                  <Navbar.Brand href="/">
                    <DefaultImage
                      loading="lazy"
                      src={Files?.finnovationzLogo?.logo}
                      alt=""
                      className="logo "
                    />
                  </Navbar.Brand>
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="mx-auto mb-2 mb-lg-0 d-lg-flex">
                  <Link
                    className={`font-semibold no-underline text-[#000] px-2 d-flex align-items-center ${isActive(
                      "/"
                    )}`}
                    href="/"
                  >
                    <img
                      src="/blog.svg"
                      alt=""
                      className="icons d-inline-block d-lg-none me-2"
                    />{" "}
                    Home
                  </Link>
                  <Link
                    className={`font-semibold no-underline text-[#000] px-2 d-flex align-items-center ${isActive(
                      "/top-stock-brokers-in-india"
                    )}`}
                    href="/top-stock-brokers-in-india"
                  >
                    <img
                      src="/blog.svg"
                      alt=""
                      className="icons d-inline-block d-lg-none me-2"
                    />
                    All Brokers
                  </Link>
                  {coursebool ? null : (
                    <Link
                      className={`font-semibold no-underline text-[#000] px-2 d-flex align-items-center ${isActive(
                        "/courses"
                      )}`}
                      href="/courses"
                      target="_blank"
                    >
                      <img
                        loading="lazy"
                        src="/home.svg"
                        alt=""
                        className="icons d-inline-block d-lg-none me-2"
                      />{" "}
                      Courses
                    </Link>
                  )}
                  <Link
                    className={`font-semibold no-underline text-[#000] px-2 d-flex align-items-center ${isActive(
                      "/blog"
                    )}`}
                    href="/blog"
                    target="_blank"
                  >
                    <img
                      loading="lazy"
                      src="/blog.svg"
                      alt=""
                      className="icons d-inline-block d-lg-none me-2"
                    />
                    Blog
                  </Link>
                  <Link
                    className={`font-semibold no-underline text-[#000] px-2 d-flex align-items-center ${isActive(
                      "/quiz"
                    )}`}
                    href="/quiz"
                    target="_blank"
                  >
                    <img
                      loading="lazy"
                      src="/blog.svg"
                      alt=""
                      className="icons d-inline-block d-lg-none me-2"
                    />
                    Quiz
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            {bool ? (
              <div className="d-flex align-items-center justify-content-center ms-auto mobile_bar ">
                <img
                  loading="lazy"
                  src="/ph_icon.svg"
                  alt=""
                  className="d-none d-sm-block"
                />
                <img
                  loading="lazy"
                  src="/white-phone.png"
                  alt=""
                  className="d-block d-sm-none"
                />
                <div className="lh-sm ms-1 d-flex d-sm-block">
                  {
                    !['courses/financial-modelling-course'].includes(pageName) ? (
                      <Link
                        href="tel:+918484888968"
                        className="text-decoration-none ms-2"
                      >
                        +91 8484888968
                      </Link>
                    ) :
                      <Link
                        href="tel:+919890115928"
                        className="text-decoration-none ms-2"
                      >
                        +91 9890115928
                      </Link>
                  }

                  <br />
                  <Link
                    href="tel:+918484888958"
                    className="text-decoration-none ms-2"
                  >
                    +91 8484888958
                  </Link>
                </div>
              </div>
            ) : (
              <Link
                className="px-2 no-underline text-white site_btn d-lg-inline-block fw-semibold"
                href="/login"
                style={{ width: "15%", textAlign: "center" }}
              >
                Apply Now
              </Link>
            )}
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default CourseHeader;
