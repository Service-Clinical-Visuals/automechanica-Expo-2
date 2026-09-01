import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Smooth from "./_components/Smooth";
import AOSProvider from "@/app/_components/AOSProvider";
import { VideoProvider } from "@/app/_context/VideoContext";

export const metadata: Metadata = {
  title: "PEK Teknik Makina - Engineering Precision and Performance",
  description: "Engineering Precision and Performance Through Automotive Manufacturing and Integrated Solutions",
};

export default function PekLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <VideoProvider>
        <AOSProvider>
          <Smooth>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </Smooth>
        </AOSProvider>
      </VideoProvider>
    </div>
  );
}