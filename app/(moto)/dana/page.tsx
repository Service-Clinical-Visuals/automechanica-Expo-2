"use client";

import React from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import Products from "./_components/Products";
import Footer from "./_components/Footer";
import Precision from "./_components/Precision";
import Advanced from "./_components/Advanced";
import Performance from "./_components/Performance";
import Latest from "./_components/Latest";
import Digital from "./_components/Digital";
import Driven from "./_components/Driven";

export default function DanaPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden font-urbanist">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Banner />
        <AboutUs />
        <Precision />
        <Products />
        <Advanced />
        <Digital />
        <Performance />
        <Latest />
        <Driven />

      </main>

      <Footer />

    </div>
  );
}
