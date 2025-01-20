import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import img from "@/public/images/banner.png";

const Hero = () => {
  return (
    <Stack
      gap={4}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        my: 3,
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "bold", textAlign: "center" }}>
        Brand New <br /> Group of Architects
      </Typography>
      <Typography sx={{ textAlign: "center", color: "rgba(114, 114, 114, 1)" }}>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in <br /> some form, by injected
        humour, or randomised words which don&apos;t look even
      </Typography>
      <Button
        LinkComponent={Link}
        href="/explore"
        sx={{ fontSize: "20px", backgroundColor: "#FF900E" }}
        variant="contained"
      >
        Explore More
      </Button>

      <Image src={img} width={1100} height={550} alt="img" />
    </Stack>
  );
};

export default Hero;
