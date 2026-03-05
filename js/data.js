/* =============================================================
   data.js — All content and translations for David García's portfolio
   ============================================================= */
const DATA = {
  /* ── Translations ──────────────────────────────────────────── */
  translations: {
    en: {
      nav: {
        links: ["Projects", "Tech Stack", "About"],
        contact: "Contact",
      },
      hero: {
        badge: "Available for new projects",
        name: "David García",
        role: "Mobile Developer",
        sub: "Senior Mobile Engineer building scalable Android,\niOS, and cross-platform apps.",
        cta_primary: "View Projects",
        cta_secondary: "Contact",
      },
      projects: {
        tag: "FEATURED WORK",
        title: "Projects",
        sub: "Engineering work across Android, iOS, and cross-platform mobile.",
        filter_all: "All",
      },
      techstack: {
        tag: "TECH STACK",
        title: "Tools of the trade",
      },
      about: {
        tag: "ABOUT",
        title_line1: "18 years building",
        title_line2: "for mobile.",
        body: "Mobile Developer (Android, iOS, and Flutter) with 18 years of software engineering experience, including 8 years dedicated to building and scaling native and cross-platform mobile applications in fintech, social, delivery, and logistics sectors. Proven ability to lead technical teams, define scalable architectures (MVVM, MVI, BLoC, Clean Architecture), and deliver user-centric features with high code quality. Strong advocate for test automation (Flutter widget testing, Espresso, XCUITest).",
        stats: [
          { number: "18+", label: "Years experience" },
          { number: "8+", label: "Years mobile" },
          { number: "5+", label: "Major platforms" },
        ],
      },
      contact: {
        tag: "CONTACT",
        title1: "Let's build something",
        title2: "great together.",
        sub: "Open to senior mobile engineering roles and freelance projects.",
        email_btn: "Copy email",
        linkedin_btn: "Open LinkedIn",
        linkedin_url: "LinkedIn.com/in/davidgarciarivas",
      },
      footer: {
        copy: "© 2026 David García · Senior Mobile Developer",
      },
    },

    es: {
      nav: {
        links: ["Proyectos", "Tecnologías", "Acerca de"],
        contact: "Contacto",
      },
      hero: {
        badge: "Disponible para nuevos proyectos",
        name: "David García",
        role: "Desarrollador Mobile",
        sub: "Ingeniero Mobile Senior construyendo apps Android,\niOS y multiplataforma escalables.",
        cta_primary: "Ver proyectos",
        cta_secondary: "Contacto",
      },
      projects: {
        tag: "TRABAJO DESTACADO",
        title: "Proyectos",
        sub: "Ingeniería en Android, iOS y mobile multiplataforma.",
        filter_all: "Todos",
      },
      techstack: {
        tag: "TECNOLOGÍAS",
        title: "Tecnologías",
      },
      about: {
        tag: "ACERCA DE",
        title_line1: "18 años construyendo",
        title_line2: "para mobile.",
        body: "Desarrollador Mobile (Android, iOS y Flutter) con 18 años de experiencia en ingeniería de software, incluyendo 8 años dedicados a construir y escalar aplicaciones móviles nativas y multiplataforma en sectores fintech, social, delivery y logística. Capacidad probada para liderar equipos técnicos, definir arquitecturas escalables (MVVM, MVI, BLoC, Clean Architecture) y entregar funcionalidades centradas en el usuario con alta calidad de código. Defensor del testing automatizado (Flutter widget testing, Espresso, XCUITest).",
        stats: [
          { number: "18+", label: "Años de experiencia" },
          { number: "8+", label: "Años en mobile" },
          { number: "5+", label: "Plataformas" },
        ],
      },
      contact: {
        tag: "CONTACTO",
        title1: "Construyamos algo",
        title2: "grandioso juntos.",
        sub: "Disponible para roles senior de ingeniería mobile y proyectos freelance.",
        email_btn: "Copiar email",
        linkedin_btn: "Abrir LinkedIn",
        linkedin_url: "LinkedIn.com/in/davidgarciarivas",
      },
      footer: {
        copy: "© 202 David García · Desarrollador Mobile Senior",
      },
    },
  },

  /* ── Projects ──────────────────────────────────────────────── */
  projects: [
    {
      id: "ebay",
      layout: "wide",
      tags: ["android", "ecommerce"],
      category_en: "E-commerce",
      category_es: "E-commerce",
      platform: "Android",
      title: "eBay",
      desc_en:
        "Android development on one of the world's largest e-commerce platforms, focused on the seller listing experience.",
      desc_es:
        "Desarrollo Android en una de las plataformas de e-commerce más grandes del mundo, enfocado en la experiencia de publicación del vendedor.",
      highlights_en: [
        "Developed and iterated on the listing flow, improving the seller experience at massive scale",
        "Implemented UI changes and visual improvements aligned with design system standards",
        "Collaborated within a large-scale modular codebase enabling independent team delivery",
      ],
      highlights_es: [
        "Desarrolló e iteró sobre el flujo de publicación, mejorando la experiencia del vendedor a gran escala",
        "Implementó cambios de UI y mejoras visuales alineadas con los estándares del sistema de diseño",
        "Colaboró dentro de una base de código modular a gran escala para entrega independiente por equipos",
      ],
      chips: ["Kotlin", "Jetpack Compose", "MVVM", "Coroutines"],
      image:
        "https://images.unsplash.com/photo-1729860648269-0959ae8a7b0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    },
    {
      id: "pinterest",
      layout: "wide",
      tags: ["android", "social"],
      category_en: "Social",
      category_es: "Social",
      platform: "Android",
      title: "Pinterest",
      desc_en:
        "Onboarding flow improvements for one of the world's largest visual discovery platforms.",
      desc_es:
        "Mejoras al flujo de onboarding para una de las plataformas de descubrimiento visual más grandes del mundo.",
      highlights_en: [
        "Improved onboarding flow UX for millions of users, optimizing edge case handling",
        "Maintained integration test pipelines keeping failure rates below company thresholds",
        "Increased maintainability by removing obsolete components and improving project organization",
      ],
      highlights_es: [
        "Mejoró el UX del flujo de onboarding para millones de usuarios, optimizando manejo de casos borde",
        "Mantuvo pipelines de pruebas de integración con tasas de fallo por debajo de los umbrales de la empresa",
        "Incrementó la mantenibilidad eliminando componentes obsoletos y mejorando la organización del proyecto",
      ],
      chips: ["Kotlin", "Java", "Jetpack Compose", "Espresso", "JUnit"],
      image:
        "https://images.unsplash.com/photo-1636044594149-6e2f289c3868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    },
    {
      id: "pinger",
      layout: "wide",
      tags: ["android", "messaging"],
      category_en: "Messaging & VoIP",
      category_es: "Mensajería y VoIP",
      platform: "Android",
      title: "Pinger",
      desc_en:
        "Performance and reliability improvements for Pinger's messaging and VoIP apps used by millions.",
      desc_es:
        "Mejoras de rendimiento y fiabilidad para las apps de mensajería y VoIP de Pinger usadas por millones.",
      highlights_en: [
        "Modernized a legacy codebase migrating from Java to Kotlin with MVI architecture",
        "Enhanced app stability by writing automated unit and UI tests, analyzing crashes via Crashlytics",
        "Improved performance and reliability across core messaging and VoIP features",
      ],
      highlights_es: [
        "Modernizó una base de código legada migrando de Java a Kotlin con arquitectura MVI",
        "Mejoró la estabilidad escribiendo pruebas automatizadas unitarias y de UI, analizando crashes con Crashlytics",
        "Incrementó el rendimiento y fiabilidad de las funcionalidades principales de mensajería y VoIP",
      ],
      chips: [
        "Kotlin",
        "Java",
        "Jetpack Compose",
        "MVI",
        "Room",
        "Espresso",
        "Robolectric",
        "MockK",
        "Crashlytics",
      ],
      image:
        "https://plus.unsplash.com/premium_photo-1719839720591-d43eb07de1da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    },
    {
      id: "volaris",
      layout: "wide",
      tags: ["android", "travel"],
      category_en: "Travel",
      category_es: "Viajes",
      platform: "Android",
      title: "Volaris",
      desc_en:
        "Android development for a major Latin American airline, focused on the booking and payment experience.",
      desc_es:
        "Desarrollo Android para una importante aerolínea latinoamericana, enfocado en la experiencia de reserva y pago.",
      highlights_en: [
        "Worked on the end-to-end booking flow, enabling users to search, select, and confirm flights",
        "Integrated and maintained payment flow with support for multiple payment methods",
        "Ensured reliability and stability of critical transactional screens used by millions of travelers",
      ],
      highlights_es: [
        "Trabajó en el flujo de reserva completo, permitiendo buscar, seleccionar y confirmar vuelos",
        "Integró y mantuvo el flujo de pagos con soporte para múltiples métodos de pago",
        "Garantizó la fiabilidad y estabilidad de pantallas transaccionales críticas usadas por millones de viajeros",
      ],
      chips: ["Kotlin", "Jetpack Compose", "MVVM", "Firebase"],
      image:
        "https://plus.unsplash.com/premium_photo-1681433422373-41832fc6a4e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    },
    {
      id: "hugo",
      layout: "card",
      tags: ["android", "delivery"],
      category_en: "Delivery",
      category_es: "Delivery",
      platform: "Android",
      title: "Hugo",
      desc_en:
        "Delivery and errand app for El Salvador — secure payments, order flows, and map integration.",
      desc_es:
        "App de delivery y mandados para El Salvador — pagos seguros, flujos de pedidos e integración de mapas.",
      highlights_en: [
        "Integrated VGS Collect SDK for secure credit card data handling in the customer app",
        "Migrated key order flow screens from MVP to MVVM architecture",
        "Migrated map solution from Mapbox to Google Maps, enhancing user experience",
      ],
      highlights_es: [
        "Integró el SDK VGS Collect para manejo seguro de datos de tarjetas de crédito",
        "Migró pantallas clave del flujo de pedidos de MVP a arquitectura MVVM",
        "Migró la solución de mapas de Mapbox a Google Maps, mejorando la experiencia del usuario",
      ],
      chips: ["Kotlin", "MVVM", "Google Maps", "VGS Collect SDK"],
      image:
        "https://images.unsplash.com/photo-1601972602288-3be527b4f18a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    },
    {
      id: "saludalma",
      layout: "card",
      tags: ["android", "health"],
      category_en: "Health",
      category_es: "Salud",
      platform: "Android",
      title: "SaludAlma",
      desc_en:
        "Foundational Android infrastructure for a health-focused MVP, built from the ground up with on-device AI.",
      desc_es:
        "Infraestructura Android fundacional para un MVP de salud, construida desde cero con IA en el dispositivo.",
      highlights_en: [
        "Defined and implemented scalable, production-ready Android architecture from scratch",
        "Led integration of OCR and text summarization using ONNX models for on-device intelligence",
        "Enforced architectural guidelines ensuring clean separation of concerns, testability, and maintainability",
      ],
      highlights_es: [
        "Definió e implementó arquitectura Android escalable y lista para producción desde cero",
        "Lideró la integración de OCR y resumen de texto usando modelos ONNX para inteligencia en el dispositivo",
        "Estableció guías de arquitectura asegurando separación de responsabilidades, testabilidad y mantenibilidad",
      ],
      chips: [
        "Kotlin",
        "Jetpack Compose",
        "ONNX Runtime",
        "Firebase MLKit",
        "Espresso",
        "JUnit",
      ],
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    },
    {
      id: "membership",
      layout: "card",
      tags: ["flutter"],
      category_en: "Flutter",
      category_es: "Flutter",
      platform: "Private Repository",
      title: "Membership Platform",
      desc_en:
        "Cross-platform membership management with real-time sync and role-based access control.",
      desc_es:
        "Gestión de membresías multiplataforma con sincronización en tiempo real y control de acceso por roles.",
      highlights_en: [],
      highlights_es: [],
      chips: ["Flutter", "Dart", "BLoC"],
      image:
        "https://plus.unsplash.com/premium_photo-1728313181656-60d7bd07f5f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    },
    {
      id: "visa",
      layout: "card",
      tags: ["android", "ios", "fintech"],
      category_en: "Fintech",
      category_es: "Fintech",
      platform: "Private Repository",
      title: "VISA SDK Integration",
      desc_en:
        "Secure VISA SDK integration for Android and iOS within the Veritran platform.",
      desc_es:
        "Integración segura del SDK de VISA para Android e iOS en la plataforma Veritran.",
      highlights_en: [],
      highlights_es: [],
      chips: ["Android", "iOS", "Clean Arch"],
      image:
        "https://images.unsplash.com/photo-1661347558488-647d78d97411?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    },
    {
      id: "destacame",
      layout: "card",
      tags: ["android", "fintech"],
      category_en: "Fintech",
      category_es: "Fintech",
      platform: "Private Repository",
      title: "Destacame SPA",
      desc_en:
        "Fintech app for credit scoring and financial health. Android Lead, LatAm.",
      desc_es:
        "App fintech para scoring crediticio y salud financiera. Android Lead, LatAm.",
      highlights_en: [],
      highlights_es: [],
      chips: ["Kotlin", "MVVM", "Firebase"],
      image:
        "https://images.unsplash.com/photo-1617203443501-16e7439fb941?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    },
  ],

  /* ── Tech Stack ────────────────────────────────────────────── */
  techStack: [
    {
      label_en: "Languages",
      label_es: "Lenguajes",
      chips: [
        "Kotlin",
        "Java",
        "Swift",
        "Dart",
        "TypeScript",
        "JavaScript",
        "Python",
        "C#",
      ],
    },
    {
      label_en: "Mobile",
      label_es: "Mobile",
      chips: [
        "Jetpack Compose",
        "Compose Multiplatform",
        "Coroutines",
        "Flow",
        "SwiftUI",
        "Combine",
        "Core Data",
        "Flutter",
        "FlutterFlow",
        "React Native",
      ],
    },
    {
      label_en: "Architecture",
      label_es: "Arquitectura",
      chips: ["MVVM", "MVI", "MVP", "BLoC", "Clean Architecture", "SOLID"],
    },
    {
      label_en: "Testing",
      label_es: "Testing",
      chips: [
        "Espresso",
        "XCUITest",
        "Robolectric",
        "MockK",
        "JUnit",
        "Flutter Widget Testing",
      ],
    },
    {
      label_en: "Tools & Backend",
      label_es: "Herramientas y Backend",
      chips: [
        "Git",
        "Firebase",
        "Supabase",
        "Jenkins",
        "Figma",
        "Crashlytics",
        "ONNX Runtime",
        "Django",
        ".Net Core",
        "CocoaPods",
        "Swift Package Manager",
      ],
    },
    {
      label_en: "Web & Other",
      label_es: "Web y Otros",
      chips: [
        "React",
        "HTML5 & CSS3",
        "SQL",
        "RESTful APIs",
        "BigCommerce",
        "Crystal Reports",
        "SSIS",
      ],
    },
  ],

  /* ── Work Experience ───────────────────────────────────────── */
  experience: [
    {
      role_en: "Android Developer",
      role_es: "Desarrollador Android",
      company: "eBay",
      location_en: "United States, Remote",
      location_es: "Estados Unidos, Remoto",
      period: "2025 – 2026",
      stack: ["Kotlin", "Jetpack Compose", "MVVM", "Coroutines"],
    },
    {
      role_en: "Android Developer",
      role_es: "Desarrollador Android",
      company: "Volaris",
      location_en: "Mexico, Remote",
      location_es: "México, Remoto",
      period: "2025 – 2026",
      stack: ["Kotlin", "Jetpack Compose", "MVVM", "Firebase"],
    },
    {
      role_en: "Android Technical Leader",
      role_es: "Líder Técnico Android",
      company: "SaludAlma",
      location_en: "United States, Remote",
      location_es: "Estados Unidos, Remoto",
      period: "Jun 2025 – Present",
      stack: [
        "Kotlin",
        "Java",
        "Jetpack Compose",
        "Espresso",
        "JUnit",
        "Git",
        "ONNX Runtime",
        "Firebase MLKit",
      ],
    },
    {
      role_en: "Android Developer (Pinterest via BairesDev)",
      role_es: "Desarrollador Android (Pinterest vía BairesDev)",
      company: "BairesDev / Pinterest",
      location_en: "United States, Remote",
      location_es: "Estados Unidos, Remoto",
      period: "Aug 2024 – May 2025",
      stack: ["Kotlin", "Java", "Jetpack Compose", "Espresso", "JUnit", "Git"],
    },
    {
      role_en: "Android Developer (Pinger via Truelogic)",
      role_es: "Desarrollador Android (Pinger vía Truelogic)",
      company: "Truelogic / Pinger",
      location_en: "United States, Remote",
      location_es: "Estados Unidos, Remoto",
      period: "May 2022 – Aug 2024",
      stack: [
        "Kotlin",
        "Java",
        "Jetpack Compose",
        "Room",
        "MVI",
        "Espresso",
        "Robolectric",
        "MockK",
        "Crashlytics",
        "Git",
      ],
    },
    {
      role_en: "Android Developer",
      role_es: "Desarrollador Android",
      company: "Hugo",
      location_en: "San Salvador, El Salvador",
      location_es: "San Salvador, El Salvador",
      period: "Jun 2020 – May 2022",
      stack: ["Kotlin", "MVVM", "Google Maps", "VGS Collect SDK"],
    },
    {
      role_en: "Mobile Developer",
      role_es: "Desarrollador Mobile",
      company: "PGS 360",
      location_en: "United States, Remote",
      location_es: "Estados Unidos, Remoto",
      period: "Apr 2019 – Jun 2020",
      stack: [
        "Kotlin",
        "Java",
        "Retrofit",
        "Git",
        "PDFBox",
        "Zebra/Thermal Printer APIs",
        "REST APIs",
        "BigCommerce",
      ],
    },
    {
      role_en: "Evolution Developer",
      role_es: "Desarrollador Evolution",
      company: "ASEINFO",
      location_en: "San Salvador, El Salvador",
      location_es: "San Salvador, El Salvador",
      period: "Aug 2007 – Apr 2019",
      stack: [
        "Transact-SQL",
        "SQL",
        "C#",
        ".Net Core",
        "Crystal Reports",
        "SSIS",
        "Git",
      ],
    },
  ],

  /* ── Education ─────────────────────────────────────────────── */
  education: [
    {
      degree_en: "B.Sc. in Computer Science (Incomplete)",
      degree_es: "Ing. en Ciencias de la Computación (Incompleta)",
      institution: "Universidad Francisco Gavidia",
      location: "San Salvador, El Salvador",
      year: "2011",
    },
  ],

  /* ── Certifications ────────────────────────────────────────── */
  certifications: [
    {
      title: "Android Developer Certificate",
      issuer: "Keepcoding",
      year: "2018",
    },
  ],

  /* ── References ────────────────────────────────────────────── */
  references: [
    {
      name: "Chuck Stein",
      role_en: "Android Engineer II, Pinterest",
      role_es: "Android Engineer II, Pinterest",
      relationship_en: "Former Co-Worker",
      relationship_es: "Excompañero de trabajo",
      email: "cstein@pinterest.com",
      linkedin: "https://www.linkedin.com/in/chuck-stein-5a4219171/",
    },
    {
      name: "Angelo Nunes",
      role_en: "Sr. Director of Client Engineering, Pinger",
      role_es: "Director Sr. de Ingeniería de Clientes, Pinger",
      relationship_en: "Former Manager",
      relationship_es: "Exjefe",
      email: "anunes@pinger.com",
      linkedin: "https://www.linkedin.com/in/angelo-nunes/",
    },
  ],
};
