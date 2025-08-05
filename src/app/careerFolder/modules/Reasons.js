import React from "react";
import Reason from "../components/Reason";
import { reasonsToJoin } from "../resources/data.json";
import useScreenSize from "../hooks/useScreenSize";

const Reasons = () => {
  const screenSize = useScreenSize();
  const isMobile = screenSize === "mobile";
  const isTablet = screenSize === "tablet";

  return (
    <section className={`reasons ${isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'}`}>
      <div className="container">
        <h2>
          Top 4 Reasons on why you
          <br />
          should join us?
        </h2>
        <hr />

        <div className="cards">
          {reasonsToJoin.map((reason, i) => (
            <Reason key={i} data={reason} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reasons;
