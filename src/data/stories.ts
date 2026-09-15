export interface StorySlide {
  id: number;
  title: string;
  description?: string;
  btnText: string;
  btnLink: string;
  isExternal?: boolean;
  popupTarget?: string;
  image: string;
  color?: string;
}

export const STORIES: StorySlide[] = [
  {
    id: 1,
    title: "Аргентинське Танго",
    description: "Запрошуємо тебе відчути магію цього пристрасного танцю.",
    btnText: "Детальніше",
    btnLink: "/lessons-tango-academy",
    image: "/assets/stories/slide-1.jpg",
  },
  {
    id: 2,
    title: "Приватні уроки Танго з Antonio",
    description: "Індивідуальний підхід, робота над технікою та відчуттям у парі.",
    btnText: "Детальніше",
    btnLink: "/tango-individual",
    image: "/assets/stories/slide-2.png",
  },
  {
    id: 3,
    title: "Індивідуальні уроки Танго з Іриною",
    description: "Прокачайте елегантність своїх ніг, під супроводом Ірини",
    btnText: "Записатись",
    btnLink: "#popup:tano-legs",
    popupTarget: "tano-legs",
    image: "/assets/stories/slide-3.png",
  },
  {
    id: 4,
    title: "Жіночі танго техніки",
    description: "Працюємо над пластичністю стоп, над балансом, кроком та вчимося прикрашатись елегантно",
    btnText: "Детальніше",
    btnLink: "https://youtube.com/playlist?list=PLUxp--VffYPR_UXyB2fxFwzzCI1mPGVNV&feature=shared",
    isExternal: true,
    image: "/assets/stories/slide-4.png",
  },
  {
    id: 5,
    title: "Життя Студії",
    description: "Kote - це неймовірна танго родина😻",
    btnText: "Детальніше",
    btnLink: "https://youtube.com/playlist?list=PLUxp--VffYPRF7FsO3LSQHWRqEz_6ge_n&si=65wkdU5CVgWaTmlS",
    isExternal: true,
    image: "/assets/stories/slide-5.jpeg",
  },
  {
    id: 6,
    title: "Як проходять групові уроки ?",
    description: "Пориньте в атмосферу уроків та дізнайтесь, як ми створюємо гармонію в парі.",
    btnText: "Переглянути відео з уроків",
    btnLink: "https://youtube.com/playlist?list=PLUxp--VffYPSgsJH1sE8cUwQSHVGqZsvn&si=JT4UTCa3dpO6J-oq",
    isExternal: true,
    image: "/assets/stories/slide-6.png",
  },
  {
    id: 7,
    title: "Розклад та Напрямки",
    description: "Ознайомтеся з розкладом студії танго, стретчингу, TRX та TaBaTa.",
    btnText: "Переглянути розклад",
    btnLink: "/rozklad",
    image: "/assets/stories/slide-1.jpg",
  },
  {
    id: 8,
    title: "Подарунковий Сертифікат",
    description: "Подаруйте незабутній тілесний досвід танго своїм близьким.",
    btnText: "Обрати сертифікат",
    btnLink: "/tango-gift",
    image: "/assets/gift/envelope-1.jpg",
  },
  {
    id: 9,
    title: "Kote Tango Academy",
    description: "Більше ніж школа танго - спільнота однодумців та якісне навчання з перших кроків.",
    btnText: "Про академію",
    btnLink: "/lessons-tango-academy",
    image: "/assets/stories/slide-2.png",
  },
  {
    id: 10,
    title: "Мілонга Коте",
    description: "Мілонга проходить раз на 2 місяці : звіт, фото, коли буде наступна...",
    btnText: "Дивитись",
    btnLink: "/milonga-kote-kyiv",
    image: "/assets/stories/slide-10.jpg",
  },
];
