"use client";
import React from "react";
import { HEXADECIMAL } from "@/lib/utils/TYPES";
import { useQuery } from "@tanstack/react-query";
import { getColors } from "@/constant/colorsData";
import Card from "./Card";
import Grid from "@mui/material/Grid2";
import { CircularProgress, Stack } from "@mui/material";

const Colors = () => {
  const { data: colors, isLoading } = useQuery<HEXADECIMAL[]>({
    queryKey: ["colors"],
    queryFn: getColors,
  });

  if (isLoading) return <CircularProgress size="3rem" />;
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
              id={id}
              key={id}
              main={data.main.color}
              opposite={data.opposite.color}
            />
          );
        })}
    </Grid>
  );
};

export default Colors;
