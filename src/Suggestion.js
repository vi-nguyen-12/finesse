import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

const API_URL =
  process.env.REACT_APP_NODE_ENV === "test"
    ? process.env.REACT_APP_TEST_API_URL
    : process.env.REACT_APP_DEV_API_URL;

const Suggestion = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/products`, {
          headers: { "Content-Type": "application/json" },
        });
        setProducts(res.data);
      } catch (err) {
        alert(error.message);
        console.log(error);
        return;
      } finally {
        setIsLoading(false);
      }
    };
    getProducts();
  }, []);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }
  return (
    <div className="p-6">
      <h3 className="fw-600">YOU MAY LIKE ...</h3>
      <Row>
        {products.map((product, idx) => (
          <Col xs={6} md={4} lg={3} xl={2} key={idx}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Suggestion;
