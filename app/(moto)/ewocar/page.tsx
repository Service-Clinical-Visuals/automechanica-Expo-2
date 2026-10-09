"use client";

import React from "react";
import SmoothAOS from "./_components/SmoothAOS";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/Deg360";
import Products from "./_components/Products";
import Precision from "./_components/Precision";
import WhyChoose from "./_components/WhyChoose";
import AdvancedFormula from "./_components/AdvancedFormula";
import Partners from "./_components/Partners";
import Footer from "./_components/Footer";

export default function EwocarPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Banner />
        <AboutUs />
        <Deg360 />
        <Products />
        <Precision />
        <WhyChoose />
        <AdvancedFormula />
        <Partners />
      </main>

      <Footer />
    </div>
  );
}
