import React, { useEffect, useState, useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";

import Link from "next/link";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./Header.css";
import Files from "@/config/file";
import DefaultImage from "../DefaultImage";

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
            <Navbar.Brand href="/">
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
                      className="logo "
                    />
                  </Navbar.Brand>
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="mx-auto mb-2 mb-lg-0  d-lg-flex">
                  {homeBool ? null : (
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
                        loading="lazy"
                      />{" "}
                      Home
                    </Link>
                  )}
                  {allbool ? null : (
                    <Link
                      className={`font-semibold no-underline text-[#000] px-2 d-flex align-items-center ${isActive(
                        "/top-stock-brokers-in-india"
                      )}`}
                      href="/top-stock-brokers-in-india"
                      target="_blank"
                    >
                      <img
                        src="/blog.svg"
                        alt=""
                        className="icons d-inline-block d-lg-none me-2"
                        loading="lazy"
                      />{" "}
                      All Brokers
                    </Link>
                  )}

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

                  <div className="relative group">
                    
                    <div
                      className="absolute left-0 mt-0 hidden bg-white shadow-lg group-hover:block"
                      style={{ width: 290 }}
                    >
                      <Link
                        href="/money-mastery-programme"
                        target="_blank"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 no-underline"
                      >
                        Money Mastery Programme
                      </Link>
                      <Link
                        href="/money-mastery-hindi"
                        target="_blank"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 no-underline"
                      >
                        Stock Market Mastery- Hindi
                      </Link>
                      <Link
                        href="/money-mastery-marathi"
                        target="_blank"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 no-underline"
                      >
                        Stock Market Mastery- Marathi
                      </Link>
                    </div>
                  </div>

                  {blogbool ? null : (
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
                      />{" "}
                      Blog
                    </Link>
                  )}

                  {quizbool ? null : (
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
                      />{" "}
                      Quiz
                    </Link>
                  )}
                  <Link
                      className={`font-semibold no-underline text-[#000] px-2 d-flex align-items-center`}
                      href="/careers"
                      target="_blank"
                    >
                      <img
                        loading="lazy"
                        src="/course_icon.svg"
                        alt=""
                        className="icons d-inline-block d-lg-none me-2"
                      />
                      Career
                    </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            {bool ? (
              <Link
                className=" px-2 no-underline text-white site_btn d-lg-inline-block fw-semibold"
                href="/login"
                style={{ width: "15%", textAlign: "center" }}
              >
                {/* <img src="/ph_icon.svg" alt="" /> */}
                Apply Now
              </Link>
            ) : (
              <Form
                className={`d-flex position-relative ${
                  showinput && windowWidth < 500
                    ? "search-form-mob"
                    : "search-form"
                } ms-auto`}
                ref={searchRef}
              >
                <Form.Control
                  type="search"
                  placeholder="Search for broker.."
                  className=""
                  aria-label="Search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onClick={() => setSerchbtn(false)}
                  onFocus={handleSearchFocus}
                />
                {serchbtn && (
                  <Button className="bg-transparent border-0 search-btn">
                    <img loading="lazy" src="/search.png" alt="search" />
                  </Button>
                )}

                {/* <Button className='bg-transparent border-0 search-btn'><img src='/brokerage-images/search.png' /></Button> */}
                {searchQuery && (
                  <div style={{ zIndex: 1000000000 }}>
                    <div className="search-list-item">
                      <ul className="list-unstyled mb-0">
                        {filteredBrokers.map((item, index) => {
                          return (
                            <React.Fragment key={index}>
                              <li
                                key={index}
                                ref={liRef}
                                onClick={() => handleClick(item.name)}
                                className="list-flex"
                              >
                                <img
                                  loading="lazy"
                                  src={item.logo}
                                  alt=""
                                  className="brnad-logo"
                                />{" "}
                                {item.name}
                              </li>{" "}
                            </React.Fragment>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                )}
              </Form>
            )}
            {windowWidth < 500 ? (
              <Button
                onClick={() => setshowinput(!showinput)}
                className="bg-transparent border-0 search-btn-mob"
              >
                <img loading="lazy" src="/search.png" />
              </Button>
            ) : null}
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
