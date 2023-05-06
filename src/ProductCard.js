import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);
  const handleClick = () => {
    navigate(`/?id=${product._id}`);
    window.scrollTo(0, 0);
  };
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div
      className="w-100 mt-5"
      style={{ cursor: "pointer" }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="position-relative">
        <div className="wrapper">
          <img src={product.images[0]} className="rounded-8 w-100" />
        </div>
        {isHovering && (
          <div className="hover-container">
            <div className="hover-container-bg"></div>
            <div className="hover-container-btn">
              <button onClick={handleClick}>View</button>
            </div>
          </div>
        )}
      </div>

      <h5 className="fw-600 mt-3 fs-16">{product.name}</h5>
      <p className="fw-600 secondary-color">${product.price}</p>
    </div>
  );
};

export default ProductCard;
