import { Card, CardContent, Stack, Typography } from "@mui/material";
import img1 from "@/public/images/icons/ribon.png";
import img2 from "@/public/images/icons/projects.png";
import img3 from "@/public/images/icons/customers.png";
import img4 from "@/public/images/icons/email.png";
import Image from "next/image";

const Fact = () => {
  const fact_data = [
    {
      id: crypto.randomUUID(),
      icon: img1,
      count: 54,
      title: "Awards Winnings",
    },
    {
      id: crypto.randomUUID(),
      icon: img2,
      count: 1458,
      title: "Project Finished",
    },
    {
      id: crypto.randomUUID(),
      icon: img3,
      count: 590,
      title: "Clients Worked",
    },
    {
      id: crypto.randomUUID(),
      icon: img4,
      count: 522578,
      title: "Email Send",
    },
  ];
  return (
    <Stack sx={{ my: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", lineHeight: 2 }}>
        Some Facts
      </Typography>
      <Typography sx={{ color: "#rgba(114, 114, 114, 1)", fontSize: "16px" }}>
        There are many variations of passages of Lorem Ipsum available, but{" "}
        <br /> the majority have suffered alteration.
      </Typography>
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-around",
          alignItems: "center",
          my: 10,
        }}
      >
        {fact_data.map((fact) => (
          <Card
            key={fact.id}
            sx={{
              border: "1px solid orange",
            }}
          >
            <CardContent>
              <Stack
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  color: "black",
                  gap: 1,
                  p: 2,
                }}
              >
                <Image
                  width={40}
                  height={40}
                  src={fact.icon}
                  alt={fact.title}
                />
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {fact.count}
                </Typography>
                <Typography>{fact.title}</Typography>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
};

export default Fact;
