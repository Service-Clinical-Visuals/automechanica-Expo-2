"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/Deg360";
import Products from "./_components/Products";
import Technology from "./_components/Technology";
import Stats from "./_components/Stats";
import Reliability from "./_components/Reliability";
import News from "./_components/News";
import Footer from "./_components/Footer";

export default function AsplPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden font-primary">
      <Header />

      <main className="relative flex flex-col">
        <Hero />
        <AboutUs />
        <Deg360 />
        <Products />
        <Technology />
        <Stats />
        <Reliability />
        <News />
        
        {/* Other sections will be added here later */}
      </main>

      <Footer />
    </div>
  );
}
