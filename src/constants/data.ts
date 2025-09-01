export const COMPANY_INFO = {
  name: 'AutoChladiče SK',
  tagline: 'Profesionálny servis',
  phone: '0905 262 430',
  email: 'fmosovsky@gmail.com',
  address: 'Galvaniho 3972/2A, Bratislava',
  workingHours: {
    weekdays: 'Po - Pi: 8:30 - 18:00',
    weekend: 'Sobota - Nedeľa: Zatvorené'
  }
} as const;

export const NAVIGATION_LINKS = [
  { href: '#services', label: 'Služby' },
  { href: '#features', label: 'O nás' },
  { href: '#testimonials', label: 'Referencie' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Kontakt' },
] as const;

export const SERVICES = [
  {
    title: 'Oprava autochladičov',
    description: 'Kompletný servis chladiacich systémov, oprava poškodených chladičov, výmena chladiacej kvapaliny a tlakové testovanie',
    detailedDescription: 'Špecializujeme sa na opravu všetkých typov autochladičov - od osobných áut po nákladné vozidlá. Naša práca zahŕňa diagnostiku, opravu netesností, výmenu poškodených častí a kompletnú údržbu chladiacich systémov.',
    features: ['Diagnostika chladiacich systémov', 'Oprava netesností', 'Výmena chladiacej kvapaliny', 'Tlakové testovanie', 'Čistenie a preplachovanie'],
    linkHref: '/blog/oprava-autochladicov-bratislava',
    linkText: 'Viac informácií',
    bgColor: 'bg-teal-600',
    rotation: 'right' as const,
    icon: '🔧'
  },
  {
    title: 'Spájkovanie hliníka',
    description: 'Profesionálne spájkovanie hliníka, spájkovanie hliníkových trubiek, oprava chladiacich systémov a klimatizácií',
    detailedDescription: 'Používame najnovšie technológie pre spájkovanie hliníka a hliníkových zliatin. Naša práca zahŕňa opravu chladičov, klimatizácií a výrobu hliníkových dielov podľa potreby.',
    features: ['Spájkovanie hliníkových trubiek', 'Oprava chladičov', 'Výroba hliníkových dielov', 'Oprava klimatizácií', 'Kontrola kvality'],
    linkHref: '/blog/spajkovanie-hlinika-bratislava',
    linkText: 'Viac informácií',
    bgColor: 'bg-emerald-600',
    rotation: 'left' as const,
    icon: '⚡'
  },
  {
    title: 'Preplachovanie chladičov',
    description: 'Komplexné preplachovanie a čistenie chladiacich systémov s modernými zariadeniami',
    detailedDescription: 'Profesionálne čistenie a preplachovanie chladiacich systémov pomocou špeciálnych chemikálií a moderných zariadení. Táto služba predĺži životnosť vášho chladiča.',
    features: ['Chemické čistenie', 'Tlakové preplachovanie', 'Odstránenie usadenín', 'Kontrola účinnosti', 'Odporúčania údržby'],
    linkHref: '/blog/diagnostika-autochladicov-bratislava',
    linkText: 'Viac informácií',
    bgColor: 'bg-gray-600',
    rotation: 'left' as const,
    icon: '🚿'
  }
] as const;

export const FEATURES = [
  {
    title: '15+ rokov praxe',
    description: 'Dlhoročné skúsenosti s opravou autochladičov',
    gradient: 'from-emerald-500 to-emerald-600'
  },
  {
    title: 'Moderné technológie',
    description: 'Najnovšie technológie zvárania hliníka',
    gradient: 'from-emerald-600 to-emerald-700'
  },
  {
    title: 'Rýchly servis',
    description: 'Expresné opravy s garancií kvality',
    gradient: 'from-emerald-400 to-emerald-500'
  },
  {
    title: 'Záruka kvality',
    description: 'Originálne materiály a záruka',
    gradient: 'from-emerald-700 to-emerald-800'
  }
] as const;

export const TESTIMONIALS = [
  {
    name: 'Peter Novák',
    role: 'Majiteľ autoservisu',
    content: 'Spolupracujeme s AutoChladiče SK už 5 rokov. Ich práca je vždy kvalitná a rýchla. Odporúčam všetkým.',
    rating: 5,
    date: '2024'
  },
  {
    name: 'Mária Kováčová',
    role: 'Súkromná osoba',
    content: 'Opravili mi chladič v mojom aute za jeden deň. Cena bola férová a práca perfektná. Určite sa vrátim.',
    rating: 5,
    date: '2024'
  },
  {
    name: 'Ján Svoboda',
    role: 'Taxikár',
    content: 'Mám flotilu 8 áut a všetky chladiče servisujem u nich. Spoľahlivosť a kvalita na prvom mieste.',
    rating: 5,
    date: '2024'
  }
] as const;

export const FAQ_ITEMS = [
  {
    question: 'Ako dlho trvá oprava chladiča?',
    answer: 'Štandardná oprava trvá 1-2 dni. Pri zložitejších prípadoch môže trvať až týždeň. Vždy vás informujeme o predpokladanom čase opravy.'
  },
  {
    question: 'Poskytujete záruku na opravy?',
    answer: 'Áno, poskytujeme záruku 12 mesiacov na všetky naše opravy a použité materiály. Záruka sa vzťahuje na kvalitu práce a použité diely.'
  },
  {
    question: 'Aké značky áut servisujete?',
    answer: 'Servisujeme všetky značky áut - od osobných áut po nákladné vozidlá. Máme skúsenosti s európskymi, ázijskými aj americkými značkami.'
  },
  {
    question: 'Môžete opraviť klimatizáciu?',
    answer: 'Áno, špecializujeme sa aj na opravu klimatizácií. Používame moderné diagnostické zariadenia a kvalitné náplne.'
  },
  {
    question: 'Ako sa objednať na servis?',
    answer: 'Môžete nás kontaktovať telefonicky na čísle 0905 262 430, emailom na fmosovsky@gmail.com alebo osobne v našej dielni na Galvaniho 3972/2A v Bratislave.'
  },
  {
    question: 'Aké sú vaše otváracie hodiny?',
    answer: 'Sme otvorení pondelok až piatok od 8:30 do 18:00. V sobotu a nedeľu sme zatvorení. Pri urgentných prípadoch môžeme dohodnúť individuálny termín.'
  }
] as const;

export const CONTACT_INFO = [
  {
    title: 'Telefón',
    value: COMPANY_INFO.phone,
    gradient: 'from-emerald-500 to-emerald-600'
  },
  {
    title: 'Email',
    value: COMPANY_INFO.email,
    gradient: 'from-emerald-600 to-emerald-700'
  },
  {
    title: 'Adresa',
    value: COMPANY_INFO.address,
    gradient: 'from-emerald-400 to-emerald-500'
  },
  {
    title: 'Otváracie hodiny',
    value: COMPANY_INFO.workingHours.weekdays,
    subtitle: COMPANY_INFO.workingHours.weekend,
    gradient: 'from-emerald-700 to-emerald-800'
  }
] as const;

export const FOOTER_LINKS = {
  services: ['Oprava autochladičov', 'Spájkovanie hliníka', 'Preplachovanie chladičov'],
  contact: [COMPANY_INFO.phone, COMPANY_INFO.email, COMPANY_INFO.address, 'Bratislava'],
  keywords: ['spájkovanie hliníka Bratislava', 'spájkovanie hliníka', 'autochladiče Bratislava']
} as const; 