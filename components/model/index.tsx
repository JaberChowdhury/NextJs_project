"use client";
import React from "react";
import ModelView from "./ModelView";
import Model from "@/store/useModel";

const index = () => {
  // const { children, content, isClose, isOpen } = useModel();
  const data = Model();
  return <ModelView {...data} />;
};

export default index;
