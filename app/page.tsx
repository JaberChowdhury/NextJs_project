import GamesList from "@/components/games/GamesList";
import MoviesList from "@/components/movie/MoviesList";
import React from "react";

const page = () => {
  return (
    <div>
      <GamesList />
      <MoviesList />
    </div>
  );
};

export default page;

