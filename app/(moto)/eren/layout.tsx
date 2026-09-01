import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";


const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlow-condensed",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Eren Balata",
  description: "Precision Diesel Components for Reliable Performance",
};

export default function ErenLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${barlowCondensed.variable} ${inter.variable}`}>
        <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
