// Fotos y videos del rancho.
// Las fotos en /gallery son REALES, tomadas del Instagram @ranchosaltotainord
// con autorizacion del dueño. Las URLs de Unsplash/Pexels que quedan son stock
// de apoyo para escenas sin foto propia (hero, caballos, comida, camping).

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?w=${w}&auto=format&fit=crop&q=80`

const local = (file: string) => `${import.meta.env.BASE_URL}gallery/${file}`

export const IMG = {
  // Stock de apoyo
  heroPoster: u('photo-1469474968028-56623f02e42e', 1920),
  horse: u('photo-1553284965-83fd3e82fa5a', 900),
  food: u('photo-1555939594-58d7cb561ad1', 900),
  campfire: u('photo-1517824806704-9040b037703b', 900),
  room: u('photo-1566073771259-6a8506099945', 900),
  camping: u('photo-1504280390367-361c6d9f38f4', 900),
  poolWide: u('photo-1540541338287-41700207dee6', 1600),

  // Fotos reales del rancho (Instagram)
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
  // Cascada en la selva (Pexels, uso libre)
  hero: 'https://videos.pexels.com/video-files/5744454/5744454-hd_1920_1080_24fps.mp4',
  // Paseo a caballo en campo verde (Pexels, uso libre)
  feature: 'https://videos.pexels.com/video-files/18319293/18319293-hd_1920_1080_30fps.mp4',
  // Reel real del rancho (Instagram @ranchosaltotainord)
  reel: local('reel.mp4'),
}
