import logo from "@/public/assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
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
      <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
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
      </Box>
      <Button
        disableElevation
        variant="contained"
        sx={{
          backgroundColor: "orange",
          px: 3,
          fontWeight: "bold",
          borderRadius: "8px",
          display: { xs: "none", sm: "none", md: "block" },
        }}
      >
        Contact
      </Button>
      <IconButton aria-label="delete">
        <MenuIcon sx={{ fontSize: 30, mx: 3 }} />
      </IconButton>
    </Stack>
  );
};

export default Navbar;
