import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import Link from "next/link";

export default function page() {
  const pagedata = [
    {
      path: "/defaulttable",
      name: "Default table",
    },
    {
      path: "/defaulttable-v2",
      name: "Default table v2
    },
  ];
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid
        container
        sx={{
          "--Grid-borderWidth": "1px",
          borderTop: "var(--Grid-borderWidth) solid",
          borderLeft: "var(--Grid-borderWidth) solid",
          borderColor: "divider",
          "& > div": {
            borderRight: "var(--Grid-borderWidth) solid",
            borderBottom: "var(--Grid-borderWidth) solid",
            borderColor: "divider",
          },
        }}
      >
        {pagedata.map((data, index) => (
          <Grid
            key={index}
            minHeight={160}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
              lg: 3,
            }}
          >
            <Typography variant="h5" href={data.path} component={Link}>
              {data.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
