"use client";

import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { counterSelector } from "./counterSlice";

const Page = () => {
  const { counter } = useAppSelector(counterSelector);

  console.log(counter, useAppSelector, useAppDispatch, counterSelector);

  return <div>Counter</div>;
};

export default Page;
