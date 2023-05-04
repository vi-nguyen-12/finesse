import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/?id=${product._id}`);
    window.scrollTo(0, 0);
  };
  return (
    <div
      className="w-100 mt-5"
      style={{ cursor: "pointer" }}
      onClick={handleClick}
    >
      <img
        src={product.images[0]}
        className="rounded-4"
        style={{ width: "100%" }}
      />

      <h5 className="fw-600 mt-3 fs-16">{product.name}</h5>
      <p className="fw-600 secondary-color">${product.price}</p>
    </div>
  );
};

export default ProductCard;
