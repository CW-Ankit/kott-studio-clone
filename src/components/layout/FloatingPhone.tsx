"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingPhone() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {/* Floating Avatar Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative group w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-brand-purple shadow-xl overflow-hidden focus:outline-none focus:ring-4 focus:ring-purple-300 transition-transform active:scale-95 hover:scale-105"
        aria-label="Зв'язатися з Kote Tango Academy"
      >
        <Image
          src="/assets/phone-avatar.jpg"
          alt="Kote Tango Academy Phone Widget"
          fill
          className="object-cover"
          sizes="64px"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
        <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-brand-green border-2 border-white" />
      </button>

      {/* Floating Card Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 left-0 w-[300px] sm:w-[340px] bg-white rounded-2xl shadow-2xl border border-purple-100 p-5 z-50 text-center"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Закрити"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Avatar inside */}
            <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-brand-purple shadow-md mb-3">
              <Image
                src="/assets/phone-avatar.jpg"
                alt="Kote Tango Academy"
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>

            <h3 className="font-serif font-bold text-lg text-black">
              Kote Tango Academy
            </h3>

            <p className="text-xs text-gray-600 mt-2 leading-relaxed">
              Ви не знайшли відповідь на сторінці?
              <br />
              Потрібна додаткова консультація?
              <br />
              <br />
              Зателефонуйте, ми будемо раді Вам!
            </p>

            <div className="mt-4 pt-3 border-t border-gray-100">
              <a
                href="tel:+380667344104"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-brand-purple hover:bg-brand-purpleDark text-white font-bold text-base shadow-md hover:shadow-lg transition-all"
              >
                <Phone className="w-4 h-4" />
                +38 066 734 4104
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
