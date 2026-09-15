"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, Layers, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GalleryModal({ isOpen, onClose }: GalleryModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl z-10 my-8"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-brand-purple" />
                <h3 className="font-serif font-bold text-lg text-gray-900">
                  План та Простір KOTE STUDIO
                </h3>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-black p-1.5 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Закрити"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 md:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-gray-200 bg-gray-50 shadow-inner">
                <Image
                  src="/assets/stories/slide-1.jpg"
                  alt="Зал Kote Studio"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-purple-50/50 rounded-xl border border-purple-100">
                  <span className="block font-bold text-xl text-brand-purple">120 м²</span>
                  <span className="text-xs text-gray-600">Загальна площа студії</span>
                </div>
                <div className="p-4 bg-green-50/50 rounded-xl border border-green-100">
                  <span className="block font-bold text-xl text-brand-green">Дубовий паркет</span>
                  <span className="text-xs text-gray-600">Ідеальне ковзання для танго</span>
                </div>
                <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100">
                  <span className="block font-bold text-xl text-brand-blue">Дзеркала & Звук</span>
                  <span className="text-xs text-gray-600">Професійна акустика</span>
                </div>
              </div>

              <div className="text-sm text-gray-600 space-y-2 leading-relaxed">
                <p>
                  <strong>Обладнання студії:</strong> Дзеркальна стіна на всю довжину залу, петлі TRX, гімнастичні килимки, балетний станок, кондиціонування та припливна вентиляція.
                </p>
                <p>
                  <strong>Зручності:</strong> Окремі чоловіча та жіноча роздягальні, санвузол, затишна лаунж-зона з кавомашиною, чаєм та Wi-Fi.
                </p>
              </div>

              <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  Запрошуємо тренерів до співпраці та оренди залу!
                </span>
                <a
                  href="tel:+380667344104"
                  className="text-xs font-bold text-brand-purple hover:underline"
                >
                  +38 066 734 4104
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
