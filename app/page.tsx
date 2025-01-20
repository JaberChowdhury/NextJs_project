import Fact from "@/components/Fact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Imagesection from "@/components/Imagesection";
import { Stack } from "@mui/material";

const page = () => {
  return (
    <Stack>
      <Imagesection />
      <Features />
      <Fact />
      <Footer />
    </Stack>
  );
};

export default page;
