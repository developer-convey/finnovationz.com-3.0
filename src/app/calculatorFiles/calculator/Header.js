import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "../../blogFolder/style/blog.css";
import Link from "next/link";
import Files from "@/config/file";
import DefaultImage from "@/app/components/DefaultImage";

function Header() {
  const [scrollClass, setScrollClass] = useState("");
  const router = useRouter();
  const pathname = router.pathname;
  const isActive = (path) => {
    // Check if the current route matches the given path
    return pathname === path ? "active" : "";
  };

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

    window.addEventListener("scroll", handleScroll);

    return () => {
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
              alt=""
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
                  <img src="/logo.svg" alt="" />
                </Navbar.Brand>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="mx-auto mb-2 mb-lg-0  d-lg-flex">
                {/* <Link
                    className={`nav-link d-flex align-items-center ${isActive(
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
                {/* <Link className={`nav-link d-flex align-items-center ${isActive('/about')}`} href="/about"><img src="/info.svg" alt="" className='icons d-inline-block d-lg-none me-2' /> About us</Link> */}
                <Link
                  className={`font-semibold px-2 no-underline text-black d-flex align-items-center ${isActive(
                    "/"
                  )}`}
                  href="/"
                >
                  <img
                    src="/course_icon.svg"
                    alt=""
                    className="icons d-inline-block d-lg-none me-2 "
                  />{" "}
                  Brokerage Comparision
                </Link>
                <Link
                  className={`font-semibold px-2 no-underline text-black d-flex align-items-center ${isActive(
                    "/courses"
                  )}`}
                  href="/courses"
                >
                  <img
                    src="/blog.svg"
                    alt=""
                    className="icons d-inline-block d-lg-none me-2"
                  />{" "}
                  Courses
                </Link>
                <Link
                  className={`font-semibold px-2 no-underline text-black d-flex align-items-center ${isActive(
                    "money-mastery-programme"
                  )}`}
                  href="/money-mastery-programme"
                  target="_blank"
                >
                  <img
                    src="/course_icon.svg"
                    alt=""
                    className="icons d-inline-block d-lg-none me-2"
                  />{" "}
                  Webinar
                </Link>
              </Nav>
              {/* <Link
                style={btnStyle}
                className="font-semibold px-2 d-flex items-center no-underline fw-semibold py-2"
                href="/login"
              >
                <img src="/ph_icon.svg" alt="" />
                Login
              </Link> */}

              {/* <a className="nav-link site_btn d-lg-inline-block " href="/"><img src="/ph_icon.svg" alt="" />Login</a> */}
            </Offcanvas.Body>
            <div className="d-block d-lg-none ctabox">
              <div className="h2 text-dark font-weight-800">
                Get in <span className="text-blue">touch</span> with us
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <a className="nav-link site_btn d-inline-block mx-auto" href="/">
                Contact Us
              </a>
            </div>
          </Navbar.Offcanvas>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
