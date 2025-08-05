import React from "react";
import Link from "next/link";

const StickySingleBroker = ({ data }) => {
  return (
    <div
      className="make-stiky"
      style={{
        display: "flex",
        alignItems: "center",

        backgroundColor: "white",
        justifyContent: "space-between",
      }}
    >
      {" "}
      <div className="d-lg-flex flex-wrap align-items-center justify-content-between ">
        <div
          className="d-flex align-items-center rating single_broker_banner "
          style={{ marginBottom: 6 }}
        >
          <img loading="lazy" src={data.logo} alt="" className="brand_logo_i" />
          <div className="text-start ms-3 ">
            <h3 className="mb-1">{data.name}</h3>
          </div>
        </div>
      </div>
      <Link
        href={data.url}
        className="site_btn text-decoration-none mt-lg-0 d-inline-block text-center"
      >
        Open Demat Account
      </Link>
    </div>
  );
};

export default StickySingleBroker;
