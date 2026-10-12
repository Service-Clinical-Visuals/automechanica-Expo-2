"use client";

import React from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import AboutUs from "./_components/AboutUs";
import Experience360 from "./_components/Experience360";
import ProductCategory from "./_components/ProductCategory";
import AdvancedCare from "./_components/AdvancedCare";
import Bestsellers from "./_components/Bestsellers";
import PrecisionProtection from "./_components/PrecisionProtection";
import Reviews from "./_components/Reviews";
import Footer from "./_components/Footer";
import SmoothAOS from "./_components/SmoothAOS";

export default function NanocleanPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
      <SmoothAOS />
      <Header />
      <main className="relative flex flex-col">
        <Banner />
        <AboutUs />
        <Experience360 />
        <ProductCategory />
        <AdvancedCare />
        <Bestsellers />
        <PrecisionProtection />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}
