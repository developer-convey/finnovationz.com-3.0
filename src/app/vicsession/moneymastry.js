import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import faq from "@/app/commen/faq1.json";
import "./moneymastry.css";
import Files from "@/config/file";
import DefaultImage from "@/app/components/DefaultImage";
import Image from "next/image";
const MoneyMystryProgramme = () => {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const width = typeof window !== "undefined" && window.innerWidth;
      setWindowWidth(width);
    };

    updateWindowDimensions();

    typeof window !== "undefined" &&
      window.addEventListener("resize", updateWindowDimensions);

    return () => {
      typeof window !== "undefined" &&
        window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  useEffect(() => {
    const addGoogleTagManagerScript = () => {
      if (typeof window !== "undefined") {
        const script1 = document.createElement("script");
        script1.src =
          "https://www.googletagmanager.com/gtag/js?id=AW-10807341659";
        script1.async = true;
        document.head.appendChild(script1);

        const script2 = document.createElement("script");
        script2.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-10807341659');
        `;
        document.head.appendChild(script2);
      }
    };

    addGoogleTagManagerScript();
  }, []);

  return (
    <div>
      <div className="overflow-hidden">
        <div className="row">
          <div
            className="col-md-4"
            style={{
              position: "relative",
              top: windowWidth < 450 ? 32 : 8,
              overflow: "hidden",
            }}
          >
            <div
                 style={{
                  position: "relative",
                  fontSize: 32,
                  fontWeight: 800,
                  top: windowWidth <= 450 ? 1 : -12,
                  left: windowWidth <= 450 ? "30px" : 140,
                }}
            >
             Who should join this <br />{" "}
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(83.86deg, #30C9AB 2.33%, #377BDC 92.3%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                session?{" "}
              </span>
            </div>
            <div className="w-full">
  <img
    loading="lazy"
    style={{
      display: windowWidth <= 450 ? "inline" : "",
      overflow: windowWidth <= 450 ? "hidden" : "",
      width:'450px',
      height: windowWidth <= 450 ? "auto" : "320px", // reduced height
      objectFit: "objectfit", // prevent distortion
    }}
    src="/mon.png"
    alt=""
  />
</div>

          </div>
          <style>{`
        .faqaccordion .accordion-button::after {
          display: none !important;
        }
      `}</style>

      <div className="col-md-6" style={{ margin: "auto 0px", border: "none" }}>
        <Accordion className="faqaccordion faqbutton" style={{ border: "none" }}>
          {faq.Whydoneedthisproject.map((item, index) => {
            return (
              <Accordion.Item eventKey={`${index}`} key={index} style={{ border: "none" }}>
                <Accordion.Header
                  style={{
                    backgroundImage: "linear-gradient(#F4FEFE, #FFFFFF)",
                    border: "1px solid #d9d9d9",
                    padding: 20,
                    borderRadius: 20,
                    marginBottom: 10,
                  }}
                >
                  {item.question}
                </Accordion.Header>
                <Accordion.Body>{/* <p>{item.answer}</p> */}</Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </div>
        </div>
      </div>
      <a href="/vicsession/#pricing"style={{textDecoration:"none",marginTop:"50px"}}>
              <button className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity flex items-start gap-2 mx-auto lg:mx-0" style={{textDecoration:"none"}}>
                Reserve My Spot Now
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </a>
    </div>
  );
};

export default MoneyMystryProgramme;
