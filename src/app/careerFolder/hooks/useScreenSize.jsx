"use client";

import { useState, useEffect } from "react";

// In useScreenSize.jsx
function useScreenSize() {
  const [screenSize, setScreenSize] = useState("desktop");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    function getScreenSize() {
      const width = window.innerWidth;
      if (width <= 768) return "mobile";
      if (width <= 1024) return "tablet";
      return "desktop";
    }

    let timeoutId;
    function handleResize() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScreenSize(getScreenSize());
      }, 200); // Debounce resize events
    }

    setScreenSize(getScreenSize());
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isClient ? screenSize : "desktop";
}

export default useScreenSize;