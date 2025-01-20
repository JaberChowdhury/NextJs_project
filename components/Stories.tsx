import { Card, Stack, Typography } from "@mui/material";
import React from "react";

const Stories = () => {
  const stories_data = [
    {
      id: crypto.randomUUID(),
      title: "November 19, 2019",
      desc:<Typography></Typography>
    },
  ];
  return (
    <Stack sx={{ justifyContent: "center", alignItems: "center", gap: 6 }}>
      <Typography variant="h3" sx={{ fontWeight: "bold", my: 12 }}>
        Our Stories
      </Typography>
      <Stack>
        <Card></Card>
        <Stack></Stack>
      </Stack>
    </Stack>
  );
};

export default Stories;
