import React from "react";
import SideMenu from "./Hero/SideMenu";
import Carousel from "./Hero/Carousel";
import PromoCard from "./Hero/PromoCard";

export default function Hero() {
  return (
    <div>
      <h1>hero</h1>
      <SideMenu />
      <Carousel />
      <PromoCard />
    </div>
  );
}
