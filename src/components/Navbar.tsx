import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLang } from '@/i18n'
import { whatsappLink } from '@/config'
import { cn } from '@/lib/utils'

export function Navbar() {
  const { t, lang, setLang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#rancho', label: t.nav.rancho },
    { href: '#experiencias', label: t.nav.experiencias },
    { href: '#excursiones', label: t.nav.excursiones },
    { href: '#alojamiento', label: t.nav.alojamiento },
    { href: '#galeria', label: t.nav.galeria },
    { href: '#ubicacion', label: t.nav.ubicacion },
    { href: '#contacto', label: t.nav.contacto },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-jungle-950/90 backdrop-blur-md shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5',
      )}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between">
        <a href="#inicio" className="flex items-center" aria-label="Rancho Salto Taíno">
          <img
            src={`${import.meta.env.BASE_URL}logo-light.png`}
            alt="Rancho Salto Taíno"
            className={cn(
              'w-auto transition-all duration-500 drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]',
              scrolled ? 'h-12 md:h-14' : 'h-14 md:h-16',
            )}
          />
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-sand-100/80 hover:text-sand-100 transition-colors tracking-wide uppercase"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-1 text-xs font-semibold text-sand-100/70">
            <button
              onClick={() => setLang('es')}
              className={cn('px-1.5 py-1 transition-colors', lang === 'es' ? 'text-sand-100 underline underline-offset-4' : 'hover:text-sand-100')}
            >
              ES
            </button>
            <span>/</span>
            <button
              onClick={() => setLang('en')}
              className={cn('px-1.5 py-1 transition-colors', lang === 'en' ? 'text-sand-100 underline underline-offset-4' : 'hover:text-sand-100')}
            >
              EN
            </button>
          </div>
          <a
            href={whatsappLink(t.contact.waGreeting)}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-sand-300 px-5 py-2.5 text-sm font-semibold text-jungle-950 hover:bg-sand-200 transition-colors"
          >
            {t.nav.reservar}
          </a>
        </div>

        <button
          className="lg:hidden text-sand-100 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-jungle-950/95 backdrop-blur-md border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sand-100/90 font-medium tracking-wide uppercase text-sm"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="rounded-full border border-sand-100/30 px-4 py-2 text-xs font-semibold text-sand-100"
            >
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
            <a
              href={whatsappLink(t.contact.waGreeting)}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-sand-300 px-5 py-2 text-sm font-semibold text-jungle-950"
            >
              {t.nav.reservar}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
