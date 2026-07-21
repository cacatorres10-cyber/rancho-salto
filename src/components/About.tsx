import { Leaf, Users, Flame } from 'lucide-react'
import { useLang } from '@/i18n'
import { IMG } from '@/assets/media'
import { Reveal } from '@/components/Reveal'

const featureIcons = [Leaf, Users, Flame]

export function About() {
  const { t } = useLang()

  return (
    <section id="rancho" className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={IMG.aboutMain}
                  alt="Visitantes en la escalinata entre palmeras del rancho"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-8 -right-4 md:-right-8 w-44 md:w-60 overflow-hidden rounded-2xl border-4 border-background shadow-2xl">
                <img
                  src={IMG.aboutSecondary}
                  alt="Madre e hijo en el columpio del rancho"
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                />
              </div>
              <span className="absolute -top-5 -left-3 md:-left-6 rounded-full bg-jungle-800 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-sand-200 shadow-lg">
                Anamuyita, RD
              </span>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-sand-600">
                {t.about.eyebrow}
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight text-jungle-900">
                {t.about.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{t.about.p1}</p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{t.about.p2}</p>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {t.about.features.map((f, i) => {
                const Icon = featureIcons[i]
                return (
                  <Reveal key={f.title} delay={0.15 + i * 0.1}>
                    <div className="rounded-2xl border border-border bg-card p-5 h-full">
                      <Icon className="mb-3 text-jungle-600" size={26} strokeWidth={1.8} />
                      <h3 className="font-display text-lg font-semibold text-jungle-900">
                        {f.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {f.text}
                      </p>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
