import React from "react";
import { GoThreeBars } from "react-icons/go";
import { AiOutlineSearch } from "react-icons/ai";
import { useWindowSize } from "./helper.js";
import barCode from "./images/barcode.png";
import "./Navbar.css";

const Navbar = () => {
  const windowSize = useWindowSize();

  return (
    <div
      className="navbar-container d-flex align-items-center justify-content-between px-4 p-lg-5"
      style={windowSize <= 480 ? { height: "80px" } : { height: "150px" }}
    >
      <div className="d-flex">
        <GoThreeBars
          className="d-block me-5"
          size={windowSize <= 768 ? 30 : windowSize <= 992 ? 50 : 70}
        />
        <AiOutlineSearch
          size={windowSize <= 768 ? 30 : windowSize <= 992 ? 50 : 70}
          className={`${windowSize > 768 && "ml-3"}`}
        />
      </div>

      <div>
        <img
          src={barCode}
          style={{ height: `${windowSize < 768 ? "40px" : "80px"}` }}
        />
        <h3 className={`mt-0 fs-sm-3 ${windowSize < 768 ? "fs-18" : "fs-24"}`}>
          FINESSE
        </h3>
      </div>
      <button
        className={`bg-transparent border-0  ${
          windowSize < 768 ? "fs-16" : "fs-24"
        }`}
      >
        CART (1)
      </button>
    </div>
  );
};
export default Navbar;
