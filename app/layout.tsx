import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import Navbar from "@/components/Navbar";
import QueryProvider from "@/components/provider/QueryClientProvider";

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <QueryProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Navbar />
              {props.children}
            </ThemeProvider>{" "}
          </QueryProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
