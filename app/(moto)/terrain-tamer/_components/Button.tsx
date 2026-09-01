import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center whitespace-nowrap rounded-[5px] border-2 border-[#FECC00] bg-white text-[#272727] transition-colors duration-300 font-semibold btn-text px-6 py-[10px] hover:bg-[#FECC00]";

  const combinedClassName = `${baseStyles} ${className}`;

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}