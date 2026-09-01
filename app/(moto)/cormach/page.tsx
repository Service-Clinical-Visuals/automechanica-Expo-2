"use client";

import React from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/360deg";
import Advanced from "./_components/Advanced";
import Wheel from "./_components/Wheel";
import Explore from "./_components/Explore";
import News from "./_components/News";
import Footer from "./_components/Footer";
import Products from "./_components/Products";

export default function MeylePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden font-urbanist">

      <Header />

      <main className="relative flex flex-col">
        <Banner />
        <AboutUs />
        <Deg360 />
        <Products />
        <Advanced />
        <Explore />
        <Wheel />
        <News />

      </main>

      <Footer />

    </div>
  );
}
