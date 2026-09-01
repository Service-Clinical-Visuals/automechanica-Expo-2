import type { Metadata } from "next";
import "./global.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import SmoothScroller from "./_components/SmoothScroller";
import AOSProvider from "@/app/_components/AOSProvider";
import { VideoProvider } from "@/app/_context/VideoContext";

export const metadata: Metadata = {
  title: "MOGESAN Motor Gomlek Piston San. ve Tic. Ltd. Sti.",
  description:
    "MOGESAN manufactures high-quality engine pistons, cylinder liners, and piston rings, delivering precision, reliability, and performance to customers in over 80 countries.",
};

export default function MogesanLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-oswald bg-black text-white min-h-screen flex flex-col">
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