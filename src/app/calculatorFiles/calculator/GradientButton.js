import React from "react";
import { Button } from "antd";

const GradientButton = ({ postDataToAPI }) => {
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
    height: "40px",
  };

  return (
    <Button
      style={gradientButtonStyle}
      htmlType="submit"
      onClick={() => {
        postDataToAPI();
      }}>
      Submit
    </Button>
  );
};

export default GradientButton;
