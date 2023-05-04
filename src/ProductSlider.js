import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "react-slideshow-image/dist/styles.css";
import ImageCard from "./ImageCard";
import "./ProductSlider.css";
import { useWindowSize } from "./helper";

// xem này nhé:https://dev.to/rakumairu/how-to-handle-swipe-event-on-react-carousel-24ab

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "calc(100vh - 150px)",
};
const slideImages = [
  {
    url: "https://cdn.shopify.com/s/files/1/0237/3346/9261/products/3D-ECOMM-1_c852ff94-f4b9-48fa-a090-dedce54206b5_1680x.jpg?v=1680533372",
    caption: "Slide 1",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0237/3346/9261/products/3D-ECOMM-2_e4bf1010-0356-4976-b42e-82a5a15d1e42_550x.jpg?v=1680533372",
    caption: "Slide 2",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0237/3346/9261/products/3D-ECOMM-3_95371d97-46bb-4ee3-84cd-eab70d693bb6_1100x.jpg?v=1680533371",
    caption: "Slide 3",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0237/3346/9261/products/TIANA_1100x.jpg?v=1680886095",
    caption: "Slide 4",
  },
];
const ProductSlider = ({ images }) => {
  const windowSize = useWindowSize();
  return (
    <div className={`slide-container ${windowSize + "-slide-container"}`}>
      <Swiper
        freeMode={true}
        centeredSlides={true}
        grabCursor={true}
        modules={[FreeMode, Pagination, Scrollbar]}
        className="swiper-container h-100"
        slidesPerView={1}
        spaceBetween={0}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {images.map((url, idx) => (
          <SwiperSlide style={{ width: "100vw" }} key={idx}>
            <ImageCard url={url} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ProductSlider;
