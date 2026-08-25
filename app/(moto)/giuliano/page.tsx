"use client";

import AboutUs from "./_components/About";
import Banner from "./_components/Banner";
import WorkshopEfficiency from "./_components/Efficiency";
import WheelBalancing from "./_components/Explore";
import NewsSection from "./_components/News";
import Product360 from "./_components/Product360";
import ProductShowcase from "./_components/Products";
import ResearchDevelopment from "./_components/Research";
import "./globals.css";


export default function GiulianoPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-[#0D0D0D] overflow-x-hidden font-oxanium">
      <Banner/>
      <AboutUs/>
      <Product360/>
      <ProductShowcase/>
      <WheelBalancing/>
      <ResearchDevelopment/>
      <WorkshopEfficiency/>
      <NewsSection/>
    </main>
  );
}