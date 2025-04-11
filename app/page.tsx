import Editor from "@/components/Editor";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <div>
      <Button>Button</Button>
      <div>
        <Editor />
      </div>
    </div>
  );
};

export default page;
