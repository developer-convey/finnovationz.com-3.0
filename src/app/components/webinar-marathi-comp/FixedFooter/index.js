import React, { useState, useEffect } from "react";
import Link from "next/link";
import "./FixedFooter.css";

function FixedFooter({ marathidata }) {
  const initialTime = 5400; // 2 hours in seconds
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const storedTime =
      typeof window !== "undefined"
        ? localStorage.getItem("countdownTime")
        : null;
    if (isMounted && storedTime !== null) {
      setTimeLeft(JSON.parse(storedTime));
    }
  }, [isMounted]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft === 0) {
          clearInterval(timer);
          const currentTime = Math.floor(Date.now() / 1000); // Get current time in seconds
          localStorage.setItem("lastResetTime", JSON.stringify(currentTime));
          return initialTime;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [initialTime]);

  useEffect(() => {
    localStorage.setItem("countdownTime", JSON.stringify(timeLeft));
  }, [timeLeft]);

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
                    {" "}
                    <div style={{ position: "relative" }}>
                      <h2 style={{ fontSize: 22, marginBottom: 0 }}>
                        {" "}
                        <div
                          style={{
                            width: "60px",
                            height: 3,
                            backgroundColor: "#0d6efd",
                            position: "absolute",
                            transform: "rotate(15deg)",
                            top: 10,
                            left: 3,
                          }}
                        ></div>{" "}
                        ₹{marathidata?.actual_price}
                      </h2>
                      {typeof window !== "undefined" &&
                      window.innerWidth < 500 ? (
                        <div className="bottomRate"> Free</div>
                      ) : (
                        <h4> Free </h4>
                      )}
                    </div>
                    <div>
                      <span> {formatTime(timeLeft)}</span>
                    </div>
                    {marathidata?.payment_link && (
                      <Link
                        href={marathidata.payment_link}
                        className="site_btn shadow ms-3"
                        style={{ position: "relative", right: 8 }}
                      >
                        जॉइन करा
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
