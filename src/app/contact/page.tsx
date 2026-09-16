import React from "react";
import { Metadata } from "next";
import { ContactSection } from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Contact — Kott Studio",
  description: "Bring us the impossible one. Say hi anytime. Direct inquiry form for Kott Studio.",
};

export default function ContactPage() {
  return (
    <main id="content" className="pt-24 bg-ink text-paper">
      {/* Header Banner */}
      <div className="px-6 md:px-14 pb-8 border-b border-paper/15">
        <p className="eyebrow text-paper/55">
          <span className="idx-tag text-accent-on-ink">05</span> — direct line
        </p>
        <h1 className="font-display mt-6 text-[clamp(44px,7.5vw,112px)] font-normal leading-[0.95] tracking-[-0.02em] md:font-thin">
          Start a <em className="italic text-accent-on-ink">Dialogue</em>.
        </h1>
        <p className="mt-6 max-w-[34em] text-[1.1rem] leading-relaxed text-paper/70 font-light">
          Whether you need a complete ground-up digital system or a focused product sprint, we answer every serious inquiry within 24 hours.
        </p>
      </div>

      {/* Reusable interactive ContactSection component */}
      <ContactSection />
    </main>
  );
}
