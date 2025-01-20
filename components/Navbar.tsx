import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import logo from "@/public/assets/logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      sx={{ justifyContent: "space-between", alignItems: "center" }}
    >
      <Stack
        direction="row"
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Image width={62} height={62} src={logo} alt="logo" />
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          School
        </Typography>
      </Stack>
      <Stack
        direction="row"
        sx={{
          gap: 3,
          justifyContent: "center",
          alignItems: "center",
          "& .MuiTypography-root": {
            textDecoration: "none",
          },
        }}
      >
        <Typography
          component={Link}
          href="#"
          variant="h6"
          sx={{ fontWeight: "bold", color: "orange" }}
        >
          Home
        </Typography>
        <Typography
          variant="h6"
          component={Link}
          href="#"
          sx={{ fontWeight: "bold", color: "#01acfd" }}
        >
          About
        </Typography>
        <Typography
          variant="h6"
          component={Link}
          href="#"
          sx={{ fontWeight: "bold", color: "#05D4DF" }}
        >
          Facilites
        </Typography>
        <Typography
          variant="h6"
          component={Link}
          href="#"
          sx={{ fontWeight: "bold", color: "#5D58EF" }}
        >
          Admission
        </Typography>
      </Stack>
      <Button
        disableElevation
        variant="contained"
        sx={{
          backgroundColor: "orange",
          px: 3,
          fontWeight: "bold",
          borderRadius: "8px",
        }}
      >
        Contact
      </Button>
    </Stack>
  );
};

export default Navbar;
