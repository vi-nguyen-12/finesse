import React, { useEffect, useState } from "react";
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState();
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  if (windowSize >= 1200) return "xl";
  if (windowSize >= 992) return "lg";
  if (windowSize >= 768) return "md";
  return "sm";
};
