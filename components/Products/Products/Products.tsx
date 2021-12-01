import React from "react";
import ProductsLayout from "../../../layouts/ProductsLayout/ProductsLayout";
import Product from "../Product/Product";

import { Swiper, SwiperSlide } from "swiper/react";
// importing swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//import swiper core
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

//install swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Products() {
  return (
    <ProductsLayout>
      <Swiper
        pagination={{ clickable: true }}
        className="mySwiper"
        style={{ height: "100%" }}
        slidesPerView={5}
        spaceBetween={15}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide
          style={{ background: "red", padding: ".5em" }}
        ></SwiperSlide>
        <SwiperSlide style={{ background: "green" }}>Slide 2</SwiperSlide>
        <SwiperSlide style={{ background: "blue" }}>Slide 3</SwiperSlide>
        <SwiperSlide style={{ background: "yellow" }}>Slide 4</SwiperSlide>
      </Swiper>
      <Product />
    </ProductsLayout>
  );
}
