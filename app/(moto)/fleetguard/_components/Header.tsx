"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Search, User, ShoppingCart, Globe } from "lucide-react";
import Container from "./Container";
import Button from "./Button";

const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about-us" },
    { name: "Products", id: "product" },
    { name: "Find a Dealer", id: "find-dealer" },
    { name: "Knowledge Center", id: "knowledge-center" },
    { name: "Support", id: "support" },
];

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [activeLink, setActiveLink] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight / 2) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    const handleScrollTo = (
        e: React.MouseEvent<HTMLAnchorElement>,
        id: string,
    ) => {
        e.preventDefault();
        setActiveLink(id);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        } else if (id === "home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };

    const isHeaderVisible = isVisible || isMobileMenuOpen;

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-70 transition-all duration-500 transform bg-white shadow-sm border-b border-gray-100 ${isHeaderVisible
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-full opacity-0 pointer-events-none"
                    }`}
            >
                <div className="w-full h-auto flex items-center py-4">
                    <Container className="flex items-center justify-between gap-4 xl:gap-6 w-full">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center shrink-0"
                        >
                            <img
                                src="/moto/fleetguard/logo.png"
                                alt="Fleetguard Logo"
                                className="h-10 xl:h-12 2xl:h-14 4xl:h-[120px] min-[3800px]:h-auto w-auto object-contain"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden xl:flex items-center mr-20 space-x-6 2xl:space-x-9 shrink-0 font-medium">
                            {navLinks.map((link) => {
                                const isActive = activeLink === link.id;
                                return (
                                    <a
                                        key={link.name}
                                        href={`#${link.id}`}
                                        className={`header-link font-oswald transition-colors duration-200 cursor-pointer ${isActive
                                            ? "header-link font-oswald text-[#EE2823] font-normal"
                                            : "header-link font-oswald text-[#4B5563] font-normal hover:text-[#EE2823]"
                                            }`}
                                        onClick={(e) => handleScrollTo(e, link.id)}
                                    >
                                        {link.name}
                                    </a>
                                );
                            })}
                        </nav>

                        {/* Right Side: Search and Icons */}
                        <div className="hidden xl:flex items-center gap-6 shrink-0">
                            <div className="relative flex items-center bg-white border border-gray-200 rounded-lg p-1 h-10 2xl:h-12 4xl:h-16">
                                <input
                                    type="text"
                                    placeholder="Search by Part , Keyword"
                                    className="px-3 h-full w-48 xl:w-64 2xl:w-80 4xl:w-96 focus:outline-none text-[#4B5563] text-sm 2xl:text-base 4xl:text-lg font-rubik font-normal bg-transparent flex-1"
                                />
                                <button className="rounded-md bg-[#EE2823] hover:bg-red-700 text-white w-8 h-8 2xl:w-10 2xl:h-10 4xl:w-14 4xl:h-14 transition-colors flex items-center justify-center shrink-0">
                                    <Search className="w-4 h-4 2xl:w-5 2xl:h-5 4xl:w-7 4xl:h-7" />
                                </button>
                            </div>

                            <div className="flex items-center gap-4 xl:gap-5">
                                <img
                                    src="/moto/fleetguard/i1.png"
                                    alt="User"
                                    className="w-[18px] h-[18px] 2xl:w-[24px] 2xl:h-[24px] 4xl:w-[32px] 4xl:h-[32px] object-contain cursor-pointer hover:opacity-80 transition-opacity"
                                />
                                <div className="w-[1px] h-6 2xl:h-8 4xl:h-10 bg-gray-200"></div>
                                <img
                                    src="/moto/fleetguard/i2.png"
                                    alt="Cart"
                                    className="w-[18px] h-[18px] 2xl:w-[24px] 2xl:h-[24px] 4xl:w-[32px] 4xl:h-[32px] object-contain cursor-pointer hover:opacity-80 transition-opacity"
                                />
                                <div className="w-[1px] h-6 2xl:h-8 4xl:h-10 bg-gray-200"></div>
                                <img
                                    src="/moto/fleetguard/i3.png"
                                    alt="Globe"
                                    className="w-[18px] h-[18px] 2xl:w-[24px] 2xl:h-[24px] 4xl:w-[32px] 4xl:h-[32px] object-contain cursor-pointer hover:opacity-80 transition-opacity"
                                />
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="xl:hidden text-primary p-2 hover:bg-gray-50 rounded-lg transition-colors shrink-0 flex items-center justify-center min-w-11 min-h-11"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle Navigation Menu"
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </Container>
                </div>

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                    <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 py-6 px-6 flex flex-col space-y-4 max-h-[calc(100vh-85px)] overflow-y-auto font-medium">
                        {navLinks.map((link) => {
                            const isActive = activeLink === link.id;
                            return (
                                <a
                                    key={link.name}
                                    href={`#${link.id}`}
                                    className={`border-b border-gray-100 pb-3  cursor-pointer ${isActive
                                        ? "text-primary font-semibold"
                                        : "text-[#1A1A1A] hover:text-primary"
                                        }`}
                                    onClick={(e) => handleScrollTo(e, link.id)}
                                >
                                    {link.name}
                                </a>
                            );
                        })}

                        <div className="mt-4 flex flex-col gap-4">
                            <div className="relative flex items-center bg-white border border-gray-200 rounded-lg p-1 h-10">
                                <input
                                    type="text"
                                    placeholder="Search by Part , Keyword"
                                    className="px-3 h-full w-full focus:outline-none text-[#4B5563] text-sm font-rubik font-normal bg-transparent"
                                />
                                <button className="rounded-md bg-[#EE2823] hover:bg-red-700 text-white w-8 h-8 transition-colors flex items-center justify-center shrink-0">
                                    <Search className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="flex items-center justify-center gap-6 mt-4">
                                <img
                                    src="/moto/fleetguard/i1.png"
                                    alt="User"
                                    className="w-[18px] h-[18px] object-contain cursor-pointer hover:opacity-80 transition-opacity"
                                />
                                <div className="w-[1px] h-6 bg-gray-200"></div>
                                <img
                                    src="/moto/fleetguard/i2.png"
                                    alt="Cart"
                                    className="w-[18px] h-[18px] object-contain cursor-pointer hover:opacity-80 transition-opacity"
                                />
                                <div className="w-[1px] h-6 bg-gray-200"></div>
                                <img
                                    src="/moto/fleetguard/i3.png"
                                    alt="Globe"
                                    className="w-[18px] h-[18px] object-contain cursor-pointer hover:opacity-80 transition-opacity"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
}
