import Link from "next/link";
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const CompareOnBanner = ({
  selectedItem,
  brokerList,
  compareBroker,
  brokerList1,
  handleCompareClick,
  handleCompare1,
  handleCompare2,
}) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="compare_card ">
          <div className="d-flex flex-wrap align-items-center justify-content-center">
            <Dropdown className="compare_side1">
              <Dropdown.Toggle id="dropdown-basic">
                <div style={{ display: "flex", alignItems: "center" }}>
                  {selectedItem && (
                    <Link
                      href={`/top-stock-brokers-in-india/${selectedItem.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        loading="lazy"
                        src={selectedItem.logo}
                        alt=""
                        className="logo_style"
                      />
                    </Link>
                  )}
                  {selectedItem && <span>{selectedItem.name}</span>}
                </div>
                <img
                  loading="lazy"
                  src="/down_arrow.svg"
                  className="arrow"
                  alt=""
                />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {brokerList.map((broker) => (
                  <Dropdown.Item
                    key={broker._id}
                    className="d-flex align-items-center"
                    onClick={() => handleCompare1(broker)}
                    disabled={
                      broker.name == compareBroker.name ||
                      broker.name == selectedItem.name
                    }
                    style={{
                      opacity:
                        broker.name == compareBroker.name ||
                        broker.name == selectedItem.name
                          ? 0.4
                          : "",
                    }}
                  >
                    <img
                      loading="lazy"
                      src={broker.logo}
                      alt=""
                      className="logo_style"
                    />
                    <span>{broker.name}</span>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <img
              loading="lazy"
              src="/vs.svg"
              alt="v/s"
              title="v/s"
              className="vs-img my-3 my-lg-0"
            />
            <Dropdown className="compare_side2">
              <Dropdown.Toggle id="dropdown-basic">
                <div style={{ display: "flex", alignItems: "center" }}>
                  {compareBroker && (
                    <Link
                      href={`/top-stock-brokers-in-india/${compareBroker.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        loading="lazy"
                        src={compareBroker.logo}
                        alt=""
                        className="logo_style"
                      />
                    </Link>
                  )}
                  {compareBroker && <span>{compareBroker.name}</span>}
                </div>
                <img
                  loading="lazy"
                  src="/down_arrow.svg"
                  className="arrow"
                  alt=""
                />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {brokerList1.map((broker, index) => {
                  const key = `${broker._id}-${index}`;
                  return (
                    <Dropdown.Item
                      key={key}
                      className="d-flex align-items-center"
                      onClick={() => handleCompare2(broker)}
                      disabled={
                        broker.name == selectedItem.name ||
                        broker.name == compareBroker.name
                      }
                      style={{
                        opacity:
                          broker.name == selectedItem.name ||
                          broker.name == compareBroker.name
                            ? 0.4
                            : "",
                      }}
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
          </div>
          <button className="compare_btn site_btn" onClick={handleCompareClick}>
            Compare Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompareOnBanner;
