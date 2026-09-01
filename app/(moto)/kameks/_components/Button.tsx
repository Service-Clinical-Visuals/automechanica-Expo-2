import Link from "next/link";
import React from "react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "primary-outline";
  className?: string;
}

export default function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const baseClasses = "btn-text font-medium poppins-font transition-all duration-300 inline-flex items-center justify-center px-[25px] py-[10px] gap-[10px] rounded-[8px]";

  const variants = {
    primary: "bg-[#0195DA] text-white hover:bg-[#017bb5] border-[#0195DA] border-[1px]",
    secondary: "bg-white text-[#0195DA] hover:bg-gray-100 border-[#0195DA] border-[1px]",
    outline: "border-[#282361] text-[#282361] hover:bg-[#282361] hover:text-white border-[1px]",
    "primary-outline": "border-[#0195DA] text-[#272727] hover:bg-[#0195DA] hover:text-white border-[1px]"
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
