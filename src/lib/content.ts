export const locales = ["ru", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ru";

export const CONTACT = {
  telegram: "https://t.me/cherepublica",
  telegramLabel: "@cherepublica",
  behance: "https://behance.net/cherepubica",
  behanceLabel: "behance.net/cherepubica",
  email: "hello@chlorine.studio",
};

export type ServiceItem = {
  code: string;
  title: string;
  desc: string;
  long: string;
  includes: string[];
};

export type ProcessStep = {
  n: string;
  title: string;
  desc: string;
};

export type WorkItem = {
  category: string;
  title: string;
  year: string;
};

export type Dict = {
  meta: { title: string; description: string };
  nav: { services: string; work: string; process: string; about: string; contacts: string };
  hero: {
    tagline: string;
    tagMark: string;
    tagTail: string;
    supporting: string;
    metaRight: string;
    cta: string;
    scroll: string;
  };
  services: { label: string; heading: string; items: ServiceItem[] };
  servicesPage: {
    eyebrow: string;
    heading: string;
    headingMark: string;
    intro: string;
    back: string;
    moreLabel: string;
  };
  process: { label: string; heading: string; steps: ProcessStep[] };
  processPage: {
    eyebrow: string;
    heading: string;
    headingMark: string;
    intro: string;
    back: string;
  };
  work: { label: string; heading: string; note: string; noteLink: string; items: WorkItem[]; soon: string; all: string; moreLabel: string };
  workPage: {
    eyebrow: string;
    heading: string;
    headingMark: string;
    intro: string;
    back: string;
  };
  about: {
    label: string;
    heading: string;
    bio: string[];
    principles: { title: string; desc: string }[];
  };
  cta: { line1: string; line2: string; button: string; emailLabel: string };
  footer: { role: string; nav: string; contact: string; work: string; location: string };
};

export const content: Record<Locale, Dict> = {
  ru: {
    meta: {
      title: "CHLORINE — Ирина Фёдорова, независимый бренд-стратег и арт-директор",
      description:
        "Превращаю идеи амбициозных брендов в отличительные кампании и визуальные миры.",
    },
    nav: {
      services: "Услуги",
      work: "Работы",
      process: "Процесс",
      about: "Обо мне",
      contacts: "Контакты",
    },
    hero: {
      tagline: "Направляю ваши смелые идеи в",
      tagMark: "узнаваемые бренды",
      tagTail: ".",
      supporting: "Каждый проект — повод попробовать язык, которого у бренда ещё не было. Разбираю бриф заново, а не по шаблону. Делаю что-то однажды впервые.",
      metaRight: "WORLDWIDE",
      cta: "Обсудить проект",
      scroll: "ВНИЗ",
    },
    services: {
      label: "УСЛУГИ",
      heading: "Чем помогаю",
      items: [
        {
          code: "Br",
          title: "Бренд-стратегия",
          desc: "Позиционирование, платформа бренда, tone of voice.",
          long: "Основа, на которой держится всё остальное: кому вы говорите, что говорите и почему именно так.",
          includes: [
            "Исследование бренда, аудитории и рынка",
            "Позиционирование и платформа бренда",
            "Tone of voice и вербальная айдентика",
            "Архитектура бренда, если нужно",
          ],
        },
        {
          code: "Id",
          title: "Визуальная айдентика",
          desc: "Знак, палитра, типографика, гайдлайны.",
          long: "Визуальный язык и правила, по которым команда клиента применяет его самостоятельно, без моего участия в каждом макете.",
          includes: [
            "Знак и его версии",
            "Палитра, типографика, сетки",
            "Ключевые визуалы и фотостиль",
            "Гайдлайны с примерами применения",
          ],
        },
        {
          code: "Ca",
          title: "Кампании и key visual",
          desc: "Концепция и ключевой визуал под запуск или сезон.",
          long: "Разовое, но точное визуальное решение под конкретный момент: запуск, сезон, коллаборацию.",
          includes: [
            "Концепция кампании",
            "Ключевой визуал в основных форматах",
            "Адаптации под соцсети, сайт, печать",
            "Арт-дирекция съёмки, если нужна",
          ],
        },
        {
          code: "Ad",
          title: "Арт-дирекция",
          desc: "Внешний арт-директор на месячной основе.",
          long: "Внешний арт-директор без ставки в штате: держу визуальную целостность бренда на дистанции.",
          includes: [
            "Контроль применения системы командой",
            "Правки на языке причин, а не вкуса",
            "Регулярный разбор визуальной динамики",
            "Работа со штатным дизайнером клиента",
          ],
        },
        {
          code: "Mo",
          title: "Моушн и видео",
          desc: "Ролики, анимационные системы, шаблоны для команды.",
          long: "Движение как часть той же визуальной системы, а не отдельный подряд на стороне.",
          includes: [
            "Ролики под соцсети, сайт, экраны",
            "Единая система переходов и темпа",
            "Шаблоны, по которым команда работает сама",
            "Форматы под все площадки",
          ],
        },
      ],
    },
    servicesPage: {
      eyebrow: "УСЛУГИ",
      heading: "Чем именно я",
      headingMark: "помогаю",
      intro: "Пять направлений, которые я обычно веду сама, от начала до передачи. Комбинация зависит от того, что реально нужно бренду прямо сейчас.",
      back: "← На главную",
      moreLabel: "Подробнее об услугах",
    },
    process: {
      label: "ПРОЦЕСС",
      heading: "Как идёт работа",
      steps: [
        { n: "01", title: "Погружение", desc: "Бренд, аудитория, задача. Разбор того, что уже есть." },
        { n: "02", title: "Направление", desc: "Референсы, мудборды, выбор визуального языка." },
        { n: "03", title: "Ядро", desc: "Знак, палитра, типографика — основа системы." },
        { n: "04", title: "Материалы", desc: "Кампания, соцсети, сайт, печать — под конкретную задачу." },
        { n: "05", title: "Движение", desc: "Моушн-система: ролики, переходы, шаблоны для команды." },
        { n: "06", title: "Передача", desc: "Гайдлайны, шаблоны, обучение команды." },
      ],
    },
    processPage: {
      eyebrow: "ПРОЦЕСС",
      heading: "Как устроена",
      headingMark: "работа",
      intro: "Шесть шагов от первого разговора до передачи готовой системы команде. Порядок неизменен, объём каждого этапа — под задачу.",
      back: "← На главную",
    },
    work: {
      label: "РАБОТЫ",
      heading: "Избранное",
      note: "Кейсы обновляются. Актуальные работы — в портфолио:",
      noteLink: "Behance",
      soon: "СКОРО",
      all: "Все",
      moreLabel: "Все работы",
      items: [
        { category: "Визуальная система", title: "Ребрендинг растущего бренда", year: "202X" },
        { category: "Key visual", title: "Кампания к запуску", year: "202X" },
        { category: "Моушн-система", title: "Видео и шаблоны", year: "202X" },
      ],
    },
    workPage: {
      eyebrow: "РАБОТЫ",
      heading: "Что я",
      headingMark: "успела сделать",
      intro: "Кейсы появляются здесь по мере сдачи — фильтруйте по типу работы или смотрите всё подряд.",
      back: "← На главную",
    },
    about: {
      label: "ОБО МНЕ",
      heading: "Кто делает",
      bio: [
        "CHLORINE — это я, Ирина Фёдорова: бренд-стратег, арт-директор и моушн-дизайнер. Работаю с брендами, у которых уже есть продукт и амбиция, но визуальная часть отстаёт или собрана разными подрядчиками в разное время.",
        "До этого управляла премиальным гастропабом с полной ответственностью за P&L, затем выстраивала маркетинговую функцию в сети ресторанов — визуальную систему, контент-команду, регламенты. Стратегия, арт-дирекция и моушн собраны в одних руках: визуальный язык и его движение появляются вместе, а согласование идёт напрямую с тем, кто принимает решения.",
      ],
      principles: [
        { title: "МАСШТАБ", desc: "Решение проверяется тем, выдержит ли оно все каналы и точки контакта, а не только первый слайд презентации." },
        { title: "РЕАЛЬНОСТЬ", desc: "Система обязана работать в реальных условиях: быстро, на бегу, за три секунды внимания." },
        { title: "СИСТЕМА", desc: "Клиент получает правила и шаблоны, по которым команда работает самостоятельно." },
      ],
    },
    cta: {
      line1: "НАПИШИТЕ, ЧТО ПРОИСХОДИТ С ВАШИМ БРЕНДОМ.",
      line2: "ОТВЕЧУ С ОЦЕНКОЙ ОБЪЁМА В ТОТ ЖЕ ДЕНЬ.",
      button: "Написать в Telegram",
      emailLabel: "или на почту",
    },
    footer: {
      role: "Бренд-стратегия и арт-дирекция",
      nav: "Навигация",
      contact: "Контакты",
      work: "Портфолио",
      location: "Москва — весь мир",
    },
  },
  en: {
    meta: {
      title: "CHLORINE — Independent Creative & Brand Strategist",
      description:
        "Independent Creative & Brand Strategist helping ambitious brands turn ideas into distinctive campaigns and visual worlds.",
    },
    nav: {
      services: "Services",
      work: "Work",
      process: "Process",
      about: "About",
      contacts: "Contact",
    },
    hero: {
      tagline: "I turn your bold ideas into",
      tagMark: "recognizable brands",
      tagTail: ".",
      supporting: "Every project is a chance to try a language the brand hasn't spoken yet. I read the brief again, not from a template. And do something for the first time.",
      metaRight: "WORLDWIDE",
      cta: "Start a project",
      scroll: "SCROLL",
    },
    services: {
      label: "SERVICES",
      heading: "How I help",
      items: [
        {
          code: "Br",
          title: "Brand Strategy",
          desc: "Positioning, brand platform, tone of voice.",
          long: "The foundation everything else stands on: who you're speaking to, what you're saying, and why it's said that way.",
          includes: [
            "Brand, audience and market research",
            "Positioning and brand platform",
            "Tone of voice and verbal identity",
            "Brand architecture, if needed",
          ],
        },
        {
          code: "Id",
          title: "Visual Identity",
          desc: "Mark, palette, typography, guidelines.",
          long: "A visual language and the rules for it, so the client's team can apply it on its own — without me in every layout.",
          includes: [
            "Mark and its variations",
            "Palette, typography, grids",
            "Key visuals and photo style",
            "Guidelines with real examples",
          ],
        },
        {
          code: "Ca",
          title: "Campaigns & Key Visuals",
          desc: "Concept and key visual for a launch or season.",
          long: "A one-off but precise visual solution for a specific moment: a launch, a season, a collaboration.",
          includes: [
            "Campaign concept",
            "Key visual across core formats",
            "Adaptations for social, web, print",
            "Art direction for the shoot, if needed",
          ],
        },
        {
          code: "Ad",
          title: "Art Direction",
          desc: "An outside art director, on a monthly basis.",
          long: "An outside art director without the headcount — keeping the brand's visual integrity intact over time.",
          includes: [
            "Oversight of how the system is applied",
            "Feedback grounded in reasons, not taste",
            "Regular reviews of visual output",
            "Working directly with the client's designer",
          ],
        },
        {
          code: "Mo",
          title: "Motion & Video",
          desc: "Films, motion systems, reusable templates.",
          long: "Motion as part of the same visual system — not a separate job handed off elsewhere.",
          includes: [
            "Films for social, web, screens",
            "One system of transitions and pace",
            "Templates the team can run on its own",
            "Formats for every platform",
          ],
        },
      ],
    },
    servicesPage: {
      eyebrow: "SERVICES",
      heading: "What I actually",
      headingMark: "do",
      intro: "Five things I usually run myself, start to handover. The mix depends on what the brand actually needs right now.",
      back: "← Back home",
      moreLabel: "More about services",
    },
    process: {
      label: "PROCESS",
      heading: "How it runs",
      steps: [
        { n: "01", title: "Discovery", desc: "Brand, audience, goal. A read on what's already there." },
        { n: "02", title: "Direction", desc: "References, moodboards, choosing the visual language." },
        { n: "03", title: "Core", desc: "Mark, palette, typography — the foundation of the system." },
        { n: "04", title: "Assets", desc: "Campaign, social, web, print — whatever the brief needs." },
        { n: "05", title: "Motion", desc: "Motion system: films, transitions, templates for the team." },
        { n: "06", title: "Handover", desc: "Guidelines, templates, training for the team." },
      ],
    },
    processPage: {
      eyebrow: "PROCESS",
      heading: "How the work",
      headingMark: "runs",
      intro: "Six steps from the first conversation to handing a finished system to the team. The order stays fixed; how much time each step takes depends on the brief.",
      back: "← Back home",
    },
    work: {
      label: "WORK",
      heading: "Selected work",
      note: "Case studies in progress. Current work lives on",
      noteLink: "Behance",
      soon: "SOON",
      all: "All",
      moreLabel: "All work",
      items: [
        { category: "Visual identity", title: "Rebrand for a growing brand", year: "202X" },
        { category: "Key visual", title: "Launch campaign", year: "202X" },
        { category: "Motion system", title: "Films and templates", year: "202X" },
      ],
    },
    workPage: {
      eyebrow: "WORK",
      heading: "What I've",
      headingMark: "actually made",
      intro: "Case studies land here as they wrap — filter by type or just browse everything.",
      back: "← Back home",
    },
    about: {
      label: "ABOUT",
      heading: "Who's behind it",
      bio: [
        "CHLORINE is me — Irina Fedorova, brand strategist, art director and motion designer. I work with brands that already have a product and ambition, but whose visual side has fallen behind or been stitched together by different contractors over time.",
        "Before this, I ran a premium gastropub with full P&L ownership, then built the marketing function for a restaurant group — visual system, content team, guidelines. Strategy, art direction and motion sit in one pair of hands: the visual language and its motion arrive together, and sign-off happens directly with whoever makes the call.",
      ],
      principles: [
        { title: "SCALE", desc: "A decision is only good if it holds up across every channel and touchpoint, not just the first slide." },
        { title: "REALITY", desc: "A system has to work under real conditions: fast, on the move, with three seconds of attention." },
        { title: "SYSTEM", desc: "You get the rules and templates your team can run on its own." },
      ],
    },
    cta: {
      line1: "TELL ME WHAT'S GOING ON WITH YOUR BRAND.",
      line2: "I'LL REPLY WITH A SCOPE ESTIMATE THE SAME DAY.",
      button: "Message on Telegram",
      emailLabel: "or by email",
    },
    footer: {
      role: "Brand strategy & art direction",
      nav: "Navigation",
      contact: "Contact",
      work: "Portfolio",
      location: "Moscow — worldwide",
    },
  },
};
