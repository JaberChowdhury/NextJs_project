"use client";
import { createTheme } from "@mui/material/styles";
import { Quicksand } from "next/font/google";

const Quicksand_font = Quicksand({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  defaultColorScheme: "light",
  colorSchemes: { light: true, dark: false },
  cssVariables: {
    colorSchemeSelector: "class",
  },
  typography: {
    fontFamily: Quicksand_font.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { severity: "info" },
              style: {
                backgroundColor: "#60a5fa",
              },
            },
          ],
        },
      },
    },
  },
});

export default theme;
