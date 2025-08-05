import React from "react";

const Spinner = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <span className="ms-2 text-primary fw-bold">Loading...</span>
    </div>
  );
};

export default Spinner;
