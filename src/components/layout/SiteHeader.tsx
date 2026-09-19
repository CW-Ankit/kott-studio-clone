"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sound } from "@/lib/sound";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setSoundEnabled(sound.isEnabled());
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<boolean>;
      setSoundEnabled(customEvent.detail);
    };
    window.addEventListener("kott-sound-change", handler);
    return () => window.removeEventListener("kott-sound-change", handler);
  }, []);

  const navLinks = [
    { href: "/work", label: "/work", number: "01" },
    { href: "/services", label: "/services", number: "02" },
    { href: "/journal", label: "/journal", number: "03" },
    { href: "/about", label: "/about", number: "04" },
    { href: "/contact", label: "/contact", number: "05" },
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 pointer-events-none mix-blend-difference">
        <div className="flex items-center justify-between px-6 py-5 text-paper md:px-14">
          <Link
            href="/"
            className="font-display pointer-events-auto inline-block py-2 text-[26px] leading-none"
            aria-label="Kott Studio — home"
            onClick={() => {
              sound.click();
              setMobileMenuOpen(false);
            }}
          >
            kott<sup className="text-[11px]">®</sup>
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Primary" className="pointer-events-auto hidden md:flex items-center">
            {navLinks.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => sound.click()}
                  className={`eyebrow ml-2 px-3 py-3.5 transition-colors duration-200 ${
                    active ? "bg-paper text-ink" : "hover:bg-paper hover:text-ink text-paper"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href="https://kott.io"
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.click()}
              className="eyebrow ml-2 px-3 py-3.5 transition-colors duration-200 hover:bg-paper hover:text-ink text-paper"
            >
              kott.io ↗
            </a>

            {/* Sound Toggle Button */}
            <button
              type="button"
              onClick={() => sound.toggle()}
              aria-label={soundEnabled ? "Mute interface audio" : "Enable interface audio"}
              className="eyebrow ml-3 flex items-center gap-1.5 border border-paper/40 px-2.5 py-1.5 text-[11px] font-mono tracking-wider transition-colors duration-200 hover:bg-paper hover:text-ink text-paper"
              title="Toggle interface sound"
            >
              <span
                className={`inline-block h-1.5 w-1.5 rounded-full ${
                  soundEnabled ? "bg-accent animate-pulse" : "bg-paper/40"
                }`}
              />
              <span>[ sound: {soundEnabled ? "on" : "off"} ]</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => {
              sound.click();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="pointer-events-auto z-10 flex h-11 w-11 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span
              className={`block h-px w-6 bg-paper transition-transform duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-[3px]" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-paper transition-transform duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        aria-hidden={!mobileMenuOpen}
        className={`fixed inset-0 z-40 bg-ink px-6 pt-28 text-paper transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          mobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => {
                sound.click();
                setMobileMenuOpen(false);
              }}
              className="font-display group flex items-baseline gap-5 border-b border-paper/25 py-5 text-5xl"
            >
              <span className="eyebrow text-paper/55">{item.number}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => sound.toggle()}
            className="eyebrow flex items-center gap-2 border border-paper/30 px-3 py-2 text-xs font-mono text-paper"
          >
            <span
              className={`inline-block h-2 w-2 rounded-full ${
                soundEnabled ? "bg-accent animate-pulse" : "bg-paper/40"
              }`}
            />
            <span>[ sound: {soundEnabled ? "on" : "off"} ]</span>
          </button>
        </div>

        <a
          href="https://kott.io"
          target="_blank"
          rel="noreferrer"
          onClick={() => sound.click()}
          className="eyebrow mt-6 inline-block bg-io-magenta px-5 py-3.5 text-ink font-semibold"
        >
          kott.io ↗
        </a>
        <a
          href="mailto:hello@kott.studio"
          className="eyebrow link-underline mt-6 block w-fit text-paper/70"
        >
          hello@kott.studio
        </a>
      </div>
    </>
  );
}
