import Link from "next/link";
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const ComparingBrpkerSticky = ({
  broker1,
  isMobile,
  brokerList,
  broker2,
  onBrokerSelect,
  isShown,
}) => {
  return (
    <div
      className="d-flex align-items-center justify-content-between compare_menu_list "
      style={{ backgroundColor: "white", marginTop: 20 }}
    >
      <Dropdown className="compare_side1">
        <Dropdown.Toggle
          id="dropdown-basic"
          className="bg-white border-0"
          style={{ marginTop: 8 }}
        >
          <div className="d-block broker-inner-detail ">
            <div className="d-flex align-items-start justify-content-between">
              <div className="d-md-flex  text-center align-items-center rating">
                <Link
                  href={`/top-stock-brokers-in-india/${broker1.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    loading="lazy"
                    src={broker1.logo}
                    alt=""
                    className="brand_logo_i2"
                  />
                </Link>
                <div className="text-center text-md-start ms-md-3">
                  {isMobile < 500 ? (
                    <h3 className="mb-1 text-dark">
                      {broker1.name.slice(0, 8)}...
                    </h3>
                  ) : (
                    <h3 className="mb-1 text-dark" style={{ fontSize: "16px" }}>
                      {broker1.name}
                    </h3>
                  )}
                </div>
              </div>
              <img
                loading="lazy"
                src="/down_arrow.svg"
                className=" mt-2"
                style={{ height: 10, width: "60px" }}
              />
            </div>
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {brokerList.map((broker) => {
            return (
              <Dropdown.Item
                key={broker._id}
                className="d-flex align-items-center"
                onClick={() => onBrokerSelect("side1", broker.name, broker2)}
                style={{ alignItems: "center" }}
                disabled={
                  broker.name == broker2.name || broker1.name == broker.name
                }
              >
                <img
                  loading="lazy"
                  src={broker.logo}
                  alt=""
                  className="logo_style"
                />
                <span>{broker.name}</span>
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
      <img
        loading="lazy"
        src="/compare-vs.svg"
        alt=""
        className=""
        style={{ height: 50 }}
      />
      <Dropdown className="compare_side2">
        <Dropdown.Toggle id="dropdown-basic" className="bg-white border-0">
          <div className="d-block broker-inner-detail">
            <div
              className="d-flex align-items-start justify-content-between"
              style={{ justifyContent: "space-between" }}
            >
              <div className="d-flex flex-wrap text-center align-items-center rating">
                <div className="text-center text-md-end ms-md-3 broker2_content">
                  {isMobile < 500 ? (
                    <h3 className="mb-1 text-dark">
                      {broker2.name.slice(0, 8)}...
                    </h3>
                  ) : (
                    <h3 className="mb-1 text-dark" style={{ fontSize: "16px" }}>
                      {broker2.name}
                    </h3>
                  )}
                </div>
                <Link
                  href={`/top-stock-brokers-in-india/${broker2.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    loading="lazy"
                    src={broker2.logo}
                    alt=""
                    className="ms-md-3 brand_logo_i2"
                  />
                </Link>
              </div>
              <img
                src="/down_arrow.svg"
                className="mt-2"
                style={{ height: 10, width: "60px" }}
              />
            </div>
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {brokerList.map((broker) => {
            return (
              <Dropdown.Item
                key={broker._id}
                className="d-flex align-items-center"
                onClick={() => onBrokerSelect("side2", broker.name, broker1)}
                disabled={
                  broker1.name == broker.name || broker2.name == broker.name
                }
              >
                <img src={broker.logo} alt="" className="logo_style" />
                <span>{broker.name}</span>
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default ComparingBrpkerSticky;
