import "./global.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import SmoothScroller from "./_components/SmoothScroller";
import Provider from "./_components/Provider";
import { VideoProvider } from "@/app/_context/VideoContext";

export const metadata = {
  title: "MOGESAN Motor Gomlek Piston San. ve Tic. Ltd. Sti.",
  description:
    "MOGESAN manufactures high-quality engine pistons, cylinder liners, and piston rings, delivering precision, reliability, and performance to customers in over 80 countries.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="font-oswald bg-black text-white">
        <VideoProvider>
          <SmoothScroller />
          <Provider>
            <Header />
            {children}
            <Footer />
          </Provider>
        </VideoProvider>
      </body>
    </html>
  );
}