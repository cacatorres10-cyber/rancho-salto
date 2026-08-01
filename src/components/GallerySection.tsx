import { ThreeDPhotoCarousel } from '@/components/ui/3d-carousel'
import { useLang } from '@/i18n'
import { IMG } from '@/assets/media'
import { Reveal } from '@/components/Reveal'

const galleryImages = [
  IMG.aereaPiscinas,
  IMG.galZipline2,
  IMG.galPiscina,
  IMG.camping1,
  IMG.palapa,
  IMG.atardecerAereo,
  IMG.galFamilia,
  IMG.galJardines,
]

export function GallerySection() {
  const { t } = useLang()

  return (
    <section id="galeria" className="relative bg-jungle-950 py-24 md:py-28 grain overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-sand-300">
            {t.gallery.eyebrow}
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-semibold text-sand-50">
            {t.gallery.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm md:text-base text-sand-100/60">
            {t.gallery.subtitle}
          </p>
        </Reveal>
      </div>
      <Reveal delay={0.1}>
        <div className="mt-8">
          <ThreeDPhotoCarousel images={galleryImages} />
        </div>
      </Reveal>
    </section>
  )
}
