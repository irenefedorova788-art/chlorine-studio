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
  work: { heading: string; note: string; noteLink: string; items: WorkItem[]; soon: string; view: string; all: string; moreLabel: string; projectLabel: string };
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
      eyebrow: "УСЛУГИ",
      heading: "Чем именно я",
      headingMark: "помогаю",
      intro: "Три формата, с которых можно начать, — от короткого разбора до полной работы над брендом. Комплексная стратегия — не отправная точка, а следующий шаг, если он действительно нужен.",
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
        { category: "Гастрокофейня", title: "СОЙКА НАПЕЛА", year: "~3 года", slug: "soyka-napela", hideProjectName: true },
        { category: "Ребрендинг сети", title: "ЛЕПИМ И ВАРИМ", year: "2026", slug: "lepim-i-varim", hideProjectName: true },
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
        slug: "soyka-napela",
        category: "Гастрокофейня",
        title: "СОЙКА НАПЕЛА",
        subtitle: "Поиск своего гостя через продукт, культуру и среду",
        year: "~3 года",
        role: "Управление заведением: операционные процессы, команда, финансы, бренд и его развитие",
        sections: [
          {
            eyebrow: "О проекте",
            heading: "Гастрокофейня на стыке кофе, музыки и искусства",
            body: [
              "«Сойка Напела» — гастрокофейня, где кофе и миксология соединяются с искусством, музыкой и экспериментами со вкусами. Здесь можно было попробовать напиток, который отсылает к фильму, выставке или определённой эпохе, увидеть работы художника, услышать музыку, которую редко встретишь в заведениях, и просто провести время среди людей со схожим вкусом.",
              "Я работала с проектом около трёх лет. Формально роль была связана с управлением заведением, но в зоне ответственности одновременно находились операционные процессы, команда, финансовые показатели, бренд и его развитие. В портфолио рассматриваю этот проект прежде всего как опыт бренд-менеджмента.",
            ],
          },
          {
            eyebrow: "Проблема",
            heading: "Заведение на грани закрытия",
            body: [
              "Когда мы пришли в проект, заведение находилось в состоянии, близком к закрытию: не было стабильного потока гостей, команда только формировалась, шёл ремонт, а существующая аудитория была небольшой и преимущественно старше 50 лет.",
              "Нужно было не просто увеличить посещаемость, а понять, кто такая «Сойка», для кого она может быть интересна и почему человек должен захотеть сюда вернуться.",
            ],
          },
          {
            eyebrow: "Исследование",
            heading: "Что заставляет людей возвращаться",
            body: [
              "Начала с аудитории и наблюдения за тем, почему люди вообще приходят в заведение и что заставляет их возвращаться. Постепенно стало понятно, что сильная сторона «Сойки» находится не только в кофе: людям нравилась возможность прийти в обычный день и получить неожиданное впечатление — необычный вкус, знакомую музыку, интересный разговор, новую выставку или напиток, который отсылает к совершенно другому культурному контексту.",
              "Мы не стали пытаться создавать искусственные «фишки» в обслуживании. Было важнее сохранить простое человеческое общение и честно показывать, что происходит внутри проекта.",
            ],
          },
          {
            eyebrow: "Стратегия",
            heading: "Найти своего гостя и стать ему другом",
            body: [
              "Мы сформулировали простую идею: найти своего гостя и стать для него хорошим другом — настолько, насколько это вообще возможно для заведения. Таким гостем мы видели активного, любопытного человека со своим вкусом: людей из творческих индустрий, кино, искусства и других культурных сфер, которым интересно пробовать новое и замечать детали.",
              "Дальше мы начали строить вокруг этого характера саму среду: меняли музыку, экспериментировали с напитками, работали с художниками, запускали коллаборации и постепенно выстраивали коммуникацию вокруг продукта и людей, которые его создают.",
            ],
          },
          {
            eyebrow: "Что я сделала",
            heading: "Продукт, культура и коммуникация",
            body: [
              "Продукт как часть бренда. Мы постоянно экспериментировали с напитками и использовали их как способ рассказывать истории. Для коллаборации с Центром «Зотов» создали напиток «Дзига», вдохновлённый режиссёром Дзигой Вертовым и эстетикой 1920-х: строгая вишня, кофе и розмарин, выдержка с ароматом старых книг, подача с сахарной бумагой с интертитром из фильма.",
              "Культура и коллаборации. Я инициировала сотрудничество с Центром «Зотов», увидев культурное и визуальное совпадение между проектами. Вместе с внутренним маркетологом сделали кросс-промо: билеты на выставку со стороны «Сойки», купоны на напитки со стороны «Зотова», совместная коммуникация в digital и офлайне, плюс «фотосушка» художников, связанная с выставкой. Также сотрудничали с музыкантами, барами, сидрерией и художниками — одна из художниц выставляла работы в заведении и подбирала цветовую палитру под пространство.",
              "Музыка как часть характера. Полностью пересобрали музыкальную среду: soft rock 70–80-х, Placebo и менее очевидные исполнители. Музыка стала не фоном, а частью того самого ощущения «своего места».",
              "Работа с блогерами и сообществами. Самостоятельно искала авторов и проекты, близкие нам по вкусу, писала им и приглашала знакомиться с новыми продуктами — сначала бартерные интеграции, позже часть аудитории пришла органически. Отдельное направление — вечера алкоголя и запуски коктейлей с приглашёнными блогерами.",
              "Контент изнутри. Начали показывать не только готовый продукт, но и то, как он появляется: откуда возникает идея напитка, кто над ним работает, какие эксперименты происходят внутри. Это сделало коммуникацию более человеческой и дало аудитории почувствовать себя частью проекта.",
              "Digital-точки контакта. Сайт до этого практически не выполнял функцию продукта — перенесла туда электронное меню и разместила QR-коды на столиках, чтобы гость мог посмотреть меню с фотографиями и описанием. В чекбуках добавили ссылки на отзывы, другие заведения проекта и прямую обратную связь с управляющей.",
            ],
          },
          {
            eyebrow: "Результат",
            heading: "Выручка выросла на ~250%",
            body: [
              "За период работы над проектом выручка выросла примерно на 250% относительно исходного состояния. Но главным результатом стало изменение самой аудитории: в «Сойку» начали приходить молодые люди из творческих индустрий, в том числе представители кино. Они активно интересовались продуктом, замечали детали, давали обратную связь, фотографировали пространство и напитки и начали приводить своих людей.",
              "Сформировалось сообщество людей, которым действительно был близок характер проекта. Коллаборации с культурными площадками и художниками помогли закрепить это позиционирование, а часть сотрудничеств планировалось продолжать на постоянной основе.",
            ],
          },
          {
            eyebrow: "Итог",
            heading: "Бренд строится не вокруг картинки",
            body: [
              "Этот проект окончательно сформировал моё отношение к бренду: не нужно пытаться понравиться всем. Нужно понять, кто твой человек, дать ему достаточно причин узнать себя в бренде и потом последовательно поддерживать эту связь.",
              "«Сойка» стала для меня примером того, как бренд можно строить не вокруг одного визуального решения, а вокруг продукта, культуры, людей, музыки, истории и множества небольших деталей, которые вместе создают ощущение места.",
            ],
          },
        ],
      },
      {
        slug: "lepim-i-varim",
        category: "Ребрендинг сети",
        title: "ЛЕПИМ И ВАРИМ",
        subtitle: "Аудит маркетинговой стратегии для сети ресторанов",
        year: "2026",
        role: "Аудит бренд- и маркетинговой стратегии, CJM, бюджет, позиционирование",
        sections: [
          {
            eyebrow: "Контекст",
            heading: "Аудит вместо готовой стратегии",
            body: [
              "Внешнее агентство подготовило маркетинговую стратегию для сети ресторанов — целевая аудитория, каналы продвижения, рекомендации по бюджету, соцсети, визуальный ряд и брендинг на горизонт в 19 месяцев. Я сопоставила готовый документ с историей бренда, интервью основателя и реальным поведением гостей — не как формальность, а как проверку, выдержит ли стратегия столкновение с реальностью.",
            ],
          },
          {
            eyebrow: "Проблема 1",
            heading: "Архетип без доказательств",
            body: [
              "Стратегия подробно описывала архетип бренда — «Искатель»: любопытство, свобода, самостоятельность, подлинность, открытость. Но связь этого архетипа с реальной историей бренда и поведением гостей ничем не подтверждалась — он существовал отдельно от данных.",
            ],
          },
          {
            eyebrow: "Как решала",
            heading: "От гипотезы к CJM и обратной связи",
            body: [
              "Составила полную CJM — таблицу со всеми точками контакта и их POS-материалами. Провела опрос сотрудников. Настроила сбор обратной связи через QR-коды на точках с возможностью писать напрямую. На основе этих данных скорректировала архетип — вместо выборочного чтения отзывов.",
            ],
          },
          {
            eyebrow: "Проблема 2",
            heading: "Бюджет не совпадал с реальностью бизнеса",
            body: [
              "Бюджеты, заложенные в стратегии, не были согласованы с реальностью компании: суммы не соответствовали тому, что бизнес мог себе позволить. Я пересчитала рекомендацию до 3–5% от выручки — нижней границы нормы для fast casual и retail F&B (стандартный ориентир 5–7%), осознанно сниженной под текущую фазу бренда, где главная задача — не рост любой ценой, а перестройка инфраструктуры: CRM, push, брендбук, сайт.",
              "При выручке 2,23 млрд ₽ это 67–112 млн ₽ в год на маркетинг группы, с чёткой дисциплиной по статьям: 45% на digital, 20% на PR и контент, 20% на активации в рознице, 15% на CRM, аналитику и агентства — каждая статья закрывает конкретный KPI из таблицы целей, без «брендовых» вложений без измеримого результата.",
            ],
          },
          {
            eyebrow: "Проблема 3",
            heading: "Скидки против принципов бренда",
            body: [
              "Сама стратегия декларировала уход от акций как принцип бренда — но маркетинговый план при этом строился на постоянных скидках. Это внутреннее противоречие: скидочные механики фактически стали регулярной коммуникацией, и было важно проверить, приводят ли они новых гостей или просто снижают средний чек уже существующих.",
            ],
          },
          {
            eyebrow: "Решение",
            heading: "От истории бренда к реальным точкам контакта",
            body: [
              "Вместо того чтобы принять готовую стратегию как есть, я предложила пройти путь от начала — с истории бренда, которая в исходном документе не упоминалась вовсе: история бренда → поведение гостей → продукт → коммуникация → реальные точки контакта.",
              "Если архетип подтверждается этой цепочкой — он становится рабочим инструментом. Если нет — сначала корректируется гипотеза, и только потом вокруг неё выстраивается коммуникация.",
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
        "We're living in a moment when brands compete not just for attention, but for volume. Colors get brighter, content gets faster, visual solutions get more complex — and the attempts to stand out sometimes tip into absurdity. In all that excess, it's easy to lose the one thing that matters most: your own character.",
        "It's time for a clean-up. To find your style, your voice, and build the brand around what actually belongs to it.",
      ],
      cta: "Start a project",
    },
    services: {
      heading: "Services",
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
      eyebrow: "SERVICES",
      heading: "What I actually",
      headingMark: "do",
      intro: "Three formats to start with — from a quick read to full brand work. Full strategy isn't the starting point, it's the next step, when it's actually needed.",
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
        { category: "Gastro café", title: "SOYKA NAPELA", year: "~3 years", slug: "soyka-napela", hideProjectName: true },
        { category: "Chain rebrand", title: "LEPIM I VARIM", year: "2026", slug: "lepim-i-varim", hideProjectName: true },
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
        slug: "soyka-napela",
        category: "Gastro café",
        title: "SOYKA NAPELA",
        subtitle: "Finding your guest through product, culture, and atmosphere",
        year: "~3 years",
        role: "Running the venue: operations, team, finances, brand and its development",
        sections: [
          {
            eyebrow: "About the project",
            heading: "A gastro-café at the crossroads of coffee, music, and art",
            body: [
              "Soyka Napela is a gastro-café where coffee and mixology meet art, music, and flavor experiments. You could try a drink that referenced a film, an exhibition, or a specific era, see an artist's work, hear music you'd rarely encounter in a café, and simply spend time among people with a similar sensibility.",
              "I worked on the project for about three years. Formally, my role was running the venue, but I was responsible for operations, the team, financial performance, and the brand's development all at once. In this portfolio, I treat it above all as a brand management case.",
            ],
          },
          {
            eyebrow: "The problem",
            heading: "A venue on the edge of closing",
            body: [
              "When we came into the project, the venue was close to shutting down: no stable flow of guests, a team that was still forming, renovation underway, and a small existing audience mostly over 50.",
              "The task wasn't just to increase footfall — it was to understand who \"Soyka\" actually was, who it could matter to, and why someone would want to come back.",
            ],
          },
          {
            eyebrow: "Research",
            heading: "What actually brings people back",
            body: [
              "I started with the audience — watching why people came in at all and what made them return. It gradually became clear that Soyka's strength wasn't just the coffee: people liked the chance to walk in on an ordinary day and get an unexpected experience — an unusual flavor, familiar music, an interesting conversation, a new exhibition, or a drink referencing a completely different cultural context.",
              "We didn't try to invent artificial service \"tricks.\" It mattered more to keep plain human conversation and be honest about what was actually happening inside the project.",
            ],
          },
          {
            eyebrow: "Strategy",
            heading: "Find your guest, become their friend",
            body: [
              "We landed on a simple idea: find your guest and become a good friend to them — as much as a venue possibly can. We saw that guest as an active, curious person with their own taste: people from creative industries, film, art, and other cultural fields who enjoyed trying new things and noticing details.",
              "From there we built the environment itself around that character: changed the music, experimented with drinks, worked with artists, launched collaborations, and gradually built communication around the product and the people making it.",
            ],
          },
          {
            eyebrow: "What I did",
            heading: "Product, culture, and communication",
            body: [
              "Product as part of the brand. We constantly experimented with drinks and used them as a way to tell stories. For a collaboration with the Zotov Center, we created a drink called \"Dziga,\" inspired by director Dziga Vertov and 1920s aesthetics: tart cherry, coffee, and rosemary, aged to smell like old books, served with a sugar paper printed with an intertitle from one of his films.",
              "Culture and collaborations. I initiated the partnership with the Zotov Center after noticing a cultural and visual overlap between the two projects. Together with the in-house marketer, we ran a cross-promo: exhibition tickets from Soyka's side, drink coupons from Zotov's side, joint communication online and offline, plus an artists' \"photo dry-out\" tied to the exhibition. We also worked with musicians, bars, a cidery, and artists — one artist exhibited her work at the venue and helped choose the space's color palette.",
              "Music as part of the character. We rebuilt the musical environment from scratch: 70s–80s soft rock, Placebo, and less obvious names. Music stopped being background and became part of that specific feeling of \"your place.\"",
              "Working with creators and communities. I personally sought out authors and projects that matched our taste, reached out to them, and invited them to discover new products — mostly barter collaborations at first, with part of the audience arriving organically later on. A separate track was alcohol evenings and cocktail launches with invited creators.",
              "Content from the inside. We started showing not just the finished product but how it came together: where a drink's idea came from, who worked on it, what experiments were happening behind the scenes. That made the communication feel more human and let the audience feel part of the project.",
              "Digital touchpoints. The website barely functioned as a product before this — I moved the menu there and added QR codes on tables so guests could see it with photos and descriptions. Receipts got links to reviews, the project's other venues, and direct feedback to the manager.",
            ],
          },
          {
            eyebrow: "Result",
            heading: "Revenue grew by roughly 250%",
            body: [
              "Over the time I worked on the project, revenue grew by roughly 250% relative to where it started. But the main result, to me, was the shift in the audience itself: young people from creative industries, including film, started coming to Soyka. They engaged with the product, noticed details, gave feedback, photographed the space and the drinks, and started bringing their own people.",
              "It wasn't just more guests — a community formed around people who genuinely connected with the project's character. Collaborations with cultural venues and artists helped cement that positioning, and some partnerships were planned to continue on an ongoing basis.",
            ],
          },
          {
            eyebrow: "Takeaway",
            heading: "A brand isn't built around one picture",
            body: [
              "This project shaped how I think about brands for good: you don't need to try to please everyone. You need to understand who your person is, give them enough reasons to recognize themselves in the brand, and then consistently maintain that connection.",
              "Soyka became my example of how a brand can be built not around a single visual solution, but around product, culture, people, music, history, and the many small details that together create the feeling of a place.",
            ],
          },
        ],
      },
      {
        slug: "lepim-i-varim",
        category: "Chain rebrand",
        title: "LEPIM I VARIM",
        subtitle: "A marketing-strategy audit for a restaurant chain",
        year: "2026",
        role: "Brand and marketing strategy audit, CJM, budget, positioning",
        sections: [
          {
            eyebrow: "Context",
            heading: "An audit instead of a blank slate",
            body: [
              "An outside agency had put together a marketing strategy for a restaurant chain — target audience, promotion channels, budget recommendations, social media, visual identity, and branding over a 19-month horizon. I checked the finished document against the brand's history, an interview with the founder, and how guests actually behaved — not as a formality, but as a stress test for whether the strategy would survive contact with reality.",
            ],
          },
          {
            eyebrow: "Problem 1",
            heading: "An archetype with no evidence",
            body: [
              'The strategy described the brand archetype in detail — "The Explorer": curiosity, freedom, self-sufficiency, authenticity, openness. But the link between that archetype and the brand\'s actual history and guest behavior wasn\'t backed by anything — it existed apart from the data.',
            ],
          },
          {
            eyebrow: "How I solved it",
            heading: "From hypothesis to CJM and real feedback",
            body: [
              "I built a full customer journey map — a table of every touchpoint and its POS materials. Ran a staff survey. Set up feedback collection through QR codes at each location, letting guests write in directly. Used that data to correct the archetype, instead of reading a handful of reviews at random.",
            ],
          },
          {
            eyebrow: "Problem 2",
            heading: "A budget disconnected from the business's reality",
            body: [
              "The budgets built into the strategy hadn't been checked against the company's actual reality — the numbers didn't match what the business could afford. I recalculated the recommendation down to 3–5% of revenue — the lower bound of the norm for fast casual and retail F&B (the standard benchmark is 5–7%), deliberately scaled down for the brand's current phase, where the real task isn't growth at any cost but rebuilding infrastructure: CRM, push, brand book, website.",
              'At 2.23 billion ₽ in revenue, that\'s 67–112 million ₽ a year for group marketing, with clear discipline by line item: 45% to digital, 20% to PR and content, 20% to retail activations, 15% to CRM, analytics, and agencies — every line closes a specific KPI from the goals table, with no "brand" spending that can\'t be measured.',
            ],
          },
          {
            eyebrow: "Problem 3",
            heading: "Discounts working against the brand's own principles",
            body: [
              "The strategy itself declared moving away from promotions as a brand principle — yet the marketing plan was built on constant discounts. That's an internal contradiction: the discount mechanics had effectively become the regular communication, and it mattered to check whether they were bringing in new guests or simply lowering the average check of guests who were already coming.",
            ],
          },
          {
            eyebrow: "Solution",
            heading: "From brand history to real touchpoints",
            body: [
              "Instead of accepting the finished strategy as-is, I proposed starting over from the beginning — from the brand's history, which the original document never mentioned at all: brand history → guest behavior → product → communication → real touchpoints.",
              "If the archetype holds up against that chain, it becomes a working tool. If it doesn't, the hypothesis gets corrected first, and only then does the communication get built around it.",
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
