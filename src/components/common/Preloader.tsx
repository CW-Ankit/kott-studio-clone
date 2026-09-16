"use client";

import React, { useEffect, useState } from "react";
import { ImpossibleTriangle } from "./ImpossibleTriangle";

export function Preloader() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // fast counter to 100
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setFading(true);
          setTimeout(() => setVisible(false), 700);
          return 100;
        }
        return prev + 4;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      role="presentation"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-paper text-ink transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        fading ? "-translate-y-full pointer-events-none" : "translate-y-0"
      }`}
    >
      <div className="w-[min(32vh,32vw)] animate-[preloader-mark_1.15s_cubic-bezier(0.16,1,0.3,1)_both]">
        <ImpossibleTriangle className="w-full h-auto" />
      </div>
      <div className="flex items-baseline gap-4">
        <span className="font-display text-2xl font-normal">kott®</span>
        <span className="eyebrow tabular-nums text-muted text-sm">
          {String(Math.min(count, 100)).padStart(3, "0")}
        </span>
      </div>
    </div>
  );
}
