"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionDivider from "@/components/layout/SectionDivider";
import BookingModal from "@/components/modals/BookingModal";
import { MILONGA_FAQS } from "@/data/faqs";
import { Calendar, Clock, MapPin, Sparkles, ChevronDown, Heart, Camera } from "lucide-react";

export default function MilongaPage() {
  const [selectedYear, setSelectedYear] = useState<string>("2026");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const galleryImages = [
    { src: "/assets/stories/slide-10.jpg", caption: "Мілонга Коте - святкова атмосфера" },
    { src: "/assets/stories/slide-1.jpg", caption: "Танцювальний вечір у залі Kote Studio" },
    { src: "/assets/stories/slide-5.jpeg", caption: "Танго-родина Kote" },
    { src: "/assets/stories/slide-4.png", caption: "Елегантність та стиль" },
    { src: "/assets/stories/slide-2.png", caption: "Обійми та контакт у парі" },
    { src: "/assets/stories/slide-3.png", caption: "Жіноча грація та краса" },
  ];

  return (
    <main className="flex-1 flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-900 via-purple-950 to-black text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs uppercase tracking-widest text-brand-green font-bold bg-green-950/60 px-4 py-1 rounded-full border border-green-700/50 inline-block mb-4">
            Традиційний танцювальний вечір у Києві
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Мілонга KOTE у Києві
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-purple-200 mt-4 max-w-2xl mx-auto">
            «Вечір аргентинського танго сучасного зразка, створений для щирих обіймів, музики та радості спілкування»
          </p>

          {/* Next Milonga Card */}
          <div id="whenmilongainkyiv" className="mt-10 p-6 sm:p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 max-w-xl mx-auto shadow-2xl">
            <span className="text-xs uppercase tracking-widest text-brand-green font-bold block mb-2">
              Найближча подія
            </span>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
              RETRO MILONGA KOTE
            </h3>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-5 text-sm text-gray-200">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brand-green" />
                <span>Неділя, 18:00 - 22:30</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-green" />
                <span>Оболонський просп. 1, корп. 3</span>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-brand-purple hover:bg-brand-purpleDark text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all btn-flash"
              >
                Забронювати місце
              </button>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-gray-300 hover:text-white underline underline-offset-4"
              >
                Подія у Facebook →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Idea / Concept Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-brand-purple font-bold">
              Концепція
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Ідея — Milonga Kote
            </h2>
            <div className="w-16 h-1 bg-brand-purple mx-auto mt-4 rounded-full" />
          </div>

          <div className="font-serif text-base sm:text-lg text-gray-700 leading-relaxed space-y-5 text-center sm:text-left">
            <p>
              Коте створив мілонгу сучасного зразка, яка сподобається тангеро і тангерам різного рівня та танцювального досвіду.
            </p>
            <p>
              Тут немає пафосу чи зверхності — тільки тепла гостинність, добірні танго-танди від найкращих діджеїв України, якісний звук, дубовий паркет та затишне світло. На наших мілонгах завжди раді тим, хто щойно зробив перші кроки, і тим, хто танцює десятиліттями.
            </p>
            <p className="italic text-gray-500 text-sm">
              У барі студії завжди доступні чай, запашна кава, освіжаючі напої та легкі частування.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Chronology Section */}
      <section id="photoskyivmilonga" className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-brand-purple mb-2">
              <Camera className="w-5 h-5" />
              <span className="text-xs uppercase tracking-widest font-bold">
                Фотогалерея
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
              Хронологія Мілонг KOTE
            </h2>
            <div className="w-16 h-1 bg-brand-purple mx-auto mt-4 rounded-full" />
          </div>

          {/* Year selector buttons */}
          <div className="flex items-center justify-center gap-3 mb-10">
            {["2026", "2025", "2024", "2023"].map((year) => (
              <button
                key={year}
                type="button"
                onClick={() => setSelectedYear(year)}
                className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${
                  selectedYear === year
                    ? "bg-brand-purple text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
                }`}
              >
                Мілонги {year}
              </button>
            ))}
          </div>

          {/* Photos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-gray-200 bg-gray-100"
              >
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-xs font-medium drop-shadow">
                    {img.caption} ({selectedYear})
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews & Dancer Feedback (t585 / feedback) */}
      <section id="milonga-feedback" className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-brand-purple font-bold">
              Враження гостей
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Відгуки про Мілонги
            </h2>
            <div className="w-16 h-1 bg-brand-purple mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <p className="font-serif italic text-sm text-gray-700 leading-relaxed mb-4">
                «Неймовірно тепла атмосфера! Паркет просто літає під ногами, а музика діджея тримала до останньої танди. Обов&apos;язково прийду ще!»
              </p>
              <span className="text-xs font-bold text-brand-purple block">
                — Вікторія, танцює 3 роки
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <p className="font-serif italic text-sm text-gray-700 leading-relaxed mb-4">
                «Студія Kote вміє об&apos;єднувати людей. Зручна локація на Оболоні, комфортний зал і відчуття, ніби ти прийшов у гості до старих добрих друзів».
              </p>
              <span className="text-xs font-bold text-brand-purple block">
                — Михайло, тангеро
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="milonga-questions" className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-brand-purple font-bold">
              Часті запитання
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Питання і Відповіді
            </h2>
            <div className="w-16 h-1 bg-brand-purple mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-4">
            {MILONGA_FAQS.map((faq, idx) => {
              const isExpanded = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-2xl overflow-hidden transition-colors bg-white"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-serif font-medium text-base sm:text-lg text-gray-900 hover:text-brand-purple transition-colors focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200 flex-shrink-0 ml-4 ${
                        isExpanded ? "rotate-180 text-brand-purple" : ""
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learn Tango Callout */}
      <section className="py-16 bg-white border-t border-gray-200 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="font-serif font-bold text-2xl text-gray-900">
            Бажаєте навчитися танго перед мілонгою?
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Обирайте зручний формат навчання:
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <Link
              href="/lessons-tango-academy"
              className="px-6 py-3 rounded-full bg-brand-purple text-white text-xs font-bold shadow-md hover:bg-brand-purpleDark transition-all"
            >
              Групові уроки в Академії
            </Link>
            <Link
              href="/tango-individual"
              className="px-6 py-3 rounded-full bg-brand-red text-white text-xs font-bold shadow-md hover:bg-brand-redDark transition-all"
            >
              Приватні уроки з тренером
            </Link>
            <Link
              href="/tango-gift"
              className="px-6 py-3 rounded-full border border-gray-300 text-gray-800 text-xs font-bold hover:bg-gray-50 transition-all"
            >
              Подарунковий сертифікат
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <BookingModal
        isOpen={isModalOpen}
        type="rozklad"
        title="Бронювання місця на Мілонгу"
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
