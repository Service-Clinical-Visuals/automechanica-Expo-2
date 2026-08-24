import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Premium from "./_components/Premium";
import About from "./_components/About";
import Quality from "./_components/Quality";
import Footer from "./_components/Footer";
import AosInit from "./_components/AosInit";
import Lookup from "./_components/Lookup";
import Quality2 from "./_components/Quality2";
import Trends from "./_components/Trends";
import Solutions from "./_components/Solutions";

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
      <Lookup />
      <Quality />
      <Solutions />
      <Quality2 />
      <Trends />
      <Footer />
    </main>
  );
}
