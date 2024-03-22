import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/index";
import StoreProvider from "./StoreProvider";
import NextTopLoader from "nextjs-toploader";

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
    <html data-theme="dim" lang="en">
      <StoreProvider>
        <body
          style={roboto.style}
          className="container mx-auto px-4 flex items-center relative flex-col"
        >
          <Navbar />
          <main className="w-full flex justify-center items-center flex-col relative">
            <NextTopLoader
              color="#2299DD"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              showSpinner={false}
              easing="ease"
              speed={200}
              shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            />
            {children}
          </main>
        </body>
      </StoreProvider>
    </html>
  );
}
