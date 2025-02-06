"use client";

import React from "react";
import Combobox, { Status } from "./Combobox";
import { languageData } from "@/data/languageData";
import { styleData } from "@/data/styleData";
import useStore from "@/store/syntaxh_store";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";

const Controller = () => {
  const statuses: Status[] = [
    {
      value: "backlog",
      label: "Backlog",
    },
    {
      value: "todo",
      label: "Todo",
    },
    {
      value: "in progress",
      label: "In Progress",
    },
    {
      value: "done",
      label: "Done",
    },
    {
      value: "canceled",
      label: "Canceled",
    },
  ];

  const {
    updateTheme,
    updateLanguage,
    lineNumber,
    updateLineNumber,
    updateWrapLines,
    wrapLines,
    wrapLongLines,
    updateWrapLongLines,
  } = useStore();

  return (
    <Card className="flex items-center flex-col justify-between lg:justify-start w-full flex-wrap bg-white/[0.4] p-4 rounded-lg gap-y-4 my-3">
      <div className=" w-full flex justify-between lg:justify-start items-center gap-x-3">
        <Combobox
          getValue={updateLanguage}
          statuses={languageData}
          title="Language"
        />
        <Combobox getValue={updateTheme} statuses={styleData} title="Themes" />
      </div>
      <div className=" w-full flex justify-between lg:justify-start items-center gap-x-3 flex-wrap">
        <div className="flex items-center space-x-2">
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Line Number
          </label>
          <Checkbox
            checked={lineNumber}
            onCheckedChange={() => updateLineNumber()}
          />
        </div>
        <div className="flex items-center space-x-2">
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Wrap Line
          </label>
          <Checkbox
            checked={wrapLines}
            onCheckedChange={() => updateWrapLines()}
          />
        </div>
        <div className="flex items-center space-x-2">
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Wrap Long Line
          </label>
          <Checkbox
            checked={wrapLongLines}
            onCheckedChange={() => updateWrapLongLines()}
          />
        </div>
      </div>
    </Card>
  );
};

export default Controller;
