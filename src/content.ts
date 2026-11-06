import thumbJan from './assets/work/FU8X1963FP4.jpg';
import thumbAds from './assets/work/biim3AyR9yY.jpg';
import thumbEngineer from './assets/work/NRXPDuZdacg.jpg';
import thumbPopcorn from './assets/work/zKk41omYKlQ.jpg';

export type Lang = 'sv' | 'en';
export type PageKey = 'home' | 'services' | 'about' | 'contact' | 'terms';

export const routes: Record<Lang, Record<PageKey, string>> = {
  sv: { home: '/', services: '/tjanster/', about: '/om/', contact: '/kontakt/', terms: '/villkor/' },
  en: { home: '/en/', services: '/en/services/', about: '/en/about/', contact: '/en/contact/', terms: '/en/terms/' },
};

export const contact = {
  email: 'jamie@mabon.io',
  phone: '+46 72 860 34 50',
  phoneHref: 'tel:+46728603450',
  whatsapp: 'https://wa.me/46728603450',
  instagram: 'https://instagram.com/jamie.mabon',
};

/* Titles are the videos' real YouTube titles, so they stay in Swedish in both languages.
   Views and minutes were read from YouTube on 2026-11-06. Update them now and then. */
export const videos = [
  { id: 'biim3AyR9yY', title: 'Han har gjort virala annonser för CAIA, Mister York & Hello Fresh', thumb: thumbAds, views: 151570, minutes: 21 },
  { id: 'FU8X1963FP4', title: 'Jan Emanuel sålde sitt bolag för 223 miljoner - vad gör han idag?', thumb: thumbJan, views: 117795, minutes: 24 },
  { id: 'zKk41omYKlQ', title: 'Han tjänade 5 miljoner på popcorn', thumb: thumbPopcorn, views: 105851, minutes: 18 },
  { id: 'NRXPDuZdacg', title: 'Från ingenjör till 100 miljoner på 4 år', thumb: thumbEngineer, views: 101250, minutes: 20 },
];
export const channel = 'Edvin Arfvén';

export const copy = {
  sv: {
    locale: 'sv-SE',
    meta: {
      home: ['Video för entreprenörer med resultat | Mabon Media', 'Mabon Media i Stockholm producerar video för entreprenörer som redan har resultaten, men vars sociala medier inte visar det.'],
      services: ['Tjänster | Mabon Media', 'Videoproduktion för entreprenörer som har resultaten bakom sig och vill att sociala medier ska hänga med.'],
      about: ['Om Jamie Mabon | Mabon Media', 'Jamie Mabon driver Mabon Media från Stockholm och producerar video för etablerade entreprenörer.'],
      contact: ['Kontakt | Mabon Media', 'Kontakta Jamie på Mabon Media via mejl eller WhatsApp.'],
      terms: ['Revisioner och återbetalning | Mabon Media', 'Så fungerar revisioner och återbetalning hos Mabon Media.'],
    },
    skip: 'Hoppa till innehållet',
    nav: { work: 'Arbeten', services: 'Tjänster', about: 'Om', cta: 'Kontakta Jamie', menu: 'Öppna menyn', close: 'Stäng menyn', home: 'Mabon Media, startsida' },
    langLabel: 'View this page in English',
    hero: {
      title: 'Din personliga Creative Director',
      sub: 'Mabon Media är för dig som redan har business expertisen men vill expandera ditt nätverk.',
      stats: [['15+', 'kreatörer'], ['6', 'länder'], ['60 mkr', 'genererad omsättning']],
      statsLabel: 'Resultat i siffror',
      cta: 'Se arbeten',
    },
    proof: {
      title: 'Fyra videor, 476 000 visningar',
      body: 'Visningarna är bara början. När publiken lärde känna Edvin Arfvén bättre började hans annonser prestera bättre, och han byggde en varm publik.',
      watch: 'Spela videon',
      views: 'visningar',
      min: 'min',
    },
    intro: {
      title: 'Hej, jag heter Jamie',
      body: 'Jag driver Mabon Media från Stockholm. Mina kunder har redan byggt något som fungerar, men det syns inte i deras flöde. Mitt jobb är att ändra på det.',
      link: 'Läs mer om Jamie',
    },
    fit: {
      title: 'För dig med resultat bakom dig',
      body: 'Mabon Media börjar där din verksamhet redan står. Du har beviset, och nu behöver dina sociala medier komma ikapp.',
      yesTitle: 'Det här är för dig om',
      yes: ['du driver en verksamhet som redan har resultat', 'du har något att säga och vill synas med det', 'dina sociala medier ligger efter verksamheten'],
      noTitle: 'Det här är inte för dig om',
      no: ['du precis har börjat', 'du letar efter det billigaste alternativet', 'du vill testa video utan en tydlig plan'],
    },
    owner: {
      bio: 'Jag hjälper entreprenörer att synas på samma nivå som de presterar.',
      stats: [['Min bas', 'Stockholm'], ['För nya projekt', 'Öppen'], ['Jag bjuder', 'Kaffe']],
      alt: 'Jamie Mabon i keps tittar på sin kamera ombord på ett flygplan',
    },
    process: {
      title: 'Så går ett projekt till',
      steps: [
        ['Samtal', 'Ni går igenom var du står, vad du har bevisat och vad som behöver synas.'],
        ['Produktion', 'Mabon Media sköter inspelning och redigering, så att din tid går till det du gör bäst.'],
        ['Revisioner', 'Du granskar och videon justeras inom de revisionsrundor som står i offerten.'],
      ],
    },
    faq: {
      title: 'Vanliga frågor',
      items: [
        ['Vem passar Mabon Media för?', 'Entreprenörer som redan har resultat bakom sig och vill att deras sociala medier ska visa det.'],
        ['Måste jag ha resultat sedan tidigare?', 'Ja. Mabon Media jobbar med dig som redan har något att visa upp.'],
        ['Vad händer om jag vill ändra något?', 'Revisioner ingår. Antalet rundor och tiden för dem står i din offert.'],
        ['Kan jag få pengarna tillbaka?', 'Mabon Media säljer en tjänst, så utfört arbete återbetalas normalt inte. I stället ingår revisioner.'],
        ['Hur kommer vi igång?', 'Skicka ett mejl eller ett meddelande på WhatsApp och berätta var du står idag.'],
      ],
      terms: 'Läs villkoren',
    },
    cta: { title: 'Låt dina sociala medier hänga med', body: 'Berätta var du står idag, så tar Jamie det därifrån.', email: 'Mejla Jamie' },
    services: {
      title: 'Video som visar det du redan har byggt',
      sub: 'Från planering till färdig video, för entreprenörer som vill att sociala medier ska hänga med verksamheten.',
      listTitle: 'Det här ingår',
      list: [
        ['Planering', 'Ämne, upplägg och vad som behöver sägas, innan kameran startar.'],
        ['Inspelning', 'Bild och ljud på plats, så att du kan fokusera på det du ska säga.'],
        ['Redigering', 'En färdig video, klar att publicera.'],
        ['Revisioner', 'Du granskar och videon justeras inom de rundor som står i offerten.'],
      ],
    },
    about: {
      title: 'Jamie Mabon, grundare av Mabon Media',
      lead: 'Jag driver Mabon Media från Stockholm och hjälper entreprenörer att synas på samma nivå som de presterar.',
      body: 'Jag jobbar med människor som redan har bevisat sig. Mina videor handlar om deras resa, deras affärer och det de har lärt sig på vägen.',
    },
    contactPage: {
      title: 'Kontakta Jamie',
      sub: 'Berätta var du står idag, så tar vi det därifrån.',
      email: 'Mejla Jamie',
      emailLabel: 'E-post',
      phoneLabel: 'Telefon',
      office: 'Adress',
    },
    terms: {
      title: 'Revisioner och återbetalning',
      paragraphs: [
        'Mabon Media säljer en tjänst, inte en produkt. Därför återbetalas normalt inte arbete som redan är utfört.',
        'I stället ingår revisioner. Antalet revisionsrundor och tidsgränsen för dem står i din offert.',
        'Har du frågor om ett projekt? Skriv till jamie@mabon.io.',
      ],
    },
    footer: { nav: 'Sidor', reach: 'Kontakt', terms: 'Revisioner och återbetalning', country: 'Sverige', rights: 'Alla rättigheter förbehållna.' },
  },
  en: {
    locale: 'en-GB',
    meta: {
      home: ['Video for Entrepreneurs With Results | Mabon Media', 'Mabon Media in Stockholm produces video for entrepreneurs who already have the results, but whose social media doesn’t show it.'],
      services: ['Services | Mabon Media', 'Video production for entrepreneurs with results behind them who want their social media to keep up.'],
      about: ['About Jamie Mabon | Mabon Media', 'Jamie Mabon runs Mabon Media from Stockholm and produces video for established entrepreneurs.'],
      contact: ['Contact | Mabon Media', 'Contact Jamie at Mabon Media by email or WhatsApp.'],
      terms: ['Revisions and Refunds | Mabon Media', 'How revisions and refunds work at Mabon Media.'],
    },
    skip: 'Skip to content',
    nav: { work: 'Work', services: 'Services', about: 'About', cta: 'Contact Jamie', menu: 'Open menu', close: 'Close menu', home: 'Mabon Media, home' },
    langLabel: 'Visa sidan på svenska',
    hero: {
      title: 'Your personal Creative Director',
      sub: 'Mabon Media is for you who already have the business expertise but want to expand your network.',
      stats: [['15+', 'creators'], ['6', 'countries'], ['SEK 60M', 'generated revenue']],
      statsLabel: 'Results in numbers',
      cta: 'See the work',
    },
    proof: {
      title: 'Four videos, 476,000 views',
      body: 'The views are only the start. As people got to know Edvin Arfvén better, his ads began to perform better and he built a warm audience.',
      watch: 'Play the video',
      views: 'views',
      min: 'min',
    },
    intro: {
      title: 'Hi, I’m Jamie',
      body: 'I run Mabon Media from Stockholm. My clients have already built something that works, but it doesn’t show in their feed. My job is to change that.',
      link: 'Read about Jamie',
    },
    fit: {
      title: 'For you with results behind you',
      body: 'Mabon Media starts where your business already stands. You have the proof, and now your social media needs to catch up.',
      yesTitle: 'This is for you if',
      yes: ['you run a business that already has results', 'you have something to say and want to be seen saying it', 'your social media is behind your business'],
      noTitle: 'This isn’t for you if',
      no: ['you’re just getting started', 'you’re looking for the cheapest option', 'you want to try video without a clear plan'],
    },
    owner: {
      bio: 'I help entrepreneurs be seen at the level they perform.',
      stats: [['Home base', 'Stockholm'], ['To new projects', 'Open'], ['On me', 'Coffee']],
      alt: 'Jamie Mabon in a cap looking at his camera on board a plane',
    },
    process: {
      title: 'How a project works',
      steps: [
        ['Conversation', 'You go through where you are, what you’ve proven and what needs to be seen.'],
        ['Production', 'Mabon Media handles filming and editing, so your time goes to what you do best.'],
        ['Revisions', 'You review, and the video is adjusted within the revision rounds in your quote.'],
      ],
    },
    faq: {
      title: 'Common questions',
      items: [
        ['Who is Mabon Media for?', 'Entrepreneurs who already have results behind them and want their social media to show it.'],
        ['Do I need results already?', 'Yes. Mabon Media works with people who already have something to show.'],
        ['What if I want to change something?', 'Revisions are included. The number of rounds and the time frame are in your quote.'],
        ['Can I get a refund?', 'Mabon Media sells a service, so completed work isn’t normally refunded. Revisions are included instead.'],
        ['How do we get started?', 'Send an email or a WhatsApp message and say where you are today.'],
      ],
      terms: 'Read the terms',
    },
    cta: { title: 'Let your social media keep up', body: 'Tell Jamie where you are today, and you’ll take it from there together.', email: 'Email Jamie' },
    services: {
      title: 'Video that shows what you’ve already built',
      sub: 'From planning to a finished video, for entrepreneurs who want their social media to keep up with the business.',
      listTitle: 'What’s included',
      list: [
        ['Planning', 'Topic, structure and what needs to be said, before the camera starts.'],
        ['Filming', 'Picture and sound on location, so you can focus on what you’re saying.'],
        ['Editing', 'A finished video, ready to publish.'],
        ['Revisions', 'You review, and the video is adjusted within the rounds in your quote.'],
      ],
    },
    about: {
      title: 'Jamie Mabon, founder of Mabon Media',
      lead: 'I run Mabon Media from Stockholm and help entrepreneurs be seen at the level they perform.',
      body: 'I work with people who have already proven themselves. My videos are about their journey, their business and what they’ve learned along the way.',
    },
    contactPage: {
      title: 'Contact Jamie',
      sub: 'Tell me where you are today and we’ll take it from there.',
      email: 'Email Jamie',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      office: 'Address',
    },
    terms: {
      title: 'Revisions and refunds',
      paragraphs: [
        'Mabon Media sells a service, not a product, so work that has already been carried out isn’t normally refunded.',
        'Revisions are included instead. The number of revision rounds and their time frame are in your quote.',
        'Questions about a project? Write to jamie@mabon.io.',
      ],
    },
    footer: { nav: 'Pages', reach: 'Contact', terms: 'Revisions and refunds', country: 'Sweden', rights: 'All rights reserved.' },
  },
} as const;
