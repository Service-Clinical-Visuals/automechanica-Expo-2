import React from "react";
import { VideoProvider } from "@/app/_context/VideoContext";

export default function AkkussanLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <VideoProvider>
      {children}
    </VideoProvider>
  );
}
