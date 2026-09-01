import React from "react";
import "./global.css";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import About from "./_components/About";
import Product360 from "./_components/Product360";
import Products from "./_components/Products";
import Quality from "./_components/Quality";
import Gearbox from "./_components/Gearbox";
import ProductRange from "./_components/ProductRange";
import Performance from "./_components/Performance";
import News from "./_components/News";
import Footer from "./_components/Footer";

export default function SrtPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden font-sans">
      <Header />
      <main className="relative flex flex-col">
        <Banner />
        <About />
        <Product360 />
        <Products />
        <Quality />
        <Gearbox />
        <ProductRange />
        <Performance />
        <News />
      </main>
      <Footer />
    </div>
  );
}
