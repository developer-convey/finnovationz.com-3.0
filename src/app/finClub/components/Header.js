import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
// import { Link,useLocation } from 'react-router-dom';

import Link from "next/link";
import Files from "@/config/file";
import DefaultImage from "@/app/components/DefaultImage";

function Header() {
  const [scrollClass, setScrollClass] = useState("");
  // const location = useLocation();
  const router = useRouter();
  const pathname = router.pathname;
  const isActive = (path) => {
    // Check if the current route matches the given path
    return pathname === path ? "active" : "";
  };
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
  return (
    <>
      <header>
        <Navbar
          key="lg"
          expand="lg"
          className={`fixed-top ${scrollClass}`}
          style={{ maxWidth: 1100, margin: "0px auto" }}
        >
          <Navbar.Brand href="/">
            <DefaultImage
              src={Files?.finnovationzLogo?.logo}
              loading="eager"
              className="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar-expand-lg"
            className="ms-2"
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                <Navbar.Brand href="/">
                  <img src="/logo.svg" loading="eager" />
                </Navbar.Brand>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="mx-auto mb-2 mb-lg-0  d-lg-flex">
                {/* <Link
                    className={`font-semibold px-2 no-underline text-black d-flex align-items-center ${isActive(
                      "/"
                    )}`}
                    href="/"
                  >
                    <img
                      src="/home.svg"
                      alt=""
                      className="icons d-inline-block d-lg-none me-2"
                    />{" "}
                    Home
                  </Link> */}
                {/* <Link className={`font-semibold px-2 no-underline text-black d-flex align-items-center ${isActive('/about')}`} href="/about"><img src="/info.svg" alt="" className='icons d-inline-block d-lg-none me-2' /> About us</Link> */}
                {/* <Link
                    className={`font-semibold px-2 no-underline text-black d-flex align-items-center ${isActive(
                      "https://finnovationz.com/"
                    )}`}
                    href="https://finnovationz.com"
                  >
                    <img
                      src="/course_icon.svg"
                      alt=""
                      className="icons d-inline-block d-lg-none me-2"
                    />{" "}
                    Broker Comparision
                  </Link> */}
                <Link
                  className={`px-2 no-underline text-black d-flex align-items-center ${isActive(
                    "/Singleblog"
                  )}`}
                  href="/courses"
                  rel="preconnect"
                  style={{ fontWeight: 600 }}
                >
                  <img
                    src="/blog.svg"
                    alt=""
                    className="icons d-inline-block d-lg-none me-2"
                    loading="eager"
                  />{" "}
                  Courses
                </Link>
                <Link
                  className={` px-2 no-underline text-black d-flex align-items-center ${isActive(
                    "money-mastery-programme"
                  )}`}
                  href="/money-mastery-programme"
                  target="_blank"
                  rel="preconnect"
                  style={{ fontWeight: 600 }}
                >
                  <img
                    src="/course_icon.svg"
                    loading="eager"
                    className="icons d-inline-block d-lg-none me-2"
                  />{" "}
                  Webinar
                </Link>
                <Link
                  className={` px-2 no-underline text-black d-flex align-items-center ${isActive(
                    "/blog"
                  )}`}
                  href="/blog"
                  target="_blank"
                  style={{ fontWeight: 600 }}
                >
                  <img
                    src="/blog.svg"
                    loading="eager"
                    className="icons d-inline-block d-lg-none me-2"
                  />{" "}
                  Blog
                </Link>
                <Link
                  className={` px-2 no-underline text-black d-flex align-items-center ${isActive(
                    "/quiz"
                  )}`}
                  href="/quiz"
                  target="_blank"
                  rel="preconnect"
                  style={{ fontWeight: 600 }}
                >
                  <img
                    src="/blog.svg"
                    loading="eager"
                    className="icons d-inline-block d-lg-none me-2"
                  />{" "}
                  Quiz
                </Link>
              </Nav>
              <div className="d-flex align-items-center justify-content-center ms-auto mobile_bar d-lg-none ">
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
                  <Link
                    href="tel:+917892541249 "
                    className="text-decoration-none ms-2"
                  >
                    +91 7892541249
                  </Link>
                  <br />
                  <Link
                    href="tel:++917276376429 "
                    className="text-decoration-none ms-2"
                  >
                    +91 7276376429
                  </Link>
                </div>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
