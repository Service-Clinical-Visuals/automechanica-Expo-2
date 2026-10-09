import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className = "", ...props }: ContainerProps) {
  return (
    <div
      className={`w-[95%] lg:w-[85%] max-w-[1600px] 2xl:max-w-[1920px] min-[2000px]:max-w-[3200px] mx-auto ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
