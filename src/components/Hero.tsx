import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useLang } from '@/i18n'
import { whatsappLink } from '@/config'
import { IMG, VIDEO } from '@/assets/media'

export function Hero() {
  const { t } = useLang()
  const [videoOk, setVideoOk] = useState(true)
  const reduce = useReducedMotion()
  const from = (y: number) => (reduce ? undefined : { opacity: 0, y })

  return (
    <section id="inicio" className="relative h-[100svh] min-h-[600px] overflow-hidden grain">
      {/* Fondo: video con fallback a imagen */}
      <div className="absolute inset-0">
        {videoOk ? (
          <video
            className="h-full w-full object-cover"
            src={VIDEO.hero}
            poster={IMG.heroPoster}
            autoPlay
            muted
            loop
            playsInline
            onError={() => setVideoOk(false)}
          />
        ) : (
          <img
            src={IMG.heroPoster}
            alt="Naturaleza del Rancho Salto Taíno"
            className="h-full w-full object-cover animate-slow-zoom"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-jungle-950/70 via-jungle-950/30 to-jungle-950/80" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
        <motion.p
          initial={from(20)}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-5 text-xs md:text-sm font-semibold uppercase tracking-[0.35em] text-sand-200"
        >
          {t.hero.eyebrow}
        </motion.p>

        <h1 className="font-display text-sand-50 leading-[0.95]">
          <motion.span
            initial={from(30)}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="block text-3xl md:text-5xl italic font-medium text-sand-200"
          >
            {t.hero.title1}
          </motion.span>
          <motion.span
            initial={from(40)}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="block text-6xl md:text-[7.5rem] font-semibold tracking-tight uppercase"
          >
            {t.hero.title2}
          </motion.span>
        </h1>

        <motion.p
          initial={from(30)}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="mt-6 max-w-2xl text-base md:text-lg text-sand-100/90 font-light"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={from(30)}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95 }}
          className="mt-9 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href={whatsappLink(t.contact.waGreeting)}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-sand-300 px-8 py-4 text-sm md:text-base font-semibold text-jungle-950 shadow-xl shadow-black/30 hover:bg-sand-200 hover:scale-105 transition-all"
          >
            {t.hero.cta1}
          </a>
          <a
            href="#rancho"
            className="rounded-full border border-sand-100/40 px-8 py-4 text-sm md:text-base font-semibold text-sand-100 hover:bg-sand-100/10 transition-colors"
          >
            {t.hero.cta2}
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#rancho"
        initial={reduce ? undefined : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-1 text-sand-100/70 hover:text-sand-100 transition-colors"
      >
        <span className="text-[11px] uppercase tracking-[0.25em]">{t.hero.scroll}</span>
        <ChevronDown className="animate-bounce" size={20} />
      </motion.a>
    </section>
  )
}
