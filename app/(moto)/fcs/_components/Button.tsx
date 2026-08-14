import Link from "next/link";
import React from "react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "primary-outline";
  className?: string;
}

export default function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const baseClasses = "btn-text font-semibold oswald-font transition-all duration-300 inline-flex items-center justify-center pt-[10px] pr-[20px] pb-[10px] pl-[20px]";

  const variants = {
    primary: "bg-[#163683] text-white hover:bg-[#102863] border-[#163683] rounded-[5px] min-[2100px]:rounded-[8px] min-[3800px]:rounded-[12px] border-[1px]",
    secondary: "bg-white text-[#163683] hover:bg-gray-100 border-[#163683] rounded-[5px] min-[2100px]:rounded-[8px] min-[3800px]:rounded-[12px] border-[1px]",
    outline: "border-[#163683] text-[#272727] hover:bg-[#163683] hover:text-white border-[3px] rounded-[6px] min-[2100px]:rounded-[10px] min-[3800px]:rounded-[14px] h-[64px] min-[2100px]:h-[80px] min-[3800px]:h-[96px] opacity-100",
    "primary-outline": "border-[#163683] text-[#272727] hover:bg-[#163683] hover:text-white border-[1px] rounded-[5px] min-[2100px]:rounded-[8px] min-[3800px]:rounded-[12px]"
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
