import type { Metadata } from "next";
import { Exo_2, Oxanium } from "next/font/google";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const oxanium = Oxanium({
  subsets: ["latin"],
  variable: "--font-oxanium",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "FASEP",
  description: "FASEP is an Italian manufacturer of wheel aligners, wheel balancers, and tire changers, combining innovation, precision, and decades of industry expertise.",
};

export default function FasepLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`fasep-root min-h-screen bg-white antialiased overflow-x-hidden relative w-full ${exo2.variable} ${oxanium.variable}`}>
      <VideoProvider>
        {children}
      </VideoProvider>
    </div>
  );
}
