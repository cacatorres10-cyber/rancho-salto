// Fotos y videos del rancho.
// Casi todo el material es REAL: fotos del Instagram @ranchosaltotainord y
// fotogramas de los videos que envio el propio rancho (autorizado por el dueño).
// Los originales de video quedan fuera de public/ en la carpeta media-fonte.
// Solo queda stock de apoyo para el paseo a caballo (sin foto propia todavia).

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?w=${w}&auto=format&fit=crop&q=80`

const local = (file: string) => `${import.meta.env.BASE_URL}gallery/${file}`

export const IMG = {
  // Unico stock que queda: paseo a caballo
  horse: u('photo-1553284965-83fd3e82fa5a', 900),

  // Vistas aereas y del terreno (fotogramas de los videos del rancho)
  aereaRancho: local('aerea-rancho.jpg'),
  aereaPiscinas: local('aerea-piscinas.jpg'),
  atardecerAereo: local('atardecer-aereo.jpg'),
  entrada: local('entrada.jpg'),
  puente: local('puente.jpg'),
  comedor: local('comedor.jpg'),
  palapa: local('palapa.jpg'),
  habitacion: local('habitacion.jpg'),
  posterVideo: local('poster-video.jpg'),

  // Fotos que envio el rancho
  camping1: local('camping-1.jpg'),
  camping2: local('camping-2.jpg'),
  casaArbolNoche: local('casa-arbol-noche.jpg'),

  // Fotos del Instagram
  aboutMain: local('grupo-palmeras.jpg'),
  aboutSecondary: local('columpio.jpg'),
  pool: local('pool-complex.jpg'),
  zipline: local('zipline.jpg'),
  river: local('rio.jpg'),
  casaCampo: local('casa-campo.jpg'),
  galZipline2: local('zipline-2.jpg'),
  galPiscina: local('piscina-amigas.jpg'),
  galFamilia: local('familia.jpg'),
  galJardines: local('jardines.jpg'),
  galVibra: local('buena-vibra.jpg'),
  galAmigos: local('entre-amigos.jpg'),
  galSplash: local('splash.jpg'),
  galPeques: local('los-peques.jpg'),
  ig1: local('ig-1.jpg'),
  ig2: local('ig-2.jpg'),
  ig3: local('ig-3.jpg'),
  ig4: local('ig-4.jpg'),
}

export const VIDEO = {
  // Sobrevuelo del rancho (video propio del rancho)
  hero: local('hero-drone.mp4'),
  // Version ligera del sobrevuelo para pantallas pequeñas
  heroSmall: local('hero-drone-sm.mp4'),
  // Palapa y puente colgante sobre el rio (video propio del rancho)
  feature: local('video-rancho.mp4'),
  // Reel del Instagram @ranchosaltotainord
  reel: local('reel.mp4'),
}
