// Import necessary modules/components
import BrokerItem from "@/app/components/BrokerItem";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../../app/globals.css";
import Header from "@/app/components/header";
// import Modal from "../../app/components/modalComponent/modal";
import Head from "next/head";
import Brokerfooter from "@/app/components/brokerFooter";

// Define your BrokerListing component
function BrokerListing({ brokersData }) {
  // State to handle data and error
  const [data, setData] = useState(brokersData);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Set a timer to show the modal after 3 seconds
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1500);

    // Clean up the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  // Fetch data effect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BROKER_API_URL}/api/broker/all-brokers-list`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  // Handle error
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Render loading state if data is not yet available
  if (!data) {
    return <div>Loading...</div>;
  }

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src =
  //     "https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?93705";
  //   script.async = true;
  //   script.onload = () => {
  //     const options = {
  //       enabled: true,
  //       chatButtonSetting: {
  //         backgroundColor: "#08e7a4",
  //         ctaText: "Chat with us",
  //         borderRadius: "25",
  //         marginLeft: "0",
  //         marginRight: "20",
  //         marginBottom: "20",
  //         ctaIconWATI: false,
  //         position: "right",
  //       },
  //       brandSetting: {
  //         brandName: "FinnovationZ",
  //         brandSubTitle: "undefined",
  //         brandImg:
  //           "https://www.wati.io/wp-content/uploads/2023/04/Wati-logo.svg",
  //         welcomeText: "Hello, How can I help you?",
  //         messageText: "",
  //         backgroundColor: "#08e7a4",
  //         ctaText: "Chat with us",
  //         borderRadius: "25",
  //         autoShow: false,
  //         phoneNumber: "7219465429",
  //       },
  //     };
  //     window.CreateWhatsappChatWidget(options);
  //   };

  //   document.body.appendChild(script);
  // }, []);

  // Return JSX for the component
  return (
    <>
      <Head>
        <title>Top Stock Brokers In India | Compare and Find the Best</title>
        <meta name="keywords" content="Top Stock Brokers In India" />
        <meta
          name="description"
          content="Compare top stock brokers in India and find the perfect fit for you. Get detailed information about the charges & ratings from stock brokers to optimize your investments"
        />
      </Head>
      <Header allbool />

      <section className="top_spacing broker-listing-bar">
        <h2 className="text-center fs-2 fw-bold mt-2">Top Stock Brokers In India</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="list-unstyled mb-0">
                {data.map((item) => (
                  <BrokerItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Brokerfooter />
      {/* Modal Component */}
      {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}
    </>
  );
}

// Function to fetch data at request time (Server-side Rendering)
export async function getServerSideProps() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BROKER_API_URL}/api/broker/all-brokers-list`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const jsonData = await response.json();
    const brokersData = jsonData.data;

    return {
      props: { brokersData },
    };
  } catch (error) {
    return {
      props: { error: error.message },
    };
  }
}

// Export BrokerListing component as default
export default BrokerListing;
