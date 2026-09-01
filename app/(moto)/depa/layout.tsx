import React from "react";
import { Oswald, Rubik } from "next/font/google";
import { VideoProvider } from "@/app/_context/VideoContext";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rubik",
});

export const metadata = {
  title: "Depa | Advancing Automotive Remanufacturing",
  description: "Reliable remanufactured parts for a sustainable automotive future.",
};

export default function DepaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${oswald.variable} ${rubik.variable}`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
