import { useState } from 'react'
import { ArrowRight, Check, Clock, Backpack } from 'lucide-react'
import { useLang } from '@/i18n'
import { whatsappLink } from '@/config'
import { EXCURSIONS } from '@/data/excursions'
import type { Excursion } from '@/data/excursions'
import { Modal } from '@/components/ui/modal'
import { Reveal } from '@/components/Reveal'
import { cn } from '@/lib/utils'

export function Excursions() {
  const { t, lang } = useLang()
  const [active, setActive] = useState<Excursion | null>(null)
  const copy = active ? active[lang] : null

  return (
    <section id="excursiones" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-sand-600">
            {t.excursions.eyebrow}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight text-jungle-900">
            {t.excursions.title}
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">{t.excursions.subtitle}</p>
        </Reveal>

        {/* Con pocas excursiones el grid se estrecha para que no queden huecos.
            Al agregar la tercera pasa solo a tres columnas. */}
        <div
          className={cn(
            'mt-14 grid gap-8 sm:grid-cols-2',
            EXCURSIONS.length > 2 ? 'lg:grid-cols-3' : 'mx-auto max-w-4xl',
          )}
        >
          {EXCURSIONS.map((exc, i) => {
            const c = exc[lang]
            return (
              <Reveal key={exc.id} delay={(i % 3) * 0.1}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={exc.image}
                      alt={c.name}
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                      style={{ objectPosition: exc.imagePosition }}
                      loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-jungle-950/70 to-transparent" />
                    <span className="absolute right-4 top-4 rounded-full bg-sand-300 px-4 py-1.5 text-sm font-bold text-jungle-950 shadow-lg">
                      {exc.price ?? t.excursions.askPrice}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-display text-2xl font-semibold text-jungle-900">
                      {c.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-sand-600">{c.tagline}</p>
                    <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{c.short}</p>

                    <button
                      onClick={() => setActive(exc)}
                      className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-jungle-900 px-6 py-3.5 font-semibold text-sand-100 transition-colors hover:bg-jungle-700"
                    >
                      {t.excursions.details}
                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </button>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>

      <Modal
        open={active !== null}
        onClose={() => setActive(null)}
        labelledBy="excursion-title"
        closeLabel={t.excursions.close}
      >
        {active && copy && (
          <>
            <div className="relative h-56 w-full sm:h-64">
              <img
                src={active.image}
                alt={copy.name}
                className="h-full w-full object-cover"
                style={{ objectPosition: active.imagePosition }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jungle-950/90 via-jungle-950/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-sand-300">
                  {copy.tagline}
                </p>
                <h3
                  id="excursion-title"
                  className="mt-1 font-display text-3xl font-semibold text-sand-50 sm:text-4xl"
                >
                  {copy.name}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-sand-300 px-4 py-1.5 text-sm font-bold text-jungle-950">
                  {active.price ? `${active.price} ${t.excursions.perPerson}` : t.excursions.askPrice}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground">
                  <Clock size={15} />
                  {copy.duration}
                </span>
              </div>

              <p className="mt-6 leading-relaxed text-muted-foreground">{copy.description}</p>

              <h4 className="mt-8 font-display text-lg font-semibold text-jungle-900">
                {t.excursions.includes}
              </h4>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {copy.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-muted-foreground">
                    <Check size={18} className="mt-0.5 shrink-0 text-jungle-600" />
                    {item}
                  </li>
                ))}
              </ul>

              <h4 className="mt-8 flex items-center gap-2 font-display text-lg font-semibold text-jungle-900">
                <Backpack size={19} className="text-jungle-600" />
                {t.excursions.bring}
              </h4>
              <p className="mt-2 text-muted-foreground">{copy.bring.join(' · ')}</p>

              <a
                href={whatsappLink(
                  lang === 'es'
                    ? `Hola Rancho Salto Taíno, quiero reservar la excursión: ${copy.name}.`
                    : `Hello Rancho Salto Taíno, I would like to book the tour: ${copy.name}.`,
                )}
                target="_blank"
                rel="noreferrer"
                className="mt-8 flex w-full items-center justify-center gap-2.5 rounded-xl bg-jungle-900 px-8 py-4 font-semibold text-sand-100 transition-colors hover:bg-jungle-700"
              >
                {t.excursions.book}
              </a>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                {t.excursions.priceNote}
              </p>
            </div>
          </>
        )}
      </Modal>
    </section>
  )
}
