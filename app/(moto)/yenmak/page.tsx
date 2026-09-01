import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Premium from "./_components/Premium";
import About from "./_components/About";
import History from "./_components/History";
import Quality from "./_components/Quality";
import Footer from "./_components/Footer";
import AosInit from "./_components/AosInit";
import Quality2 from "./_components/Quality2";
import Products from "./_components/Products";
import News from "./_components/News";

export const metadata = {
  title: "Speedcar",
  description: "Engineering Performance You Can Trust",
};

export default function Page() {
  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden">
      <AosInit />
      <Header />
      <Hero />
      <About />
      <Premium />
      <Products />
      <Quality />
      <History />
      <Quality2 />
      <News />
      <Footer />
    </main>
  );
}
