import React from "react";
import ModeSwitch from "./ModeSwitch";
import { AppBar, Toolbar, IconButton, Typography, Card } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          width: "100%",
          margin: "5px",
          padding: "5px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        variant="dense"
      >
        <Typography variant="h6" href="/" color="inherit" component={Link}>
          Home
        </Typography>
        <ModeSwitch />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
