"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/360deg";
import Wheel from "./_components/Wheel";
import Built from "./_components/Built";
import Products from "./_components/Products";
import AfterSales from "./_components/AfterSales";
import Future from "./_components/Future";
import Footer from "./_components/Footer";

export default function MeylePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden font-urbanist">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Hero />
        <AboutUs />
        <Deg360 />
        <Products />
        <Wheel />
        <Future />
        <Built />
        <AfterSales />

      </main>

      <Footer />
    </div>
  );
}
