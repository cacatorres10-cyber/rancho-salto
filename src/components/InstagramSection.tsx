import { InstagramIcon as Instagram } from '@/components/icons'
import { useLang } from '@/i18n'
import { IMG, VIDEO } from '@/assets/media'
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '@/config'
import { Reveal } from '@/components/Reveal'

const igImages = [IMG.ig1, IMG.ig2, IMG.ig3, IMG.ig4]

export function InstagramSection() {
  const { t } = useLang()

  return (
    <section className="py-24 md:py-28 bg-sand-100/60">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-sand-600">
              {t.instagram.eyebrow}
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-jungle-900">
              {t.instagram.title}
            </h2>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">{t.instagram.text}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-jungle-900 px-7 py-3.5 font-semibold text-sand-100 hover:bg-jungle-700 transition-colors"
            >
              <Instagram size={19} />
              {t.instagram.cta} {INSTAGRAM_HANDLE}
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-[300px_1fr]">
          <Reveal>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="group relative block overflow-hidden rounded-2xl aspect-[9/16] max-w-[300px] mx-auto lg:mx-0"
            >
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={VIDEO.reel}
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-jungle-950/80 to-transparent p-4 pt-10">
                <span className="flex items-center gap-2 text-sm font-semibold text-sand-50">
                  <Instagram size={16} />
                  {INSTAGRAM_HANDLE}
                </span>
              </div>
            </a>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {igImages.map((src, i) => (
              <Reveal key={src} delay={i * 0.08}>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block h-full min-h-[180px] overflow-hidden rounded-2xl"
                >
                  <img
                    src={src}
                    alt={`Instagram ${INSTAGRAM_HANDLE}`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-jungle-950/0 transition-colors duration-500 group-hover:bg-jungle-950/50">
                    <Instagram
                      size={30}
                      className="text-sand-50 opacity-0 scale-75 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
                    />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
