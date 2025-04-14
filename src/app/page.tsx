"use client";
import ModalComponent from "@/components/Modal";
import { StatsRingCard } from "@/components/StatRingCard";
import { TableComponent } from "@/components/Table";
import { Button, Stack } from "@mantine/core";
import React from "react";
import { IconPlus } from "@tabler/icons-react";
import { ColorSchemesSwitcher } from "@/components/color-schemes-switcher";
import Formcomponent from "@/components/Formcomponent";

const page = () => {
  return (
    <Stack className="justify-center items-center my-7">
      <ColorSchemesSwitcher />
      <Formcomponent />
      <ModalComponent />
      {/* <StatsRingCard /> */}
      <TableComponent />
    </Stack>
  );
};

export default page;
