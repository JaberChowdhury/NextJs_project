"use client";
import React from "react";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import { getDarkColors } from "@/constant/colorsData";
import { HEXADECIMAL } from "@/lib/utils/TYPES";
import Grid from "@mui/material/Grid2";
import { Container, CircularProgress } from "@mui/material";

const DarkColors = () => {
  const { data: colors, isLoading } = useQuery<HEXADECIMAL[]>({
    queryKey: ["darkcolors"],
    queryFn: getDarkColors,
  });

  if (isLoading)
    return (
      <Container
        sx={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress size="15rem" />
      </Container>
    );

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

export default DarkColors;
