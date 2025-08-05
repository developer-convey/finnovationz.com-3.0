import Link from "next/link";
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const HomeBannerSticky = ({
  selectedItem,
  brokerList,
  compareBroker,
  brokerList1,
  handleCompareClick,
  handleCompare1,
  handleCompare2,
}) => {
  return (
    <>
      <div
        className="d-flex flex-wrap align-items-center justify-content-center mobile-gap "
        style={{
          position: "sticky",
          top: -10,
          zIndex: 1000,
          padding: "15px 10px 5px 10px",
          backgroundColor: "#fff",
        }}
      >
        <Dropdown className="">
          <Dropdown.Toggle
            id="dropdown-basic"
            style={{
              background:
                "linear-gradient(219.24deg, #F4FEFE 21.67%, #FFFFFF 43.97%)",
              color: "black",
              border: "1px solid #E8E8E8",
            }}
          >
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
                  />{" "}
                </Link>
              )}
              {selectedItem && (
                <span>
                  {typeof window !== "undefined" && window.innerWidth < 500
                    ? selectedItem.name.slice(0, 7) + "..."
                    : selectedItem.name}
                </span>
              )}
              <img
                loading="lazy"
                src="/down_arrow.svg"
                className=""
                style={{
                  height: 20,
                  width: 20,
                  marginLeft:
                    typeof window !== "undefined" && window.innerWidth < 500
                      ? ""
                      : 50,
                }}
              />
            </div>
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
          className="vs-img my-3 my-lg-0 mobile-none"
        />
        <Dropdown className="">
          <Dropdown.Toggle
            id="dropdown-basic"
            style={{
              background:
                "linear-gradient(219.24deg, #F4FEFE 21.67%, #FFFFFF 43.97%)",
              color: "black",
              border: "1px solid #E8E8E8",
            }}
          >
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
              {compareBroker && (
                <span>
                  {typeof window !== "undefined" && window.innerWidth < 500
                    ? compareBroker.name.slice(0, 7) + "..."
                    : compareBroker.name}
                </span>
              )}
              <img
                loading="lazy"
                src="/down_arrow.svg"
                className=""
                style={{
                  height: 20,
                  width: 20,
                  marginLeft:
                    typeof window !== "undefined" && window.innerWidth < 500
                      ? ""
                      : 50,
                }}
              />
            </div>
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

        <button
          style={{
            marginLeft:
              typeof window !== "undefined" && window.innerWidth < 500
                ? " "
                : 30,
            width:
              typeof window !== "undefined" && window.innerWidth < 500
                ? "90%"
                : "",
          }}
          className=" site_btn"
          onClick={handleCompareClick}
        >
          Compare Now
        </button>
      </div>
    </>
  );
};

export default HomeBannerSticky;
