import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Smooth from "./_components/Smooth";
import { VideoProvider } from "@/app/_context/VideoContext";

export const metadata: Metadata = {
  title: "ASAS Filter",
  description:
    "Advanced automotive filtration solutions engineered for reliable performance.",
};

export default function AsasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-full flex flex-col bg-white text-slate-900 max-w-[100vw] overflow-x-clip">
      <VideoProvider>
        <Smooth>
          <Header />
          <main className="flex-grow w-full max-w-[100vw] overflow-x-clip">
            {children}
          </main>
          <Footer />
        </Smooth>
      </VideoProvider>
    </div>
  );
}
