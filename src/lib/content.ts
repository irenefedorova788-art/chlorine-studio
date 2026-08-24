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
  slug?: string;
};

export type CaseSection = {
  eyebrow: string;
  heading: string;
  body: string[];
};

export type CaseStudy = {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  year: string;
  client: string;
  role: string;
  sections: CaseSection[];
};

export type Dict = {
  meta: { title: string; description: string };
  nav: { services: string; work: string; process: string; about: string; contacts: string };
  hero: {
    paragraphs: string[];
    cta: string;
  };
  services: { heading: string; items: ServiceItem[] };
  servicesPage: {
    eyebrow: string;
    heading: string;
    headingMark: string;
    intro: string;
    back: string;
    moreLabel: string;
  };
  process: { heading: string; steps: ProcessStep[] };
  processPage: {
    eyebrow: string;
    heading: string;
    headingMark: string;
    intro: string;
    back: string;
  };
  work: { heading: string; note: string; noteLink: string; items: WorkItem[]; soon: string; view: string; all: string; moreLabel: string };
  workPage: {
    eyebrow: string;
    heading: string;
    headingMark: string;
    intro: string;
    back: string;
  };
  cases: CaseStudy[];
  caseView: {
    back: string;
    clientLabel: string;
    roleLabel: string;
  };
  about: {
    heading: string;
    bio: string[];
  };
  cta: { line1: string; line2: string; button: string; emailLabel: string };
  footer: { role: string; nav: string; contact: string; work: string; location: string };
};

export const content: Record<Locale, Dict> = {
  ru: {
    meta: {
      title: "CHLORINE — Ирина Фёдорова, независимый бренд-менеджер и арт-директор",
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
      paragraphs: [
        "Мы живём в момент, когда бренды соревнуются не только за внимание, но и за громкость. Цвета становятся ярче, контент — быстрее, визуальные решения — сложнее, а попытки выделиться иногда доходят до абсурда. В этом избытке легко потерять самое важное — собственный характер.",
        "Пора сделать уборку. Найти свой стиль, свой голос и собрать бренд вокруг того, что действительно принадлежит ему.",
      ],
      cta: "Обсудить проект",
    },
    services: {
      heading: "Услуги",
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
      heading: "Процесс",
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
      heading: "Работы",
      note: "Кейсы обновляются. Актуальные работы — в портфолио:",
      noteLink: "Behance",
      soon: "СКОРО",
      view: "Смотреть кейс",
      all: "Все",
      moreLabel: "Все работы",
      items: [
        { category: "Бренд-платформа", title: "CHLORINE", year: "2026", slug: "chlorine" },
        { category: "Ребрендинг (концепт)", title: "РЯДОМ", year: "2026", slug: "ryadom" },
      ],
    },
    workPage: {
      eyebrow: "РАБОТЫ",
      heading: "Что я",
      headingMark: "успела сделать",
      intro: "Кейсы появляются здесь по мере сдачи — фильтруйте по типу работы или смотрите всё подряд.",
      back: "← На главную",
    },
    cases: [
      {
        slug: "chlorine",
        category: "Бренд-платформа",
        title: "CHLORINE",
        subtitle: "Бренд независимого арт-директора, сделанный по тем же правилам, что и бренды для клиентов",
        year: "2026",
        client: "CHLORINE",
        role: "Нейминг, бренд-стратегия, визуальная айдентика, сайт",
        sections: [
          {
            eyebrow: "Контекст",
            heading: "Точка старта",
            body: [
              "У независимого специалиста обычно нет бренда — есть резюме, ссылка на Behance и переписка в Telegram.",
              "Экспертиза при этом может быть сильной. Но клиент видит её только через раздробленные, ничем не связанные фрагменты.",
            ],
          },
          {
            eyebrow: "Что не работало",
            heading: "Портфолио без голоса",
            body: [
              "PDF с кейсами, страница в соцсети, отдельный файл под каждый запрос — у каждого куска своя подача, ни один не похож на другой.",
              "Со стороны это выглядит как набор проектов, а не как позиция одного человека.",
            ],
          },
          {
            eyebrow: "Стратегия",
            heading: "Имя как метод",
            body: [
              "Название CHLORINE — буквальный перевод слова «хлор».",
              "Хлор наводит порядок там, где до него было тихо и одинаково: в бассейнах, в воде, в стерильных помещениях.",
              "Так же работает и бренд-менеджмент — находить характер в средах, где всё выглядит чисто, аккуратно и неотличимо друг от друга.",
            ],
          },
          {
            eyebrow: "Визуальная система",
            heading: "Один акцент, никакого шума",
            body: [
              "Сигнальный красный на почти чёрном тексте — единственный цветовой акцент во всей системе.",
              "Логотип набран без засечек и вручную растеризован в собственном шрифте, чтобы не зависеть от того, установлен ли он у получателя письма или презентации.",
              "Вместо студийных мокапов — фотографии на грани абстракции: синий и фиолетовый свет, без предметной привязки.",
              "Одна и та же система работает на сайте, в письме и в презентации для клиента — это не набор дизайнов, а единый язык.",
            ],
          },
          {
            eyebrow: "Результат",
            heading: "Инструмент, а не визитка",
            body: [
              "Сайт, шаблон презентации и шаблон письма собраны по одной системе и уже используются в переписке с клиентами.",
              "Вместо форматирования каждого письма заново — берётся готовый шаблон и заполняется текстом под конкретный проект.",
            ],
          },
        ],
      },
      {
        slug: "ryadom",
        category: "Ребрендинг (концепт)",
        title: "РЯДОМ",
        subtitle: "Несогласованный концепт: как могла бы звучать аптечная сеть, если бы за характер отвечал бренд, а не вывеска",
        year: "2026",
        client: "Спекулятивный проект, не связан с реальной компанией",
        role: "Позиционирование, нейминг, визуальная айдентика — концепт",
        sections: [
          {
            eyebrow: "Контекст",
            heading: "Категория без лица",
            body: [
              "Аптечные сети физически повсюду — в шаговой доступности почти от любой точки города.",
              "При этом вспомнить, в какую именно аптеку заходил вчера, обычно не может никто.",
            ],
          },
          {
            eyebrow: "Что не работало",
            heading: "Одна и та же вывеска",
            body: [
              "Белый свет, зелёный крест, ценник крупным шрифтом — во всех сетях одновременно.",
              "Категория решила, что «медицинский» значит «безликий», а доверие спутала со стерильностью.",
              "Ценовая борьба стала единственным языком отличия — и убила смысл выбирать по бренду, а не по акции.",
            ],
          },
          {
            eyebrow: "Стратегия",
            heading: "«Рядом» в двух смыслах",
            body: [
              "Название держится на двойном значении слова: рядом географически — и рядом по ощущению, когда действительно нужна помощь.",
              "Позиционирование смещается с «мы дешевле» на «мы рядом, когда это важно» — конкурировать не ценой, а присутствием.",
            ],
          },
          {
            eyebrow: "Визуальная система",
            heading: "Тепло вместо стерильности",
            body: [
              "Клинический зелёно-голубой уходит — вместо него тёплый оттенок чернил и один спокойный акцентный цвет, использованный точечно, а не по всей вывеске.",
              "Вместо стоковых фото витрин с товаром — фотографии людей и района вокруг аптеки: она часть улицы, а не отдельно стоящий бокс.",
              "Типографика — спокойная, без медицинских клише вроде крестов и капсул в логотипе.",
            ],
          },
          {
            eyebrow: "Результат",
            heading: "Демонстрация подхода",
            body: [
              "Это учебный кейс без реального клиента — способ показать, как выглядит работа с категорией, где все выглядят одинаково.",
              "Если у вас похожая задача — с сетью аптек или другим бизнесом, застрявшим в шаблонах категории — можно обсудить это уже как настоящий проект.",
            ],
          },
        ],
      },
    ],
    caseView: {
      back: "← Все работы",
      clientLabel: "Клиент",
      roleLabel: "Формат работы",
    },
    about: {
      heading: "Обо мне",
      bio: [
        "CHLORINE — работа бренд-менеджера Ирины Фёдоровой.",
        "В переводе с английского — «хлор».",
        "Находить в них характер, добавлять напряжение, менять ощущение.",
        "Я пришла в брендинг из бизнеса и увидела, как сильные продукты теряют свою ценность, когда их невозможно отличить от десятков похожих предложений.",
        "Сегодня продукту мало быть хорошим. Ему нужен характер, который проявляется во всём: в том, что бренд говорит, как выглядит и какое ощущение оставляет.",
        "CHLORINE помогает бизнесу найти этот характер и занять своё место среди похожих.",
      ],
    },
    cta: {
      line1: "НАПИШИТЕ, ЧТО ПРОИСХОДИТ С ВАШИМ БРЕНДОМ.",
      line2: "ОТВЕЧУ С ОЦЕНКОЙ ОБЪЁМА В ТОТ ЖЕ ДЕНЬ.",
      button: "Написать в Telegram",
      emailLabel: "или на почту",
    },
    footer: {
      role: "Бренд-менеджмент и арт-дирекция",
      nav: "Навигация",
      contact: "Контакты",
      work: "Портфолио",
      location: "Москва — весь мир",
    },
  },
  en: {
    meta: {
      title: "CHLORINE — Irina Fedorova, Independent Brand Manager & Art Director",
      description:
        "Independent brand manager and art director helping ambitious brands turn ideas into distinctive campaigns and visual worlds.",
    },
    nav: {
      services: "Services",
      work: "Work",
      process: "Process",
      about: "About",
      contacts: "Contact",
    },
    hero: {
      paragraphs: [
        "We're living in a moment when brands compete not just for attention, but for volume. Colors get brighter, content gets faster, visual solutions get more complex — and the attempts to stand out sometimes tip into absurdity. In all that excess, it's easy to lose the one thing that matters most: your own character.",
        "It's time for a clean-up. To find your style, your voice, and build the brand around what actually belongs to it.",
      ],
      cta: "Start a project",
    },
    services: {
      heading: "Services",
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
      heading: "Process",
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
      heading: "Work",
      note: "Case studies in progress. Current work lives on",
      noteLink: "Behance",
      soon: "SOON",
      view: "View case",
      all: "All",
      moreLabel: "All work",
      items: [
        { category: "Brand platform", title: "CHLORINE", year: "2026", slug: "chlorine" },
        { category: "Rebrand (concept)", title: "RYADOM", year: "2026", slug: "ryadom" },
      ],
    },
    workPage: {
      eyebrow: "WORK",
      heading: "What I've",
      headingMark: "actually made",
      intro: "Case studies land here as they wrap — filter by type or just browse everything.",
      back: "← Back home",
    },
    cases: [
      {
        slug: "chlorine",
        category: "Brand platform",
        title: "CHLORINE",
        subtitle: "An independent art director's own brand, built by the same rules used for client work",
        year: "2026",
        client: "CHLORINE",
        role: "Naming, brand strategy, visual identity, website",
        sections: [
          {
            eyebrow: "Context",
            heading: "Starting point",
            body: [
              "An independent specialist usually doesn't have a brand — just a résumé, a Behance link, and a Telegram thread.",
              "The expertise can be real. But a client only sees it through disconnected, differently-formatted fragments.",
            ],
          },
          {
            eyebrow: "What wasn't working",
            heading: "A portfolio without a voice",
            body: [
              "A PDF of case studies, a social profile, a separate file for every request — each piece pitched differently, none of them looking related.",
              "From the outside it reads as a pile of projects, not a single point of view.",
            ],
          },
          {
            eyebrow: "Strategy",
            heading: "The name as a method",
            body: [
              "CHLORINE is a literal translation of the Russian word for chlorine.",
              "Chlorine brings order to places that were quiet and uniform before it arrived — pools, water, sterile rooms.",
              "Brand management works the same way: finding character in categories where everything already looks clean, neat, and indistinguishable.",
            ],
          },
          {
            eyebrow: "Visual system",
            heading: "One accent, no noise",
            body: [
              "Signal red on near-black text — the single color accent across the entire system.",
              "The logotype is set in a sans face and rasterized by hand into its own font file, so it never depends on whether the recipient has that font installed.",
              "Instead of studio mockups, photography that sits right at the edge of abstraction: blue and purple light, with no literal subject.",
              "The same system runs across the site, the email template, and the client deck — not a set of designs, but one language.",
            ],
          },
          {
            eyebrow: "Result",
            heading: "A tool, not a business card",
            body: [
              "The website, deck template, and email template are built on one system and already used in real client correspondence.",
              "Instead of formatting every email from scratch, a ready template gets filled in with the specifics of each project.",
            ],
          },
        ],
      },
      {
        slug: "ryadom",
        category: "Rebrand (concept)",
        title: "RYADOM",
        subtitle: "An unsolicited concept: what a pharmacy chain could sound like if the brand carried the character, not the signage",
        year: "2026",
        client: "Speculative project, not affiliated with a real company",
        role: "Positioning, naming, visual identity — concept",
        sections: [
          {
            eyebrow: "Context",
            heading: "A category with no face",
            body: [
              "Pharmacy chains are physically everywhere — a short walk from almost any point in the city.",
              "Almost nobody can recall which specific pharmacy they walked into yesterday.",
            ],
          },
          {
            eyebrow: "What wasn't working",
            heading: "The same sign, everywhere",
            body: [
              "White light, a green cross, prices in bold — across every chain at once.",
              "The category decided that \"medical\" means \"faceless,\" and mistakes trust for sterility.",
              "Price competition became the only language of difference, killing any reason to choose a brand instead of a promotion.",
            ],
          },
          {
            eyebrow: "Strategy",
            heading: "\"Nearby\" in two senses",
            body: [
              "The name (Russian for \"nearby\" / \"right beside you\") carries a double meaning: close by, geographically — and close by in feeling, when it actually matters.",
              "Positioning shifts from \"we're cheaper\" to \"we're right there when it counts\" — competing on presence, not price.",
            ],
          },
          {
            eyebrow: "Visual system",
            heading: "Warmth instead of sterility",
            body: [
              "The clinical green-blue is gone, replaced with a warm ink tone and a single calm accent color, used sparingly instead of covering the whole sign.",
              "Instead of stock photos of shelves, photography of people and the block the pharmacy sits on — it's part of the street, not a box dropped onto it.",
              "Typography stays quiet, without the usual medical clichés — no crosses or capsule shapes built into the logo.",
            ],
          },
          {
            eyebrow: "Result",
            heading: "A demonstration of the approach",
            body: [
              "This is a spec case with no real client — a way to show what it looks like to take on a category where everyone already looks the same.",
              "A similar brief — a pharmacy chain or any other business stuck in its category's template — is welcome to become a real project.",
            ],
          },
        ],
      },
    ],
    caseView: {
      back: "← All work",
      clientLabel: "Client",
      roleLabel: "Scope",
    },
    about: {
      heading: "About",
      bio: [
        "CHLORINE is the work of brand manager Irina Fedorova.",
        "Finding the character inside them. Adding tension. Changing how they feel.",
        "I came into branding from business, and watched strong products lose their value the moment they became indistinguishable from a dozen similar offers.",
        "Being good isn't enough for a product today. It needs character — in what the brand says, how it looks, and the feeling it leaves behind.",
        "CHLORINE helps businesses find that character and claim their place among the similar.",
      ],
    },
    cta: {
      line1: "TELL ME WHAT'S GOING ON WITH YOUR BRAND.",
      line2: "I'LL REPLY WITH A SCOPE ESTIMATE THE SAME DAY.",
      button: "Message on Telegram",
      emailLabel: "or by email",
    },
    footer: {
      role: "Brand management & art direction",
      nav: "Navigation",
      contact: "Contact",
      work: "Portfolio",
      location: "Moscow — worldwide",
    },
  },
};
