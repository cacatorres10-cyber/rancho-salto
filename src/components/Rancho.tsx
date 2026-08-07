import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLang } from '@/i18n'
import { IMG } from '@/assets/media'
import { Reveal } from '@/components/Reveal'
import { cn } from '@/lib/utils'

// Las fotos siguen el mismo orden que los textos en i18n.experiences.items
const expImages = [
  IMG.aereaPiscinas,
  IMG.horse,
  IMG.puente,
  IMG.zipline,
  IMG.comedor,
  IMG.palapa,
  IMG.aboutSecondary,
  IMG.aboutMain,
]

/**
 * "El Rancho": primero el texto que cuenta qué es el lugar y enseguida,
 * bajo el subtitulo de Experiencias, el carrusel con todas las fotos.
 */
export function Rancho() {
  const { t } = useLang()
  const scroller = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const onScroll = useCallback(() => {
    const el = scroller.current
    if (!el) return
    const card = el.firstElementChild as HTMLElement | null
    if (!card) return
    const step = card.offsetWidth + 20 // ancho de tarjeta + gap
    // Al final del scroll no se alcanza (n-1)*step por el padding lateral,
    // asi que el ultimo punto se marca a mano.
    const isEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8
    setIndex(isEnd ? el.children.length - 1 : Math.round(el.scrollLeft / step))
    setAtStart(el.scrollLeft < 8)
    setAtEnd(isEnd)
  }, [])

  useEffect(() => {
    onScroll()
    window.addEventListener('resize', onScroll)
    return () => window.removeEventListener('resize', onScroll)
  }, [onScroll])

  const scrollBy = (dir: 1 | -1) => {
    const el = scroller.current
    const card = el?.firstElementChild as HTMLElement | null
    if (!el || !card) return
    el.scrollBy({ left: dir * (card.offsetWidth + 20), behavior: 'smooth' })
  }

  const goTo = (i: number) => {
    const el = scroller.current
    const card = el?.firstElementChild as HTMLElement | null
    if (!el || !card) return
    el.scrollTo({ left: i * (card.offsetWidth + 20), behavior: 'smooth' })
  }

  return (
    <section id="rancho" className="relative bg-jungle-950 py-24 md:py-32 grain">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* 1. El texto: qué es este lugar */}
        <Reveal>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-sand-300">
            {t.about.eyebrow}
          </p>
          <h2 className="max-w-3xl font-display text-4xl md:text-6xl font-semibold leading-tight text-sand-50">
            {t.about.title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-10">
            <p className="text-lg leading-relaxed text-sand-100/75">{t.about.p1}</p>
            <p className="text-lg leading-relaxed text-sand-100/75">{t.about.p2}</p>
          </div>
        </Reveal>

        {/* 2. Las fotos, bajo el subtitulo de experiencias */}
        <div id="experiencias" className="mt-20 scroll-mt-24 md:mt-24">
          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-sand-300">
              {t.experiences.eyebrow}
            </p>
            <h3 className="max-w-2xl font-display text-3xl md:text-5xl font-semibold leading-tight text-sand-50">
              {t.experiences.title}
            </h3>
            <p className="mt-4 max-w-2xl text-lg text-sand-100/70">{t.experiences.subtitle}</p>
          </Reveal>

          <div className="relative mt-12">
            <div
              ref={scroller}
              onScroll={onScroll}
              role="region"
              aria-label={t.experiences.title}
              tabIndex={0}
              className="scrollbar-hide -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-2 md:-mx-8 md:px-8"
            >
              {t.experiences.items.map((item, i) => (
                <article
                  key={item.title}
                  className="group relative h-[460px] w-[80vw] max-w-[340px] shrink-0 snap-center overflow-hidden rounded-3xl sm:w-[340px]"
                >
                  <img
                    src={expImages[i]}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Degradado fuerte: la leyenda se lee siempre, sin pasar el dedo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-jungle-950 via-jungle-950/45 to-transparent" />
                  <span className="absolute right-6 top-5 font-display text-5xl font-light text-sand-100/30">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <h4 className="font-display text-2xl font-semibold text-sand-50">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-sand-100/85">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>

            {/* Flechas para mouse: en celular se desliza con el dedo */}
            <button
              onClick={() => scrollBy(-1)}
              aria-label={t.experiences.prev}
              disabled={atStart}
              className={cn(
                'absolute -left-3 top-1/2 hidden -translate-y-1/2 place-items-center rounded-full border border-sand-100/25 bg-jungle-950/80 p-3 text-sand-50 backdrop-blur transition-opacity hover:bg-jungle-900 md:grid',
                atStart && 'pointer-events-none opacity-0',
              )}
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label={t.experiences.next}
              disabled={atEnd}
              className={cn(
                'absolute -right-3 top-1/2 hidden -translate-y-1/2 place-items-center rounded-full border border-sand-100/25 bg-jungle-950/80 p-3 text-sand-50 backdrop-blur transition-opacity hover:bg-jungle-900 md:grid',
                atEnd && 'pointer-events-none opacity-0',
              )}
            >
              <ChevronRight size={22} />
            </button>
          </div>

          <div className="mt-7 flex items-center justify-center gap-2.5">
            {t.experiences.items.map((item, i) => (
              <button
                key={item.title}
                onClick={() => goTo(i)}
                aria-label={item.title}
                aria-current={i === index}
                className={cn(
                  'h-2 rounded-full transition-all duration-300',
                  i === index ? 'w-7 bg-sand-300' : 'w-2 bg-sand-100/30 hover:bg-sand-100/60',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
