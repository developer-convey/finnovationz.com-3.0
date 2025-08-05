import React from "react";
import { IMAGES } from "../assets/assets";
import Files from "@/config/file";
import DefaultImage from "@/app/components/DefaultImage";

const { logo } = IMAGES;

const Logo = ({ src = logo, alt = "finnovationz logo" }) => {
  return (
    <div className="logo">
      <DefaultImage src={Files?.finnovationzLogo?.logo} alt={alt} />
    </div>
  );
};

export default Logo;
