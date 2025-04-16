import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import { Stack } from "@mantine/core";
import React from "react";
const page = () => {
  return (
    <Stack>
      <Hero />  
      <Main />
      <Footer />
    </Stack>
  );
};

export default page;
