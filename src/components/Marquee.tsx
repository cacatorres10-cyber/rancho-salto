import { useLang } from '@/i18n'

export function Marquee() {
  const { t } = useLang()
  const row = [...t.marquee, ...t.marquee]

  return (
    <div className="relative overflow-hidden bg-jungle-950 py-4 border-y border-sand-300/20">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 text-sm md:text-base font-medium uppercase tracking-[0.2em] text-sand-200/80"
          >
            {item}
            <span className="text-sand-300">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
