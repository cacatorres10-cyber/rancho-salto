import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react'
import { useLang } from '@/i18n'
import { ADDRESS, PHONES, MAPS_EMBED_URL, MAPS_LINK } from '@/config'
import { IMG } from '@/assets/media'
import { Reveal } from '@/components/Reveal'

export function LocationSection() {
  const { t } = useLang()

  return (
    <section id="ubicacion" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-sand-600">
                {t.location.eyebrow}
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight text-jungle-900">
                {t.location.title}
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">{t.location.text}</p>
              <p className="mt-4 flex items-start gap-2.5 text-jungle-800 font-medium">
                <MapPin size={20} className="mt-0.5 shrink-0 text-jungle-600" />
                {ADDRESS}
              </p>
              <p className="mt-2 flex items-start gap-2.5 text-jungle-800 font-medium">
                <Phone size={20} className="mt-0.5 shrink-0 text-jungle-600" />
                {PHONES.join(' / ')}
              </p>
            </Reveal>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {t.location.distances.map((d, i) => (
                <Reveal key={d.place} delay={0.1 + i * 0.07}>
                  <div className="flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4">
                    <span className="font-medium text-jungle-900">{d.place}</span>
                    <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Clock size={15} />
                      {d.time}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-jungle-700 hover:text-jungle-500 transition-colors"
              >
                {t.location.cta}
                <ExternalLink size={17} />
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="mb-4 overflow-hidden rounded-3xl border border-border shadow-lg">
              <img
                src={IMG.entrada}
                alt="Entrada del Rancho Salto Taíno desde la carretera"
                className="h-48 w-full object-cover md:h-56"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-3xl border border-border shadow-xl">
              <iframe
                src={MAPS_EMBED_URL}
                title="Mapa Rancho Salto Taíno"
                className="h-[320px] w-full lg:h-[380px]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
