"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionDivider from "@/components/layout/SectionDivider";
import BookingModal from "@/components/modals/BookingModal";
import { ACADEMY_FAQS } from "@/data/faqs";
import { ChevronDown, CheckCircle, Award, Target, Sparkles, Heart } from "lucide-react";

export default function TangoAcademyPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"tango-group" | "tano-legs">("tango-group");

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const openGroupModal = () => {
    setModalType("tango-group");
    setIsModalOpen(true);
  };

  const openIrinaModal = () => {
    setModalType("tano-legs");
    setIsModalOpen(true);
  };

  return (
    <main className="flex-1 flex flex-col bg-white">
      <Header
        customTitle="Kote Tango Academy"
        customLogo="/assets/academy-logo.jpg"
      />

      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Kote Tango Academy - більше ніж школа танго!
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Бажаєш навчитися танцювати аргентинське танго? Тобі до нас! Ми команда викладачів, яка допомагає кожному знайти своє танго.
          </p>

          <div className="relative w-64 h-32 sm:w-80 sm:h-40 mx-auto mt-8 drop-shadow-sm">
            <Image
              src="/assets/academy-badge.jpg"
              alt="Kote Tango Academy Badge"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-4">
        <hr className="border-gray-200" />
      </div>

      {/* Why Kote Tango Academy (t510) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-brand-green font-bold">
              Наші переваги
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Чому Kote Tango Academy?
            </h2>
            <div className="w-16 h-1 bg-brand-green mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-10">
            {/* Item 1 */}
            <div className="flex items-start gap-5">
              <div className="w-10 h-10 rounded-full border-2 border-brand-green text-brand-green flex items-center justify-center flex-shrink-0 mt-1 font-serif font-bold text-base bg-green-50/50">
                1
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-gray-900">
                  Наша ціль
                </h3>
                <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">
                  Навчити отримувати задоволення від танго вже з перших кроків. Ми не перевантажуємо складною сухою термінологією, а даємо відчути танець одразу.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-5">
              <div className="w-10 h-10 rounded-full border-2 border-brand-green text-brand-green flex items-center justify-center flex-shrink-0 mt-1 font-serif font-bold text-base bg-green-50/50">
                2
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-gray-900">
                  Наша місія
                </h3>
                <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">
                  Наповнити життя наших танго-учнів новими фарбами. Ми вчимо відчувати партнера, відчувати задоволення від танцю, розуміти своє тіло, імпровізувати, налагодити комунікацію з людьми, цінувати поточний момент... І багато іншого, про що Ви і не здогадуєтесь ;)
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-5">
              <div className="w-10 h-10 rounded-full border-2 border-brand-green text-brand-green flex items-center justify-center flex-shrink-0 mt-1 font-serif font-bold text-base bg-green-50/50">
                3
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-gray-900">
                  Задоволення в кожному кроці
                </h3>
                <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">
                  Від початку навчання до першого повноцінного танцю пройде якийсь час, але на кожному етапі ми хочемо, щоб Ви відчували задоволення. Щоб Ваша посмішка сяяла під час кожного уроку.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-start gap-5">
              <div className="w-10 h-10 rounded-full border-2 border-brand-green text-brand-green flex items-center justify-center flex-shrink-0 mt-1 font-serif font-bold text-base bg-green-50/50">
                4
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-gray-900">
                  Набір у школу відкритий завжди
                </h3>
                <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">
                  Ми віримо, що молоді танцюристи скоріше досягають результатів із досвідченими. Досвідчені тангеро, допомагаючи молодшим, стають якіснішими і ведуть максимально чітко.
                </p>
              </div>
            </div>

            {/* Item 5 */}
            <div className="flex items-start gap-5">
              <div className="w-10 h-10 rounded-full border-2 border-brand-green text-brand-green flex items-center justify-center flex-shrink-0 mt-1 font-serif font-bold text-base bg-green-50/50">
                5
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-gray-900">
                  Продуктивність та індивідуальний підхід
                </h3>
                <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">
                  Kote Tango Academy — команда викладачів, які вносять свій вклад у розвиток кожного студента. Тренери під час уроку намагаються дати зворотній зв&apos;язок і пораду кожному. За можливості, потанцювати з учнями і передати свій танцювальний досвід.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 text-center">
            <button
              type="button"
              onClick={openGroupModal}
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-brand-blue hover:bg-sky-600 text-white font-bold text-base shadow-xl hover:shadow-2xl transition-all btn-flash"
            >
              Записатись на груповий урок
            </button>
          </div>
        </div>
      </section>

      {/* Teachers / Instructors (t526) */}
      <section id="tango-teachers" className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-brand-purple font-bold">
              Команда Викладачів
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Хто викладає в Kote Tango Academy
            </h2>
            <div className="w-16 h-1 bg-brand-purple mx-auto mt-4 rounded-full" />
            <p className="text-sm text-gray-600 mt-4 max-w-2xl mx-auto">
              Усі викладачі різні і мають свої переваги. Ми доповнюємо один одного, даємо різносторонні пояснення матеріалу. Саме тому ми більше ніж школа танго — ми команда!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Anatoliy */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 flex flex-col justify-between">
              <div>
                <div className="relative w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-purple-100 shadow-md mb-6">
                  <Image
                    src="/assets/teachers/anatoliy.jpg"
                    alt="Анатолій Якимчук"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-serif font-bold text-2xl text-center text-gray-900">
                  Анатолій Якимчук
                </h3>
                <span className="text-xs text-brand-purple font-semibold text-center block mt-1">
                  Викладає танго з 2017 р. • Танцює з 2002 р.
                </span>
                <p className="text-xs text-gray-600 mt-4 leading-relaxed">
                  Анатолій почав шлях у танці через спортивну гімнастику, де і почалося формування відчуття балансу та партнера. Чітко розуміє біомеханіку, фізику і хімію у парі. Викладає лідерську та жіночу партії.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <Link
                  href="/tango-individual"
                  className="block text-center text-xs font-bold text-brand-purple hover:underline"
                >
                  Приватні уроки з Анатолієм →
                </Link>
              </div>
            </div>

            {/* Iryna */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 flex flex-col justify-between">
              <div>
                <div className="relative w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-pink-100 shadow-md mb-6">
                  <Image
                    src="/assets/teachers/iryna.png"
                    alt="Ірина Семенчук"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-serif font-bold text-2xl text-center text-gray-900">
                  Ірина Семенчук
                </h3>
                <span className="text-xs text-brand-purple font-semibold text-center block mt-1">
                  Викладає танго з 2022 р.
                </span>
                <p className="text-xs text-gray-600 mt-4 leading-relaxed">
                  «Аргентинське танго підштовхнуло мене зробити новий крок у житті і створити затишне місце для всіх закоханих у танець. Запрошую вас знайти нове захоплення, друзів та натхнення у Kote.Studio».
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={openIrinaModal}
                  className="w-full text-center text-xs font-bold text-brand-purple hover:underline"
                >
                  Записатись на індивідуальний урок з Іриною →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section (t585) */}
      <section id="tango-questions" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-brand-purple font-bold">
              Відповіді на популярні запитання
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Питання і Відповіді
            </h2>
            <div className="w-16 h-1 bg-brand-purple mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-4">
            {ACADEMY_FAQS.map((faq, idx) => {
              const isExpanded = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-serif font-medium text-base sm:text-lg text-gray-900 hover:text-brand-purple transition-colors bg-white focus:outline-none"
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

          <div className="mt-12 text-center p-6 bg-purple-50 rounded-2xl border border-purple-100 text-xs text-gray-700">
            <span>Маєте інше запитання? Зателефонуйте нам за номером </span>
            <a
              href="tel:+380667344104"
              className="font-bold text-brand-purple hover:underline"
            >
              +38 066 734 4104
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <BookingModal
        isOpen={isModalOpen}
        type={modalType}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
