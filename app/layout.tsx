import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
// import ModeSwitch from "@/components/ModeSwitch";
import { Container, Stack } from "@mui/material";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Stack sx={{ backgroundColor: "rgba(255, 144, 14, 0.1)" }}>
          <Container>
            <Navbar />
          </Container>
          <Hero />
        </Stack>
        <Container>
          <InitColorSchemeScript attribute="class" />
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              {/* <ModeSwitch /> */}
              {props.children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </Container>
      </body>
    </html>
  );
}
