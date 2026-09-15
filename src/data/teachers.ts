export interface Teacher {
  id: string;
  name: string;
  role: string;
  experience: string;
  description: string;
  image: string;
  instagram?: string;
  ctaText?: string;
  ctaLink?: string;
}

export const TEACHERS: Teacher[] = [
  {
    id: "anatoliy",
    name: "Анатолій Якимчук",
    role: "Засновник студії / Аргентинське Танго",
    experience: "Танцює з 2002 р., викладає з 2017 р.",
    description: `Анатолій (Antonio) - почав шлях у танці через спортивну гімнастику, де і почалося формування відчуття партнера.

У 2002 році почав займатися танцями. Оскільки досвід танцюриста був отриманий у зрілому віці, він чітко зрозумів механіку, фізику і хімію у парі.

Остаточно розуміння партнера відбулося при вивченні аргентинського танго, яким він почав займатися у 2008 році і викладає з 2017.

Сьогодні Анатолій викладає у різних містах України і щедро ділиться набутим танцювальним досвідом із усіма "учнями".`,
    image: "/assets/teachers/anatoliy.jpg",
    instagram: "https://www.instagram.com/antonio.ya.tango/tagged/",
    ctaText: "Детальніше про Аргентинське Танго",
    ctaLink: "/lessons-tango-academy",
  },
  {
    id: "iryna",
    name: "Ірина Семенчук",
    role: "Викладачка жіночих технік та танго",
    experience: "Викладає танго з 2022 р.",
    description: `Аргентинське танго підштовхнуло мене зробити новий крок у житті і одним із цих кроків було створення затишного місця для всіх хто любить танго. Тепер у танго на Оболоні є домівка під назвою "Kote.Studio".

Запрошую вас у студію, щоб знайти нові знайомства, емоції, друзів, нове хоббі.

Не відкладай на завтра, запишись на урок і спробуй вже сьогодні!`,
    image: "/assets/teachers/iryna.png",
    instagram: "https://www.instagram.com/kote.studio/",
    ctaText: "Запис до Ірини",
    ctaLink: "#popup:tano-legs",
  },
];
