import puppeteer from 'puppeteer-core'

const OUT = process.argv[2] || '.'
const URL = process.argv[3] || 'http://localhost:4173/'
const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  headless: 'new',
  args: ['--disable-gpu', '--no-first-run'],
})

const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900 })
await page.goto(URL, { waitUntil: 'networkidle2', timeout: 90000 })

// Seccion de excursiones
await page.evaluate(() =>
  document.querySelector('#excursiones')?.scrollIntoView({ behavior: 'instant', block: 'start' }),
)
await new Promise((r) => setTimeout(r, 2500))
await page.screenshot({ path: `${OUT}/exc-section.png` })
console.log('captured section')

// Abrir el modal con el primer boton "Ver detalles"
const opened = await page.evaluate(() => {
  const btns = [...document.querySelectorAll('#excursiones button')]
  const b = btns.find((x) => /ver detalles|see details/i.test(x.textContent || ''))
  if (!b) return false
  b.click()
  return true
})
console.log('clicked details: ' + opened)
await new Promise((r) => setTimeout(r, 1600))
await page.screenshot({ path: `${OUT}/exc-modal.png` })

const modalState = await page.evaluate(() => {
  const d = document.querySelector('[role="dialog"]')
  if (!d) return { open: false }
  return {
    open: true,
    scrollLocked: document.body.style.overflow === 'hidden',
    hasWhatsapp: !!d.querySelector('a[href*="wa.me"]'),
    waHref: d.querySelector('a[href*="wa.me"]')?.getAttribute('href')?.slice(0, 110),
    heading: d.querySelector('h3')?.textContent,
  }
})
console.log('MODAL: ' + JSON.stringify(modalState))

// Scroll interno del modal para ver el final
await page.evaluate(() => {
  const d = document.querySelector('[role="dialog"]')
  if (d) d.scrollTop = d.scrollHeight
})
await new Promise((r) => setTimeout(r, 900))
await page.screenshot({ path: `${OUT}/exc-modal-bottom.png` })

// Cerrar con Escape
await page.keyboard.press('Escape')
await new Promise((r) => setTimeout(r, 900))
const afterEsc = await page.evaluate(() => ({
  closed: !document.querySelector('[role="dialog"]'),
  scrollRestored: document.body.style.overflow !== 'hidden',
}))
console.log('AFTER ESC: ' + JSON.stringify(afterEsc))
await page.close()

// Mobile
const mob = await browser.newPage()
await mob.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 })
await mob.goto(URL, { waitUntil: 'networkidle2', timeout: 90000 })
await mob.evaluate(() =>
  document.querySelector('#excursiones')?.scrollIntoView({ behavior: 'instant', block: 'start' }),
)
await new Promise((r) => setTimeout(r, 2500))
await mob.screenshot({ path: `${OUT}/exc-mobile.png` })
await mob.evaluate(() => {
  const btns = [...document.querySelectorAll('#excursiones button')]
  btns.find((x) => /ver detalles|see details/i.test(x.textContent || ''))?.click()
})
await new Promise((r) => setTimeout(r, 1600))
await mob.screenshot({ path: `${OUT}/exc-modal-mobile.png` })
console.log('captured mobile')

await browser.close()
