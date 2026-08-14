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
    primary: "bg-[#66952E] text-white hover:bg-[#527a24] border-[#66952E] border-[1px]",
    secondary: "bg-white text-[#66952E] hover:bg-gray-100 border-[#66952E] border-[1px]",
    outline: "border-[#66952E] text-[#66952E] hover:bg-[#66952E] hover:text-white border-[1px]",
    "primary-outline": "border-[#66952E] text-[#272727] hover:bg-[#66952E] hover:text-white border-[1px]"
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
