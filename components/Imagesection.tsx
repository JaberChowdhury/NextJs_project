import { Button, Link, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";
import img1 from "@/public/images/team1.png";
import img2 from "@/public/images/team2.png";
import img3 from "@/public/images/team3.png";
import img4 from "@/public/images/team4.png";

const Imagesection = () => {
  const width = 242;
  const height = 242;
  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        my: 6,
      }}
    >
      <Paper
        sx={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        {[img1, img2, img3, img4].map((item, id) => (
          <Image
            key={id}
            width={width}
            height={height}
            src={item}
            alt="img"
            loading="lazy"
          />
        ))}
      </Paper>
      <Stack
        sx={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 3,
        }}
      >
        <Typography variant="h4">
          Quick list{" "}
          <span style={{ fontWeight: "bold" }}>
            of Our <br />
            <span style={{ color: "#FF900E" }}>Features</span>
          </span>
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            color: "rgba(114, 114, 114, 1)",
          }}
        >
          There are many variations of passages of Lorem Ipsum available,
          <br /> but the majority have suffered alteration in some form, by
          injected <br />
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
      </Stack>
    </Stack>
  );
};

export default Imagesection;
