import { Exo_2, Inter } from "next/font/google";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";


const exo2 = Exo_2({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700", "800"], 
  variable: "--font-exo2" 
});

const inter = Inter({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600"], 
  variable: "--font-inter" 
});

export const metadata = {
  title: "SVAC - Fren ve Ateşleme Sistemleri",
  description: "SVAC - Fren ve Ateşleme Sistemleri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${exo2.variable} ${inter.variable} antialiased`} suppressHydrationWarning>
        <VideoProvider>
          {children}
        </VideoProvider>
      </body>
    </html>
  );
}
