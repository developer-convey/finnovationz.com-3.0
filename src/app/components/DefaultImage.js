'use client'
import React, { useState } from "react";

const DefaultImage = ({ src, className, loading, }) => {
  const [deflt, setdeflt] = useState(src);
  const defaultStyle = {
    background:
      deflt === src
        ? "none"
        : "linear-gradient(86deg, #31c1b1 5.26%, #377fdb 79.53%)",
  };

  return (
    <img
      className={className}
      style={defaultStyle }
      src={deflt}
      onError={() => setdeflt("/def.webp")}
      alt=""
      loading={loading}
    />
  );
};

export default DefaultImage;
