"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Search } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#", active: true },
  { name: "History", href: "#" },
  { name: "Parts", href: "#" },
  { name: "E-Store", href: "#" },
  { name: "Stocklist", href: "#" },
  { name: "Terrain Tammer TV", href: "#" },
  { name: "Merchandise", href: "#" },
  { name: "Contact Us", href: "#" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-white
        overflow-x-hidden
        overflow-y-hidden
        transition-all
        duration-500
        ease-out
        ${
          isScrolled
            ? "translate-y-0 opacity-100 shadow-md pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }
      `}
    >
      <div className="custom-container overflow-x-hidden overflow-y-hidden">
        <div className="flex items-center justify-between h-[100px]">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 transition-transform duration-300 ease-out hover:scale-[1.02]"
          >
            <img
              src="/moto/terrain/logo.png"
              alt="Terrain Tamer 4WD Parts"
              className="w-[220px] md:w-[280px] [@media(min-width:1250px)_and_(max-width:1499px)]:!w-[240px] min-[1500px]:w-[333px] h-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden min-[1250px]:flex items-center gap-5 [@media(min-width:1250px)_and_(max-width:1499px)]:gap-3 min-[1500px]:gap-6 overflow-x-hidden overflow-y-hidden">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`nav-link group relative text-center whitespace-nowrap flex-shrink-0 transition-all duration-300 ease-out [@media(min-width:1250px)_and_(max-width:1499px)]:!text-[15px] ${
                  link.active
                    ? "text-[#FECC00] font-normal"
                    : "text-[#4B5563] font-normal hover:text-[#FECC00]"
                }`}
              >
                {link.name}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#FECC00] transition-all duration-300 ease-out ${
                    link.active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden min-[1250px]:flex items-center gap-5 [@media(min-width:1250px)_and_(max-width:1499px)]:gap-3 flex-shrink-0 overflow-x-hidden overflow-y-hidden">
            <Link
              href="#"
              className="group flex items-center gap-2 border-2 border-[#FECC00] rounded-[5px] px-4 [@media(min-width:1250px)_and_(max-width:1499px)]:px-3 py-[9px] hover:bg-[#FECC00] hover:shadow-[0_5px_15px_rgba(254,204,0,0.25)] hover:-translate-y-[2px] transition-all duration-300 ease-out whitespace-nowrap"
            >
              <span className="btn-text font-semibold text-[#272727] [@media(min-width:1250px)_and_(max-width:1499px)]:!text-[15px]">
                Languages
              </span>

              <img
                src="/moto/terrain/eng.png"
                alt=""
                className="w-[29px] h-[18px] object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </Link>

            <div className="w-px h-[63px] bg-[#E4E4E4]" />

            <button
              aria-label="Search"
              className="text-[#000000] flex-shrink-0 p-2 rounded-full hover:bg-[#FECC00] hover:scale-110 transition-all duration-300 ease-out"
            >
              <Search size={22} strokeWidth={2} />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="min-[1250px]:hidden flex items-center gap-4">
            <button
              aria-label="Search"
              className="text-[#000000] p-2 rounded-full hover:bg-[#FECC00] hover:scale-110 transition-all duration-300 ease-out"
            >
              <Search size={22} strokeWidth={2} />
            </button>

            <button
              aria-label="Toggle menu"
              className="text-[#272727] p-1 rounded-md hover:bg-[#FECC00] hover:scale-105 focus:outline-none transition-all duration-300 ease-out"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X
                  size={28}
                  strokeWidth={2}
                  className="transition-transform duration-300"
                />
              ) : (
                <Menu
                  size={28}
                  strokeWidth={2}
                  className="transition-transform duration-300"
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="min-[1250px]:hidden w-full bg-white border-t border-[#E4E4E4] shadow-lg overflow-x-hidden overflow-y-hidden">
          <div className="custom-container overflow-x-hidden overflow-y-hidden">
            <nav className="flex flex-col py-4 overflow-x-hidden overflow-y-hidden">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`nav-link group relative py-2 w-fit transition-all duration-300 ease-out hover:translate-x-1 ${
                    link.active
                      ? "text-[#FECC00] font-normal"
                      : "text-[#4B5563] font-normal hover:text-[#FECC00]"
                  }`}
                >
                  {link.name}

                  <span
                    className={`absolute left-0 bottom-1 h-[2px] bg-[#FECC00] transition-all duration-300 ${
                      link.active
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}

              <Link
                href="#"
                className="group flex items-center gap-2 border-2 border-[#FECC00] rounded-[5px] px-4 py-[9px] mt-3 w-fit hover:bg-[#FECC00] hover:shadow-[0_5px_15px_rgba(254,204,0,0.25)] hover:-translate-y-[2px] transition-all duration-300 ease-out"
              >
                <span className="btn-text font-semibold text-[#272727]">
                  Languages
                </span>

                <img
                  src="/moto/terrain/eng.png"
                  alt=""
                  className="w-[24px] h-[15px] object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}