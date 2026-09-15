import React from "react";

interface SectionDividerProps {
  fillColor?: string;
  bgColor?: string;
  flip?: boolean;
  className?: string;
}

export default function SectionDivider({
  fillColor = "#ffffff",
  bgColor = "transparent",
  flip = false,
  className = "",
}: SectionDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-none select-none pointer-events-none ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      <svg
        role="presentation"
        className={`w-full block h-2 sm:h-3 md:h-4 ${flip ? "rotate-180" : ""}`}
        viewBox="0 0 1000 10"
        preserveAspectRatio="none"
        fill={fillColor}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M992 8.2L983.8 0l-8.2 8.2-8.2-8.2-8.2 8.2L951 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L869 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L787 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L705 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L623 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L541 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L459 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L377 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L295 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L213 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L131 0l-8.2 8.2-8.2-8.2-8.2 8.2L98.2 0 90 8.2 81.8 0l-8.2 8.2L65.4 0l-8.2 8.2L49 0l-8.2 8.2L32.6 0l-8.2 8.2L16.2 0 8 8.2-.2 0v10h1000.4V0" />
      </svg>
    </div>
  );
}
