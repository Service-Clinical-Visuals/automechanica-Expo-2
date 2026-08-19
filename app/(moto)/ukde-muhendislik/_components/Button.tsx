import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export default function Button({ 
  children, 
  href, 
  onClick, 
  type = "button", 
  className = "px-8 py-2.5 inline-block" 
}: ButtonProps) {
  const baseStyle = `bg-[#ea2227] hover:bg-red-700 transition-colors text-white rounded-xl exo2 btn-text font-medium shadow-md text-center ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseStyle} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseStyle}>
      {children}
    </button>
  );
}
