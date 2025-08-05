import React from "react";
import TabForm from "../TabForm";
import "./StillConfussed.css";
function StillConfussed() {
  return (
    <>
      <section className="cta-form">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-5 text-center text-md-start">
              <h2>Still Confused?</h2>
              <p>
                Just tell us your what you need, We will get you the best one.
              </p>
            </div>
            <div className="col-md-6">
              <TabForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default StillConfussed;
