import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import logo from "@/public/assets/logo.png";
import img1 from "@/public/assets/fb.png";
import img2 from "@/public/assets/kinder.png";
import img3 from "@/public/assets/twitter.png";
import img4 from "@/public/assets/google+.png";
import Link from "next/link";

const Footer = () => {
  const images = [img1, img2, img3, img4];
  return (
    <Stack
      direction="row"
      sx={{
        backgroundColor: "#01ACFD",
        p: 10,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Stack>
        <Stack
          direction="row"
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <Image
            style={{ backgroundColor: "white" }}
            width={62}
            height={62}
            src={logo}
            alt="logo"
          />
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "white", ml: 2 }}
          >
            Kids <br />
            Education
          </Typography>
        </Stack>
        <Typography sx={{ color: "white", ml: 7 }}>
          Pizza ipsum dolor meat lovers buffalo. <br />
          Deep dolor roll melted bacon Bianca pan <br />
          bacon pineapple Aussie. Mayo rib sauce <br />
          Hawaiian meatball.
        </Typography>
      </Stack>
      <Stack>
        <Typography sx={{ fontWeight: "bold", color: "white" }}>
          About School
        </Typography>
        <Typography
          href="###"
          component={Link}
          sx={{ color: "white", mt: 4, textDecoration: "none" }}
        >
          Home
        </Typography>
        <Typography
          href="###"
          component={Link}
          sx={{ color: "white", textDecoration: "none" }}
        >
          About
        </Typography>
        <Typography
          href="###"
          component={Link}
          sx={{ color: "white", textDecoration: "none" }}
        >
          Facilities
        </Typography>
        <Typography
          href="###"
          component={Link}
          sx={{ color: "white", textDecoration: "none" }}
        >
          Admission
        </Typography>
      </Stack>
      <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
        <Typography variant="h6" sx={{ color: "white" }}>
          Keep In Touch
        </Typography>
        <Stack
          direction="row"
          sx={{
            backgroundColor: "#01ACFD",
            height: 130,
            gap: 1,
            alignItems: "flex-start",
            mt: 2,
          }}
        >
          {images.map((img, index) => (
            <Image width={20} height={20} key={index} src={img} alt="social" />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
