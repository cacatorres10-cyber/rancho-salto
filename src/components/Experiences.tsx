import { useLang } from '@/i18n'
import { IMG } from '@/assets/media'
import { Reveal } from '@/components/Reveal'

const expImages = [
  IMG.aereaPiscinas,
  IMG.horse,
  IMG.puente,
  IMG.zipline,
  IMG.comedor,
  IMG.palapa,
]

export function Experiences() {
  const { t } = useLang()

  return (
    <section id="experiencias" className="relative bg-jungle-950 py-24 md:py-32 grain">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-sand-300">
            {t.experiences.eyebrow}
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-semibold leading-tight text-sand-50">
            {t.experiences.title}
          </h2>
          <p className="mt-5 text-lg text-sand-100/70">{t.experiences.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.experiences.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.12}>
              <article className="group relative h-[420px] overflow-hidden rounded-3xl">
                <img
                  src={expImages[i]}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jungle-950/95 via-jungle-950/25 to-transparent" />
                <span className="absolute top-5 right-6 font-display text-5xl font-light text-sand-100/25 group-hover:text-sand-100/60 transition-colors duration-500">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <h3 className="font-display text-2xl font-semibold text-sand-50">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-sand-100/75 opacity-0 translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    {item.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
