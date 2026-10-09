"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import AboutUs from "./_components/AboutUs";
import ProductInAction from "./_components/ProductInAction";
import Products from "./_components/Products";
import ProductFocus from "./_components/ProductFocus";
import Catalogue from "./_components/Catalogue";
import EngineeringExcellence from "./_components/EngineeringExcellence";
import Events from "./_components/Events";
import Footer from "./_components/Footer";

export default function SenfinecoPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col w-full bg-secondary overflow-x-hidden overflow-y-hidden">
      <Header />
      <Banner />
      <AboutUs />
      <ProductInAction />
      <Products />
      <ProductFocus />
      <Catalogue />
      <EngineeringExcellence />
      <Events />
      <Footer />
    </main>
  );
}
