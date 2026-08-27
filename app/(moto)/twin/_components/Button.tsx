import Link from "next/link";
import React from "react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "primary-outline";
  className?: string;
}

export default function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const baseClasses = "btn-text font-medium exo-2-font transition-all duration-300 inline-flex items-center justify-center px-[1.875em] py-[0.625em] gap-[10px] rounded-[16px]";

  const variants = {
    primary: "bg-[#0F53CC] text-white hover:bg-[#0F53CC]/90 border-[#0F53CC] border-[1px]",
    secondary: "bg-white text-[#0F53CC] hover:bg-gray-100 border-[#0F53CC] border-[1px]",
    outline: "border-[#0F53CC] text-[#0F53CC] hover:bg-[#0F53CC] hover:text-white border-[1px]",
    "primary-outline": "border-[#0F53CC] text-[#272727] hover:bg-[#0F53CC] hover:text-white border-[1px]"
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
