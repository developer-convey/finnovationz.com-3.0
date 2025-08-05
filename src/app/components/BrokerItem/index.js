import React from "react";
import "./BrokerItem.css";
import ReactStars from "react-rating-stars-component";

function BrokerItem({ data }) {
  const currencySymbol = "₹";

  const goToBroker = (broker) => {
    typeof window !== "undefined" &&
      window.open(
        `/top-stock-brokers-in-india/${broker
          .toLowerCase()
          .replace(/\s+/g, "-")}`,
        "_blank",
        "noopener,noreferrer"
      );
  };
  return (
    <>
      <li className="list-item mt-4">
        <div className="d-sm-flex flex-wrap align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <img src={data.logo} alt="" className="brand_logo_i" />
            <div className="text-start ms-3">
              <div
                className="mb-md-1 mb-0 cursor-pointer"
                style={{ fontSize: "24px", fontWeight: "bold" }}
                onClick={() => goToBroker(data.name)}
              >
                {data.name}
              </div>
              <span className="star-list">
            
                <ReactStars
                  count={5}
                  value={data.ratings.platformRating} // Set the fixed value here
                  size={15}
                  activeColor="#FFC107"
                  isHalf={true}
                  edit={false} // Disable user interaction
                />
              </span>
              <span className="ms-2">
                ({data.ratings.platformRating}/5.0 ratings)
              </span>
            </div>
          </div>
          <button
            className="outline_site_btn mt-3 mt-md-0"
            onClick={() => goToBroker(data.name)}
          >
            View Details
          </button>
        </div>

        <hr style={{ margin: "20px 0px" }} />
        <div className="row">
          <div className="col-md-12">
            <div className=" broker-charges row">
              <div className="col-xl-3 col-6 mt-2">
                <span>A/C Opening Charge</span>
                <p>
                  {currencySymbol}{data.accountOpenCharges ?? 0}
                </p>
              </div>
              <div className="col-xl-3 col-6 mt-2">
                <span>Maintenance Charge</span>
                <p>
                  {currencySymbol}{data.annualCharges?.match(/[0-9]+/) ?? 0}
                </p>
              </div>
              <div className="col-xl-3 col-6 mt-2">
                <span>Delivery Brokerage</span>
                <p>
                  {currencySymbol}{data.brokerCharges.delivery?.match(/[0-9]+/) ?? 0}
                </p>
              </div>
              <div className="col-xl-3 col-6 mt-2">
                <span>Intraday Brokerage</span>
                <p>
                  {currencySymbol}{data.brokerCharges.intraday?.match(/[0-9]+/) ?? 0}
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default BrokerItem;
