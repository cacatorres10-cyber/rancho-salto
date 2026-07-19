import { MessageCircle } from 'lucide-react'
import { useLang } from '@/i18n'
import { whatsappLink } from '@/config'

export function WhatsAppFloat() {
  const { t } = useLang()

  return (
    <a
      href={whatsappLink(t.contact.waGreeting)}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full bg-[#25D366] px-5 py-3.5 font-semibold text-white shadow-2xl shadow-black/30 hover:scale-105 transition-transform"
    >
      <MessageCircle size={22} fill="white" className="text-[#25D366]" />
      <span className="hidden sm:inline text-sm">{t.floatWa}</span>
    </a>
  )
}
