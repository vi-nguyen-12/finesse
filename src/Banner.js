import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Banner.css";
import addBtn from "./images/add-btn.png";
import message from "./images/message.png";
import paymentOption from "./images/paymentOption.png";
import arrow from "./images/arrow.png";
import { useWindowSize } from "./helper";

const Banner = () => {
  const windowSize = useWindowSize();
  return (
    <div className="banner-container py-4 px-2 p-md-5 mt-5 m-md-5">
      <Row>
        <Col xs={6} className="d-flex align-items-center">
          <img src={addBtn} height={windowSize < 768 && "30px"} />
          <p>SIZE INCLUSIVE UP TO 3X</p>
        </Col>
        <Col xs={6} className="d-flex align-items-center">
          <img src={arrow} height={windowSize < 768 && "30px"} />
          <p>EASY RETURNS & EXCHANGES</p>
        </Col>
      </Row>
      <Row className="mt-4 mt-md-5">
        <Col xs={6} className="d-flex align-items-center">
          <img src={message} height={windowSize < 768 && "30px"} />
          <p>24/7 CUSTOMER SERVICE</p>
        </Col>
        <Col xs={6} className="d-flex align-items-center">
          <img src={paymentOption} height={windowSize < 768 && "30px"} />
          <p>FLEXIBLE PAYMENT OPTIONS</p>
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
