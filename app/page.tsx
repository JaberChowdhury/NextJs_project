import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center text-4xl">
      <Link href="/todos">
        <Card className="hover:shadow-xl active:shadow-none">
          <CardContent>
            <CardTitle>Todos</CardTitle>
          </CardContent>
        </Card>
      </Link>
      <Link href="/tasks">
        <Card className="hover:shadow-xl active:shadow-none">
          <CardContent>
            <CardTitle>Tasks</CardTitle>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default page;
