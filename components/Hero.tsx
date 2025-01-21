import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import herokid from "@/public/assets/hero-kids.png";
const Hero = () => {
  return (
    <Stack
      direction={{ md: "column", xl: "row" }}
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Stack sx={{ alignItems: "flex-start", gap: 2 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          <span style={{ color: "orange" }}>Empowering</span> <br /> students
          from small <br />
          <span style={{ color: "#01acfd" }}>age towards vision</span>
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          With the courage, Confidence, Creativity and Compassion to make <br />
          their Unique Contribution in a Diverse and Dynamic World.
        </Typography>
        <Button
          sx={{
            color: "whitw",
            backgroundColor: "black",
            borderRadius: "12px",
            px: 5,
            py: 1,
          }}
          variant="contained"
        >
          Enroll Now
        </Button>
      </Stack>
      <Image width={468} height={575} src={herokid} alt="hero" />
    </Stack>
  );
};

export default Hero;
