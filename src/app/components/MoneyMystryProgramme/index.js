import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import faq from "../../../app/commen/faq.json";
import "./MoneyMystryProgramme.css";
import Files from "@/config/file";
import DefaultImage from "../../../app/components/DefaultImage";

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
              top: windowWidth < 450 ? 32 : 100,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                fontSize: 32,
                fontWeight: 800,
                top: windowWidth <= 450 ? -15 : 15,
                left: windowWidth <= 450 ? "30px" : 140,
              }}
            >
              Why do you need this <br />{" "}
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(83.86deg, #30C9AB 2.33%, #377BDC 92.3%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Programme?{" "}
              </span>
            </div>
            <div className="w-full">
              <DefaultImage
                loading="lazy"
                style={{
                  display: windowWidth <= 450 ? "inline" : "",
                  overflow: windowWidth <= 450 ? "hidden" : "",
                  width: "100%",
                }}
                src={Files?.webinar?.girl}
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6" style={{ margin: "auto 0px" }}>
            <Accordion className="faqaccordion faqbutton">
              {faq.Whydoneedthisproject.map((item, index) => {
                return (
                  <Accordion.Item eventKey={`${index}`} key={index}>
                    <Accordion.Header
                      style={{
                        backgroundImage: "linear-gradient(#F4FEFE, #FFFFFF)",
                        border: "1px solid #d9d9d9",
                        padding: 20,
                        borderRadius: 20,
                      }}
                    >
                      {item.question}
                    </Accordion.Header>
                    <Accordion.Body>
                      {/* <p>{item.answer}</p> */}
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneyMystryProgramme;
