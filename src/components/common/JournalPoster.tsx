import React from "react";

interface JournalPosterProps {
  number?: string;
  category?: string;
  className?: string;
}

export function JournalPoster({
  number = "01",
  category = "Brand",
  className = "h-full w-full",
}: JournalPosterProps) {
  // Generate procedural coordinates deterministically
  const seed = (number.charCodeAt(0) || 1) + (number.charCodeAt(1) || 2);
  const cx1 = 200 + (seed % 80);
  const cy1 = 300 + (seed % 100);
  const cx2 = 380 - (seed % 60);
  const cy2 = 420 + (seed % 80);

  return (
    <svg
      viewBox="0 0 620 840"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-hidden="true"
    >
      <defs>
        <clipPath id={`clip-${number}`}>
          <rect x="0" y="0" width="620" height="840" />
        </clipPath>
        <filter id={`grain-${number}`} x="0" y="0" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </defs>

      {/* Paper Ground */}
      <rect x="0" y="0" width="620" height="840" fill="#ffffff" />

      {/* Generative Procedural Graphics */}
      <g className="ag-draw" clipPath={`url(#clip-${number})`}>
        {category === "Brand" && (
          <>
            {/* Concentric ripple circles with focal accent */}
            {Array.from({ length: 32 }).map((_, i) => (
              <circle
                key={`c1-${i}`}
                cx={cx1}
                cy={cy1}
                r={12 + i * 14}
                fill="none"
                stroke="#101113"
                strokeWidth={i === 12 ? "2" : "1"}
                strokeOpacity={i === 12 ? "0.8" : "0.35"}
              />
            ))}
            {Array.from({ length: 24 }).map((_, i) => (
              <circle
                key={`c2-${i}`}
                cx={cx2}
                cy={cy2}
                r={16 + i * 16}
                fill="none"
                stroke={i === 5 ? "var(--color-accent, #ff4d00)" : "#101113"}
                strokeWidth={i === 5 ? "2.5" : "1"}
                strokeOpacity={i === 5 ? "1" : "0.3"}
              />
            ))}
            <circle cx={cx1} cy={cy1} r="18" fill="var(--color-accent, #ff4d00)" />
          </>
        )}

        {category === "Studio" && (
          <>
            {/* Orthogonal grid & kinetic letterform matrix */}
            {Array.from({ length: 22 }).map((_, i) => (
              <line
                key={`hl-${i}`}
                x1="0"
                y1={40 + i * 36}
                x2="620"
                y2={40 + i * 36}
                stroke="#101113"
                strokeWidth="1"
                strokeOpacity={i % 4 === 0 ? "0.4" : "0.15"}
              />
            ))}
            {Array.from({ length: 16 }).map((_, i) => (
              <line
                key={`vl-${i}`}
                x1={40 + i * 36}
                y1="0"
                x2={40 + i * 36}
                y2="840"
                stroke="#101113"
                strokeWidth="1"
                strokeOpacity={i % 4 === 0 ? "0.4" : "0.15"}
              />
            ))}
            <circle cx="310" cy="420" r="160" fill="none" stroke="#101113" strokeWidth="2" strokeOpacity="0.6" />
            <circle cx="310" cy="420" r="80" fill="none" stroke="var(--color-accent, #ff4d00)" strokeWidth="2" />
            <line x1="150" y1="420" x2="470" y2="420" stroke="var(--color-accent, #ff4d00)" strokeWidth="1.5" />
          </>
        )}

        {category === "Marketing" && (
          <>
            {/* Rhythmic wave contours & density hatchings */}
            {Array.from({ length: 28 }).map((_, i) => (
              <path
                key={`wave-${i}`}
                d={`M -20 ${100 + i * 26} Q 180 ${40 + i * 26 + (i % 2) * 40}, 340 ${120 + i * 26} T 660 ${100 + i * 26}`}
                fill="none"
                stroke={i === 10 ? "var(--color-accent, #ff4d00)" : "#101113"}
                strokeWidth={i === 10 ? "2.5" : "1"}
                strokeOpacity={i === 10 ? "1" : "0.32"}
              />
            ))}
            <circle cx="440" cy="320" r="28" fill="var(--color-accent, #ff4d00)" opacity="0.9" />
          </>
        )}

        {category === "Websites" && (
          <>
            {/* Coordinate axes, isometric angles, and wireframe bounds */}
            {Array.from({ length: 20 }).map((_, i) => (
              <line
                key={`iso1-${i}`}
                x1="0"
                y1={i * 48}
                x2="620"
                y2={i * 48 + 360}
                stroke="#101113"
                strokeWidth="1"
                strokeOpacity="0.25"
              />
            ))}
            {Array.from({ length: 20 }).map((_, i) => (
              <line
                key={`iso2-${i}`}
                x1="0"
                y1={i * 48 + 360}
                x2="620"
                y2={i * 48}
                stroke="#101113"
                strokeWidth="1"
                strokeOpacity="0.25"
              />
            ))}
            <rect
              x="160"
              y="280"
              width="300"
              height="280"
              fill="none"
              stroke="var(--color-accent, #ff4d00)"
              strokeWidth="2"
            />
            <circle cx="310" cy="420" r="6" fill="var(--color-accent, #ff4d00)" />
          </>
        )}

        {category === "Product" && (
          <>
            {/* Blueprint architecture: concentric arcs & modular nodes */}
            {Array.from({ length: 18 }).map((_, i) => (
              <rect
                key={`mod-${i}`}
                x={120 + i * 18}
                y={200 + i * 22}
                width={360 - i * 16}
                height={400 - i * 20}
                rx={12 + i * 2}
                fill="none"
                stroke={i === 4 ? "var(--color-accent, #ff4d00)" : "#101113"}
                strokeWidth={i === 4 ? "2" : "1"}
                strokeOpacity={i === 4 ? "1" : "0.3"}
              />
            ))}
            <circle cx="310" cy="400" r="14" fill="var(--color-accent, #ff4d00)" />
          </>
        )}
      </g>

      {/* Numerical Poster Stamp */}
      <text
        x="585"
        y="42"
        fontFamily="var(--font-sans, system-ui, sans-serif)"
        fontSize="15"
        fontWeight="300"
        textAnchor="end"
        fill="#101113"
        opacity="0.55"
      >
        {number}
      </text>

      {/* Subtle Grain Overlay Texture */}
      <rect
        x="0"
        y="0"
        width="620"
        height="840"
        filter={`url(#grain-${number})`}
        opacity="0.06"
        style={{ mixBlendMode: "overlay" }}
      />

      {/* Fine Outer Border */}
      <rect
        x="0.5"
        y="0.5"
        width="619"
        height="839"
        fill="none"
        stroke="#101113"
        strokeOpacity="0.18"
        strokeWidth="1"
      />
    </svg>
  );
}
