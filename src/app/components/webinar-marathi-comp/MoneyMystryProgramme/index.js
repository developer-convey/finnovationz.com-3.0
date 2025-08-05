import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import faq from "../../../commen/faq.json";
import "./MoneyMystryProgramme.css";
import Files from "@/config/file";
import DefaultImage from "@/app/components/DefaultImage";

const MoneyMystryProgramme = () => {
  const [windowWidth, setWindowWidth] = useState(null);
  const textStyle = {
    fontFamily: '"Open Sans", sans-serif',
  };

  useEffect(() => {
    const updateWindowDimensions = () => {
      const width = typeof window !== "undefined" && window.innerWidth;
      setWindowWidth(width);
    };

    // Update window width on initial component mount
    updateWindowDimensions();

    // Update window width on window resize
    typeof window !== "undefined" &&
      window.addEventListener("resize", updateWindowDimensions);

    // Cleanup function to remove event listener
    return () => {
      typeof window !== "undefined" &&
        window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  return (
    <div>
      <div className="overflow-hidden" style={textStyle}>
        <div className="row">
          {/* <h2 className='mb-md-4'>Frequently Asked Questions</h2> */}
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
              का तुम्ही आजच <br />{" "}
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(83.86deg, #30C9AB 2.33%, #377BDC 92.3%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Programme{" "}
              </span>
              जॉइन केला पाहिजे ?
            </div>
            <div className="w-full">
              <DefaultImage
                style={{
                  display: windowWidth <= 450 ? "inline" : "",
                  overflow: windowWidth <= 450 ? "hidden" : "",
                  width: "100%",
                  position: "relative",
                  top: 20,
                }}
                src={Files?.webinar?.girl}
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6" style={{ margin: "auto 0px" }}>
            <Accordion className="faqaccordion faqbutton">
              {faq?.Whydoneedthisprojectmarathi?.map((item, index) => {
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

      {/* <div style={{position:'relative'}}>
<div className='relative-backimge' >
    <img className='rectangle-img' src='/images/Rectangle 1.png' alt=''/>
  
</div>


<div class="container" style={{position:'absolute',top:'100px',margin:'0px auto'}}>
  <div class="row">
    <div class="col-sm-3">
     
    </div>
    <div class="col-sm-8" style={{margin:'auto'}}>
  <p className='hdr-contant'>  Get more information from this video</p>
  <p className='para-containt' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <img className='' src='/images/image 155.png' style={{width:'100%',objectFit:'contain',borderRadius:30,marginTop:20}} alt=''/>
    </div>

    <div class="col-sm">
   
    </div>
  </div>
</div>

</div> */}
    </div>
  );
};

export default MoneyMystryProgramme;
