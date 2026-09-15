import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Mail, Instagram, Send, Youtube, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1b1b1b] text-gray-300 pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Studio info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-700">
                <Image
                  src="/assets/logo.jpg"
                  alt="KOTE STUDIO"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div>
                <span className="font-serif font-bold text-xl text-white tracking-wider block">
                  KOTE STUDIO
                </span>
                <span className="text-xs text-brand-green font-medium uppercase tracking-widest">
                  Tango & Movement Academy
                </span>
              </div>
            </div>

            <p className="font-serif italic text-sm text-gray-400">
              «Студія де збуваються мрії. Kote - Твій другий дім!»
            </p>

            <p className="text-xs text-gray-400 leading-relaxed">
              Простір для танцю, спілкування, тілесного розвитку та відкриття нових граней у серці Києва на Оболоні.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-white font-serif font-semibold text-base mb-4 tracking-wide uppercase">
              Навігація
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Головна сторінка
                </Link>
              </li>
              <li>
                <Link href="/rozklad" className="hover:text-white transition-colors">
                  Розклад групових занять
                </Link>
              </li>
              <li>
                <Link href="/lessons-tango-academy" className="hover:text-white transition-colors">
                  Kote Tango Academy
                </Link>
              </li>
              <li>
                <Link href="/milonga-kote-kyiv" className="hover:text-white transition-colors">
                  Мілонга Коте у Києві
                </Link>
              </li>
              <li>
                <Link href="/tango-individual" className="hover:text-white transition-colors">
                  Приватні уроки танго
                </Link>
              </li>
              <li>
                <Link href="/tango-gift" className="hover:text-white transition-colors">
                  Подарунковий сертифікат
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contacts */}
          <div>
            <h4 className="text-white font-serif font-semibold text-base mb-4 tracking-wide uppercase">
              Контакти
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                <span>
                  м. Київ, Оболонський проспект 1, корпус 3 (метро Оболонь)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-green flex-shrink-0" />
                <a
                  href="tel:+380667344104"
                  className="hover:text-white font-medium transition-colors"
                >
                  +38 066 734 4104
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-blue flex-shrink-0" />
                <a
                  href="mailto:info@kote.studio"
                  className="hover:text-white transition-colors"
                >
                  info@kote.studio
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Socials & Hours */}
          <div>
            <h4 className="text-white font-serif font-semibold text-base mb-4 tracking-wide uppercase">
              Спільнота & Мережі
            </h4>
            <p className="text-xs text-gray-400 mb-4">
              Приєднуйтесь до наших соцмереж, дивіться відео з уроків та будьте в курсі подій студії:
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/antonio.ya.tango/tagged/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gradient-to-tr hover:from-purple-600 hover:to-pink-500 transition-all shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/kote_studio"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-sky-500 transition-all shadow-sm"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </a>
              <a
                href="https://youtube.com/playlist?list=PLUxp--VffYPR_UXyB2fxFwzzCI1mPGVNV"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-red-600 transition-all shadow-sm"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 transition-all shadow-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>

            <div className="mt-6 text-xs text-gray-500 border-t border-gray-800 pt-4">
              <p>Графік роботи: щодня 09:00 - 22:00 (за розкладом)</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} KOTE STUDIO. Усі права захищено.</p>
          <p className="font-serif">Студія танців на Оболоні • Kote Tango Academy</p>
        </div>
      </div>
    </footer>
  );
}
