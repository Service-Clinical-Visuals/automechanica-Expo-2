import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  text?: string;
  variant?: "primary" | "secondary" | "outline" | "primary-outline";
  className?: string;
  showIcon?: boolean;
}

export default function Button({ 
  href, 
  children, 
  text,
  onClick,
  variant = "primary", 
  className = "",
  showIcon = false
}: ButtonProps) {
  const baseClasses = "btn-text inline-flex items-center justify-center font-oswald font-semibold transition-all duration-300 active:scale-95 select-none cursor-pointer px-[20px] py-[8px] gap-[10px] rounded-[5px]";

  const variants = {
    primary: "bg-[#EE2823] text-white hover:opacity-90",
    secondary: "bg-[#030833] text-white hover:opacity-90",
    outline: "bg-transparent text-[#EE2823] border-2 border-[#EE2823] hover:bg-[#EE2823] hover:text-white",
    "primary-outline": "bg-transparent text-[#030833] border-2 border-[#030833] hover:bg-[#030833] hover:text-white"
  };

  const content = (
    <>
      {children || text}
      {showIcon && (
        <ArrowRight size={16} strokeWidth={2.5} className="ml-2 transition-transform group-hover:translate-x-1" />
      )}
    </>
  );

  const finalStyles = `${baseClasses} ${variants[variant] || variants.primary} ${className} group`.trim();

  if (href) {
    return (
      <Link href={href} className={finalStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={finalStyles}>
      {content}
    </button>
  );
}
