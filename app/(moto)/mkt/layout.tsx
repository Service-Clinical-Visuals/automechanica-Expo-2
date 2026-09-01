import type { Metadata } from "next";
import { Exo, Exo_2, Lato, Oswald } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import SmoothScroller from "./_components/SmoothScroller";
import AOSProvider from "@/app/_components/AOSProvider";
import { VideoProvider } from "@/app/_context/VideoContext";

const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "MKT Holdings, Inc. - Precision Suspension Solutions",
  description:
    "MKT Holdings, Inc. manufactures premium shock absorbers, air suspension systems, and strut assemblies for the global automotive aftermarket.",
};

export default function MktLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${exo.variable} ${exo2.variable} ${lato.variable} ${oswald.variable} min-h-screen flex flex-col bg-white font-body text-body`}
    >
      <VideoProvider>
        <AOSProvider>
          <SmoothScroller />
          <Header />
          <main className="flex-grow w-full">{children}</main>
          <Footer />
        </AOSProvider>
      </VideoProvider>
    </div>
  );
}