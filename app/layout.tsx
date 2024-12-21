import type { Metadata } from "next";
import { Geist, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import Navbar from "@/components/custom/Navbar";
import NextTopLoader from "nextjs-toploader";
import Utils from "@/lib/colorUtils/main";
import QueryClientProvider from "@/components/QueryClientProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "colorOcean",
  description: "welcome to the ocean of color",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const colorUtils = new Utils();
  const darkColor = colorUtils.generateDarkColorVariant(1);
  const color = darkColor[0].main.color;
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${inter.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <NextTopLoader
          color={color}
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          // showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        <QueryClientProvider> {children}</QueryClientProvider>
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] -z-10"
          )}
        />
      </body>
    </html>
  );
}
