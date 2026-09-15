"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { STORIES, StorySlide } from "@/data/stories";

interface StoriesSliderProps {
  onOpenModal?: (type: "tano-legs" | "tango-group" | "rozklad") => void;
}

const SLIDE_DURATION = 3500; // 3.5 seconds

export default function StoriesSlider({ onOpenModal }: StoriesSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  const currentSlide = STORIES[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % STORIES.length);
    setProgress(0);
    startTimeRef.current = Date.now();
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + STORIES.length) % STORIES.length);
    setProgress(0);
    startTimeRef.current = Date.now();
  };

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
    setProgress(0);
    startTimeRef.current = Date.now();
  };

  // Timer loop
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    const interval = 50; // update progress every 50ms
    startTimeRef.current = Date.now();

    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(pct);

      if (elapsed >= SLIDE_DURATION) {
        nextSlide();
      }
    }, interval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentIndex]);

  const handleButtonClick = (slide: StorySlide, e: React.MouseEvent) => {
    if (slide.popupTarget && onOpenModal) {
      e.preventDefault();
      onOpenModal(slide.popupTarget as any);
    }
  };

  return (
    <section className="relative py-12 md:py-16 bg-[#d9e9f7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Controls header: Play/Pause */}
        <div className="flex items-center justify-between mb-4">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/70 hover:bg-white text-gray-800 shadow-md backdrop-blur-sm transition-colors"
            aria-label={isPlaying ? "Призупинити слайдер" : "Відтворити слайдер"}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-current" />
            ) : (
              <Play className="w-4 h-4 fill-current ml-0.5" />
            )}
          </button>

          <span className="text-xs font-serif italic text-gray-600">
            {currentIndex + 1} з {STORIES.length}
          </span>
        </div>

        {/* Slide Presentation Container */}
        <div className="relative min-h-[460px] md:min-h-[540px] rounded-2xl overflow-hidden shadow-2xl bg-gray-800">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              {/* Slide Background Image */}
              <Image
                src={currentSlide.image}
                alt={currentSlide.title}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />

              {/* Slide Content Overlay */}
              <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end text-white max-w-2xl">
                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-brand-green leading-tight drop-shadow-md"
                >
                  {currentSlide.title}
                </motion.h2>

                {currentSlide.description && (
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    className="text-sm sm:text-base text-gray-200 mt-3 leading-relaxed drop-shadow"
                  >
                    {currentSlide.description}
                  </motion.p>
                )}

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="mt-6"
                >
                  {currentSlide.isExternal ? (
                    <a
                      href={currentSlide.btnLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-brand-purple hover:bg-brand-purpleDark text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all active:scale-95"
                    >
                      {currentSlide.btnText}
                    </a>
                  ) : currentSlide.popupTarget ? (
                    <button
                      type="button"
                      onClick={(e) => handleButtonClick(currentSlide, e)}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-brand-purple hover:bg-brand-purpleDark text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all active:scale-95"
                    >
                      {currentSlide.btnText}
                    </button>
                  ) : (
                    <Link
                      href={currentSlide.btnLink}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-brand-purple hover:bg-brand-purpleDark text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all active:scale-95"
                    >
                      {currentSlide.btnText}
                    </Link>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/70 hover:bg-white text-gray-900 flex items-center justify-center shadow-lg backdrop-blur-sm transition-all hover:scale-105 active:scale-95 z-20"
            aria-label="Попередній слайд"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/70 hover:bg-white text-gray-900 flex items-center justify-center shadow-lg backdrop-blur-sm transition-all hover:scale-105 active:scale-95 z-20"
            aria-label="Наступний слайд"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Stories Progress Bar Trackers at bottom */}
        <div className="mt-5 grid grid-cols-5 md:grid-cols-10 gap-1.5 sm:gap-2">
          {STORIES.map((slide, idx) => {
            const isCurrent = idx === currentIndex;
            const isPassed = idx < currentIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(idx)}
                className="h-1.5 md:h-2 rounded-full overflow-hidden bg-white/60 hover:bg-white transition-colors relative cursor-pointer"
                title={slide.title}
                aria-label={`Перейти до слайду ${idx + 1}: ${slide.title}`}
              >
                <div
                  className="h-full bg-brand-purple transition-all"
                  style={{
                    width: isPassed ? "100%" : isCurrent ? `${progress}%` : "0%",
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
