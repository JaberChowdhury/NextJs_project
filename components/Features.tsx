import { Card, CardContent, Stack, Typography } from "@mui/material";
import Image from "next/image";
import img from "@/public/images/architect.png";

const Features = () => {
  const features_data = [
    {
      id: crypto.randomUUID(),
      title: "Dexktop & Mobile Version",
      desc: (
        <Typography>
          There are many variations of passages of Lorem Ipsum available, <br />{" "}
          but the majority have suffered alteration in some form, by <br />
          injected humour, or randomised...........
        </Typography>
      ),
    },
    {
      id: crypto.randomUUID(),
      title: "Drag & Drop Builder",
      desc: (
        <Typography>
          There are many variations of passages of Lorem Ipsum available, <br />{" "}
          but the majority have suffered alteration in some form, by <br />
          injected humour, or randomised...........
        </Typography>
      ),
    },
    {
      id: crypto.randomUUID(),
      title: "Awesome Modern Design",
      desc: (
        <Typography>
          There are many variations of passages of Lorem Ipsum available, <br />{" "}
          but the majority have suffered alteration in some form, by <br />
          injected humour, or randomised...........
        </Typography>
      ),
    },
    {
      id: crypto.randomUUID(),
      title: "Super Easy to Edit",
      desc: (
        <Typography>
          There are many variations of passages of Lorem Ipsum available, <br />{" "}
          but the majority have suffered alteration in some form, by <br />
          injected humour, or randomised...........
        </Typography>
      ),
    },
  ];
  return (
    <Stack
      direction="row"
      sx={{
        my: 6,
        justifyContent: "space-between",
        // alignItems: "center",
      }}
    >
      <Stack
        sx={{
          gap: 4,
          mt: 8,
        }}
      >
        <Typography
          variant="h4"
          sx={{ borderLeft: "4px solid #FF900E", pl: 2, fontWeight: "bold" }}
        >
          Features you <br />
          will love & enjoy
        </Typography>
        <Typography>
          There are many variations of passages of Lorem Ipsum available, but
          the <br /> majority have suffered alteration in some form, by injected
          humour, or <br /> randomised words which don&apos;t look even
        </Typography>
        <Stack sx={{ gap: 2 }}>
          {features_data.map((feature) => (
            <Card key={feature.id}>
              <CardContent>
                <Stack sx={{ gap: 1 }}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {feature.title}
                  </Typography>
                  {feature.desc}
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Stack>
      <Stack
        sx={{
          position: "relative",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "white",
            p: 3,
            textAlign: "center",
            lineHeight: 1,
            borderRadius: "8px",
            position: "absolute",
            top: "80%",
            left: "-40px",
            backgroundColor: "#FF900E",
          }}
        >
          10+Year <br />{" "}
          <span style={{ fontWeight: "lighter", fontSize: "18px" }}>
            Experience
          </span>
        </Typography>
        <Image width={508} height={782} src={img} alt="image" />
      </Stack>
    </Stack>
  );
};

export default Features;
