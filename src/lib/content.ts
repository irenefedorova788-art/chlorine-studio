export const locales = ["ru", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ru";

export const CONTACT = {
  telegram: "https://t.me/chlorine_marketing",
  telegramLabel: "@chlorine_marketing",
  behance: "https://behance.net/cherepubica",
  behanceLabel: "behance.net/cherepubica",
  email: "hello@chlorine.studio",
};

export type ServiceItem = {
  code: string;
  title: string;
  desc: string;
  price: string;
  duration: string;
  includes: string[];
  result: string;
  limitations: string[];
};

export type ServiceBundle = {
  title: string;
  desc: string;
  price: string;
  duration: string;
  includes: string[];
  result: string;
  limitations: string[];
  savingsNote: string;
};

export type ServiceOption = {
  label: string;
  price: string;
  desc: string;
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
  /** Hide the project name on the card — used for CHLORINE itself, since the header logo already names it. */
  hideProjectName?: boolean;
};

export type CaseSection = {
  eyebrow: string;
  heading: string;
  body: string[];
  /** Public paths to images for this section (e.g. a visual collage). */
  images?: string[];
};

export type CaseStudy = {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  sections: CaseSection[];
  /** Skip the category eyebrow on the case page — used when the role field already says the same thing. */
  hideCategoryEyebrow?: boolean;
};

export type Dict = {
  meta: { title: string; description: string };
  nav: { services: string; work: string; process: string; about: string; contacts: string };
  hero: {
    paragraphs: string[];
    cta: string;
  };
  services: {
    heading: string;
    intro: string[];
    items: ServiceItem[];
    bundle: ServiceBundle;
    includesLabel: string;
    resultLabel: string;
    limitationsLabel: string;
    detailsLabel: string;
    optionsHeading: string;
    options: ServiceOption[];
    termsHeading: string;
    terms: string[];
  };
  servicesPage: {
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
  work: { heading: string; note: string; noteLink: string; items: WorkItem[]; soon: string; view: string; all: string; moreLabel: string; projectLabel: string };
  workPage: {
    heading: string;
    headingMark: string;
    intro: string;
    back: string;
  };
  cases: CaseStudy[];
  caseView: {
    back: string;
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
        "Всё вокруг может меняться. Что-то должно оставаться.",
        "Характер, узнаваемость, доверие — то, что создаётся годами и продолжает работать между всеми остальными задачами.",
      ],
      cta: "Обсудить проект",
    },
    services: {
      heading: "Услуги",
      intro: [
        "Бренд работает вдолгую: он копит узнаваемость, доверие и характер компании — то, что не создать за одну кампанию и не купить одним рекламным бюджетом.",
        "Мы выстраиваем позиционирование и визуальную систему так, чтобы бренд было легко узнать, понять и выбрать. Со временем это превращается в накопленный капитал: людям проще возвращаться и рекомендовать, а компании — не объяснять заново, кто она и почему ей можно доверять.",
        "Этот капитал особенно важен в тяжёлые для бизнеса времена. Когда рынок штормит или доходы падают, именно выстроенный бренд прикрывает спину: люди продолжают выбирать компанию по накопленному доверию, а не по свежей рекламе.",
      ],
      items: [
        {
          code: "01",
          title: "Аудит исследований",
          desc: "Разбираем, что компания уже знает о своих клиентах, на каких данных основаны текущие решения и какие гипотезы пока не подтверждены.",
          price: "20 000 ₽",
          duration: "3–5 рабочих дней",
          includes: [
            "Анализ до 10 файлов или материалов, предоставленных клиентом.",
            "Разбор существующих опросов, интервью, отзывов и гипотез об аудитории.",
            "Разделение выводов на подтверждённые данными, требующие дополнительной проверки и пока неизвестные.",
            "Выявление противоречий и пробелов в имеющихся данных.",
            "Рекомендации по вопросам, которые необходимо исследовать в первую очередь.",
            "План дальнейшего исследования с учётом бизнес-задачи.",
            "Итоговый документ с выводами и рекомендациями.",
            "Одна онлайн-встреча до 45 минут для обсуждения результатов.",
          ],
          result: "Понимание того, на какие выводы уже можно опираться, какие решения преждевременны и какие данные нужно получить дополнительно.",
          limitations: [
            "До 6 часов работы.",
            "Используются материалы клиента и доступные данные.",
            "Новые интервью, опросы, рекрутинг респондентов и полевые исследования не входят в стоимость.",
            "Аудит не подтверждает достоверность исходных данных автоматически: оцениваются их качество, ограничения и применимость.",
          ],
        },
        {
          code: "02",
          title: "Позиционирование и аудитория",
          desc: "Исследуем конкурентную среду и потребности аудитории, чтобы определить, для кого работает бренд, в чём его значимые отличия и почему клиент должен выбрать именно его.",
          price: "90 000 ₽",
          duration: "10 рабочих дней",
          includes: [
            "Анализ одной категории рынка.",
            "Кабинетное исследование на основе открытых источников.",
            "Анализ до 5 прямых и косвенных конкурентов.",
            "Изучение доступных сайтов, социальных сетей, предложений, меню, цен и отзывов конкурентов.",
            "Определение одного основного сегмента аудитории и до двух дополнительных сегментов-гипотез.",
            "Анализ потребностей, мотивов, ситуаций потребления и критериев выбора на основании доступных данных.",
            "Карта конкурентного позиционирования.",
            "Определение возможностей для дифференциации бренда.",
            "Разработка формулировки позиционирования и ценностного предложения.",
            "Определение оснований для выбора бренда и способов подтвердить его обещания.",
            "Итоговый документ с выводами и рекомендациями.",
            "Одна презентация результатов продолжительностью до 60 минут.",
          ],
          result: "Документ, который помогает определиться с целевой аудиторией, конкурентными отличиями и направлением развития бренда.",
          limitations: [
            "До 24 часов работы.",
            "Один бренд, одна категория рынка и один основной бизнес-сценарий.",
            "Используются открытые источники и данные, предоставленные клиентом.",
            "Количественные опросы, глубинные интервью и другие полевые исследования не входят в базовую стоимость.",
            "Выводы о мотивах аудитории формулируются с учётом ограничений доступных данных, а не выдаются за доказанные факты без подтверждения.",
          ],
        },
        {
          code: "03",
          title: "Ядро бренда",
          desc: "Определяем характер бренда и принципы, которые помогают сохранять его узнаваемость и последовательность в коммуникации и поведении.",
          price: "50 000 ₽",
          duration: "7 рабочих дней",
          includes: [
            "Формулировка предназначения бренда.",
            "Определение ключевых ценностей и убеждений.",
            "Описание характера и личностных черт бренда.",
            "Формулировка принципов поведения бренда.",
            "Разработка принципов Tone of Voice.",
            "Примеры коммуникации: как бренд говорит и как не говорит.",
            "Примеры применения характера бренда в типичных ситуациях общения с клиентами.",
            "Итоговый документ с правилами применения ядра бренда.",
            "Одна встреча для обсуждения и согласования результата.",
          ],
          result: "Практическая платформа характера бренда, которой могут пользоваться маркетолог, копирайтер, дизайнер и другие подрядчики.",
          limitations: [
            "До 16 часов работы.",
            "Работа ведётся на основе существующей информации о бренде и его позиционирования.",
            "Архетип используется как вспомогательный инструмент, если он действительно помогает решить задачу.",
            "Разработка логотипа, визуальной идентичности, нейминга и полного брендбука не входит в стоимость.",
            "Полноценное руководство по коммуникации для всех каналов и ситуаций оформляется как отдельный объём работ.",
          ],
        },
        {
          code: "04",
          title: "Система сообщений бренда",
          desc: "Разрабатываем систему ключевых сообщений, которая объясняет ценность бренда, помогает донести его отличия и адаптировать коммуникацию под разные сегменты аудитории.",
          price: "40 000 ₽",
          duration: "5 рабочих дней",
          includes: [
            "Формулировка главного сообщения бренда.",
            "Разработка до 3 ключевых сообщений.",
            "Определение аргументов в пользу выбора бренда.",
            "Формулировка доказательств ключевых обещаний на основе доступных фактов.",
            "Адаптация сообщений для двух сегментов аудитории.",
            "Примеры формулировок, заголовков и коротких текстовых сообщений.",
            "Принципы адаптации для сайта и социальных сетей.",
            "Итоговая таблица сообщений для дальнейшей работы маркетолога или копирайтера.",
          ],
          result: "Структурированная система сообщений, которую можно использовать при подготовке контента, рекламных материалов и коммуникации с аудиторией.",
          limitations: [
            "До 12 часов работы.",
            "Работа основывается на согласованном позиционировании бренда.",
            "Полное написание сайта, контент-плана, рекламных кампаний и большого количества готовых текстов не входит в стоимость.",
            "Если позиционирование и ядро бренда не разработаны, их необходимо заказать отдельно или предоставить готовые материалы.",
          ],
        },
      ],
      bundle: {
        title: "Полная бренд-стратегия",
        desc: "Объединяем исследование рынка и аудитории, позиционирование, характер бренда и систему сообщений в единую стратегию, которой можно руководствоваться при развитии бизнеса и работе с подрядчиками.",
        price: "170 000 ₽",
        duration: "15–20 рабочих дней",
        includes: [
          "Кабинетное исследование аудитории и конкурентной среды в объёме, описанном в услуге «Позиционирование и аудитория».",
          "Формулировка позиционирования и ценностного предложения.",
          "Разработка ядра бренда: предназначение, ценности, характер и принципы поведения.",
          "Принципы Tone of Voice и примеры коммуникации.",
          "Разработка системы ключевых сообщений.",
          "Связь позиционирования, характера и коммуникации в единую систему.",
          "Рекомендации по применению стратегии в маркетинге и коммуникации.",
          "Итоговый стратегический документ.",
          "Отдельная презентация ключевых решений для команды или руководства.",
          "Вводная стратегическая встреча.",
          "Итоговая презентация продолжительностью до 90 минут.",
          "Один консолидированный раунд правок по итоговым материалам.",
        ],
        result: "Единая бренд-стратегия с обоснованием ключевых решений и рекомендациями по дальнейшей работе.",
        limitations: [
          "До 48 часов суммарной работы.",
          "Один бренд, одна категория рынка и один основной бизнес-сценарий.",
          "Используются открытые источники и материалы клиента.",
          "Полевые исследования, количественные опросы, рекрутинг респондентов, визуальная идентичность, логотип, вёрстка и производство рекламных материалов не входят в стоимость.",
          "Если необходимы дополнительные исследования или сложная архитектура бренда, объём и стоимость согласовываются отдельно.",
        ],
        savingsNote: "Дешевле на 30 000 ₽, чем сумма отдельных услуг.",
      },
      includesLabel: "В стоимость входит",
      resultLabel: "Результат для клиента",
      limitationsLabel: "Ограничения",
      detailsLabel: "Состав работ",
      optionsHeading: "Дополнительные опции",
      options: [
        {
          label: "Дополнительный сегмент аудитории",
          price: "15 000 ₽",
          desc: "Анализ одного дополнительного сегмента в рамках уже согласованного исследования. Не включает новое полевое исследование или расширение категории рынка.",
        },
        {
          label: "Глубинные интервью",
          price: "35 000 ₽",
          desc: "Проведение и анализ 3–5 интервью с представителями целевой аудитории, подготовка выводов и сопоставление результатов с текущими гипотезами. Поиск респондентов, вознаграждения участникам и другие внешние расходы оплачиваются отдельно. До начала работы необходимо согласовать доступность респондентов и формат проведения интервью.",
        },
        {
          label: "Архитектура бренда",
          price: "от 50 000 ₽",
          desc: "Разработка логики взаимодействия между основным брендом, суббрендами и отдельными форматами бизнеса. Итоговая стоимость зависит от количества брендов, форматов и сложности их взаимосвязей.",
        },
        {
          label: "Срочность",
          price: "+30% к стоимости услуги",
          desc: "Возможна по согласованию с учётом текущей загрузки команды — конкретное сокращение срока обсуждается отдельно.",
        },
        {
          label: "Дополнительный раунд правок",
          price: "10 000 ₽",
          desc: "Один дополнительный консолидированный список замечаний в рамках ранее согласованного задания. Новые задачи и изменение исходных требований оцениваются отдельно.",
        },
      ],
      termsHeading: "Условия работы",
      terms: [
        "Базовые цены рассчитаны на один бренд, одну категорию рынка и согласованный объём работ.",
        "Срок выполнения начинается после оплаты и получения необходимых материалов от клиента.",
        "В стоимость входит только тот объём, который указан в описании услуги.",
        "Один раунд правок означает один консолидированный список замечаний от клиента.",
        "Задержки с предоставлением информации и согласованием могут сдвигать сроки.",
        "Дополнительные исследования, расходы на респондентов, платные базы данных и внешние подрядчики оплачиваются отдельно, если не включены в согласованный объём.",
        "Визуальная идентичность, логотип, дизайн-система, вёрстка и производство материалов не входят в стратегические услуги. При необходимости эти работы могут быть организованы с привлечением партнёров.",
      ],
    },
    servicesPage: {
      heading: "Чем именно я",
      headingMark: "помогаю",
      intro: "Мир, который требует нового и лучшего, не прощает тех, кто стоит на месте. Характер бренда может стать катализатором перемен — тем, что помогает ему выделиться и продавать увереннее. CHLORINE соединяет точный анализ и творческий подход, чтобы то, каким должен стать ваш бренд, стало ощутимым уже сегодня.",
      back: "← На главную",
      moreLabel: "Подробнее об услугах",
    },
    process: {
      heading: "Процесс",
      steps: [
        { n: "01", title: "Погружение", desc: "Бренд, бизнес, аудитория и задача. Разбираем, что уже есть, как бренд выглядит и воспринимается сейчас." },
        { n: "02", title: "Аудит", desc: "Находим разрывы: где бренд теряет характер, где визуальная система не работает, что мешает ему двигаться дальше. Формируем точки роста." },
        { n: "03", title: "Направление", desc: "Определяем, куда бренд должен двигаться. Референсы, визуальная территория, moodboard, принципы и характер будущей системы." },
        { n: "04", title: "Система", desc: "Переводим направление в работающую визуальную систему: айдентика, типографика, цвет, графические приёмы, motion и правила их использования." },
        { n: "05", title: "Реализация", desc: "Воплощаем систему в конкретных задачах: кампании, key visual, сайт, соцсети, съёмки, печатные материалы и другие точки контакта." },
        { n: "06", title: "Арт-дирекция", desc: "Следим за тем, чтобы визуальное направление сохранялось в реализации. Работаем с дизайнерами, фотографами, продакшеном и другими участниками проекта." },
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
      projectLabel: "Проект",
      items: [
        { category: "Гастрокофейня", title: "СОЙКА НАПЕЛА", year: "2026", slug: "soyka-napela", hideProjectName: true },
        { category: "Ребрендинг сети", title: "ЛЕПИМ И ВАРИМ", year: "2026", slug: "lepim-i-varim", hideProjectName: true },
        { category: "Бренд-стратегия", title: "БИСТРО В СПАЛЬНОМ РАЙОНЕ (КОНЦЕПТ)", year: "2026", slug: "bistro-spalny-rayon" },
      ],
    },
    workPage: {
      heading: "Работы",
      headingMark: "",
      intro: "Кейсы появляются здесь по мере сдачи — фильтруйте по типу работы или смотрите всё подряд.",
      back: "← На главную",
    },
    cases: [
      {
        slug: "soyka-napela",
        category: "Гастрокофейня",
        title: "СОЙКА НАПЕЛА",
        subtitle: "Кейс",
        year: "2026",
        role: "Ребрендинг: бренд-стратегия, визуальная айдентика, коммуникация",
        sections: [
          {
            eyebrow: "Бренд",
            heading: "Бренд",
            body: [
              "«Сойка Напела» — гастрокофейня на Красной Пресне. Проект прошёл через закрытие в 2020 году и смену первоначального формата.",
              "Перед брендом стояла задача перейти от привычного образа кофейни к более цельному гастрономическому проекту.",
            ],
          },
          {
            eyebrow: "Проблема",
            heading: "Проблема",
            body: [
              "Проект постепенно терял актуальность и продолжал существовать в рамках концепции, которая уже не соответствовала его развитию. Основная аудитория была преимущественно возрастной, а бренду нужно было привлечь более молодую аудиторию и заново стать для неё актуальным и привлекательным местом.",
              "Задача: оживить бренд, сохранив его узнаваемое название, но полностью переосмыслив то, каким он может быть сегодня.",
            ],
          },
          {
            eyebrow: "Инсайт",
            heading: "Инсайт",
            body: [
              "В течение дня меняются настроение, планы и люди рядом — вместе с ними меняется и то, зачем человек приходит в «Сойку». Одно место может сопровождать совершенно разные моменты и сближать людей.",
            ],
          },
          {
            eyebrow: "Belief",
            heading: "Сейчас самое время",
            body: [],
          },
          {
            eyebrow: "Концепт",
            heading: "Концепт",
            body: [
              "Во время ребрендинга убрала образ птицы и ушла от буквального языка старой концепции. Сохранила фразу «сейчас самое время» со старой светодиодной вывески и сделала её основой нового бренда.",
              "Акцент сместился с птицы на момент — на то, что происходит здесь и сейчас. Вокруг этой идеи пересобрала характер и коммуникацию «Сойки».",
            ],
          },
          {
            eyebrow: "Визуал",
            heading: "Визуал",
            body: [
              "Первая фотография для будущего коллажа.",
            ],
            images: ["/work/soyka-napela/01.jpg"],
          },
        ],
      },
      {
        slug: "lepim-i-varim",
        category: "Ребрендинг сети",
        title: "ЛЕПИМ И ВАРИМ",
        subtitle: "Кейс",
        year: "2026",
        role: "Ребрендинг: бренд-стратегия, визуальная айдентика, стандарт для франшизы",
        sections: [
          {
            eyebrow: "Бренд",
            heading: "Бренд",
            body: [
              "«Лепим и Варим» — сеть пельменных, выросшая из одной точки в Столешниковом переулке, открытой 15 ноября 2015 года. Самую дорогую улицу Москвы основатель выбрал намеренно: пельменная от неизвестных молодых людей там, где её не ждали, была заявлением сама по себе.",
              "Отличало проект одно — ручная лепка на виду у гостя. К сегодняшнему дню сеть выросла до 67 точек в России, Беларуси, Казахстане и ОАЭ и с 2018 года развивается по франшизе.",
            ],
          },
          {
            eyebrow: "Проблема",
            heading: "Проблема",
            body: [
              "Сеть росла, а бренд оставался там же, откуда начинал: идеологического сдвига за эти годы так и не произошло.",
              "Вместе с ростом с точек тихо ушла ручная лепка — то единственное, что делало «Лепим и Варим» собой. Название бренда начинается с глагола, с обещания действия, и это действие перестало происходить.",
              "Параллельно точки перестали быть похожими друг на друга. Дело было не в разных помещениях и районах: единого регламента вывески не существовало, чётких правил тоже. Точки открывали люди, далёкие от дизайна, — они не видели ошибок и не считали их ошибками. Сверху на всё это наслоился десяток рекламных сообщений, кричащих с каждой поверхности.",
              "В сумме получилось ощущение неаккуратного места. Уют почти исчез, и держалось всё на одной мысли — на тех самых пельменях, которые помнят все.",
              "Задача: вернуть бренду облик и действие. Поставить ручную лепку обратно на точки так, чтобы она окупалась, убрать визуальный шум и собрать единый стандарт, который сможет повторить любой партнёр.",
            ],
          },
          {
            eyebrow: "Инсайт",
            heading: "Инсайт",
            body: [
              "Бренд дожил до нас на памяти. Через годы случайных вывесок, разного оформления и рекламного шума гостя удерживала мысль о тех самых пельменях — тех, что лепили дома. Память о домашнем работала вместо доказательства, которого на точке больше не показывали. Это ресурс с исчерпаемым сроком.",
            ],
          },
          {
            eyebrow: "Belief",
            heading: "Лепим. Варим. Как дома.",
            body: [],
          },
          {
            eyebrow: "Концепт",
            heading: "Концепт",
            body: [
              "Вернула ручную лепку на точки и собрала её экономику так, чтобы она работала не как витрина, а как часть производства.",
              "Убрала крик: вместо десятка сообщений, борющихся за внимание, на точке осталось одно — то, что происходит за стеклом.",
              "Закрепила то, чего у сети не было никогда: регламент вывески, правила оформления точки, единый стиль. Теперь партнёр открывает по документу, а не по своему вкусу, и ошибку видно до того, как она станет вывеской.",
              "Название снова описывает то, что происходит внутри, — а домашнее ощущение, на котором бренд держался все эти годы, перестало быть только воспоминанием.",
            ],
          },
          {
            eyebrow: "Визуал",
            heading: "Визуал",
            body: [
              "Фотографии проекта появятся здесь.",
            ],
          },
        ],
      },
      {
        slug: "bistro-spalny-rayon",
        category: "Бренд-стратегия",
        title: "БИСТРО В СПАЛЬНОМ РАЙОНЕ (КОНЦЕПТ)",
        subtitle: "Бренд-стратегия и визуальный язык для бистро в спальном районе, подготовленные до открытия",
        year: "2026",
        role: "Бренд-стратегия, позиционирование на основе исследования, визуальный язык для соцсетей до запуска",
        hideCategoryEyebrow: true,
        sections: [
          {
            eyebrow: "Сигнал",
            heading: "Работа только до открытия",
            body: [
              "Клиент уже принял решение открыть бистро в спальном районе. Задача агентства — построить концепцию на данных и подготовить визуальный язык, с которым заведение выйдет в соцсети ещё до запуска. Стройка, операционка и дальнейшая судьба заведения остаются за периметром агентства.",
              "Ограничения: густонаселённый район, слабая транспортная развязка, доход аудитории — рабочий и средний класс, бюджет на ремонт ограничен.",
            ],
          },
          {
            eyebrow: "Инсайт",
            heading: "Исследование как ядро кейса",
            body: [
              "Исследование велось по пяти блокам — аудитория, конкуренция, паттерны поведения, экономика формата, тренды — каждый с источниками. Ниже — только те выводы, которые реально повернули решение.",
            ],
          },
          {
            eyebrow: "Инсайт 1",
            heading: "Транспортная изоляция как преимущество",
            body: [
              "Сети дают спальным районам скорость, супермаркеты — близость. Дефицит — именно «третье место», точка, где можно остаться. Плохая транспортная развязка только усиливает этот спрос: жителям сложно ехать в центр за качеством — значит, качественное место рядом получает спрос без альтернативы.",
              "Отклонено: позиционирование «мы на уровне центра» — в пользу «центр теперь рядом».",
            ],
          },
          {
            eyebrow: "Инсайт 2",
            heading: "Дешёвый ремонт как честность бренда",
            body: [
              "Доход аудитории и архетип Everyman потребовали отказаться от полированного дизайна — он читается как «для чужих». Видимая бережливость — залатанные места, разномастная плитка, переиспользование — читается как честность бренда, осознанный выбор дизайна.",
              "Отклонено: дорогие реплики винтажной мебели — в пользу настоящего б/у винтажа, перетянутого своими руками.",
            ],
          },
          {
            eyebrow: "Инсайт 3",
            heading: "Здание диктует эстетику",
            body: [
              "Район дал богатый исторический материал — трамвайный павильон 1886 года, академия, дендрарий, — но само здание, где будет бистро, типовое советское (5–9 этажей). Честность архитектуре — часть того же принципа, что и бюджет ремонта.",
              "Отклонено: дореволюционная/ар-нуво эстетика как основа интерьера — в пользу советской, честной зданию; история осталась как содержательная ботаническая нить, поданная через советский агрономический язык.",
            ],
          },
          {
            eyebrow: "Инсайт 4",
            heading: "Магазин-корнер снимает реальный барьер рынка",
            body: [
              "Мелких производителей сдерживают операционные барьеры сетей, а их продукт при этом соответствует всем требованиям качества — реальная, подтверждённая проблема. Формат «курируемая полка при бистро» решает её без чужого прецедента.",
              "Отклонено: чистый ритейл-минимаркет в стиле wellness-стартапа — слишком дорого и чисто для архетипа и аудитории.",
            ],
          },
          {
            eyebrow: "Концепция",
            heading: "От инсайтов к позиционированию",
            body: [
              "Purpose: жители спального района заслуживают то же внимание, что и центр, без необходимости туда ехать.",
              "Архетип: Everyman + Caregiver.",
              "Positioning: «Место рядом с домом, где можно остаться — по цене навыноса, но качеством как в центре».",
              "Зонирование: гастроном + семейная зона + уголок для дедушек + рабочая зона — одно место для всех поколений района.",
            ],
          },
          {
            eyebrow: "Визуал",
            heading: "Библиотека промптов готова",
            body: [
              "Стиль переведён в готовую к генерации библиотеку промптов по каждой детали — мебель, плитка, вывеска, керамика, гастроном-холодильник, туалет, фурнитура. Статус: промпты готовы, генерация визуалов — следующий шаг.",
            ],
          },
          {
            eyebrow: "Итог",
            heading: "Стадия подготовки к открытию",
            body: [
              "Итог этой стадии — готовый пакет: бренд-стратегия и визуальный язык, с которым можно выходить в соцсети до открытия. Само открытие остаётся за периметром агентства.",
              "Бистро остаётся в стадии подготовки к запуску — открытие ещё впереди.",
            ],
          },
        ],
      },
    ],
    caseView: {
      back: "← Все работы",
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
        "CHLORINE помогает маленьким независимым брендам с собственным производством — украшениям, одежде, локальным линейкам — избавиться от путаницы в сообщении и говорить о себе так, чтобы это было легче продавать.",
      ],
    },
    cta: {
      line1: "НАПИШИТЕ, ЧТО ПРОИСХОДИТ С ВАШИМ БРЕНДОМ.",
      line2: "ОТВЕЧУ С ОЦЕНКОЙ ОБЪЁМА В ТОТ ЖЕ ДЕНЬ.",
      button: "Написать в Telegram",
      emailLabel: "или на почту",
    },
    footer: {
      role: "Бренд-маркетинг / продукт / маркетинг",
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
        "Everything around you can change. Something has to stay.",
        "Character, recognition, trust — built over years, still working underneath everything else.",
      ],
      cta: "Start a project",
    },
    services: {
      heading: "Services",
      intro: [
        "A brand plays the long game: it builds up recognition, trust, and character — things no single campaign or ad budget can buy overnight.",
        "We build positioning and a visual system so the brand is easy to recognize, understand, and choose. Over time that turns into accumulated capital: it's easier for people to come back and recommend you, and the company stops having to re-explain who it is and why it can be trusted.",
        "That capital matters most when times get hard. When the market shakes or revenue dips, a brand that's been properly built is what has your back — people keep choosing the company on accumulated trust, not on whatever ad they saw last.",
      ],
      items: [
        {
          code: "01",
          title: "Research Audit",
          desc: "We go through what the company already knows about its customers, what data current decisions are based on, and which assumptions are still unconfirmed.",
          price: "20,000 ₽",
          duration: "3–5 business days",
          includes: [
            "Review of up to 10 files or materials provided by the client.",
            "Analysis of existing surveys, interviews, reviews, and audience assumptions.",
            "Sorting findings into confirmed by data, needing further verification, and still unknown.",
            "Identifying contradictions and gaps in the existing data.",
            "Recommendations on which questions need researching first.",
            "A plan for further research aligned with the business task.",
            "A final document with findings and recommendations.",
            "One online meeting, up to 45 minutes, to discuss the results.",
          ],
          result: "Clarity on which conclusions can already be relied on, which decisions are premature, and what data still needs to be gathered.",
          limitations: [
            "Up to 6 hours of work.",
            "Uses materials provided by the client and available data.",
            "New interviews, surveys, respondent recruitment, and field research are not included.",
            "The audit doesn't automatically confirm the accuracy of the source data: it assesses its quality, limitations, and applicability.",
          ],
        },
        {
          code: "02",
          title: "Positioning & Audience",
          desc: "We research the competitive landscape and audience needs to define who the brand works for, what meaningfully sets it apart, and why a customer should choose it.",
          price: "90,000 ₽",
          duration: "10 business days",
          includes: [
            "Analysis of one market category.",
            "Desk research based on publicly available sources.",
            "Analysis of up to 5 direct and indirect competitors.",
            "Review of competitors' available websites, social media, offers, menus, prices, and reviews.",
            "Definition of one primary audience segment and up to two additional hypothesis segments.",
            "Analysis of needs, motives, consumption situations, and choice criteria based on available data.",
            "A competitive positioning map.",
            "Identifying opportunities for brand differentiation.",
            "Developing a positioning statement and value proposition.",
            "Defining reasons to believe and how to back up the brand's promises.",
            "A final document with findings and recommendations.",
            "One results presentation, up to 60 minutes.",
          ],
          result: "A document that helps settle on the target audience, competitive differences, and direction for the brand's development.",
          limitations: [
            "Up to 24 hours of work.",
            "One brand, one market category, one primary business scenario.",
            "Uses public sources and materials provided by the client.",
            "Quantitative surveys, in-depth interviews, and other field research are not included in the base price.",
            "Conclusions about audience motives are framed within the limits of the available data, not presented as proven facts without confirmation.",
          ],
        },
        {
          code: "03",
          title: "Brand Core",
          desc: "We define the brand's character and the principles that keep it recognizable and consistent across communication and behavior.",
          price: "50,000 ₽",
          duration: "7 business days",
          includes: [
            "Formulating the brand's purpose.",
            "Defining core values and beliefs.",
            "Describing the brand's character and personality traits.",
            "Formulating the brand's behavioral principles.",
            "Developing Tone of Voice principles.",
            "Communication examples: how the brand talks and how it doesn't.",
            "Examples of applying the brand's character in typical customer-facing situations.",
            "A final document with rules for applying the brand core.",
            "One meeting to discuss and sign off on the result.",
          ],
          result: "A practical brand-character platform that a marketer, copywriter, designer, or other contractor can actually use.",
          limitations: [
            "Up to 16 hours of work.",
            "Based on existing information about the brand and its positioning.",
            "An archetype is used only as a supporting tool, when it genuinely helps.",
            "Logo design, visual identity, naming, and a full brand book are not included.",
            "A full communication guide for every channel and situation is scoped as separate work.",
          ],
        },
        {
          code: "04",
          title: "Brand Messaging System",
          desc: "We build a system of key messages that explains the brand's value, communicates its differences, and adapts across audience segments.",
          price: "40,000 ₽",
          duration: "5 business days",
          includes: [
            "Formulating the brand's core message.",
            "Developing up to 3 key messages.",
            "Defining reasons to choose the brand.",
            "Formulating proof points for key promises, based on available facts.",
            "Adapting messages for two audience segments.",
            "Example phrasing, headlines, and short copy.",
            "Adaptation principles for the website and social media.",
            "A final messaging table for the marketer or copywriter to work from.",
          ],
          result: "A structured messaging system usable for content, marketing materials, and audience communication.",
          limitations: [
            "Up to 12 hours of work.",
            "Based on an already agreed brand positioning.",
            "Full website copy, a content plan, ad campaigns, and large volumes of finished copy are not included.",
            "If positioning and brand core haven't been developed yet, they need to be ordered separately or provided as finished materials.",
          ],
        },
      ],
      bundle: {
        title: "Full Brand Strategy",
        desc: "We bring market and audience research, positioning, brand character, and the messaging system together into a single strategy to guide the business and its contractors.",
        price: "170,000 ₽",
        duration: "15–20 business days",
        includes: [
          "Desk research on audience and competitive landscape at the scope described in Positioning & Audience.",
          "Positioning statement and value proposition.",
          "Brand core: purpose, values, character, and behavioral principles.",
          "Tone of Voice principles and communication examples.",
          "Development of the key messaging system.",
          "Connecting positioning, character, and communication into one system.",
          "Recommendations for applying the strategy in marketing and communication.",
          "A final strategy document.",
          "A separate presentation of key decisions for the team or leadership.",
          "An opening strategy kickoff meeting.",
          "A final presentation, up to 90 minutes.",
          "One consolidated round of revisions on the final materials.",
        ],
        result: "One brand strategy with the reasoning behind key decisions and recommendations for further work.",
        limitations: [
          "Up to 48 hours of total work.",
          "One brand, one market category, one primary business scenario.",
          "Uses public sources and materials provided by the client.",
          "Field research, quantitative surveys, respondent recruitment, visual identity, logo, layout, and production of marketing materials are not included.",
          "Additional research or complex brand architecture, if needed, is scoped and priced separately.",
        ],
        savingsNote: "30,000 ₽ cheaper than the sum of the individual services.",
      },
      includesLabel: "What's included",
      resultLabel: "Result for the client",
      limitationsLabel: "Limitations",
      detailsLabel: "Scope of work",
      optionsHeading: "Add-on options",
      options: [
        {
          label: "Additional audience segment",
          price: "15,000 ₽",
          desc: "Analysis of one additional segment within the already agreed research. Doesn't include new field research or expanding the market category.",
        },
        {
          label: "In-depth interviews",
          price: "35,000 ₽",
          desc: "Conducting and analyzing 3–5 interviews with target audience representatives, drawing conclusions, and comparing results against current hypotheses. Respondent sourcing, incentives, and other external costs are billed separately. Respondent availability and interview format need to be agreed before work starts.",
        },
        {
          label: "Brand architecture",
          price: "from 50,000 ₽",
          desc: "Defining how the main brand, sub-brands, and individual business formats relate to one another. Final price depends on the number of brands, formats, and the complexity of their relationships.",
        },
        {
          label: "Rush delivery",
          price: "+30% to the service price",
          desc: "Available only once team availability is confirmed and a shorter timeline is agreed. The exact reduction in timeline is discussed separately, not guaranteed in advance.",
        },
        {
          label: "Extra round of revisions",
          price: "10,000 ₽",
          desc: "One additional consolidated list of comments within a previously agreed brief. New tasks and changes to the original requirements are scoped separately.",
        },
      ],
      termsHeading: "Terms of work",
      terms: [
        "Base prices are calculated for one brand, one market category, and an agreed scope of work.",
        "The timeline starts after payment and after the client provides the necessary materials.",
        "The price covers only the scope stated in the service description.",
        "One round of revisions means one consolidated list of comments from the client.",
        "Delays in providing information or sign-off can push the timeline back.",
        "Additional research, respondent costs, paid databases, and outside contractors are billed separately unless included in the agreed scope.",
        "Visual identity, logo, design system, layout, and production of materials are not part of the strategy services. These can be arranged with partners if needed.",
      ],
    },
    servicesPage: {
      heading: "What I actually",
      headingMark: "do",
      intro: "In a world that rewards distinction, standing still isn't an option. A brand's character can become a catalyst for change — helping it stand out and sell with more confidence. CHLORINE blends sharp analysis and creative instinct to make what your brand should become something people can feel today.",
      back: "← Back home",
      moreLabel: "More about services",
    },
    process: {
      heading: "Process",
      steps: [
        { n: "01", title: "Discovery", desc: "Brand, business, audience, and goal. We break down what's already there — how the brand looks and is perceived today." },
        { n: "02", title: "Audit", desc: "We find the gaps: where the brand loses its character, where the visual system isn't working, what's holding it back. We shape the growth points." },
        { n: "03", title: "Direction", desc: "We define where the brand should go. References, visual territory, moodboard, principles, and the character of the future system." },
        { n: "04", title: "System", desc: "We translate the direction into a working visual system: identity, typography, color, graphic devices, motion, and the rules for using them." },
        { n: "05", title: "Execution", desc: "We bring the system into real tasks: campaigns, key visuals, website, social, shoots, print materials, and other touchpoints." },
        { n: "06", title: "Art Direction", desc: "We make sure the visual direction holds through execution. Working with designers, photographers, production, and everyone else on the project." },
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
      projectLabel: "Project",
      items: [
        { category: "Gastro café", title: "SOYKA NAPELA", year: "2026", slug: "soyka-napela", hideProjectName: true },
        { category: "Chain rebrand", title: "LEPIM I VARIM", year: "2026", slug: "lepim-i-varim", hideProjectName: true },
        { category: "Brand strategy", title: "BISTRO IN A SLEEPER DISTRICT (CONCEPT)", year: "2026", slug: "bistro-spalny-rayon" },
      ],
    },
    workPage: {
      heading: "Work",
      headingMark: "",
      intro: "Case studies land here as they wrap — filter by type or just browse everything.",
      back: "← Back home",
    },
    cases: [
      {
        slug: "soyka-napela",
        category: "Gastro café",
        title: "SOYKA NAPELA",
        subtitle: "Case",
        year: "2026",
        role: "Rebrand: brand strategy, visual identity, communication",
        sections: [
          {
            eyebrow: "Brand",
            heading: "Brand",
            body: [
              "Soyka Napela is a gastro-café on Krasnaya Presnya. The project went through a closure in 2020 and a change of its original format.",
              "The brand needed to move from the familiar image of a coffee shop to a more cohesive gastronomic project.",
            ],
          },
          {
            eyebrow: "Problem",
            heading: "Problem",
            body: [
              "The project was gradually losing relevance, still living inside a concept that no longer matched where it had grown. Its core audience skewed older, and the brand needed to win over a younger audience and become relevant and appealing to them again.",
              "The task: revive the brand while keeping its recognizable name, but fully rethinking what it could be today.",
            ],
          },
          {
            eyebrow: "Insight",
            heading: "Insight",
            body: [
              "Mood, plans, and the people around you change over the course of a day — and so does the reason someone comes to Soyka. One place can hold completely different moments and bring people together.",
            ],
          },
          {
            eyebrow: "Belief",
            heading: "Now is the time",
            body: [],
          },
          {
            eyebrow: "Concept",
            heading: "Concept",
            body: [
              "During the rebrand, removed the bird imagery and moved away from the old concept's literal language. Kept the phrase \"now is the time\" from the old neon sign and made it the foundation of the new brand.",
              "The focus shifted from the bird to the moment — to what's happening right here, right now. Rebuilt Soyka's character and communication around that idea.",
            ],
          },
          {
            eyebrow: "Visual",
            heading: "Visual",
            body: [
              "First photo for the upcoming collage.",
            ],
            images: ["/work/soyka-napela/01.jpg"],
          },
        ],
      },
      {
        slug: "lepim-i-varim",
        category: "Chain rebrand",
        title: "LEPIM I VARIM",
        subtitle: "Case",
        year: "2026",
        role: "Rebrand: brand strategy, visual identity, franchise standard",
        sections: [
          {
            eyebrow: "Brand",
            heading: "Brand",
            body: [
              "Lepim i Varim is a dumpling chain that grew from a single spot on Stoleshnikov Lane, opened on November 15, 2015. The founder chose Moscow's most expensive street on purpose: a dumpling joint from unknown young people, somewhere nobody expected one, was a statement in itself.",
              "One thing set the project apart — hand-shaping dumplings in full view of the guest. Today the chain has grown to 67 locations across Russia, Belarus, Kazakhstan, and the UAE, and has run as a franchise since 2018.",
            ],
          },
          {
            eyebrow: "Problem",
            heading: "Problem",
            body: [
              "The chain grew, but the brand stayed exactly where it started: no ideological shift happened over all these years.",
              "Hand-shaping quietly disappeared from locations along with the growth — the one thing that made Lepim i Varim itself. The brand's name opens with a verb, a promise of action, and that action stopped happening.",
              "At the same time, locations stopped resembling each other. It wasn't about different spaces or neighborhoods: there was no unified signage standard, no clear rules at all. Locations were opened by people with no design background — they didn't see the mistakes, or didn't count them as mistakes. On top of that, a dozen promotional messages piled up, shouting from every surface.",
              "Altogether it read as a careless place. The coziness had nearly vanished, and everything rested on one thing — the dumplings everyone still remembered.",
              "The task: give the brand back its look and its action. Put hand-shaping back on location in a way that pays for itself, clear out the visual noise, and build one standard any partner could follow.",
            ],
          },
          {
            eyebrow: "Insight",
            heading: "Insight",
            body: [
              "The brand survived on memory. Through years of random signage, mismatched decor, and promotional noise, what kept the guest was the thought of those dumplings — the kind shaped at home. The memory of home did the work the location no longer proved. That's a resource with a shelf life.",
            ],
          },
          {
            eyebrow: "Belief",
            heading: "We shape. We cook. Like home.",
            body: [],
          },
          {
            eyebrow: "Concept",
            heading: "Concept",
            body: [
              "Brought hand-shaping back to every location and rebuilt its economics so it worked as part of production, not as a display window.",
              "Cut the noise: instead of a dozen messages competing for attention, one thing remained at each location — what happens behind the glass.",
              "Locked down what the chain never had: a signage standard, rules for how a location looks, one consistent style. A partner now opens a location by the book, not by taste, and a mistake gets caught before it becomes signage.",
              "The name describes what happens inside again — and the feeling of home the brand had run on for all these years stopped being just a memory.",
            ],
          },
          {
            eyebrow: "Visual",
            heading: "Visual",
            body: [
              "Project photography will go here.",
            ],
          },
        ],
      },
      {
        slug: "bistro-spalny-rayon",
        category: "Brand strategy",
        title: "BISTRO IN A SLEEPER DISTRICT (CONCEPT)",
        subtitle: "Brand strategy and visual language for a bistro in a sleeper district, built before it opens",
        year: "2026",
        role: "Brand strategy, research-based positioning, visual language for social media pre-launch",
        hideCategoryEyebrow: true,
        sections: [
          {
            eyebrow: "Signal",
            heading: "Work up to the opening, and only that far",
            body: [
              "The client already made the call to open a bistro in a sleeper district. The agency's job is to build the concept on data and prepare the visual language the venue will launch on social media with, ahead of opening. Construction, day-to-day operations, and the venue's future stay outside the agency's scope.",
              "Constraints: a dense district, weak transit access, a working- and middle-class audience, a limited renovation budget.",
            ],
          },
          {
            eyebrow: "Insight",
            heading: "Research as the core of the case",
            body: [
              "Research ran across five blocks — audience, competition, behavior patterns, format economics, trends — each backed by sources. Below are only the findings that actually changed a decision.",
            ],
          },
          {
            eyebrow: "Insight 1",
            heading: "Transit isolation as an advantage",
            body: [
              "Chains give sleeper districts speed, supermarkets give them proximity. What's missing is the \"third place\" — somewhere worth staying. Poor transit access only sharpens that demand: it's hard for residents to travel downtown for quality, so a good place nearby captures that demand with no real alternative.",
              "Rejected: positioning as \"we're on par with downtown\" — in favor of \"downtown just moved next door.\"",
            ],
          },
          {
            eyebrow: "Insight 2",
            heading: "Cheap renovation as brand honesty",
            body: [
              "The audience's income and the Everyman archetype ruled out a polished design — it reads as built for outsiders. Visible frugality — patched spots, mismatched tile, reused materials — reads as the brand's honesty, a deliberate design choice.",
              "Rejected: expensive vintage-furniture replicas — in favor of real secondhand vintage, reupholstered by hand.",
            ],
          },
          {
            eyebrow: "Insight 3",
            heading: "The building dictates the aesthetic",
            body: [
              "The district offered rich historical material — an 1886 tram pavilion, an academy, an arboretum — but the actual building the bistro will occupy is a standard Soviet block (5–9 stories). Being honest to the architecture is part of the same principle as the renovation budget.",
              "Rejected: a pre-revolutionary / art nouveau aesthetic as the interior's basis — in favor of one honest to the Soviet building; the history stayed on as a botanical thread, told through Soviet agronomic language.",
            ],
          },
          {
            eyebrow: "Insight 4",
            heading: "A corner shop solves a real market barrier",
            body: [
              "Small producers run into chains' operational barriers, while their product already meets every quality bar — a real, documented problem. A \"curated shelf inside the bistro\" format solves it without borrowing someone else's precedent.",
              "Rejected: a clean retail mini-market in a wellness-startup style — too expensive and too polished for the archetype and the audience.",
            ],
          },
          {
            eyebrow: "Concept",
            heading: "From insights to positioning",
            body: [
              "Purpose: residents of a sleeper district deserve the same attention as downtown, without having to go there.",
              "Archetype: Everyman + Caregiver.",
              "Positioning: \"A place near home worth staying in — priced like takeout, quality like downtown.\"",
              "Zoning: a small grocery corner + a family zone + a corner for grandparents + a work zone — one place for every generation in the district.",
            ],
          },
          {
            eyebrow: "Visual",
            heading: "A prompt library, ready to go",
            body: [
              "The style has been translated into a generation-ready prompt library covering every detail — furniture, tile, signage, ceramics, the deli fridge, the bathroom, hardware. Status: prompts are ready, generating the visuals is next.",
            ],
          },
          {
            eyebrow: "Result",
            heading: "Preparing for launch",
            body: [
              "The result of this stage is a finished package: a brand strategy and visual language ready to launch on social media before opening. The opening itself stays outside the agency's scope.",
              "The bistro is still in pre-launch preparation — opening is still ahead.",
            ],
          },
        ],
      },
    ],
    caseView: {
      back: "← All work",
      roleLabel: "Scope",
    },
    about: {
      heading: "About",
      bio: [
        "CHLORINE is the work of brand manager Irina Fedorova.",
        "Finding the character inside them. Adding tension. Changing how they feel.",
        "I came into branding from business, and watched strong products lose their value the moment they became indistinguishable from a dozen similar offers.",
        "Being good isn't enough for a product today. It needs character — in what the brand says, how it looks, and the feeling it leaves behind.",
        "CHLORINE helps small independent brands with their own production — jewelry, clothing, local product lines — cut through the confusion in how they talk about themselves, and say it in a way that's easier to sell.",
      ],
    },
    cta: {
      line1: "TELL ME WHAT'S GOING ON WITH YOUR BRAND.",
      line2: "I'LL REPLY WITH A SCOPE ESTIMATE THE SAME DAY.",
      button: "Message on Telegram",
      emailLabel: "or by email",
    },
    footer: {
      role: "Brand marketing / product / marketing",
      nav: "Navigation",
      contact: "Contact",
      work: "Portfolio",
      location: "Moscow — worldwide",
    },
  },
};
