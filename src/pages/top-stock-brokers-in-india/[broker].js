import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

import "../../app/globals.css";
import "../../app/components/CompareBroker/CompareBroker.css";
import Header from "@/app/components/header";
import Head from "next/head";
import dynamic from "next/dynamic";
// import Modal from "../../app/components/modalComponent/modal";

const SingleBroker = dynamic(() => import("@/app/components/SingleBroker"));
const StillConfussed = dynamic(() => import("@/app/components/StillConfussed"));
const CompareBroker = dynamic(() => import("@/app/components/CompareBroker"));
const Brokerfooter = dynamic(() => import("@/app/components/brokerFooter"));

const transformBrokerName = (name) => {
  if (!name) return "";
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export async function getServerSideProps(context) {
  const { params } = context;
  const brokes = params.broker;

  async function fetchBrokerComparison(brokes) {
    const formattedBrokerName = transformBrokerName(brokes);
    try {
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_BROKER_API_URL
        }/api/broker/${encodeURIComponent(formattedBrokerName)}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
      return null;
    }
  }

  const brokerDatas = await fetchBrokerComparison(brokes);

  return {
    props: {
      brokerDatas,
      brokes,
    },
  };
}

export default function BrokerDetail({ brokerDatas, brokes }) {
  // console.log("brokerDatas--->>", brokerDatas, "-------", brokes);
  const router = useRouter();
  const { broker } = router.query;

  const [brokerData, setBrokerData] = useState("");
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Set a timer to show the modal after 3 seconds
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1500);

    // Clean up the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10 && !hasScrolled) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);
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

  useEffect(() => {
    const brokerName = decodeURIComponent(router.query.broker);

    // console.log("brokerName--->>", encodeURIComponent(brokerName));

    if (brokerName) {
      const formattedBrokerName = transformBrokerName(brokerName);
      // // console.log('formattedBrokerName-->>', formattedBrokerName);
      fetch(
        `${
          process.env.NEXT_PUBLIC_BROKER_API_URL
        }/api/broker/${encodeURIComponent(formattedBrokerName)}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          // console.log("data---->", data);
          setBrokerData(data.data);
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    }
  }, [router.query.broker]);

  return (
    <>
      <Head>
        <title>{brokerDatas?.metaInfo?.title.replace("<!-- -->", " ")}</title>

        {/* {brokerDatas?.metaInfo?.keywords && (
          <meta name="keywords" content={brokerData?.metaInfo?.keywords} />
        )} */}
        {Array.isArray(brokerDatas?.metaInfo?.keywords) &&
        brokerDatas?.metaInfo?.keywords.length > 0
          ? brokerDatas?.metaInfo?.keywords.map((item, index) => {
              return <meta key={index} name="keywords" content={item} />;
            })
          : ""}
        <meta name="description" content={brokerDatas?.metaInfo?.description} />
      </Head>
      <Header />
      <SingleBroker data={brokerData} hasScrolled={hasScrolled} />
      {hasScrolled && (
        <>
          <StillConfussed />
          <CompareBroker />
          <Brokerfooter />
          {/* Modal Component */}
          {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}
        </>
      )}
    </>
  );
}
