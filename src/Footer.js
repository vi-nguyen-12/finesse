import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="p-6">
      <Row>
        <Col xs={3} className="fw-600">
          SHOP BY
        </Col>
        <Col xs={3} className="fw-600">
          FOLLOW US
        </Col>
        <Col className="fw-600">CONTACT US</Col>
      </Row>
      <Row className="content-container">
        <Col xs={3}>Tops</Col>
        <Col xs={3}>Instagram</Col>
        <Col>rewind@finesse.us</Col>
      </Row>
      <Row className="content-container">
        <Col xs={3}>Bottoms</Col>
        <Col xs={3}>Facebook</Col>
        <Col>Exchange, Refunds & Returns</Col>
      </Row>
      <Row className="content-container">
        <Col xs={3}>Outerwear</Col>
        <Col xs={3}>Twitter</Col>
        <Col>Shipping & Returns</Col>
      </Row>
      <Row className="content-container">
        <Col xs={3}>Sets</Col>
        <Col xs={3}>Tiktok</Col>
        <Col>Terms & Conditions</Col>
      </Row>
      <Row className="content-container">
        <Col xs={3}>Accessories</Col>
        <Col xs={3}>Snapchat</Col>
        <Col>Cali Privacy Rights</Col>
      </Row>
      <Row className="content-container">
        <Col xs={3}>Dresses</Col>
        <Col xs={3}>Youtube</Col>
        <Col></Col>
      </Row>
    </div>
  );
};
export default Footer;
