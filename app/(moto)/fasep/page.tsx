"use client";

import React from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import About from "./_components/About";
import Product360 from "./_components/Product360";
import Products from "./_components/Products";
import Technology from "./_components/Technology";
import MobileService from "./_components/MobileService";
import WheelBalancerFeature from "./_components/WheelBalancerFeature";
import News from "./_components/News";
import Footer from "./_components/Footer";

export default function FasepPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden">
      <Header />

      <main className="relative flex flex-col pt-[120px] lg:pt-[140px]">
        <Banner />
        <About />
        <Product360 />
        <Products />
        <Technology />
        <MobileService />
        <WheelBalancerFeature />
        <News />
        <Footer />
      </main>
    </div>
  );
}
