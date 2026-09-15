"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export type ModalType =
  | "tano-legs"
  | "tango-group"
  | "rozklad"
  | "tango-vip"
  | "gift-order"
  | null;

interface BookingModalProps {
  isOpen: boolean;
  type: ModalType;
  onClose: () => void;
  title?: string;
  initialClass?: string;
}

export default function BookingModal({
  isOpen,
  type,
  onClose,
  title,
  initialClass,
}: BookingModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("60 хв");
  const [selectedClass, setSelectedClass] = useState(initialClass || "Аргентинське Танго");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialClass) {
      setSelectedClass(initialClass);
    }
  }, [initialClass]);

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setError("");
    }
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Будь ласка, введіть ваше ім'я");
      return;
    }
    if (!phone.trim() || phone.length < 8) {
      setError("Будь ласка, вкажіть коректний номер телефону");
      return;
    }

    // Success simulation
    setError("");
    setSubmitted(true);
  };

  const getModalTitle = () => {
    if (title) return title;
    switch (type) {
      case "tano-legs":
        return "Запис на індивідуальний урок з Іриною";
      case "tango-vip":
        return "Запис на індивідуальний урок з Анатолієм";
      case "tango-group":
        return "Запис на груповий урок танго";
      case "rozklad":
        return "Запис на заняття за розкладом";
      case "gift-order":
        return "Замовлення подарункового сертифікату";
      default:
        return "Запис на заняття";
    }
  };

  const getSuccessMessage = () => {
    switch (type) {
      case "tano-legs":
        return "Запит надіслано і Ірина скоро зв'яжеться з Вами!";
      case "tango-vip":
        return "Запит надіслано! Анатолій зв'яжеться з Вами для узгодження зручного часу.";
      case "gift-order":
        return "Замовлення прийнято! Ми зв'яжемося з Вами для уточнення деталей оформлення та доставки.";
      default:
        return "Запит успішно надіслано! Адміністратор студії Kote зв'яжеться з Вами найближчим часом.";
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden z-10 my-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 text-gray-400 hover:text-black bg-white/80 hover:bg-gray-100 p-2 rounded-full transition-all"
              aria-label="Закрити"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Banner */}
            {type === "tano-legs" && (
              <div className="relative h-44 w-full bg-gray-100 overflow-hidden">
                <Image
                  src="/assets/popup-irina.png"
                  alt="Ірина Семенчук - Танго"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-6 text-white">
                  <span className="text-xs uppercase tracking-widest text-pink-300 font-semibold">
                    Жіночі техніки & Танго
                  </span>
                  <h4 className="font-serif text-lg font-bold">Ірина Семенчук</h4>
                </div>
              </div>
            )}

            <div className="p-6 md:p-8">
              {!submitted ? (
                <>
                  <div className="text-center mb-6">
                    <h3 className="font-serif font-bold text-2xl text-gray-900 leading-snug">
                      {getModalTitle()}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Заповніть форму, і ми підтвердимо ваш запис
                    </p>
                  </div>

                  {error && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg text-center font-medium">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Ваше Ім’я <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Олександр / Олена"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-purple focus:border-brand-purple text-sm transition-all outline-none"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Номер телефону <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+38 (0__) ___-__-__"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-purple focus:border-brand-purple text-sm transition-all outline-none"
                      />
                    </div>

                    {/* Desired Date */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Бажана дата / час уроку
                      </label>
                      <input
                        type="text"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder="Наприклад: завтра о 19:00 або вихідні"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-purple focus:border-brand-purple text-sm transition-all outline-none"
                      />
                    </div>

                    {/* Duration toggle for Irina's lessons */}
                    {type === "tano-legs" && (
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-2">
                          Тривалість уроку
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {["60 хв", "90 хв"].map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setDuration(opt)}
                              className={`py-2.5 px-4 rounded-xl text-sm font-medium border transition-all ${
                                duration === opt
                                  ? "bg-brand-purple text-white border-brand-purple shadow-sm"
                                  : "border-gray-200 text-gray-700 hover:bg-gray-50"
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Class Selector for Schedule */}
                    {type === "rozklad" && (
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Оберіть напрямок
                        </label>
                        <select
                          value={selectedClass}
                          onChange={(e) => setSelectedClass(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-purple focus:border-brand-purple text-sm bg-white outline-none"
                        >
                          <option value="Аргентинське Танго: Основи">Аргентинське Танго: Основи</option>
                          <option value="Жіночі танго техніки">Жіночі танго техніки</option>
                          <option value="TRX & Body Conditioning">TRX & Body Conditioning</option>
                          <option value="TaBaTa & Стретчинг">TaBaTa & Стретчинг</option>
                          <option value="Ранковий Стретчинг">Ранковий Стретчинг</option>
                        </select>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-brand-purple hover:bg-brand-purpleDark text-white font-bold text-base shadow-lg hover:shadow-xl transition-all duration-200 btn-flash mt-4"
                    >
                      Надіслати заявку
                    </button>

                    <p className="text-[11px] text-gray-400 text-center">
                      Натискаючи кнопку, ви погоджуєтеся на обробку персональних даних для запису на заняття.
                    </p>
                  </form>
                </>
              ) : (
                /* Success State */
                <div className="py-8 px-4 text-center">
                  <div className="w-16 h-16 bg-green-100 text-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-gray-900 mb-2">
                    Дякуємо за звернення!
                  </h3>
                  <p className="text-gray-600 text-sm max-w-sm mx-auto leading-relaxed mb-6">
                    {getSuccessMessage()}
                  </p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="py-2.5 px-8 rounded-xl bg-gray-900 text-white font-medium text-sm hover:bg-gray-800 transition-colors"
                  >
                    Закрити
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
