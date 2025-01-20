import { Stack, Typography } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        gap: "10px",
        my: 5,
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        G3 Architects
      </Typography>
      <Stack
        direction="row"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          gap: "70px",
          "& .MuiTypography-root": {
            textDecoration: "none",
            color: "#424242",
          },
        }}
      >
        <Typography href={"#"} component={Link}>
          Home
        </Typography>
        <Typography href={"#"} component={Link}>
          About
        </Typography>
        <Typography href={"#"} component={Link}>
          Contact Us
        </Typography>
        <Typography href={"#"} component={Link}>
          Login
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Navbar;
