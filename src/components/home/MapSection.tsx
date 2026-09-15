import React from "react";
import { MapPin, Phone, Clock, Send, MessageCircle, Instagram, Youtube } from "lucide-react";

export default function MapSection() {
  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-brand-purple font-bold">
            Локація & Зв&apos;язок
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 font-bold mt-2">
            Як нас знайти
          </h2>
          <div className="w-16 h-1 bg-brand-purple mx-auto mt-4 rounded-full" />
          <p className="text-sm text-gray-600 mt-4">
            Зручне розташування на Оболоні біля набережної та станцій метро.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-purple-900 via-purple-950 to-black text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-serif font-bold text-2xl tracking-wide">
                KOTE STUDIO • Kyiv
              </h3>

              <div className="space-y-4 text-sm text-gray-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block text-base">Адреса Студії:</strong>
                    <span>м. Київ, Оболонський проспект 1, корпус 3</span>
                    <span className="text-xs text-gray-400 block mt-0.5">
                      (Оболонський район, 5 хвилин від метро Оболонь)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block text-base">Телефон:</strong>
                    <a
                      href="tel:+380667344104"
                      className="text-white hover:text-brand-green font-bold text-lg transition-colors"
                    >
                      +38 066 734 4104
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block text-base">Години роботи:</strong>
                    <span>Щодня з 09:00 до 22:00</span>
                    <span className="text-xs text-gray-400 block mt-0.5">
                      За попереднім записом або згідно з розкладом занять
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Messengers */}
            <div className="mt-8 pt-6 border-t border-purple-800/60">
              <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold block mb-3">
                Швидкий зв&apos;язок у месенджерах:
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://t.me/kote_studio"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold transition-colors"
                >
                  <Send className="w-4 h-4 text-sky-400" />
                  <span>Telegram</span>
                </a>
                <a
                  href="viber://chat?number=%2B380667344104"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-purple-400" />
                  <span>Viber</span>
                </a>
                <a
                  href="https://wa.me/380667344104"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4 text-green-400" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://www.instagram.com/antonio.ya.tango/tagged/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Google Map iframe */}
          <div className="lg:col-span-7 h-[420px] lg:h-auto rounded-3xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.272186831154!2d30.49887707689718!3d50.492758983057134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4d221ff62a3eb%3A0x7d286ee66858e70a!2zT2JvbG9uc2t5aSBQcm9zcGVrdCwgMSwgS3lpdiwgMDIwMDA!5e0!3m2!1sen!2sua!4v1700000000000!5m2!1sen!2sua"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kote Studio Map Location"
              className="w-full h-full grayscale-[20%] contrast-[1.05]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
