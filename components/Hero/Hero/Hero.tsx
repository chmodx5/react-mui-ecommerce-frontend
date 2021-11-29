import React from "react";
import SideMenu from "../SideMenu/SideMenu";
import Carousel from "../Carousel/Carousel";
import PromoCard from "../PromoCard/PromoCard";
import { Grid, Box } from "@mui/material";

export default function Hero() {
  return (
    <React.Fragment>
      <Box
        sx={{
          height: "400px",
          marginTop: "4.5em",
          display: "flex",
          position: "relative",
        }}
      >
        <SideMenu />
        <Box
          sx={{
            height: "100%",
            width: "100%",
            marginLeft: "255px",
          }}
        >
          <Grid
            container
            spacing={0}
            sx={{
              padding: "0",
              margin: "0",
              height: "100%",
            }}
          >
            <Grid
              item
              md={8}
              sx={{
                position: "relative",
                padding: "0",
                margin: "0",
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  padding: "0",
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                }}
              >
                <Carousel />
              </Box>
            </Grid>
            <Grid item md={4} sx={{ position: "relative" }}>
              <PromoCard />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </React.Fragment>
  );
}
