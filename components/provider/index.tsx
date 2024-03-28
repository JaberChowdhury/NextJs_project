import { ThemeProvider } from "@/components/theme-provider";
import React from "react";

interface propsType {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: propsType) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

export default ContextProvider;
