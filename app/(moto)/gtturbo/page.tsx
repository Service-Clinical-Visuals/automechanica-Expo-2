"use client";

import React from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/360deg";
import ProductRange from "./_components/ProductRange";
import Premium from "./_components/Premium";
import Applications from "./_components/Applications";
import Choose from "./_components/Choose";
import Business from "./_components/Business";
import Magazines from "./_components/Magazines";
import CtaBanner from "./_components/CtaBanner";
import Footer from "./_components/Footer";

export default function EldonsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden font-sora">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Banner />
        <AboutUs />
        <Deg360 />
        <Applications />
        <Choose />
        <ProductRange />
        <Premium />
        <Business />
        <Magazines />
        <CtaBanner />
      </main>
      <Footer />

    </div>
  );
}
