import React, { useState, useEffect } from "react";

import ReactStars from "react-rating-stars-component";
import axios from "axios";
import Link from "next/link";
import Files from "@/config/file";
import DefaultImage from "../DefaultImage";

function CompareBroker() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BROKER_API_URL}/api/broker`
        );
        setData(response.data?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const Upstoxrating = data[0]?.ratings?.platformRating;
  const anglerating = data[1]?.ratings?.platformRating;
  const growrating = data[2]?.ratings?.platformRating;

  const Zerodharating = data[17]?.ratings?.platformRating;

  return (
    <>
      <section className="compare_broker">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="mb-3">Most Compared Brokers</h2>
              <p className="mb-0 fw-normal text-center">
                These are some comparisons to start with choose from the most{" "}
                <br className="d-none d-xl-block" /> compared brokers by finnovationz
              </p>
              <ul className="compare_list mt-4 ps-0">
                <li className="d-flex flex-wrap  align-items-center justify-content-center justify-content-lg-between mb-3">
                  <div className="d-sm-flex align-items-center broker_column_box">
                    <Link href="/top-stock-brokers-in-india/zerodha">
                      <DefaultImage
                        loading="lazy"
                        src={Files?.brokerLandingPage?.Zeerodha}
                        alt=""
                      />
                    </Link>
                    <div className="text-start ms-sm-3">
                      <div className="h6 mb-1 lg:text-center text-sm-start">
                        <Link href="/top-stock-brokers-in-india/zerodha">
                          Zerodha
                        </Link>
                      </div>
                      <div className="flex-wrap d-flex justify-content-sm-start lg:justify-content-center align-items-center">
                        {" "}
                        <span>
                          {Zerodharating ? (
                            <ReactStars
                              count={5}
                              value={Zerodharating} // Set the fixed value here
                              size={22}
                              isHalf={true}
                              activeColor="#FFC107"
                              edit={false} // Disable user interaction
                              starType={2}
                            />
                          ) : null}{" "}
                        </span>
                        <span className="ms-lg-3">
                          ({Zerodharating}/5.0 ratings)
                        </span>
                      </div>
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="/vs.svg"
                    alt="v/s"
                    title="v/s"
                    className="vs-img"
                  />
                  <div className="d-sm-flex align-items-center broker_column_box">
                    <Link
                      href="/top-stock-brokers-in-india/upstox"
                      className="flex justify-end"
                    >
                      <DefaultImage
                        loading="lazy"
                        src={Files?.brokerLandingPage?.upstox}
                        alt=""
                      />
                    </Link>
                    <div className=" text-end text-sm-start ms-sm-3">
                      <div className="h6 mb-1 lg:text-center text-sm-start">
                        <Link href="/top-stock-brokers-in-india/upstox">
                          Upstox
                        </Link>
                      </div>
                      <div className="flex-wrap d-flex justify-content-sm-start lg:justify-content-center justify-content-end align-items-center">
                        <span>
                          {" "}
                          {Upstoxrating ? (
                            <ReactStars
                              count={5}
                              value={Upstoxrating} // Set the fixed value here
                              size={22}
                              isHalf={true}
                              activeColor="#FFC107"
                              edit={false} // Disable user interaction
                            />
                          ) : null}{" "}
                        </span>
                        <span className="ms-lg-3">
                          ({Upstoxrating}/5.0 ratings)
                        </span>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/compare-broker/Zerodha-vs-Upstox"
                    className="site_btn text-decoration-none px-4 ms-3"
                  >
                    Compare Now
                  </Link>
                </li>
                <li className="d-flex flex-wrap  align-items-center justify-content-center justify-content-lg-between mb-3">
                  <div className="d-sm-flex align-items-center broker_column_box">
                    <Link href="/top-stock-brokers-in-india/angel-one">
                      <DefaultImage
                        loading="lazy"
                        src={Files?.brokerLandingPage?.angle}
                        alt=""
                      />
                    </Link>
                    <div className="text-end text-sm-start ms-sm-3">
                      <div className="h6 mb-1 text-left lg:text-center text-sm-start">
                        <Link href="/top-stock-brokers-in-india/angel-one">
                          Angel One
                        </Link>
                      </div>
                      <div className="flex-wrap d-flex justify-content-sm-start lg:justify-content-center align-items-center">
                        {" "}
                        <span>
                          {" "}
                          {anglerating ? (
                            <ReactStars
                              count={5}
                              value={anglerating} // Set the fixed value here
                              size={22}
                              isHalf={true}
                              activeColor="#FFC107"
                              edit={false} // Disable user interaction
                            />
                          ) : null}{" "}
                        </span>
                        <span className="ms-lg-3">
                          ({anglerating}/5.0 ratings)
                        </span>
                      </div>
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="/vs.svg"
                    alt="v/s"
                    title="v/s"
                    className="vs-img"
                  />
                  <div className="d-sm-flex align-items-center broker_column_box">
                    <Link
                      href="/top-stock-brokers-in-india/zerodha"
                      className="flex justify-end"
                    >
                      <DefaultImage
                        loading="lazy"
                        src={Files?.brokerLandingPage?.Zeerodha}
                        alt=""
                      />
                    </Link>
                    <div className="text-end text-sm-start  ms-sm-3">
                      <div className="h6 mb-1 lg:text-center text-sm-start">
                        <Link href="/top-stock-brokers-in-india/zerodha">
                          Zerodha
                        </Link>
                      </div>
                      <div className="flex-wrap d-flex justify-content-sm-start lg:justify-content-center justify-content-end  align-items-center">
                        {" "}
                        <span>
                          {" "}
                          {Zerodharating ? (
                            <ReactStars
                              count={5}
                              value={Zerodharating} // Set the fixed value here
                              size={22}
                              isHalf={true}
                              activeColor="#FFC107"
                              edit={false} // Disable user interaction
                            />
                          ) : null}{" "}
                        </span>
                        <span className="ms-lg-3">
                          ({Zerodharating}/5.0 ratings)
                        </span>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/compare-broker/Angel%20One-vs-Zerodha"
                    className="site_btn text-decoration-none px-4 ms-3"
                  >
                    Compare Now
                  </Link>
                </li>
                <li className="d-flex flex-wrap  align-items-center justify-content-center justify-content-lg-between mb-3">
                  <div className="d-sm-flex align-items-center broker_column_box">
                    <Link href="/top-stock-brokers-in-india/angel-one">
                      <DefaultImage
                        loading="lazy"
                        src={Files?.brokerLandingPage?.angle}
                        alt=""
                      />
                    </Link>
                    <div className=" text-start ms-sm-3">
                      <div className="h6 mb-1 lg:text-center text-sm-start">
                        <Link href="/top-stock-brokers-in-india/angel-one">
                          Angel One
                        </Link>
                      </div>
                      <div className="flex-wrap d-flex justify-content-sm-start lg:justify-content-center align-items-center">
                        {" "}
                        <span>
                          {" "}
                          {anglerating ? (
                            <ReactStars
                              count={5}
                              value={anglerating} // Set the fixed value here
                              size={22}
                              isHalf={true}
                              activeColor="#FFC107"
                              edit={false} // Disable user interaction
                            />
                          ) : null}{" "}
                        </span>
                        <span className="ms-lg-3">
                          ({anglerating}/5.0 ratings)
                        </span>
                      </div>
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="/vs.svg"
                    alt="v/s"
                    title="v/s"
                    className="vs-img"
                  />
                  <div className="d-sm-flex align-items-center broker_column_box">
                    <Link
                      href="/top-stock-brokers-in-india/upstox"
                      className="flex justify-end"
                    >
                      <DefaultImage
                        loading="lazy"
                        src={Files?.brokerLandingPage?.upstox}
                        alt=""
                      />
                    </Link>
                    <div className="text-end text-sm-start  ms-sm-3">
                      <div className="h6 mb-1 lg:text-center text-sm-start">
                        <Link href="/top-stock-brokers-in-india/upstox">
                          Upstox
                        </Link>
                      </div>
                      <div className="flex-wrap d-flex justify-content-sm-start lg:justify-content-center justify-content-end align-items-center">
                        {" "}
                        <span>
                          {" "}
                          {Upstoxrating ? (
                            <ReactStars
                              count={5}
                              value={Upstoxrating} // Set the fixed value here
                              size={22}
                              isHalf={true}
                              activeColor="#FFC107"
                              edit={false} // Disable user interaction
                            />
                          ) : null}{" "}
                        </span>
                        <span className="ms-lg-3">
                          ({Upstoxrating}/5.0 ratings)
                        </span>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/compare-broker/Angel%20One-vs-Upstox"
                    className="site_btn text-decoration-none px-4 ms-3"
                  >
                    Compare Now
                  </Link>
                </li>
                <li className="d-flex flex-wrap  align-items-center justify-content-center justify-content-lg-between mb-3">
                  <div className="d-sm-flex align-items-center broker_column_box">
                    <Link href="/top-stock-brokers-in-india/zerodha">
                      <DefaultImage
                        loading="lazy"
                        src={Files?.brokerLandingPage?.Zeerodha}
                        alt=""
                      />
                    </Link>
                    <div className=" text-start ms-sm-3">
                      <div className="h6 mb-1 lg:text-center text-sm-start">
                        <Link href="/top-stock-brokers-in-india/zerodha">
                          Zerodha
                        </Link>
                      </div>
                      <div className="flex-wrap d-flex justify-content-sm-start lg:justify-content-center align-items-center">
                        {" "}
                        <span>
                          {" "}
                          {Zerodharating ? (
                            <ReactStars
                              count={5}
                              value={Zerodharating} // Set the fixed value here
                              size={22}
                              isHalf={true}
                              activeColor="#FFC107"
                              edit={false} // Disable user interaction
                            />
                          ) : null}{" "}
                        </span>
                        <span className="ms-lg-3">
                          ({Zerodharating}/5.0 ratings)
                        </span>
                      </div>
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="/vs.svg"
                    alt="v/s"
                    title="v/s"
                    className="vs-img"
                  />
                  <div className="d-sm-flex align-items-center broker_column_box">
                    <Link
                      href="/top-stock-brokers-in-india/groww"
                      className="flex justify-end"
                    >
                      <img loading="lazy" src="/groww.png" alt="" />
                    </Link>
                    <div className="text-end text-sm-start  ms-sm-3">
                      <div className="h6 mb-1 lg:text-center text-sm-start">
                        <Link href="/top-stock-brokers-in-india/groww">
                          Groww
                        </Link>
                      </div>
                      <div className="flex-wrap d-flex justify-content-sm-start lg:justify-content-center justify-content-end align-items-center">
                        {" "}
                        <span>
                          {" "}
                          {growrating ? (
                            <ReactStars
                              count={5}
                              value={growrating} // Set the fixed value here
                              size={22}
                              isHalf={true}
                              activeColor="#FFC107"
                              edit={false} // Disable user interaction
                            />
                          ) : null}{" "}
                        </span>
                        <span className="ms-lg-3">
                          ({growrating}/5.0 ratings)
                        </span>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/compare-broker/Zerodha-vs-Groww"
                    className="site_btn text-decoration-none px-4 ms-3"
                  >
                    Compare Now
                  </Link>
                </li>
                <li className="d-flex flex-wrap  align-items-center justify-content-center justify-content-lg-between mb-3">
                  <div className="d-sm-flex align-items-center broker_column_box">
                    <Link href="/top-stock-brokers-in-india/groww">
                      <img loading="lazy" src="/groww.png" alt="" />
                    </Link>
                    <div className=" text-start ms-sm-3">
                      <div className="h6 mb-1 lg:text-center text-sm-start">
                        <Link href="/top-stock-brokers-in-india/groww">
                          Groww
                        </Link>
                      </div>
                      <div className="flex-wrap d-flex justify-content-sm-start lg:justify-content-center align-items-center">
                        {" "}
                        <span>
                          {" "}
                          {growrating ? (
                            <ReactStars
                              count={5}
                              value={growrating} // Set the fixed value here
                              size={22}
                              isHalf={true}
                              activeColor="#FFC107"
                              edit={false} // Disable user interaction
                            />
                          ) : null}{" "}
                        </span>
                        <span className="ms-lg-3">
                          ({growrating}/5.0 ratings)
                        </span>
                      </div>
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="/vs.svg"
                    alt="v/s"
                    title="v/s"
                    className="vs-img"
                  />
                  <div className="d-sm-flex align-items-center broker_column_box">
                    <Link
                      href="/top-stock-brokers-in-india/upstox"
                      className="flex justify-end"
                    >
                      <DefaultImage
                        loading="lazy"
                        src={Files?.brokerLandingPage?.upstox}
                        alt=""
                      />
                    </Link>
                    <div className=" text-end text-sm-start  ms-sm-3">
                      <div className="h6 mb-1 lg:text-center text-sm-start">
                        <Link href="/top-stock-brokers-in-india/upstox">
                          Upstox
                        </Link>
                      </div>
                      <div className="flex-wrap d-flex justify-content-sm-start lg:justify-content-center justify-content-end align-items-center">
                        {" "}
                        <span>
                          {Upstoxrating ? (
                            <ReactStars
                              count={5}
                              value={Upstoxrating} // Set the fixed value here
                              size={22}
                              isHalf={true}
                              activeColor="#FFC107"
                              edit={false} // Disable user interaction
                            />
                          ) : null}{" "}
                        </span>
                        <span className="ms-lg-3">
                          ({Upstoxrating}/5.0 ratings)
                        </span>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/compare-broker/Groww-vs-Upstox"
                    className="site_btn text-decoration-none px-4 ms-3"
                  >
                    Compare Now
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CompareBroker;
