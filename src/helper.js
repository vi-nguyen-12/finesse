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
  return windowSize;
};
