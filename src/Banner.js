import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Banner.css";
import addBtn from "./images/add-btn.png";
import message from "./images/message.png";
import paymentOption from "./images/paymentOption.png";
import arrow from "./images/arrow.png";

const Banner = () => {
  return (
    <div className="banner-container p-6 mt-5 m-md-5">
      <Row>
        <Col className="d-flex align-items-center">
          <img src={addBtn} />
          <p>SIZE INCLUSIVE UP TO 3X</p>
        </Col>
        <Col className="d-flex align-items-center">
          <img src={arrow} />
          <p>EASY RETURNS & EXCHANGES</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="d-flex align-items-center">
          <img src={message} />
          <p>24/7 CUSTOMER SERVICE</p>
        </Col>
        <Col className="d-flex align-items-center">
          <img src={paymentOption} />
          <p>FLEXIBLE PAYMENT OPTIONS</p>
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
