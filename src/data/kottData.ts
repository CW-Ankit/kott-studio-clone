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
  headline?: string;
  printedMatter?: string;
  behanceUrl?: string;
  situation?: string[];
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
  platform?: string;
  status?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  tags?: string[];
  colSpan?: string;
  description?: string;
  deliverables?: string[];
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
  number?: string;
  category?: string;
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
    headline: "The agency for brands that refuse to whisper.",
    printedMatter: "brand identity · website design · front-end build (React) · motion design",
    behanceUrl: "https://www.behance.net/gallery/252194497/Hue-Cry-Visual-Identity-Website",
    situation: ["Hue & Cry is a marketing agency that refuses to whisper, so the identity and the site had to carry real volume without tipping into noise. We built a strict black-and-white system with a single magenta accent used surgically: one loud word per headline, one colour that never dilutes.","Nothing is sourced. Every visual is computed, generated SVG pattern art in place of stock photography, a scroll-scrubbed manifesto, stacking capability cards, and motion tuned so the loudness reads as control. Identity and front-end build shipped as one piece."],
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
    headline: "The slowest part of starting a design, down to a few taps.",
    printedMatter: "product design · front-end build (React) · curated type library · self-hosted font export",
    behanceUrl: "https://www.behance.net/gallery/251990809/Typeset-A-Font-Pairing-Playground",
    situation: ["Choosing two typefaces that work together is the slowest part of starting anything, and the “perfect” pairing is usually a licensed font you can’t actually ship. Typeset turns that ritual into a few taps: spin through curated heading-and-body combinations, tune them live, keep the ones that land.","We designed it and built it: React front end, self-hosted woff2, a CSS kit you export and drop straight into a project. Every face is free for commercial use, so anything you find here you can actually use. The studio doesn’t just draw the tools it wishes existed; it ships them."],
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
      "Direct code exporter generating production CSS @font-face snippets."
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
    headline: "A wellness platform that glows instead of shouts.",
    printedMatter: "brand identity · landing page design · UI/UX · art direction",
    behanceUrl: "https://www.behance.net/gallery/218503353/EVIA-Platform-Website-Identity",
    situation: ["EVIA is a wellness-technology platform, and wellness online usually arrives loud: gradients, promises, urgency. We went the other way: a quiet transitional serif, warm skin-lit light, and a single held sphere carrying the whole visual argument.","Identity and landing page were designed as one piece, so the first scroll reads less like a pitch and more like a held breath. In a category that rarely earns it, restraint is what reads as trust."],
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
    headline: "Energy, clarity, confidence. For a house that makes things.",
    printedMatter: "brand identity · modular system · website design · UI/UX",
    behanceUrl: "https://www.behance.net/gallery/224858375/AKA-Media-Website-Design",
    situation: ["AKA Media is a full-service creative production company, and the old brand didn’t move as fast as they did. We rebuilt the identity as a modular system of cards, colour and sharp messaging, something a fast-paced team can pick up and run without a designer in the room.","The website is no-code by design, so the people making the work can keep it alive. Modern, modular, unapologetically colourful, built for high-impact visuals and quick turnarounds."],
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
    headline: "Therapy in a cup, with the packaging to match.",
    printedMatter: "brand identity · packaging · verbal identity · social system",
    behanceUrl: "https://www.behance.net/gallery/217794899/Bean-There-Brand-Identity",
    situation: ["Bean There is a coffee brand with a personality problem, and it has a lot of it. The identity leans all the way in: fat rounded lettering, acid-bright colour, cups that talk back (“Sip Happens”, “Hot Bean”). A logo you’d actually put on a tote.","Voice, packaging and identity were designed as one loud thing, so the brand reads the same on a cup, a sticker or a phone. Effortlessly cool without trying too hard, which, naturally, took the most work."],
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
    headline: "Bespoke sailing, booked in a few calm taps.",
    printedMatter: "brand identity · website design · UI/UX · booking flow",
    behanceUrl: "https://www.behance.net/gallery/190394977/Phangan-Yachts-Website-Identity",
    situation: ["Phangan Yachts runs crewed charters, private tours and events off Koh Phangan, a bespoke experience that deserved a bespoke first impression. An editorial serif over aerial water, “every sail is a story”, and a booking flow that feels like planning a trip rather than filling in a form.","Identity and site were built together, so the calm carries from the wordmark through to the last confirmation screen. Luxury that whispers, on a coastline that doesn’t need the volume."],
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
  },
  {
    id: "07",
    slug: "hred-tech",
    headline: "A venture fund for HR & EdTech, wired to the mains.",
    printedMatter: "brand identity · website design · UI/UX · infographics",
    behanceUrl: "https://www.behance.net/gallery/171512635/HrEd-Tech-Website-Identity",
    situation: ["HR&ED-tech invests in HR and EdTech startups at the earliest stages, so the brand had to read as credible and quick at once. We built it around a kinetic wordmark and a single charged green, the energy of a bet placed early, on a near-black ground that keeps it serious.","The website leads with the offer, “we invest in IT projects at early stages in emerging markets”, and lets infographics carry the rest. Confident and fast, unmistakably a technology investor rather than a consultancy."],
    title: "HR&ED-tech",
    type: "identity / website",
    year: "2023",
    cover: "/work/hred.webp",
    alt: "HR&ED-tech — cover",
    client: "HR&ED-tech",
    role: "Brand Identity, Website Design, UI/UX, Infographics",
    summary: "Identity and website for a venture fund backing HR & EdTech startups. Electric green, kinetic wordmark.",
    details: [
      "HR&ED-tech invests in HR and EdTech startups at the earliest stages, so the brand had to read as credible and quick at once.",
      "We built it around a kinetic wordmark and a single charged green, the energy of a bet placed early, on a near-black ground that keeps it serious.",
      "The website leads with the offer: 'we invest in IT projects at early stages in emerging markets', and lets infographics carry the rest."
    ],
    images: [
      "/work/hred.webp",
      "/work/hred-2.webp",
      "/work/hred-3.webp"
    ],
    liveUrl: "https://www.behance.net/gallery/171512635/HrEd-Tech-Website-Identity"
  }
];

export const SHIPPED_APPS: AppProduct[] = [
  {
    name: "Optimized",
    screen: "/work/apps/optimized-1.webp",
    icon: "/work/apps/optimized-icon.png",
    screens: ["/work/apps/optimized-1.webp", "/work/apps/optimized-2.webp", "/work/apps/optimized-3.webp"],
    link: "mailto:hello@kott.studio?subject=Optimized%20Beta",
    desc: "peptide protocols, tracked — doses, schedules and progress in one place.",
    platform: "ios",
    status: "soon in the App Store"
  },
  {
    name: "Pomlo",
    screen: "/work/apps/pomlo-1.webp",
    icon: "/work/apps/pomlo-icon.png",
    screens: ["/work/apps/pomlo-1.webp", "/work/apps/pomlo-2.webp", "/work/apps/pomlo-3.webp"],
    link: "https://apps.apple.com/app/id6761341619",
    desc: "A mindful productivity timer engineered for deep work sessions with ambient audio.",
    platform: "ios",
    status: "App Store ↗"
  },
  {
    name: "NFCore",
    screen: "/work/apps/nfcore-1.webp",
    icon: "/work/apps/nfcore-icon.png",
    screens: ["/work/apps/nfcore-1.webp", "/work/apps/nfcore-2.webp", "/work/apps/nfcore-3.webp"],
    link: "https://apps.apple.com/app/id6760419675",
    desc: "Neurofeedback companion app tracking cognitive focus and daily recovery metrics.",
    platform: "ios",
    status: "App Store ↗"
  },
  {
    name: "QRDock",
    screen: "/work/apps/qrdock-1.webp",
    icon: "/work/apps/qrdock-icon.png",
    screens: ["/work/apps/qrdock-1.webp", "/work/apps/qrdock-2.webp", "/work/apps/qrdock-3.webp"],
    link: "https://apps.apple.com/app/id6761479665",
    desc: "Instant QR scanner and bookmark drawer for physical-to-digital work sessions.",
    platform: "ios",
    status: "App Store ↗"
  },
  {
    name: "Carets",
    screen: "/work/apps/carets-1.webp",
    icon: "/work/apps/carets-icon.png",
    screens: ["/work/apps/carets-1.webp", "/work/apps/carets-2.webp", "/work/apps/carets-3.webp"],
    link: "https://apps.apple.com/app/id6775658561",
    desc: "Minimalist text editor with custom typography, markdown support, and offline sync.",
    platform: "ios",
    status: "App Store ↗"
  },
  {
    name: "Margina",
    screen: "/work/apps/margina-1.webp",
    icon: "/work/apps/margina-icon.png",
    screens: ["/work/apps/margina-1.webp", "/work/apps/margina-2.webp", "/work/apps/margina-3.webp"],
    link: "https://apps.apple.com/app/id6773490263",
    desc: "Margin notes, quote archiving, and personal reading companion.",
    platform: "ios",
    status: "App Store ↗"
  },
  {
    name: "Privara",
    screen: "/work/apps/privara-1.webp",
    icon: "/work/apps/privara-icon.png",
    screens: ["/work/apps/privara-1.webp", "/work/apps/privara-2.webp", "/work/apps/privara-3.webp"],
    link: "https://apps.apple.com/app/id6760231829",
    desc: "Private on-device vault for sensitive notes, credentials, and encrypted records.",
    platform: "ios",
    status: "App Store ↗"
  },
  {
    name: "Foldless",
    screen: "/work/apps/foldless-1.webp",
    icon: "/work/apps/foldless-icon.png",
    screens: ["/work/apps/foldless-1.webp", "/work/apps/foldless-2.webp", "/work/apps/foldless-3.webp"],
    link: "https://apps.apple.com/app/id6775636169",
    desc: "full-page capture: any web page as one clean, full-length screenshot or PDF.",
    platform: "ios",
    status: "App Store ↗"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "01",
    title: "Websites",
    subtitle: "designed, built, launched",
    colSpan: "lg:col-span-4",
    description: "Marketing sites, portfolios and platforms. Sub-second performance, subtle motion, responsive to any screen.",
    deliverables: ["Creative Direction & Wireframes", "Full-Stack Web Development (Next.js/React)", "Interactive 3D / WebGL Integration", "CMS Setup & SEO Optimization"]
  },
  {
    id: "02",
    title: "Apps",
    subtitle: "same care, app-store sized",
    colSpan: "lg:col-span-4",
    description: "Native iOS and Android utilities engineered with SwiftUI and Kotlin. Focused, private, lightning fast.",
    deliverables: ["Native iOS (Swift / SwiftUI)", "Cross-Platform (React Native / Flutter)", "Design System & Human Interface Guidelines", "App Store Submission & Lifecycle Management"]
  },
  {
    id: "03",
    title: "Tools & Automations",
    subtitle: "software that earns its keep",
    colSpan: "lg:col-span-4",
    description: "Custom internal tooling, bespoke admin dashboards, and AI agents automating complex repetitive workflows.",
    deliverables: ["Custom Web Dashboards & Portals", "AI Agents & LLM Workflow Automation", "API Integrations (Stripe, Supabase, CRM)", "Real-Time Telemetry & Monitoring"]
  },
  {
    id: "04",
    title: "Brand Identity",
    subtitle: "type, color, language, system",
    colSpan: "lg:col-span-6",
    description: "A coherent visual vocabulary from wordmark and typography to digital design systems and printed matter.",
    deliverables: ["Wordmark & Logo Systems", "Typeface Pairing & Color Matrix", "Digital Design Systems (Figma)", "Pitch Decks & Physical Collateral"]
  },
  {
    id: "05",
    title: "Rescue & Support",
    subtitle: "for the messy middle",
    colSpan: "lg:col-span-6",
    description: "Taking over stalled roadmaps, untangling design debt, tuning web vitals, and ongoing engineering retainers.",
    deliverables: ["Performance & Core Web Vitals Audits", "Codebase Refactoring & Migration", "Dedicated Monthly Studio Retainers", "Feature Sprints & Emergency Fixes"]
  }
];

export const LAB_SPECIMENS: LabItem[] = [
  {
    id: "001",
    title: "Impossible Triangle",
    desc: "21 isometric polygons, zero runtime overhead. A mathematical paradox rendered in native canvas.",
    link: "#monolith",
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

export const LAB_ITEMS: LabItem[] = LAB_SPECIMENS;

export const FAQ_ITEMS: FaqItem[] = [
  {
    "question": "What does Kott Studio do?",
    "answer": "Kott Studio designs and builds websites, apps, tools, automations and brands. It is one small, senior team that takes a project from the first sketch through to a live domain or an app-store release. The drawing and the shipping are one engagement.",
    "category": "01 — what we do"
  },
  {
    "question": "Do you design only, or do you build it too?",
    "answer": "Both, and by the same team. Every line on the menu covers the design and the code, so there is nothing to hand over in the middle: the people who drew the thing are the people who build it.",
    "category": "01 — what we do"
  },
  {
    "question": "Do you work with small businesses and early-stage startups?",
    "answer": "Yes — that is most of the work. The smallest real engagements are an audit or discovery sprint, a single landing page, and monthly care for a site that is already live, so a first project does not have to be a large commitment.",
    "category": "01 — what we do"
  },
  {
    "question": "Where is Kott Studio based, and who do you work with?",
    "answer": "The studio has been running since 2020 and works with clients across the United States and Europe, remotely. The team is spread over Los Angeles, New York, Istanbul, Zurich, Kyiv and San Juan, so there is usually an overlapping working day either side of the Atlantic.",
    "category": "01 — what we do"
  },
  {
    "question": "What industries have you worked in?",
    "answer": "Wellness technology, media and production, hospitality, healthcare, professional services, and HR and education technology. The shipped work includes brand systems, marketing sites, a font-pairing product, a yacht-charter booking site, and eight apps live in the App Store.",
    "category": "01 — what we do"
  },
  {
    "question": "How much does a website cost?",
    "answer": "It depends on how much site there is. A single conversion page, a full marketing site and an award-tier motion build are three different jobs, and the number follows the scope rather than a list. The price is set after one call and put in writing before anything starts.",
    "category": "02 — what it costs"
  },
  {
    "question": "How much does a brand identity cost?",
    "answer": "By how far the system has to reach. A wordmark and a core kit is one job; strategy and positioning, packaging, and the deck and social systems that have to survive contact with real life is a larger one. One call is enough to tell which you need, and the price is fixed in writing after it.",
    "category": "02 — what it costs"
  },
  {
    "question": "How much does it cost to build an app?",
    "answer": "By the size of the build, and by what has to be in the first release. Cross-platform work in React Native or Flutter is quoted the same way as native, and the quote covers getting it into the store rather than handing over a document. Apps are the largest thing on the menu.",
    "category": "02 — what it costs"
  },
  {
    "question": "What does a web app, dashboard or internal tool cost?",
    "answer": "Tools are priced on surface area: how many screens, how much backend, and whether there is a design system to build or one to work inside. Automations sit at the cheaper end of the same work, because a workflow or an LLM feature inside a product you already have is a smaller thing than a platform.",
    "category": "02 — what it costs"
  },
  {
    "question": "What is the cheapest way to start working with you?",
    "answer": "An audit or discovery sprint, or a single landing page. Both are real engagements with a written scope, and both are a reasonable way to find out how the studio works before committing to a larger build.",
    "category": "02 — what it costs"
  },
  {
    "question": "Is the price fixed?",
    "answer": "Yes, once it is set. The quote comes after one call, goes in writing before any work begins, and does not move unless the scope does. There is no hourly meter running underneath it. The studio does not publish a price list, so there is no figure sitting on the site to be held to before anyone has described the job.",
    "category": "02 — what it costs"
  },
  {
    "question": "Do you offer ongoing monthly support?",
    "answer": "Yes, in three tiers: keeping a site looked after, the same plus a page or a campaign each month, and care for a live app or platform. Embedded support is available by the week when a team needs someone inside it.",
    "category": "02 — what it costs"
  },
  {
    "question": "How does a project actually run?",
    "answer": "Four steps: discover, plan, ship, handoff. The studio reads the code, the roadmap and the room before promising anything, writes a short backlog with honest dates, releases incrementally from week one, and leaves documentation and clean repositories behind.",
    "category": "03 — how it runs"
  },
  {
    "question": "How long does a project take?",
    "answer": "Dates are set in the plan, after discovery, because the honest answer depends on scope. What is fixed is that releases start in week one and keep coming in reviewable slices, so you can see where a project stands the whole way through instead of waiting for one delivery at the end.",
    "category": "03 — how it runs"
  },
  {
    "question": "What do you need from me to get started?",
    "answer": "A few honest lines about where you are headed, sent to hello@kott.studio or through the form at kott.studio/contact. The studio replies with what the project needs, usually within two days, and the call after that is where scope and the fixed price get settled.",
    "category": "03 — how it runs"
  },
  {
    "question": "Can you take over a project someone else started?",
    "answer": "Yes — that is what the rescue and support line is for. It covers stalled roadmaps, code and design review, and picking work up in the messy middle, which is a different job from starting clean and is scoped as one.",
    "category": "03 — how it runs"
  },
  {
    "question": "What do you build with?",
    "answer": "Websites and web apps in Next.js and React, mobile in Swift and Kotlin natively or React Native and Flutter cross-platform, and backends on Supabase and custom APIs. The stack is chosen per project rather than by habit, and everything ships to a real domain or a real store listing.",
    "category": "04 — working together"
  },
  {
    "question": "Who owns the work when the project is finished?",
    "answer": "Ownership of the work product is set out in the written agreement or proposal for each engagement, alongside scope, deliverables, timelines and fees. It is settled in writing before the work starts, when it is still easy to settle.",
    "category": "04 — working together"
  },
  {
    "question": "What happens after launch?",
    "answer": "The studio does not disappear at launch. Ongoing care runs from a site looked after month to month through to a live app or platform, and covers maintenance, art direction and the small, constant work that keeps a launched thing from drifting.",
    "category": "04 — working together"
  },
  {
    "question": "Do you build AI features and automations?",
    "answer": "Yes — AI agents and assistants, LLM features inside an existing product, workflow automation, and the integrations between the CRM, billing and auth systems a company already pays for.",
    "category": "04 — working together"
  },
  {
    "question": "Is the studio big enough to handle a large build?",
    "answer": "The team is small and senior with no agency layers, so the people briefed are the people working. Engineering capacity is extended through the studio&#x27;s delivery partner EchoPersona when a build needs more hands than the studio has, and you are told so at the start.",
    "category": "04 — working together"
  }
];

export const JOURNAL_POSTS: JournalPost[] = [
  {
    "slug": "ai-branding-tools-need-a-studio",
    "number": "16",
    "category": "Brand",
    "date": "Sep 2026",
    "title": "AI branding tools still need a studio behind them",
    "readingTime": "4 min read",
    "excerpt": "AI branding tools are fast and cheap, but they cannot tell you when the fast, cheap answer is the wrong one for your brand.",
    "content": [
      "AI branding tools are fast and cheap, but they cannot tell you when the fast, cheap answer is the wrong one for your brand.",
      "In modern product development, the gap between strategic intent and tactical execution is where most value is lost. At Kott Studio, we examine this problem through the lens of engineering-led design.",
      "When teams operate in silos—separating visual designers from frontend engineers—subtle interface nuances and performance details get dropped in translation. By uniting the drawing and the building under one roof, we preserve intentionality from day one.",
      "Whether approaching brand identity systems or high-performance digital platforms, the goal is always clarity, durability, and frictionless user delight."
    ]
  },
  {
    "slug": "ai-website-builder-limits",
    "number": "08",
    "category": "Studio",
    "date": "Sep 2026",
    "title": "What an AI website builder cannot do, and when you still need a studio",
    "readingTime": "5 min read",
    "excerpt": "What an AI website builder cannot do, and when a growing company still needs the judgment and craft of a real studio.",
    "content": [
      "What an AI website builder cannot do, and when a growing company still needs the judgment and craft of a real studio.",
      "In modern product development, the gap between strategic intent and tactical execution is where most value is lost. At Kott Studio, we examine this problem through the lens of engineering-led design.",
      "When teams operate in silos—separating visual designers from frontend engineers—subtle interface nuances and performance details get dropped in translation. By uniting the drawing and the building under one roof, we preserve intentionality from day one.",
      "Whether approaching brand identity systems or high-performance digital platforms, the goal is always clarity, durability, and frictionless user delight."
    ]
  },
  {
    "slug": "how-to-brief-a-marketing-agency",
    "number": "31",
    "category": "Marketing",
    "date": "Sep 2026",
    "title": "How to brief a marketing agency so the work doesn't miss",
    "readingTime": "6 min read",
    "excerpt": "A clear, tactical guide on briefing creative partners without wasting weeks on revision loops and vague scope.",
    "content": [
      "A clear, tactical guide on briefing creative partners without wasting weeks on revision loops and vague scope.",
      "In modern product development, the gap between strategic intent and tactical execution is where most value is lost. At Kott Studio, we examine this problem through the lens of engineering-led design.",
      "When teams operate in silos—separating visual designers from frontend engineers—subtle interface nuances and performance details get dropped in translation. By uniting the drawing and the building under one roof, we preserve intentionality from day one.",
      "Whether approaching brand identity systems or high-performance digital platforms, the goal is always clarity, durability, and frictionless user delight."
    ]
  },
  {
    "slug": "brand-style-guide-cost",
    "number": "03",
    "category": "Brand",
    "date": "Sep 2026",
    "title": "What a brand style guide costs, and what changes the price",
    "readingTime": "4 min read",
    "excerpt": "Breaking down the exact factors that drive identity costs: wordmarks, type pairings, production guidelines, and edge cases.",
    "content": [
      "Breaking down the exact factors that drive identity costs: wordmarks, type pairings, production guidelines, and edge cases.",
      "In modern product development, the gap between strategic intent and tactical execution is where most value is lost. At Kott Studio, we examine this problem through the lens of engineering-led design.",
      "When teams operate in silos—separating visual designers from frontend engineers—subtle interface nuances and performance details get dropped in translation. By uniting the drawing and the building under one roof, we preserve intentionality from day one.",
      "Whether approaching brand identity systems or high-performance digital platforms, the goal is always clarity, durability, and frictionless user delight."
    ]
  },
  {
    "slug": "social-media-content-design-cost",
    "number": "34",
    "category": "Marketing",
    "date": "Sep 2026",
    "title": "What social content design costs, and what you're actually paying for",
    "readingTime": "5 min read",
    "excerpt": "What high-converting social creative actually costs, and why design systems beat one-off graphics every time.",
    "content": [
      "What high-converting social creative actually costs, and why design systems beat one-off graphics every time.",
      "In modern product development, the gap between strategic intent and tactical execution is where most value is lost. At Kott Studio, we examine this problem through the lens of engineering-led design.",
      "When teams operate in silos—separating visual designers from frontend engineers—subtle interface nuances and performance details get dropped in translation. By uniting the drawing and the building under one roof, we preserve intentionality from day one.",
      "Whether approaching brand identity systems or high-performance digital platforms, the goal is always clarity, durability, and frictionless user delight."
    ]
  },
  {
    "slug": "how-much-to-spend-on-marketing",
    "number": "07",
    "category": "Marketing",
    "date": "Sep 2026",
    "title": "How much of your revenue should actually go to marketing",
    "readingTime": "6 min read",
    "excerpt": "A realistic perspective on marketing budget allocation across venture-backed startups and bootstrapped brands.",
    "content": [
      "A realistic perspective on marketing budget allocation across venture-backed startups and bootstrapped brands.",
      "In modern product development, the gap between strategic intent and tactical execution is where most value is lost. At Kott Studio, we examine this problem through the lens of engineering-led design.",
      "When teams operate in silos—separating visual designers from frontend engineers—subtle interface nuances and performance details get dropped in translation. By uniting the drawing and the building under one roof, we preserve intentionality from day one.",
      "Whether approaching brand identity systems or high-performance digital platforms, the goal is always clarity, durability, and frictionless user delight."
    ]
  },
  {
    "slug": "pitch-deck-design-cost",
    "number": "37",
    "category": "Brand",
    "date": "Sep 2026",
    "title": "How much a pitch deck actually costs, and what you get for it",
    "readingTime": "4 min read",
    "excerpt": "The economics of venture pitch decks: why investors read structure before typography, and what a studio deck costs.",
    "content": [
      "The economics of venture pitch decks: why investors read structure before typography, and what a studio deck costs.",
      "In modern product development, the gap between strategic intent and tactical execution is where most value is lost. At Kott Studio, we examine this problem through the lens of engineering-led design.",
      "When teams operate in silos—separating visual designers from frontend engineers—subtle interface nuances and performance details get dropped in translation. By uniting the drawing and the building under one roof, we preserve intentionality from day one.",
      "Whether approaching brand identity systems or high-performance digital platforms, the goal is always clarity, durability, and frictionless user delight."
    ]
  },
  {
    "slug": "how-many-ad-creatives-to-test",
    "number": "40",
    "category": "Marketing",
    "date": "Sep 2026",
    "title": "How many ad creatives do you actually need before the numbers mean anything",
    "readingTime": "5 min read",
    "excerpt": "Why statistical significance requires structured creative iterations rather than throwing random designs at the wall.",
    "content": [
      "Why statistical significance requires structured creative iterations rather than throwing random designs at the wall.",
      "In modern product development, the gap between strategic intent and tactical execution is where most value is lost. At Kott Studio, we examine this problem through the lens of engineering-led design.",
      "When teams operate in silos—separating visual designers from frontend engineers—subtle interface nuances and performance details get dropped in translation. By uniting the drawing and the building under one roof, we preserve intentionality from day one.",
      "Whether approaching brand identity systems or high-performance digital platforms, the goal is always clarity, durability, and frictionless user delight."
    ]
  },
  {
    "slug": "cost-of-ad-creative",
    "number": "14",
    "category": "Marketing",
    "date": "Sep 2026",
    "title": "What ad creative really costs, per asset and per month",
    "readingTime": "5 min read",
    "excerpt": "A transparent breakdown of performance creative expenses per static plate, motion asset, and monthly retainer.",
    "content": [
      "A transparent breakdown of performance creative expenses per static plate, motion asset, and monthly retainer.",
      "In modern product development, the gap between strategic intent and tactical execution is where most value is lost. At Kott Studio, we examine this problem through the lens of engineering-led design.",
      "When teams operate in silos—separating visual designers from frontend engineers—subtle interface nuances and performance details get dropped in translation. By uniting the drawing and the building under one roof, we preserve intentionality from day one.",
      "Whether approaching brand identity systems or high-performance digital platforms, the goal is always clarity, durability, and frictionless user delight."
    ]
  },
  {
    "slug": "why-software-projects-go-over-budget",
    "number": "35",
    "category": "Websites",
    "date": "Sep 2026",
    "title": "Why do software projects go over budget?",
    "readingTime": "6 min read",
    "excerpt": "The architectural and process flaws that quietly inflate development costs, and how fixed-scope milestones prevent them.",
    "content": [
      "The architectural and process flaws that quietly inflate development costs, and how fixed-scope milestones prevent them.",
      "In modern product development, the gap between strategic intent and tactical execution is where most value is lost. At Kott Studio, we examine this problem through the lens of engineering-led design.",
      "When teams operate in silos—separating visual designers from frontend engineers—subtle interface nuances and performance details get dropped in translation. By uniting the drawing and the building under one roof, we preserve intentionality from day one.",
      "Whether approaching brand identity systems or high-performance digital platforms, the goal is always clarity, durability, and frictionless user delight."
    ]
  },
  {
    "slug": "fixed-price-vs-time-and-materials",
    "number": "02",
    "category": "Product",
    "date": "Sep 2026",
    "title": "Fixed price or time and materials, how to structure a build so it doesn't blow up",
    "readingTime": "7 min read",
    "excerpt": "Comparing contract models in modern software delivery: when fixed pricing protects you, and when time-and-materials makes sense.",
    "content": [
      "Comparing contract models in modern software delivery: when fixed pricing protects you, and when time-and-materials makes sense.",
      "In modern product development, the gap between strategic intent and tactical execution is where most value is lost. At Kott Studio, we examine this problem through the lens of engineering-led design.",
      "When teams operate in silos—separating visual designers from frontend engineers—subtle interface nuances and performance details get dropped in translation. By uniting the drawing and the building under one roof, we preserve intentionality from day one.",
      "Whether approaching brand identity systems or high-performance digital platforms, the goal is always clarity, durability, and frictionless user delight."
    ]
  },
  {
    "slug": "no-code-to-custom-development",
    "number": "01",
    "category": "Product",
    "date": "Aug 2026",
    "title": "When should you switch from no-code to custom development?",
    "readingTime": "5 min read",
    "excerpt": "The inflection points where Webflow, Bubble, and low-code tools stop scaling, and when custom Next.js engineering is required.",
    "content": [
      "The inflection points where Webflow, Bubble, and low-code tools stop scaling, and when custom Next.js engineering is required.",
      "In modern product development, the gap between strategic intent and tactical execution is where most value is lost. At Kott Studio, we examine this problem through the lens of engineering-led design.",
      "When teams operate in silos—separating visual designers from frontend engineers—subtle interface nuances and performance details get dropped in translation. By uniting the drawing and the building under one roof, we preserve intentionality from day one.",
      "Whether approaching brand identity systems or high-performance digital platforms, the goal is always clarity, durability, and frictionless user delight."
    ]
  }
];
