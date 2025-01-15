import { HEXADECIMAL } from "@/utils/TYPES";
import { Card, Paper, Stack, Typography } from "@mui/material";

interface propstype {
  data: HEXADECIMAL;
}

const Color = ({ data }: propstype) => {
  return (
    <Paper
      sx={{
        width: "20rem",
        height: "200px",
        backgroundColor: data.main.color,
        borderRadius: 0,
      }}
    >
      {data.main.color}
    </Paper>
  );
};

export default Color;
