import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/index";
import StoreProvider from "./StoreProvider";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata: Metadata = {
  title: "Color web",
  description: "next generation color tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="sunset" lang="en">
      <StoreProvider>
        <body
          style={roboto.style}
          className="container mx-auto px-4 flex items-center relative flex-col"
        >
          <Navbar />
          <main>{children}</main>
        </body>
      </StoreProvider>
    </html>
  );
}
