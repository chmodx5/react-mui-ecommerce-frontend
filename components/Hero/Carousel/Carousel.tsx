import React from "react";
import { Paper, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
// importing swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//import swiper core
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

//install swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Carousel() {
  return (
    <Paper elevation={4} sx={{ height: "100%", padding: "0" }}>
      <Box sx={{ height: "100%" }}>
        <Swiper
          pagination={{ clickable: true }}
          className="mySwiper"
          style={{ height: "100%" }}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide style={{ background: "red" }}>Slide 1</SwiperSlide>
          <SwiperSlide style={{ background: "green" }}>Slide 2</SwiperSlide>
          <SwiperSlide style={{ background: "blue" }}>Slide 3</SwiperSlide>
          <SwiperSlide style={{ background: "yellow" }}>Slide 4</SwiperSlide>
        </Swiper>
      </Box>
    </Paper>
  );
}
