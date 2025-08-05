import React from "react";
// import "../../app/coursesStyle/courses.css";
import Header from "@/app/components/header";
import Brokerfooter from "@/app/components/brokerFooter";
import "./../cancellation-policy/cancellation-policy.css";

function CancellationPolicy() {
  return (
    <>
      <Header />
      <section className="CancellationPolicy">
        <div className="container-Cancellation">
          <div className="row">
            <div className="col-md-12">
              <h1 className="fw-bold">Cancellation Policy</h1>
              <h6>For Ikashi Fintech Pvt Ltd</h6>

              <h5>1. Purpose</h5>
              <p>
                This cancellation policy outlines the terms and conditions under
                which clients and customers can cancel services or subscriptions
                provided by Ikashi Fintech Pvt Ltd. The policy ensures
                transparency, fairness, and consistency in handling
                cancellations.
              </p>

              <h5>2. Scope</h5>
              <p>
                This policy applies to all customers and users of products and
                services provided by Ikashi Fintech Pvt Ltd.
              </p>

              <h5>3. General Cancellation Terms</h5>
              <p>
                <strong>Eligibility for Cancellation:</strong> Customers may
                request cancellation of services or subscriptions based on the
                terms outlined in their service agreement.
              </p>
              <p>
                <strong>Notification:</strong> Cancellations must be submitted
                in writing via the designated cancellation form on the Ikashi
                Fintech website or through direct email to the support team.
              </p>
              <p>
                <strong>Verification:</strong> Upon receiving a cancellation
                request, Ikashi Fintech will verify the request by confirming
                customer identity and service details.
              </p>

              <h5>4. Subscription and Service Cancellations</h5>
              <p>
                <strong>Monthly Subscriptions:</strong> Cancellations must be
                submitted at least 7 days before the end of the current billing
                cycle to avoid charges for the following month. No refunds will
                be issued for unused days in the billing cycle after a
                cancellation request.
              </p>
              <p>
                <strong>Annual Subscriptions:</strong> Cancellations can be made
                at any time; however, refunds will only be provided on a
                prorated basis for the unused portion of the subscription, less
                an administrative fee.
              </p>
              <p>
                <strong>Trial Periods:</strong> If a cancellation is made during
                a trial period, no charges will be incurred, and access to
                services will cease immediately.
              </p>

              <h5>5. Refund Policy</h5>
              <p>
                <strong>Non-Refundable Services:</strong> Certain services,
                including one-time fees for setup or transaction services, are
                non-refundable.
              </p>
              <p>
                <strong>Eligible Refunds:</strong> Refunds for eligible
                cancellations will be processed within 14 business days after
                verification. Any applicable fees or deductions for processing
                may be subtracted from the total refund.
              </p>

              <h5>6. Exceptions and Special Cases</h5>
              <p>
                <strong>Force Majeure:</strong> In situations where
                cancellations are due to unforeseen circumstances such as
                natural disasters or regulatory changes, special exceptions may
                apply.
              </p>
              <p>
                <strong>Service Downtime:</strong> If services are significantly
                disrupted for reasons attributable to Ikashi Fintech, customers
                may be eligible for a partial refund or credit.
              </p>

              <h5>7. Process for Requesting Cancellations</h5>
              <p>
                <strong>Initiation:</strong> The customer initiates a
                cancellation request via the company's website or customer
                service email.
              </p>
              <p>
                <strong>Review and Verification:</strong> The request is
                reviewed and verified for compliance with the policy terms.
              </p>
              <p>
                <strong>Confirmation:</strong> A confirmation email or
                communication will be sent to the customer once the cancellation
                is processed, detailing the effective cancellation date and any
                refund information.
              </p>

              <h5>8. Policy Modifications</h5>
              <p>
                Ikashi Fintech Pvt Ltd reserves the right to modify this
                cancellation policy at its discretion. Any changes will be
                communicated to customers via email or through the company
                website at least 30 days prior to implementation.
              </p>

              <h5>9. Customer Support</h5>
              <p>
                For questions or further assistance regarding cancellations,
                customers can contact the support team via:
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:support@finnovationz.com">support@finnovationz.com</a>
              </p>
              <p>
                <strong>Phone:</strong> +91 7480080027
              </p>
            </div>
          </div>
        </div>
      </section>
      <Brokerfooter />
    </>
  );
}

export default CancellationPolicy;
