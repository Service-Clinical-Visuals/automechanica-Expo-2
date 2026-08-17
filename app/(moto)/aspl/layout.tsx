import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

const sora = Sora({ 
  subsets: ["latin"], 
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "ASPL",
  description: "AS Alternators, Starters & Parts",
};

export default function AsplLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`aspl-root min-h-screen bg-white antialiased overflow-x-hidden relative w-full ${sora.variable}`}>
      <SmoothAOS />
      <VideoProvider>
        {children}
      </VideoProvider>
    </div>
  );
}
