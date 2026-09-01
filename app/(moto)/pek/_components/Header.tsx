"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-[76px] lg:h-[80px] 2xl:h-[100px] bg-white z-50 shadow-sm transition-all duration-500 ease-in-out box-border ${
        isScrolled
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="custom-container h-full flex items-center justify-between px-0 mx-auto w-full">
        
        {/* Logo Container */}
        <div className="w-[160px] sm:w-[200px] lg:w-[240px] 2xl:w-[310px] h-[40px] sm:h-[48px] lg:h-[55px] relative flex items-center flex-shrink-0">
          <Link href="/moto/pek" className="relative block w-full h-full group">
            <img
              src="/moto/pek/logo.png"
              alt="PEK Technic Engineering Works Logo"
              className="w-full h-full object-contain object-left transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links (Visible above 1025px) */}
        <nav className="hidden min-[1026px]:flex items-center gap-6 xl:gap-8 2xl:gap-[45px]">
          <div className="relative flex flex-col items-center group">
            <Link href="/moto/pek" className="header-link text-base font-bold text-primary transition-colors duration-300">
              Home
            </Link>
            <div className="absolute -bottom-2 w-8 2xl:w-[44px] border-b-2 border-primary transition-all duration-300" />
          </div>

          <div className="relative flex flex-col items-center group">
            <Link href="#about" className="header-link text-base font-normal text-black hover:text-primary transition-colors duration-300">
              About Us
            </Link>
            <div className="absolute -bottom-2 w-0 group-hover:w-8 2xl:group-hover:w-[44px] border-b-2 border-primary transition-all duration-300" />
          </div>

          <div className="relative flex flex-col items-center group">
            <Link href="#vehicles" className="header-link text-base font-normal text-black hover:text-primary transition-colors duration-300">
              Vehicles
            </Link>
            <div className="absolute -bottom-2 w-0 group-hover:w-8 2xl:group-hover:w-[44px] border-b-2 border-primary transition-all duration-300" />
          </div>

          <div className="relative flex flex-col items-center group">
            <Link href="#categories" className="header-link text-base font-normal text-black hover:text-primary transition-colors duration-300">
              Categories
            </Link>
            <div className="absolute -bottom-2 w-0 group-hover:w-8 2xl:group-hover:w-[44px] border-b-2 border-primary transition-all duration-300" />
          </div>

          <div className="relative flex flex-col items-center group">
            <Link href="#contact" className="header-link text-base font-normal text-black hover:text-primary transition-colors duration-300">
              Contact Us
            </Link>
            <div className="absolute -bottom-2 w-0 group-hover:w-8 2xl:group-hover:w-[44px] border-b-2 border-primary transition-all duration-300" />
          </div>
        </nav>

        {/* Desktop Search Bar Input (Visible above 1025px) */}
        <div className="hidden min-[1026px]:flex items-center px-4 2xl:px-[30px] py-2 gap-2 w-full max-w-[240px] xl:max-w-[280px] 2xl:max-w-[354px] h-[42px] 2xl:h-[46px] border border-[#71717A] rounded-[10px] bg-white transition-all duration-300 ease-in-out focus-within:border-primary">
          <Search className="w-5 h-5 text-[#71717A] flex-shrink-0" />
          <input
            type="text"
            placeholder="Search OEM, Product Code or Name....."
            className="w-full bg-transparent text-xs xl:text-sm font-medium text-[#71717A] focus:outline-none placeholder:text-[#71717A]"
          />
        </div>

        {/* Mobile / Tablet Menu Button (Visible up to 1025px) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="min-[1026px]:hidden p-2 text-primary focus:outline-none active:scale-95 transition-transform"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile / Tablet Navigation Dropdown Overlay (Bounded strictly to screen edges) */}
      {isMobileMenuOpen && (
        <div className="min-[1026px]:hidden absolute top-full left-0 right-0 w-full bg-white border-b border-gray-200 px-6 py-6 shadow-xl flex flex-col gap-5 box-border">
          <div className="flex items-center px-4 py-2 gap-2.5 w-full border border-[#71717A] rounded-[10px] bg-white box-border">
            <Search className="w-4 h-4 text-[#71717A] flex-shrink-0" />
            <input
              type="text"
              placeholder="Search OEM, Product Code or Name....."
              className="w-full bg-transparent text-sm font-medium text-[#71717A] focus:outline-none placeholder:text-[#71717A]"
            />
          </div>

          <nav className="flex flex-col gap-4">
            <Link href="/moto/pek" onClick={() => setIsMobileMenuOpen(false)} className="header-link text-base font-bold text-primary">
              Home
            </Link>
            <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="header-link text-base font-normal text-black hover:text-primary">
              About Us
            </Link>
            <Link href="#vehicles" onClick={() => setIsMobileMenuOpen(false)} className="header-link text-base font-normal text-black hover:text-primary">
              Vehicles
            </Link>
            <Link href="#categories" onClick={() => setIsMobileMenuOpen(false)} className="header-link text-base font-normal text-black hover:text-primary">
              Categories
            </Link>
            <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="header-link text-base font-normal text-black hover:text-primary">
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}