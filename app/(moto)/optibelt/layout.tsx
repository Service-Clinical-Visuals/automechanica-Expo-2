import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import SmoothAnimation from "./_components/SmoothAnimation";
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
  title: "Optibelt Power Transmission",
  description: "High performance drive belts and power transmission solutions.",
};

export default function OptibeltLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col bg-white text-slate-900`}
    >
      <VideoProvider>
        <AOSProvider>
          <SmoothAnimation />
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </AOSProvider>
      </VideoProvider>
    </div>
  );
}