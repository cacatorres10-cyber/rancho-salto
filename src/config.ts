// Datos de contacto del rancho.
// IMPORTANTE: reemplaza el numero de WhatsApp por el numero real del rancho
// (formato internacional sin +, ej: 18095551234).
export const WHATSAPP_NUMBER = '18090000000'

export const INSTAGRAM_URL = 'https://www.instagram.com/ranchosaltotainord'
export const INSTAGRAM_HANDLE = '@ranchosaltotainord'

export const ADDRESS = 'Carretera Principal, Anamuya, Higüey, La Altagracia, República Dominicana'

export const MAPS_EMBED_URL =
  'https://www.google.com/maps?q=Anamuya,+Higuey,+Dominican+Republic&z=13&output=embed'

export const MAPS_LINK =
  'https://www.google.com/maps/search/?api=1&query=Anamuya+Higuey+Dominican+Republic'

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
