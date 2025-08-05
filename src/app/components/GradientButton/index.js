import React from "react";
import { Button } from "antd";

const GradientButton = () => {
  const gradientButtonStyle = {
    background: "linear-gradient(84deg, #30C9AB 2.33%, #377BDC 92.3%)",
    border: 0,
    borderRadius: "20px",
    color: "white",
    fontWeight: "bold",
    width: "178px",
    padding: "11px 18px",
    boxShadow: "0 2px 5px rgba(255, 105, 135, 0.5)",
    transition: "background 0.3s",
    height: "40px", // Adjust the height as needed
    // width: '100px', // Adjust the height as needed
    // Add any additional styles as needed
  };

  return (
    <Button style={gradientButtonStyle} htmlType="submit">
      Submit
    </Button>
  );
};

export default GradientButton;
