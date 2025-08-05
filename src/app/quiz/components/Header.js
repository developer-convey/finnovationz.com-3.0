import DefaultImage from "@/app/components/DefaultImage";
import Files from "@/config/file";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
// import { Link,useLocation } from 'react-router-dom';

function Header(quizbool) {
  const [scrollClass, setScrollClass] = useState("");
  // const location = useLocation();
  // const isActive = (path) => {
  //     // Check if the current route matches the given path
  //     return location.pathname === path ? 'active' : '';
  // };
  const btnStyle = {
    borderRadius: "92px",
    background: "linear-gradient(86deg, #31c1b1 5.26%, #377fdb 79.53%)",
    padding: " 9px 18px",
    color: "#fff",
    fontSize: 16,
    fontWeight: 700,
    // lineHeight: ,
    position: "relative",
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
          style={{ maxWidth: 1100, margin: "0px auto" ,  display: 'flex',
            justifyContent: 'space-around', }}
        >
          <Navbar.Brand href="/">
            <DefaultImage
              loading="lazy"
              src={Files?.finnovationzLogo?.logo}
              alt=""
              className="logo"
            />
          </Navbar.Brand>
          {quizbool ? null : (
          <ul className="d-flex  items-center gap-2 my-auto list-unstyled mx-auto">
            {/* <li>
              <a href="/" aria-label="Go to Home page">Home</a>
            </li> */}
           
            <li>
              <a href="/courses" aria-label="Go to Course page" style={{fontWeight:600}}>
                Courses
              </a>
            </li>
            {/* <li>
              <a href="/money-mastery-programme" aria-label="Go to Blogs page" style={{fontWeight:600}}>
                Webinar
              </a>
            </li> */}
          </ul>)}

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
                href="tel:+918484888968 "
                className="text-decoration-none ms-2"
              >
                +91 8484888968
              </Link>
              <br />
              <Link
                href="tel:+919890011432 "
                className="text-decoration-none ms-2"
              >
                +91 9890011432
              </Link>
            </div>
          </div>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar-expand-lg"
            className="ms-2 d-none"
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
                  <DefaultImage
                    loading="lazy"
                    src={Files?.finnovationzLogo?.logo}
                    alt=""
                    className="logo"
                  />
                </Navbar.Brand>
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="mx-auto mb-2 mb-lg-0  d-lg-flex">
                {/* <Link className={`nav-link d-flex align-items-center ${isActive('/')}`} to="/"><img loading="lazy" src="/home.svg" alt="" className='icons d-inline-block d-lg-none me-2' /> Home</Link> */}
                {/* <Link className={`nav-link d-flex align-items-center ${isActive('/about')}`} to="/about"><img loading="lazy" src="/info.svg" alt="" className='icons d-inline-block d-lg-none me-2' /> About us</Link> */}
                {/* <Link className={`nav-link d-flex align-items-center ${isActive('https://finnovationz.com/')}`} to="https://finnovationz.com"><img loading="lazy" src="/course_icon.svg" alt="" className='icons d-inline-block d-lg-none me-2' /> Brokerage Comparision</Link>
                    <Link className={`nav-link d-flex align-items-center ${isActive('/blog')}`} to="/about"><img loading="lazy" src="/blog.svg" alt="" className='icons d-inline-block d-lg-none me-2' /> Blogs</Link> */}
              </Nav>
              <div className="d-none d-lg-flex align-items-center ms-3 ms-lg-0">
                  <img loading="lazy" src="/ph_icon.svg" alt="" />
                  <div className="lh-sm ms-1">
                     <Link
                href="tel:+918484888968 "
                className="text-decoration-none ms-2"
              >
                +91 8484888968
              </Link>
              <br />
              <Link
                href="tel:+919890011432 "
                className="text-decoration-none ms-2"
              >
                +91 9890011432
              </Link>
                  </div>
                </div>
              {/* <Link className="nav-link sitae_btn d-lg-inline-block d-none" href="/"><img loading="lazy" src="/ph_icon.svg" alt="" /></Link> */}
            </Offcanvas.Body>
            <div className="d-block d-lg-none ctabox">
              <div className="h2 text-dark font-weight-800">
                Get in <span className="text-blue">touch</span> with us
              </div>
              <p>
                We got your back with anything and everything in the world of
                investing.{" "}
              </p>
              <Link
                className="nav-link site_btn d-inline-block mx-auto"
                href="/"
              >
                Contact Us
              </Link>
            </div>
          </Navbar.Offcanvas>

          {/* <Link
            style={btnStyle}
            className="nav-link d-lg-flex items-center fw-semibold gap-2 d-none"
            href="/login"
          >
            <img loading="lazy" style={{ height: 30 }} src="/ph_icon.svg" alt="" />
            Login
          </Link> */}
        </Navbar>
      </header>
    </>
  );
}

export default Header;
