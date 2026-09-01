"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Check, Settings, Globe, ChevronDown } from "lucide-react";
import Button from "./Button";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Products", id: "products" },
  { name: "Application", id: "application", hasDropdown: true },
  { name: "Literature", id: "literature", hasDropdown: true },
  { name: "News", id: "news" },
  { name: "Contact", id: "contact" },
];

const PartsCheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const SolidGearIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" fill="currentColor" {...props}>
    <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
  </svg>
);

const SolidGlobeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 496 512" fill="currentColor" {...props}>
    <path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32c0-17.67-14.33-32-32-32h-64c-17.67 0-32-14.33-32-32v-96c0-17.67 14.33-32 32-32h14.09c1.59 0 3.12-.48 4.4-1.39l42.84-30.6c2.06-1.47 3.56-3.42 4.49-5.6 14.51-33.82 48.06-57.51 86.81-57.51 53.02 0 96 42.98 96 96 0 16.9-4.38 32.79-11.97 46.73-1.61 2.96-1.74 6.46-.35 9.53l6.45 14.15c2.47 5.43 1.05 11.83-3.4 15.69-15.5 13.43-34.93 25.13-57.58 32.18-7.79 2.42-12.97 9.68-12.97 17.89 0 20.32-8.07 39.43-22.73 53.81zM388.94 286.98c-17.83-8.8-31.11-23.36-39.06-40.79-2.07-4.54-5.38-8.38-9.58-11.14l-4.13-2.71c-3.15-2.07-4.73-5.83-3.82-9.45l2.42-9.67c1.37-5.46-.22-11.23-4.22-15.22-4-4-9.76-5.58-15.22-4.22l-9.67 2.42c-3.62.9-7.38-.67-9.45-3.82l-2.71-4.13c-2.76-4.2-6.6-7.51-11.14-9.58-17.44-7.94-31.99-21.23-40.79-39.06-2.58-5.23-7.9-8.49-13.68-8.49H176c-8.84 0-16 7.16-16 16v96c0 8.84 7.16 16 16 16h64c8.84 0 16 7.16 16 16v32c0 8.84-7.16 16-16 16v40.35c19.06 14.83 23.3 42.44 9.17 61.64-1.28 1.74-2.71 3.37-4.29 4.86l14.73 39.69C338.99 432.22 400 352.79 400 256c0-43.14-11.29-83.6-30.82-118.84-5.88-10.6-19.46-13.79-29.28-6.95-9.82 6.84-11.66 20.61-4.04 29.89 12.19 14.85 19.82 33.39 21.6 53.37 1.51 16.92-9.33 32.18-25.68 36.32-9.3 2.36-16.7 9.77-19.06 19.06-2.35 9.29 2.59 18.73 11.24 22.84z" />
  </svg>
);

const topNavLinks = [
  { name: "Parts Availability", icon: PartsCheckIcon, id: "parts" },
  { name: "Ratio Flex Program", icon: SolidGearIcon, id: "ratio" },
  { name: "North America", icon: SolidGlobeIcon, id: "region" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
      setIsScrolled(window.scrollY > 40);
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

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">

        {/* Top Red Bar */}
        <div
          className={`w-full bg-[var(--color-primary)] text-white flex items-center justify-center md:justify-end px-2 sm:px-4 lg:px-10 transition-all duration-300 overflow-hidden ${isScrolled ? "h-0 opacity-0" : "h-8 sm:h-10 opacity-100"
            }`}
        >
          <div className="flex items-center gap-3 sm:gap-8 overflow-x-auto hide-scrollbar w-full md:w-auto">
            {topNavLinks.map((item) => (
              <Link key={item.name} href={`#${item.id}`} className="flex items-center gap-1 sm:gap-2 hover:opacity-80 transition-opacity whitespace-nowrap">
                <item.icon className="w-3 h-3 sm:w-5 sm:h-5 shrink-0" strokeWidth={2.5} />
                <span className="navbar font-medium">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Main White Header */}
        <div className={`w-full bg-white transition-all duration-300 ${isScrolled ? "shadow-md py-3" : "shadow-sm py-4"
          }`}>
          <div className="custom-container flex items-center justify-between gap-4 w-full px-4 lg:px-8">

            {/* Logo Section */}
            <Link href="/" className="flex items-center shrink-0">
              <img
                src="/moto/dana/logo.png"
                alt="Spicer Logo"
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navbar Links */}
            <nav className="hidden xl:flex items-center space-x-6 shrink-0">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <div key={link.name} className="relative flex items-center group">
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleScrollTo(e, link.id)}
                      className={`flex items-center gap-1 cursor-pointer transition-colors ${isActive ? "text-[var(--color-primary)] font-bold" : "text-black hover:text-[var(--color-primary)] font-semibold"
                        }`}
                    >
                      <span className="navbar">
                        {link.name}
                      </span>
                      {link.hasDropdown && <ChevronDown className="w-4 h-4 mt-0.5" strokeWidth={2.5} />}
                    </a>
                  </div>
                );
              })}
            </nav>

            {/* Right Action: Change Region Button */}
            <div className="hidden xl:flex items-center shrink-0">
              <Button text="Change Region" href="#region" />
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              className="xl:hidden text-black p-2 transition-colors focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-2xl py-6 px-6 flex flex-col space-y-4 max-h-[calc(100vh-70px)] overflow-y-auto border-t border-gray-100">

            <div className="flex flex-col space-y-2 border-b border-gray-100 pb-4 mb-2">
              {topNavLinks.map((item) => (
                <Link key={item.name} href={`#${item.id}`} className="flex items-center gap-3 text-black hover:text-[var(--color-primary)] py-2 transition-colors">
                  <item.icon className="w-5 h-5" strokeWidth={2} />
                  <span className="font-semibold text-sm">{item.name}</span>
                </Link>
              ))}
            </div>

            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <div key={link.name} className="relative border-b border-gray-50 pb-2">
                  <a
                    href={`#${link.id}`}
                    className={`flex items-center justify-between navbar cursor-pointer py-2 ${isActive ? "text-[var(--color-primary)]" : "text-black hover:text-[var(--color-primary)]"
                      }`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown && <ChevronDown className="w-5 h-5" strokeWidth={2} />}
                  </a>
                </div>
              );
            })}

            <div className="pt-4 flex flex-col items-center">
              <Button text="Change Region" href="#region" onClick={() => setMobileMenuOpen(false)} className="w-full" />
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
