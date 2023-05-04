import React, { useState } from "react";
import "./ProductDescription.css";
import Collapse from "react-bootstrap/Collapse";
import { Row, Col } from "react-bootstrap";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const sizes = [
  {
    size: "XS",
    US: "0-2",
    bust: 33.5,
    waist: 25.5,
    hip: 36.5,
    insteam: 32,
  },
  {
    size: "S",
    US: "4-66",
    bust: 35,
    waist: 27,
    hip: 38,
    insteam: 32,
  },
  {
    size: "M",
    US: "8-10",
    bust: 37,
    waist: 29,
    hip: 40,
    insteam: 32,
  },
  {
    size: "L",
    US: "12-14",
    bust: 39,
    waist: 31,
    hip: 42,
    insteam: 32,
  },
  {
    size: "XL",
    US: "14-16",
    bust: 41,
    waist: 33,
    hip: 44,
    insteam: 32,
  },
  {
    size: "1X",
    US: "16-18",
    bust: 45,
    waist: 40,
    hip: 50,
    insteam: 33.5,
  },
  {
    size: "2X",
    US: "18-20",
    bust: 47,
    waist: 42,
    hip: 52,
    insteam: 33.5,
  },
  {
    size: "3X",
    US: "20-22",
    bust: 49,
    waist: 44,
    hip: 54,
    insteam: 33.5,
  },
];

const ProductDetail = ({ product }) => {
  const [qtt, setQtt] = useState(1);
  const decreaseQtt = () => {
    if (qtt > 1) {
      setQtt(qtt - 1);
    }
  };
  const increaseQtt = () => {
    setQtt(qtt + 1);
  };
  const [isOpen, setIsOpen] = useState({
    model: false,
    material: false,
    shipping: false,
    guide: false,
  });

  const toggleCollapse = (item) => () => {
    setIsOpen((prev) => {
      let newOpen = { ...prev };
      const isOpen = prev[item];
      if (isOpen) {
        newOpen[item] = false;
      } else {
        for (let key in newOpen) {
          newOpen[key] = key === item ? true : false;
        }
      }
      return newOpen;
    });
  };

  return (
    <div className="px-6 mt-sm-5 m-md-5 w-100 w-lg-75">
      <div className="d-flex justify-content-between">
        <p className="fw-600 fs-20">{product.name}</p>
        <p className="fw-600 fs-18 secondary-color">${product.price}</p>
      </div>
      <div className="mt-4">Size</div>
      <Row className="mt-3 px-4">
        {Object.keys(product.inStock)
          .filter((key) => product.inStock[key])
          .map((key, idx) => (
            <Col xs={3} key={idx} className="p-1">
              <button className="w-100 d-block mb-2 primary-btn">{key}</button>
            </Col>
          ))}
      </Row>
      <div className="btn-quantity-container d-flex justify-content-between mt-4">
        <button className=" d-block left-btn " onClick={decreaseQtt}>
          -
        </button>
        <button className="d-block center-btn fw-700">{qtt}</button>
        <button className="d-block right-btn" onClick={increaseQtt}>
          +
        </button>
      </div>
      <button className="d-block w-100 primary-reverse-btn mt-4">
        ADD TO CART
      </button>
      <button className="d-block w-100 primary-reverse-btn mt-4 mb-6 mb-md-5">
        BUY WITH Pay
      </button>
      {product.description.details && (
        <>
          <h4 className="mt-8 mt-md-5 font-weight-bold">Product Details</h4>
          <p className="mb-6 mb-md-5">
            Blossom into your baddest self with this new summer must-have
            &#127800;. This floral maxi dress is gorgeously made with printed
            chiffon, and finished with a cowl neckline, flutter sleeves,and side
            slit to give you an elegant yet flirty look. &#😳;
          </p>
        </>
      )}

      {product.description.model && (
        <button
          className="d-block w-100 primary-btn mt-4"
          onClick={toggleCollapse("model")}
        >
          <div className="d-flex justify-content-between px-4">
            <p className="m-0">MODEL</p>
            {isOpen.model ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          <Collapse in={isOpen.model}>
            <div className="collapse-item">
              <p>100% polyester</p>
            </div>
          </Collapse>
        </button>
      )}

      {product.description.material && (
        <button
          className="d-block w-100 primary-btn mt-4"
          onClick={toggleCollapse("material")}
        >
          <div className="d-flex justify-content-between px-4">
            <p className="m-0">MATERIAL</p>
            {isOpen.material ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          <Collapse in={isOpen.material}>
            <div className="collapse-item">
              <p>100% polyester</p>
            </div>
          </Collapse>
        </button>
      )}

      <button
        className="d-block w-100 primary-btn mt-4"
        onClick={toggleCollapse("shipping")}
      >
        <div className="d-flex justify-content-between px-4">
          <p className="m-0">SHIPPING & RETURNS</p>
          {isOpen.shipping ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        <Collapse in={isOpen.shipping}>
          <div className="collapse-item">
            <p>STANDARD SHIPPING</p>
            <p>Free for orders over $75</p>
            <p>
              Within the US, the estimated transit period is 6-11 business days,
              depending on the delivery address.
            </p>
            <p>
              Within the AU & UK, the estimated transit period is 5-11 business
              days, depending the delivery address.
            </p>
            <p>
              Within the DE, the estimated transit period is 10-15 business
              days, depending the delivery address.
            </p>
            <p>EXPRESS SHIPPING</p>
            <p>
              Within the US, the estimated transit period is 2-5 business days,
              depending on the delivery address.
            </p>
            <p>
              Within the UK, the estimated transit period is 2-5 business days,
              depending the delivery address.
            </p>
            <p>
              Express shipping is not yet available to customers in AU and DE.
            </p>
            <p>FREE RETURNS & EXCHANGES</p>
            <p>
              You can return or exchange your items from domestic orders easily
              with free shipping by clicking here and following the returns
              process.
            </p>
            <p>
              For free international returns shipping, just shoot us an email at
              rewind@finesse.us to get it started!
            </p>
          </div>
        </Collapse>
      </button>

      <button
        className="d-block w-100 primary-btn mt-4"
        onClick={toggleCollapse("guide")}
      >
        <div className="d-flex justify-content-between px-4">
          <p className="m-0">SIZE GUIDE</p>
          {isOpen.guide ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        <Collapse in={isOpen.guide}>
          <div className="collapse-item">
            <Row>
              <Col>
                <p>Size</p>
              </Col>
              <Col>
                <p>US</p>
              </Col>
              <Col>
                <p>Bust</p>
              </Col>
              <Col>
                <p>Hip</p>
              </Col>
              <Col>
                <p>Insteam</p>
              </Col>
            </Row>
            {sizes.map((item, idx) => (
              <Row key={idx}>
                <Col>
                  <p>{item.size}</p>
                </Col>
                <Col>
                  <p>{item.US}</p>
                </Col>
                <Col>
                  <p>{item.bust}</p>
                </Col>
                <Col>
                  <p>{item.hip}</p>
                </Col>
                <Col>
                  <p>{item.insteam}</p>
                </Col>
              </Row>
            ))}
          </div>
        </Collapse>
      </button>
    </div>
  );
};

export default ProductDetail;
