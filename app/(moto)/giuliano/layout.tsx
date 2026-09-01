import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import SmoothAOS from "./_components/SmoothAOS";
import { VideoProvider } from "@/app/_context/VideoContext";

export const metadata: Metadata = {
  title: "Giuliano Automotive - Professional Tyre Service Equipment",
  description:
    "GIULIANO INDUSTRIAL S.p.A. delivers advanced automotive equipment designed for precision, reliability, and professional performance.",
};

export default function GiulianoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#0D0D0D] text-white">
      <SmoothAOS />
      <VideoProvider>
        <Header />
        <main className="flex-grow w-full">{children}</main>
        <Footer />
      </VideoProvider>
    </div>
  );
}