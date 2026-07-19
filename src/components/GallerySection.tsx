import { useEffect, useState } from 'react'
import { CircularGallery } from '@/components/ui/circular-gallery'
import type { GalleryItem } from '@/components/ui/circular-gallery'
import { useLang } from '@/i18n'
import { IMG } from '@/assets/media'

const galleryImages = [
  { url: IMG.waterfall, by: 'Rancho Salto Taíno' },
  { url: IMG.horse, by: 'Rancho Salto Taíno' },
  { url: IMG.poolWide, by: 'Rancho Salto Taíno' },
  { url: IMG.treehouse, by: 'Rancho Salto Taíno' },
  { url: IMG.camping, by: 'Rancho Salto Taíno' },
  { url: IMG.foodTable, by: 'Rancho Salto Taíno' },
  { url: IMG.trails, by: 'Rancho Salto Taíno' },
  { url: IMG.sunset, by: 'Rancho Salto Taíno' },
]

function useGalleryRadius() {
  const [radius, setRadius] = useState(600)
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth
      setRadius(Math.max(320, Math.min(620, w * 0.42)))
    }
    compute()
    window.addEventListener('resize', compute)
    return () => window.removeEventListener('resize', compute)
  }, [])
  return radius
}

export function GallerySection() {
  const { t } = useLang()
  const radius = useGalleryRadius()

  const items: GalleryItem[] = t.gallery.items.map((g, i) => ({
    common: g.title,
    binomial: g.sub,
    photo: {
      url: galleryImages[i].url,
      text: g.title,
      by: galleryImages[i].by,
    },
  }))

  return (
    <section id="galeria" className="relative bg-jungle-950 grain" style={{ height: '220vh' }}>
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-0 right-0 z-20 pt-24 text-center px-5">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-sand-300">
            {t.gallery.eyebrow}
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-semibold text-sand-50">
            {t.gallery.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm md:text-base text-sand-100/60">
            {t.gallery.subtitle}
          </p>
        </div>
        <div className="h-full w-full">
          <CircularGallery items={items} radius={radius} autoRotateSpeed={0.05} />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-jungle-950 to-transparent" />
      </div>
    </section>
  )
}
