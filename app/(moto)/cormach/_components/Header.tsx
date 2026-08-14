"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "./Button";
import Typography from "./Typography";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.8;

      if (window.scrollY > threshold) {
        setIsScrolled(true);
        setIsHidden(false);
      } else if (window.scrollY > 100) {
        setIsScrolled(false);
        setIsHidden(true);
      } else {
        setIsScrolled(false);
        setIsHidden(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#", isActive: true },
    { name: "Company", href: "#" },
    { name: "Products", href: "#" },
    { name: "News", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Support", href: "#" },
  ];

  return (
    <header 
      className={`fixed left-0 right-0 z-[100] transition-all duration-300 w-full flex justify-center ${
        isHidden ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
      } ${
        isScrolled 
          ? "top-0 bg-white shadow-md border-b border-gray-200 py-3 min-[2100px]:py-5 min-[3800px]:py-8" 
          : "top-4 bg-transparent py-0"
      }`}
    >
      {/* Content Layer */}
      <div className={`transition-all duration-300 flex items-center justify-between w-full ${
        isScrolled 
          ? "custom-container" 
          : "custom-container rounded-[1.5rem] border border-gray-200 bg-white shadow-sm px-4 lg:px-6 py-2 min-[2100px]:py-4 min-[3800px]:py-6"
      }`}>
          
        {/* Logo Area */}
        <div className="flex-shrink-0 flex items-center w-[45%] sm:w-[35%] md:w-[25%] lg:w-[20%] xl:w-[15%]">
          <Link href="#" className="w-full">
            <img 
              src="/moto/cormach/logo.png" 
              alt="CORMACH Logo" 
              className="w-[90%] md:w-[85%] lg:w-full h-auto object-contain transition-transform duration-300 hover:scale-105" 
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-10 min-[2100px]:gap-12 min-[3800px]:gap-16">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition-colors group flex flex-col"
            >
              <Typography 
                variant="span" 
                color={link.isActive ? "primary" : "dark"} 
                className={`navbar transition-colors group-hover:text-primary ${link.isActive ? "font-bold" : ""}`}
              >
                {link.name}
              </Typography>
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center">
          <Button text="Get in Touch" href="#" showIcon={true} variant="primary" />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button 
            className="text-primary focus:outline-none p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute left-0 w-full bg-white border-t border-gray-100 flex flex-col z-50 overflow-hidden shadow-lg top-full">
          <nav className="flex flex-col py-4 custom-container">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-4 border-b border-gray-100"
              >
                <Typography variant="span" color={link.isActive ? "primary" : "dark"} className={`navbar ${link.isActive ? "font-bold" : ""}`}>
                  {link.name}
                </Typography>
              </Link>
            ))}
            <div className="py-6 flex flex-col items-start">
               <Button text="Get in Touch" href="#" showIcon={true} variant="primary" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
