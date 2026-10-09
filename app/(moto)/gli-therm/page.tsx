import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import ReliableBraking from "./_components/ReliableBraking";
import Services from "./_components/Services";
import PrecisionFluid from "./_components/PrecisionFluid";
import Solutions from "./_components/Solutions";
import AdvancedBraking from "./_components/AdvancedBraking";
import CTA from "./_components/CTA";
import Footer from "./_components/Footer";

export const metadata = {
  title: "GLITHERM",
  description: "Advanced Solutions for Reliable Performance",
};

export default function Page() {
  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <ReliableBraking />
      <Services />
      <PrecisionFluid />
      <Solutions />
      <AdvancedBraking />
      <CTA />
      <Footer />
    </main>
  );
}
