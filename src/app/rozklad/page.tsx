"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionDivider from "@/components/layout/SectionDivider";
import BookingModal from "@/components/modals/BookingModal";
import { SCHEDULE, SCHEDULE_DAYS, PRICING_PASSES, ScheduleItem } from "@/data/schedule";
import { Calendar, Clock, User, Check, Sparkles, Filter } from "lucide-react";

export default function RozkladPage() {
  const [selectedDay, setSelectedDay] = useState<string>("Всі дні");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInitialClass, setModalInitialClass] = useState<string>("");

  const filteredSchedule = SCHEDULE.filter((item) => {
    const matchesDay = selectedDay === "Всі дні" || item.day === selectedDay;
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    return matchesDay && matchesCategory;
  });

  const handleBookClass = (className?: string) => {
    if (className) {
      setModalInitialClass(className);
    }
    setIsModalOpen(true);
  };

  return (
    <main className="flex-1 flex flex-col bg-white">
      <Header />

      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-purple-50 via-white to-gray-50 text-center border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs uppercase tracking-widest text-brand-purple font-bold">
            Актуальний розклад занять
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight">
            Розклад групових занять на Оболоні
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-2xl mx-auto">
            Аргентинське танго, TRX, TaBaTa, стретчинг та практики в затишній студії Kote.Studio. Оберіть зручний час та приєднуйтесь!
          </p>

          <div className="mt-8">
            <button
              type="button"
              onClick={() => handleBookClass()}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-purple hover:bg-brand-purpleDark text-white font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all btn-flash active:scale-95"
            >
              Запис на груповий урок
            </button>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-[68px] z-30 shadow-sm backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              <button
                type="button"
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === "all"
                    ? "bg-brand-purple text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Усі напрямки
              </button>
              <button
                type="button"
                onClick={() => setSelectedCategory("tango")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === "tango"
                    ? "bg-brand-purple text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Аргентинське Танго
              </button>
              <button
                type="button"
                onClick={() => setSelectedCategory("fitness")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === "fitness"
                    ? "bg-brand-purple text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Фітнес & Стретчинг
              </button>
            </div>

            {/* Day Filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 text-xs">
              <button
                type="button"
                onClick={() => setSelectedDay("Всі дні")}
                className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                  selectedDay === "Всі дні"
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Всі дні
              </button>
              {SCHEDULE_DAYS.map((day) => (
                <button
                  key={day}
                  type="button"
                  onClick={() => setSelectedDay(day)}
                  className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                    selectedDay === day
                      ? "bg-brand-green text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Grid */}
      <section className="py-16 bg-gray-50 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {filteredSchedule.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSchedule.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    {/* Badge & Day */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-50 text-brand-purple">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.day}
                      </span>
                      <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
                        {item.level}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-xl text-gray-900 mt-2">
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-4 text-xs text-gray-600 mt-3 pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-1.5 font-medium text-brand-dark">
                        <Clock className="w-4 h-4 text-brand-purple" />
                        <span>{item.time}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <User className="w-4 h-4 text-brand-green" />
                        <span>{item.instructor}</span>
                      </div>
                    </div>

                    {item.description && (
                      <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <button
                      type="button"
                      onClick={() => handleBookClass(item.title)}
                      className="w-full py-2.5 px-4 rounded-xl bg-gray-900 hover:bg-brand-purple text-white text-xs font-bold transition-all shadow-sm"
                    >
                      Записатись на це заняття
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center text-gray-500">
              <p className="text-lg">На обраний день або фільтр занять немає.</p>
              <button
                onClick={() => {
                  setSelectedDay("Всі дні");
                  setSelectedCategory("all");
                }}
                className="mt-3 text-sm text-brand-purple font-semibold hover:underline"
              >
                Скинути фільтри
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Pricing & Passes Section */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-brand-purple font-bold">
              Вартість та абонементи
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 font-bold mt-2">
              Абонементи Студії KOTE
            </h2>
            <div className="w-16 h-1 bg-brand-purple mx-auto mt-4 rounded-full" />
            <p className="text-sm text-gray-600 mt-4">
              Обирайте комфортний формат відвідування для регулярного танцювального прогресу.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRICING_PASSES.map((pass) => (
              <div
                key={pass.id}
                className={`relative rounded-2xl p-6 flex flex-col justify-between border transition-all ${
                  pass.isPopular
                    ? "bg-purple-50/50 border-brand-purple shadow-lg scale-105 z-10"
                    : "bg-white border-gray-200 shadow-sm hover:shadow-md"
                }`}
              >
                {pass.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand-purple text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Популярний вибір</span>
                  </div>
                )}

                <div>
                  <h3 className="font-serif font-bold text-xl text-gray-900 text-center">
                    {pass.title}
                  </h3>

                  <div className="text-center my-5">
                    <span className="font-bold text-3xl text-brand-purple block">
                      {pass.price}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                      {pass.period}
                    </span>
                  </div>

                  <ul className="space-y-2.5 text-xs text-gray-600 mb-6">
                    {pass.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => handleBookClass(pass.title)}
                  className={`w-full py-3 rounded-xl font-bold text-xs transition-all ${
                    pass.isPopular
                      ? "bg-brand-purple hover:bg-brand-purpleDark text-white shadow-md btn-flash"
                      : "bg-gray-900 hover:bg-black text-white"
                  }`}
                >
                  Придбати абонемент
                </button>
              </div>
            ))}
          </div>

          {/* Pass Benefits Note */}
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-purple-50 to-green-50 border border-purple-100 max-w-3xl mx-auto text-xs text-gray-700 leading-relaxed">
            <strong className="text-brand-green font-bold text-sm block mb-1">
              ✨ Спеціальний бонус для власників абонементів:
            </strong>
            <p>
              Кожен власник абонементу на 8 занять має можливість взяти один індивідуальний урок аргентинського танго з Анатолієм та один індивідуальний урок жіночих технік з Іриною за спеціальною ціною <strong>1 400 грн</strong> за кожне заняття (знижка 400 грн).
            </p>
          </div>
        </div>
      </section>

      <Footer />

      <BookingModal
        isOpen={isModalOpen}
        type="rozklad"
        onClose={() => setIsModalOpen(false)}
        initialClass={modalInitialClass}
      />
    </main>
  );
}
