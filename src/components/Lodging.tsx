import { ArrowUpRight } from 'lucide-react'
import { useLang } from '@/i18n'
import { IMG } from '@/assets/media'
import { whatsappLink } from '@/config'
import { Reveal } from '@/components/Reveal'

const lodgingImages = [IMG.room, IMG.treehouse, IMG.camping]

export function Lodging() {
  const { t, lang } = useLang()

  return (
    <section id="alojamiento" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-sand-600">
            {t.lodging.eyebrow}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight text-jungle-900">
            {t.lodging.title}
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">{t.lodging.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {t.lodging.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.12}>
              <article className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={lodgingImages[i]}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-jungle-950/80 backdrop-blur px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-sand-200">
                    {item.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-2xl font-semibold text-jungle-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{item.text}</p>
                  <a
                    href={whatsappLink(
                      lang === 'es'
                        ? `Hola, quiero consultar disponibilidad de: ${item.title}`
                        : `Hello, I would like to check availability for: ${item.title}`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-jungle-700 hover:text-jungle-500 transition-colors"
                  >
                    {t.lodging.cta}
                    <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
