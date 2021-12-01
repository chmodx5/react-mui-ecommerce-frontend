import React from "react";
import { Box, Paper, Typography } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

// next, ts, mui, redux, react, jest(tests)

export default function ProductsLayout(props: Props) {
  const { children } = props;

  return (
    <Paper>
      <Box p={1} sx={{ background: "blue" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Products
        </Typography>
      </Box>
      <Box sx={{ height: "300px", padding: "1em .5em .5em .5em" }}>
        {children}
      </Box>
    </Paper>
  );
}
