import React, { useState } from "react";
import useScreenSize from "../hooks/useScreenSize";
import ApplyForm from "../components/ApplyForm";
import Logo from "../components/Logo";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const viewport = useScreenSize();
  const pathname = usePathname();

  const [navShow, setNavShow] = useState(false);
  const [isForm, openForm] = useState(false);

  function toggleNav() {
    setNavShow(!navShow);
  }
  return (
    <header>
      <div
        className="container"
        style={{
          background:
            "linear-gradient(270deg, rgba(255, 255, 255, 0) 8.11%, rgba(255, 255, 255, 0.5) 18.36%, rgba(255, 255, 255, 0.5) 79.14%, rgba(255, 255, 255, 0) 91.72%) !important",
        }}
      >
        <Link href="/">
          <Logo />
        </Link>

        <nav className={navShow ? "active" : ""}>
          <ul style={{ zIndex: 1 }}>
            {/* <li>
              <a className="no-underline hover:no-underline" href="/" aria-label="Go to Home page">Home</a>
            </li> */}
            {/* <li>
              <a
                className="no-underline hover:no-underline"
                href="/"
                aria-label="Go to broker page"
              >
                Broker Comparision
              </a>
            </li> */}
            <li>
              <a
                className="no-underline hover:no-underline"
                href="/courses"
                aria-label="Go to Course page"
              >
                Courses
              </a>
            </li>
            {/* <li>
              <a
                className="no-underline hover:no-underline"
                href="/money-mastery-programme"
                aria-label="Go to Blogs page"
              >
                Webinar
              </a>
            </li> */}
            <li>
              {/* eslint-disable-next-line */}
              {viewport == "mobile" && (
                <button
                  className="cta"
                  onClick={openForm}
                  aria-label="Open apply now form"
                >
                  Enrol Now
                </button>
              )}
            </li>
          </ul>
        </nav>
        {/* eslint-disable-next-line */}
        {viewport == "desktop" && pathname != "/calculator" && (
          <button
            className="cta"
            onClick={openForm}
            aria-label="Open apply now form"
          >
            Apply Now
          </button>
        )}

        <div className="hamburger-menu" onClick={toggleNav}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      {isForm && <ApplyForm position={""} closeSelf={() => openForm(false)} />}
    </header>
  );
};

export default Header;
