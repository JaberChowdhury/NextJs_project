import React from "react";
import MuiCard from "@mui/material/Card";
import { Paper, Stack } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import Grid from "@mui/material/Grid2";
import Utils from "@/lib/utils/main";
import DialogOptions from "./DialogOptions";
type propsType = {
  main: string;
  opposite: string;
};

const ColorGrid = ({ color }: { color: string }) => {
  return (
    <Grid
      container
      sx={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)" }}
    >
      {color.split("").map((digit, index) => (
        <Grid
          sx={{
            width: "24.5px",
            textAlign: "center",
          }}
          key={index}
          size={{ xs: 2, sm: 4, md: 4 }}
        >
          {digit}
        </Grid>
      ))}
      <ContentCopyOutlinedIcon
        sx={{
          color: "white",
          borderRadius: "50%",
          padding: 0.5,
          cursor: "pointer",
        }}
      />
    </Grid>
  );
};

const Card = ({ main, opposite }: propsType) => {
  const colorUtils = new Utils(main);
  const lightness = colorUtils.generateHSL().main.l;
  return (
    <MuiCard sx={{ minWidth: 150 }} variant="outlined">
      <Stack
        direction="row"
        spacing={0.5}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          margin: 1,
        }}
      >
        {lightness > 50 ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
        <Stack
          direction="row"
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
          spacing={2}
        >
          <FavoriteBorderOutlinedIcon
            sx={{
              cursor: "pointer",
            }}
          />
          <DialogOptions main={main} opposite={opposite}>
            <MoreVertOutlinedIcon />
          </DialogOptions>
        </Stack>
      </Stack>
      <Paper
        sx={{
          width: 200,
          height: 150,
          backgroundImage: `linear-gradient(45deg, ${main} 70%, ${opposite} 30%)`,
        }}
      />
      <Stack
        direction="column"
        spacing={0.5}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          margin: 1,
        }}
      >
        <ColorGrid color={main} />
        <ColorGrid color={opposite} />
      </Stack>
    </MuiCard>
  );
};

export default Card;
