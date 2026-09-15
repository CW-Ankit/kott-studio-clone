"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionDivider from "@/components/layout/SectionDivider";
import BookingModal from "@/components/modals/BookingModal";
import { Check, Star, Youtube, Play, Sparkles } from "lucide-react";

export default function TangoIndividualEngPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="flex-1 flex flex-col bg-white">
      <Header langSwitch currentLang="ENG" customTitle="Tango Individually" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs uppercase tracking-widest text-brand-green font-bold">
            Personal Tango Coaching in Kyiv
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 mt-3 leading-tight">
            Individual Lessons{" "}
            <span className="text-brand-red">Argentine Tango</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            Argentine tango is a culture and art that requires the dancer not only technical skill, but also an understanding of dance as a language that conveys emotions and mood. Therefore, to achieve high mastery, high-quality individual training is necessary.
          </p>
        </div>
      </section>

      {/* Hero Instructor Card Banner */}
      <section className="relative min-h-[500px] sm:min-h-[600px] bg-gradient-to-r from-gray-950 via-gray-900 to-black text-white flex items-end">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/assets/teachers/anatoliy-full.png"
            alt="Anatoliy Yakymchuk Tango Teacher"
            fill
            className="object-contain object-right-bottom opacity-85"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black via-black/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 w-full">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-widest text-brand-green font-bold block mb-2">
              Head Coach at KOTE STUDIO
            </span>
            <h2 className="font-serif font-bold text-4xl sm:text-5xl text-white leading-tight">
              Anatoliy &quot;Antonio&quot; Yakymchuk
            </h2>
            <div className="flex items-center gap-4 text-xs font-semibold text-gray-300 mt-2">
              <span>Dancing since 2002</span>
              <span>•</span>
              <span>Teaching since 2017</span>
            </div>

            <p className="text-sm text-gray-300 mt-4 leading-relaxed">
              Kyiv-based teacher of Argentine tango, who is excellent at both the leadership part and the follower&apos;s part. This allows him to share practical advice in difficult dance situations, both for partners and for female partners.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-red hover:bg-brand-redDark text-white font-bold text-sm shadow-xl hover:shadow-2xl transition-all btn-flash"
              >
                Book a Lesson
              </button>
              <span className="text-xs text-gray-400">
                Location: Obolonsky prospect 1, bldg 3, Kyiv
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
              Real Results
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Tango with Students
            </h2>
            <div className="w-16 h-1 bg-brand-red mx-auto mt-4 rounded-full" />
            <p className="text-sm text-gray-600 mt-4">
              Dancing tango and teaching tango are two different arts. We take pride in the results achieved by our students and cheer for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video 1 */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 flex flex-col justify-between">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black mb-4">
                <iframe
                  src="https://www.youtube.com/embed/tNsvnb7rvbU"
                  title="Tango improvisation with Lisa"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg text-gray-900">
                  Tango improvisation, Lisa (4 years of study)
                </h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Recorded during a group tango lesson. The instructor actively dances as a partner and passes on subtle nuances of body lead.
                </p>
              </div>
            </div>

            {/* Video 2 */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 flex flex-col justify-between">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black mb-4">
                <iframe
                  src="https://www.youtube.com/embed/zIaps2U7s84"
                  title="Tango improvisation with Olena"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg text-gray-900">
                  Tango improvisation, Olena (2 years of study)
                </h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Feeling your partner and dancing a melody in one breath is what true Argentine tango is all about!
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
              <span>More Videos with Students on YouTube</span>
            </a>
          </div>
        </div>
      </section>

      {/* Advantages (t510) */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-brand-red font-bold">
              Benefits
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              What is the advantage of individual lessons?
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
                  Individual attention
                </h3>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                  During an individual lesson, the teacher is 100% focused on your needs, allowing for faster progress and personalized feedback.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full border-2 border-brand-red text-brand-red flex items-center justify-center flex-shrink-0 font-bold text-sm bg-red-50">
                2
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-gray-900">
                  Increased interaction
                </h3>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                  Individual lessons allow more time for personal contact and interaction, helping students learn body language and connection effectively.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full border-2 border-brand-red text-brand-red flex items-center justify-center flex-shrink-0 font-bold text-sm bg-red-50">
                3
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-gray-900">
                  Flexibility in the schedule
                </h3>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                  Individual lessons with Antonio allow you to plan sessions taking into account your needs, at a time convenient for you.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full border-2 border-brand-red text-brand-red flex items-center justify-center flex-shrink-0 font-bold text-sm bg-red-50">
                4
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-gray-900">
                  Body adjustment
                </h3>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                  The teacher can analyze movements in detail and correct posture in the moment. This helps master balance and sharpen technique.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full border-2 border-brand-red text-brand-red flex items-center justify-center flex-shrink-0 font-bold text-sm bg-red-50">
                5
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-gray-900">
                  Acceleration of the learning process
                </h3>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                  Individual lessons allow you to achieve results faster using an experiential teaching method honed over years of practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards in USD (t599) */}
      <section id="prices-tango" className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-brand-red font-bold">
              Pricing
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Lesson Fees
            </h2>
            <div className="w-16 h-1 bg-brand-red mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Single */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-serif font-bold text-xl text-gray-900 text-center">
                  An hour of tango!
                </h3>
                <div className="text-center my-5">
                  <span className="font-bold text-3xl text-brand-red block font-serif">
                    $40
                  </span>
                  <span className="text-xs text-gray-500">1 lesson (60 min)</span>
                </div>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>For beginners or specific requests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Dancing for pleasure with coach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Quality real-time feedback</span>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full mt-6 py-2.5 rounded-xl bg-gray-900 hover:bg-black text-white text-xs font-bold"
              >
                Book Now
              </button>
            </div>

            {/* 4 Lessons */}
            <div className="bg-white rounded-2xl p-6 border-2 border-brand-red shadow-lg flex flex-col justify-between relative scale-105">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand-red text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow">
                Best Value
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-gray-900 text-center">
                  Course of 4 Lessons
                </h3>
                <div className="text-center my-5">
                  <span className="font-bold text-3xl text-brand-red block font-serif">
                    $150
                  </span>
                  <span className="text-xs text-gray-500">$37.5 / lesson</span>
                </div>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>4 individual sessions (60 min each)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Mastering fundamental tango vocabulary</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Personalized learning progression</span>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full mt-6 py-2.5 rounded-xl bg-brand-red hover:bg-brand-redDark text-white text-xs font-bold shadow btn-flash"
              >
                Book Course
              </button>
            </div>

            {/* 8 Lessons */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-serif font-bold text-xl text-gray-900 text-center">
                  Course of 8 Lessons
                </h3>
                <div className="text-center my-5">
                  <span className="font-bold text-3xl text-brand-red block font-serif">
                    $280
                  </span>
                  <span className="text-xs text-gray-500">$35 / lesson</span>
                </div>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Comprehensive intensive program</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Improvisation, Milonga & Vals rhythms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Milonga social dance preparation</span>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full mt-6 py-2.5 rounded-xl bg-gray-900 hover:bg-black text-white text-xs font-bold"
              >
                Book Course
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <BookingModal
        isOpen={isModalOpen}
        type="tango-vip"
        title="Book an Individual Lesson with Antonio"
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
