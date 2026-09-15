"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionDivider from "@/components/layout/SectionDivider";
import BookingModal from "@/components/modals/BookingModal";
import { Check, Star, Youtube, Play, Sparkles } from "lucide-react";

export default function TangoIndividualPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="flex-1 flex flex-col bg-white">
      <Header langSwitch currentLang="UA" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs uppercase tracking-widest text-brand-green font-bold">
            Персональне навчання в Києві
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 mt-3 leading-tight">
            Індивідуальні Уроки{" "}
            <span className="text-brand-red">Аргентинського Танго</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            Аргентинське танго — це культура і мистецтво, що вимагає від танцюриста не тільки технічної майстерності, але й розуміння танцю, як мови, що передає емоції та настрій.
          </p>
        </div>
      </section>

      {/* Hero Instructor Card Banner */}
      <section className="relative min-h-[500px] sm:min-h-[600px] bg-gradient-to-r from-gray-950 via-gray-900 to-black text-white flex items-end">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/assets/teachers/anatoliy-full.png"
            alt="Анатолій Якимчук танго"
            fill
            className="object-contain object-right-bottom opacity-85"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black via-black/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 w-full">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-widest text-brand-green font-bold block mb-2">
              Головний викладач KOTE STUDIO
            </span>
            <h2 className="font-serif font-bold text-4xl sm:text-5xl text-white leading-tight">
              Анатолій Якимчук
            </h2>
            <div className="flex items-center gap-4 text-xs font-semibold text-gray-300 mt-2">
              <span>танцює з 2002 р.</span>
              <span>•</span>
              <span>викладає з 2017 р.</span>
            </div>

            <p className="text-sm text-gray-300 mt-4 leading-relaxed">
              Київський викладач аргентинського танго, який відмінно володіє і лідерською партією, і жіночою. Це дозволяє ділитися практичними порадами у найскладніших танцювальних ситуаціях як для партнерів, так і для партнерок.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-red hover:bg-brand-redDark text-white font-bold text-sm shadow-xl hover:shadow-2xl transition-all btn-flash"
              >
                Запис на Індив
              </button>
              <span className="text-xs text-gray-400">
                Адреса: Оболонський просп. 1, корп. 3
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Dance with Students Video Showcase */}
      <section className="py-20 bg-[#f0f0f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-brand-red font-bold">
              Реальні результати
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Танго з ученицями
            </h2>
            <div className="w-16 h-1 bg-brand-red mx-auto mt-4 rounded-full" />
            <p className="text-sm text-gray-600 mt-4">
              Танцювати танго і навчати танго — це різні речі. Ми пишаємось результатами, яких досягають наші учні, та вболіваємо за кожного.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video 1 */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 flex flex-col justify-between">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black mb-4">
                <iframe
                  src="https://www.youtube.com/embed/tNsvnb7rvbU"
                  title="Танго імпровізація, Ліза"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg text-gray-900">
                  Танго імпровізація, Ліза (4 роки навчання)
                </h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Зйомка під час групового уроку танго. На уроках викладач активно бере участь як партнер і передає тонкі нюанси ведення.
                </p>
              </div>
            </div>

            {/* Video 2 */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 flex flex-col justify-between">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black mb-4">
                <iframe
                  src="https://www.youtube.com/embed/zIaps2U7s84"
                  title="Танго імпровізація, Олена"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg text-gray-900">
                  Танго імпровізація, Олена (2 роки навчання)
                </h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Відчути партнерку і станцювати з нею танець на одному подиху — це і є справжнє аргентинське танго!
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://www.youtube.com/playlist?list=PLUxp--VffYPQh0WGan3HMeS0jvLM1-vqg"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-red hover:bg-brand-redDark text-white font-bold text-xs shadow-md transition-all"
            >
              <Youtube className="w-4 h-4" />
              <span>Більше відео з ученицями на YouTube</span>
            </a>
          </div>
        </div>
      </section>

      {/* Advantages of Individual Lessons (t510) */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-brand-red font-bold">
              Чому індивідуально?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              У чому перевага індивідуальних уроків?
            </h2>
            <div className="w-16 h-1 bg-brand-red mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full border-2 border-brand-red text-brand-red flex items-center justify-center flex-shrink-0 font-bold text-sm bg-red-50">
                1
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-gray-900">
                  Індивідуальна увага
                </h3>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                  Під час індивідуального уроку викладач на 100% сфокусований на ваших потребах. Це дозволяє рухатися у вашому власному темпі та миттєво отримувати чіткі роз&apos;яснення.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full border-2 border-brand-red text-brand-red flex items-center justify-center flex-shrink-0 font-bold text-sm bg-red-50">
                2
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-gray-900">
                  Посилена взаємодія
                </h3>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                  Індивідуальні заняття дають максимальний час персонального контакту з професійним партнером, допомагаючи відчути справжню мову тіла в парі.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full border-2 border-brand-red text-brand-red flex items-center justify-center flex-shrink-0 font-bold text-sm bg-red-50">
                3
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-gray-900">
                  Гнучкість у графіку
                </h3>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                  Індивідуальні уроки з Анатолієм дозволяють планувати заняття у будь-який зручний день та час — у будні чи на вихідних.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full border-2 border-brand-red text-brand-red flex items-center justify-center flex-shrink-0 font-bold text-sm bg-red-50">
                4
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-gray-900">
                  Корекція біомеханіки та постави
                </h3>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                  Аналіз кожного руху в деталях дозволяє одразу прибрати затискачі у спині, вирівняти поставу та відпрацювати стабільний баланс.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full border-2 border-brand-red text-brand-red flex items-center justify-center flex-shrink-0 font-bold text-sm bg-red-50">
                5
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-gray-900">
                  Прискорення результату в рази
                </h3>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                  Один індивідуальний урок з досвідченим тренером за ефективністю дорівнює декільком тижням звичайних групових занять.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards (t599) */}
      <section id="prices-tango" className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-brand-red font-bold">
              Вартість
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Вартість індивідуальних уроків
            </h2>
            <div className="w-16 h-1 bg-brand-red mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Single */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-serif font-bold text-xl text-gray-900 text-center">
                  Година танго!
                </h3>
                <div className="text-center my-5">
                  <span className="font-bold text-3xl text-brand-red block font-serif">
                    1 800 грн
                  </span>
                  <span className="text-xs text-gray-500">1 урок (60 хв)</span>
                </div>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Для початківців або з конкретним запитом</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Танець у задоволення з викладачем</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Якісний зворотній зв&apos;язок</span>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full mt-6 py-2.5 rounded-xl bg-gray-900 hover:bg-black text-white text-xs font-bold"
              >
                Записатись
              </button>
            </div>

            {/* 4 Lessons */}
            <div className="bg-white rounded-2xl p-6 border-2 border-brand-red shadow-lg flex flex-col justify-between relative scale-105">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand-red text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow">
                Оптимальний курс
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-gray-900 text-center">
                  Курс 4 уроки
                </h3>
                <div className="text-center my-5">
                  <span className="font-bold text-3xl text-brand-red block font-serif">
                    6 800 грн
                  </span>
                  <span className="text-xs text-gray-500">1 700 грн / урок</span>
                </div>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>4 індивідуальні заняття по 60 хвилин</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Опанування базового танго-репертуару</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Індивідуальний підбір темпу навчання</span>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full mt-6 py-2.5 rounded-xl bg-brand-red hover:bg-brand-redDark text-white text-xs font-bold shadow btn-flash"
              >
                Замовити курс
              </button>
            </div>

            {/* 8 Lessons */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-serif font-bold text-xl text-gray-900 text-center">
                  Курс 8 уроків
                </h3>
                <div className="text-center my-5">
                  <span className="font-bold text-3xl text-brand-red block font-serif">
                    12 800 грн
                  </span>
                  <span className="text-xs text-gray-500">1 600 грн / урок</span>
                </div>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Повний комплексний інтенсив</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Імпровізація, вальс та мілонга</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Підготовка до виходу на мілонгу</span>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full mt-6 py-2.5 rounded-xl bg-gray-900 hover:bg-black text-white text-xs font-bold"
              >
                Замовити курс
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <BookingModal
        isOpen={isModalOpen}
        type="tango-vip"
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
