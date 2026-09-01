import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import SmoothScroll from "./_components/SmoothScroll";
import AOSProvider from "@/app/_components/AOSProvider";
import { VideoProvider } from "@/app/_context/VideoContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YTT Automotive Spare Parts",
  description: "High quality engine, rubber-to-metal and suspension automotive spare parts.",
};

export default function YttLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col bg-white text-slate-900`}
    >
      <VideoProvider>
        <AOSProvider>
          <SmoothScroll>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </SmoothScroll>
        </AOSProvider>
      </VideoProvider>
    </div>
  );
}