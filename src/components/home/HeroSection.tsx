import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="pt-28 pb-12 bg-brand-bgLight text-center border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4">
        {/* Emblem */}
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto mb-6 drop-shadow-sm">
          <Image
            src="/assets/hero-emblem.png"
            alt="Kote Studio Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Catchphrase */}
        <h1 className="font-serif italic font-light text-2xl sm:text-3xl md:text-4xl text-gray-800 leading-snug">
          «Студія де збуваються мрії
          <br />
          <strong className="font-serif font-normal not-italic text-brand-purple">
            Kote - Твій другий дім!
          </strong>»
        </h1>
      </div>
    </section>
  );
}
