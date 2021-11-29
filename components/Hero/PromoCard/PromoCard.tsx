import React from "react";
import { Box, Paper } from "@mui/material";

export default function PromoCard() {
  return (
    <Box
      sx={{
        background: "",
        height: "100%",
        paddingTop: "0",
        position: "absolute",
        left: "0",
        top: "0",
        width: "100%",
        marginLeft: ".5em",
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ flexGrow: "1", padding: "0 0 5px 0" }}>
          <Paper elevation={6} sx={{ height: "100%" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae,
            quam? Eos accusantium veritatis nam, eligendi excepturi illum,
            expedita exercitationem odit quas veniam doloribus voluptatibus
            molestiae nobis, error repellendus. Optio, atque!
          </Paper>
        </Box>
        <Box sx={{ flexGrow: "1", padding: "5px 0 0 0" }}>
          <Paper elevation={6} sx={{ height: "100%" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae,
            quam? Eos accusantium veritatis nam, eligendi excepturi illum,
            expedita exercitationem odit quas veniam doloribus voluptatibus
            molestiae nobis, error repellendus. Optio, atque!
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
