import React from "react";
import "../../app/coursesStyle/courses.css";
import Header from "@/app/components/header";
import Brokerfooter from "@/app/components/brokerFooter";
import Head from "next/head";
import Meta from "../../component/Meta";

function EducationalDisclaimer() {
  return (
    <>
      <Head>
        <Meta />
        <title>Disclaimer | Finnovationz</title>
      </Head>
      <Header />
      <section className="contentPages">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="mt-4 text-[24px] h4 fw-bold" style={{ fontSize: "30px" }}>
                Disclaimer
              </h1>
              <h6 className="text-muted">Last Updated: 04-July-2025</h6>

              <p className="mt-4">
                Welcome to <strong>Finnovationz</strong>. This website (<strong>finnovationz.com</strong>) is owned and operated by <strong>IKASHI FINTECH PRIVATE LIMITED</strong>, a registered educational company in India. By using this website, you acknowledge and agree to the terms outlined in this disclaimer.
              </p>

              <h2 className="mt-4 h4 fw-bold">1. Educational Purpose Only</h2>
              <p>
                All content provided on Finnovationz including but not limited to videos, articles, webinars, downloadable materials, and courses is intended <strong>strictly for educational and informational purposes</strong>.
              </p>
              <p>We do <strong>not</strong> offer:</p>
              <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "1rem" }}>
                <li>Investment advice</li>
                <li>Stock recommendations</li>
                <li>Trading tips or signals</li>
                <li>Financial advisory services</li>
              </ul>
              <p>
                Users must not interpret any content as a suggestion or encouragement to invest or trade in the stock market or any financial instrument.
              </p>

              <h2 className="mt-4 h4 fw-bold">2. No SEBI Registration</h2>
              <p>
                <strong>IKASHI FINTECH PRIVATE LIMITED</strong> and <strong>Finnovationz</strong> are <strong>not SEBI-registered investment advisors</strong>, brokers, or portfolio managers. We are not authorized to manage funds, recommend securities, or offer personalized investment plans.
              </p>

              <h2 className="mt-4 h4 fw-bold">3. No Guarantees or Warranties</h2>
              <p>
                While we strive to provide accurate and up-to-date content, we <strong>do not guarantee</strong>:
              </p>
              <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "1rem" }}>
                <li>The accuracy or completeness of any information</li>
                <li>Any specific learning outcome or trading result</li>
                <li>That the use of our content will result in financial gain</li>
              </ul>
              <p>All financial decisions made by the user are entirely their own responsibility.</p>

              <h2 className="mt-4 h4 fw-bold">4. Financial Risk Warning</h2>
              <p>
                Stock market trading and investing involve risk. Users are advised to conduct their own research or consult certified financial professionals before making any investment decisions. <strong>Finnovationz will not be held liable for any losses incurred.</strong>
              </p>

              <h2 className="mt-4 h4 fw-bold">5. Third-Party Content</h2>
              <p>
                Our website may contain links to third-party platforms or services. We do not control or endorse their content and are not responsible for their accuracy or privacy practices.
              </p>

              <h2 className="mt-4 h4 fw-bold">6. Contact Us</h2>
              <p>If you have any questions about this disclaimer or how we operate, please contact:</p>
              <p>
                <strong>IKASHI FINTECH PRIVATE LIMITED</strong>
                <br />
                Email: <a href="mailto:support@finnovationz.com">support@finnovationz.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Brokerfooter />
    </>
  );
}

export default EducationalDisclaimer;
