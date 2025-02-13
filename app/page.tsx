import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import GalleryForm from "@/components/GalleryForm";
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";

const page = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default">Add image</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogTitle>Add image</DialogTitle>
          <Tabs defaultValue="form" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="form">Form</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
            </TabsList>
            <TabsContent value="form">
              <GalleryForm />
              <DialogFooter className="sm:justify-start w-full  ">
                <DialogClose asChild>
                  <Button
                    type="button"
                    variant="destructive"
                    className="ml-[70%]"
                  >
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </TabsContent>
            <TabsContent value="preview">
              Change your password here.
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default page;
