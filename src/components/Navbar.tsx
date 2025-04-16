import React from "react";
import Image from "next/image";
import { Button, Stack } from "@mantine/core";
import Link from "next/link";
import { ColorSchemesSwitcher } from "./color-schemes-switcher";

const Navbar = () => {
  return (
    <Stack
      component="nav"
      className="flex-row justify-between items-center p-2 py-6 container mx-auto"
    >
      <Stack className="flex-row justify-center items-center">
        <Image src="/logo.svg" alt="logo" width={32} height={32} sizes="32px" />
        <Stack className="gap-0">
          <div className="text-2xl font-bold">
            <span className="text-[#36B864]">Pro</span>
            <span>Cleaning</span>
          </div>
          <div className="text-xs">Cleaning Services company</div>
        </Stack>
      </Stack>
      <Stack className="flex-row justify-center items-center gap-x-6">
        <Link href="/">Home</Link>
        <Link href="/">About us</Link>
        <Link href="/">Service</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Contact</Link>
      </Stack>
      <Stack className="flex-row">
        <ColorSchemesSwitcher />
        <Button color="teal">Get a quote</Button>
      </Stack>
    </Stack>
  );
};

export default Navbar;
