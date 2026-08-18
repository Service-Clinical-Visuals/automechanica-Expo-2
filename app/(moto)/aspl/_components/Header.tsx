"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Typography from "./Typography";

const topNavLinks = [
  { name: "Company", id: "company", hasDropdown: true },
  { name: "Media", id: "media", hasDropdown: true },
  { name: "Support", id: "support", hasDropdown: true },
  { name: "Where to Buy", id: "where-to-buy", hasDropdown: false },
  { name: "Contact", id: "contact", hasDropdown: false },
];

const bottomNavLinks = [
  { name: "Alternators", id: "alternators", hasDropdown: false },
  { name: "Starters", id: "starters", hasDropdown: false },
  { name: "Alternative Parts", id: "alternative-parts", hasDropdown: true },
  { name: "Bearings and Seals", id: "bearings-and-seals", hasDropdown: true },
  { name: "Ignition", id: "ignition", hasDropdown: true },
  { name: "Other", id: "other", hasDropdown: true },
];

const Header = () => {
  const [scrollState, setScrollState] = useState("hidden");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveLink(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const threshold = typeof window !== "undefined" ? window.innerHeight - 100 : 820;

      if (y < threshold) {
        setScrollState("hidden");
      } else {
        setScrollState("sticky");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const isSticky = scrollState === "sticky";

  return (
    <>
      {/* Spacer to prevent content from jumping under the fixed header */}
      <div className="h-[80px] md:h-[100px] xl:h-[150px] w-full shrink-0" />

      <header
        className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm"
      >
        {/* Top Header Row */}
        <div className="h-[80px] md:h-[100px] flex items-center relative z-10 bg-white">
          <div className="custom-container flex items-center justify-between gap-2 md:gap-4 w-full px-4 xl:px-0 h-full">
            {/* Logo and Nav Group */}
            <div className="flex items-center gap-4 xl:gap-8 2xl:gap-20">
              {/* Logo */}
              <Link href="/" className="flex items-center shrink-0">
                <img
                  src="/moto/aspl/logo.png"
                  alt="ASPL Logo"
                  className="h-10 md:h-12 xl:h-[60px] w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </Link>

              {/* Desktop Top Nav */}
              <nav className="hidden xl:flex items-center gap-4 2xl:gap-12 shrink-0">
                {topNavLinks.map((link) => (
                  <div key={link.name} className="relative flex items-center group cursor-pointer">
                    <span className="header-link text-foreground font-normal hover:text-primary transition-colors flex items-center gap-2 xl:gap-4 whitespace-nowrap">
                      {link.name}
                      {link.hasDropdown && <img src="/moto/aspl/dwnarw1.png" alt="Dropdown" className="w-4 h-4 xl:w-5 xl:h-5 object-contain opacity-50" />}
                    </span>
                  </div>
                ))}
              </nav>
            </div>

            {/* Right Side: Search and Lang */}
            <div className="hidden xl:flex items-center justify-end shrink-0 gap-4 2xl:gap-6">
              {/* Search Bar */}
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search for everything..."
                  className="search-links w-[200px] xl:w-[260px] 2xl:w-[300px] h-[40px] xl:h-[45px] rounded-[8px] border border-gray-200 px-3 xl:px-5 outline-none focus:border-primary transition-colors pr-10"
                />
                <button className="absolute right-3 xl:right-4 text-primary font-bold flex items-center justify-center">
                  <img src="/moto/aspl/search.png" alt="Search" className="w-4 h-4 xl:w-5 xl:h-5 object-contain" />
                </button>
              </div>

              {/* Language Selector */}
              <div className="flex items-center gap-3 xl:gap-6 cursor-pointer shrink-0">
                <div className="w-8 h-6 xl:w-10 xl:h-7 bg-gray-200 rounded-[4px]"></div>
                <span className="language-links text-foreground font-normal">EN</span>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="xl:hidden flex items-center gap-3 shrink-0">
              {/* Mobile Language Selector */}
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="w-7 h-5 bg-gray-200 rounded-[3px]"></div>
                <span className="language-links text-foreground font-normal text-sm">EN</span>
              </div>
              
              {/* Mobile Toggle */}
              <button
                className="text-primary p-1 focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Header Row (Red Bar) */}
        <div className="hidden xl:flex h-[50px] bg-primary items-center w-full">
          <div className="custom-container flex items-center justify-center w-full px-4 xl:px-0">
            <nav className="flex items-center gap-6 xl:gap-12 2xl:gap-20 justify-center w-full flex-wrap">
              {bottomNavLinks.map((link) => (
                <div key={link.name} className="relative flex items-center justify-center group cursor-pointer text-white">
                  <span className="header-link font-normal hover:text-gray-200 transition-colors flex items-center gap-1 xl:gap-2 whitespace-nowrap">
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </span>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-2xl py-6 flex flex-col max-h-[calc(100vh-80px)] overflow-y-auto border-t border-gray-100">
            
            <div className="custom-container px-4 xl:px-0 flex flex-col space-y-4">
              <div className="mb-4 relative flex items-center">
                <input
                  type="text"
                  placeholder="Search for everything..."
                  className="w-full h-[45px] rounded-[10px] border border-gray-200 px-5 outline-none focus:border-primary transition-colors pr-12"
                />
                <button className="absolute right-4 text-primary font-bold">
                  <img src="/moto/aspl/search.png" alt="Search" className="w-5 h-5 object-contain" />
                </button>
              </div>
              
              {topNavLinks.map((link) => (
                <div key={link.name} className="relative border-b border-gray-100">
                  <span className="block navbar font-semibold py-3 text-foreground hover:text-primary flex justify-between items-center">
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="w-5 h-5" />}
                  </span>
                </div>
              ))}
            </div>

            <div className="w-full bg-primary/10 mt-6 py-4">
              <div className="custom-container px-4 xl:px-0 space-y-2">
                <span className="block text-primary font-bold mb-2">Products</span>
                {bottomNavLinks.map((link) => (
                  <span key={link.name} className="block text-foreground font-medium py-2 flex justify-between items-center">
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="w-4 h-4 text-gray-400" />}
                  </span>
                ))}
              </div>
            </div>

          </div>
        )}
      </header>
    </>
  );
};

export default Header;
