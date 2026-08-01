import { useState } from 'react'
import { InstagramIcon as Instagram } from '@/components/icons'
import { useLang } from '@/i18n'
import { IMG, VIDEO } from '@/assets/media'
import { INSTAGRAM_URL } from '@/config'
import { Reveal } from '@/components/Reveal'

export function VideoSection() {
  const { t } = useLang()
  const [videoOk, setVideoOk] = useState(true)

  return (
    <section className="relative h-[85vh] min-h-[520px] overflow-hidden">
      {videoOk ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={VIDEO.feature}
          poster={IMG.posterVideo}
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoOk(false)}
        />
      ) : (
        <img
          src={IMG.posterVideo}
          alt="Puente colgante sobre el río del rancho"
          className="absolute inset-0 h-full w-full object-cover animate-slow-zoom"
        />
      )}
      <div className="absolute inset-0 bg-jungle-950/50" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
        <Reveal>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-sand-200">
            {t.video.eyebrow}
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-semibold text-sand-50 max-w-3xl leading-tight">
            {t.video.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-sand-100/85">{t.video.text}</p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-sand-50 px-8 py-4 font-semibold text-jungle-950 shadow-xl hover:scale-105 transition-transform"
          >
            <Instagram size={20} />
            {t.video.cta}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
