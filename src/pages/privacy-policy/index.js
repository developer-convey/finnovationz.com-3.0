import React from "react";
import "../../app/coursesStyle/courses.css";
import Header from "@/app/components/header";
import Brokerfooter from "@/app/components/brokerFooter";
import Head from "next/head";
import Meta from "../../component/Meta";

function PrivacyPolicy() {
  return (
    <>
      <Head>
        <Meta />
        <title>Privacy Policy | Finnovationz</title>
      </Head>

      <Header />

      <section className="contentPages">
        <div className="container">
          <div className="row">
            <div className="col-md-12">

              <h1 className="mt-4 h4 fw-bold">Finnovationz Privacy Policy</h1>
              <p><strong>Last Updated:</strong> 04-July-2025</p>

              <p>
                At <strong>Finnovationz</strong>, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our website, <a href="https://finnovationz.com" target="_blank">finnovationz.com</a>. The platform is owned and operated by <strong>IKASHI FINTECH PRIVATE LIMITED</strong>, a registered educational company in India.
              </p>

              <h2 className="mt-4 h4 fw-bold">1. Information We Collect</h2>
<p>We may collect the following types of information when you interact with our website:</p>
<ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
  <li>
    <strong>Personal Information:</strong> Name, email address, phone number, or other details you voluntarily provide during sign-up, form submission, or course registration.
  </li>
  <li>
    <strong>Non-Personal Information:</strong> Browser type, device info, IP address, pages visited, and behavior data through cookies and third-party analytics tools.
  </li>
</ul>

<h2 className="mt-4 h4 fw-bold">2. How We Use Your Information</h2>
<ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
  <li>Provide access to courses and educational content</li>
  <li>Improve our website and learning experience</li>
  <li>Send important service updates, newsletters (if subscribed)</li>
  <li>Respond to support queries and feedback</li>
  <li>Ensure website functionality and user security</li>
</ul>


              <h2 className="mt-4 h4 fw-bold">3. No Financial Services or Advisory</h2>
              <p>
                Finnovationz is a <strong>purely educational platform</strong>. We do <strong>not collect any financial or banking information</strong>, nor do we provide stock tips, investment advice, or financial services. All content is intended for learning purposes only.
              </p>

              <h2 className="mt-4 h4 fw-bold">4. Data Security</h2>
              <p>
                We take reasonable technical and organizational measures to protect your personal data. However, no online system is completely secure, and by using this website, you acknowledge this risk.
              </p>

              <h2 className="mt-4 h4 fw-bold">5. Cookies and Tracking</h2>
              <p>
                We use cookies and similar technologies to enhance your experience. These tools help us understand user behavior and improve our services. You can manage cookies through your browser settings.
              </p>

              <h2 className="mt-4 h4 fw-bold">6. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites or platforms. We are not responsible for their privacy practices or content. We recommend reviewing their policies separately.
              </p>

              <h2 className="mt-4 h4 fw-bold">7. Your Rights</h2>
              <p>
                You have the right to access, update, or delete your personal information stored with us. To do so, you can contact us directly at the email below.
              </p>

              <h2 className="mt-4 h4 fw-bold">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with the revised date. Please review this policy periodically.
              </p>

              <h2 className="mt-4 h4 fw-bold">9. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us:
              </p>
              <p>
                <strong>Email:</strong> <a href="mailto:support@finnovationz.com">support@finnovationz.com</a>
              </p>

            </div>
          </div>
        </div>
      </section>

      <Brokerfooter />
    </>
  );
}

export default PrivacyPolicy;
