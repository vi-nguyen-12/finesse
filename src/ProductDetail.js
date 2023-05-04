import React, { useState, useEffect } from "react";
import ProductSlider from "./ProductSlider";
import ProductDescription from "./ProductDescription";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const API_URL =
  process.env.REACT_APP_NODE_ENV === "test"
    ? process.env.REACT_APP_TEST_API_URL
    : process.env.REACT_APP_DEV_API_URL;

const ProductDetail = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const productId = searchParams.get("id") || "6453def8aec2594e00210a3e";
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/products/${productId}`);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getProduct();
  }, [searchParams]);
  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }
  return (
    <div className="d-flex flex-sm-column flex-md-row">
      <ProductSlider images={product.images} />
      <ProductDescription product={product} />
    </div>
  );
};

export default ProductDetail;
