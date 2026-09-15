import React from "react";
import Link from "next/link";
import { Sparkles, Heart, Users, Music } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-brand-purple font-bold">
            Простір та Філософія
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 font-bold mt-2">
            Про Студію KOTE STUDIO
          </h2>
          <div className="w-16 h-1 bg-brand-purple mx-auto mt-4 rounded-full" />
          <p className="font-serif italic text-lg sm:text-xl text-gray-600 mt-6 leading-relaxed">
            «Танець - це рух, рух - це життя. Приходь танцювати сьогодні, щоб наповнити своє життя новими барвами.»
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 mx-auto rounded-full bg-purple-100 text-brand-purple flex items-center justify-center mb-5">
              <Heart className="w-7 h-7" />
            </div>
            <h3 className="font-serif font-bold text-xl text-gray-900 mb-3">
              Затишок та атмосфера
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Kote — це більше ніж просто зал. Це місце зустрічей, де після уроку можна випити запашної кави, поспілкуватися та знайти справжніх друзів.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 mx-auto rounded-full bg-green-100 text-brand-green flex items-center justify-center mb-5">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="font-serif font-bold text-xl text-gray-900 mb-3">
              Турбота про кожного
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Неважливо, скільки вам років і чи танцювали ви раніше. Наші викладачі знаходять індивідуальний підхід до кожного учня з першого кроку.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 mx-auto rounded-full bg-blue-100 text-brand-blue flex items-center justify-center mb-5">
              <Music className="w-7 h-7" />
            </div>
            <h3 className="font-serif font-bold text-xl text-gray-900 mb-3">
              Професійний паркет
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Спеціально підготовлена дерев&apos;яна підлога з ідеальним ковзанням, що береже суглоби та дозволяє відчувати легкість обертів і поворотів.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center">
          <Link
            href="/rozklad"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-brand-purple hover:bg-brand-purpleDark text-white font-bold text-base shadow-xl hover:shadow-2xl transition-all active:scale-95 btn-flash"
          >
            Розклад групових уроків
          </Link>
        </div>
      </div>
    </section>
  );
}
