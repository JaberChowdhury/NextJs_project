"use client";
import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const styles = {
  dark: {
    backgroundColor: "#000000",
    opacity: 1,
    backgroundSize: "12px 12px",
    backgroundImage: "radial-gradient(#ffffff 0.6px, #000000 0.6px)",
  },
  light: {
    backgroundColor: "#ffffff",
    opacity: 1,
    backgroundSize: "12px 12px",
    backgroundImage: "radial-gradient(#000000 0.6px, #ffffff 0.6px)",
  },
};

const theme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: "class",
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
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
