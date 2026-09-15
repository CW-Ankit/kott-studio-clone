"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, ArrowRight, LayoutDashboard } from "lucide-react";
import { TEACHERS } from "@/data/teachers";

interface TeachersSectionProps {
  onOpenIrinaModal?: () => void;
  onOpenGalleryModal?: () => void;
}

export default function TeachersSection({
  onOpenIrinaModal,
  onOpenGalleryModal,
}: TeachersSectionProps) {
  return (
    <section id="teachers" className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-brand-purple font-bold">
            Серце нашої студії
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 font-bold mt-2">
            Викладачі KOTE STUDIO
          </h2>
          <div className="w-16 h-1 bg-brand-purple mx-auto mt-4 rounded-full" />
          <p className="text-sm text-gray-600 mt-4">
            Професійні наставники, закохані у танець та розвиток кожного учня.
          </p>
        </div>

        {/* Teachers grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Anatoliy */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="relative w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-purple-100 shadow-md mb-6">
                <Image
                  src="/assets/teachers/anatoliy.jpg"
                  alt="Анатолій Якимчук"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-center mb-4">
                <h3 className="font-serif font-bold text-2xl text-gray-900">
                  Анатолій Якимчук
                </h3>
                <span className="text-xs font-semibold text-brand-purple block mt-1 uppercase tracking-wider">
                  Засновник студії / Аргентинське Танго
                </span>
                <span className="text-xs text-gray-500 block mt-0.5">
                  Танцює з 2002 р. • Викладає з 2017 р.
                </span>
              </div>

              <div className="text-xs text-gray-600 space-y-2 leading-relaxed text-left border-t border-gray-100 pt-4">
                <p>
                  Анатолій (Antonio) почав свій шлях у танці через спортивну гімнастику, де і зародилося тонке формування відчуття партнера та біомеханіки.
                </p>
                <p>
                  Оскільки досвід танцюриста був здобутий у зрілому віці, він чітко розклав механіку, фізику і хімію у парі. Викладає аргентинське танго з 2017 року у Києві та інших містах України.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-100 flex flex-col gap-3">
              <Link
                href="/lessons-tango-academy"
                className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-brand-purple hover:underline"
              >
                <span>Детальніше про Аргентинське Танго</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <div className="flex items-center justify-center gap-2">
                <a
                  href="https://www.instagram.com/antonio.ya.tango/tagged/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-purple-50 text-brand-purple flex items-center justify-center hover:bg-brand-purple hover:text-white transition-colors"
                  aria-label="Instagram Анатолія"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Iryna */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="relative w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-pink-100 shadow-md mb-6">
                <Image
                  src="/assets/teachers/iryna.png"
                  alt="Ірина Семенчук"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-center mb-4">
                <h3 className="font-serif font-bold text-2xl text-gray-900">
                  Ірина Семенчук
                </h3>
                <span className="text-xs font-semibold text-brand-purple block mt-1 uppercase tracking-wider">
                  Викладачка жіночих технік та танго
                </span>
                <span className="text-xs text-gray-500 block mt-0.5">
                  Викладає танго з 2022 р.
                </span>
              </div>

              <div className="text-xs text-gray-600 space-y-2 leading-relaxed text-left border-t border-gray-100 pt-4">
                <p>
                  «Аргентинське танго підштовхнуло мене зробити новий крок у житті, і одним із цих кроків стало створення затишного місця для всіх, хто любить танець. Тепер у танго на Оболоні є затишна домівка під назвою &quot;Kote.Studio&quot;».
                </p>
                <p>
                  Ірина проводить авторські класи жіночої техніки, навчає пластиці стоп, граційності, балансу та вмінню прикрашатися елегантно.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-100 flex flex-col gap-3">
              <button
                type="button"
                onClick={onOpenIrinaModal}
                className="w-full py-2.5 px-4 rounded-xl bg-brand-purple hover:bg-brand-purpleDark text-white text-xs font-bold shadow-sm transition-all"
              >
                Записатись на урок до Ірини
              </button>

              <div className="flex items-center justify-center gap-2">
                <a
                  href="https://www.instagram.com/kote.studio/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-purple-50 text-brand-purple flex items-center justify-center hover:bg-brand-purple hover:text-white transition-colors"
                  aria-label="Instagram студії"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Future Coach / Collaboration */}
          <div className="bg-gradient-to-b from-white to-purple-50/40 rounded-2xl p-6 sm:p-8 shadow-sm border border-dashed border-purple-300 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="relative w-36 h-36 mx-auto rounded-full bg-purple-100 flex items-center justify-center shadow-inner mb-6 p-4">
                <div className="relative w-24 h-24">
                  <Image
                    src="/assets/icons/tango_cat.svg"
                    alt="Майбутній Тренер Kote"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="text-center mb-4">
                <h3 className="font-serif font-bold text-2xl text-gray-900">
                  Майбутній Тренер
                </h3>
                <span className="text-xs font-semibold text-brand-green block mt-1 uppercase tracking-wider">
                  Тут може бути твоє фото
                </span>
                <span className="text-xs text-gray-500 block mt-0.5">
                  Запрошуємо до співпраці
                </span>
              </div>

              <div className="text-xs text-gray-600 space-y-2 leading-relaxed text-left border-t border-gray-100 pt-4">
                <p>
                  Якщо ти фахівець у своєму напрямку, бажаєш ділитися знаннями, надихати людей і працювати у відкритому діалозі з однодумцями — тобі до нас!
                </p>
                <p>
                  У студії є все необхідне для тренерів TRX, йоги, балету, пілатесу та сучасних танців.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-100 space-y-2">
              <button
                type="button"
                onClick={onOpenGalleryModal}
                className="w-full py-2.5 px-4 rounded-xl border border-brand-purple text-brand-purple hover:bg-purple-50 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Переглянути план студії</span>
              </button>

              <a
                href="tel:+380667344104"
                className="block text-center text-xs text-gray-500 hover:text-brand-purple transition-colors pt-1"
              >
                З питань співпраці: +38 066 734 4104
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
