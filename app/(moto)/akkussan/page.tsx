import React from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import About from "./_components/About";
import Feature360 from "./_components/Feature360";
import Products from "./_components/Products";
import Durability from "./_components/Durability";
import CTA from "./_components/CTA";
import Footer from "./_components/Footer";
import "./global.css";

export const metadata = {
  title: "AKKUŞSAN | Reliable Power Transmission",
  description: "Reliable Power Transmission and Smooth Driveline Performance.",
};

export default function AkkussanPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden font-sans">
      <Header />

      <main className="relative flex flex-col">
        <Banner />
        <About />
        <Feature360 />
        <Products />
        <Durability />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
