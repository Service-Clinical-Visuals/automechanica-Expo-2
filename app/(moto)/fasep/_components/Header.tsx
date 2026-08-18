"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import Typography from "./Typography";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About Us", id: "about" },
  { name: "Products", id: "products" },
  { name: "Solutions", id: "solutions" },
  { name: "News", id: "news" },
  { name: "Shop", id: "shop" },
  { name: "Contact Us", id: "contact" },
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
      const threshold = typeof window !== 'undefined' ? window.innerHeight / 2 : 400;

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
      <header
        className={`z-50 transition-all duration-500 ${
          isSticky || mobileMenuOpen
            ? "fixed top-0 left-0 w-full opacity-100 shadow-md bg-white border-b border-gray-200 translate-y-0"
            : "absolute top-6 left-1/2 -translate-x-1/2 w-[95%] lg:w-[95%] opacity-100 bg-white border border-gray-200 shadow-lg "
        }`}
      >
        <div className="h-[70px] sm:h-[80px] md:h-[90px] flex items-center relative z-10 rounded-xl overflow-hidden">
          <div className={`${isSticky ? "custom-container" : "w-full px-6 lg:px-12"} flex items-center justify-between px-8 lg:px-10`}>
            {/* Logo Section */}
            <Link href="/fasep" className="flex items-center shrink-0">
              <img
                src="/moto/fasep/logo.png"
                alt="FASEP Logo"
                className="h-10 sm:h-12 md:h-14 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navbar Links */}
            <nav className="hidden xl:flex items-center space-x-2 2xl:space-x-6 shrink-0">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <div key={link.name} className="relative flex items-center justify-center">
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleScrollTo(e, link.id)}
                      className={` header-link exo2 relative z-10 cursor-pointer py-1 mx-2 flex flex-col items-center justify-center transition-colors ${
                        isActive ? "text-primary underline underline-offset-2 font-semibold" : "text-gray-800 border-transparent hover:text-primary hover:underline hover:font-semibold"
                      }`}
                    >
                      <span className="navbar">
                        {link.name}
                      </span>
                    </a>
                  </div>
                );
              })}
            </nav>

            {/* Right Action: Button */}
            <div className="hidden xl:flex items-center shrink-0">
               <Button text="Get in Touch" href="#contact" />
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              className="xl:hidden text-gray-800 p-2 transition-colors focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-2xl py-6 px-6 flex flex-col space-y-4 max-h-[calc(100vh-70px)] overflow-y-auto">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <div key={link.name} className="relative border-b border-gray-100">
                  <a
                    href={`#${link.id}`}
                    className={`header-link exo2 relative z-10 block navbar cursor-pointer py-4 ${
                      isActive ? "text-primary font-semibold" : "text-gray-800 hover:bg-gray-50"
                    }`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                  >
                    {link.name}
                  </a>
                </div>
              );
            })}
            <div className="pt-6 flex flex-col items-center gap-4">
               <Button text="Get in Touch" href="#contact" className="w-full justify-center" />
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
