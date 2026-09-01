import Link from "next/link";
import React from "react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "primary-outline";
  className?: string;
}

export default function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const baseClasses = "btn-text font-semibold exo-2-font transition-all duration-300 inline-flex items-center justify-center px-[20px] py-[8px] gap-[10px]";

  const variants = {
    primary: "bg-[#27226D] text-white hover:bg-[#27226D]/90 border-[#27226D] border-[1px]",
    secondary: "bg-white text-[#27226D] hover:bg-gray-100 border-[#27226D] border-[1px]",
    outline: "border-[#27226D] text-[#27226D] hover:bg-[#27226D] hover:text-white border-[1px]",
    "primary-outline": "border-[#27226D] text-[#272727] hover:bg-[#27226D] hover:text-white border-[1px]"
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
