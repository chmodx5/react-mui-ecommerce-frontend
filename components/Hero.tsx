import React from "react";
import SideMenu from "./Hero/SideMenu";
import Carousel from "./Hero/Carousel";
import PromoCard from "./Hero/PromoCard";
import { Grid } from "@mui/material";

export default function Hero() {
  return (
    <Grid container sx={{ height: "70vh", marginTop: "5em" }} spacing={2}>
      <Grid item style={{ background: "teal" }} xs={12} sm={12} md={3} lg={3}>
        <SideMenu />
      </Grid>
      <Grid item style={{ background: "red" }} md={6}>
        <Carousel />
      </Grid>
      <Grid item style={{ background: "yellow" }} md={3}>
        <PromoCard />
      </Grid>
    </Grid>
  );
}
