"use client";
import herokid from "@/public/assets/hero-kids.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
const HeroImage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("xs"));
  return (
    <Image
      width={(matches && 368) || 468}
      height={(matches && 475) || 575}
      src={herokid}
      alt="hero"
    />
  );
};

export default HeroImage;
