import React from "react";

import About from "./_components/About";
import "./global.css";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import Product360 from "./_components/Product360";
import Products from "./_components/Products";
import PrecisionProcess from "./_components/PrecisionProcess";
import Values from "./_components/Values";
import Quality from "./_components/Quality";
import News from "./_components/News";
import Footer from "./_components/Footer";

export default function DepaPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden font-sans">
      <Header />
      <main className="relative flex flex-col">
        <Banner />
        <About />
        <Product360 />
        <Products />
        <PrecisionProcess />
        <Values />
        <Quality />
        <News />
      </main>
      <Footer />
    </div>
  );
}
