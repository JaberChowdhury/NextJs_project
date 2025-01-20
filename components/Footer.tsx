import { Stack, Typography } from "@mui/material";
import img1 from "@/public/images/sponsors/spotify.png";
import img2 from "@/public/images/sponsors/amazon.png";
import img3 from "@/public/images/sponsors/google.png";
import img4 from "@/public/images/sponsors/telerama.png";
import img5 from "@/public/images/sponsors/figma.png";
import Image from "next/image";

const Footer = () => {
  const images = [img1, img2, img3, img4, img5];
  return (
    <Stack
      gap={3}
      sx={{ justifyContent: "center", alignItems: "center", my: 8 }}
    >
      <Typography variant="h3" sx={{ fontWeight: "bold", textAlign: "center" }}>
        Our Sponspors
      </Typography>
      <Typography sx={{ textAlign: "center" }}>
        There are many variations of passages of Lorem Ipsum available, but{" "}
        <br /> the majority have suffered alteration.
      </Typography>
      <Stack
        gap={3}
        direction="row"
        sx={{ justifyContent: "space-around", alignItems: "center", my: 3 }}
      >
        {images.map((image, id) => (
          <Image
            key={id}
            style={{ filter: "grayscale(100%)" }}
            width={166}
            height={50}
            src={image}
            alt="img"
          />
        ))}
      </Stack>
      <Typography
        sx={{
          backgroundColor: "#FFF4E7",
          textAlign: "center",
          p: 3,
          width: "100%",
          borderRadius: "8px",
        }}
      >
        All rights reserved copyright@2023 startup landing page design
      </Typography>
    </Stack>
  );
};

export default Footer;
