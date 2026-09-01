import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import SmoothScroll from "./_components/SmoothScroll";
import AOSProvider from "@/app/_components/AOSProvider";
import { VideoProvider } from "@/app/_context/VideoContext";

export const metadata: Metadata = {
  title: "SNDC - Automotive HVAC Equipment Manufacturer",
  description:
    "SNDC delivers advanced automotive HVAC systems and accessories for OEM and aftermarket sectors.",
};

export default function SndcLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <VideoProvider>
        <AOSProvider>
          <SmoothScroll />
          <Header />
          <main className="flex-grow w-full">{children}</main>
          <Footer />
        </AOSProvider>
      </VideoProvider>
    </div>
  );
}