import Curriculum from "@/components/Curriculum";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Stories from "@/components/Stories";
import { Stack } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <Stack sx={{ my: 3 }}>
      <Navbar />
      <Hero />
      <Curriculum />
      <Stories />
      <Footer />
    </Stack>
  );
};

export default page;
