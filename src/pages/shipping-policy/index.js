import React from "react";
// import "../../app/coursesStyle/courses.css";
import Header from "@/app/components/header";
import Brokerfooter from "@/app/components/brokerFooter";
import "../shipping-policy/shipping-policy.css";

function ShippingPolicy() {
  return (
    <>
      <Header />
      <section className="shippingPolicy">
        <div className="container-shipping">
          <div className="row">
            <div className="col-md-12">
              <h1 className="fw-bold">Shipping Policy</h1>

              <h5>1. General Information</h5>
              <p>
                All orders are subject to product availability. If an item is not in stock when you place your order, we will notify you and provide an estimated restock date or offer a refund. We use Shiprocket as our shipping partner.
              </p>

              <h5>2. Shipping Locations</h5>
              <p>
                We ship to addresses within India. At this time, we do not ship internationally.
              </p>

              <h5>3. Processing Time</h5>
              <p>
                Orders are processed within [1-2 business days]. Orders placed on weekends or holidays will be processed on the next business day. You will receive a notification once your order has been shipped.
              </p>

              <h5>4. Delivery Time</h5>
              <p>
                Delivery times vary based on your location and selected shipping method. Please note that delivery times are estimates and may be subject to delays due to unforeseen circumstances.
              </p>

              <h5>5. Order Tracking</h5>
              <p>
                Once your order is shipped, we will provide you with a tracking number and link to monitor your shipment.
              </p>

              <h5>6. Shipping Issues</h5>
              <ul>
                <li>
                  If your package is lost or damaged in transit, please contact us immediately at <a href="mailto:support@finnovationz.com"><strong>support@finnovationz.com</strong></a>.
                </li>
                <li>
                  For missing or delayed shipments, allow up to 5 business days after the estimated delivery date before reaching out.
                </li>
              </ul>

              <h5>7. Returns and Refunds</h5>
              <p>
              For information about returns and refunds, please refer to our <a href="https://www.finnovationz.com/cancellation-policy" target="_blank"><strong>https://www.finnovationz.com/cancellation-policy</strong></a>.
              </p>
              
              <h5>8. Contact Us</h5>
              <p>
              If you have any questions about our shipping policy, please contact us at:
              </p>
              <ul>
                <li>
                  Email: <a href="mailto:support@finnovationz.com"><strong>support@finnovationz.com</strong></a>
                </li>
                <li>
                  Phone: <a href="tel:+917480080027"><strong>+91 7480080027</strong></a>
                </li>
              </ul>
              <div>Thank you for shopping with FinnovationZ.</div>
            </div>
          </div>
        </div>
      </section>
      <Brokerfooter />
    </>
  );
}

export default ShippingPolicy;
