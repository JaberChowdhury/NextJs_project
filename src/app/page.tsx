"use client";
import { ColorSchemesSwitcher } from "@/components/color-schemes-switcher";
import Formcomponent from "@/components/Formcomponent";
import GridView from "@/components/Gridview";
import Listview from "@/components/Listview";

import ModalComponent from "@/components/Modal";
import { TableComponent } from "@/components/Table";
import { Stack, Tabs } from "@mantine/core";
import {
  IconMessageCircle,
  IconPhoto,
  IconSettings,
} from "@tabler/icons-react";

const page = () => {
  return (
    <Stack className="justify-center items-center my-7">
      <ColorSchemesSwitcher />
      <Formcomponent />
      <ModalComponent />
      {/* <StatsRingCard /> */}
      <Tabs
        className="w-full"
        color="gray"
        variant="pills"
        radius="xl"
        defaultValue="table"
      >
        <Tabs.List className="min-w-full justify-end items-end my-5">
          <Tabs.Tab value="table" leftSection={<IconPhoto size={12} />}>
            Table
          </Tabs.Tab>
          <Tabs.Tab value="grid" leftSection={<IconMessageCircle size={12} />}>
            grid
          </Tabs.Tab>
          <Tabs.Tab value="list" leftSection={<IconSettings size={12} />}>
            list
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel className="w-full" value="table">
          <TableComponent />
        </Tabs.Panel>
        <Tabs.Panel value="grid" className="w-full">
          <GridView />
        </Tabs.Panel>
        <Tabs.Panel value="list" className="w-full">
          <Listview />
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
};

export default page;
