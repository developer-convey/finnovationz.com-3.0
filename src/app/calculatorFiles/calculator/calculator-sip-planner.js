"use client";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import "./style.css";
import { Col, Form, Row, Select, Space } from "antd";
import GradientButton from "./GradientButton";
import { formatNumber } from "../../calculator/common-function/calculatorcf";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);


const CalculatorOutput = ({ targetAmount, timePeriod, expectedReturnRate }) => {
  const formattedTargetAmount = targetAmount
    ? `₹${formatNumber(targetAmount)}`
    : "₹31,34,399";


  const formattedTimePeriod = timePeriod
    ? `₹${formatNumber(timePeriod)}`
    : "₹68,61,601";


  const formattedExpectedReturnRate = expectedReturnRate
    ? `₹${formatNumber(expectedReturnRate)}`
    : "₹26,153";


  return (
    <div className="p-4 pb-2 pt-3 rounded-lg mt-[10px] sm:mt-[15px] md:mt-[25px] lg:mt-[-20px] md:h-[165px] h-[143px] w-full bg-[#E6F0FA] mx-auto shadow-md">
      <div className="flex justify-between mb-3 ml-[-10px] mr-[-10px] text-gray-600 text-sm md:text-lg lg:text-[15px] font-medium">
        <span>Invested Amount</span>
        <span className="text-transparent bg-clip-text bg-blue-600 font-extrabold">
          {formattedTargetAmount}
        </span>
      </div>
      <div className="flex justify-between mb-2 ml-[-10px] mr-[-10px] text-gray-600 text-sm md:text-lg lg:text-[15px] font-medium">
        <span>Monthly SIP</span>
        <span className="text-transparent bg-clip-text bg-blue-600 font-extrabold">
          {formattedTimePeriod}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "14px",
          fontWeight: "bold",
          backgroundColor: "white",
          color: "black",
          padding: "10px",
          borderRadius: "8px",
          marginTop: "15px",
          marginLeft: "-13px",
          marginRight: "-13px",
          boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
          // width: "100%",
        }}
      >
        <span>Interest Earning</span>
        <span>{formattedExpectedReturnRate}</span>
      </div>
    </div>
  );
};


const InputField = ({
  label,
  value,
  onChange,
  isPercentage = false,
  isYear = false,
}) => {
  const handleInputChange = (e) => {
    const inputValue = e.target.value.replace(/[^0-9]/g, ""); // Allow only numeric input
    let val = inputValue !== "" ? parseInt(inputValue) : "";


    if (val === "" || isNaN(val)) {
      onChange(""); // Allow clearing the input
    } else {
      onChange(val);
    }
  };


  const handleBlur = () => {
    if (value === "" || isNaN(value)) {
      onChange(0); // Reset to minimum if the field is left empty or invalid
    }
  };


  return (
    <div className="ml-4 w-full">
      <div className="font-medium mb-2">{label}</div>
      <div className="relative flex items-center justify-between bg-white border border-gray-300 rounded-lg p-3 shadow-sm">
        <input
          type="number"
          value={value || ""}
          onChange={handleInputChange}
          onBlur={handleBlur}
          // className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          className="w-full font-bold text-blue-600 text-[20px] 2xl:text-[25px] outline-none bg-transparent"
          placeholder={`Enter a value`}
        />
        <span className="absolute right-3 text-[25px] opacity-[30%] text-blue-500 font-extrabold">
          {isYear ? "Yr" : isPercentage ? "%" : "₹"}
        </span>
      </div>
      {
        isYear ?
          <input
            type="range"
            min={1}
            max={40}
            value={value || 0}
            onChange={(e) => onChange(parseInt(e.target.value))}
            className="w-full mt-2 appearance-none h-2 rounded-full bg-gradient-to-r from-teal-400 to-blue-600 outline-none border"
          /> :
          isPercentage ?
            <input
              type="range"
              min={10}
              max={50}
              value={value || 0}
              onChange={(e) => onChange(parseInt(e.target.value))}
              className="w-full mt-2 appearance-none h-2 rounded-full bg-gradient-to-r from-teal-400 to-blue-600 outline-none border"
            /> :
            <input
              type="range"
              min={100000}
              max={100000000}
              value={value || 0}
              onChange={(e) => onChange(parseInt(e.target.value))}
              className="w-full mt-2 appearance-none h-2 rounded-full bg-gradient-to-r from-teal-400 to-blue-600 outline-none border"
            />


      }

      <div className="text-sm text-gray-500 2xl:text-[18px] flex justify-between mt-1">
        <span>
          {isYear ? "1 Yr" : isPercentage ? "10%" : `₹100,000`}
        </span>
        <span>
          {isYear ? "40 Yr" : isPercentage ? "50%" : `₹100,000,000`}
        </span>
      </div>
      {/* Slider Thumb Custom Styles */}
      <style jsx>{`
        input[type="range"] {
          background-color: rgba(
            228,
            233,
            242,
            1
          ); /* Set slider background color */
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #377fdb; /* Blue color */
          cursor: pointer;
          border: none;
        }
        input[type="range"]::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #377fdb; /* Blue color */
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
};


function Calculator() {
  const [targetAmount, setTargetAmount] = useState(10000000);
  const [expectedReturnRate, setExpectedReturnRate] = useState(10);
  const [timePeriod, setTimePeriod] = useState(20);
  const [calculatorData, setCalculatorData] = useState({
    targetAmount: "",
    timePeriod: "",
    expectedReturnRate: "",
  });

  const [totalInvestment, setTotalInvestment] = useState(0);
  const [estimatedReturns, setEstimatedReturns] = useState(0);
  const [graphData, setGraphData] = useState({
    labels: ["Invested Amount", "Estimated Returns"],
    datasets: [
      {
        data: [0, 0],
        backgroundColor: ["#36A2EB", "#FFCE56"],
      }
    ]
  });

  useEffect(() => {
    postDataToAPI();
  }, [totalInvestment, estimatedReturns]);


  const generateGraphData = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Create a gradient manually for two data slices
    const gradientInvestment = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradientInvestment.addColorStop(0, "rgba(230, 240, 250, 1)");
    gradientInvestment.addColorStop(1, "rgba(230, 240, 250, 1)");


    const gradientReturns = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradientReturns.addColorStop(0.4, "#31C1B1");
    gradientReturns.addColorStop(1, "#377FDB");

    setGraphData({
      labels: ["Interest Earning", "Invested Amount"],
      datasets: [
        {
          data: [estimatedReturns, totalInvestment],
          backgroundColor: [gradientReturns, gradientInvestment], 
          cutout: "70%",
        },
      ],
    })
  };

  const postDataToAPI = async () => {
    try {
      const data = {
        targetAmount: targetAmount,
        years: timePeriod,
        rateOfInterest: expectedReturnRate,
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CALCULATOR_API_URL}api/calculate/sipPlanner`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );


      if (response.ok) {
        const responseData = await response.json(); // Extract JSON from the response
        
        setTotalInvestment(responseData.data.totalAmountInvest);
        setEstimatedReturns(responseData.data.interestEarning);
        generateGraphData();

        setCalculatorData({
          targetAmount: responseData.data.totalAmountInvest,
          timePeriod: responseData.data.monSIPNeed,
          expectedReturnRate: responseData.data.interestEarning,
        });
      } else {
        console.error(
          "Failed to post data to the API. Status code:",
          response.status
        );
      }
    } catch (error) {
      console.error("Error posting data to the API:", error);
    }
  };


  return (
    <>
      <div className="p-4 mt-[-20px] calculator-container-position">
        <div
          className="responsive-container"
          style={{
            boxShadow: "0px 4px 4px 0px #0000000D",
          }}
        >
          {/* Title Section */}
          <div className="text-left font-extrabold text-[22px] 2xl:text-[25px] mt-[25px] mb-8 ml-0  lg:ml-1.5 2xl:ml-[8px]">
            SIP Planner Calculator
          </div>


          {/* Responsive Layout Container */}
          {/* Responsive Layout Container */}
          <div className="flex flex-col lg:flex-row justify-between lg:space-x-6 space-y-6 lg:space-y-0 text-[18px] 2xl:text-[22px] lg:gap-[50px]">
            {/* Input Fields Section */}
            <div className="responsive-input space-y-6 xl:space-y-9 2xl:space-y-6 w-full lg:w-[660px] xl:w-[900px] 2xl:w-[1050px] -ml-4 lg:-ml-5 lg:ml-2">
              <InputField
                label="Target amount"
                value={targetAmount}
                onChange={setTargetAmount}
              />
              <InputField
                label="Rate Of Return"
                value={expectedReturnRate}
                onChange={setExpectedReturnRate}
                isPercentage={true}
              />
              <InputField
                label="Time period"
                value={timePeriod}
                onChange={setTimePeriod}
                isYear={true}
              />
            </div>


            {/* Chart and Output Section */}
            <div className="cal-right w-full lg:w-1/2 flex flex-col items-center relative mt-6 lg:mt-0 mr-[28px]">
              {/* Labels for Invested Amount and Est. Returns */}
              <div className="absolute top-[200px] lg:top-[-55px] flex justify-center space-x-6 w-[255px]">
                <div className="responsive-labels flex items-center space-x-2 text-gray-600 text-sm font-medium">
                  <div
                    className="w-4 h-4 2xl:w-6 2xl:h-6 rounded-full"
                    style={{ backgroundColor: "#E6F0FA" }}
                  ></div>
                  <span>Invested amount</span>
                </div>
                <div className="responsive-labels flex items-center space-x-2 text-gray-600 text-sm font-medium">
                  <div
                    className="w-4 h-4 2xl:w-6 2xl:h-6 rounded-full"
                    style={{
                      background:
                        "linear-gradient(85.91deg, #31C1B1 5.26%, #377FDB 79.53%)",
                    }}
                  ></div>
                  <span>Est. returns</span>
                </div>
              </div>


              {/* Doughnut chart with responsive design */}
              <div className="responsive-chart w-[180px] sm:w-[200px] h-[180px] sm:h-[200px] mt-[5px] lg:mt-[-5px] mb-[60px]">
                <Doughnut
                  data={graphData}
                  options={{
                    plugins: { legend: { display: false } },
                    maintainAspectRatio: false,
                  }}
                />
              </div>


              {/* Calculator Output Component */}
              <div className="responsive-output">
                <CalculatorOutput
                  targetAmount={calculatorData.targetAmount}
                  timePeriod={calculatorData.timePeriod}
                  expectedReturnRate={calculatorData.expectedReturnRate}
                />
              </div>
            </div>
          </div>

          <div className="sip-form-container">
            <div className="sip-form-btn">
              <Row>
                <Form.Item>
                  <Space>
                    <GradientButton postDataToAPI={postDataToAPI} />
                  </Space>
                </Form.Item>
              </Row>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}


export default Calculator;
