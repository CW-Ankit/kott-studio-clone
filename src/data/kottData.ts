export interface Project {
  id: string;
  slug: string;
  title: string;
  type: string;
  year: string;
  cover: string;
  alt: string;
  client: string;
  role: string;
  summary: string;
  details?: string[];
  images: string[];
  liveUrl?: string;
}

export interface AppProduct {
  name: string;
  screen: string;
  icon: string;
  screens: string[];
  link: string;
  desc: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  tags?: string[];
  colSpan?: string;
}

export interface LabItem {
  id: string;
  title: string;
  desc: string;
  link: string;
  previewType: "canvas" | "font" | "wobble" | "art";
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface JournalPost {
  slug: string;
  date: string;
  title: string;
  readingTime: string;
  excerpt: string;
  content: string[];
}

export const WORK_PROJECTS: Project[] = [
  {
    id: "01",
    slug: "hue-and-cry",
    title: "Hue & Cry",
    type: "identity / website",
    year: "2026",
    cover: "/work/hue-and-cry-cover.gif",
    alt: "Hue & Cry — cover",
    client: "Hue & Cry Studio",
    role: "Brand Identity, Creative Direction, High-Performance Web Platform",
    summary: "Complete visual identity and bespoke digital platform for a motion arts and animation studio.",
    details: [
      "Crafted an interactive typographic identity that responds to pointer kinetics.",
      "Designed and engineered a sub-second page transition architecture built on Next.js.",
      "Awarded Awwwards Honorable Mention for creative engineering and interface finesse."
    ],
    images: [
      "/work/hue-and-cry-cover.gif",
      "/work/hue-and-cry-2.gif",
      "/work/hue-and-cry-3.jpg",
      "/work/hue-and-cry-4.jpg"
    ],
    liveUrl: "https://www.awwwards.com/sites/hue-cry"
  },
  {
    id: "02",
    slug: "typeset",
    title: "Typeset",
    type: "product / creative dev",
    year: "2026",
    cover: "/work/typeset-cover.gif",
    alt: "Typeset — cover",
    client: "Internal Lab Platform",
    role: "Full-Stack Creative Engineering, Typography Pairing Engine",
    summary: "Curated pairings of free, self-hosted fonts — available as a drop-in starter kit with instantaneous previews.",
    details: [
      "High-speed variable font engine running client-side with zero external analytics.",
      "Live font pairing explorer allowing custom text input, kerning, and sizing.",
      "Direct code exporter generating production CSS `@font-face` snippets."
    ],
    images: [
      "/work/typeset-cover.gif",
      "/work/typeset-2.webp",
      "/work/typeset-3.webp"
    ],
    liveUrl: "https://www.kharnaa.com/playground/typeset"
  },
  {
    id: "03",
    slug: "evia-platform",
    title: "EVIA Platform",
    type: "identity / landing",
    year: "2025",
    cover: "/work/evia.jpg",
    alt: "EVIA Platform — cover",
    client: "EVIA Technologies",
    role: "Brand Identity, Product Landing Page, Design System",
    summary: "Enterprise identity and conversion-focused web architecture engineered for a next-generation tech ecosystem.",
    details: [
      "Minimalist, brutalist-inspired UI with bespoke grid layouts.",
      "Engineered for enterprise scale with responsive data visualizations.",
      "Integrated lead capture flows resulting in a 42% lift in qualified partner demos."
    ],
    images: [
      "/work/evia.jpg",
      "/work/evia-join.webp",
      "/work/evia-laptop.webp"
    ],
    liveUrl: "https://kott.studio/work/evia-platform"
  },
  {
    id: "04",
    slug: "aka-media",
    title: "AKA Media",
    type: "identity / website",
    year: "2025",
    cover: "/work/aka-media-cover.jpg",
    alt: "AKA Media — cover",
    client: "AKA Media Production",
    role: "Brand Design, Editorial Architecture, Full-Stack Web Development",
    summary: "Cinematic portfolio platform for an international film and documentary production collective.",
    details: [
      "Custom video streaming integration with adaptive bitrate playback.",
      "Dark room viewing mode providing theatrical presentation of documentary reels.",
      "Multilingual editorial architecture for global distribution and festivals."
    ],
    images: [
      "/work/aka-media-cover.jpg",
      "/work/aka-media-laptop.webp",
      "/work/aka-media-2.jpg"
    ],
    liveUrl: "https://kott.studio/work/aka-media"
  },
  {
    id: "05",
    slug: "bean-there",
    title: "Bean There",
    type: "brand identity / packaging",
    year: "2025",
    cover: "/work/bean-there.jpg",
    alt: "Bean There — cover",
    client: "Bean There Coffee Roasters",
    role: "Brand Identity, Custom Packaging Systems, Digital Storefront",
    summary: "Specialty coffee roastery branding, tactile packaging systems, and digital storefront.",
    details: [
      "Complete brand book including bespoke iconography and label printing specs.",
      "Custom foil-stamped bag packaging designed for single-origin roasting lines.",
      "High-converting headless Shopify e-commerce integration."
    ],
    images: [
      "/work/bean-there.jpg",
      "/work/bean-there-bag.webp",
      "/work/bean-there-cans.jpg",
      "/work/bean-there-2.jpg"
    ],
    liveUrl: "https://kott.studio/work/bean-there"
  },
  {
    id: "06",
    slug: "phangan-yachts",
    title: "Phangan Yachts",
    type: "identity / website",
    year: "2024",
    cover: "/gallery/phangan-night.jpg",
    alt: "Phangan Yachts — cover",
    client: "Phangan Yacht Charters",
    role: "Luxury Identity, Booking Portal, Mobile Optimization",
    summary: "Boutique yacht charter experiences in the Gulf of Thailand, engineered with fluid mobile interactions.",
    details: [
      "Interactive fleet viewer with 360-degree deck plans and itinerary builder.",
      "Real-time charter booking availability calendar and currency converter.",
      "Optimized for high-latency mobile connections with instantaneous static rendering."
    ],
    images: [
      "/gallery/phangan-night.jpg",
      "/work/phangan-devices.jpg"
    ],
    liveUrl: "https://kott.studio/work/phangan-yachts"
  }
];

export const SHIPPED_APPS: AppProduct[] = [
  {
    name: "Pomlo",
    screen: "/work/apps/pomlo-1.webp",
    icon: "/work/apps/pomlo-icon.png",
    screens: ["/work/apps/pomlo-1.webp", "/work/apps/pomlo-2.webp", "/work/apps/pomlo-3.webp"],
    link: "https://apps.apple.com/app/id6761341619",
    desc: "A mindful productivity timer engineered for deep work sessions with ambient audio."
  },
  {
    name: "NFCore",
    screen: "/work/apps/nfcore-1.webp",
    icon: "/work/apps/nfcore-icon.png",
    screens: ["/work/apps/nfcore-1.webp", "/work/apps/nfcore-2.webp", "/work/apps/nfcore-3.webp"],
    link: "https://apps.apple.com/app/id6760419675",
    desc: "Neurofeedback companion app tracking cognitive focus and daily recovery metrics."
  },
  {
    name: "QRDock",
    screen: "/work/apps/qrdock-1.webp",
    icon: "/work/apps/qrdock-icon.png",
    screens: ["/work/apps/qrdock-1.webp", "/work/apps/qrdock-2.webp", "/work/apps/qrdock-3.webp"],
    link: "https://apps.apple.com/app/id6761479665",
    desc: "Instant QR scanner and bookmark drawer for physical-to-digital work sessions."
  },
  {
    name: "Carets",
    screen: "/work/apps/carets-1.webp",
    icon: "/work/apps/carets-icon.png",
    screens: ["/work/apps/carets-1.webp", "/work/apps/carets-2.webp", "/work/apps/carets-3.webp"],
    link: "https://apps.apple.com/app/id6775658561",
    desc: "Minimalist text editor with custom typography, markdown support, and offline sync."
  },
  {
    name: "Margina",
    screen: "/work/apps/margina-1.webp",
    icon: "/work/apps/margina-icon.png",
    screens: ["/work/apps/margina-1.webp", "/work/apps/margina-2.webp", "/work/apps/margina-3.webp"],
    link: "https://apps.apple.com/app/id6773490263",
    desc: "Margin notes, quote archiving, and personal reading companion."
  },
  {
    name: "Privara",
    screen: "/work/apps/privara-1.webp",
    icon: "/work/apps/privara-icon.png",
    screens: ["/work/apps/privara-1.webp", "/work/apps/privara-2.webp", "/work/apps/privara-3.webp"],
    link: "https://apps.apple.com/app/id6760231829",
    desc: "Private on-device vault for sensitive notes, credentials, and encrypted records."
  },
  {
    name: "Foldless",
    screen: "/work/apps/foldless-1.webp",
    icon: "/work/apps/foldless-icon.png",
    screens: ["/work/apps/foldless-1.webp", "/work/apps/foldless-2.webp", "/work/apps/foldless-3.webp"],
    link: "https://apps.apple.com/app/id6775636169",
    desc: "Crisp document scanner and paperless organizer with auto-edge detection."
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "01",
    title: "Websites",
    subtitle: "designed, built, launched",
    colSpan: "lg:col-span-4"
  },
  {
    id: "02",
    title: "Apps",
    subtitle: "same care, app-store sized",
    colSpan: "lg:col-span-4"
  },
  {
    id: "03",
    title: "Tools & platforms",
    subtitle: "software with a job",
    tags: ["SaaS & dashboards", "internal tools", "APIs & integrations", "production hardening"],
    colSpan: "lg:col-span-8"
  },
  {
    id: "04",
    title: "Automations",
    subtitle: "the busywork, made to do itself",
    tags: ["AI agents & assistants", "workflow automation", "CRM / billing / auth glue", "internal bots"],
    colSpan: "lg:col-span-8"
  },
  {
    id: "05",
    title: "Brands",
    subtitle: "the part people remember",
    colSpan: "lg:col-span-4"
  },
  {
    id: "06",
    title: "Rescue & support",
    subtitle: "we do not disappear after launch",
    tags: ["project recovery", "code & design review", "embedded support", "ongoing art direction"],
    colSpan: "lg:col-span-12"
  }
];

export const LAB_SPECIMENS: LabItem[] = [
  {
    id: "001",
    title: "Letterform",
    desc: "drop in an image and watch it re-form out of characters. export it as text, png or svg.",
    link: "https://www.kharnaa.com/playground/letterform",
    previewType: "canvas"
  },
  {
    id: "002",
    title: "Typeset",
    desc: "curated pairings of free, self-hosted fonts — take any of them home as a drop-in starter kit.",
    link: "https://www.kharnaa.com/playground/typeset",
    previewType: "font"
  },
  {
    id: "003",
    title: "Resonance",
    desc: "type a word or drop a logo and living generative art becomes it. export a poster or an app icon.",
    link: "https://www.kharnaa.com/playground/resonance",
    previewType: "art"
  },
  {
    id: "004",
    title: "Wobble",
    desc: "type a word and set it wobbling. a procedural field bends every glyph's weight, size and tilt. export png, svg or webm.",
    link: "https://www.kharnaa.com/playground/wobble",
    previewType: "wobble"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: "Scope & Process",
    question: "What does 'We draw it, then we build it' actually mean?",
    answer: "It means there are no handoffs between disconnected design agencies and outsourced development teams. The very designers who create your typography, interaction feel, and visual identity are writing the React, Next.js, and Swift code that powers it. Ideas don't get diluted in translation."
  },
  {
    category: "Scope & Process",
    question: "Where are your clients based?",
    answer: "We work directly with founders, studios, and technology companies across the United States, United Kingdom, and continental Europe. Communication happens asynchronously over Slack/Discord and targeted syncs."
  },
  {
    category: "Tech Stack & Engineering",
    question: "What technology stack do you use for websites and web apps?",
    answer: "Our core web stack is Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and Node/Bun on the server. For backend systems, APIs, and databases, we work with Postgres, Prisma, Supabase, Cloudflare Workers, and serverless edge functions."
  },
  {
    category: "Tech Stack & Engineering",
    question: "What about native iOS and mobile development?",
    answer: "All our iOS applications (like Pomlo, NFCore, and Carets) are built natively using Swift and SwiftUI, ensuring smooth 120Hz animations, native system widgets, and tiny install footprints."
  },
  {
    category: "Pricing & Timelines",
    question: "How do your engagements and budgets work?",
    answer: "We take on both fixed-scope projects (typically between $3,000 to $35,000+ depending on complexity) and ongoing studio partner retainers. We provide upfront guarantees on delivery dates and scope."
  },
  {
    category: "Pricing & Timelines",
    question: "How quickly can a project launch?",
    answer: "Focused brand identities or bespoke landing pages typically launch in 2 to 4 weeks. Full-scale SaaS platforms or mobile applications take between 6 to 10 weeks from first sketch to App Store approval."
  },
  {
    category: "Support & Handoff",
    question: "Do you stay involved after the product launches?",
    answer: "Yes. Our 'Rescue & Support' tier is specifically built for this. We provide ongoing engineering retainers, performance tuning, new feature sprints, and design review as your company scales."
  }
];

export const JOURNAL_POSTS: JournalPost[] = [
  {
    slug: "impossible-geometry-in-svg",
    date: "February 2026",
    title: "Constructing the Impossible Triangle in Pure SVG",
    readingTime: "4 min read",
    excerpt: "How we mapped 21 isometric polygons to build Kott Studio's signature Penrose triangle mark.",
    content: [
      "The Penrose triangle is impossible in Euclidean 3-space, yet entirely coherent in 2D projection.",
      "By calculating isometric vertices along 30-degree isometric axes, we built a 21-polygon mesh where each cube shares coordinates with its neighbor.",
      "The result is a lightweight, zero-dependency SVG emblem that scales infinitely across any device resolution."
    ]
  },
  {
    slug: "design-without-departments",
    date: "January 2026",
    title: "Design Without Departments: Why Code Is the Real Medium",
    readingTime: "6 min read",
    excerpt: "Why the separation between Figma and the browser is the single biggest source of design decay.",
    content: [
      "When a designer hands off a static artboard to an engineering team, what gets built is rarely what was envisioned.",
      "Real software lives in the browser with viewport reflows, variable network latencies, and physical touch interaction.",
      "By designing in code from day one, we eliminate handoff friction and deliver software that feels intentional."
    ]
  },
  {
    slug: "shipping-seven-ios-apps",
    date: "November 2025",
    title: "Shipping 7 Focused iOS Apps to the App Store in 12 Months",
    readingTime: "5 min read",
    excerpt: "What we learned from building lightweight, single-purpose utilities for Apple's ecosystem.",
    content: [
      "Modern mobile software is bloated with telemetry and unnecessary subscriptions.",
      "We set out to build seven focused tools that perform exactly one job with extreme grace, zero cloud dependencies, and instant launch times.",
      "From Pomlo's focus timers to Carets' typography-first text editor, focused software always wins on delight."
    ]
  }
];
