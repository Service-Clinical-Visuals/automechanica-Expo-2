import Link from "next/link";
import React from "react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "primary-outline";
  className?: string;
}

export default function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const baseClasses = "btn-text font-medium montserrat-font transition-all duration-300 inline-flex items-center justify-center px-4 md:px-6 py-2 gap-[10px] min-h-[38px] md:min-h-[44px] lg:min-h-[48px] rounded-[2px] whitespace-nowrap";

  const variants = {
    primary: "bg-[#FFDB00] text-black hover:bg-[#E6BC00] border-none font-bold",
    secondary: "bg-white text-[#FFDB00] hover:bg-gray-100 border-[#FFDB00] border-[1px]",
    outline: "border-[#FFDB00] text-[#FFDB00] hover:bg-[#FFDB00] hover:text-black border-[1px]",
    "primary-outline": "border-[#FFDB00] text-[#272727] hover:bg-[#FFDB00] hover:text-black border-[1px]"
  };

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
