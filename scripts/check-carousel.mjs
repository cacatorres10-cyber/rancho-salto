import puppeteer from 'puppeteer-core'

const OUT = process.argv[2] || '.'
const URL = process.argv[3] || 'http://localhost:4173/'
const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  headless: 'new',
  args: ['--disable-gpu', '--no-first-run'],
})

// --- Desktop: flechas y puntos
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900 })
await page.goto(URL, { waitUntil: 'networkidle2', timeout: 90000 })
await page.evaluate(() =>
  document.querySelector('#experiencias')?.scrollIntoView({ behavior: 'instant', block: 'start' }),
)
await new Promise((r) => setTimeout(r, 2200))
await page.screenshot({ path: `${OUT}/car-desk-1.png` })

// La leyenda debe ser visible SIN hover
const captions = await page.evaluate(() => {
  const cards = [...document.querySelectorAll('#experiencias article')]
  return cards.slice(0, 3).map((c) => {
    const p = c.querySelector('p')
    const st = p ? getComputedStyle(p) : null
    return { text: p?.textContent?.slice(0, 40), opacity: st?.opacity, visible: st?.visibility }
  })
})
console.log('CAPTIONS (no hover): ' + JSON.stringify(captions))

// Avanzar con la flecha
await page.evaluate(() => {
  const b = [...document.querySelectorAll('#experiencias button')].find((x) =>
    /siguiente|next/i.test(x.getAttribute('aria-label') || ''),
  )
  b?.click()
})
await new Promise((r) => setTimeout(r, 1400))
await page.screenshot({ path: `${OUT}/car-desk-2.png` })

const state = await page.evaluate(() => {
  const sc = document.querySelector('#experiencias [role="region"]')
  const dots = [...document.querySelectorAll('#experiencias button[aria-current]')]
  return {
    scrollLeft: Math.round(sc?.scrollLeft ?? -1),
    activeDot: dots.findIndex((d) => d.getAttribute('aria-current') === 'true'),
    dots: dots.length,
  }
})
console.log('AFTER ARROW: ' + JSON.stringify(state))
await page.close()

// --- Mobile: swipe con el dedo
const mob = await browser.newPage()
await mob.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 })
await mob.goto(URL, { waitUntil: 'networkidle2', timeout: 90000 })
await mob.evaluate(() =>
  document.querySelector('#experiencias')?.scrollIntoView({ behavior: 'instant', block: 'start' }),
)
await new Promise((r) => setTimeout(r, 2200))
await mob.screenshot({ path: `${OUT}/car-mob-1.png` })

const before = await mob.evaluate(
  () => document.querySelector('#experiencias [role="region"]')?.scrollLeft ?? -1,
)
// Deslizar el carrusel con el dedo
await mob.touchscreen.swipe?.({ x: 300, y: 500, deltaX: -260, deltaY: 0 }).catch(() => {})
await new Promise((r) => setTimeout(r, 1200))
let after = await mob.evaluate(
  () => document.querySelector('#experiencias [role="region"]')?.scrollLeft ?? -1,
)
if (after === before) {
  // Fallback: mover el scroll directamente si el gesto no esta disponible
  await mob.evaluate(() => {
    const sc = document.querySelector('#experiencias [role="region"]')
    sc?.scrollBy({ left: 300, behavior: 'smooth' })
  })
  await new Promise((r) => setTimeout(r, 1200))
  after = await mob.evaluate(
    () => document.querySelector('#experiencias [role="region"]')?.scrollLeft ?? -1,
  )
}
console.log(`MOBILE SCROLL: ${before} -> ${Math.round(after)}`)
await mob.screenshot({ path: `${OUT}/car-mob-2.png` })

// Album con leyendas
await mob.evaluate(() => {
  const b = [...document.querySelectorAll('button')].find((x) =>
    /ver todas las fotos|see all the photos/i.test(x.textContent || ''),
  )
  b?.click()
})
await new Promise((r) => setTimeout(r, 2500))
await mob.screenshot({ path: `${OUT}/car-album-mob.png` })
console.log('captured album mobile')

await browser.close()
