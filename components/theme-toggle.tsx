"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  const handleChange = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="flex items-center space-x-2">
      {/*<Sun className="h-4 w-4 text-muted-foreground" />*/}
      <Switch
        checked={isDark}
        onCheckedChange={handleChange}
        aria-label="Toggle dark mode"
      />
      {/*<Moon className="h-4 w-4 text-muted-foreground" />*/}
    </div>
  );
}
