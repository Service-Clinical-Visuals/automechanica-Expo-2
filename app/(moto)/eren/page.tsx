import React from "react";
import "./global.css";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import About from "./_components/About";
import Product360 from "./_components/Product360";
import Products from "./_components/Products";
import Performance from "./_components/Performance";
import HumanResources from "./_components/HumanResources";
import PrecisionProcess from "./_components/PrecisionProcess";
import News from "./_components/News";
import Footer from "./_components/Footer";

export default function ErenPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Header />
      <main className="relative flex flex-col">
        <Banner />
        <About />
        <Product360 />
        <Products />
        <Performance />
        <HumanResources />
        <PrecisionProcess />    
        <News />
      </main>
      <Footer />
    </div>
  );
}
