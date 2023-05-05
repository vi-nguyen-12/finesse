import React from "react";
import { GoThreeBars } from "react-icons/go";
import { AiOutlineSearch } from "react-icons/ai";
import { useWindowSize } from "./helper.js";
import barCode from "./images/barcode.png";
import "./Navbar.css";

const Navbar = () => {
  const windowSize = useWindowSize();
  return (
    <div className="navbar-container d-flex align-items-center justify-content-between p-5">
      <div className="d-flex">
        <GoThreeBars
          className="d-block me-5"
          size={windowSize === "sm" ? 40 : windowSize === "md" ? 50 : 70}
        />
        <AiOutlineSearch
          size={windowSize === "sm" ? 40 : windowSize === "md" ? 50 : 70}
          className={`${windowSize !== "sm" && "ml-3"}`}
        />
      </div>

      <div>
        <img
          src={barCode}
          style={{ height: `${windowSize === "sm" ? "60px" : "80px"}` }}
        />
        <h3 className="mt-0">FINESSE</h3>
      </div>
      <button
        className={`bg-transparent border-0  ${
          windowSize === "sm" ? "fs-18" : "fs-24"
        }`}
      >
        CART (1)
      </button>
    </div>
  );
};
export default Navbar;
