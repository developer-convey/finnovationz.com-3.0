/* eslint-disable-next-line */
import React from "react";
import { Col, Row } from "antd";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import Card from "../calculator/OutputLabels";
import { Container } from "react-bootstrap";

export function CalculatorOutput(props) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(typeof window !== "undefined" && windowWidth);
    };

    // Check if window object is defined (client-side)
    if (typeof window !== "undefined") {
      // Set initial window width
      setWindowWidth(windowWidth);

      // Add event listener to handle window resize
      window.addEventListener("resize", handleResize);

      // Clean up event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const color1 = [56, 128, 220]; // #3880DC converted to RGB values
  const color2 = [48, 201, 171]; // #30C9AB converted to RGB values

  // Function to calculate the average of two numbers
  const average = (a, b) => (a + b) / 2;

  // Calculate the average for each color component (R, G, B)
  const midpointColor = color1.map((value, index) =>
    Math.round(average(value, color2[index]))
  );

  // Convert the midpoint color to a hex color code
  const rgbToHex = (rgb) =>
    "#" + rgb.map((value) => ("0" + value.toString(16)).slice(-2)).join("");

  const hexColor = rgbToHex(midpointColor);

  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ["Invested Amount", "Est Returns"],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: [hexColor, "rgba(235, 242, 252, 1)"],
        hoverBackgroundColor: [hexColor, "rgba(235, 242, 252, 1)"],
        borderWidth: 1,
      },
    ],
  };
  const chartOptions = {
    cutout: "85%", // Adjust the cutout percentage here
    radius: "90%",
  };

  return (
    <>
      <Container
        style={{
          width: "100%",
          background:
            "linear-gradient(129.27deg, rgba(49, 193, 177, 0.12) 9.8%, rgba(55, 127, 219, 0.12) 101.83%)",
          borderRadius: 18,
          overflow: "hidden",
        }}
      >
        <Row>
          <Col
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0px 10px",
            }}
            lg={8}
            xs={24}
          >
            <div>
              <div
                style={{
                  fontFamily: "Mulish",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "14px",
                }}
              >
                {" "}
                intristic value{" "}
              </div>
              <div style={{ fontWeight: 600, fontSize: 25 }}> ₹25000 </div>
            </div>
            {windowWidth >= 450 ? (
              <img
                style={{ height: 30, marginTop: 10 }}
                src="/Vector 199.svg"
                alt=""
              />
            ) : null}
          </Col>
          <Col
            style={{
              marginTop: 20,
              display: "flex",
              justifyContent: "space-between",
              padding: "0px 10px",
            }}
            lg={8}
            xs={24}
          >
            <div>
              <div>
                <div
                  style={{
                    fontFamily: "Mulish",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "14px",
                    textAlign: "justify",
                  }}
                >
                  {" "}
                  intristic value after Mos
                </div>
              </div>
              <div
                className="align-aaa"
                style={{ fontWeight: 600, fontSize: 25 }}
              >
                {" "}
                ₹25000{" "}
              </div>
            </div>
            {windowWidth >= 450 ? (
              <img
                style={{ height: 30, marginTop: 10 }}
                src="/Vector 199.svg"
                alt=""
              />
            ) : null}
          </Col>
          <Col
            style={{
              marginTop: 20,
              display: "flex",
              justifyContent: "space-between",
              padding: "0px 10px",
            }}
            lg={8}
            xs={24}
          >
            <div>
              <div
                style={{
                  fontFamily: "Mulish",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "14px",
                }}
              >
                {" "}
                undervalued by
              </div>
              <div style={{ fontWeight: 600, fontSize: 25 }}> ₹25000 </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CalculatorOutput;
