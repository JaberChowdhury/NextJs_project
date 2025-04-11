import Preview from "@/components/Preview";
import Editor from "@/components/Editor";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <div>
      <Button>Button</Button>
      <div className="flex border w-full">
        <Editor />
        <Preview />
      </div>
    </div>
  );
};

export default page;
