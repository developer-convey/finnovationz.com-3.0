import Link from "next/link";
import React, { useState, useEffect } from "react";

function ScrollableMenu() {
  const [activeSection, setActiveSection] = useState(null);

  const handleScroll = () => {
    const scrollPosition = typeof window !== "undefined" && window.scrollY;
    // Offset value to adjust when the active section changes
    const offset = 100;

    // Check each menu item's position and update the active section
    const menuItems = document.querySelectorAll(".scrollable_menu a");
    menuItems.forEach((menuItem) => {
      const targetId = menuItem.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const sectionTop = targetSection.offsetTop - offset;
        const sectionBottom = sectionTop + targetSection.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(targetId);
        }
      }
    });
  };

  // Attach and detach scroll event listener
  useEffect(() => {
    typeof window !== "undefined" &&
      window.addEventListener("scroll", handleScroll);
    return () => {
      typeof window !== "undefined" &&
        window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="scrollable_menu">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="list-unstyled mb-0 d-flex align-items-center">
                <li className={activeSection === "description" ? "active" : ""}>
                  <Link href="#description">Description</Link>
                </li>
                <li className={activeSection === "syllabus" ? "active" : ""}>
                  <Link href="#syllabus">Syllabus</Link>
                </li>
                <li
                  className={activeSection === "testimonials" ? "active" : ""}
                >
                  <Link href="#testimonials">Testimonials</Link>
                </li>
                <li className={activeSection === "trainer" ? "active" : ""}>
                  <Link href="#trainer">Trainer</Link>
                </li>
                <li className={activeSection === "pricing" ? "active" : ""}>
                  <Link href="#pricing">Our Pricing</Link>
                </li>
                <li className={activeSection === "faq" ? "active" : ""}>
                  <Link href="#faq">FAQ</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ScrollableMenu;
