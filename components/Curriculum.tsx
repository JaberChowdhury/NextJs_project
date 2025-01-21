import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";
import img1 from "@/public/assets/kinder.png";
import img2 from "@/public/assets/elementary.png";
import img3 from "@/public/assets/middle.png";
import Image from "next/image";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Curriculum = () => {
  const Curriculum_data = [
    {
      id: crypto.randomUUID(),
      title: "Kinder (3-6) Years",
      desc: (
        <Typography sx={{ textAlign: "center" }}>
          Cum sociis natoque penatibus et magnis <br /> dis parturient montes,
          nascetur ridiculus <br /> mu sdis parturient
        </Typography>
      ),
      img: img1,
      footer: (
        <Typography sx={{ color: "#64C8FF", fontWeight: "bold" }}>
          Read More
        </Typography>
      ),
      bg: "-webkit-linear-gradient(top, rgba(222, 245, 255, 1), transparent, transparent)",
    },
    {
      id: crypto.randomUUID(),
      title: "Elementary School",
      desc: (
        <Typography sx={{ textAlign: "center" }}>
          Cum sociis natoque penatibus et magnis <br /> dis parturient montes,
          nascetur ridiculus <br /> mu sdis parturient
        </Typography>
      ),
      img: img2,
      footer: (
        <Typography sx={{ color: "#F0AA00", fontWeight: "bold" }}>
          Read More
        </Typography>
      ),
      bg: "-webkit-linear-gradient(top, #FFF4DC, transparent, transparent)",
    },
    {
      id: crypto.randomUUID(),
      title: "Middle (10-16) Years",
      desc: (
        <Typography sx={{ textAlign: "center" }}>
          Cum sociis natoque penatibus et magnis <br /> dis parturient montes,
          nascetur ridiculus <br /> mu sdis parturient
        </Typography>
      ),
      img: img3,
      footer: (
        <Typography sx={{ color: "#8700FF", fontWeight: "bold" }}>
          Read More
        </Typography>
      ),
      bg: "-webkit-linear-gradient(top, #F2E8FF, transparent, transparent)",
    },
  ];
  return (
    <Stack sx={{ justifyContent: "center", alignItems: "center", gap: 6 }}>
      <Typography variant="h3" sx={{ fontWeight: "bold", my: 12 }}>
        Standard Curriculum
      </Typography>
      <Stack
        direction={{ md: "column", xl: "row" }}
        sx={{ justifyContent: "center", alignItems: "center", gap: 4 }}
      >
        {Curriculum_data.map((data, id) => (
          <Card
            key={id}
            sx={{
              py: 5,
              background: data.bg,
              boxShadow: "inset 0.1px 0.1px 1px rgba(0, 0, 0, 0.54)",
            }}
          >
            <CardContent
              sx={{
                px: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <Image width={100} height={100} src={data.img} alt={data.title} />
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                {data.title}
              </Typography>
              {data.desc}
              {data.footer}
            </CardContent>
          </Card>
        ))}
      </Stack>
      <Box
        sx={{ display: { xs: "none", sm: "none", md: "none", xl: "block" } }}
      >
        <Stack direction="row" sx={{ gap: 3, my: 5 }}>
          <Typography
            variant="h3"
            sx={{
              width: "60px",
              height: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              backgroundColor: "orange",
              color: "white",
              fontWeight: "bold",
            }}
          >
            <KeyboardArrowLeftIcon />
          </Typography>
          <Typography
            variant="h3"
            sx={{
              width: "60px",
              height: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              backgroundColor: "orange",
              color: "white",
              fontWeight: "bold",
            }}
          >
            <KeyboardArrowRightIcon />
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Curriculum;
