import React from "react";
import MuiCard from "@mui/material/Card";
import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
type propsType = {
  main: string;
  opposite: string;
  id?: number;
};
const Card = ({ main, opposite, id = 1 }: propsType) => {
  return (
    <MuiCard sx={{ minWidth: 150 }} variant="outlined">
      <Paper
        sx={{
          width: 100,
          height: 100,
          backgroundImage: `linear-gradient(45deg, ${main} 70%, ${opposite} 30%)`,
        }}
      />
    </MuiCard>
  );
};

export default Card;
