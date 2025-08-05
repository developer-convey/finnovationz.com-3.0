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


const CalculatorOutput = ({ principalAmount, estimatedReturns, totalValue }) => (
  <div className="p-4 pb-3 pt-3 rounded-lg mt-[10px] sm:mt-[15px] md:mt-[25px] lg:mt-[-20px] h-inherit w-full lg:w-auto bg-[#E6F0FA] mx-auto">
    <div className="flex justify-between mb-3 ml-[-10px] mr-[-10px] text-gray-600 text-sm md:text-lg lg:text-[15px] font-medium">
      <span>Invested amount</span>
      <span className="text-transparent bg-clip-text bg-blue-600 font-extrabold">
        ₹{formatNumber(principalAmount)}
      </span>
    </div>
    <div className="flex justify-between mb-2 ml-[-10px] mr-[-10px] text-gray-600 text-sm md:text-lg lg:text-[15px] font-medium">
      <span>Est. returns</span>
      <span className="text-transparent bg-clip-text bg-blue-600 font-extrabold">
        ₹{formatNumber(estimatedReturns)}
      </span>
    </div>
    <div className="flex justify-between text-sm md:text-lg lg:text-[15px] font-extrabold bg-white text-black p-[10px] rounded-lg mt-3 ml-[-13px] mr-[-13px]">
      <span>Total value</span>
      <span>₹{formatNumber(totalValue)}</span>
    </div>
  </div>
);


const InputField = ({
  label,
  value,
  onChange,
  isPercentage = false,
  isYear = false,
}) => {
  const handleInputChange = (e) => {
    let inputValue = e.target.value;

    if (isPercentage) {
      if (inputValue.includes('.')) {
        inputValue = inputValue.replace(/[^0-9.]/g, "");
      } else {
        inputValue = inputValue.replace(/[^0-9]/g, "");
      }
    } else {
      inputValue = inputValue.replace(/[^0-9]/g, "");
    }

    let val = inputValue !== "" ? parseFloat(inputValue) : "";

    if (val === "" || isNaN(val)) {
      onChange("");
    } else {
      onChange(val);
    }
  };


  const handleBlur = () => {
    if (value === "" || isNaN(value)) {
      onChange(''); // Reset to minimum if the field is left empty or invalid
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="relative flex items-center justify-between bg-white border border-gray-100 rounded-lg p-3 shadow-sm">
        <input
          type="number"
          value={value || ""}
          onChange={handleInputChange}
          onBlur={handleBlur}
          // className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          className="w-full font-bold text-blue-600 text-[20px] 2xl:text-[25px] outline-none bg-transparent "
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
              min={1}
              max={100}
              value={value || 0}
              onChange={(e) => onChange(parseInt(e.target.value))}
              className="w-full mt-2 appearance-none h-2 rounded-full bg-gradient-to-r from-teal-400 to-blue-600 outline-none border"
            /> :
            <input
              type="range"
              min={10000}
              max={10000000}
              value={value || 0}
              onChange={(e) => onChange(parseInt(e.target.value))}
              className="w-full mt-2 appearance-none h-2 rounded-full bg-gradient-to-r from-teal-400 to-blue-600 outline-none border"
            />
      }



      <div className="text-sm text-gray-500 flex justify-between mt-1">
        <span>
          {isYear ? "1 Yr" : isPercentage ? "1%" : `₹10,000`}
        </span>
        <span>
          {isYear ? "40 Yr" : isPercentage ? "100%" : `₹10,000,000`}
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
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type="number"] {
          -moz-appearance: textfield;
        }
      `}</style>
    </div>
  );
};


function Calculator() {
  const [principalAmount, setPrincipalAmount] = useState(100000);
  const [expectedReturnRate, setExpectedReturnRate] = useState(8);
  const [timePeriod, setTimePeriod] = useState(15);

  const [graphData, setGraphData] = useState({
    totalInvestment: 0,
    estimatedReturns: 0,
    totalValue: 0,
  });

  const generateGraphData = () => {
    const { totalInvestment, estimatedReturns } = graphData;


    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");


    // Create a gradient manually for two data slices
    const gradientInvestment = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradientInvestment.addColorStop(0, "rgba(230, 240, 250, 1)");
    gradientInvestment.addColorStop(1, "rgba(230, 240, 250, 1)");


    const gradientReturns = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradientReturns.addColorStop(0.4, "#31C1B1");
    gradientReturns.addColorStop(1, "#377FDB");


    return {
      labels: ["Est. returns", "Invested amount"],
      datasets: [
        {
          data: [estimatedReturns, totalInvestment],
          backgroundColor: [gradientReturns, gradientInvestment], // Custom gradient for each slice
          cutout: "70%",
        },
      ],
    };
  };

  const { totalInvestment, estimatedReturns, totalValue } = graphData;


  const postDataToAPI = async () => {
    try {
      const data = {
        principal: principalAmount,
        years: timePeriod,
        rateOfInterest: expectedReturnRate,
      };

      const response = await fetch(
        `https://dev.finnovationz.com:3259/api/calculate/ciCalculate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );


      if (response.ok) {
        const responseData = await response.json();

        // Extract the required data from API response
        const { investedAmount, interestEarned, totalValue } = responseData.data;

        // Update the graph data state
        setGraphData({
          totalInvestment: parseFloat(investedAmount),
          estimatedReturns: parseFloat(interestEarned),
          totalValue: parseFloat(totalValue)
        });

      } else {
        // Handle error
        console.error("Failed to post data to the API");
      }
    } catch (error) {
      console.error("Error posting data to the API:", error);
    }
  };

  useEffect(() => {
    postDataToAPI();
  }, [principalAmount, expectedReturnRate, timePeriod]);

  return (
    <>
      <div className="p-4 mt-[-20px] calculator-container-position">
        <div
          className="responsive-container"
        >
          {/* Title Section */}
          <div className="hidden lg:block text-left font-extrabold text-[22px] 2xl:text-[25px] mt-[25px] mb-8 ml-0  lg:ml-1.5 2xl:ml-[23px]">
            Compound Interest Calculator
          </div>


          {/* Responsive Layout Container */}
          {/* Responsive Layout Container */}
          <div className="flex flex-col-reverse lg:flex-row justify-between lg:space-x-6 space-y-6 lg:space-y-0 text-[18px] 2xl:text-[22px] lg:gap-[50px]">
            {/* Input Fields Section */}
            <div className="responsive-input space-y-6 xl:space-y-9 2xl:space-y-6 w-full lg:w-[660px] xl:w-[900px] 2xl:w-[1050px] -ml-4 lg:-ml-5 lg:ml-2 lg:mx-0 mx-auto mt-[30px] lg:mt-0">
              <InputField
                label="Principal Amount"
                value={principalAmount}
                onChange={setPrincipalAmount}
                min={500}
                max={1000000}
              />
              <InputField
                label="Time period"
                value={timePeriod}
                onChange={setTimePeriod}
                min={1}
                max={40}
                isYear={true}
              />
              <InputField
                label="Expected Return Rate (p.a)"
                value={expectedReturnRate}
                onChange={setExpectedReturnRate}
                min={1}
                max={100}
                isPercentage={true}
              />
            </div>


            {/* Chart and Output Section */}
            <div className="cal-right w-full lg:w-1/2 flex flex-col items-center relative mt-6 lg:mt-0 bg-[#FFFFFF] lg:bg-transparent rounded-[16px] lg:rounded-none pt-4">
              {/* Labels for Invested Amount and Est. Returns */}
              <div className="absolute top-[200px] lg:top-[-55px] flex justify-center space-x-6 w-full flex-wrap">
                <div className="responsive-labels flex items-center space-x-2 text-gray-600 text-sm font-medium ">
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
                {graphData.totalInvestment > 0 && (
                  <Doughnut
                    data={generateGraphData()}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: { display: false },
                        tooltip: {
                          callbacks: {
                            label: (context) => `₹${formatNumber(context.raw)}`,
                          },
                        },
                      },
                    }}
                  />
                )}
              </div>


              {/* Calculator Output Component */}
              <div className="responsive-output">
                <CalculatorOutput
                  principalAmount={totalInvestment}
                  estimatedReturns={estimatedReturns}
                  totalValue={totalValue}
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



