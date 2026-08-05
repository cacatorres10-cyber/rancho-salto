import { MapPin } from 'lucide-react'
import { InstagramIcon as Instagram } from '@/components/icons'
import { useLang } from '@/i18n'
import { ADDRESS, PHONES, INSTAGRAM_URL, INSTAGRAM_HANDLE, whatsappLink } from '@/config'

export function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  const links = [
    { href: '#rancho', label: t.nav.rancho },
    { href: '#experiencias', label: t.nav.experiencias },
    { href: '#excursiones', label: t.nav.excursiones },
    { href: '#alojamiento', label: t.nav.alojamiento },
    { href: '#galeria', label: t.nav.galeria },
    { href: '#ubicacion', label: t.nav.ubicacion },
  ]

  return (
    <footer className="bg-jungle-950 border-t border-sand-100/10 pt-16 pb-8 text-sand-100/70">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href="#inicio" className="inline-block" aria-label="Rancho Salto Taíno">
              <img
                src={`${import.meta.env.BASE_URL}logo-light.png`}
                alt="Rancho Salto Taíno"
                className="h-16 w-auto"
              />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">{t.footer.tagline}</p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-sand-100">{t.footer.links}</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-sand-200 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-sand-100">
              {t.footer.contact}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={17} className="mt-0.5 shrink-0 text-sand-300" />
                {ADDRESS}
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-sand-300">✆</span>
                {PHONES.join(' / ')}
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-sand-200 transition-colors"
                >
                  <Instagram size={17} className="text-sand-300" />
                  {INSTAGRAM_HANDLE}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink(t.contact.waGreeting)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-sand-200 transition-colors"
                >
                  <span className="text-sand-300">✆</span> WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-sand-100/10 pt-6 text-center text-xs text-sand-100/40">
          © {year} Rancho Salto Taíno. {t.footer.rights}
        </div>
      </div>
    </footer>
  )
}
