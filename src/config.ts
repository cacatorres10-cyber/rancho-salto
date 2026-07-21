// Datos de contacto del rancho (tomados del Instagram oficial @ranchosaltotainord).
export const WHATSAPP_NUMBER = '18292577216'

export const PHONES = ['(829) 257-7216', '(809) 480-2387']

export const INSTAGRAM_URL = 'https://www.instagram.com/ranchosaltotainord'
export const INSTAGRAM_HANDLE = '@ranchosaltotainord'

export const ADDRESS = 'Anamuyita, Higüey, La Altagracia, República Dominicana'

export const MAPS_EMBED_URL =
  'https://www.google.com/maps?q=Anamuya,+Higuey,+Dominican+Republic&z=13&output=embed'

export const MAPS_LINK =
  'https://www.google.com/maps/search/?api=1&query=Anamuya+Higuey+Dominican+Republic'

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
