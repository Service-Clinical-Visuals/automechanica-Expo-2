import type { Metadata } from "next";
import "./global.css";
import { Exo_2, Inter } from "next/font/google";
import { VideoProvider } from "@/app/_context/VideoContext";

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-exo2",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Senfineco",
  description: "Engineered for Performance. Designed for Protection.",
};

export default function SenfinecoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${exo2.variable} ${inter.variable}`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
