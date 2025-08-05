import React from "react";
// import "../../app/coursesStyle/courses.css";
import Header from "@/app/components/header";
import Brokerfooter from "@/app/components/brokerFooter";
import ContactUsHomeBanner from "@/app/components/contactusHomeBanner";
import ContactUsForm from "@/app/components/contactusForm";
import ContactUsFloowUs from "@/app/components/contactusfollowus";
import "./../contact-us/contactus.css";

import DiwaliOffSlider from "@/app/components/coursetopofferslider";
function ContactUs() {
  return (
    <>
            {/* <DiwaliOffSlider redirectUrl="/courses/combo" targetId="pricing" /> */}

      {/* <Header />
      <section className="contact-section"> 
        <div className="contact-container">
          <div className="row">
            <div className="col-md-12">
              <h1>Contact Us</h1>
              <p>
                We’d love to hear from you! Whether you have questions, need
                support, or want to explore partnership opportunities, our team
                at Ikashi Fintech Pvt Ltd is here to help.
              </p>

              <h2>Get in Touch</h2>

              <h5>Customer Support</h5>
              <p>
                Our support team is available to assist with any inquiries about
                our services, billing, or account management.
              </p>
              <p>
                Email: <a href="mailto:support@finnovationz.com">support@finnovationz.com</a>
              </p>
              <p>
                Phone: <a href="tel:+917480080027">+91 7480080027</a>
              </p>

              <h5>Sales Inquiries</h5>
              <p>
                Interested in learning more about our products and solutions?
                Reach out to our sales team to discuss how we can support your
                business needs.
              </p>
              <p>
                Email: <a href="mailto:support@finnovationz.com">support@finnovationz.com</a>
              </p>
              <p>
                Phone: <a href="tel:+917480080027">+91 7480080027</a>
              </p>

              <h5>Office Locations</h5>
              <p>
                <strong>Head Office</strong>
                <br />
                Ikashi Fintech Private Limited
                <br />
                3rd Floor, Lumbini Society, Survey No 55, Plot No. 108, NYN
                Arcade Lumbini Enclave
                <br />
                500032 Hyderabad, India
              </p>

              <h5>Connect with Us</h5>
              <p>
                Stay updated on the latest news, events, and industry insights
                by following us on social media:
              </p>
              <ul className="socialLinks">
                <li>
                  <a
                    href="https://twitter.com/conveyofficial?t=riXE4lD9f8bLbjOmhAIf8Q&s=09"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100091287158268&mibextid=nW3QTL"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
              </ul>

              <h5>Operating Hours</h5>
              <p>
                Monday - Friday: 9:00 AM - 6:00 PM (IST)
                <br />
                Saturday - Sunday: Closed
              </p>
              <p>
                We aim to respond to all inquiries within 1-2 business days.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Brokerfooter /> */}

      <div className="App">
        <div className="h-[20px] w-[100%] absolute top-0 bg-[#E6F0FA]"> </div>
        <div className="h-[100px] bg-[#E6F0FA]">
          <Header />
        </div>
        <ContactUsHomeBanner />
        <ContactUsFloowUs />
        <ContactUsForm />
        {/* <Maincalculator /> */}
        <Brokerfooter />
      </div>
    </>
  );
}

export default ContactUs;
