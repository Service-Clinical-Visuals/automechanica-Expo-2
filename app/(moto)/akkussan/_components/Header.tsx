"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: "Home", href: "#home", active: true },
    { name: "About", href: "#about", active: false },
    { name: "Products", href: "#products", active: false },
    { name: "Contact", href: "#contact", active: false },
  ];

  return (
    <>
      <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${isScrolled ? "bg-white shadow-sm translate-y-0" : "-translate-y-full bg-white shadow-none"}`}>
        <div className="custom-container px-4 xl:px-10 h-[80px] xl:h-[100px] flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center">
          <img 
            src="/moto/akkussan/logo.png" 
            alt="Akkussan Logo" 
            className="h-[40px] xl:h-[50px] w-auto object-contain" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-8 xl:gap-12 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`header-link transition-colors inter ${link.active ? "font-semibold text-[var(--color-primary)]" : "font-medium text-[#111111] hover:text-[var(--color-primary)]"}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden xl:block shrink-0">
          <Button href="#contact" className="px-6 py-3">
            Request Quote
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="xl:hidden relative z-50 text-black p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 z-[55] transition-opacity duration-300 xl:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 left-0 w-full bg-white z-[60] transition-transform duration-300 ease-in-out xl:hidden flex flex-col shadow-xl pb-10 ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Mobile Menu Top Bar (Logo + Close) */}
        <div className="flex items-center justify-between px-4 h-[80px] border-b border-gray-100">
          <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
            <img 
              src="/moto/akkussan/logo.png" 
              alt="Akkussan Logo" 
              className="h-[40px] w-auto object-contain" 
            />
          </Link>
          <button 
            className="text-black p-2"
            onClick={toggleMobileMenu}
            aria-label="Close Menu"
          >
            <X size={32} />
          </button>
        </div>

        {/* Mobile Menu Links */}
        <div className="flex flex-col items-start px-8 pt-8 gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`header-link inter ${link.active ? "font-semibold text-[var(--color-primary)]" : "font-medium text-[#111111]"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            href="#contact" 
            className="mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Request Quote
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
