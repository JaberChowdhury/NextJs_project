import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import NextLink from "next/link";
import { Button, ButtonGroup } from "@mui/material";

export default function Home() {
  return (
    <Container
      sx={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      maxWidth="lg"
    >
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
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button variant="contained" component={NextLink} href="/tools">
            Tools
          </Button>
          <Button variant="contained" component={NextLink} href="/colors">
            Colors
          </Button>
        </ButtonGroup>
      </Box>
    </Container>
  );
}
