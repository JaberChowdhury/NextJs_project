import type { Metadata } from "next";
import { Geist, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import Navbar from "@/components/custom/Navbar";

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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${inter.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] -z-10"
          )}
        />
      </body>
    </html>
  );
}
