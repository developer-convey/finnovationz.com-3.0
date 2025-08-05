import React, { useState, useEffect } from "react";
import Link from "next/link";
import "./FixedFooter.css";

function FixedFooter({ programmeData }) {
  const initialTime = 5400; // 2 hours in seconds
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Function to format time
    const formatTime = (time) => {
      const hours = Math.floor(time / 3600);
      const minutes = Math.floor((time % 3600) / 60);
      const seconds = time % 60;
      return `${hours.toString().padStart(2, "0")} hrs:${minutes
        .toString()
        .padStart(2, "0")} mins:${seconds.toString().padStart(2, "0")} sec`;
    };

    // Function to handle timer logic
    const handleTimer = () => {
      // Get stored time if available
      const storedTime =
        typeof window !== "undefined"
          ? localStorage.getItem("countdownTime")
          : null;
      let time = storedTime !== null ? JSON.parse(storedTime) : initialTime;

      // Start timer
      const timer = setInterval(() => {
        time = time - 1;
        setTimeLeft(time);

        if (time === 0) {
          clearInterval(timer);
          const currentTime = Math.floor(Date.now() / 1000);
          localStorage.setItem("lastResetTime", JSON.stringify(currentTime));
          time = initialTime;
        }
      }, 1000);

      // Save time to localStorage
      localStorage.setItem("countdownTime", JSON.stringify(time));

      // Return cleanup function to clear interval
      return () => clearInterval(timer);
    };

    // Set isMounted to true
    setIsMounted(true);

    // Run timer logic if isMounted and initialTime changed
    if (isMounted) {
      handleTimer();
    }
  }, [isMounted, initialTime]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, "0")} hrs:${minutes
      .toString()
      .padStart(2, "0")} mins:${seconds.toString().padStart(2, "0")} sec`;
  };

  return (
    <>
      <div className="bottom-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="d-flex align-items-center h-100">
                <img
                  loading="lazy"
                  className="footer-image-prasad"
                  style={{ width: 124, height: 139 }}
                  src="/prasadS.webp"
                  alt=""
                />
                <div className="inner-content" style={{ width: 300 }}>
                  <h4 style={{ width: "100%", fontSize: "15px" }}>
                    <span>Share Market Mastery </span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <ul className="list-unstyled mb-0 d-flex align-items-center">
                <li>
                  <button
                    style={{
                      width: 200,
                      position: "relative",
                      right: -49,
                      padding: 10,
                    }}
                    className="d-flex align-items-center flex-wrap justify-content-center"
                  >
                    <div>
                      <span> {formatTime(timeLeft)}</span>
                    </div>
                    {programmeData?.payment_link && (
                      <Link
                        href={programmeData?.payment_link}
                        className="site_btn shadow ms-3"
                        style={{ position: "relative", right: 8 }}
                      >
                        Book Now @{programmeData?.offer_price}
                      </Link>
                    )}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FixedFooter;
