import { movies } from "@/data/data";
import React from "react";
import Item from "./Item";

const MoviesList = () => {
  return (
    <div>
      <h1 className="text-4xl">MoviesList</h1>
      <div className="w-full flex justify-center items-center flex-col gap-y-4">
        {movies.map((movie, id) => (
          <Item data={movie} key={id} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
