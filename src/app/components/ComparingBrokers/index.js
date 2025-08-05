import React, { useState, useEffect } from "react";
import { Rating } from "@mui/material";
import "./ComparingBrokers.css";

import Dropdown from "react-bootstrap/Dropdown";

const ChartList = dynamic(() => import("../ChartList"), {
  ssr: false,
  loading: () => <p> </p>,
});

const ChartListRound = dynamic(() => import("../ChartListround"), {
  ssr: false,
  loading: () => <p> </p>,
});

const ComparingBrpkerSticky = dynamic(() => import("./ComparingBrpkerSticky"), {
  ssr: false,
  loading: () => <p> </p>,
});
const BarChart = dynamic(() => import("../BarChart"), {
  ssr: false,
  loading: () => <p> </p>,
});

import { useRouter } from "next/router";
import Link from "next/link";
import dynamic from "next/dynamic";
import Sidebar from "../Sidebar";
import Files from "@/config/file";
import DefaultImage from "../DefaultImage";
function ComparingBrokers({
  brokerdata1,
  brokerdata2,
  data1,
  data2,
  brokerListItem,
  onBrokerSelect,
  hasScrolled,
}) {
  const [broker1, setBroker1] = useState("");
  const [broker2, setBroker2] = useState("");
  const [brokerList, setBrokerList] = useState([]);
  const [isMobile, setIsMobile] = useState("");

  const [isShown, setIsShown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsShown(typeof window !== "undefined" && window.scrollY <= 200);
    };

    typeof window !== "undefined" &&
      window.addEventListener("scroll", handleScroll);

    return () => {
      typeof window !== "undefined" &&
        window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      // Check if window is defined to ensure code runs only in the browser
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth);
      }
    };

    handleResize(); // Call handleResize initially to set the initial value

    // Add event listener for the resize event
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const router = useRouter();

  useEffect(() => {
    if (brokerList.length == 0 && brokerListItem.length != 0) {
      setBrokerList(brokerListItem);
    }
  }, [brokerListItem]);

  useEffect(() => {
    if (broker1.name && broker2.name) {
      const url = `/compare-broker/${broker1.name}-vs-${broker2.name}`;
      // window.open(url, "_blank");
      router.push(
        `/compare-broker/${broker1.name
          .toLowerCase()
          .replace(/\s+/g, "-")}-vs-${broker2.name
          .toLowerCase()
          .replace(/\s+/g, "-")}`
      );
    }
  }, [broker1.name, broker2.name]);

  useEffect(() => {
    const decodedData1 = decodeURIComponent(data1);
    const decodedData2 = decodeURIComponent(data2);

    const matchedBroker1 =
      brokerdata1.name === decodedData1
        ? brokerdata1
        : brokerdata2.name === decodedData1
        ? brokerdata2
        : null;
    const matchedBroker2 =
      brokerdata1.name === decodedData2
        ? brokerdata1
        : brokerdata2.name === decodedData2
        ? brokerdata2
        : null;

    if (matchedBroker1 && matchedBroker2) {
      setBroker1(matchedBroker1);
      setBroker2(matchedBroker2);
    } else {
    }
  }, [data1, data2, brokerdata1, brokerdata2]);

  if (!broker1 || !broker2) {
    return null;
  }

  // Define excluded brokers based on selected brokers
  const excludedBrokers = [broker1.name, broker2.name];

  const broker1StartYear = broker1.activeUsers[0].year;
  const broker2StartYear = broker2.activeUsers[0].year;
  const activelabels =
    broker1StartYear <= broker2StartYear
      ? broker1.activeUsers.map((data) => data.year)
      : broker2.activeUsers.map((data) => data.year);

  const broker1active = [];

  activelabels.map((item, index) => {
    const dataObject = broker1.complaints.find((obj) => obj.year == item);
  });

  activelabels.forEach((label, index) => {
    const dataObject = broker1.activeUsers.find((obj) => obj.year == label);
    if (dataObject) {
      // broker1active[index] = dataObject.count;
      broker1active.push(dataObject.count);
    } else {
      broker1active.push(null);
    }
  });

  const broker2active = [];

  activelabels.map((item, index) => {
    const dataObject = broker2.complaints.find((obj) => obj.year == item);
  });

  activelabels.forEach((label, index) => {
    const dataObject = broker2.activeUsers.find((obj) => obj.year == label);
    if (dataObject) {
      // broker1active[index] = dataObject.count;
      broker2active.push(dataObject.count);
    } else {
      broker2active.push(null);
    }
  });

  const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  // Generate gradient with provided color and a transparent version
  const gradientColor = broker1.brandColor
    ? [broker1.brandColor, hexToRgba(broker1.brandColor, 0.6)]
    : ["#ffffff", "#ffffff"]; // Default to white if no color provided
  const gradientColor1 = broker2.brandColor
    ? [broker2.brandColor, hexToRgba(broker2.brandColor, 0.6)]
    : ["#ffffff", "#ffffff"]; // Default to white if no color provided

  const activeUsersChartData = {
    labels: activelabels,
    datasets: [
      {
        label: broker1.name,
        data: broker1active,
        labels: broker1.activeUsers.map((data) => data.year),
        borderColor: broker1.brandColor,
        backgroundColor: broker1.brandColor,
        borderWidth: 1,
        tension: 0.5,
        spanGaps: true,
      },
      {
        label: broker2.name,
        data: broker2active,
        labels: broker2.activeUsers.map((data) => data.year),
        borderColor: broker2.brandColor,
        backgroundColor: broker2.brandColor,
        borderWidth: 1,
        tension: 0.5,
        spanGaps: true,
      },
    ],
  };

  const compStartYear1 = broker1.activeUsers[0].year;
  const compStartYear2 = broker2.activeUsers[0].year;
  const complaintsabels =
    compStartYear1 <= compStartYear2
      ? broker1.activeUsers.map((data) => data.year)
      : broker2.activeUsers.map((data) => data.year);

  const broker1Data = new Array(complaintsabels.length).fill(null);

  complaintsabels.forEach((label, index) => {
    const dataObject = broker1.complaints.find((obj) => obj.year === label);
    if (dataObject) {
      broker1Data[index] = dataObject.count;
    }
  });

  const complaintsChartData = {
    datasets: [
      {
        label: broker1.name,
        data: broker1Data,
        labels: broker1.complaints.map((data) => data.year),
        borderColor: broker1.brandColor,
        backgroundColor: broker1.brandColor,
        borderWidth: 1,
        tension: 0.5,
      },
      {
        label: broker2.name,
        data: broker2.complaints.map((data) => data.count),
        labels: broker2.complaints.map((data) => data.year),
        borderColor: broker2.brandColor,
        backgroundColor: broker2.brandColor,
        borderWidth: 1,
        tension: 0.5,
      },
    ],
  };

  const createGradient = (color) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 1000); // Adjust the gradient dimensions as needed
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
    return gradient;
  };
  const financialChartData = {
    labels: broker1.financialStatus.revenue.map((data) => data.year),
    datasets: [
      {
        label: `${broker1.name} - Revenue`,
        data: broker1.financialStatus.revenue.map((data) => data.count),
        backgroundColor: createGradient("#36B368"),
        borderColor: "#36B368",
        borderWidth: 1,
        tension: 0.5,
      },
      // {
      //   label: `${broker1.name} - Expenses`,
      //   data: broker1.financialStatus.expense.map((data) => data.count),
      //   backgroundColor: createGradient("#FF5733"),
      //   borderColor: "#FF5733",
      //   borderWidth: 1,
      //   tension: 0.5,
      // },
      {
        label: `${broker1.name} - Profit/Loss`,
        data: broker1.financialStatus.profitLoss.map((data) => data.count),
        backgroundColor: createGradient("#36A2EB"),
        borderColor: "#36A2EB",
        borderWidth: 1,
        tension: 0.5,
      },
      {
        label: `${broker2.name} - Revenue`,
        data: broker2.financialStatus.revenue.map((data) => data.count),
        backgroundColor: createGradient("#36B368"),
        borderColor: "#36B368",
        borderWidth: 1,
        tension: 0.5,
      },
      // {
      //   label: `${broker2.name} - Expenses`,
      //   data: broker2.financialStatus.expense.map((data) => data.count),
      //   backgroundColor: createGradient("#FF5733"),
      //   borderColor: "#FF5733",
      //   borderWidth: 1,
      //   tension: 0.5,
      // },
      {
        label: `${broker2.name} - Profit/Loss`,
        data: broker2.financialStatus.profitLoss.map((data) => data.count),
        backgroundColor: createGradient("#36A2EB"),
        borderColor: "#36A2EB",
        borderWidth: 1,
        tension: 0.5,
      },
    ],
  };

  if (!broker1 || !broker1.shareholders) {
    return null;
  }

  // Extracting labels and data for shareholder chart
  const shareholderLabels1 = broker1.shareholders.map(
    (shareholder) => `${shareholder.shares}% ${shareholder.name} `
  );
  const shareholderShares1 = broker1.shareholders.map(
    (shareholder) => shareholder.shares
  );

  const shareholderDataset1 = [
    {
      label: "Shareholders",
      data: shareholderShares1,
      backgroundColor: [
        "#FAC265",
        "#008F75;",
        "#581DBE",
        "#22C7DA",
        "#D64D4E",
        "#3F5CD9",
      ],
      hoverOffset: 4,
    },
  ];
  if (!broker2 || !broker2.shareholders) {
    return null;
  }

  // Extracting labels and data for shareholder chart
  const shareholderLabels2 = broker2.shareholders.map(
    (shareholder) => `${shareholder.shares}% ${shareholder.name} `
  );
  const shareholderShares2 = broker2.shareholders.map(
    (shareholder) => shareholder.shares
  );

  const shareholderDataset2 = [
    {
      label: "Shareholders",
      data: shareholderShares2,
      backgroundColor: [
        "#FAC265",
        "#008F75;",
        "#581DBE",
        "#22C7DA",
        "#D64D4E",
        "#3F5CD9",
      ],
      hoverOffset: 4,
    },
  ];

  return (
    <>
      <section className="top_spacing compare-broker">
        <div
          style={{
            height: 800,
            background:
              "linear-gradient(179.53deg, rgba(55, 131, 216, 0.12) -7%, rgba(49, 192, 178, 0.12) 54.02%, rgba(49, 192, 178, 0) 76.02%)",
            position: "absolute",
            zIndex: "",
            width: "100vw",
            top: 30,
          }}
        ></div>
        <div className="container" style={{ marginTop: "10px" }}>
          <div className="row">
            <div className="col-lg-3 d-none d-lg-block">
              <Sidebar broker1={broker1} broker2={broker2} />
            </div>
            <div className="col-lg-9" style={{ zIndex: 1 }}>
              <div
                className="d-flex align-items-center justify-content-between rounded-full"
                style={{ backgroundColor: "white" }}
              >
                <Dropdown className="compare_side1">
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    className="bg-white border-0"
                  >
                    <div className="d-block broker-inner-detail ">
                      <div
                        className="d-flex align-items-start justify-content-between"
                        style={{ justifyContent: "space-between" }}
                      >
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
                              className="brand_logo_i"
                              style={{
                                height: 47,
                                width: 47,
                                borderRadius: "50%",
                                padding: "4px",
                                objectFit: "containe",
                                background: "#eee",
                                border: "1px solid #d5d3d3",
                              }}
                            />
                          </Link>
                          <div className="text-center text-md-start ms-md-3">
                            <h1
                              className="mb-1 text-dark"
                              style={{ fontSize: "16px" }}
                            >
                              {broker1.name}
                            </h1>

                            <div>
                              {" "}
                              <span>
                                <Rating
                                  name="platform-rating"
                                  value={broker1?.ratings?.platformRating}
                                  precision={0.1}
                                  size="large"
                                  readOnly
                                  sx={{
                                    "& .MuiRating-iconFilled": {
                                      color: "#FFC107",
                                      fontSize: "16px",
                                    },
                                    "& .MuiRating-iconEmpty": {
                                      color: "#CCCCCC",
                                      fontSize: "16px", // Unfilled star color
                                    },
                                  }}
                                />
                              </span>{" "}
                              <br />
                              <span style={{ fontSize: "12px", color: "#000" }}>
                                ({broker1.ratings.platformRating}/5.0 ratings)
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <img
                          loading="lazy"
                          src="/down_arrow.svg"
                          className="arrow mt-2"
                        />
                      </div>

                      <Link
                        href={broker1.url}
                        className="d-none d-sm-block text-decoration-none site_btn mt-4"
                      >
                        Open Demat Account
                      </Link>
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {brokerList.map((broker) => {
                      return (
                        <Dropdown.Item
                          key={broker._id}
                          className="d-flex align-items-center"
                          onClick={() =>
                            onBrokerSelect("side1", broker.name, broker2)
                          }
                          style={{ alignItems: "center" }}
                          disabled={
                            broker.name == broker2.name ||
                            broker1.name == broker.name
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
                <img loading="lazy" src="/compare-vs.svg" alt="" className="" />
                <Dropdown className="compare_side2">
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    className="bg-white border-0"
                  >
                    <div className="d-block broker-inner-detail">
                      <div className="d-flex align-items-start justify-content-between">
                        <div className="d-flex flex-wrap text-center align-items-center rating">
                          <div className="text-center text-md-end ms-md-3 broker2_content">
                            <h1
                              className="mb-1 text-dark"
                              style={{ fontSize: "16px" }}
                            >
                              {broker2.name}
                            </h1>

                            <div>
                              {" "}
                              <span className="brokers-rating">
                                <Rating
                                  name="platform-rating"
                                  value={broker2?.ratings?.platformRating}
                                  precision={0.1}
                                  size="large"
                                  readOnly
                                  sx={{
                                    "& .MuiRating-iconFilled": {
                                      color: "#FFC107",
                                      fontSize: "16px",
                                    },
                                    "& .MuiRating-iconEmpty": {
                                      color: "#CCCCCC",
                                      fontSize: "16px", // Unfilled star color
                                    },
                                  }}
                                />
                              </span>{" "}
                              <br />
                              <span style={{ fontSize: "12px", color: "#000" }}>
                                ({broker2.ratings.platformRating}/5.0 ratings)
                              </span>{" "}
                            </div>
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
                              className="ms-md-3 brand_logo_i"
                              style={{
                                height: 47,
                                width: 47,
                                borderRadius: "50%",
                                padding: "4px",
                                objectFit: "containe",
                                background: "#eee",
                                border: "1px solid #d5d3d3",
                              }}
                            />
                          </Link>
                        </div>
                        <img
                          loading="lazy"
                          src="/down_arrow.svg"
                          className="arrow mt-2"
                        />
                      </div>
                      <Link
                        href={broker2.url}
                        className="d-none d-sm-block text-decoration-none site_btn mt-4"
                      >
                        Open Demat Account
                      </Link>
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {brokerList.map((broker) => {
                      return (
                        <Dropdown.Item
                          key={broker._id}
                          className="d-flex align-items-center"
                          onClick={() =>
                            onBrokerSelect("side2", broker.name, broker1)
                          }
                          style={{ alignItems: "center" }}
                          disabled={
                            broker1.name == broker.name ||
                            broker2.name == broker.name
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
              </div>

              {!isShown && (
                <ComparingBrpkerSticky
                  broker1={broker1}
                  isMobile={isMobile}
                  brokerList={brokerList}
                  broker2={broker2}
                  onBrokerSelect={onBrokerSelect}
                />
              )}
              <div className="card-shadow mt-5">
                <h3>Active Users</h3>
                <div className="chart_box">
                  <ChartList
                    labels={activeUsersChartData.labels}
                    datasets={activeUsersChartData.datasets}
                    chartType="line"
                    firstChartBoll={true}
                  />
                </div>
              </div>
              <div>
                {broker1.accountOpenCharges && broker2.accountOpenCharges ? (
                  <div className="basic-charges pt-5" id="basic-charges">
                    <h3>Basic Charges</h3>
                    <div className="table-responsive table-ui">
                      <table className="table table-striped table-bordered">
                        <thead>
                          <tr>
                            <th scope="col">Charges</th>
                            <th scope="col">{broker1.name}</th>
                            <th scope="col">{broker2.name}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Account Opening Charges</td>
                            <td>{broker1.accountOpenCharges}</td>
                            <td>{broker2.accountOpenCharges}</td>
                          </tr>
                          <tr>
                            <td>Annual Maintenance Charges</td>
                            <td>{broker2.annualCharges}</td>
                            <td>{broker2.annualCharges}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div id="charges"></div>
              {broker1.brokerCharges.intraday &&
              broker2.brokerCharges.intraday ? (
                <div className="basic-charges pt-5" id="charges">
                  <h3>Brokerage Charges</h3>
                  <div className="table-responsive table-ui">
                    <table className="table table-striped table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Brokerage Charges</th>
                          <th scope="col">{broker1.name}</th>
                          <th scope="col">{broker2.name}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Intraday</td>
                          <td>
                            {broker1 ? broker1.brokerCharges.intraday : ""}
                          </td>
                          <td>
                            {broker2 ? broker2.brokerCharges.intraday : ""}
                          </td>
                        </tr>
                        <tr>
                          <td>Delivery</td>
                          <td>
                            {broker1 ? broker1.brokerCharges.delivery : ""}
                          </td>
                          <td>
                            {broker2 ? broker2.brokerCharges.delivery : ""}
                          </td>
                        </tr>
                        <tr>
                          <td>Options</td>
                          <td>
                            {broker1 ? broker1.brokerCharges.options : ""}
                          </td>
                          <td>
                            {broker2 ? broker2.brokerCharges.options : ""}
                          </td>
                        </tr>
                        <tr>
                          <td>Futures</td>
                          <td>
                            {broker1 ? broker1.brokerCharges.futures : ""}
                          </td>
                          <td>
                            {broker2 ? broker2.brokerCharges.futures : ""}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className="basic-charges pt-5">
                <h3>Hidden Charges</h3>
                <div className="table-responsive table-ui">
                  <table className="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th scope="col"> Charges</th>
                        <th scope="col">{broker1.name}</th>
                        <th scope="col">{broker2.name}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Auto Square Off</td>
                        <td>
                          {broker1
                            ? broker1.otherCharges.autoSquareOffCharges
                            : ""}{" "}
                        </td>
                        <td>
                          {broker2
                            ? broker2.otherCharges.autoSquareOffCharges
                            : ""}{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>Call & Trade</td>
                        <td>{broker1 ? broker1.otherCharges.callTrade : ""}</td>
                        <td>{broker2 ? broker2.otherCharges.callTrade : ""}</td>
                      </tr>
                      <tr>
                        <td>DP Charges</td>
                        <td>{broker1 ? broker1.otherCharges.dpCharges : ""}</td>
                        <td>{broker2 ? broker2.otherCharges.dpCharges : ""}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* Complaints Chart */}
              <div className="card-shadow mt-5" id="Complaints">
                <h3>Complaints</h3>
                <div className="chart_box">
                  {hasScrolled && (
                    <ChartList
                      labels={complaintsabels}
                      datasets={complaintsChartData.datasets}
                      chartType="line"
                    />
                  )}
                </div>
              </div>

              <div id="share-holding"></div>
              {broker1.shareholders &&
                broker1.shareholders.length &&
                broker2.shareholders &&
                broker2.shareholders.length > 0 && (
                  <div id="share-holding" className="mt-4">
                    <h3>Shareholding Patterns</h3>

                    {broker1.shareholders &&
                      broker1.shareholders.length > 0 && (
                        <div
                          className="card-shadow mt-5 basic-charges"
                          id="share-holding"
                        >
                          <div className="d-flex align-items-center">
                            <img
                              src={broker1.logo}
                              alt=""
                              className="brand_logo_i"
                              style={{
                                height: 47,
                                width: 47,
                                borderRadius: "50%",
                                padding: "4px",
                                objectFit: "containe",
                                background: "#eee",
                                border: "1px solid #d5d3d3",
                              }}
                            />
                            <h6 className="ms-2">{broker1.name}</h6>
                          </div>
                          <div className="round_chart_box_compare">
                            {hasScrolled && (
                              <ChartListRound
                                labels={shareholderLabels1}
                                datasets={shareholderDataset1}
                                chartType="doughnut"
                              />
                            )}
                          </div>
                        </div>
                      )}

                    {broker2.shareholders &&
                      broker2.shareholders.length > 0 && (
                        <div
                          className="card-shadow mt-5 basic-charges"
                          id="share-holding"
                        >
                          <div className="d-flex align-items-center">
                            <img
                              src={broker2.logo}
                              alt=""
                              className="brand_logo_i"
                              style={{
                                height: 47,
                                width: 47,
                                borderRadius: "50%",
                                padding: "4px",
                                objectFit: "containe",
                                background: "#eee",
                                border: "1px solid #d5d3d3",
                              }}
                            />
                            <h6 className="ms-2">{broker2.name}</h6>
                          </div>
                          <div>
                            <div className="round_chart_box_compare">
                              {hasScrolled && (
                                <ChartListRound
                                  labels={shareholderLabels2}
                                  datasets={shareholderDataset2}
                                  chartType="doughnut"
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                  </div>
                )}

              <div id="pro-cons"></div>
              {broker1.pros &&
                broker1.pros.length > 0 &&
                broker1.cons &&
                broker1.cons.length > 0 &&
                broker2.pros &&
                broker2.pros.length > 0 &&
                broker2.cons &&
                broker2.cons.length > 0 && (
                  <div className="basic-charges pt-5 pro-cons" id="pro-cons">
                    <h3>Pro & Cons</h3>
                    <div className="table-responsive table-ui position-relative pt-5 ">
                      <table className="table table-striped table-bordered">
                        <thead>
                          <img
                            src={broker1.logo}
                            alt=""
                            className="compare-logo pro_logo"
                          />
                          <tr>
                            <th
                              scope="col"
                              className="text-center First-col-wid"
                              style={{
                                background: `linear-gradient(278deg, ${gradientColor[0]} 11.18%, ${gradientColor[1]})`,
                              }}
                            >
                              Pro
                            </th>
                            <th
                              scope="col"
                              className="text-center First-col-wid"
                              style={{ background: `${broker1.brandColor}` }}
                            >
                              Cons
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {broker1 ? (
                            <tr>
                              <td style={{ position: "relative" }}>
                                <ul className="list-unstyled mb-0">
                                  {broker1.pros.map((pro, index) => (
                                    <li key={index}>
                                      <span style={{ textAlign: "justify" }}>
                                        {" "}
                                        {pro}{" "}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </td>
                              <td style={{ position: "relative" }}>
                                <ul className="list-unstyled mb-0">
                                  {broker1.cons.map((con, index) => (
                                    <li key={index}>{con}</li>
                                  ))}
                                </ul>
                              </td>
                            </tr>
                          ) : null}
                        </tbody>
                      </table>
                    </div>
                    <div className="table-responsive table-ui mt-4 position-relative pt-5">
                      <table className="table table-striped table-bordered">
                        <thead>
                          <img
                            src={broker2.logo}
                            alt=""
                            className="compare-logo pro_logo"
                          />
                          <tr>
                            <th
                              scope="col"
                              className="text-center First-col-wid"
                              style={{
                                background: `linear-gradient(278deg, ${gradientColor1[0]} 11.18%, ${gradientColor1[1]})`,
                              }}
                            >
                              Pro
                            </th>
                            <th
                              scope="col"
                              className="text-center First-col-wid"
                              style={{ background: `${broker2.brandColor}` }}
                            >
                              Cons
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {broker2 ? (
                            <tr>
                              <td style={{ position: "relative" }}>
                                <ul className="list-unstyled mb-0">
                                  {broker2.pros.map((pro, index) => (
                                    <li key={index}>{pro}</li>
                                  ))}
                                </ul>
                              </td>
                              <td style={{ position: "relative" }}>
                                <ul className="list-unstyled mb-0">
                                  {broker2.cons.map((con, index) => (
                                    <li key={index}>{con}</li>
                                  ))}
                                </ul>
                              </td>
                            </tr>
                          ) : null}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              <div className="open-demat mt-5">
                <div className="row align-items-center">
                  <div className="col-md-7">
                    <h2>
                      Open a free demat account with <span>{broker1.name}</span>{" "}
                      broker and get a free stock market course worth Rs. 21,700
                      now
                    </h2>
                    <Link
                      href={broker1.url}
                      className="  text-decoration-none site_btn mt-4"
                    >
                      Open Demat Account
                    </Link>
                  </div>
                  <div className="col-md-5">
                    <DefaultImage
                      loading="lazy"
                      src={Files?.singleBroker?.creator}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div id="financial"></div>
              {broker1.financialStatus.expense.length > 0 &&
                broker1.financialStatus.profitLoss.length > 0 &&
                broker1.financialStatus.revenue.length > 0 &&
                broker2.financialStatus.expense.length > 0 &&
                broker2.financialStatus.profitLoss.length > 0 &&
                broker2.financialStatus.revenue.length > 0 && (
                  <div className="card-shadow mt-5" id="financial">
                    <h3>Financial Status</h3>
                    <div className=" ">
                      {/* <ChartListRound
                        labels={financialChartData.labels}
                        datasets={financialChartData.datasets}
                        chartType="bar"
                        bool={true}
                      /> */}
                      {hasScrolled && (
                        <BarChart
                          labels={financialChartData.labels}
                          datasets={financialChartData.datasets}
                          chartType="bar"
                          bool={true}
                        />
                      )}
                    </div>
                  </div>
                )}

              {broker1.ratings.platformRating &&
                broker2.ratings.platformRating && (
                  <div className="rating basic-charges mt-5" id="rating">
                    <h3 className="mb-1">Ratings</h3>
                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                      <div className="rating-card text-center">
                        <img
                          loading="lazy"
                          src={broker1.logo}
                          alt=""
                          className="brand_logo_i mb-2 mx-auto"
                        />
                        <h4 style={{ fontSize: 26, fontWeight: 800 }}>
                          {broker1.name}
                        </h4>
                        {/* <img loading="lazy" src={`/${broker1.ratings.platformRating}.svg`} alt="" className='star'/><br/> */}
                        {/* <RatingStars rating={broker1.ratings.platformRating} starType={2} NameStar='starWidth' /> */}
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <Rating
                            name="platform-rating"
                            value={broker1.ratings.platformRating}
                            precision={0.1}
                            size="large"
                            readOnly
                            sx={{
                              "& .MuiRating-iconFilled": {
                                color: "#FFC107",
                                fontSize: "32px",
                              },
                              "& .MuiRating-iconEmpty": {
                                color: "#CCCCCC",
                                fontSize: "32px", // Unfilled star color
                              },
                            }}
                          />
                        </div>
                        <span className="d-block mt-2">
                          ({broker1.ratings.platformRating}/5.0 ratings)
                        </span>

                        <div className="my-3">
                          <hr />
                        </div>
                        <ul className="list-unstyled mb-0">
                          <li>
                            <span>Trust Factor</span>
                            {/* <RatingStars rating={broker1.ratings?.trustFactorRating || 0} starType={2} /> */}
                            {/* <ReactStars
  count={5}
  value={broker1.ratings?.trustFactorRating} // Set the fixed value here
  size={18}
  activeColor="#FFC107"
  isHalf
  edit={false} // Disable user interaction
  starType={2}
/>  */}
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                              }}
                            >
                              <Rating
                                name="platform-rating"
                                defaultValue={
                                  broker1?.ratings?.trustFactorRating
                                }
                                max={Math.ceil(
                                  broker1.ratings.trustFactorRating
                                )}
                                precision={0.1}
                                size="large"
                                readOnly
                                sx={{
                                  "& .MuiRating-iconFilled": {
                                    color: "#FFC107",
                                    fontSize: "20px",
                                  },
                                  "& .MuiRating-iconEmpty": {
                                    color: "#CCCCCC",
                                    fontSize: "20px", // Unfilled star color
                                  },
                                }}
                                style={{
                                  alignSelf: "flex-end",
                                  transform: "rotate(180deg)",
                                }}
                              />
                            </div>
                          </li>
                          <li>
                            <span>Ease of Use</span>
                            {/* <RatingStars rating={broker1.ratings?.easeOfUseRating || 0} starType={2} /> */}
                            {/* <ReactStars
  count={5}
  value={broker1.ratings?.easeOfUseRating} // Set the fixed value here
  size={18}
  activeColor="#FFC107"
  edit={false}
  isHalf
   // Disable user interaction
/>  */}
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                              }}
                            >
                              <Rating
                                name="platform-rating"
                                defaultValue={broker1?.ratings?.easeOfUseRating}
                                max={Math.ceil(broker1.ratings.easeOfUseRating)}
                                precision={0.1}
                                size="large"
                                readOnly
                                sx={{
                                  "& .MuiRating-iconFilled": {
                                    color: "#FFC107",
                                    fontSize: "20px",
                                  },
                                  "& .MuiRating-iconEmpty": {
                                    color: "#CCCCCC",
                                    fontSize: "20px", // Unfilled star color
                                  },
                                }}
                                style={{
                                  alignSelf: "flex-end",
                                  transform: "rotate(180deg)",
                                }}
                              />
                            </div>
                          </li>
                          <li>
                            <span>Technology</span>

                            <div
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                              }}
                            >
                              <Rating
                                name="platform-rating"
                                defaultValue={
                                  broker1?.ratings?.technologyRating
                                }
                                max={Math.ceil(
                                  broker1.ratings.technologyRating
                                )}
                                precision={0.1}
                                size="large"
                                readOnly
                                sx={{
                                  "& .MuiRating-iconFilled": {
                                    color: "#FFC107",
                                    fontSize: "20px",
                                  },
                                  "& .MuiRating-iconEmpty": {
                                    color: "#CCCCCC",
                                    fontSize: "20px", // Unfilled star color
                                  },
                                }}
                                style={{
                                  alignSelf: "flex-end",
                                  transform: "rotate(180deg)",
                                }}
                              />
                            </div>
                          </li>
                        </ul>
                        <Link
                          href={broker1.url}
                          className="d-none d-sm-block text-decoration-none site_btn mt-4"
                        >
                          Open Demat Account
                        </Link>
                      </div>
                      <div className="rating-card text-center">
                        <img
                          loading="lazy"
                          src={broker2.logo}
                          alt=""
                          className="brand_logo_i mb-2 mx-auto"
                        />
                        <h4 style={{ fontSize: 26, fontWeight: 800 }}>
                          {broker2.name}
                        </h4>

                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          {" "}
                          <Rating
                            name="platform-rating"
                            value={broker2?.ratings?.platformRating}
                            precision={0.1}
                            size="large"
                            readOnly
                            sx={{
                              "& .MuiRating-iconFilled": {
                                color: "#FFC107",
                                fontSize: "32px",
                              },
                              "& .MuiRating-iconEmpty": {
                                color: "#CCCCCC",
                                fontSize: "32px", // Unfilled star color
                              },
                            }}
                          />
                        </div>

                        <span className="d-block mt-2">
                          ({broker2.ratings.platformRating}/5.0 ratings)
                        </span>
                        <div className="my-3">
                          <hr />
                        </div>
                        <ul className="list-unstyled mb-0">
                          <li>
                            <span>Trust Factor</span>

                            <div
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                              }}
                            >
                              <Rating
                                name="platform-rating"
                                defaultValue={
                                  broker2?.ratings?.trustFactorRating
                                }
                                max={Math.ceil(
                                  broker2.ratings.trustFactorRating
                                )}
                                precision={0.1}
                                size="large"
                                readOnly
                                sx={{
                                  "& .MuiRating-iconFilled": {
                                    color: "#FFC107",
                                    fontSize: "20px",
                                  },
                                  "& .MuiRating-iconEmpty": {
                                    color: "#CCCCCC",
                                    fontSize: "20px", // Unfilled star color
                                  },
                                }}
                                style={{
                                  alignSelf: "flex-end",
                                  transform: "rotate(180deg)",
                                }}
                              />
                            </div>
                          </li>
                          <li>
                            <span>Ease of Use</span>

                            <div
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                              }}
                            >
                              <Rating
                                name="platform-rating"
                                defaultValue={broker2?.ratings?.easeOfUseRating}
                                max={Math.ceil(broker2.ratings.easeOfUseRating)}
                                precision={0.1}
                                size="large"
                                readOnly
                                sx={{
                                  "& .MuiRating-iconFilled": {
                                    color: "#FFC107",
                                    fontSize: "20px",
                                  },
                                  "& .MuiRating-iconEmpty": {
                                    color: "#CCCCCC",
                                    fontSize: "20px", // Unfilled star color
                                  },
                                }}
                                style={{
                                  alignSelf: "flex-end",
                                  transform: "rotate(180deg)",
                                }}
                              />
                            </div>
                          </li>
                          <li>
                            <span>Technology</span>

                            <div
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                              }}
                            >
                              <Rating
                                name="platform-rating"
                                defaultValue={
                                  broker2?.ratings?.technologyRating
                                }
                                max={Math.ceil(
                                  broker2.ratings.technologyRating
                                )}
                                precision={0.1}
                                size="large"
                                readOnly
                                sx={{
                                  "& .MuiRating-iconFilled": {
                                    color: "#FFC107",
                                    fontSize: "20px",
                                  },
                                  "& .MuiRating-iconEmpty": {
                                    color: "#CCCCCC",
                                    fontSize: "20px", // Unfilled star color
                                  },
                                }}
                                style={{
                                  alignSelf: "flex-end",
                                  transform: "rotate(180deg)",
                                }}
                              />
                            </div>
                          </li>
                        </ul>
                        <Link
                          href={broker2.url}
                          className="d-none d-sm-block text-decoration-none site_btn mt-4"
                        >
                          Open Demat Account
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ComparingBrokers;
