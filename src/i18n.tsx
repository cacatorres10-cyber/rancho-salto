import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

const es = {
  nav: {
    rancho: 'El Rancho',
    experiencias: 'Experiencias',
    excursiones: 'Excursiones',
    alojamiento: 'Alojamiento',
    galeria: 'Galería',
    ubicacion: 'Ubicación',
    contacto: 'Contacto',
    reservar: 'Reservar',
  },
  hero: {
    eyebrow: 'Montañas de Anamuyita · Higüey · República Dominicana',
    title1: 'Rancho',
    title2: 'Salto Taíno',
    subtitle:
      'A menos de una hora del ruido de Punta Cana, la montaña esconde agua fresca, piscinas entre palmeras y un día que no se quiere acabar.',
    cta1: 'Reserva por WhatsApp',
    cta2: 'Descubre el rancho',
    scroll: 'Desliza para explorar',
  },
  marquee: [
    'Piscinas de montaña',
    'Zipline',
    'Río Anamuya',
    'Paseos a caballo',
    'Buggy',
    'Buffet criollo',
    'Casas de campo',
    'Camping bajo las estrellas',
    'Day pass',
  ],
  about: {
    eyebrow: 'El Rancho',
    title: 'Aquí el tiempo va más lento',
    p1: 'Una loma entera de verde en Anamuyita, a veinte minutos de Higüey. Palmeras de verdad, agua que baja fresca de la montaña y gente que te recibe como si volvieras a casa.',
    p2: 'Ven por el día y vete con el río todavía en la piel. O quédate a dormir, cuando el rancho se queda en silencio y salen esas estrellas que en la ciudad ya nadie ve.',
    features: [
      {
        title: 'Naturaleza sin filtro',
        text: 'Montaña, río y palmares tal como son. Lo único que se edita aquí son las fotos que te llevas.',
      },
      {
        title: 'Le sirve a todo el mundo',
        text: 'Los muchachos en la piscina, los grandes en la sombra y nadie mirando el reloj.',
      },
      {
        title: 'Comida de fogón',
        text: 'Sancocho que lleva horas al fuego, chivo guisado y arroz que sabe a domingo en casa de la abuela.',
      },
    ],
  },
  experiences: {
    eyebrow: 'Experiencias',
    title: 'Un día aquí rinde como tres',
    subtitle: 'Escoge tu aventura o vívelas todas. El rancho da para eso y más.',
    items: [
      {
        title: 'Piscinas y day pass',
        text: 'Agua fresca entre palmeras, música y la tarde entera por delante. El plan más pedido del rancho.',
      },
      {
        title: 'Paseos a caballo',
        text: 'Sube la loma al paso del caballo y mira Anamuyita desde donde solo llegan los de aquí.',
      },
      {
        title: 'Río y puente colgante',
        text: 'Cruza el puente de tablas, escoge tu piedra y déjate llevar por el agua verde del Anamuya.',
      },
      {
        title: 'Zipline entre montañas',
        text: 'Te ponen el arnés, cuentas hasta tres y de repente el rancho entero te queda debajo de los pies.',
      },
      {
        title: 'Buffet criollo',
        text: 'Mesas largas bajo techo de cana, olor a fogón y la montaña ahí mismo mientras comes.',
      },
      {
        title: 'Palapa para grupos',
        text: 'Techo de cana, lámpara encendida y espacio de sobra. Aquí caben la excursión, el cumpleaños y la familia completa.',
      },
    ],
  },
  excursions: {
    eyebrow: 'Excursiones',
    title: 'Y si quieres ir más lejos',
    subtitle:
      'Salidas que organizamos desde el rancho. Toca una para ver todo lo que incluye.',
    details: 'Ver detalles',
    includes: 'Qué incluye',
    bring: 'Qué llevar',
    book: 'Reservar por WhatsApp',
    perPerson: 'por persona',
    askPrice: 'Consultar precio',
    close: 'Cerrar',
    priceNote: 'Precios sujetos a cambio. Te confirmamos todo por WhatsApp antes de reservar.',
  },
  lodging: {
    eyebrow: 'Alojamiento',
    title: 'Duérmete oyendo el campo',
    subtitle: 'Tres maneras de amanecer rodeado de verde.',
    cta: 'Consultar disponibilidad',
    items: [
      {
        title: 'Casitas de colores',
        text: 'Madera pintada a mano, cama lista y los pájaros haciendo de despertador.',
        tag: 'Confort',
      },
      {
        title: 'Casa de campo',
        text: 'Cabaña de madera con terraza hacia la montaña. Puede incluir desayuno, almuerzo y cena, para que no pienses en nada.',
        tag: 'La favorita',
      },
      {
        title: 'Camping y glamping',
        text: 'Tu tienda ya montada sobre la grama y, encima de ti, un cielo lleno de estrellas.',
        tag: 'Aventura',
      },
    ],
  },
  gallery: {
    eyebrow: 'Galería',
    title: 'El rancho en 360°',
    subtitle: 'Arrastra para girar la galería y toca una foto para verla en grande.',
    items: [
      { title: 'Desde el aire', sub: 'Piscinas entre palmares' },
      { title: 'Zipline', sub: 'El grito va incluido' },
      { title: 'La piscina', sub: 'Donde se va la tarde' },
      { title: 'Camping', sub: 'Tu casa por una noche' },
      { title: 'La palapa', sub: 'Donde cabe todo el mundo' },
      { title: 'Atardecer', sub: 'El cielo de Anamuyita' },
      { title: 'En familia', sub: 'Lo que uno viene a buscar' },
      { title: 'Los jardines', sub: 'Sombra y palmeras' },
    ],
  },
  video: {
    eyebrow: 'Siente el rancho',
    title: 'Esto no se cuenta, se vive',
    text: 'El río, la palapa y el puente colgante. Y esto es apenas lo que cabe en una pantalla.',
    cta: 'Ver más en Instagram',
  },
  instagram: {
    eyebrow: 'Comunidad',
    title: 'Míralo por los ojos de quienes ya vinieron',
    text: 'Más de 12,000 personas siguen el día a día del rancho. Aquí no hay fotos de catálogo: son las de la gente que llegó por un día y se fue pidiendo quedarse.',
    cta: 'Seguir',
  },
  location: {
    eyebrow: 'Ubicación',
    title: 'Fácil de llegar, difícil de olvidar',
    text: 'Estamos en la carretera principal de Anamuyita, entre Higüey y Punta Cana. Cambias la arena por montaña en menos de una hora.',
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
        q: '¿Necesito reservar?',
        a: 'Los fines de semana y los días feriados el rancho se llena. Escríbenos antes por WhatsApp y te guardamos el espacio.',
      },
      {
        q: '¿Qué incluye el alojamiento?',
        a: 'Depende de lo que escojas: casita, casa de campo o camping. La casa de campo puede incluir desayuno, almuerzo y cena. Escríbenos y te mandamos tarifas y disponibilidad al momento.',
      },
      {
        q: '¿Es un buen plan para niños?',
        a: 'Es de los pocos sitios donde los muchachos se cansan antes que tú. Piscina, grama, animales y espacio de sobra para correr.',
      },
      {
        q: '¿Qué debo traer?',
        a: 'Traje de baño, tenis para los senderos, repelente y ganas de desconectarte. De lo demás nos encargamos nosotros.',
      },
      {
        q: '¿Cómo llego al rancho?',
        a: 'Estamos en la carretera principal de Anamuyita, entre Higüey y Punta Cana. En la sección de ubicación tienes el mapa con la ruta exacta.',
      },
    ],
  },
  contact: {
    eyebrow: 'Reserva',
    title: 'Dinos cuándo vienes',
    text: 'Llena esto en veinte segundos y te confirmamos disponibilidad y tarifas por WhatsApp.',
    name: 'Tu nombre',
    date: 'Fecha de visita',
    guests: 'Cantidad de personas',
    type: 'Tipo de visita',
    types: ['Day pass', 'Alojamiento', 'Evento o grupo'],
    message: 'Cuéntanos tu plan (opcional)',
    submit: 'Enviar por WhatsApp',
    note: 'Al enviar se abre WhatsApp con tu mensaje listo. Sin spam: hablas directo con el rancho.',
    waGreeting: 'Hola Rancho Salto Taíno, quiero reservar.',
  },
  footer: {
    tagline: 'Naturaleza, tradición y diversión en las montañas de Anamuyita.',
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
    excursiones: 'Tours',
    alojamiento: 'Lodging',
    galeria: 'Gallery',
    ubicacion: 'Location',
    contacto: 'Contact',
    reservar: 'Book now',
  },
  hero: {
    eyebrow: 'Anamuyita Mountains · Higüey · Dominican Republic',
    title1: 'Rancho',
    title2: 'Salto Taíno',
    subtitle:
      'Less than an hour from the noise of Punta Cana, the mountains hide cool water, pools among the palms and a day you will not want to end.',
    cta1: 'Book via WhatsApp',
    cta2: 'Discover the ranch',
    scroll: 'Scroll to explore',
  },
  marquee: [
    'Mountain pools',
    'Zipline',
    'Anamuya River',
    'Horseback riding',
    'Buggy',
    'Creole buffet',
    'Country houses',
    'Camping under the stars',
    'Day pass',
  ],
  about: {
    eyebrow: 'The Ranch',
    title: 'Time runs slower up here',
    p1: 'A whole green hillside in Anamuyita, twenty minutes from Higüey. Real palm trees, water running cool off the mountain and people who welcome you like family.',
    p2: 'Come for the day and leave with the river still on your skin. Or stay the night, when the ranch goes quiet and out come the stars the city stopped showing you.',
    features: [
      {
        title: 'Nature, unfiltered',
        text: 'Mountain, river and palm groves just as they are. The only thing edited here are the photos you take home.',
      },
      {
        title: 'Works for everyone',
        text: 'Kids in the pool, grown ups in the shade and nobody watching the clock.',
      },
      {
        title: 'Cooked over fire',
        text: 'Sancocho that spent hours on the flame, stewed goat and rice that tastes like Sunday at grandma’s.',
      },
    ],
  },
  experiences: {
    eyebrow: 'Experiences',
    title: 'One day here feels like three',
    subtitle: 'Pick your adventure or live them all. There is room for that and more.',
    items: [
      {
        title: 'Pools and day pass',
        text: 'Cool water among the palms, music and the whole afternoon ahead. The most requested plan at the ranch.',
      },
      {
        title: 'Horseback riding',
        text: 'Climb the hill at a horse’s pace and see Anamuyita from where only locals get to.',
      },
      {
        title: 'River and hanging bridge',
        text: 'Cross the plank bridge, claim your rock and let the green water of the Anamuya carry you.',
      },
      {
        title: 'Mountain zipline',
        text: 'They strap you in, you count to three and suddenly the whole ranch is under your feet.',
      },
      {
        title: 'Creole buffet',
        text: 'Long tables under a thatched roof, woodsmoke in the air and the mountain right there while you eat.',
      },
      {
        title: 'Palapa for groups',
        text: 'Thatched roof, lights on and room to spare. The excursion, the birthday and the whole family fit in here.',
      },
    ],
  },
  excursions: {
    eyebrow: 'Tours',
    title: 'And if you want to go further',
    subtitle: 'Day trips we organize from the ranch. Tap one to see everything it includes.',
    details: 'See details',
    includes: 'What is included',
    bring: 'What to bring',
    book: 'Book via WhatsApp',
    perPerson: 'per person',
    askPrice: 'Ask for price',
    close: 'Close',
    priceNote: 'Prices subject to change. We confirm everything on WhatsApp before booking.',
  },
  lodging: {
    eyebrow: 'Lodging',
    title: 'Fall asleep to the sound of the countryside',
    subtitle: 'Three ways to wake up surrounded by green.',
    cta: 'Check availability',
    items: [
      {
        title: 'Colorful cabins',
        text: 'Hand painted wood, bed ready and birds for an alarm clock.',
        tag: 'Comfort',
      },
      {
        title: 'Country house',
        text: 'Wooden cabin with a terrace facing the mountain. Breakfast, lunch and dinner can be included, so you think about nothing.',
        tag: 'The favorite',
      },
      {
        title: 'Camping and glamping',
        text: 'Your tent already pitched on the grass and, above you, a sky full of stars.',
        tag: 'Adventure',
      },
    ],
  },
  gallery: {
    eyebrow: 'Gallery',
    title: 'The ranch in 360°',
    subtitle: 'Drag to spin the gallery and tap any photo to see it full size.',
    items: [
      { title: 'From above', sub: 'Pools among palm groves' },
      { title: 'Zipline', sub: 'The scream is included' },
      { title: 'The pool', sub: 'Where the afternoon goes' },
      { title: 'Camping', sub: 'Home for one night' },
      { title: 'The palapa', sub: 'Room for everyone' },
      { title: 'Sunset', sub: 'The Anamuyita sky' },
      { title: 'Family time', sub: 'What you came for' },
      { title: 'The gardens', sub: 'Shade and palm trees' },
    ],
  },
  video: {
    eyebrow: 'Feel the ranch',
    title: 'You do not tell it, you live it',
    text: 'The river, the palapa and the hanging bridge. And this is only what fits on a screen.',
    cta: 'See more on Instagram',
  },
  instagram: {
    eyebrow: 'Community',
    title: 'See it through the eyes of people who came',
    text: 'More than 12,000 people follow the ranch day to day. No catalog photos here: these are from people who came for a day and left asking to stay.',
    cta: 'Follow',
  },
  location: {
    eyebrow: 'Location',
    title: 'Easy to reach, hard to forget',
    text: 'We are on the main road of Anamuyita, between Higüey and Punta Cana. You trade sand for mountain in under an hour.',
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
        q: 'Do I need to book ahead?',
        a: 'Weekends and holidays fill up. Message us on WhatsApp first and we will hold your spot.',
      },
      {
        q: 'What does lodging include?',
        a: 'It depends on what you choose: cabin, country house or camping. The country house can include breakfast, lunch and dinner. Write to us and we will send rates and availability right away.',
      },
      {
        q: 'Is it a good plan for kids?',
        a: 'It is one of the few places where the kids wear out before you do. Pool, grass, animals and plenty of room to run.',
      },
      {
        q: 'What should I bring?',
        a: 'Swimsuit, sneakers for the trails, repellent and the urge to disconnect. We take care of the rest.',
      },
      {
        q: 'How do I get to the ranch?',
        a: 'We are on the main road of Anamuyita, between Higüey and Punta Cana. Check the location section for the exact route.',
      },
    ],
  },
  contact: {
    eyebrow: 'Book',
    title: 'Tell us when you are coming',
    text: 'Fill this in twenty seconds and we will confirm availability and rates on WhatsApp.',
    name: 'Your name',
    date: 'Visit date',
    guests: 'Number of guests',
    type: 'Type of visit',
    types: ['Day pass', 'Lodging', 'Event or group'],
    message: 'Tell us your plan (optional)',
    submit: 'Send via WhatsApp',
    note: 'Submitting opens WhatsApp with your message ready. No spam: you talk straight to the ranch.',
    waGreeting: 'Hello Rancho Salto Taíno, I would like to book.',
  },
  footer: {
    tagline: 'Nature, tradition and fun in the mountains of Anamuyita.',
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
