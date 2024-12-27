import Variants from "@/components/Variants";
import React from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ color: string }>;
}) {
  const color = (await params).color;

  return (
    <div>
      <div>{color}</div>
      <Variants />
    </div>
  );
}
