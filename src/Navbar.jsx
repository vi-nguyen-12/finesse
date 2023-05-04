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
      <div>
        <GoThreeBars size={70} />
        <AiOutlineSearch size={70} />
      </div>

      <div>
        <img src={barCode} style={{ height: "80px" }} />
        <h3 className="mt-0">FINESSE</h3>
      </div>
      <button className=" bg-transparent border-0 fs-6">CART (1)</button>
    </div>
  );
};
export default Navbar;
