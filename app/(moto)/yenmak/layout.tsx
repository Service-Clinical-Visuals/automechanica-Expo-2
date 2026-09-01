import type { Metadata } from "next";
import { Exo_2, Montserrat } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "../../_context/VideoContext";
import AosInit from "./_components/AosInit";

const fontHeading = Montserrat({
  subsets: ["latin"],
  weight: ["300" ,"400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
  adjustFontFallback: false,
});

const fontBody = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});



export default function EurolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${fontHeading.variable} ${fontBody.variable} antialiased bg-white`}>
      <AosInit />
      <VideoProvider >
        <div className=" overflow-x-hidden relative w-full min-h-screen">
          {children}
        </div>
      </VideoProvider>
    </div>
  );
}
