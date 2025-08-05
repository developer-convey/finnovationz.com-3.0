import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import faq from "../../commen/smmfaq.json";
import "./Faq.css";

function Faq() {
  return (
    <>
      <section className="faqsec" id="faq">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-md-4">Frequently Asked Questions</h2>

              <Accordion className="faqaccordion">
                {faq.faq.map((item, index) => {
                  return (
                    <Accordion.Item
                      eventKey={`${index}`}
                      key={index}
                      style={{
                        borderBottom: "1px solid #D9D9D9",
                        borderRadius: 0,
                      }}
                    >
                      <Accordion.Header>{item.question}</Accordion.Header>
                      <Accordion.Body>
                        <p>{item.answer}</p>
                      </Accordion.Body>
                    </Accordion.Item>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
