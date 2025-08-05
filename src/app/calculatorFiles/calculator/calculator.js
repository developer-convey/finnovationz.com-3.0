"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Form, Row, Select, Space } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, OverlayTrigger, Tooltip } from "react-bootstrap";
import { HEADERS } from "../index";
import { BASE_URL } from "../index";
import CalculatorOutput from "../calculator-output/calculator-output";
import NumberInput from "../number-input/number-input";
import DFC from "../dfc/dfc";
import GradientButton from "./GradientButton";
import style from "./calculator.module.scss";
import Header from "./Header";
import "../assets/styles/global.scss";
import "../assets/styles/common.scss";

export const InputField = () => {
  return (
    <div className={style["input-field"]}>
      <div className={style["text-wrapper"]}>₹25,000</div>
      <div className={style["div"]}>₹</div>
    </div>
  );
};

function CalculatorDcf(props) {
  const [form] = Form.useForm();

  const [custom1, setCustom1] = useState("");
  const [custom2, setCustom2] = useState("");
  const [custom3, setCustom3] = useState("");

  const [initialValues, setInitialValues] = useState({
    fcf: "",
    dr: "12",
    cdr: "",
    gr1: "5",
    gr2: "10",
    cgr1: "",
    cgr2: "",
    isForever: "true",
    tgr: "",
    mcc: "",
    cash: "",
    debt: "",
    currentPrice: "",
    mos: "",
  });
  const [response, setResponse] = useState(null);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(typeof window !== "undefined" && window.innerWidth);
    };

    // Check if window object is defined (client-side)
    if (typeof window !== "undefined") {
      // Set initial window width
      setWindowWidth(window.innerWidth);

      // Add event listener to handle window resize
      window.addEventListener("resize", handleResize);

      // Clean up event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  const onFinish = async (values) => {
    const data = {
      FCF: Number(values?.fcf),
      growthRateFCF1:
        initialValues?.gr1 === "0"
          ? Number(values?.cgr1)
          : Number(initialValues?.gr1),
      growthRateFCF2:
        initialValues?.gr2 === "0"
          ? Number(values?.cgr2)
          : Number(initialValues?.gr2),
      discountRate:
        initialValues?.dr === "0"
          ? Number(values?.cdr)
          : Number(initialValues?.dr),
      terGrowthRate: Number(values?.tgr),
      cash: Number(values?.cash),
      debt: Number(values?.debt),
      MCC: Number(values?.mcc),
      curMarketPrice: Number(values?.currentPrice),
      isForever: initialValues?.isForever === "true",
      mos: Number(values?.mos),
    };
  
    // Validate all required fields
    if (
      data.FCF && data.growthRateFCF1 && data.growthRateFCF2 && data.discountRate &&
      data.terGrowthRate && data.cash && data.debt && data.MCC && data.curMarketPrice &&
      data.mos
    ) {
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_CALCULATOR_API_URL}api/calculate`,
          data,
          {
            headers: HEADERS,
          }
        );
  
        setResponse(res.data?.data);
        return res.data;
      } catch (error) {
        console.error("API Error:", error);
      }
    }
  };
  

  const { Option } = Select;

  const onReset = () => {
    form.resetFields();
  };
  const onChangesProgress = (value) => {
    setInitialValues(value);
  };

  const handleSelectTGR = (name, value) => {
    setInitialValues({ ...initialValues, [name]: value });
  };

  const handleSelectChange = (name, value) => {
    setInitialValues({ ...initialValues, [name]: value });
    if (value === "0") {
      setCustom1(value);
    } else {
      setCustom1("");
    }
  };

  const handleSelectChange2 = (name, value) => {
    setInitialValues({ ...initialValues, [name]: value });
    if (value === "0") {
      setCustom2(value);
    } else {
      setCustom2("");
    }
  };

  const handleSelectChange3 = (name, value) => {
    setInitialValues({ ...initialValues, [name]: value });
    if (value === "0") {
      setCustom3(value);
    } else {
      setCustom3("");
    }
  };

  // const postDataToAPI = async () => {
  //   try {
  //     const data = {
  //       beginingVal: cagrAmount,
  //       years: timePeriod,
  //       finalVal: expectedReturnRate,
  //     };
  //     const response = await fetch(
  //       `${process.env.NEXT_PUBLIC_CALCULATOR_API_URL}api/calculate`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(data),
  //       }
  //     );


  //     if (response) {
  //       const responseData = await response.json(); 
  //       setCalculatorData({
  //         targetAmount: responseData.data,
  //       });
  //     } else {
  //       console.error("Failed to post data to the API");
  //     }
  //   } catch (error) {
  //     console.error("Error posting data to the API:", error);
  //   }
  // };

  return (
    <>
      {/* <Header/> */}
      <Row className={style["calc-container"]}>
        <div className={style["container"]}>
          <div className={style["frame"]}>
            <Form
              form={form}
              name="control-hooks"
              onFinish={onFinish}
              initialValues={initialValues}
            >
              <Row gutter={24} className={style["calc-form"]}>
                <Col sm={24} md={response ? 24 : 24} className="mt-3">
                  <Row gutter={16} className={style["title-row"]} style={{ marginBottom: "4rem" }}>
                    <div className={style["title"]}>
                      Discounted Cash Flow(DCF) Calculator
                    </div>
                  </Row>
                  <Row gutter={16} style={{ marginBottom: "0px" }}>
                    <Col span={12} sm={12} xs={24}>
                      <NumberInput
                        title="Free Cash Flow (In Crores)"
                        suggestion="It is recommended that you take an average of the last 3 years (Free Cash Flow = Cash From Operation - Capex)"
                        name="fcf"
                        type="amount"
                        min={0}
                        max={9999999999}
                        value={"₹" + initialValues?.fcf}
                        sign="Cr."
                      />
                    </Col>
                    <Col
                      span={12}
                      sm={12}
                      xs={24}
                      className={style["calc-form-field"]}
                    >
                      <div
                        className={style["text-wrapper"]}
                        style={{
                          textAlign: "left",
                          fontFamily: "Mulish",
                          fontWeight: 400,
                          fontSize: "16px",
                          lineHeight: "14px",
                          marginBottom: 10,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        Discount Rate{" "}
                        <OverlayTrigger
                          placement="auto"
                          overlay={
                            <Tooltip id="tooltip">
                              <h5>
                                This is the rate of return you need to
                                compensate for the risk associated with your
                                company. For more stable companies, use less
                                rate and vice versa.
                              </h5>
                            </Tooltip>
                          }
                        >
                          <img
                            style={{ height: 20, width: 20 }}
                            src="/i.svg"
                            alt="i-icon"
                          />
                        </OverlayTrigger>
                      </div>
                      <Form.Item
                        name="dr"
                        rules={[
                          {
                            required: true,
                            message: "Please select Discount Rate",
                          },
                        ]}
                        style={{
                          position: "relative",
                        }}
                      >
                        <Select
                          size="large"
                          placeholder="Discount Rate"
                          className={style["calc-select"]}
                          onChange={(value) => handleSelectChange3("dr", value)}
                          defaultValue="12"
                        >
                          <Option value="12">Large Cap Company (12%)</Option>
                          <Option value="14">Medium Cap Company (14%)</Option>
                          <Option value="15">Small Cap Company (15%)</Option>
                          <Option value="0">Custom</Option>
                        </Select>
                        {custom3 && (
                          <div
                            style={{
                              position: "absolute",
                              top: -7,
                              left: windowWidth <= 1024 ? "29%" : "19%",
                              width: windowWidth <= 1024 ? "70%" : "80%",
                            }}
                          >
                            <NumberInput
                              name="cdr"
                              title=" "
                              min={0}
                              type="rate"
                              max={100}
                              value={initialValues?.dr}
                              sign="%"
                              extraFieldStyle={{
                                border: 0,
                                height: 38,
                                boxShadow: "none",
                                position: "relative",
                              }}
                              boolArrrow
                            />
                          </div>
                        )}
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16} style={{ marginBottom: "16px" }}>
                    <Col span={12} sm={12} xs={24}>
                      <div
                        className={style["text-wrapper"]}
                        style={{
                          textAlign: "left",
                          marginBottom: "9px",
                          fontFamily: "Mulish",
                          fontWeight: 200,
                          fontSize: "18px",
                          lineHeight: "14px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        Growth Rate (1 to 5 Year){" "}
                        <OverlayTrigger
                          placement="bottom"
                          overlay={
                            <Tooltip>
                              <h5>
                                This is the growth rate of the company you
                                assume for the next 5 years.
                              </h5>
                            </Tooltip>
                          }
                        >
                          <img
                            style={{ height: 20, width: 20 }}
                            src="/i.svg"
                            alt="i-icon"
                          />
                        </OverlayTrigger>
                      </div>
                      <Form.Item
                        name="gr1"
                        rules={[
                          {
                            required: true,
                            message: "Please select Growth Rate (1 to 5 Year)",
                          },
                        ]}
                        style={{ marginBottom: "0" }}
                      >
                        <Select
                          size="large"
                          placeholder="Growth Rate (1 to 5 Year)"
                          onChange={(value) => handleSelectChange("gr1", value)}
                          className={style["calc-select"]}
                          allowClear
                          defaultValue="5"
                        >
                          <Option value="5">Low (5%)</Option>
                          <Option value="10">Medium (10%)</Option>
                          <Option value="15">High (15%)</Option>
                          <Option value="0">Custom</Option>
                        </Select>
                        {custom1 && (
                          <div
                            style={{
                              position: "absolute",
                              top: -7,
                              left: windowWidth <= 1024 ? "29%" : "19%",
                              width: windowWidth <= 1024 ? "70%" : "80%",
                            }}
                          >
                            <NumberInput
                              name="cgr1"
                              title=" "
                              min={0}
                              type="rate"
                              max={100}
                              value={initialValues?.dr}
                              sign="%"
                              extraFieldStyle={{
                                border: 0,
                                height: 38,
                                boxShadow: "none",
                                position: "relative",
                              }}
                              boolArrrow
                            />
                          </div>
                        )}
                      </Form.Item>
                    </Col>
                    <Col
                      span={12}
                      sm={12}
                      xs={24}
                      className={style["calc-form-field"]}
                    >
                      <div
                        className={style["text-wrapper"]}
                        style={{
                          textAlign: "left",
                          marginBottom: "11px",
                          fontFamily: "Mulish",
                          fontWeight: 400,
                          fontSize: "16px",
                          lineHeight: "14px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        Growth Rate (6 to 10 Year){" "}
                        <OverlayTrigger
                          placement="bottom"
                          overlay={
                            <Tooltip>
                              <h5>
                                This is the growth rate for the next 6 to 10
                                years after the initial 5 years. Usually, it is
                                lower than that of 1 to 5 years.
                              </h5>
                            </Tooltip>
                          }
                        >
                          <img
                            style={{ height: 20, width: 20 }}
                            src="/i.svg"
                            alt="i-icon"
                          />
                        </OverlayTrigger>
                      </div>
                      <Form.Item
                        name="gr2"
                        rules={[
                          {
                            required: true,
                            message: "Please select Growth Rate (5 to 10 Year)",
                          },
                        ]}
                        style={{ marginBottom: "0" }}
                      >
                        <Select
                          size="large"
                          placeholder="Growth Rate (5 to 10 Year)"
                          onChange={(value) =>
                            handleSelectChange2("gr2", value)
                          }
                          className={style["calc-select"]}
                          allowClear
                          defaultValue="10"
                        >
                          <Option value="5">Low (5%)</Option>
                          <Option value="10">Medium (10%)</Option>
                          <Option value="15">High (15%)</Option>
                          <Option value="0">Custom</Option>
                        </Select>
                        {custom2 && (
                          <div
                            style={{
                              position: "absolute",
                              top: -7,
                              left: windowWidth <= 1024 ? "29%" : "19%",
                              width: windowWidth <= 1024 ? "70%" : "80%",
                            }}
                          >
                            <NumberInput
                              name="cgr2"
                              title=" "
                              min={0}
                              type="rate"
                              max={100}
                              value={initialValues?.dr}
                              sign="%"
                              extraFieldStyle={{
                                border: 0,
                                height: 38,
                                boxShadow: "none",
                                position: "relative",
                              }}
                              boolArrrow
                            />
                          </div>
                        )}
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16} style={{ marginBottom: "16px" }}>
                    <Col span={12} sm={12} xs={24}>
                      <NumberInput
                        name="cash"
                        title="Cash (In Crores)"
                        suggestion="This includes Cash and Cash Equivalents"
                        min={1}
                        type="amount"
                        max={9999999999}
                        value={initialValues?.cash}
                        sign="Cr."
                      />
                    </Col>
                    <Col
                      span={12}
                      sm={12}
                      xs={24}
                      className={style["calc-form-field"]}
                    >
                      <NumberInput
                        name="debt"
                        title="Debt (In Crores)"
                        suggestion="This is long-term borrowing for the company"
                        min={1}
                        type="amount"
                        max={9999999999}
                        value={initialValues?.debt}
                        sign="Cr."
                      />
                    </Col>
                  </Row>
                  <Row gutter={16} style={{ marginBottom: "16px" }}>
                    <Col span={12} sm={12} xs={24}>
                      <NumberInput
                        name="mcc"
                        title="Market Cap Company (In Crores)"
                        suggestion=""
                        min={1}
                        max={9999999999}
                        type="amount"
                        value={initialValues?.mcc}
                        sign="Cr."
                      />
                    </Col>
                    <Col
                      span={12}
                      sm={12}
                      xs={24}
                      className={style["calc-form-field"]}
                    >
                      <NumberInput
                        name="currentPrice"
                        title="Current market price"
                        suggestion=""
                        min={1}
                        max={9999999999}
                        type="amount"
                        value={initialValues?.currentPrice}
                        sign="₹"
                      />
                    </Col>
                  </Row>
                  <Row gutter={16} style={{ marginBottom: "16px" }}>
                    <Col span={12} sm={12} xs={24}>
                      <div
                        className={style["text-wrapper"]}
                        style={{
                          textAlign: "left",
                          marginBottom: "7px",
                          fontFamily: "Mulish",
                          fontWeight: 400,
                          fontSize: "16px",
                          lineHeight: "14px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        Terminal Growth Rate (GDP){" "}
                        <OverlayTrigger
                          placement="bottom"
                          overlay={
                            <Tooltip>
                              <h5>your estimate of the company life span</h5>
                            </Tooltip>
                          }
                        >
                          <img
                            style={{ height: 20, width: 20 }}
                            src="/i.svg"
                            alt="i-icon"
                          />
                        </OverlayTrigger>
                      </div>
                      <Form.Item
                        name="isForever"
                        rules={[
                          {
                            required: true,
                            message: "Please select Assumed Life Span",
                          },
                        ]}
                        style={{
                          marginBottom: "0",
                          position: "relative",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Select
                            size="large"
                            placeholder="Terminal Growth Rate %"
                            allowClear
                            onChange={(value) =>
                              handleSelectTGR("isForever", value)
                            }
                            className={style["calc-select"]}
                            defaultValue="true"
                          >
                            <Option value="true">Forever</Option>
                            <Option value="false">40 Year</Option>
                          </Select>
                          <div
                            style={{
                              position: "absolute",
                              top: -7,
                              left: windowWidth <= 1024 ? "29%" : "19%",
                              width: windowWidth <= 1024 ? "70%" : "80%",
                            }}
                          >
                            <NumberInput
                              name="tgr"
                              title=" "
                              min={0}
                              type="rate"
                              max={100}
                              value={initialValues?.tgr}
                              sign="%"
                              extraFieldStyle={{
                                border: 0,
                                height: 38,
                                boxShadow: "none",
                                position: "relative",
                              }}
                              boolArrrow
                            />
                          </div>
                        </div>
                      </Form.Item>
                    </Col>
                    <Col
                      span={12}
                      sm={12}
                      xs={24}
                      style={{ marginTop: windowWidth <= 450 ? 16 : "" }}
                    >
                      <NumberInput
                        title="Margin of Safety"
                        suggestion="This is the safety margin to minimise your risk. It is usually 30%"
                        min={0}
                        max={100}
                        type="rate"
                        value={initialValues?.mos}
                        sign="%"
                        name="mos"
                      />
                    </Col>
                  </Row>
                </Col>
                {response && (
                  <Container
                    style={{
                      width: windowWidth <= 768 ? "90%" : '100%',
                      marginTop: "16px",
                      background: "white",
                      borderRadius: 18,
                      overflow: "hidden",
                      padding: windowWidth <= 1440 ? "10px 10px 10px 10px" : "",
                      position: "relative",
                      boxShadow:
                        "0 0 0 10px rgba(49, 193, 177, 0.12), 0 0 0 10px rgba(55, 127, 219, 0.12)",
                      }}
                  >
                    <Row>
                      <Col
                        style={{
                          margin: windowWidth <= 1440 ? "" : "20px 0px 0px 0px",
                          display: "flex",
                          justifyContent: "space-between",
                          padding: windowWidth <= 1440 ? "0px 10px 6px 10px" : "0px 10px",
                          borderBottom: windowWidth <= 1440 ? "1px solid #D9D9D9" : "",
                        }}
                        xxl={8}
                        xs={24}
                      >
                        <div>
                          {" "}
                          <div>
                            {" "}
                            <div
                              style={{
                                fontFamily: "Mulish",
                                fontWeight: 400,
                                fontSize: "14px",
                                lineHeight: "14px",
                                textAlign: "justify",
                                color: "#646464",
                              }}
                            >
                              {" "}
                              Intrinsic Value / Share
                            </div>{" "}
                            <div
                              className="align-aaa"
                              style={{ fontWeight: 600, fontSize: 25 }}
                            >
                              ₹{Number(response?.intValue).toFixed(2)}
                            </div>{" "}
                          </div>
                        </div>{" "}
                        {windowWidth >= 1440 ? (
                          <img
                            style={{ height: windowWidth <= 1440 ? 0 : 30, marginTop: 10 }}
                            src="/Vector 199.svg"
                            alt=""
                          />
                        ) : null}
                      </Col>
                      <Col
                        style={{
                          marginTop: windowWidth <= 1440 ? 12 : 20,
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "0px 10px",
                          padding: windowWidth <= 1440 ? "0px 10px 6px 10px" : "0px 10px",
                          borderBottom: windowWidth <= 1440 ? "1px solid #D9D9D9" : "",
                        }}
                        xxl={8}
                        xs={24}
                      >
                        {" "}
                        <div>
                          {" "}
                          <div>
                            {" "}
                            <div
                              style={{
                                fontFamily: "Mulish",
                                fontWeight: 400,
                                fontSize: "14px",
                                lineHeight: "14px",
                                textAlign: "justify",
                                color: "#646464",
                              }}
                            >
                              {" "}
                              Intrinsic Value after MoS
                            </div>{" "}
                          </div>{" "}
                          <div
                            className="align-aaa"
                            style={{ fontWeight: 600, fontSize: 25 }}
                          >
                            {" "}
                            ₹
                            {Number(response?.intrisicValueAfterMOs).toFixed(
                              2
                            )}{" "}
                          </div>{" "}
                        </div>
                        {windowWidth >= 1440 ? (
                          <img
                            style={{ height: windowWidth <= 1440 ? 0 : 30, marginTop: 10 }}
                            src="/Vector 199.svg"
                            alt=""
                          />
                        ) : null}
                      </Col>
                      <Col
                        style={{
                          marginBottom: windowWidth <= 1440 ? 0 : 20,
                          marginTop: windowWidth <= 1440 ? 12 : 20,
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "0px 10px",
                        }}
                        xxl={8}
                        xs={24}
                      >
                        <div>
                          <div
                            style={{
                              fontFamily: "Mulish",
                              fontWeight: 400,
                              fontSize: "14px",
                              lineHeight: "14px",
                              textAlign: "justify",
                              color: "#646464",
                            }}
                          >
                            {" "}
                            Undervalued By / (Overvalued By)
                          </div>
                          <div
                            className="align-aaa"
                            style={{ fontWeight: 600, fontSize: 25 }}
                          >
                            {" "}
                            ₹{Number(response?.underOverValue).toFixed(2)}%
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                )}
                <div className=" w-full flex justify-center absolute bottom-[-65px] right-2">
                  <Row>
                    <Form.Item className={style["form-btn"]}>
                      <Space>
                        <GradientButton postDataToAPI={onFinish} />
                      </Space>
                    </Form.Item>
                  </Row>
                </div>
              </Row>
            </Form>
          </div>
        </div>
      </Row>
      <div className="mt-5">
        <DFC />
      </div>
    </>
  );
}

export default CalculatorDcf;
