import { ColorSchemesSwitcher } from "@/components/color-schemes-switcher";
import { StatsRingCard } from "@/components/StatRingCard";
import { TableComponent } from "@/components/Table";
import { Button, Group } from "@mantine/core";
import { IconPhoto, IconDownload, IconArrowRight } from "@tabler/icons-react";
import React from "react";

const page = () => {
  return (
    <div>
      <div>
        <StatsRingCard />
        <StatsRingCard />
      </div>
      <div>
        <TableComponent />
      </div>
      <div>
        <ColorSchemesSwitcher />
      </div>
      <Group justify="center">
        <Button leftSection={<IconPhoto size={14} />} variant="default">
          Gallery
        </Button>
        <Button rightSection={<IconDownload size={14} />}>Download</Button>
        <Button
          variant="light"
          leftSection={<IconPhoto size={14} />}
          rightSection={<IconArrowRight size={14} />}
        >
          Visit gallery
        </Button>{" "}
        <Button
          leftSection={<IconPhoto size={14} />}
          rightSection={<IconArrowRight size={14} />}
          variant="gradient"
          gradient={{ from: "blue", to: "grape", deg: 198 }}
        >
          Gradient button
        </Button>
        <Button
          loading
          leftSection={<IconPhoto size={14} />}
          rightSection={<IconArrowRight size={14} />}
          variant="gradient"
          gradient={{ from: "blue", to: "grape", deg: 198 }}
        >
          Gradient button
        </Button>
        <Button
          loading
          loaderProps={{ type: "bars" }}
          leftSection={<IconPhoto size={14} />}
          rightSection={<IconArrowRight size={14} />}
          variant="gradient"
          gradient={{ from: "blue", to: "grape", deg: 198 }}
        >
          Gradient button
        </Button>
        <Button
          loading
          loaderProps={{ type: "dots" }}
          leftSection={<IconPhoto size={14} />}
          rightSection={<IconArrowRight size={14} />}
          variant="gradient"
          gradient={{ from: "blue", to: "grape", deg: 198 }}
        >
          Gradient button
        </Button>
        <Button
          loading
          loaderProps={{ type: "oval" }}
          leftSection={<IconPhoto size={14} />}
          rightSection={<IconArrowRight size={14} />}
          variant="gradient"
          gradient={{ from: "blue", to: "grape", deg: 198 }}
        >
          Gradient button
        </Button>
      </Group>
    </div>
  );
};

export default page;
