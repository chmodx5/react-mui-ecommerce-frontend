import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material/";

export default function Product() {
  return (
    <Card sx={{ height: "100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image="https://source.unsplash.com/9SZ4xzqM7XQ"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            I phone 13 xl
          </Typography>
          <Typography gutterBottom variant="h6" component="h5">
            ksh: 4000
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
