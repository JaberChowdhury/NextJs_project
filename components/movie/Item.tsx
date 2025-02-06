"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import useStore from "@/store/store";

type propsType = {
  data: {
    movieTitle: string;
    moviePrice: string;
    movieDescription: string;
    movieRating: number;
  };
};
const Item = ({ data }: propsType) => {
  const { changeData, setOpen } = useStore();
  const handleClick = () => {
    changeData(<Card>{data.movieDescription}</Card>);
    setOpen();
  };

  return (
    <Card>
      <CardContent>
        <CardTitle>{data.movieTitle}</CardTitle>
        <CardDescription>
          {data.movieDescription.slice(0, 30)}......
        </CardDescription>
        <CardDescription>{data.moviePrice}</CardDescription>
        <CardDescription>{data.movieRating}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button onClick={handleClick}>Read more</Button>
      </CardFooter>
    </Card>
  );
};

export default Item;

//  {
//     movieTitle: "Inception",
//     moviePrice: "$19.99",
//     movieDescription:
//       "A mind-bending thriller about dream manipulation and a thief who steals secrets from people's subconscious.",
//     movieRating: 4.8,
//   }
