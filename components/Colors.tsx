import React from "react";
import colorutils from "@/utils/main";
import Color from "./Color";
import { HEXADECIMAL } from "@/utils/TYPES";
import { Stack } from "@mui/material";
const Colors = () => {
  const allcolors: HEXADECIMAL[] = new colorutils().generateColors(200);
  
  return (
    <Stack
      direction="row"
      spacing={0}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {allcolors.map((data, id) => {
        return <Color data={data} />;
      })}
    </Stack>
  );
};

export default Colors;
