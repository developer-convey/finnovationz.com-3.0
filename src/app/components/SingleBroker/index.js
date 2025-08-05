import React, { useEffect, useState } from "react";
import "./SingleBroker.css";
import ReactStars from "react-rating-stars-component";
import Sidebar from "../Sidebar";
import Modal from '../modalComponent/modal';
import Link from "next/link";
import dynamic from "next/dynamic";
import Files from "@/config/file";
import DefaultImage from "../DefaultImage";

const ChartList = dynamic(() => import("../ChartListround"), {
  ssr: false,
  loading: () => <p> </p>,
});
const StickySingleBroker = dynamic(() => import("./StickySingleBroker"), {
  ssr: false,
  loading: () => <p> </p>,
});

function SingleBroker({ data, hasScrolled }) {
  const [isShown, setIsShown] = useState(true);
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
      if (window.innerWidth > 500) {
        setIsShown(typeof window !== "undefined" && window.scrollY <= 200);
      } else {
        setIsShown(typeof window !== "undefined" && window.scrollY <= 240);
      }
    };

    handleScroll(); // Initial call to handleScroll to set the initial state based on the current scroll position

    typeof window !== "undefined" &&
      window.addEventListener("scroll", handleScroll);

    return () => {
      typeof window !== "undefined" &&
        window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  // Generate gradient with provided color and a transparent version
  const gradientColor = data.brandColor
    ? [data.brandColor, hexToRgba(data.brandColor, 0.6)]
    : ["#ffffff", "#ffffff"]; // Default to white if no color provided

  const activeUsersData = data
    ? data.activeUsers.map((item) => ({
        year: item.year,
        count: item.count,
      }))
    : "";

  const labels = activeUsersData
    ? activeUsersData.map((item) => item.year)
    : "";
  const dataValues = activeUsersData
    ? activeUsersData.map((item) => item.count)
    : "";
  const datasets = [
    {
      label: "Active Users",
      data: dataValues,
      fill: false,
      borderColor: data.brandColor,
      backgroundColor: data.brandColor,
      tension: 0.5,
      borderCapStyle: "round",
    },
  ];

  const financialStatusData = data ? data.financialStatus : null;

  // Extracting labels and data for financial status
  const financialLabels = financialStatusData
    ? financialStatusData.revenue.map((item) => item.year)
    : null;
  const revenueData = financialStatusData
    ? financialStatusData.revenue.map((item) => item.count)
    : null;
  const expenseData = financialStatusData
    ? financialStatusData.expense.map((item) => item.count)
    : null;
  const profitLossData = financialStatusData
    ? financialStatusData.profitLoss.map((item) => item.count)
    : null;

  // Function to create gradient color
  const createGradient = (color) => {
    if (typeof document !== "undefined") {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const gradient = ctx.createLinearGradient(0, 0, 0, 600); // Adjust the gradient dimensions as needed
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      return gradient;
    } else {
      // Return a default value or handle the case where document is not available
      return null; // or throw an error, return a fallback, etc.
    }
  };

  // Dataset for financial status
  const financialDatasets = [
    {
      label: "Revenue",
      data: revenueData,
      backgroundColor: createGradient("#36B368"),
    },
    {
      label: "Expense",
      data: expenseData,
      backgroundColor: createGradient("#FF5733"),
    },
    {
      label: "Profit/Loss",
      data: profitLossData,
      backgroundColor: createGradient("#36A2EB"),
    },
  ];
  if (!data || !data.shareholders) {
    // Return null or some fallback content if data or data.shareholders is not available
    return null;
  }

  const shareholderLabels = data.shareholders.map(
    (shareholder) => `${shareholder.shares}% ${shareholder.name} `
  );
  const shareholderShares = data.shareholders.map(
    (shareholder) => shareholder.shares
  );

  const shareholderDataset = [
    {
      label: "Shareholders",
      data: shareholderShares,
      backgroundColor: [
        "#FAC265",
        "#008F75",
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
      {data ? (
        <section className="top_spacing">
          <div
            style={{
              height: 800,
              background:
                "linear-gradient(179.53deg, rgba(55, 131, 216, 0.12) -7%, rgba(49, 192, 178, 0.12) 54.02%, rgba(49, 192, 178, 0) 76.02%)",
              position: "absolute",
              zIndex: "",
              width: "100vw",
              top:30
            }}>
            </div>
          <div className="container" style={{ marginTop: "10px" }}>
            <div className="row">
              <div className="col-lg-3 col-md-4 d-none d-lg-block">
                <Sidebar broker1={data} />
              </div>
              <div className="col-lg-9 " style={{ zIndex: 1 }}>
                <div className="d-lg-flex flex-wrap align-items-center justify-content-between card-shadow paddingLeft">
                  <div className="d-lg-flex align-items-center rating single_broker_banner">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <img
                        loading="lazy"
                        src={data.logo}
                        alt=""
                        className="brand_logo_i"/>
                    </div>
                    <div className="text-start ms-3 " style={{ lineHeight: 1 }}>
                      <div className="single_btoker_name">
                        <h1 className="mb-1">{data.name}</h1>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          gap: 5,
                          alignItems: "center",
                          justifyContent: "center",
                        }}>
                        <span>
                          {/* <img src={`/${data.ratings.platformRating}.svg`} alt="" srcset=""/> */}
                          <ReactStars
                            count={5}
                            value={data.ratings.platformRating} // Set the fixed value here
                            size={25}
                            activeColor="#FFC107"
                            isHalf={true}
                            edit={false} // Disable user interaction
                          />
                        </span>
                        <span className="" style={{ marginTop: 3 }}>
                          ({data.ratings.platformRating}/5.0 ratings)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Link
                      href={data.url}
                      className="site_btn text-decoration-none mt-4 mt-lg-0 d-inline-block"
                    >
                      Open Demat Account
                    </Link>
                  </div>
                </div>

                {!isShown && <StickySingleBroker data={data} />}

                {data.activeUsers && data.activeUsers.length > 0 && (
                  <div className="card-shadow mt-5 basic-charges">
                    <h3>Active User</h3>
                    <div className="chart_box">
                      <ChartList
                        bool={true}
                        labels={labels}
                        datasets={datasets}
                        chartType="line"
                        firstChartBoll={true}
                      />
                    </div>
                  </div>
                )}

                <div>
                  {data.annualCharges && data.accountOpenCharges ? (
                    <div className="basic-charges pt-5" id="basic-charges">
                      <h3>Basic Charges</h3>
                      <div className="table-responsive table-ui">
                        <table className="table table-striped table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">Charges</th>
                              <th scope="col">{data.name}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Account Opening Charges</td>
                              {data.accountOpenCharges ? (
                                <td>{data.accountOpenCharges}</td>
                              ) : (
                                ""
                              )}
                            </tr>
                            <tr>
                              <td>Annual Maintenance Charges</td>
                              {data.annualCharges ? (
                                <td>{data.annualCharges}</td>
                              ) : (
                                ""
                              )}
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                {/* <div className="open-demat mt-5">
                                <div className="row align-items-center">
                                    <div className="col-md-7">
                                        <h2>Open a free demat account with <span>{data.name}</span> broker and get a free stock market course worth Rs. 3999 now</h2>
                                         <Link href={data.url} className='site_btn text-decoration-none'>Open Demat Account</Link>
                                    </div>
                                    <div className="col-md-5">
                                        <img loading="lazy" src="/creator.png" alt="" />
                                    </div>
                                </div>
                                

                            </div> */}

                {data ? (
                  data.brokerCharges.intraday ? (
                    <div className="basic-charges pt-5" id="charges">
                      <h3>Brokerage Charges</h3>
                      <div className="table-responsive table-ui">
                        <table className="table table-striped table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">Brokerage Charges</th>
                              <th scope="col">{data.name}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Intraday</td>
                              <td>{data ? data.brokerCharges.intraday : ""}</td>
                            </tr>
                            <tr>
                              <td>Delivery</td>
                              <td>{data ? data.brokerCharges.delivery : ""}</td>
                            </tr>
                            <tr>
                              <td>Options</td>
                              <td>{data ? data.brokerCharges.options : ""}</td>
                            </tr>
                            <tr>
                              <td>Futures</td>
                              <td>{data ? data.brokerCharges.futures : ""}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
                {data ? (
                  data.otherCharges.autoSquareOffCharges ? (
                    <div className="basic-charges pt-5">
                      <h3>Hidden Charges</h3>
                      <div className="table-responsive table-ui">
                        <table className="table table-striped table-bordered">
                          <thead>
                            <tr>
                              <th scope="col"> Charges</th>
                              <th scope="col">{data.name}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Auto Square Off</td>
                              <td>
                                {data
                                  ? data.otherCharges.autoSquareOffCharges
                                  : ""}{" "}
                              </td>
                            </tr>
                            <tr>
                              <td>Call & Trade</td>
                              <td>{data ? data.otherCharges.callTrade : ""}</td>
                            </tr>
                            <tr>
                              <td>DP Charges</td>
                              <td>{data ? data.otherCharges.dpCharges : ""}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
                {data.complaints && data.complaints.length > 0 && (
                  <div
                    className="card-shadow mt-5 basic-charges"
                    id="Complaints"
                  >
                    <h3>Complaints</h3>
                    <div className="chart_box">
                      {hasScrolled && (
                        <ChartList
                          labels={data.complaints.map((item) => item.year)}
                          datasets={[
                            {
                              label: "Complaints",
                              data: data.complaints.map((item) => item.count),
                              tension: 0.5,
                              borderColor: data.brandColor,
                              backgroundColor: data.brandColor,
                            },
                          ]}
                          chartType="line"
                          bool={true}
                        />
                      )}
                    </div>
                  </div>
                )}

                {data.shareholders && data.shareholders.length > 0 && (
                  <div
                    className="card-shadow mt-5 basic-charges"
                    id="share-holding"
                  >
                    <h3>Shareholding Patterns</h3>
                    <div className="round_chart_box">
                      {hasScrolled && (
                        <ChartList
                          labels={shareholderLabels}
                          datasets={shareholderDataset}
                          chartType="doughnut"
                        />
                      )}
                    </div>
                  </div>
                )}

                <div className="open-demat mt-5">
                  <div className="row align-items-center">
                    <div className="col-md-7">
                      <h2>
                        Open a free demat account with <span>{data.name}</span>{" "}
                        broker and get a free stock market course worth Rs.
                        21,700 now
                      </h2>
                      <Link
                        href={data.url}
                        className="site_btn text-decoration-none"
                      >
                        Open Demat Account
                      </Link>
                    </div>
                    <div className="col-md-5 d-flex justify-center">
                      <DefaultImage
                        loading="lazy"
                        src={Files?.singleBroker?.creator}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                {data.pros &&
                  data.pros.length > 0 &&
                  data.cons &&
                  data.cons.length > 0 && (
                    <div className="basic-charges pt-5 pro-cons" id="pro-cons">
                      <h3>Pro & Cons</h3>
                      <div className="table-responsive table-ui">
                        <table className="table table-striped table-bordered">
                          <thead>
                            <tr>
                              <th
                                scope="col"
                                style={{
                                  background: `linear-gradient(278deg, ${gradientColor[0]} 11.18%, ${gradientColor[1]})`,
                                }}
                              >
                                Pro
                              </th>
                              <th
                                scope="col"
                                style={{ background: `${data.brandColor}` }}
                              >
                                Cons
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {data ? (
                              <tr>
                                <td>
                                  <ul className="list-unstyled mb-0">
                                    {data.pros.map((pro, index) => (
                                      <li key={index}>{pro}</li>
                                    ))}
                                  </ul>
                                </td>
                                <td>
                                  <ul className="list-unstyled mb-0">
                                    {data.cons.map((con, index) => (
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
                {data.financialStatus &&
                  data.financialStatus.expense.length > 0 &&
                  data.financialStatus.profitLoss.length > 0 &&
                  data.financialStatus.revenue.length > 0 && (
                    <div
                      className="card-shadow mt-5 basic-charges"
                      id="financial"
                    >
                      <h3>Financial Status</h3>
                      <div className="chart_box">
                        {hasScrolled && (
                          <ChartList
                            labels={financialLabels}
                            datasets={financialDatasets}
                            chartType="bar"
                            bool={true}
                          />
                        )}
                      </div>
                    </div>
                  )}

                {data.ratings && (
                  <div
                    className="rating basic-charges mt-5 lg:block hidden"
                    id="rating"
                  >
                    <h3 className="mb-1">Ratings</h3>
                    <div className="d-flex flex-wrap align-items-center justify-content-between rating-card">
                      <div className=" ">
                        <div>
                          <img
                            height="47"
                            width="47"
                            src={data.logo}
                            alt=""
                            className="brand_logo_i mb-2"
                          />
                        </div>
                        <h4 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                          {data.name}
                        </h4>
                        {/* <img src={`/${data.ratings.platformRating}.svg`} alt="" className='star'/><br/> */}
                        {/* <RatingStars rating={data.ratings.platformRating} starType={2} NameStar='starWidth' /> */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            flexDirection: "row-reverse",
                          }}
                        >
                          <ReactStars
                            count={5}
                            value={data.ratings.platformRating} // Set the fixed value here
                            size={38}
                            color="#cccccc" // Change star color
                            activeColor="#FFC107"
                            isHalf={true}
                            edit={false} // Disable user interaction
                          />
                        </div>

                        <span className="mt-2 d-block">
                          ({data.ratings.platformRating}/5.0 ratings)
                        </span>
                      </div>
                      <img
                        src="/Vector 213.png"
                        style={{
                          height: "90%",
                          width: "1px",
                          position: "relative",
                          left: "30px",
                        }}
                        alt=""
                      />
                      <div style={{ width: "50%" }}>
                        <ul className="list-unstyled mb-0">
                          <li>
                            <span style={{ fontSize: 18, fontWeight: 700 }}>
                              Trust Factor
                            </span>
                            {/* <RatingStars rating={data.ratings?.trustFactorRating || 0} starType={2} />
                             */}
                            <ReactStars
                              count={5}
                              value={data.ratings?.trustFactorRating} // Set the fixed value here
                              size={20}
                              color="#cccccc"
                              activeColor="#FFC107"
                              isHalf={true}
                              edit={false} // Disable user interaction
                              classNames="reverse-stars"
                            />
                          </li>
                          <li>
                            <span style={{ fontSize: 18, fontWeight: 700 }}>
                              Ease of Use
                            </span>
                            <ReactStars
                              count={5}
                              value={data.ratings?.easeOfUseRating} // Set the fixed value here
                              size={20}
                              color="#cccccc"
                              activeColor="#FFC107"
                              isHalf={true}
                              edit={false}
                              classNames="reverse-stars"
                              // Disable user interaction
                            />
                            {/* <RatingStars rating={data.ratings?.easeOfUseRating || 0} starType={2} /> */}
                          </li>
                          <li>
                            <span style={{ fontSize: 18, fontWeight: 700 }}>
                              Technology
                            </span>
                            <ReactStars
                              count={5}
                              value={data.ratings?.technologyRating} // Set the fixed value here
                              size={20}
                              activeColor="#FFC107"
                              color="#cccccc"
                              isHalf={true}
                              edit={false} // Disable user interaction
                              classNames="reverse-stars"
                            />
                            {/* <RatingStars rating={data.ratings?.technologyRating || 0} starType={2} /> */}
                          </li>
                        </ul>
                        <div
                          className="mt-4"
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <Link
                            href={data.url}
                            className="site_btn text-decoration-none"
                          >
                            Open Demat Account
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {data.ratings && (
                  <div
                    className="rating basic-charges mt-5 lg:hidden"
                    id="rating"
                  >
                    <h3 className="mb-1">Ratings</h3>
                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                      <div className="rating-card text-center">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <img
                            height="47"
                            width="47"
                            src={data.logo}
                            alt=""
                            className="brand_logo_i mb-2"
                          />
                        </div>
                        <h4 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                          {data.name}
                        </h4>
                        {/* <img src={`/${data.ratings.platformRating}.svg`} alt="" className='star'/><br/> */}
                        {/* <RatingStars rating={data.ratings.platformRating} starType={2} NameStar='starWidth' /> */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <ReactStars
                            count={5}
                            value={data.ratings.platformRating} // Set the fixed value here
                            size={34}
                            activeColor="#FFC107"
                            isHalf={true}
                            edit={false} // Disable user interaction
                          />
                        </div>

                        <span className="mt-2 d-block">
                          ({data.ratings.platformRating}/5.0 ratings)
                        </span>

                        <hr style={{ margin: "20px 0px" }} />
                        <ul className="list-unstyled mb-0">
                          <li>
                            <span>Trust Factor</span>
                            {/* <RatingStars rating={data.ratings?.trustFactorRating || 0} starType={2} />
                             */}
                            <ReactStars
                              count={5}
                              value={data.ratings?.trustFactorRating} // Set the fixed value here
                              size={15}
                              activeColor="#FFC107"
                              isHalf={true}
                              edit={false} // Disable user interaction
                            />
                          </li>
                          <li>
                            <span>Ease of Use</span>
                            <ReactStars
                              count={5}
                              value={data.ratings?.easeOfUseRating} // Set the fixed value here
                              size={15}
                              activeColor="#FFC107"
                              isHalf={true}
                              edit={false} // Disable user interaction
                            />
                            {/* <RatingStars rating={data.ratings?.easeOfUseRating || 0} starType={2} /> */}
                          </li>
                          <li>
                            <span>Technology</span>
                            <ReactStars
                              count={5}
                              value={data.ratings?.technologyRating} // Set the fixed value here
                              size={15}
                              activeColor="#FFC107"
                              isHalf={true}
                              edit={false} // Disable user interaction
                            />
                            {/* <RatingStars rating={data.ratings?.technologyRating || 0} starType={2} /> */}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default SingleBroker;
