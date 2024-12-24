"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import ModeSwitch from "./ModeSwitch";
import MenuDrawer from "./MenuDrawer";
import Link from "next/link";

const pages = [
  {
    name: "Colors",
    id: "1",
    link: "/colors",
  },
  {
    name: "Darkcolors",
    id: "2",
    link: "/colors/darkcolors",
  },
  {
    name: "Lightcolors",
    id: "3",
    link: "/colors/lightcolors",
  },
  {
    name: "About",
    id: "4",
    link: "/about",
  },
];

function ResponsiveAppBar() {
  return (
    <AppBar
      sx={{
        position: "fixed",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        top: 0,
        zIndex: 1000,
      }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            COLOROCEAN
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <MenuDrawer pages={pages} />
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            COLOROCEAN
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.id}
                component={Link}
                href={page.link}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <ModeSwitch />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
