import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Images } from 'lucide-react'
import { useLang } from '@/i18n'
import { PHOTOS } from '@/data/gallery'
import { Modal } from '@/components/ui/modal'

interface PhotoAlbumProps {
  open: boolean
  onClose: () => void
}

/**
 * Album completo del rancho: una sola carpeta con todas las fotos.
 * Se abre en modal y cada foto se puede ampliar con flechas.
 */
export function PhotoAlbum({ open, onClose }: PhotoAlbumProps) {
  const { t, lang } = useLang()
  const [zoom, setZoom] = useState<number | null>(null)

  // Al cerrar el album se olvida la foto ampliada
  useEffect(() => {
    if (!open) setZoom(null)
  }, [open])

  // Flechas del teclado para pasar fotos
  useEffect(() => {
    if (zoom === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setZoom((z) => (z === null ? z : (z + 1) % PHOTOS.length))
      if (e.key === 'ArrowLeft')
        setZoom((z) => (z === null ? z : (z - 1 + PHOTOS.length) % PHOTOS.length))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [zoom])

  const photo = zoom === null ? null : PHOTOS[zoom]

  return (
    <Modal
      open={open}
      // Con una foto ampliada, cerrar vuelve al mosaico en vez de salir del album
      onClose={() => (zoom !== null ? setZoom(null) : onClose())}
      labelledBy="album-title"
      closeLabel={t.album.close}
    >
      {photo ? (
        <div className="relative bg-jungle-950">
          <img
            src={photo.src}
            alt={photo[lang]}
            className="max-h-[78svh] w-full bg-jungle-950 object-contain"
          />
          <div className="flex items-center justify-between gap-4 px-5 py-4">
            <button
              onClick={() => setZoom((z) => (z! - 1 + PHOTOS.length) % PHOTOS.length)}
              aria-label={t.album.prev}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-sand-100/20 text-sand-100 transition-colors hover:bg-sand-100/10"
            >
              <ChevronLeft size={22} />
            </button>
            <p className="text-center text-sm text-sand-100/80">
              {photo[lang]}
              <span className="ml-2 text-sand-100/40">
                {zoom! + 1}/{PHOTOS.length}
              </span>
            </p>
            <button
              onClick={() => setZoom((z) => (z! + 1) % PHOTOS.length)}
              aria-label={t.album.next}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-sand-100/20 text-sand-100 transition-colors hover:bg-sand-100/10"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      ) : (
        <div className="p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-eyebrow">
            {t.album.eyebrow}
          </p>
          <h3
            id="album-title"
            className="mt-1 font-display text-3xl font-semibold text-foreground sm:text-4xl"
          >
            {t.album.title}
          </h3>
          <p className="mt-2 text-muted-foreground">
            {PHOTOS.length} {t.album.count}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {PHOTOS.map((p, i) => (
              <button
                key={p.src}
                onClick={() => setZoom(i)}
                className="group relative aspect-square overflow-hidden rounded-xl text-left"
                aria-label={p[lang]}
              >
                <img
                  src={p.src}
                  alt={p[lang]}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ objectPosition: p.pos }}
                />
                {/* La leyenda se ve siempre, tambien en celular */}
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-jungle-950/90 via-jungle-950/50 to-transparent px-3 pb-2.5 pt-8">
                  <span className="block text-[11px] font-medium leading-tight text-sand-50 sm:text-xs">
                    {p[lang]}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </Modal>
  )
}

/** Boton que abre el album. */
export function PhotoAlbumButton({ className }: { className?: string }) {
  const { t } = useLang()
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>
        <Images size={20} />
        {t.album.cta}
      </button>
      <PhotoAlbum open={open} onClose={() => setOpen(false)} />
    </>
  )
}
