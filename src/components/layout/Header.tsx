"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, X } from "lucide-react";

interface HeaderProps {
  customTitle?: string;
  customLogo?: string;
  langSwitch?: boolean;
  currentLang?: "UA" | "ENG";
}

export default function Header({
  customTitle = "KOTE STUDIO",
  customLogo = "/assets/logo.jpg",
  langSwitch = false,
  currentLang = "UA",
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(null);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-white py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-200 shadow-sm flex-shrink-0">
            <Image
              src={customLogo}
              alt={customTitle}
              fill
              className="object-cover group-hover:scale-105 transition-transform"
              sizes="48px"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg md:text-xl tracking-wider text-black">
              {customTitle}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-brand-purple font-medium">
              Kyiv • Obolon
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-medium text-sm text-gray-800">
          <Link
            href="/#teachers"
            className="hover:text-brand-purple transition-colors relative py-1 hover:border-b-2 hover:border-brand-green"
          >
            Викладачі
          </Link>
          <Link
            href="/rozklad"
            className={`hover:text-brand-purple transition-colors relative py-1 ${
              pathname === "/rozklad" ? "text-brand-purple border-b-2 border-brand-green" : ""
            }`}
          >
            Розклад Студії
          </Link>
          <Link
            href="/lessons-tango-academy"
            className={`hover:text-brand-purple transition-colors relative py-1 ${
              pathname === "/lessons-tango-academy"
                ? "text-brand-purple border-b-2 border-brand-green"
                : ""
            }`}
          >
            Академія Танго
          </Link>
          <Link
            href="/tango-gift"
            className={`hover:text-brand-purple transition-colors relative py-1 ${
              pathname === "/tango-gift" ? "text-brand-purple border-b-2 border-brand-green" : ""
            }`}
          >
            Танго Сертифікат
          </Link>

          {/* More dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(dropdownOpen === "more" ? null : "more")}
              onMouseEnter={() => setDropdownOpen("more")}
              className="flex items-center gap-1 hover:text-brand-purple transition-colors py-1"
            >
              <span>Більше</span>
              <ChevronDown className="w-4 h-4 opacity-70" />
            </button>

            {dropdownOpen === "more" && (
              <div
                onMouseLeave={() => setDropdownOpen(null)}
                className="absolute right-0 top-full mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-200"
              >
                <Link
                  href="/milonga-kote-kyiv"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-brand-purple"
                >
                  Мілонга Коте
                </Link>
                <Link
                  href="/tango-individual"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-brand-purple"
                >
                  Приватні Уроки
                </Link>
                <Link
                  href="/#about"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-brand-purple"
                >
                  Про Студію
                </Link>
                <Link
                  href="/#contacts"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-brand-purple"
                >
                  Контакти та Карта
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/#contacts"
            className="hover:text-brand-purple transition-colors relative py-1"
          >
            Контакти
          </Link>

          {/* Language Switcher if enabled */}
          {langSwitch && (
            <div className="flex items-center border border-gray-200 rounded-full px-2 py-0.5 text-xs font-semibold">
              <Link
                href="/tango-individual"
                className={`px-2 py-0.5 rounded-full transition-colors ${
                  currentLang === "UA" ? "bg-brand-red text-white" : "text-gray-600 hover:text-black"
                }`}
              >
                UA
              </Link>
              <Link
                href="/tango-individual-eng"
                className={`px-2 py-0.5 rounded-full transition-colors ${
                  currentLang === "ENG" ? "bg-brand-red text-white" : "text-gray-600 hover:text-black"
                }`}
              >
                ENG
              </Link>
            </div>
          )}
        </nav>

        {/* Mobile Hamburger Toggler */}
        <div className="flex items-center gap-3 md:hidden">
          {langSwitch && (
            <div className="flex items-center border border-gray-200 rounded-full px-1.5 py-0.5 text-xs font-semibold">
              <Link
                href="/tango-individual"
                className={`px-1.5 py-0.5 rounded-full ${
                  currentLang === "UA" ? "bg-brand-red text-white" : "text-gray-600"
                }`}
              >
                UA
              </Link>
              <Link
                href="/tango-individual-eng"
                className={`px-1.5 py-0.5 rounded-full ${
                  currentLang === "ENG" ? "bg-brand-red text-white" : "text-gray-600"
                }`}
              >
                ENG
              </Link>
            </div>
          )}

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors focus:outline-none"
            aria-label="Меню"
          >
            <span
              className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-black/50 backdrop-blur-sm z-40">
          <div className="bg-white p-6 shadow-2xl flex flex-col gap-4 border-t border-gray-100 max-h-[calc(100vh-80px)] overflow-y-auto">
            <Link
              href="/#teachers"
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-800 hover:text-brand-purple py-2 border-b border-gray-100"
            >
              Викладачі
            </Link>
            <Link
              href="/rozklad"
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-800 hover:text-brand-purple py-2 border-b border-gray-100"
            >
              Розклад Студії
            </Link>
            <Link
              href="/lessons-tango-academy"
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-800 hover:text-brand-purple py-2 border-b border-gray-100"
            >
              Kote Tango Academy
            </Link>
            <Link
              href="/milonga-kote-kyiv"
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-800 hover:text-brand-purple py-2 border-b border-gray-100"
            >
              Мілонга Коте
            </Link>
            <Link
              href="/tango-individual"
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-800 hover:text-brand-purple py-2 border-b border-gray-100"
            >
              Приватні Уроки Танго
            </Link>
            <Link
              href="/tango-gift"
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-800 hover:text-brand-purple py-2 border-b border-gray-100"
            >
              Танго Сертифікат
            </Link>
            <Link
              href="/#about"
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-800 hover:text-brand-purple py-2 border-b border-gray-100"
            >
              Про Студію
            </Link>
            <Link
              href="/#contacts"
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-800 hover:text-brand-purple py-2"
            >
              Контакти
            </Link>

            <div className="pt-4 mt-2 border-t border-gray-100 flex flex-col gap-2 text-sm text-gray-600">
              <a
                href="tel:+380667344104"
                className="font-bold text-brand-purple text-base flex items-center gap-2"
              >
                📞 +38 066 734 4104
              </a>
              <span>м. Київ, Оболонський проспект 1, корп. 3</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
