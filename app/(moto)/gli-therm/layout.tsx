import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { VideoProvider } from "@/app/_context/VideoContext";
import "./global.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GLITHERM - Advanced Solutions for Reliable Performance",
  description:
    "GLITHERM provides specialized chemical products and services designed to meet the evolving needs of industrial, automotive, and heating applications.",
};

export default function GlithermLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VideoProvider website="gli-therm">
      <div
        className={`${inter.variable} font-inter min-h-screen bg-white text-slate-900 antialiased selection:bg-[#EE464B] selection:text-white`}
      >
        {children}
      </div>
    </VideoProvider>
  );
}
