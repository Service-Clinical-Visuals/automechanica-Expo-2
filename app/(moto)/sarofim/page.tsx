import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Premium from "./_components/Premium";    
import About from "./_components/About";
import Footer from "./_components/Footer";
import AosInit from "./_components/AosInit";
import Products from "./_components/Products";
import Quality from "./_components/Quality";
import Quality2 from "./_components/Quality2";
import Service from "./_components/Service";
import Latest from "./_components/Latest";

export const metadata = {
  title: "Ramoil",
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
      <Service />
      <Quality2 />
      <Latest />
      <Footer />
    </main>
  );
}
