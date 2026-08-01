import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

const es = {
  nav: {
    rancho: 'El Rancho',
    experiencias: 'Experiencias',
    alojamiento: 'Alojamiento',
    galeria: 'Galería',
    ubicacion: 'Ubicación',
    contacto: 'Contacto',
    reservar: 'Reservar',
  },
  hero: {
    eyebrow: 'Anamuyita · Higüey · República Dominicana',
    title1: 'Rancho',
    title2: 'Salto Taíno',
    subtitle:
      'Río, piscinas, zipline, caballos y sabor criollo entre Higüey y Punta Cana. Un rancho ecológico y turístico para desconectarte de todo y reconectar con lo esencial.',
    cta1: 'Reserva por WhatsApp',
    cta2: 'Descubre el rancho',
    scroll: 'Desliza para explorar',
  },
  marquee: [
    'Piscinas',
    'Zipline',
    'Paseos a caballo',
    'Buggy',
    'Day pass',
    'Casas de campo',
    'Buffet criollo',
    'Río Anamuya',
    'Camping bajo las estrellas',
  ],
  about: {
    eyebrow: 'El Rancho',
    title: 'Un refugio taíno entre montañas',
    p1: 'En el corazón de Anamuyita, a minutos de Higüey y a menos de una hora de Punta Cana, Rancho Salto Taíno es un santuario ecológico donde el tiempo corre más lento.',
    p2: 'Jardines tropicales, río de agua fresca, animales de campo y la hospitalidad dominicana de siempre. Ven por el día con tu familia o quédate a dormir bajo un cielo lleno de estrellas.',
    features: [
      {
        title: 'Ecoturismo real',
        text: 'Naturaleza pura, sin filtros. Palmas, río y montaña en su estado original.',
      },
      {
        title: 'Para toda la familia',
        text: 'Piscina, áreas verdes, animales y espacio de sobra para los niños.',
      },
      {
        title: 'Sabor criollo',
        text: 'Cocina dominicana hecha con calma y con leña, como en casa de la abuela.',
      },
    ],
  },
  experiences: {
    eyebrow: 'Experiencias',
    title: 'Vive el campo dominicano',
    subtitle: 'Un día en el rancho da para mucho. Elige tu aventura o vívelas todas.',
    items: [
      {
        title: 'Piscina y day pass',
        text: 'Agua fresca, música y áreas verdes para pasar el día completo en familia.',
      },
      {
        title: 'Paseos a caballo',
        text: 'Cabalga por senderos de montaña con guías locales que conocen cada rincón.',
      },
      {
        title: 'Río y puente colgante',
        text: 'Cruza el puente colgante y refréscate en las aguas verdes del río, entre piedras y vegetación.',
      },
      {
        title: 'Zipline entre montañas',
        text: 'Vuela sobre el verde de Anamuyita con arnés, casco y guías que te acompañan en todo momento.',
      },
      {
        title: 'Buffet criollo',
        text: 'Sancocho, chivo guisado, arroz y habichuelas. Cocina de leña con sazón de verdad.',
      },
      {
        title: 'Palapa para grupos',
        text: 'Un salón abierto con techo de cana para celebraciones, excursiones y grupos grandes.',
      },
    ],
  },
  lodging: {
    eyebrow: 'Alojamiento',
    title: 'Quédate a dormir en la montaña',
    subtitle: 'Opciones para cada estilo de aventura, todas rodeadas de verde.',
    cta: 'Consultar disponibilidad',
    items: [
      {
        title: 'Casitas de colores',
        text: 'Casitas de madera pintadas a mano, sencillas y cómodas, con el canto del campo de fondo.',
        tag: 'Confort',
      },
      {
        title: 'Casa de campo',
        text: 'Cabañas de madera con terraza y vista a la montaña. Puedes incluir desayuno, almuerzo y cena.',
        tag: 'Favorita',
      },
      {
        title: 'Camping y glamping',
        text: 'Tiendas listas bajo el cielo del Este. Solo trae ganas de desconectar.',
        tag: 'Aventura',
      },
    ],
  },
  gallery: {
    eyebrow: 'Galería',
    title: 'El rancho en 360°',
    subtitle: 'Arrastra para girar la galería y toca una foto para verla en grande.',
    items: [
      { title: 'El rancho desde el aire', sub: 'Piscinas entre palmeras' },
      { title: 'Zipline', sub: 'Adrenalina entre palmas' },
      { title: 'La piscina', sub: 'Agua fresca todo el día' },
      { title: 'Camping', sub: 'Tiendas listas en el verde' },
      { title: 'La palapa', sub: 'Para grupos y celebraciones' },
      { title: 'Atardecer', sub: 'El cielo de Anamuyita' },
      { title: 'En familia', sub: 'Recuerdos que se quedan' },
      { title: 'Los jardines', sub: 'Senderos entre palmeras' },
    ],
  },
  video: {
    eyebrow: 'Siente el rancho',
    title: 'Esto no se cuenta, se vive',
    text: 'Un adelanto de lo que te espera en Anamuyita. El resto lo descubres tú.',
    cta: 'Ver más en Instagram',
  },
  instagram: {
    eyebrow: 'Comunidad',
    title: 'Síguenos en Instagram',
    text: 'Fotos reales, videos del río y las historias de quienes ya vivieron el rancho.',
    cta: 'Seguir',
  },
  location: {
    eyebrow: 'Ubicación',
    title: 'Fácil de llegar, difícil de olvidar',
    text: 'Estamos en la carretera principal de Anamuyita, entre Higüey y Punta Cana, en la provincia La Altagracia.',
    distances: [
      { place: 'Higüey', time: '± 20 min' },
      { place: 'Aeropuerto de Punta Cana', time: '± 45 min' },
      { place: 'Playa Macao', time: '± 40 min' },
      { place: 'Monkey Land', time: '± 10 min' },
    ],
    cta: 'Abrir en Google Maps',
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Antes de venir',
    items: [
      {
        q: '¿Cuánto cuesta la entrada?',
        a: 'La entrada al day pass es RD$350 por persona y la opción con almuerzo ronda RD$800. El hospedaje con las tres comidas incluidas ronda RD$3,000 por persona. Las tarifas pueden variar, confírmalas por WhatsApp al momento de reservar.',
      },
      {
        q: '¿Necesito reservar para el day pass?',
        a: 'Recomendamos reservar por WhatsApp, sobre todo los fines de semana y días feriados. Así te confirmamos disponibilidad y tarifas al momento.',
      },
      {
        q: '¿Qué incluye el alojamiento?',
        a: 'Depende de la opción que elijas: casita, casa de campo o camping. La casa de campo puede incluir desayuno, almuerzo y cena. Escríbenos y te enviamos tarifas y disponibilidad actualizadas.',
      },
      {
        q: '¿Es un plan para niños?',
        a: 'Totalmente. El rancho es un plan familiar: piscina, animales, áreas verdes y mucho espacio para correr.',
      },
      {
        q: '¿Qué debo traer?',
        a: 'Traje de baño, ropa cómoda, tenis para los senderos, repelente y muchas ganas de desconectar. Del resto nos encargamos nosotros.',
      },
      {
        q: '¿Cómo llego al rancho?',
        a: 'Estamos en la carretera principal de Anamuyita, entre Higüey y Punta Cana. En la sección de ubicación tienes el mapa con la ruta exacta.',
      },
    ],
  },
  contact: {
    eyebrow: 'Reserva',
    title: 'Tu escapada empieza aquí',
    text: 'Completa el formulario y te respondemos por WhatsApp con disponibilidad y tarifas.',
    name: 'Tu nombre',
    date: 'Fecha de visita',
    guests: 'Cantidad de personas',
    type: 'Tipo de visita',
    types: ['Day pass', 'Alojamiento', 'Evento o grupo'],
    message: 'Cuéntanos tu plan (opcional)',
    submit: 'Enviar por WhatsApp',
    note: 'Al enviar se abre WhatsApp con tu mensaje listo. Sin spam, hablas directo con el rancho.',
    waGreeting: 'Hola Rancho Salto Taíno, quiero reservar.',
  },
  footer: {
    tagline: 'Naturaleza viva entre Higüey y Punta Cana.',
    links: 'Enlaces',
    contact: 'Contacto',
    rights: 'Todos los derechos reservados.',
  },
  floatWa: 'Escríbenos',
}

const en: typeof es = {
  nav: {
    rancho: 'The Ranch',
    experiencias: 'Experiences',
    alojamiento: 'Lodging',
    galeria: 'Gallery',
    ubicacion: 'Location',
    contacto: 'Contact',
    reservar: 'Book now',
  },
  hero: {
    eyebrow: 'Anamuyita · Higüey · Dominican Republic',
    title1: 'Rancho',
    title2: 'Salto Taíno',
    subtitle:
      'River, pools, zipline, horses and Dominican flavor between Higüey and Punta Cana. An eco ranch to disconnect from everything and reconnect with what matters.',
    cta1: 'Book via WhatsApp',
    cta2: 'Discover the ranch',
    scroll: 'Scroll to explore',
  },
  marquee: [
    'Pools',
    'Zipline',
    'Horseback riding',
    'Buggy',
    'Day pass',
    'Country houses',
    'Creole buffet',
    'Anamuya River',
    'Camping under the stars',
  ],
  about: {
    eyebrow: 'The Ranch',
    title: 'A Taíno refuge in the mountains',
    p1: 'In the heart of Anamuyita, minutes from Higüey and less than an hour from Punta Cana, Rancho Salto Taíno is an eco sanctuary where time slows down.',
    p2: 'Tropical gardens, a fresh water river, farm animals and true Dominican hospitality. Come for the day with your family or stay overnight under a sky full of stars.',
    features: [
      {
        title: 'Real ecotourism',
        text: 'Pure nature, no filters. Palms, river and mountains in their original state.',
      },
      {
        title: 'For the whole family',
        text: 'Pool, green areas, animals and plenty of room for the kids.',
      },
      {
        title: 'Creole flavor',
        text: 'Dominican cooking made slowly over firewood, just like at grandma’s house.',
      },
    ],
  },
  experiences: {
    eyebrow: 'Experiences',
    title: 'Live the Dominican countryside',
    subtitle: 'One day at the ranch goes a long way. Pick your adventure or live them all.',
    items: [
      {
        title: 'Pool and day pass',
        text: 'Fresh water, music and green areas to spend the whole day with your family.',
      },
      {
        title: 'Horseback riding',
        text: 'Ride mountain trails with local guides who know every corner.',
      },
      {
        title: 'River and hanging bridge',
        text: 'Cross the hanging bridge and cool off in the green waters of the river, among rocks and greenery.',
      },
      {
        title: 'Mountain zipline',
        text: 'Fly over the green of Anamuyita with harness, helmet and guides by your side the whole way.',
      },
      {
        title: 'Creole buffet',
        text: 'Sancocho, stewed goat, rice and beans. Firewood cooking with real seasoning.',
      },
      {
        title: 'Palapa for groups',
        text: 'An open hall with a thatched roof for celebrations, excursions and large groups.',
      },
    ],
  },
  lodging: {
    eyebrow: 'Lodging',
    title: 'Stay the night in the mountains',
    subtitle: 'Options for every style of adventure, all surrounded by green.',
    cta: 'Check availability',
    items: [
      {
        title: 'Colorful cabins',
        text: 'Hand painted wooden cabins, simple and comfortable, with the sounds of the countryside in the background.',
        tag: 'Comfort',
      },
      {
        title: 'Country house',
        text: 'Wooden cabins with a terrace and mountain views. Breakfast, lunch and dinner can be included.',
        tag: 'Favorite',
      },
      {
        title: 'Camping and glamping',
        text: 'Tents ready under the eastern sky. Just bring the urge to disconnect.',
        tag: 'Adventure',
      },
    ],
  },
  gallery: {
    eyebrow: 'Gallery',
    title: 'The ranch in 360°',
    subtitle: 'Drag to spin the gallery and tap any photo to see it full size.',
    items: [
      { title: 'The ranch from above', sub: 'Pools among palm trees' },
      { title: 'Zipline', sub: 'Adrenaline in the palms' },
      { title: 'The pool', sub: 'Fresh water all day' },
      { title: 'Camping', sub: 'Tents ready on the grass' },
      { title: 'The palapa', sub: 'For groups and celebrations' },
      { title: 'Sunset', sub: 'The sky over Anamuyita' },
      { title: 'Family time', sub: 'Memories that stay' },
      { title: 'The gardens', sub: 'Paths among palm trees' },
    ],
  },
  video: {
    eyebrow: 'Feel the ranch',
    title: 'You do not tell it, you live it',
    text: 'A preview of what awaits you in Anamuyita. The rest is yours to discover.',
    cta: 'See more on Instagram',
  },
  instagram: {
    eyebrow: 'Community',
    title: 'Follow us on Instagram',
    text: 'Real photos, river videos and stories from people who already lived the ranch.',
    cta: 'Follow',
  },
  location: {
    eyebrow: 'Location',
    title: 'Easy to reach, hard to forget',
    text: 'We are on the main road of Anamuyita, between Higüey and Punta Cana, in La Altagracia province.',
    distances: [
      { place: 'Higüey', time: '± 20 min' },
      { place: 'Punta Cana Airport', time: '± 45 min' },
      { place: 'Macao Beach', time: '± 40 min' },
      { place: 'Monkey Land', time: '± 10 min' },
    ],
    cta: 'Open in Google Maps',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Before you come',
    items: [
      {
        q: 'How much is the entrance fee?',
        a: 'The day pass entrance is RD$350 per person and the option with lunch is around RD$800. Lodging with all three meals included is around RD$3,000 per person. Rates may vary, please confirm via WhatsApp when booking.',
      },
      {
        q: 'Do I need to book the day pass?',
        a: 'We recommend booking via WhatsApp, especially on weekends and holidays. We will confirm availability and rates right away.',
      },
      {
        q: 'What does lodging include?',
        a: 'It depends on the option you choose: cabin, country house or camping. The country house can include breakfast, lunch and dinner. Write to us and we will send updated rates and availability.',
      },
      {
        q: 'Is it a good plan for kids?',
        a: 'Absolutely. The ranch is a family plan: pool, animals, green areas and plenty of space to run.',
      },
      {
        q: 'What should I bring?',
        a: 'Swimsuit, comfortable clothes, sneakers for the trails, repellent and the urge to disconnect. We take care of the rest.',
      },
      {
        q: 'How do I get to the ranch?',
        a: 'We are on the main road of Anamuyita, between Higüey and Punta Cana. Check the location section for the exact route.',
      },
    ],
  },
  contact: {
    eyebrow: 'Book',
    title: 'Your getaway starts here',
    text: 'Fill out the form and we will reply on WhatsApp with availability and rates.',
    name: 'Your name',
    date: 'Visit date',
    guests: 'Number of guests',
    type: 'Type of visit',
    types: ['Day pass', 'Lodging', 'Event or group'],
    message: 'Tell us your plan (optional)',
    submit: 'Send via WhatsApp',
    note: 'Submitting opens WhatsApp with your message ready. No spam, you talk directly with the ranch.',
    waGreeting: 'Hello Rancho Salto Taíno, I would like to book.',
  },
  footer: {
    tagline: 'Living nature between Higüey and Punta Cana.',
    links: 'Links',
    contact: 'Contact',
    rights: 'All rights reserved.',
  },
  floatWa: 'Message us',
}

export type Lang = 'es' | 'en'
export type Copy = typeof es

const dict: Record<Lang, Copy> = { es, en }

interface LangContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: Copy
}

const LangContext = createContext<LangContextValue>({
  lang: 'es',
  setLang: () => {},
  t: es,
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')
  return (
    <LangContext.Provider value={{ lang, setLang, t: dict[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
