import img1 from "@/public/assets/fb.png";
import img4 from "@/public/assets/google+.png";
import img2 from "@/public/assets/kinder.png";
import logo from "@/public/assets/logo.png";
import img3 from "@/public/assets/twitter.png";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const images = [img1, img2, img3, img4];
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      sx={{
        backgroundColor: "#01ACFD",
        p: { xs: 5, md: 10, xl: 10 },
        gap: { xs: 5, md: 0 },
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Stack>
        <Stack
          direction="row"
          sx={{
            justifyContent: "flex-start",
            alignItems: "center",
          }}
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
        <Typography sx={{ color: "white" }}>
          Pizza ipsum dolor meat lovers buffalo. <br />
          Deep dolor roll melted bacon Bianca pan <br />
          bacon pineapple Aussie. Mayo rib sauce <br />
          Hawaiian meatball.
        </Typography>
      </Stack>
      <Stack sx={{ width: { xs: "100%", xl: "auto" } }}>
        <Typography
          sx={{
            fontWeight: "bold",
            color: "white",
          }}
        >
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

      <Stack
        sx={{
          width: { xs: "100%", xl: "auto" },
        }}
      >
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
            <Typography href="#" component={Link} key={index}>
              <Image width={20} height={20} src={img} alt="social" />
            </Typography>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
