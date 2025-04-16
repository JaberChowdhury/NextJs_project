"use client";

import { useMantineColorScheme, Button, Stack } from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";

export function ColorSchemesSwitcher() {
  const { setColorScheme, colorScheme } = useMantineColorScheme();

  return (
    <Stack className="w-full justify-end items-end container px-8 ">
      <Button
        onClick={
          colorScheme === "dark"
            ? () => setColorScheme("light")
            : () => setColorScheme("dark")
        }
        variant="transparent"
        leftSection={colorScheme === "dark" ? <IconSun /> : <IconMoon />}
      ></Button>
    </Stack>
  );
}
