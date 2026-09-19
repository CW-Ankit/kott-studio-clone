"use client";

import React, { ComponentProps } from "react";
import { sound } from "@/lib/sound";

export function SoundDetails({ onToggle, children, ...props }: ComponentProps<"details">) {
  return (
    <details
      {...props}
      onToggle={(e) => {
        sound.toggleTick(e.currentTarget.open);
        if (onToggle) {
          onToggle(e);
        }
      }}
    >
      {children}
    </details>
  );
}
