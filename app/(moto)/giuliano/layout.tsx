import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import SmoothAnimate from "./_components/SmoothAnimate";
import { VideoProvider } from "@/app/_context/VideoContext";

export const metadata: Metadata = {
  title: "Giuliano Automotive - Professional Tyre Service Equipment",
  description:
    "GIULIANO INDUSTRIAL S.p.A. delivers advanced automotive equipment designed for precision, reliability, and professional performance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full antialiased min-h-full flex flex-col bg-[#0D0D0D]">
      <VideoProvider>
        <SmoothAnimate>
          <Header />
          {children}
          <Footer />
        </SmoothAnimate>
      </VideoProvider>
    </div>
  );
}