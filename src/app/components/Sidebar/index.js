import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import Link from "next/link";
function Sidebar({ broker1, broker2 }) {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = [
        "basic-charges",
        "charges",
        "Complaints",
        "share-holding",
        "pro-cons",
        "rating",
        "financial",
      ];

      for (const id of sectionIds) {
        const element = document.getElementById(id);

        if (element && isElementInViewport(element)) {
          setActiveSection(id);
          break;
        }
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        ((typeof window !== "undefined" && window.innerHeight) ||
          document.documentElement.clientHeight) &&
      rect.right <=
        ((typeof window !== "undefined" && window.innerWidth) ||
          document.documentElement.clientWidth)
    );
  };

  return (
    <>
      {broker1 && broker2 ? (
        <div className="sidebar">
          <ul className="list-unstyled my-2">
            {broker1.accountOpenCharges && broker2.accountOpenCharges && (
              <li className={activeSection === "basic-charges" ? "active" : ""}>
                <Link href="#basic-charges" className="flex">
                  <img src="/analytics.svg" alt="" /> Active Clients
                </Link>
              </li>
            )}
            {broker1.brokerCharges.intraday &&
              broker2.brokerCharges.intraday && (
                <li className={activeSection === "charges" ? "active" : ""}>
                  <Link href="#charges" className="flex">
                    <img src="/money-bag.svg" alt="" /> Charges
                  </Link>
                </li>
              )}
            {broker1.complaints && broker2.complaints.length > 0 && (
              <li className={activeSection === "Complaints" ? "active" : ""}>
                <Link href="#Complaints" className="flex">
                  <img src="/error.svg" alt="" /> Complaints
                </Link>
              </li>
            )}
            {broker1.shareholders.length > 0 &&
              broker2.shareholders.length > 0 && (
                <li
                  className={activeSection === "share-holding" ? "active" : ""}
                >
                  <Link href="#share-holding" className="flex">
                    <img src="/share-holding.svg" alt="" />
                    Share Holding
                  </Link>
                </li>
              )}
            {broker1.pros &&
              broker1.pros.length > 0 &&
              broker1.cons &&
              broker1.cons.length > 0 &&
              broker2.pros &&
              broker2.pros.length > 0 &&
              broker2.cons &&
              broker2.cons.length > 0 && (
                <li className={activeSection === "pro-cons" ? "active" : ""}>
                  <Link href="#pro-cons" className="flex">
                    <img src="/pro.svg" alt="" /> Pros & Cons
                  </Link>
                </li>
              )}
            {broker1.financialStatus.expense.length > 0 &&
              broker1.financialStatus.profitLoss.length > 0 &&
              broker1.financialStatus.revenue.length > 0 &&
              broker2.financialStatus.expense.length > 0 &&
              broker2.financialStatus.profitLoss.length > 0 &&
              broker2.financialStatus.revenue.length > 0 && (
                <li className={activeSection === "financial" ? "active" : ""}>
                  <Link href="#financial" className="flex">
                    <img src="/financial.svg" alt="" /> Financials
                  </Link>
                </li>
              )}
            {broker1.ratings.platformRating &&
              broker2.ratings.platformRating && (
                <li className={activeSection === "rating" ? "active" : ""}>
                  <Link href="#rating" className="flex">
                    <img src="/star-icon.png" alt="" /> Ratings
                  </Link>
                </li>
              )}
          </ul>
        </div>
      ) : (
        <div className="sidebar">
          <ul className="list-unstyled my-2">
            {broker1.accountOpenCharges && (
              <li className={activeSection === "basic-charges" ? "active" : ""}>
                <Link href="#basic-charges" style={{ display: "flex" }}>
                  <img src="/analytics.svg" alt="" /> Active Clients
                </Link>
              </li>
            )}
            {broker1.brokerCharges.intraday && (
              <li className={activeSection === "charges" ? "active" : ""}>
                <Link href="#charges" style={{ display: "flex" }}>
                  <img src="/money-bag.svg" alt="" /> Charges
                </Link>
              </li>
            )}
            {broker1.complaints.length > 0 && (
              <li className={activeSection === "Complaints" ? "active" : ""}>
                <Link href="#Complaints" style={{ display: "flex" }}>
                  <img src="/error.svg" alt="" /> Complaints
                </Link>
              </li>
            )}
            {broker1.shareholders.length > 0 && (
              <li className={activeSection === "share-holding" ? "active" : ""}>
                <Link href="#share-holding" style={{ display: "flex" }}>
                  <img src="/share-holding.svg" alt="" />
                  Share Holding
                </Link>
              </li>
            )}
            {broker1.pros &&
              broker1.pros.length > 0 &&
              broker1.cons &&
              broker1.cons.length > 0 && (
                <li className={activeSection === "pro-cons" ? "active" : ""}>
                  <Link href="#pro-cons" style={{ display: "flex" }}>
                    <img src="/pro.svg" alt="" /> Pros & Cons
                  </Link>
                </li>
              )}
            {broker1.financialStatus.expense.length > 0 &&
              broker1.financialStatus.profitLoss.length > 0 &&
              broker1.financialStatus.revenue.length > 0 && (
                <li className={activeSection === "financial" ? "active" : ""}>
                  <Link href="#financial" style={{ display: "flex" }}>
                    <img src="/financial.svg" alt="" /> Financials
                  </Link>
                </li>
              )}
            {broker1.ratings.platformRating && (
              <li className={activeSection === "rating" ? "active" : ""}>
                <Link href="#rating" style={{ display: "flex" }}>
                  <img src="/star-icon.png" alt="" /> Ratings
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </>
  );
}

export default Sidebar;
