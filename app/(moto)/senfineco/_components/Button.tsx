import Link from "next/link";
import React from "react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export default function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const baseClasses = "btn-text font-semibold exo2-font rounded-[3px] transition-all duration-300 inline-flex w-fit items-center justify-center";

  const variants = {
    primary: "bg-primary text-white hover:bg-[#d97800] px-3 py-1.5 md:px-4 md:py-2 2xl:px-6 2xl:py-3",
    secondary: "bg-secondary text-white hover:bg-black px-3 py-1.5 md:px-4 md:py-2 2xl:px-6 2xl:py-3",
    outline: "border border-primary text-primary hover:bg-primary hover:text-white px-3 py-1.5 md:px-4 md:py-2 2xl:px-6 2xl:py-3",
  };

  return (
    <Link href={href} className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
