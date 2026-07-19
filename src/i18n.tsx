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
    eyebrow: 'Anamuya · Higüey · República Dominicana',
    title1: 'Rancho',
    title2: 'Salto Taíno',
    subtitle:
      'Río, montaña, caballos y sabor criollo entre Higüey y Punta Cana. Un refugio ecológico para desconectarte de todo y reconectar con lo esencial.',
    cta1: 'Reserva por WhatsApp',
    cta2: 'Descubre el rancho',
    scroll: 'Desliza para explorar',
  },
  marquee: [
    'Piscina natural',
    'Paseos a caballo',
    'Day pass',
    'Camping bajo las estrellas',
    'Casa del árbol',
    'Buffet criollo',
    'Senderismo',
    'Río Anamuya',
  ],
  about: {
    eyebrow: 'El Rancho',
    title: 'Un refugio taíno entre montañas',
    p1: 'En el corazón de Anamuya, a minutos de Higüey y a menos de una hora de Punta Cana, Rancho Salto Taíno es un santuario ecológico donde el tiempo corre más lento.',
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
        title: 'Río y pozas naturales',
        text: 'Refréscate en las aguas del río Anamuya y descubre sus rincones escondidos.',
      },
      {
        title: 'Senderismo',
        text: 'Rutas entre palmas, cacao y café con vistas que no salen en las postales.',
      },
      {
        title: 'Buffet criollo',
        text: 'Sancocho, chivo guisado, arroz y habichuelas. Cocina de leña con sazón de verdad.',
      },
      {
        title: 'Fogata y noche de estrellas',
        text: 'Cuando cae el sol, el rancho se llena de historias alrededor del fuego.',
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
        title: 'Habitación estándar',
        text: 'Privada, sencilla y cómoda para dos personas, con el canto del campo de fondo.',
        tag: 'Confort',
      },
      {
        title: 'Casa del árbol',
        text: 'Duerme entre las copas de los árboles. La favorita de los aventureros.',
        tag: 'Única',
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
    subtitle: 'Haz scroll y gira la galería. Cada imagen es una promesa de lo que te espera.',
    items: [
      { title: 'El salto', sub: 'Agua fresca de montaña' },
      { title: 'A caballo', sub: 'Senderos del Este' },
      { title: 'La piscina', sub: 'El corazón del day pass' },
      { title: 'Casa del árbol', sub: 'Dormir entre las copas' },
      { title: 'Camping', sub: 'Noches de fogata' },
      { title: 'Sabor criollo', sub: 'Cocina de leña' },
      { title: 'Senderos verdes', sub: 'Palmas y montaña' },
      { title: 'Atardeceres', sub: 'El cielo del Este' },
    ],
  },
  video: {
    eyebrow: 'Siente el rancho',
    title: 'Esto no se cuenta, se vive',
    text: 'Un adelanto de lo que te espera en Anamuya. El resto lo descubres tú.',
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
    text: 'Estamos en la carretera principal de Anamuya, entre Higüey y Punta Cana, en la provincia La Altagracia.',
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
        q: '¿Necesito reservar para el day pass?',
        a: 'Recomendamos reservar por WhatsApp, sobre todo los fines de semana y días feriados. Así te confirmamos disponibilidad y tarifas al momento.',
      },
      {
        q: '¿Qué incluye el alojamiento?',
        a: 'Depende de la opción que elijas: habitación, casa del árbol o camping. Escríbenos y te enviamos tarifas y disponibilidad actualizadas.',
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
        a: 'Estamos en la carretera principal de Anamuya, entre Higüey y Punta Cana. En la sección de ubicación tienes el mapa con la ruta exacta.',
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
    eyebrow: 'Anamuya · Higüey · Dominican Republic',
    title1: 'Rancho',
    title2: 'Salto Taíno',
    subtitle:
      'River, mountains, horses and Dominican flavor between Higüey and Punta Cana. An eco retreat to disconnect from everything and reconnect with what matters.',
    cta1: 'Book via WhatsApp',
    cta2: 'Discover the ranch',
    scroll: 'Scroll to explore',
  },
  marquee: [
    'Natural pool',
    'Horseback riding',
    'Day pass',
    'Camping under the stars',
    'Treehouse',
    'Creole buffet',
    'Hiking',
    'Anamuya River',
  ],
  about: {
    eyebrow: 'The Ranch',
    title: 'A Taíno refuge in the mountains',
    p1: 'In the heart of Anamuya, minutes from Higüey and less than an hour from Punta Cana, Rancho Salto Taíno is an eco sanctuary where time slows down.',
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
        title: 'River and natural pools',
        text: 'Cool off in the Anamuya River and discover its hidden spots.',
      },
      {
        title: 'Hiking',
        text: 'Trails through palms, cacao and coffee with views you will not find on postcards.',
      },
      {
        title: 'Creole buffet',
        text: 'Sancocho, stewed goat, rice and beans. Firewood cooking with real seasoning.',
      },
      {
        title: 'Bonfire and starry nights',
        text: 'When the sun goes down, the ranch fills with stories around the fire.',
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
        title: 'Standard room',
        text: 'Private, simple and comfortable for two, with the sounds of the countryside in the background.',
        tag: 'Comfort',
      },
      {
        title: 'Treehouse',
        text: 'Sleep among the treetops. The favorite of adventurers.',
        tag: 'Unique',
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
    subtitle: 'Scroll to spin the gallery. Every image is a promise of what awaits you.',
    items: [
      { title: 'The falls', sub: 'Fresh mountain water' },
      { title: 'On horseback', sub: 'Eastern trails' },
      { title: 'The pool', sub: 'The heart of the day pass' },
      { title: 'Treehouse', sub: 'Sleeping in the canopy' },
      { title: 'Camping', sub: 'Bonfire nights' },
      { title: 'Creole flavor', sub: 'Firewood cooking' },
      { title: 'Green trails', sub: 'Palms and mountains' },
      { title: 'Sunsets', sub: 'The eastern sky' },
    ],
  },
  video: {
    eyebrow: 'Feel the ranch',
    title: 'You do not tell it, you live it',
    text: 'A preview of what awaits you in Anamuya. The rest is yours to discover.',
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
    text: 'We are on the main road of Anamuya, between Higüey and Punta Cana, in La Altagracia province.',
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
        q: 'Do I need to book the day pass?',
        a: 'We recommend booking via WhatsApp, especially on weekends and holidays. We will confirm availability and rates right away.',
      },
      {
        q: 'What does lodging include?',
        a: 'It depends on the option you choose: room, treehouse or camping. Write to us and we will send updated rates and availability.',
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
        a: 'We are on the main road of Anamuya, between Higüey and Punta Cana. Check the location section for the exact route.',
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
