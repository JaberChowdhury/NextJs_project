"use client";
import React from "react";
import ModelView from "./ModelView";
import useModel from "@/store/useModel";

const index = () => {
  // const { children, content, isClose, isOpen } = useModel();
  return <ModelView {...useModel()} />;
};

export default index;
