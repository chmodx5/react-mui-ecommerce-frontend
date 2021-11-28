import React from "react";
import SideMenu from "./Hero/SideMenu";
import Carousel from "./Hero/Carousel";
import PromoCard from "./Hero/PromoCard";
import { Grid, Box } from "@mui/material";

export default function Hero() {
  return (
    <React.Fragment>
      <Box sx={{ height: "600px", marginTop: "4.5em" }}>
        <SideMenu />
      </Box>
      <Grid container sx={{ height: "70vh", marginTop: "4.5em" }} spacing={2}>
        <Grid></Grid>
        <Grid item md={6}>
          <Carousel />
        </Grid>
        <Grid item md={3}>
          <PromoCard />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
