import { games } from "@/data/data";
import React from "react";
import Item from "./Item";

const GamesList = () => {
  return (
    <div>
      <h1 className="text-4xl">Games list</h1>
      <div className="w-full flex justify-center items-center flex-col gap-y-4">
        {games.map((game, id) => (
          <Item data={game} key={id} />
        ))}
      </div>
    </div>
  );
};

export default GamesList;
