export type Language = "EN" | "RO" | "RU";

export const languageOptions: Language[] = ["EN", "RO", "RU"];
export const defaultLanguage: Language = "EN";
export const languageStorageKey = "cebanbarber-language";

export const translations = {
  EN: {
    nav: {
      services: "Services",
      gallery: "Gallery",
      contact: "Contact",
      bookNow: "Book Now",
      language: "Language",
    },
    common: {
      bookNow: "Book Now",
      ourServices: "Our Services",
      openInMaps: "Open in Maps",
      getDirections: "Get Directions",
      callNow: "Call Now",
      sendEmail: "Send Email",
      fullContactInfo: "Full Contact Info",
      viewAllServices: "View All Services",
      seeFullMenu: "See Full Menu",
      readyToBook: "Ready to Book?",
      close: "Close",
      followUsOnInstagram: "Follow us on Instagram",
      startingAt: "Starting at",
      scroll: "Scroll",
      today: "Today",
      address: "Address",
      phone: "Phone",
      email: "Email",
      hoursOfOperation: "Hours of Operation",
      hours: "Hours",
      andMoreContact: "& more — see Contact page",
      allRightsReserved: "All rights reserved.",
      craftedWithCare: "Crafted with care in Chișinău, Moldova",
    },
    home: {
      eyebrow: "Est. 2024 — Chișinău, Moldova",
      heroLine1: "PRECISION",
      heroLine1Accent: "CUTS",
      heroLine2: "TIMELESS",
      heroLine2Accent: "STYLE",
      heroDescription:
        "Timeless craft. Modern style. Leave looking like a king.",
      perks: [
        {
          title: "Master Barbers",
          desc: "Every cut by certified, experienced pros.",
        },
        {
          title: "Premium Products",
          desc: "Top-shelf grooming products only.",
        },
        {
          title: "Walk-Ins Welcome",
          desc: "No appointment? No problem.",
        },
        {
          title: "Satisfaction Guaranteed",
          desc: "We make it right, every time.",
        },
      ],
      aboutEyebrow: "About Us",
      aboutTitle: "More Than a Haircut.",
      aboutTitleAccent: "An Experience",
      aboutBody1:
        "Founded by Nikita Ceban in 2024, CebanBarber was built on a simple belief: every man deserves to look and feel his best. From the moment you sit in our chair, you're in the hands of barbers dedicated to precision.",
      aboutBody2:
        "Modern barbering — precise fades, sharp lines, sculpted beards, and hot towel shaves. No rush. No shortcuts. Just sharp results every time.",
      happyClients: "Happy Clients",
      featuredEyebrow: "What We Offer",
      featuredTitle: "Featured Services",
      findUsEyebrow: "Find Us",
      findUsTitle: "Come Visit",
      ctaEyebrow: "Ready?",
      ctaTitle: "Your Best Look Starts Here",
      ctaBody: "Walk in or call ahead. We're ready when you are",
      mapsBadge: "CebanBarber",
      contactTodayValue: "Mon – Fri: 9 AM – 7 PM",
    },
    servicesPage: {
      eyebrow: "What We Offer",
      title: "Our Services",
      intro:
        "Every service is delivered with precision, premium products, and a commitment to making you look your absolute best.",
      infoBanner: [
        {
          title: "Walk-Ins Welcome",
          desc: "No appointment needed — but calling ahead guarantees your preferred time slot.",
        },
        {
          title: "Group Bookings",
          desc: "Coming in with the crew? We accommodate groups of up to 6. Call to arrange.",
        },
        {
          title: "Gift Cards",
          desc: "Give the gift of a great cut. Gift cards available in-store and by phone.",
        },
      ],
      ctaBody:
        "Visit us at our location or give us a call to set up your appointment.",
    },
    contactPage: {
      eyebrow: "Get In Touch",
      title: "Contact Us",
      intro:
        "Walk in or reach out ahead of time. We're here to make sure you leave looking sharp.",
      mapBadge: "CebanBarber",
      bookingBody:
        "Walk-ins are always welcome, but calling ahead ensures you get your preferred barber and time slot without waiting.",
    },
    galleryPage: {
      eyebrow: "Our Work",
      title: "The Gallery",
      intro:
        "Every photo tells a story. Browse some of our finest work — from tight skin fades to classic gentleman cuts.",
      bottomNote:
        "for daily style inspiration and behind-the-chair content.",
    },
    footer: {
      tagline:
        "Precision cuts. Timeless craft. Modern style. Leave looking like a king.",
      quickLinks: "Quick Links",
      home: "Home",
      services: "Services",
      gallery: "Gallery",
      contact: "Contact",
      findUs: "Find Us",
    },
    services: {
      haircut: {
        name: "Signature Haircut",
        description:
          "A precision cut tailored to your face shape and style. Includes consultation, shampoo, and finish.",
      },
      "beard-trim": {
        name: "Beard Trim & Shape",
        description:
          "Expert beard sculpting and shaping to define your look. Includes hot towel and beard oil treatment.",
      },
      "hot-towel-shave": {
        name: "Hot Towel Shave",
        description:
          "Classic straight-razor shave with hot towel prep, premium shaving cream, and moisturizing aftercare.",
      },
      "kids-cut": {
        name: "Kids Cut",
        description:
          "A gentle, fun haircut experience for boys under 12. Patient barbers who make kids feel at ease.",
      },
      "cut-beard": {
        name: "Haircut & Beard Combo",
        description:
          "The complete package — full haircut paired with beard trim and shape. Best value for the full look.",
      },
      fade: {
        name: "Skin Fade",
        description:
          "A tight, clean skin fade blended seamlessly into your desired length on top.",
      },
      color: {
        name: "Hair Color / Gray Blending",
        description:
          "Natural-looking gray coverage or full color treatment using premium products.",
      },
      scalp: {
        name: "Scalp Treatment",
        description:
          "Invigorating scalp massage with deep-conditioning treatment to promote healthy hair growth.",
      },
    },
    galleryAlts: {
      g1: "Classic gentleman's haircut",
      g2: "Skin fade with texture on top",
      g3: "Sharp beard trim and shape",
      g4: "Hot towel shave in progress",
      g5: "Taper fade haircut",
      g6: "Barbershop interior ambiance",
      g7: "Pompadour style haircut",
      g8: "Modern undercut style",
      g9: "Textured crop haircut",
    },
    weekdays: {
      Monday: "Monday",
      Tuesday: "Tuesday",
      Wednesday: "Wednesday",
      Thursday: "Thursday",
      Friday: "Friday",
      Saturday: "Saturday",
      Sunday: "Sunday",
    },
  },
  RO: {
    nav: {
      services: "Servicii",
      gallery: "Galerie",
      contact: "Contact",
      bookNow: "Programează-te",
      language: "Limbă",
    },
    common: {
      bookNow: "Programează-te",
      ourServices: "Serviciile noastre",
      openInMaps: "Deschide în Maps",
      getDirections: "Traseu",
      callNow: "Sună acum",
      sendEmail: "Trimite un email",
      fullContactInfo: "Toate datele de contact",
      viewAllServices: "Vezi toate serviciile",
      seeFullMenu: "Vezi meniul complet",
      readyToBook: "Vrei să te programezi?",
      close: "Închide",
      followUsOnInstagram: "Urmărește-ne pe Instagram",
      startingAt: "De la",
      scroll: "Derulează",
      today: "Astăzi",
      address: "Adresă",
      phone: "Telefon",
      email: "Email",
      hoursOfOperation: "Program",
      hours: "Program",
      andMoreContact: "& mai mult — pagina Contact",
      allRightsReserved: "Toate drepturile rezervate.",
      craftedWithCare: "Realizat cu grijă în Chișinău, Moldova",
    },
    home: {
      eyebrow: "Din 2024 — Chișinău, Moldova",
      heroLine1: "TUNSORI",
      heroLine1Accent: "PERFECTE",
      heroLine2: "STIL",
      heroLine2Accent: "MODERN",
      heroDescription:
        "Măiestrie reală. Stil modern. Ieși din salon ca un alt om.",
      perks: [
        {
          title: "Barberi de top",
          desc: "Fiecare tunsoare, în mâinile unor profesioniști cu experiență.",
        },
        {
          title: "Produse premium",
          desc: "Exclusiv produse de îngrijire de cea mai înaltă calitate.",
        },
        {
          title: "Fără programare obligatorie",
          desc: "Poți veni oricând. Te așteptăm.",
        },
        {
          title: "Rezultate garantate",
          desc: "Nu plecăm până nu ești mulțumit.",
        },
      ],
      aboutEyebrow: "Despre noi",
      aboutTitle: "Mai mult decât o tunsoare.",
      aboutTitleAccent: "O experiență",
      aboutBody1:
        "Fondat de Nikita Ceban în 2024, CebanBarber s-a născut dintr-o convingere simplă: fiecare bărbat merită să arate și să se simtă impecabil. Din clipa în care te așezi în fotoliu, ești în grija unor barberi pentru care precizia nu e opțională.",
      aboutBody2:
        "Barbering modern — fade-uri executate la milimetru, contururi clare, bărbi sculptate și bărbierit cu prosop fierbinte. Fără grabă. Fără compromisuri. Doar rezultate care vorbesc de la sine.",
      happyClients: "Clienți satisfăcuți",
      featuredEyebrow: "Ce oferim",
      featuredTitle: "Servicii de referință",
      findUsEyebrow: "Unde ne găsești",
      findUsTitle: "Vizitează-ne",
      ctaEyebrow: "Ești pregătit?",
      ctaTitle: "Cel mai bun look al tău începe aici",
      ctaBody: "Vino direct sau sună înainte. Suntem gata pentru tine",
      mapsBadge: "CebanBarber",
      contactTodayValue: "Lun – Dum: 9:00 – 19:00",
    },
    servicesPage: {
      eyebrow: "Ce oferim",
      title: "Serviciile noastre",
      intro:
        "Fiecare serviciu este realizat cu precizie, produse de excepție și atenție la fiecare detaliu — pentru că aspectul tău contează.",
      infoBanner: [
        {
          title: "Fără programare obligatorie",
          desc: "Poți veni oricând, dar o rezervare în avans îți garantează ora și barberul preferat.",
        },
        {
          title: "Rezervări de grup",
          desc: "Vii cu prietenii? Primim grupuri de până la 6 persoane. Sună-ne să organizăm.",
        },
        {
          title: "Carduri cadou",
          desc: "Oferă un cadou cu adevărat util. Cardurile cadou sunt disponibile în salon și telefonic.",
        },
      ],
      ctaBody:
        "Treci pe la noi sau sună-ne — alegem împreună momentul potrivit.",
    },
    contactPage: {
      eyebrow: "Ia legătura cu noi",
      title: "Contact",
      intro:
        "Vino direct sau anunță-ne în avans. Suntem aici să te asigurăm că pleci cu un look de excepție.",
      mapBadge: "CebanBarber",
      bookingBody:
        "Clienții fără programare sunt mereu bineveniți. Totuși, un apel în avans îți rezervă barberul și ora preferată, fără timp de așteptare.",
    },
    galleryPage: {
      eyebrow: "Lucrările noastre",
      title: "Galeria",
      intro:
        "Fiecare fotografie spune o poveste. Explorează câteva dintre cele mai reprezentative lucrări ale noastre — de la skin fade-uri impecabile până la tunsori clasice pentru domni.",
      bottomNote:
        "pentru inspirație zilnică și momente autentice din scaunul barberului.",
    },
    footer: {
      tagline:
        "Tunsori perfecte. Măiestrie reală. Stil modern. Ieși din salon ca un alt om.",
      quickLinks: "Linkuri rapide",
      home: "Acasă",
      services: "Servicii",
      gallery: "Galerie",
      contact: "Contact",
      findUs: "Unde ne găsești",
    },
    services: {
      haircut: {
        name: "Tunsoare Signature",
        description:
          "O tunsoare de precizie, gândită în funcție de forma feței și stilul tău. Include consultație, spălare și finisare.",
      },
      "beard-trim": {
        name: "Contur și definire barbă",
        description:
          "Sculptarea profesionistă a bărbii pentru un contur clar și un look bine definit. Include prosop fierbinte și tratament cu ulei de barbă.",
      },
      "hot-towel-shave": {
        name: "Bărbierit cu prosop fierbinte",
        description:
          "Bărbierit clasic cu brici drept, pregătire cu prosop fierbinte, cremă premium și îngrijire hidratantă post-bărbierit.",
      },
      "kids-cut": {
        name: "Tunsoare pentru copii",
        description:
          "O experiență relaxată și prietenoasă pentru băieți până în 12 ani, cu barberi răbdători care știu să creeze o atmosferă confortabilă.",
      },
      "cut-beard": {
        name: "Tunsoare & Barbă",
        description:
          "Pachetul complet — tunsoare și definire a bărbii într-o singură vizită. Cel mai bun raport calitate-preț pentru un look desăvârșit.",
      },
      fade: {
        name: "Skin Fade",
        description:
          "Un fade curat și precis, estompat fără cusur până la piele și integrat perfect cu lungimea dorită deasupra.",
      },
      color: {
        name: "Colorare / Estompare fire albe",
        description:
          "Acoperire naturală a firelor albe sau colorare completă, realizată cu produse premium pentru un rezultat autentic.",
      },
      scalp: {
        name: "Tratament pentru scalp",
        description:
          "Masaj revitalizant al scalpului cu tratament de nutriție profundă, pentru un păr sănătos și plin de vitalitate.",
      },
    },
    galleryAlts: {
      g1: "Tunsoare clasică pentru domni",
      g2: "Skin fade cu textură pe deasupra",
      g3: "Barbă conturată cu precizie",
      g4: "Bărbierit cu prosop fierbinte",
      g5: "Tunsoare taper fade",
      g6: "Atmosfera salonului CebanBarber",
      g7: "Tunsoare în stil pompadour",
      g8: "Undercut modern",
      g9: "Textured crop",
    },
    weekdays: {
      Monday: "Luni",
      Tuesday: "Marți",
      Wednesday: "Miercuri",
      Thursday: "Joi",
      Friday: "Vineri",
      Saturday: "Sâmbătă",
      Sunday: "Duminică",
    },
  },
  RU: {
    nav: {
      services: "Услуги",
      gallery: "Галерея",
      contact: "Контакты",
      bookNow: "Записаться",
      language: "Язык",
    },
    common: {
      bookNow: "Записаться",
      ourServices: "Наши услуги",
      openInMaps: "Открыть в картах",
      getDirections: "Маршрут",
      callNow: "Позвонить",
      sendEmail: "Написать на email",
      fullContactInfo: "Все контакты",
      viewAllServices: "Все услуги",
      seeFullMenu: "Полный прайс",
      readyToBook: "Хотите записаться?",
      close: "Закрыть",
      followUsOnInstagram: "Мы в Instagram",
      startingAt: "От",
      scroll: "Листайте",
      today: "Сегодня",
      address: "Адрес",
      phone: "Телефон",
      email: "Email",
      hoursOfOperation: "Режим работы",
      hours: "График",
      andMoreContact: "& подробнее — на странице Контакты",
      allRightsReserved: "Все права защищены.",
      craftedWithCare: "Сделано с душой в Кишинёве, Молдова",
    },
    home: {
      eyebrow: "С 2024 года — Кишинёв, Молдова",
      heroLine1: "ТОЧНЫЕ",
      heroLine1Accent: "СТРИЖКИ",
      heroLine2: "ЧИСТЫЙ",
      heroLine2Accent: "СТИЛЬ",
      heroDescription:
        "Настоящее мастерство. Современный стиль. Выходи другим человеком.",
      perks: [
        {
          title: "Барберы экстра-класса",
          desc: "Каждая стрижка — в руках опытного мастера.",
        },
        {
          title: "Премиальные продукты",
          desc: "Только лучшие средства по уходу. Без компромиссов.",
        },
        {
          title: "Без записи",
          desc: "Приходите в любое время — мы вас ждём.",
        },
        {
          title: "Результат гарантирован",
          desc: "Уходите довольным — или мы всё исправим.",
        },
      ],
      aboutEyebrow: "О нас",
      aboutTitle: "Больше, чем стрижка.",
      aboutTitleAccent: "Это опыт",
      aboutBody1:
        "CebanBarber основан Никитой Чебаном в 2024 году на простой, но важной идее: каждый мужчина достоин выглядеть безупречно. Как только вы садитесь в кресло, вы в руках мастеров, для которых точность — не опция, а стандарт.",
      aboutBody2:
        "Современный барберинг — выверенные фейды, чёткие контуры, оформленные бороды и бритьё с горячим полотенцем. Без суеты. Без халтуры. Только результат, который говорит сам за себя.",
      happyClients: "Довольных клиентов",
      featuredEyebrow: "Что мы предлагаем",
      featuredTitle: "Популярные услуги",
      findUsEyebrow: "Как нас найти",
      findUsTitle: "Приходите к нам",
      ctaEyebrow: "Готовы?",
      ctaTitle: "Лучший образ начинается здесь",
      ctaBody: "Заходите без записи или позвоните заранее. Мы вас ждём",
      mapsBadge: "CebanBarber",
      contactTodayValue: "Пн – Пт: 9:00 – 19:00",
    },
    servicesPage: {
      eyebrow: "Что мы предлагаем",
      title: "Наши услуги",
      intro:
        "Каждая услуга — это точность исполнения, премиальные материалы и внимание к деталям. Потому что ваш образ заслуживает лучшего.",
      infoBanner: [
        {
          title: "Без предварительной записи",
          desc: "Можно прийти в любое время, но запись заранее гарантирует нужного мастера и удобный час.",
        },
        {
          title: "Групповые визиты",
          desc: "Приходите компанией — принимаем группы до 6 человек. Позвоните, чтобы согласовать.",
        },
        {
          title: "Подарочные сертификаты",
          desc: "Подарите по-настоящему стоящий подарок. Сертификаты доступны в салоне и по телефону.",
        },
      ],
      ctaBody:
        "Заходите или звоните — вместе выберем удобное время.",
    },
    contactPage: {
      eyebrow: "Свяжитесь с нами",
      title: "Контакты",
      intro:
        "Заходите без звонка или свяжитесь заранее. Мы здесь, чтобы вы ушли в лучшем виде.",
      mapBadge: "CebanBarber",
      bookingBody:
        "Принимаем без записи — всегда. Но звонок заранее позволит выбрать нужного мастера и удобное время без ожидания.",
    },
    galleryPage: {
      eyebrow: "Наши работы",
      title: "Галерея",
      intro:
        "Каждое фото — это история. Посмотрите на наши лучшие работы: от плотных skin fade до классических мужских стрижек.",
      bottomNote:
        "для ежедневного вдохновения и живого контента из кресла барбера.",
    },
    footer: {
      tagline:
        "Стрижки высшего класса. Настоящее мастерство. Современный стиль. Выходи другим человеком.",
      quickLinks: "Навигация",
      home: "Главная",
      services: "Услуги",
      gallery: "Галерея",
      contact: "Контакты",
      findUs: "Как нас найти",
    },
    services: {
      haircut: {
        name: "Авторская стрижка",
        description:
          "Точная стрижка, выстроенная под форму вашего лица и стиль. Включает консультацию, мытьё головы и финальную укладку.",
      },
      "beard-trim": {
        name: "Коррекция и оформление бороды",
        description:
          "Профессиональная работа с бородой для чёткого, ухоженного образа. Включает горячее полотенце и масло для бороды.",
      },
      "hot-towel-shave": {
        name: "Бритьё с горячим полотенцем",
        description:
          "Классическое бритьё опасной бритвой: подготовка горячим полотенцем, премиальная пена и увлажняющий уход после.",
      },
      "kids-cut": {
        name: "Детская стрижка",
        description:
          "Спокойная и комфортная стрижка для мальчиков до 12 лет. Мастера, которые умеют работать с детьми.",
      },
      "cut-beard": {
        name: "Стрижка + борода",
        description:
          "Полный комплекс за одно посещение — стрижка и оформление бороды. Лучший выбор для завершённого образа.",
      },
      fade: {
        name: "Skin Fade",
        description:
          "Плотный, чистый skin fade с идеальным переходом и нужной длиной наверху.",
      },
      color: {
        name: "Окрашивание / Маскировка седины",
        description:
          "Естественное перекрытие седины или полное окрашивание с применением премиальных красителей.",
      },
      scalp: {
        name: "Уход за кожей головы",
        description:
          "Восстанавливающий массаж с питательным уходом в глубину — для здоровья кожи и силы волос.",
      },
    },
    galleryAlts: {
      g1: "Классическая мужская стрижка",
      g2: "Skin fade с текстурой наверху",
      g3: "Чёткое оформление бороды",
      g4: "Бритьё с горячим полотенцем",
      g5: "Стрижка taper fade",
      g6: "Атмосфера барбершопа CebanBarber",
      g7: "Стрижка в стиле pompadour",
      g8: "Современный undercut",
      g9: "Textured crop",
    },
    weekdays: {
      Monday: "Понедельник",
      Tuesday: "Вторник",
      Wednesday: "Среда",
      Thursday: "Четверг",
      Friday: "Пятница",
      Saturday: "Суббота",
      Sunday: "Воскресенье",
    },
  },
} as const;

export type TranslationCopy = (typeof translations)[Language];