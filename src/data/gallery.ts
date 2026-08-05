// ============================================================================
// CARPETA DE FOTOS DEL RANCHO
// ----------------------------------------------------------------------------
// Esta es la unica lista de fotos del rancho. De aqui salen tanto la galeria
// giratoria como el album completo que se abre desde la seccion del video.
//
// Para agregar una foto nueva: copiala a public/gallery y agrega una linea
// aqui. Aparece sola en el album, sin tocar nada mas.
//
// Las fotos de las excursiones NO van aqui: esas viven en data/excursions.ts.
// ============================================================================

const img = (file: string) => `${import.meta.env.BASE_URL}gallery/${file}`

export interface Photo {
  src: string
  es: string
  en: string
  /** Encuadre opcional para fotos verticales (ej: '50% 25%'). */
  pos?: string
}

export const PHOTOS: Photo[] = [
  // Las primeras ocho son las que salen en la galeria giratoria
  { src: img('aerea-piscinas.jpg'), es: 'Las piscinas desde el aire', en: 'The pools from above' },
  { src: img('zipline-2.jpg'), es: 'Zipline sobre la montaña', en: 'Zipline over the mountain', pos: '50% 25%' },
  { src: img('piscina-amigas.jpg'), es: 'Tarde de piscina', en: 'An afternoon in the pool' },
  { src: img('camping-1.jpg'), es: 'Camping sobre la grama', en: 'Camping on the grass' },
  { src: img('palapa.jpg'), es: 'La palapa', en: 'The palapa' },
  { src: img('atardecer-aereo.jpg'), es: 'Atardecer sobre el rancho', en: 'Sunset over the ranch' },
  { src: img('familia.jpg'), es: 'En familia', en: 'Family time' },
  { src: img('jardines.jpg'), es: 'Senderos entre palmeras', en: 'Paths among palm trees' },

  // Resto del album
  { src: img('aerea-rancho.jpg'), es: 'El rancho desde el aire', en: 'The ranch from above' },
  { src: img('pool-complex.jpg'), es: 'El área de piscinas', en: 'The pool area' },
  { src: img('puente.jpg'), es: 'El puente colgante', en: 'The hanging bridge' },
  { src: img('rio.jpg'), es: 'El río Anamuya', en: 'The Anamuya river' },
  { src: img('zipline.jpg'), es: 'Volando sobre el verde', en: 'Flying over the green' },
  { src: img('comedor.jpg'), es: 'El comedor', en: 'The dining hall' },
  { src: img('habitacion.jpg'), es: 'Casitas de colores', en: 'Colorful cabins' },
  { src: img('casa-campo.jpg'), es: 'La casa de campo', en: 'The country house' },
  { src: img('casa-arbol-noche.jpg'), es: 'Noche en el rancho', en: 'Night at the ranch' },
  { src: img('camping-2.jpg'), es: 'Tiendas listas', en: 'Tents ready and waiting' },
  { src: img('grupo-palmeras.jpg'), es: 'Excursiones y grupos', en: 'Groups and excursions' },
  { src: img('columpio.jpg'), es: 'El columpio', en: 'The swing' },
  { src: img('entrada.jpg'), es: 'La entrada del rancho', en: 'The ranch entrance' },
  { src: img('splash.jpg'), es: 'Puro chapuzón', en: 'Pure splashing' },
  { src: img('los-peques.jpg'), es: 'Los peques', en: 'The little ones' },
  { src: img('entre-amigos.jpg'), es: 'Entre amigos', en: 'With friends' },
  { src: img('buena-vibra.jpg'), es: 'Buena vibra', en: 'Good vibes' },
  { src: img('ig-1.jpg'), es: 'Amigas en la piscina', en: 'Friends in the pool' },
  { src: img('ig-2.jpg'), es: 'Al borde del agua', en: 'By the water' },
  { src: img('ig-3.jpg'), es: 'La piscina de los murales', en: 'The mural pool' },
  { src: img('ig-4.jpg'), es: 'Agua fresca y risas', en: 'Cool water and laughter' },
]

/** Las que se muestran en la galeria giratoria. */
export const CAROUSEL_PHOTOS = PHOTOS.slice(0, 8)
