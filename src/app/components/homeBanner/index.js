import React, { useState, useEffect } from "react";
import "./HomeBanner.css";

import dynamic from "next/dynamic";
import CompareOnBanner from "../compareOnBanner/CompareOnBanner";

const HomeBannerSticky = dynamic(() => import("./HomeBannerSticky"), {
  ssr: false,
  loading: () => <p> </p>,
});

function HomeBanner({onBrochureClick}) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [compareBroker, setCompareBroker] = useState(null);
  const [brokerList, setBrokerList] = useState([]);
  const [brokerList1, setBrokerList1] = useState([]);

  const [isShown, setIsShown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined" && window.innerWidth > 500) {
        setIsShown(typeof window !== "undefined" && window.scrollY <= 600);
      } else {
        setIsShown(typeof window !== "undefined" && window.scrollY <= 600);
      }
    };

    typeof window !== "undefined" &&
      window.addEventListener("scroll", handleScroll);

    return () => {
      typeof window !== "undefined" &&
        window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (brokerList.length == 0) {
      fetch(`${process.env.NEXT_PUBLIC_BROKER_API_URL}/api/broker`)
        .then((response) => response.json())
        .then((data) => {
          if (Array.isArray(data.data)) {
            setBrokerList(data.data);
            setBrokerList1(data.data);
            // Find 'Angel' and 'Zerodha' brokers from the fetched data
            const angelBroker = data.data.find(
              (broker) => broker.name === "Angel One"
            );
            const zerodhaBroker = data.data.find(
              (broker) => broker.name === "Zerodha"
            );

            if (angelBroker) {
              setSelectedItem(angelBroker);
            }

            if (zerodhaBroker) {
              setCompareBroker(zerodhaBroker);
            }
          } else {
            console.error("Invalid broker data:", data);
          }
        })
        .catch((error) => {
          console.error("Error fetching broker list:", error);
        });
    }
  }, []);

  const handleCompare1 = (broker) => {
    if (compareBroker === broker) {
      alert("The Broker is Already selected!");
      return;
    }
    setSelectedItem(broker);
  };

  const handleCompare2 = (broker) => {
    if (selectedItem === broker) {
      alert("The Broker is Already selected!");
      return;
    }
    setCompareBroker(broker);
  };

  const handleCompareClick = () => {
    if (selectedItem && compareBroker) {
      typeof window !== "undefined" &&
        window.open(
          `/compare-broker/${selectedItem.name
            .toLowerCase()
            .replace(/\s+/g, "-")}-vs-${compareBroker.name
            .toLowerCase()
            .replace(/\s+/g, "-")}`,
          "_blank"
        );
    }
  };

  return (
    <>
      <section className={`heroBanner`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <span className="banner_sub_heading">Hunt down the </span>
              <h1>
                Best Stock Broker <br className="d-block d-sm-none" /> for you
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="compare_sec">
        <div className="container">
          <CompareOnBanner
            selectedItem={selectedItem}
            brokerList={brokerList}
            handleCompare1={handleCompare1}
            handleCompare2={handleCompare2}
            compareBroker={compareBroker}
            brokerList1={brokerList1}
            handleCompareClick={handleCompareClick}
          />
        </div>
      </section>

      {!isShown && (
        <HomeBannerSticky
          selectedItem={selectedItem}
          brokerList={brokerList}
          compareBroker={compareBroker}
          brokerList1={brokerList1}
          handleCompareClick={handleCompareClick}
          handleCompare1={handleCompare1}
          handleCompare2={handleCompare2}
        />
      )}
    </>
  );
}

export default HomeBanner;
