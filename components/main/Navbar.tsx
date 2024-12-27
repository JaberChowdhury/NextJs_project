"use client";
import { AppBar, Autocomplete, Button, Stack, TextField } from "@mui/material";
import React from "react";
import logo from "../../public/logo.png";
import Image from "next/image";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const searchDate = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];

  return (
    <AppBar
      sx={{
        px: 2,
        backgroundColor: "#fff000",
      }}
      position="static"
    >
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Image
          src={logo}
          sizes="40px"
          alt="Picture of the author"
          loading="lazy" // {lazy} | {eager}
        />{" "}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Autocomplete
              disablePortal
              options={searchDate}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Search" />}
            />
            <SearchIcon />
          </Stack>
          <Button sx={{ width: 4 }} variant="contained">
            <ShoppingCartIcon />
          </Button>
        </Stack>
      </Stack>
    </AppBar>
  );
};

export default Navbar;
