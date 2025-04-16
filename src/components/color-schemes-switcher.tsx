"use client";

import { useMantineColorScheme, Button, Stack } from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { useEffect } from "react";

export function ColorSchemesSwitcher() {
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  useEffect(() => {
    setColorScheme("light");
  }, []);
  return (
    <Stack>
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

