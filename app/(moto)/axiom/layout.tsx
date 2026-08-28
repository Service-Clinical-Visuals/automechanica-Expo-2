import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import SmoothScroller from "./_components/SmoothScroller";
import AOSProvider from "@/app/_components/AOSProvider";
import { VideoProvider } from "@/app/_context/VideoContext";

export const metadata: Metadata = {
  title: "AXIOM Autotech Inc.",
  description: "AXIOM Autotech Inc. Homepage",
  icons: {
    icon: "/moto/axiom/logo.png",
  },
};

export default function AxiomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-poppins bg-white text-[#111111] min-h-screen flex flex-col overflow-x-hidden">
      <VideoProvider>
        <AOSProvider>
          <SmoothScroller>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </SmoothScroller>
        </AOSProvider>
      </VideoProvider>
    </div>
  );
}