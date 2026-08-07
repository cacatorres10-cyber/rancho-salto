import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLang } from '@/i18n'
import { Reveal } from '@/components/Reveal'
import { cn } from '@/lib/utils'

export function Faq() {
  const { t } = useLang()
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section className="py-24 md:py-28 bg-soft">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal className="text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-eyebrow">
            {t.faq.eyebrow}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            {t.faq.title}
          </h2>
        </Reveal>

        <div className="mt-12 space-y-4">
          {t.faq.items.map((item, i) => {
            const open = openIdx === i
            return (
              <Reveal key={item.q} delay={i * 0.06}>
                <div className="overflow-hidden rounded-2xl border border-border bg-card">
                  <button
                    onClick={() => setOpenIdx(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={open}
                  >
                    <span className="font-display text-lg font-semibold text-foreground">
                      {item.q}
                    </span>
                    <ChevronDown
                      size={20}
                      className={cn(
                        'shrink-0 text-accent transition-transform duration-300',
                        open && 'rotate-180',
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      'grid transition-all duration-300 ease-out',
                      open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 leading-relaxed text-muted-foreground">{item.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
