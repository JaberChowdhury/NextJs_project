"use client";

import Code from "@/components/Code";
import Controller from "@/components/Controller";
import useStore from "@/store/syntaxh_store";
import React from "react";

const page = () => {
  const typescript_code = `
export interface propsType {
  codeString: string;
  language: string;
  style: typeof docco;
}
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`;

  const { theme, language } = useStore();
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col px-6 lg:px-0">
      <Controller />

      <div className="space-y-5 w-full">
        <Code codeString={typescript_code} language={language} style={theme} />
      </div>
    </div>
  );
};

export default page;
