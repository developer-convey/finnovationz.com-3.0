import React from "react";
// import "../../app/coursesStyle/courses.css";
import Header from "@/app/components/header";
import Brokerfooter from "@/app/components/brokerFooter";
import "./../pricing-policy/pricingpolicy.css";

function PricingPolicy() {
  return (
    <>
      <Header />
      <section className="pricing-policy">
        <div className="pricingp-container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="fw-bold">Pricing Policy</h1>
              <h6>For Ikashi Fintech Pvt Ltd</h6>

              <h5>1. Purpose</h5>
              <p>
                This policy defines the pricing framework for products and
                services provided by Ikashi Fintech Pvt Ltd. It establishes
                guidelines to ensure pricing fairness, consistency, and
                compliance with regulatory requirements.
              </p>

              <h5>2. Scope</h5>
              <p>
                This policy applies to all pricing decisions for products,
                services, and solutions offered by Ikashi Fintech Pvt Ltd across
                various channels.
              </p>

              <h5>3. Pricing Objectives</h5>
              <ul>
                <li>
                  Maximize value for customers while ensuring sustainable
                  revenue growth.
                </li>
                <li>
                  Maintain competitive pricing to encourage adoption and
                  customer retention.
                </li>
                <li>
                  Adjust prices based on market conditions, customer segments,
                  and business costs.
                </li>
              </ul>

              <h5>4. Pricing Structure</h5>
              <p>
                Ikashi Fintech offers a variety of pricing models suited to
                different customer needs:
              </p>
              <ul>
                <li>
                  <strong>Subscription-Based Pricing:</strong> For ongoing
                  services with a monthly or annual fee.
                </li>
                <li>
                  <strong>Transaction-Based Pricing:</strong> Fees per
                  transaction for services like payments, transfers, or lending.
                </li>
                <li>
                  <strong>Tiered Pricing:</strong> Discounts or premium services
                  based on volume or customer tier.
                </li>
                <li>
                  <strong>Freemium Model:</strong> Basic services offered for
                  free, with an option to upgrade to premium versions.
                </li>
              </ul>

              <h5>5. Pricing Guidelines</h5>
              <ul>
                <li>
                  <strong>Cost-Plus Pricing:</strong> Prices are set to cover
                  operational costs plus a profit margin.
                </li>
                <li>
                  <strong>Market-Oriented Pricing:</strong> Pricing is
                  competitive within the fintech industry and adjusted based on
                  trends and competitor pricing.
                </li>
                <li>
                  <strong>Customer-Centric Discounts:</strong> Offers and
                  discounts may be provided based on loyalty, usage volume, or
                  promotional periods.
                </li>
                <li>
                  <strong>Transparency in Fees:</strong> All prices, including
                  additional fees, will be clearly communicated on the website
                  and in product materials.
                </li>
              </ul>

              <h5>6. Periodic Review</h5>
              <ul>
                <li>
                  <strong>Annual Review:</strong> Pricing policies and rates are
                  reviewed annually for alignment with business objectives and
                  market trends.
                </li>
                <li>
                  <strong>Adjustments for Inflation:</strong> Adjustments may be
                  applied in response to inflationary changes impacting
                  operational costs.
                </li>
              </ul>

              <h5>7. Approval Process</h5>
              <ul>
                <li>
                  All price changes must be approved by the Pricing Committee.
                </li>
                <li>
                  Deviations from the policy require written justification and
                  must be approved by the CEO or designated authority.
                </li>
              </ul>

              <h5>8. Compliance and Accountability</h5>
              <p>
                Adherence to local and international regulations regarding
                pricing practices is mandatory. Non-compliance with the pricing
                policy may lead to corrective actions.
              </p>

              <h5>9. Policy Communication</h5>
              <p>
                This policy shall be accessible to all employees involved in
                pricing decisions. Updates to the pricing structure will be
                communicated to customers 30 days in advance when feasible.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Brokerfooter />
    </>
  );
}

export default PricingPolicy;
