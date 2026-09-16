"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
            onClick={() => setMobileMenuOpen(false)}
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
              className="eyebrow ml-2 px-3 py-3.5 transition-colors duration-200 hover:bg-paper hover:text-ink text-paper"
            >
              kott.io ↗
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
              onClick={() => setMobileMenuOpen(false)}
              className="font-display group flex items-baseline gap-5 border-b border-paper/25 py-5 text-5xl"
            >
              <span className="eyebrow text-paper/55">{item.number}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <a
          href="https://kott.io"
          target="_blank"
          rel="noreferrer"
          className="eyebrow mt-10 inline-block bg-io-magenta px-5 py-3.5 text-ink font-semibold"
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
