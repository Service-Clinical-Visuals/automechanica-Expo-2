import React from "react";

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
type Color = "primary" | "secondary" | "dark" | "white" | "muted" | "none";
type Weight = "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";

interface TypographyProps {
  variant?: Variant;
  color?: Color;
  weight?: Weight;
  className?: string;
  children: React.ReactNode;
}

export default function Typography({
  variant = "p",
  color = "dark",
  weight,
  className = "",
  children,
  outline = false,
  ...props
}: TypographyProps & { outline?: boolean } & React.HTMLAttributes<HTMLElement>) {
  const Component = variant;

  const colorClasses: Record<Color, string> = {
    primary: "text-[#020202]",
    secondary: "text-[#1f1f1f]",
    dark: "text-[#000000]",
    white: "text-[#FFFFFF]",
    muted: "text-[#4B5563]",
    none: "",
  };

  const weightClasses: Record<Weight, string> = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  };

  const outlineClass = outline
    ? color === "dark" || color === "primary"
      ? "text-outline-dark"
      : "text-outline"
    : "";

  const finalClassName = `${colorClasses[color]} ${weight ? weightClasses[weight] : ""} ${outlineClass} ${className}`.trim();

  return React.createElement(Component, { className: finalClassName, ...props }, children);
}
