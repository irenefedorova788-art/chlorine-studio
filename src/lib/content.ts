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
  /** Hide the project name on the card — used for CHLORINE itself, since the header logo already names it. */
  hideProjectName?: boolean;
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
  services: { heading: string; intro: string[]; items: ServiceItem[] };
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
          title: "Диагностика позиционирования",
          desc: "Короткий разбор того, что мешает клиентам вас замечать и запоминать.",
          long: "Быстрый, сфокусированный разбор: как бренд выглядит и звучит сейчас, где он теряется среди похожих и что конкретно мешает продавать. Формат и стоимость обсуждаем отдельно — это вход, рассчитанный на то, чтобы попробовать без большого решения.",
          includes: [
            "Разбор позиционирования и сообщения",
            "Точки, где бренд теряется среди конкурентов",
            "Конкретные точки роста",
            "Короткий формат, без крупного бюджета",
          ],
        },
        {
          code: "02",
          title: "Спринт на задачу",
          desc: "Переупаковка сообщения или позиционирование под запуск — точечно и быстро.",
          long: "Один конкретный результат за ограниченный срок: переупаковать сообщение, поставить позиционирование под запуск новой линейки или коллекции, разобраться с одним слабым местом в бренде — без пересборки всего с нуля.",
          includes: [
            "Одна конкретная задача — один результат",
            "Переупаковка сообщения или позиционирования",
            "Подготовка под запуск или коллекцию",
            "Ограниченный, заранее понятный срок",
          ],
        },
        {
          code: "03",
          title: "Комплексная стратегия",
          desc: "Полная работа с брендом — по запросу, после первого разговора.",
          long: "Если после диагностики или спринта понятно, что нужна работа над брендом целиком — от позиционирования до визуальной системы, — собираем это в комплексную стратегию. Не отправная точка, а следующий шаг, когда он на самом деле нужен.",
          includes: [
            "Позиционирование и платформа бренда",
            "Визуальная система и её применение",
            "Tone of voice и коммуникация",
            "Формат обсуждается индивидуально",
          ],
        },
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
        { category: "Бренд-платформа", title: "CHLORINE", year: "2026", slug: "chlorine", hideProjectName: true },
        { category: "Гастрокофейня", title: "СОЙКА НАПЕЛА", year: "2026", slug: "soyka-napela", hideProjectName: true },
        { category: "Ребрендинг сети", title: "ЛЕПИМ И ВАРИМ", year: "2026", slug: "lepim-i-varim", hideProjectName: true },
        { category: "Бренд-стратегия", title: "БИСТРО В СПАЛЬНОМ РАЙОНЕ (КОНЦЕПТ)", year: "2026", slug: "bistro-spalny-rayon" },
        { category: "Ребрендинг (концепт)", title: "РЯДОМ", year: "2026", slug: "ryadom" },
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
        slug: "chlorine",
        category: "Бренд-платформа",
        title: "CHLORINE",
        subtitle: "Бренд независимого арт-директора, сделанный по тем же правилам, что и бренды для клиентов",
        year: "2026",
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
              "CHLORINE — буквальный перевод слова «хлор». Название родилось из наблюдения на одном из проектов, где я работала: рекламного шума было так много, что это напоминало Москву 2000-х — вывески и баннеры кричали из каждого угла, без всякой системы, и это создавало ощущение мусора и анархии, а не бренда.",
              "Пришло время убраться. С чистотой прочнее всего ассоциируется хлор — то, чем вымывают всё лишнее. В этом и смысл имени: возможность начать заново, с чистого листа — рестарт.",
              "На этом чистом листе уже выстраивается настоящий характер — понятный целевой аудитории и рассчитанный на будущее. Когда у компании наступают трудные времена, именно такой ясный бренд её поддерживает, потому что модель полностью прозрачна.",
            ],
          },
          {
            eyebrow: "Визуальная система",
            heading: "Один акцент, никакого шума",
            body: [
              "Белый фон — это чистый лист и момент, когда мы даём себе шанс начать всё с начала. Пространство, в котором ещё ничего не определено и в котором может появиться что угодно. Белое — не обязательно начало. Иногда это то, что стёрлось, было выстирано хлором и оставило после себя чистый лист.",
              "Но кто знает, что было на нём до этого?",
              "Синие пятна на этом фоне — след от чего-то пережитого и одновременно сгустки мыслей, которые растеклись по поверхности и остались на ней.",
              "Красный в типографике — живой, резкий, почти наглый. Он говорит громко и прямо, иногда даже грубо. Это внешний голос, то, что мы позволяем себе показать миру.",
              "Но за этой красноречивостью остаётся глубина — голубизна всего того, что не было сказано. Всё то сложное, тихое и немного меланхоличное пространство, из которого эти слова появились.",
              "Эта интерпретация нужна для другого — чтобы за визуальным решением стояло внутреннее ощущение проекта. Когда нужно принимать десятки решений дальше: какой будет типографика, фотография, композиция, материал, движение, какой цвет убрать, а какой оставить, — у нас появляется точка отсчёта.",
              "Можно просто сказать: «мне нравится голубой с красным». А можно понимать, какое именно напряжение в этом сочетании тебе нравится, и пытаться сохранить его в остальных элементах.",
              "Поэтому это не попытка доказать, что у каждого пятна есть сакральный смысл. Это способ зафиксировать интуицию и превратить её в систему.",
              "И если человек вообще ничего этого не считывает — это тоже нормально. Дизайн не обязан передавать весь замысел буквально. Если он работает только после объяснительной записки, значит, проблема уже в самом дизайне. Концепция должна помогать ему быть цельным, а не заменять собой его восприятие.",
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
        slug: "soyka-napela",
        category: "Гастрокофейня",
        title: "СОЙКА НАПЕЛА",
        subtitle: "Переход от привычного образа кофейни к цельному гастрономическому проекту",
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
              "Фотографии проекта появятся здесь.",
            ],
          },
        ],
      },
      {
        slug: "lepim-i-varim",
        category: "Ребрендинг сети",
        title: "ЛЕПИМ И ВАРИМ",
        subtitle: "Ребрендинг сети: возвращение фирменного действия и единого визуального стандарта",
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
      {
        slug: "ryadom",
        category: "Ребрендинг (концепт)",
        title: "РЯДОМ",
        subtitle: "Несогласованный концепт: как могла бы звучать аптечная сеть, если бы за характер отвечал бренд, а не вывеска",
        year: "2026",
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
          title: "Positioning Diagnostic",
          desc: "A quick read on what's keeping customers from noticing and remembering you.",
          long: "A fast, focused read on how the brand looks and sounds today, where it's getting lost among similar ones, and what's actually getting in the way of sales. Format and price are discussed separately — this is an entry point built to try without a big commitment.",
          includes: [
            "Positioning and messaging review",
            "Where the brand gets lost among competitors",
            "Concrete growth points",
            "Short format, no large budget",
          ],
        },
        {
          code: "02",
          title: "Task Sprint",
          desc: "Repackaging the message or positioning for a launch — targeted and fast.",
          long: "One concrete result on a fixed timeline: repackage the message, set positioning for a new line or collection launch, fix one weak spot in the brand — without rebuilding everything from scratch.",
          includes: [
            "One specific task — one result",
            "Message or positioning repackaging",
            "Prep for a launch or collection",
            "A fixed, known-upfront timeline",
          ],
        },
        {
          code: "03",
          title: "Full Strategy",
          desc: "Complete brand work — by request, after a first conversation.",
          long: "If the diagnostic or sprint shows the brand needs work end to end — from positioning to visual system — we bring it together into a full strategy. Not a starting point, but the next step, when it's actually needed.",
          includes: [
            "Positioning and brand platform",
            "Visual system and its application",
            "Tone of voice and communication",
            "Format discussed individually",
          ],
        },
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
        { category: "Brand platform", title: "CHLORINE", year: "2026", slug: "chlorine", hideProjectName: true },
        { category: "Gastro café", title: "SOYKA NAPELA", year: "2026", slug: "soyka-napela", hideProjectName: true },
        { category: "Chain rebrand", title: "LEPIM I VARIM", year: "2026", slug: "lepim-i-varim", hideProjectName: true },
        { category: "Brand strategy", title: "BISTRO IN A SLEEPER DISTRICT (CONCEPT)", year: "2026", slug: "bistro-spalny-rayon" },
        { category: "Rebrand (concept)", title: "RYADOM", year: "2026", slug: "ryadom" },
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
        slug: "chlorine",
        category: "Brand platform",
        title: "CHLORINE",
        subtitle: "An independent art director's own brand, built by the same rules used for client work",
        year: "2026",
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
              "CHLORINE is a literal translation of the Russian word for chlorine. The name came from something I noticed at one of the companies I worked at: so much advertising noise that it felt like Moscow in the 2000s — signs and banners shouting from every corner, with no system to any of it. It read as clutter and anarchy, not a brand.",
              "It was time to clean up. Nothing reads as \"clean\" quite like chlorine — the thing you use to wash everything else away. That's the meaning behind the name: a chance to start over, with a blank page — a restart.",
              "Real character gets built on that blank page — legible to the target audience and built to last. When a company hits hard times, a brand like that is what holds it up, because the model behind it is completely clear.",
            ],
          },
          {
            eyebrow: "Visual system",
            heading: "One accent, no noise",
            body: [
              "The white background is a blank page — the moment we let ourselves start over. A space where nothing is decided yet, where anything can still appear. White isn't necessarily a beginning. Sometimes it's what got erased — washed out by chlorine, leaving a clean page behind.",
              "But who knows what was on it before?",
              "The blue marks on that background are traces of something lived through, and at the same time clusters of thought that spread across the surface and stayed there.",
              "Red in the typography is alive, sharp, almost brazen. It speaks loudly and directly, sometimes even bluntly. It's the outward voice — what we let ourselves show the world.",
              "But behind that eloquence there's depth — the blue of everything left unsaid. All the complicated, quiet, slightly melancholic space these words came from.",
              "This reading exists for a different reason — so a felt sense of the project sits behind the visual decision. When dozens of decisions follow — what the typography looks like, the photography, the composition, the material, the motion, which color to drop and which to keep — it gives us a point of reference.",
              "You can just say: \"I like blue with red.\" Or you can understand exactly what tension in that combination you like, and try to hold onto it across every other element.",
              "So this isn't an attempt to prove that every mark carries some sacred meaning. It's a way of pinning down intuition and turning it into a system.",
              "And if someone reads none of this into it — that's fine too. Design doesn't have to spell out the whole idea literally. If it only works with an explanatory note attached, the problem is already in the design. The concept should help it hold together, not stand in for how it's perceived.",
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
        slug: "soyka-napela",
        category: "Gastro café",
        title: "SOYKA NAPELA",
        subtitle: "Moving from the familiar coffee-shop image to a cohesive gastro project",
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
              "Project photography will go here.",
            ],
          },
        ],
      },
      {
        slug: "lepim-i-varim",
        category: "Chain rebrand",
        title: "LEPIM I VARIM",
        subtitle: "Rebranding the chain: bringing back its signature action and one visual standard",
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
      {
        slug: "ryadom",
        category: "Rebrand (concept)",
        title: "RYADOM",
        subtitle: "An unsolicited concept: what a pharmacy chain could sound like if the brand carried the character, not the signage",
        year: "2026",
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
