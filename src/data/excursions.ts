// ============================================================================
// EXCURSIONES
// ----------------------------------------------------------------------------
// Para agregar una excursion nueva: copia un bloque completo, cambia el `id`,
// la imagen y los textos. La tarjeta y el modal se generan solos, asi que la
// pagina no se recarga visualmente por mas excursiones que agregues.
//
// >>> PRECIOS: confirmar con el rancho antes de publicar. Los valores de abajo
// >>> son de referencia. Si pones `price: null`, la tarjeta muestra
// >>> "Consultar precio" en vez de un monto.
// ============================================================================

const img = (file: string) => `${import.meta.env.BASE_URL}gallery/${file}`

export interface ExcursionCopy {
  name: string
  tagline: string
  short: string
  description: string
  includes: string[]
  duration: string
  bring: string[]
}

export interface Excursion {
  id: string
  image: string
  /** Encuadre de la foto, util cuando la imagen es vertical (ej: '50% 20%'). */
  imagePosition?: string
  /** Precio por persona ya formateado, o null para mostrar "Consultar precio". */
  price: string | null
  es: ExcursionCopy
  en: ExcursionCopy
}

export const EXCURSIONS: Excursion[] = [
  {
    id: 'aventura-5-en-1',
    image: img('exc-5en1.jpg'),
    imagePosition: '50% 22%',
    price: 'US$85',
    es: {
      name: 'Aventura 5 en 1',
      tagline: 'Cinco aventuras en un solo día',
      short: 'Zipline, buggy, caballos, puente colgante y río.',
      description:
        'El día completo del rancho, sin tener que escoger. Vuelas en zipline sobre la montaña, coges el buggy por los caminos de tierra, subes la loma a caballo, cruzas el puente colgante y terminas metido en el agua verde del río. Almuerzo criollo incluido para reponer fuerzas.',
      includes: [
        'Zipline sobre la montaña',
        'Recorrido en buggy',
        'Paseo a caballo',
        'Puente colgante y río',
        'Almuerzo criollo',
        'Guías durante todo el recorrido',
      ],
      duration: 'Día completo',
      bring: ['Traje de baño', 'Tenis o zapatos cerrados', 'Muda de ropa', 'Repelente'],
    },
    en: {
      name: '5 in 1 Adventure',
      tagline: 'Five adventures in a single day',
      short: 'Zipline, buggy, horses, hanging bridge and river.',
      description:
        'The full ranch day, with nothing left out. You fly the zipline over the mountain, take the buggy down the dirt roads, ride a horse up the hill, cross the hanging bridge and end up in the green water of the river. Creole lunch included to get your strength back.',
      includes: [
        'Zipline over the mountain',
        'Buggy ride',
        'Horseback riding',
        'Hanging bridge and river',
        'Creole lunch',
        'Guides throughout the tour',
      ],
      duration: 'Full day',
      bring: ['Swimsuit', 'Sneakers or closed shoes', 'Change of clothes', 'Repellent'],
    },
  },
  {
    id: 'isla-saona',
    image: img('exc-saona.jpg'),
    price: 'US$55',
    es: {
      name: 'Isla Saona',
      tagline: 'El Caribe de postal, sin filtro',
      short: 'Catamarán con barra libre, piscina natural y arena blanca.',
      description:
        'Sales temprano hacia el sureste y el día se te va entre agua turquesa y música. Navegas en catamarán con barra libre, paras en la piscina natural donde el mar te llega a la cintura y almuerzas con los pies en la arena de una de las playas más bonitas del Caribe.',
      includes: [
        'Transporte de ida y vuelta',
        'Catamarán con barra libre',
        'Parada en la piscina natural',
        'Almuerzo en la isla',
        'Guía acompañante',
      ],
      duration: 'Día completo',
      bring: ['Traje de baño', 'Protector solar', 'Toalla', 'Cámara'],
    },
    en: {
      name: 'Saona Island',
      tagline: 'The postcard Caribbean, unfiltered',
      short: 'Catamaran with open bar, natural pool and white sand.',
      description:
        'You leave early toward the southeast and the day slips by between turquoise water and music. You sail on a catamaran with an open bar, stop at the natural pool where the sea reaches your waist and have lunch with your feet in the sand of one of the prettiest beaches in the Caribbean.',
      includes: [
        'Round trip transport',
        'Catamaran with open bar',
        'Stop at the natural pool',
        'Lunch on the island',
        'Guide with the group',
      ],
      duration: 'Full day',
      bring: ['Swimsuit', 'Sunscreen', 'Towel', 'Camera'],
    },
  },
]
