// Imagenes y videos stock (Unsplash / Mixkit) usados como marcadores de posicion.
// Sustituir por las fotos y videos reales del Instagram @ranchosaltotainord
// cuando esten disponibles: basta con cambiar las URLs aqui.

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?w=${w}&auto=format&fit=crop&q=80`

export const IMG = {
  heroPoster: u('photo-1469474968028-56623f02e42e', 1920),
  aboutMain: u('photo-1441974231531-c6227db76b6e'),
  aboutSecondary: u('photo-1518495973542-4542c06a5843', 900),
  waterfall: u('photo-1433086966358-54859d0ed716', 900),
  horse: u('photo-1553284965-83fd3e82fa5a', 900),
  pool: u('photo-1520250497591-112f2f40a3f4', 900),
  poolWide: u('photo-1540541338287-41700207dee6', 1600),
  treehouse: u('photo-1449158743715-0a90ebb6d2d8', 900),
  camping: u('photo-1504280390367-361c6d9f38f4', 900),
  campfire: u('photo-1517824806704-9040b037703b', 900),
  food: u('photo-1555939594-58d7cb561ad1', 900),
  foodTable: u('photo-1504674900247-0877df9cc836', 900),
  trails: u('photo-1501854140801-50d01698950b', 900),
  sunset: u('photo-1495616811223-4d98c6e9c869', 900),
  mist: u('photo-1470071459604-3b5ec3a7fe05', 900),
  room: u('photo-1566073771259-6a8506099945', 900),
  canoe: u('photo-1476514525535-07fb3b4ae5f1', 900),
  forestLight: u('photo-1469474968028-56623f02e42e', 900),
}

export const VIDEO = {
  // Cascada en la selva (Pexels, uso libre)
  hero: 'https://videos.pexels.com/video-files/5744454/5744454-hd_1920_1080_24fps.mp4',
  // Paseo a caballo en campo verde (Pexels, uso libre)
  feature: 'https://videos.pexels.com/video-files/18319293/18319293-hd_1920_1080_30fps.mp4',
}
