"use client";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import { getLightColors } from "@/constant/colorsData";
import { HEXADECIMAL } from "@/lib/utils/TYPES";
import Grid from "@mui/material/Grid2";
import Loading from "./Loading";

const LightColors = () => {
  const { data: colors, isLoading } = useQuery<HEXADECIMAL[]>({
    queryKey: ["lightcolors"],
    queryFn: getLightColors,
  });

  if (isLoading) return <Loading />;

  return (
    <Grid
      container
      direction="row"
      spacing={2}
      sx={{
        justifyContent: "space-around",
        alignItems: "center",
        padding: "5px",
      }}
    >
      {colors &&
        colors.map((data, id: number) => {
          return (
            <Card
              key={id}
              main={data.main.color}
              opposite={data.opposite.color}
            />
          );
        })}
    </Grid>
  );
};

export default LightColors;
