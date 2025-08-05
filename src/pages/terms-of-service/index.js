import React from "react";
import "../../app/coursesStyle/courses.css";
import Header from "@/app/components/header";
import Brokerfooter from "@/app/components/brokerFooter";
import Head from "next/head";
import Meta from "../../component/Meta";

function Terms() {
  return (
    <>
      <Head>
        <Meta />
        <title>Terms & Conditions | Finnovationz</title>
      </Head>
      <Header />
      <section className="contentPages">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="mt-4 h4 fw-bold">Terms and Conditions</h1>
              <h6 className="text-muted">Last Updated: 04-July-2025</h6>

              <p className="mt-4">
                Welcome to <strong>Finnovationz</strong>. By accessing or using our website and services, you agree to comply with the following Terms and Conditions. This website is owned and operated by{" "}
                <strong>IKASHI FINTECH PRIVATE LIMITED</strong>, a registered educational company in India.
              </p>

              <p>
                Please read these terms carefully before using our website. If you do not agree with any part of these terms, you must not use our website or services.
              </p>

              <h2 className="mt-4 h4 fw-bold">1. Educational Purpose Only</h2>
              <p>
                All content, including videos, articles, webinars, and courses available on Finnovationz, is provided strictly for <strong>educational and informational purposes</strong>. We do <strong>not</strong> provide investment advice, stock tips, or any kind of financial services.
              </p>

              <h2 className="mt-4 h4 fw-bold">2. User Responsibilities</h2>
              <p>By using our website, you agree:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                <li>To use the content only for personal, non-commercial learning</li>
                <li>Not to rely on the content for financial or trading decisions</li>
                <li>Not to share, resell, or distribute any content without permission</li>
                <li>To respect the intellectual property rights of Finnovationz</li>
              </ul>

              <h2 className="mt-4 h4 fw-bold">3. Account and Access</h2>
              <p>When registering for any course or creating an account:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                <li>You must provide accurate and current information</li>
                <li>You are responsible for maintaining the confidentiality of your login credentials</li>
                <li>Any unauthorized use of your account must be reported to us immediately</li>
              </ul>

              <h2 className="mt-4 h4 fw-bold">4. Intellectual Property</h2>
              <p>
                All materials, branding, course content, and visuals on this website are the sole property of <strong>IKASHI FINTECH PRIVATE LIMITED</strong>. Copying, modifying, or using any content without prior written permission is strictly prohibited.
              </p>

              <h2 className="mt-4 h4 fw-bold">5. Limitation of Liability</h2>
              <p>
                <strong>IKASHI FINTECH PRIVATE LIMITED</strong> is not liable for any loss or damage arising from:
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                <li>Use or misuse of our educational content</li>
                <li>Decisions made based on information from our platform</li>
                <li>Technical issues, interruptions, or website downtime</li>
              </ul>
              <p>
                All financial actions taken by users are their own responsibility.
              </p>

              <h2 className="mt-4 h4 fw-bold">6. Third-Party Links</h2>
              <p>
                Finnovationz may include links to third-party websites. These are provided for educational reference only. We are not responsible for the content, services, or policies of any external sites.
              </p>

              <h2 className="mt-4 h4 fw-bold">7. Changes to Terms</h2>
              <p>
                We reserve the right to update or modify these Terms and Conditions at any time. Any changes will be posted on this page. Continued use of the website after changes constitutes acceptance of the new terms.
              </p>

              <h2 className="mt-4 h4 fw-bold">8. Governing Law</h2>
              <p>
                These terms shall be governed by and interpreted in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in <strong>[Your City/State]</strong>.
              </p>

              <h2 className="mt-4 h4 fw-bold">9. Contact Us</h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us at:{" "}
                <a href="mailto:support@finnovationz.com" className="text-decoration-none">
                  <u>support@finnovationz.com</u>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Brokerfooter />
    </>
  );
}

export default Terms;
