"use client";

import AboutUs from "./_components/About";
import Banner from "./_components/Banner";
import ClimateControlComponents from "./_components/Browse";
import CompressorSystems from "./_components/Compressor";
import Expertise from "./_components/Expertise";
import NewsEvents from "./_components/News";
import ThermalSystemsPortfolio from "./_components/Portfolio";
import ProductEcosystem from "./_components/Product";
import "./globals.css";

export default function SndcPage() {
  return (
    <div className="flex flex-col w-full bg-white font-worksans">
      <Banner />
      <AboutUs />
      <CompressorSystems />
      <Expertise />
      <ThermalSystemsPortfolio />
      <ProductEcosystem />
      <ClimateControlComponents />
      <NewsEvents />
    </div>
  );
}