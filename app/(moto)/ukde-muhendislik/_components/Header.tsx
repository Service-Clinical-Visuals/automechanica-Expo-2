"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling half of the banner (viewport height)
      setIsScrolled(window.scrollY > window.innerHeight / 2);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Contacts", href: "#contacts" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          isScrolled || isMobileMenuOpen
            ? "bg-[#171717] shadow-md py-4 translate-y-0 opacity-100 pointer-events-auto" 
            : "bg-[#171717] xl:bg-transparent py-4 translate-y-0 xl:-translate-y-full xl:opacity-0 xl:pointer-events-none opacity-100 pointer-events-auto"
        }`}
      >
        <div className="custom-container px-6 xl:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="#" className="flex-shrink-0">
            <img
              src="/moto/ukde-muhendislik/logo.png"
              alt="SVAC Logo"
              className="h-8 xl:h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8 xl:gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`exo2 header-link  text-white transition-colors ${
                  link.label === "Home" ? "text-white font-bold" : "hover:text-white hover:font-bold "
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden xl:flex items-center">
            <Button href="#quote" className="px-6 py-2.5 inline-block">
              Request Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full z-40 bg-[#171717] pt-24 pb-6 px-10 flex flex-col gap-6 xl:hidden shadow-2xl border-b border-white/10">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`exo2 header-link font-normal text-white transition-colors ${
                link.label === "Home" ? "font-bold" : "hover:font-bold "
              }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="pt-2 pb-2">
             <Button 
                href="#quote" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-3 w-full block text-lg"
              >
                Request Quote
              </Button>
          </div>
        </div>
      )}
    </>
  );
}
