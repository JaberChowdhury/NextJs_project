"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { useColorScheme } from "@mui/material/styles";
import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import { IconButton } from "@mui/material";

export default function ModeSwitch() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        mt: 1,
        p: 1,
        cursor: "pointer",
      }}
      onClick={() => setMode(mode === "dark" ? "light" : "dark")}
    >
      <IconButton aria-label="delete">
        {mode === "dark" ? <ModeNightRoundedIcon /> : <LightModeRoundedIcon />}
      </IconButton>
    </Box>
  );
}
