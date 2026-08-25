"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const activeLink = "Home";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight / 2);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Product", href: "#" },
    { label: "News", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          isScrolled || isMobileMenuOpen
            ? "bg-white shadow-md py-3 translate-y-0 opacity-100 pointer-events-auto" 
            : "bg-white py-4 -translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="custom-container flex items-center justify-between px-6 lg:px-12 xl:px-16">
          {/* Logo */}
          <Link href="#" className="flex-shrink-0">
            <img
              src="/moto/eren/logo.png"
              alt="Eren Logo"
              className="h-10 xl:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`header-link transition-colors font-semibold capitalize tracking-normal ${
                  activeLink === link.label
                    ? "text-[#1a1a1a]"
                    : "text-gray-600 hover:text-[var(--color-primary)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions & Mobile Menu */}
          <div className="flex items-center gap-4 xl:gap-8">
            <div className="hidden xl:block">
              <Button text="Request Quote" />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="xl:hidden text-gray-800 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-10 flex flex-col gap-4 overflow-y-auto xl:hidden">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`header-link py-4 px-10  border-b border-gray-100 transition-colors font-medium capitalize tracking-normal ${
                  activeLink === link.label
                    ? "text-[#1a1a1a]" 
                    : "text-gray-700 hover:text-[var(--color-primary)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex flex-col gap-6 pt-4 px-10 pb-8">
             <Button 
                text="Request Quote" 
                className="w-full  py-3"
              />
          </div>
        </div>
      )}
    </>
  );
}
