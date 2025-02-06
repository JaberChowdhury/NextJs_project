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
    gameName: string;
    gameGenre: string;
    gameLanguages: string[];
    gameRating: number;
  };
};
const Item = ({ data }: propsType) => {
  const { changeData, setOpen } = useStore();
  const handleClick = () => {
    changeData(<Card>{data.gameLanguages}</Card>);
    setOpen();
  };

  return (
    <Card>
      <CardContent>
        <CardTitle>{data.gameName}</CardTitle>
        <CardDescription>
          {data.gameLanguages.slice(0, 30)}......
        </CardDescription>
        <CardDescription>{data.gameGenre}</CardDescription>
        <CardDescription>{data.gameRating}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button onClick={handleClick}>Read more</Button>
      </CardFooter>
    </Card>
  );
};

export default Item;

//   {
//     gameName: "Cyberpunk 2077",
//     gameRating: 8.7,
//     gameGenre: "Action RPG",
//     gameLanguages: ["English", "Japanese", "French", "Italian", "German"],
//   },
