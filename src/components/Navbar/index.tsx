import { Stack, Button } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { ColorSchemesSwitcher } from "../color-schemes-switcher";

const Navbar = () => {
  return (
    <Stack className="flex-row my-6">
      <Link href="/">
        <Button variant="outline" className="px-12">
          Home
        </Button>
      </Link>
      <Link href="/text-analyzer">
        <Button variant="outline">Text-analyzer</Button>
      </Link>
      <ColorSchemesSwitcher />
    </Stack>
  );
};

export default Navbar;
