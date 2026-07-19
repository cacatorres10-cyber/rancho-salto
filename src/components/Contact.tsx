import { useState } from 'react'
import type { FormEvent } from 'react'
import { Send } from 'lucide-react'
import { useLang } from '@/i18n'
import { whatsappLink } from '@/config'
import { Reveal } from '@/components/Reveal'

export function Contact() {
  const { t, lang } = useLang()
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [guests, setGuests] = useState('2')
  const [type, setType] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const chosenType = type || t.contact.types[0]
    const lines =
      lang === 'es'
        ? [
            'Hola Rancho Salto Taíno, quiero reservar.',
            `Nombre: ${name}`,
            `Fecha: ${date}`,
            `Personas: ${guests}`,
            `Tipo: ${chosenType}`,
            message ? `Mensaje: ${message}` : '',
          ]
        : [
            'Hello Rancho Salto Taíno, I would like to book.',
            `Name: ${name}`,
            `Date: ${date}`,
            `Guests: ${guests}`,
            `Type: ${chosenType}`,
            message ? `Message: ${message}` : '',
          ]
    window.open(whatsappLink(lines.filter(Boolean).join('\n')), '_blank')
  }

  const inputCls =
    'w-full rounded-xl border border-sand-100/20 bg-jungle-900/60 px-5 py-3.5 text-sand-50 placeholder:text-sand-100/40 outline-none focus:border-sand-300 transition-colors'

  return (
    <section id="contacto" className="relative bg-jungle-950 py-24 md:py-32 grain">
      <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
        <Reveal>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-sand-300">
            {t.contact.eyebrow}
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-semibold text-sand-50">
            {t.contact.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-sand-100/70">{t.contact.text}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <form onSubmit={handleSubmit} className="mt-12 space-y-4 text-left">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                className={inputCls}
                placeholder={t.contact.name}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                className={inputCls}
                type="date"
                aria-label={t.contact.date}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                className={inputCls}
                type="number"
                min="1"
                aria-label={t.contact.guests}
                placeholder={t.contact.guests}
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required
              />
              <select
                className={inputCls}
                value={type}
                aria-label={t.contact.type}
                onChange={(e) => setType(e.target.value)}
              >
                {t.contact.types.map((opt) => (
                  <option key={opt} value={opt} className="text-jungle-950">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <textarea
              className={inputCls}
              rows={4}
              placeholder={t.contact.message}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-sand-300 px-8 py-4 font-semibold text-jungle-950 hover:bg-sand-200 transition-colors"
            >
              <Send size={18} className="transition-transform group-hover:translate-x-1" />
              {t.contact.submit}
            </button>
            <p className="text-center text-xs text-sand-100/50">{t.contact.note}</p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
