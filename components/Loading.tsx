import { Container, CircularProgress } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Container
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress size="30px" />
    </Container>
  );
};

export default Loading;
