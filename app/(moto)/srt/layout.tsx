import React from "react";
import { Exo_2, Oxanium } from "next/font/google";
import { VideoProvider } from "@/app/_context/VideoContext";

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-exo2",
});

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oxanium",
});

export const metadata = {
  title: "SRT Gear Industry",
  description: "SRT Gear Industry, pioneering precision engineering and top-quality products.",
};

export default function SrtLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${exo2.variable} ${oxanium.variable}`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
