import React, { useEffect, useState, useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import Style from "@/app/blogFolder/style/home.module.css";

import Link from "next/link";

// import "./Header.css";
import Files from "@/config/file";
import DefaultImage from "@/app/components/DefaultImage";
// import DefaultImage from "../DefaultImage";
// import BaseURL from '../../BaseUrl';

function Header({
  allbool,
  blogbool,
  coursebool,
  webinarbool,
  quizbool,
  homeBool,
  bool,
}) {
  const [windowWidth, setWindowWidth] = useState(0);
  const btnStyle = {
    borderRadius: "92px",
    background: "linear-gradient(86deg, #31c1b1 5.26%, #377fdb 79.53%)",
    // padding: " 9px 23px",
    color: "#fff",
    fontSize: 16,
    fontWeight: 700,
    // lineHeight: ,
    position: "relative",
    width: "15%",
    textAlign: "center",
    alignItem: "center",
  };
  useEffect(() => {
    // Set window width on initial load
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }

    // Listen for window resize events
    const handleResize = () =>
      setWindowWidth(typeof window !== "undefined" && window.innerWidth);
    typeof window !== "undefined" &&
      window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () =>
      typeof window !== "undefined" &&
      window.removeEventListener("resize", handleResize);
  }, []);
  const [scrollClass, setScrollClass] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [brokers, setBrokers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [serchbtn, setSerchbtn] = useState(true);
  const [showinput, setshowinput] = useState(true);
  // const location = useLocation();
  const liRef = useRef();
  const searchRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const closeOffcanvas = () => {
    setIsOpen(false);
    document.body.classList.remove("modal-open");
    document.body.style.overflow = "auto";
  };

  const handleClick = (name) => {
    typeof window !== "undefined" &&
      window.open(
        `/top-stock-brokers-in-india/${name
          .toLowerCase()
          .replace(/\s+/g, "-")}`,
        "_blank"
      );
  };
  const isActive = (path) => {
    return false;
  };

  const handleSearchFocus = () => {
    if (!isSearchActive) {
      fetchBrokers(); // Fetch brokers data when the search input is focused for the first time
      setIsSearchActive(true);
    }
  };

  const fetchBrokers = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BROKER_API_URL}/api/broker`
      );
      const data = await response.json();
      setBrokers(data.data);
    } catch (error) {
      console.error("Error fetching brokers data:", error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredBrokers = brokers.filter((broker) =>
    broker.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            <div className="d-flex align-items-center w-100">
              <Navbar.Brand href="/" className="me-auto">
                <DefaultImage
                  loading="lazy"
                  src={Files?.finnovationzLogo?.logo}
                  alt=""
                  className="logo"
                />
              </Navbar.Brand>

              <Navbar.Toggle
                aria-controls="offcanvasNavbar-expand-lg "
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
                  <Nav className={`mb-2 mb-lg-0 d-lg-flex ${Style['blog-menu-container']}`}>
                    <div className={`d-lg-flex justify-content-center ${Style['blog-menu']}`}>
                      <div className="d-lg-flex">
                        <div className="relative group">
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
                            />{" "}
                            Brokerage Comparison
                          </Link>
                        </div>

                        <div className="relative group">
                          <Link
                            className={`font-semibold no-underline text-[#000] px-2 d-flex align-items-center ${isActive(
                              "/courses"
                            )}`}
                            href="/courses"
                            target="_blank"
                          >
                            <img
                              src="/blog.svg"
                              alt=""
                              className="icons d-inline-block d-lg-none me-2"
                            />{" "}
                            Courses
                          </Link>
                        </div>

                        <div className="relative group">
                          <Link
                            className={`font-semibold no-underline text-[#000] px-2 d-flex align-items-center ${isActive(
                              "money-mastery-programme"
                            )}`}
                            href="/money-mastery-programme"
                            target="_blank"
                          >
                            <img
                              loading="lazy"
                              src="/course_icon.svg"
                              alt=""
                              className="icons d-inline-block d-lg-none me-2"
                            />
                            Webinar
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>

              <div className="ms-auto d-none d-lg-block" style={{ width: "15%" }}>
                <Link
                  className="px-2 no-underline text-white site_btn d-block d-lg-inline-block fw-semibold"
                  href="/login"
                  style={{ width: "100%", textAlign: "center" }}
                >
                  Login
                </Link>
              </div>
            </div>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
