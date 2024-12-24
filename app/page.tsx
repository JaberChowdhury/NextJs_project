import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import NextLink from "next/link";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Drive in the color of Ocean
        </Typography>
        <Button variant="contained" component={NextLink} href="/about">
          About
        </Button>
      </Box>
    </Container>
  );
}
