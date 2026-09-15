"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionDivider from "@/components/layout/SectionDivider";
import VideoModal from "@/components/modals/VideoModal";
import BookingModal from "@/components/modals/BookingModal";
import { GIFT_FAQS } from "@/data/faqs";
import { Play, Check, ChevronDown, Sparkles, Gift } from "lucide-react";

export default function TangoGiftPage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("Tango Red");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const handleOrder = (pkg: string) => {
    setSelectedPackage(pkg);
    setIsOrderOpen(true);
  };

  return (
    <main className="flex-1 flex flex-col bg-brand-cream">
      <Header
        customTitle="Подарунковий Сертифікат Танго"
        customLogo="/assets/gift/gift-logo.jpg"
      />

      {/* Hero Cover (t154 / t-cover) */}
      <section className="relative h-[75vh] sm:h-[85vh] flex items-end justify-center pb-20 text-center overflow-hidden">
        <Image
          src="/assets/gift/gift-cover.jpg"
          alt="Подарунковий сертифікат танго"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fcfbef] via-black/30 to-black/20" />

        <div className="relative z-10 max-w-2xl px-4">
          <span className="text-xs uppercase tracking-widest text-purple-200 font-bold drop-shadow">
            Kote Tango Academy
          </span>
          <h1 className="font-serif italic text-4xl sm:text-6xl text-white font-normal mt-2 drop-shadow-md">
            більше ніж подарунок
          </h1>
        </div>
      </section>

      {/* Running Marquee Banner (t1003) */}
      <div className="bg-brand-purpleDeep text-white py-4 overflow-hidden shadow-inner select-none">
        <div className="flex items-center gap-8 whitespace-nowrap animate-marquee">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="font-serif text-sm sm:text-base tracking-wide font-medium">
                Сертифікат Діє 90 днів з моменту придбання!
              </span>
              <span className="inline-block w-2 h-2 rounded-full bg-white opacity-80" />
            </div>
          ))}
        </div>
      </div>

      {/* Craftsmanship & Tactile Presentation (t677) */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text description */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-brand-purple font-bold">
                Ручна робота & Естетика
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Подарунковий Сертифікат Аргентинського Танго
              </h2>

              <div className="text-sm sm:text-base text-gray-700 leading-relaxed space-y-4">
                <p>
                  Це оригінальний подарунок, який надає можливість отримати незабутні враження та позитивні емоції від аргентинського танго в компанії професійного викладача.
                </p>
                <p>
                  Подарунковий сертифікат на урок аргентинського танго — ручна робота, створена з надзвичайно приємних на дотик матеріалів.
                </p>
                <p>
                  Об&apos;ємний конверт (12х16 см) виготовлений вручну з дизайнерського картону та у доповненні з вашим персональним привітанням запечатаний справжнім сургучним відтиском, що надає подарунку не тільки загадковості, але й смаку чогось рідкісного, цінного і дуже особливого.
                </p>
              </div>

              {/* 40-second Video Trigger (t1058) */}
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setIsVideoOpen(true)}
                  className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-purple text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs uppercase tracking-wider text-gray-500 font-bold">
                      Відеоогляд
                    </span>
                    <span className="text-sm font-bold text-gray-900 font-serif">
                      процес створення за 40 секунд
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Photos collage */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/assets/gift/envelope-1.jpg"
                  alt="Конверт ручної роботи"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                  <Image
                    src="/assets/gift/envelope-2.jpg"
                    alt="Сургучний відтиск"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                  <Image
                    src="/assets/gift/envelope-3.jpg"
                    alt="Сертифікат танго"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Packages & Pricing */}
      <section id="prices-tango" className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-brand-purple font-bold">
              Варіанти подарунку
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Оберіть свій Сертифікат
            </h2>
            <div className="w-16 h-1 bg-brand-purple mx-auto mt-4 rounded-full" />
            <p className="text-sm text-gray-600 mt-4">
              Кожен сертифікат пакується у фірмовий конверт з восковою печаткою та листівкою.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tango Red */}
            <div
              id="TangoRed"
              className="bg-brand-cream rounded-3xl p-8 border border-red-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
                  Класика
                </span>
                <h3 className="font-serif font-bold text-2xl text-gray-900 mt-1">
                  Танго Red
                </h3>
                <p className="text-xs text-gray-600 mt-2">
                  Для однієї людини або для закоханої пари
                </p>

                <div className="my-6">
                  <span className="font-bold text-3xl text-brand-red block font-serif">
                    1 800 грн
                  </span>
                  <span className="text-xs text-gray-500">
                    1 індивідуальний урок (60 хв)
                  </span>
                </div>

                <ul className="space-y-3 text-xs text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                    <span>Повне знайомство з основами аргентинського танго</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                    <span>Індивідуальний підхід та увага викладача</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                    <span>Подарункове пакування ручної роботи</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => handleOrder("Танго Red")}
                className="w-full mt-8 py-3.5 rounded-xl bg-brand-red hover:bg-brand-redDark text-white font-bold text-xs shadow-md transition-all btn-flash"
              >
                Замовити сертифікат
              </button>
            </div>

            {/* Tango Black */}
            <div
              id="TangoBlack"
              className="bg-gray-900 text-white rounded-3xl p-8 border border-gray-800 shadow-2xl scale-105 flex flex-col justify-between relative"
            >
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand-purple text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>Преміум вибір</span>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-purple">
                  Розширений курс
                </span>
                <h3 className="font-serif font-bold text-2xl text-white mt-1">
                  Танго Black
                </h3>
                <p className="text-xs text-gray-400 mt-2">
                  Глибоке занурення у танець для пари
                </p>

                <div className="my-6">
                  <span className="font-bold text-3xl text-brand-purple block font-serif">
                    4 800 грн
                  </span>
                  <span className="text-xs text-gray-400">
                    3 індивідуальні уроки + відвідування мілонги
                  </span>
                </div>

                <ul className="space-y-3 text-xs text-gray-300">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span>3 повноцінні індивідуальні уроки по 60 хвилин</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span>Постановка першої танго-композиції</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span>Вхідний квиток на найближчу мілонгу Kote</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span>Преміальний чорний дизайнерський конверт</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => handleOrder("Танго Black")}
                className="w-full mt-8 py-3.5 rounded-xl bg-brand-purple hover:bg-brand-purpleDark text-white font-bold text-xs shadow-lg transition-all btn-flash"
              >
                Замовити сертифікат
              </button>
            </div>

            {/* Custom / VIP */}
            <div
              id="tango-gift-vip"
              className="bg-brand-cream rounded-3xl p-8 border border-purple-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-purple">
                  Ексклюзив
                </span>
                <h3 className="font-serif font-bold text-2xl text-gray-900 mt-1">
                  Створити Власний
                </h3>
                <p className="text-xs text-gray-600 mt-2">
                  Індивідуальна кількість занять та опцій
                </p>

                <div className="my-6">
                  <span className="font-bold text-3xl text-gray-900 block font-serif">
                    За запитом
                  </span>
                  <span className="text-xs text-gray-500">
                    Будь-яка програма абонементу
                  </span>
                </div>

                <ul className="space-y-3 text-xs text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span>Поєднання групових та індивідуальних занять</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span>Персоналізований текст побажання у сургучі</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span>Курс весільного танцю або подарунок батькам</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => handleOrder("Створити Власний (VIP)")}
                className="w-full mt-8 py-3.5 rounded-xl bg-gray-900 hover:bg-black text-white font-bold text-xs shadow-md transition-all"
              >
                Сформувати VIP сертифікат
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="tango-faq" className="py-20 bg-brand-cream border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-brand-purple font-bold">
              Все про сертифікати
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Питання і Відповіді
            </h2>
            <div className="w-16 h-1 bg-brand-purple mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-4">
            {GIFT_FAQS.map((faq, idx) => {
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

      <Footer />

      {/* Video Modal (40s creation process) */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        vimeoId="893735665"
        title="Процес створення подарункового сертифікату за 40 секунд"
      />

      {/* Order Modal */}
      <BookingModal
        isOpen={isOrderOpen}
        type="gift-order"
        title={`Замовлення сертифікату: ${selectedPackage}`}
        onClose={() => setIsOrderOpen(false)}
      />
    </main>
  );
}
